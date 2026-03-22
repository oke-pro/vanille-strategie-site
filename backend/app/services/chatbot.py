import json
import logging
import re
from datetime import datetime, timezone
from uuid import uuid4

import anthropic
import httpx
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.config import settings
from app.models.db_models import ChatConversationDB, ChatMessageDB, LeadDB

logger = logging.getLogger(__name__)

SYSTEM_PROMPT = """Tu es l'assistant virtuel de Vanille Stratégie, cabinet d'expertise comptable fondé par Didier Laroussinie, implanté à l'île Maurice depuis 2012.

TON RÔLE :
- Répondre aux questions sur l'expatriation à Maurice, la fiscalité, la création de société, les permis de résidence, la comptabilité
- Être professionnel, précis et chaleureux — comme un expert qui connaît le terrain
- Collecter naturellement les informations du visiteur pour qualifier le prospect

CE QUE TU SAIS :
- Maurice : IS 15% flat, 0% dividendes, 0% plus-values, 0% droits de succession
- Structures : Domestic Company, GBC (Partial Exemption 80% → taux effectif 3%), Authorised Company
- Permis : OP Investor (50k$/100k$), OP Self-Employed (50k$), ProPass (30k MUR/mois), Expert Pass (250k MUR/mois), Premium Visa (gratuit, 1 an)
- Convention fiscale France-Maurice (1980, amendée 2011)
- Finance Act 2025 : Fair Share Contribution, QDMTT, Transfer Pricing
- Le cabinet offre : création société, permis résidence, comptabilité/fiscalité, RH/paie, immobilier, M&A

CE QUE TU DOIS COLLECTER (naturellement, pas comme un formulaire) :
- Prénom et nom
- Email
- Téléphone / WhatsApp
- Profil : entrepreneur, digital nomad, retraité, dirigeant d'entreprise
- Budget d'investissement approximatif
- Timeline : quand ils envisagent de s'installer

RÈGLES ABSOLUES :
- TOUJOURS dire "Didier Laroussinie" (nom complet), JAMAIS "Didier" seul
- Ne JAMAIS mentionner de logiciels comptables concurrents (QuickBooks, Xero, Sage, Pennylane, etc.)
- Ne JAMAIS donner de conseils fiscaux définitifs — toujours recommander un RDV avec Didier Laroussinie pour une analyse personnalisée
- Ne JAMAIS inventer des chiffres ou des lois — si tu ne sais pas, dis-le et recommande de contacter le cabinet
- Quand le prospect semble qualifié, proposer un RDV : "Souhaitez-vous planifier un appel avec Didier Laroussinie pour approfondir votre projet ?"

FORMAT DE RÉPONSE :
Utilise du formatage pour structurer tes réponses :
- **Gras** pour les points importants (taux, montants, noms de structures)
- Listes à puces (- item) pour énumérer des avantages ou options
- Listes numérotées (1. 2. 3.) pour les étapes d'un processus
- Paragraphes courts (2-3 phrases max)
Sois concis : 3-4 paragraphes max par réponse. Ne fais pas de pavés.

Si tu détectes que le visiteur partage des infos personnelles (nom, email, téléphone, etc.), ajoute à la FIN de ta réponse (sur une ligne séparée, invisible pour l'utilisateur) :
[PROSPECT_DATA:{"name":"...","email":"...","phone":"...","profil":"...","budget":"..."}]
Ne mets que les champs qui ont été mentionnés."""

PROSPECT_DATA_PATTERN = re.compile(r"\[PROSPECT_DATA:\s*(\{[^}]+\})\]")


def extract_prospect_data(response_text: str) -> tuple[str, dict | None]:
    """Parse response for [PROSPECT_DATA:{...}], return clean text and data."""
    match = PROSPECT_DATA_PATTERN.search(response_text)
    if not match:
        return response_text.strip(), None

    try:
        data = json.loads(match.group(1))
    except json.JSONDecodeError:
        logger.warning("Failed to parse PROSPECT_DATA JSON: %s", match.group(1))
        return PROSPECT_DATA_PATTERN.sub("", response_text).strip(), None

    clean_text = PROSPECT_DATA_PATTERN.sub("", response_text).strip()
    return clean_text, data


async def _geolocate_ip(ip: str) -> tuple[str | None, str | None]:
    """Resolve country + city from IP using ip-api.com (free, no key)."""
    if not ip or ip in ("127.0.0.1", "0.0.0.0", "::1"):
        return None, None
    try:
        async with httpx.AsyncClient(timeout=3.0) as client:
            resp = await client.get(
                f"http://ip-api.com/json/{ip}",
                params={"fields": "country,city"},
            )
            if resp.status_code == 200:
                data = resp.json()
                return data.get("country"), data.get("city")
    except Exception:
        logger.warning("Geolocation failed for IP %s", ip)
    return None, None


async def _get_or_create_conversation(
    db: AsyncSession,
    visitor_id: str,
    page_url: str | None,
    visitor_ip: str | None,
) -> ChatConversationDB:
    """Retrieve active conversation for visitor or create a new one."""
    result = await db.execute(
        select(ChatConversationDB)
        .where(ChatConversationDB.visitor_id == visitor_id)
        .where(ChatConversationDB.status == "active")
        .order_by(ChatConversationDB.created_at.desc())
        .limit(1)
    )
    conversation = result.scalar_one_or_none()

    if conversation:
        return conversation

    # Geolocate IP for new conversations
    country, city = await _geolocate_ip(visitor_ip or "")

    conversation = ChatConversationDB(
        visitor_id=visitor_id,
        page_url=page_url,
        visitor_ip=visitor_ip,
        visitor_country=country,
        visitor_city=city,
    )
    db.add(conversation)
    await db.flush()
    return conversation


async def update_lead_from_chat(
    db: AsyncSession,
    conversation: ChatConversationDB,
    prospect_data: dict,
) -> None:
    """Create or update a LeadDB from collected chat prospect data."""
    # Update conversation visitor fields
    if prospect_data.get("name"):
        conversation.visitor_name = prospect_data["name"]
    if prospect_data.get("email"):
        conversation.visitor_email = prospect_data["email"]
    if prospect_data.get("phone"):
        conversation.visitor_phone = prospect_data["phone"]
    if prospect_data.get("profil"):
        conversation.visitor_profil = prospect_data["profil"]
    if prospect_data.get("budget"):
        conversation.visitor_budget = prospect_data["budget"]

    # Compute simple qualification score
    score = 0
    if conversation.visitor_name:
        score += 10
    if conversation.visitor_email:
        score += 20
    if conversation.visitor_phone:
        score += 15
    if conversation.visitor_profil:
        score += 10
    if conversation.visitor_budget:
        score += 15
    conversation.qualification_score = score

    if score >= 30:
        conversation.status = "qualified"

    # Create or update lead
    if not conversation.lead_id:
        lead_id = uuid4().hex[:12]
        lead_data = {
            k: v for k, v in {
                "nom": conversation.visitor_name,
                "email": conversation.visitor_email,
                "telephone": conversation.visitor_phone,
                "profil": conversation.visitor_profil,
                "budget": conversation.visitor_budget,
            }.items() if v
        }
        lead = LeadDB(
            id=lead_id,
            type="chatbot",
            data=lead_data,
            source_page=conversation.page_url,
            ip=conversation.visitor_ip,
            score=score,
            score_label="hot" if score >= 50 else "warm" if score >= 30 else "cold",
            created_at=datetime.now(timezone.utc),
        )
        db.add(lead)
        await db.flush()
        conversation.lead_id = lead_id
        logger.info("Created lead %s from chatbot conversation", lead_id)
    else:
        # Update existing lead
        lead = await db.get(LeadDB, conversation.lead_id)
        if lead:
            lead_data = lead.data or {}
            if conversation.visitor_name:
                lead_data["nom"] = conversation.visitor_name
            if conversation.visitor_email:
                lead_data["email"] = conversation.visitor_email
            if conversation.visitor_phone:
                lead_data["telephone"] = conversation.visitor_phone
            if conversation.visitor_profil:
                lead_data["profil"] = conversation.visitor_profil
            if conversation.visitor_budget:
                lead_data["budget"] = conversation.visitor_budget
            lead.data = lead_data
            lead.score = score
            lead.score_label = "hot" if score >= 50 else "warm" if score >= 30 else "cold"


async def chat(
    db: AsyncSession,
    user_message: str,
    visitor_id: str,
    page_url: str | None = None,
    visitor_ip: str | None = None,
) -> tuple[str, str]:
    """
    Main chat function.
    Returns (assistant_response, conversation_id).
    """
    # 1. Get or create conversation
    conversation = await _get_or_create_conversation(db, visitor_id, page_url, visitor_ip)

    # 2. Save user message
    user_msg = ChatMessageDB(
        conversation_id=conversation.id,
        role="user",
        content=user_message,
    )
    db.add(user_msg)
    await db.flush()

    # 3. Load last 20 messages for context
    result = await db.execute(
        select(ChatMessageDB)
        .where(ChatMessageDB.conversation_id == conversation.id)
        .order_by(ChatMessageDB.created_at.asc())
        .limit(20)
    )
    history = result.scalars().all()

    messages = [
        {"role": msg.role, "content": msg.content}
        for msg in history
    ]

    # 4. Call Claude Haiku
    try:
        if not settings.anthropic_api_key:
            raise ValueError("ANTHROPIC_API_KEY not configured")
        client = anthropic.AsyncAnthropic(api_key=settings.anthropic_api_key)
        response = await client.messages.create(
            model="claude-haiku-4-5-20251001",
            max_tokens=1024,
            system=SYSTEM_PROMPT,
            messages=messages,
        )
        raw_response = response.content[0].text
    except Exception as e:
        logger.error("Anthropic API error: %s (type: %s)", e, type(e).__name__)
        raw_response = (
            "Je suis désolé, je rencontre un problème technique temporaire. "
            "N'hésitez pas à nous contacter directement par WhatsApp au +230 59 43 74 83 "
            "ou par email à dl@vanillestrategie.fr."
        )

    # 5. Extract prospect data
    clean_response, prospect_data = extract_prospect_data(raw_response)

    # 6. Update lead if data collected
    if prospect_data:
        await update_lead_from_chat(db, conversation, prospect_data)

    # 7. Save assistant message
    assistant_msg = ChatMessageDB(
        conversation_id=conversation.id,
        role="assistant",
        content=clean_response,
    )
    db.add(assistant_msg)

    # 8. Commit all changes
    await db.commit()

    return clean_response, str(conversation.id)


async def get_chat_history(
    db: AsyncSession,
    visitor_id: str,
) -> list[dict]:
    """Return message history for a visitor's active conversation."""
    result = await db.execute(
        select(ChatConversationDB)
        .where(ChatConversationDB.visitor_id == visitor_id)
        .where(ChatConversationDB.status.in_(["active", "qualified"]))
        .order_by(ChatConversationDB.created_at.desc())
        .limit(1)
    )
    conversation = result.scalar_one_or_none()
    if not conversation:
        return []

    result = await db.execute(
        select(ChatMessageDB)
        .where(ChatMessageDB.conversation_id == conversation.id)
        .order_by(ChatMessageDB.created_at.asc())
    )
    messages = result.scalars().all()
    return [
        {
            "role": msg.role,
            "content": msg.content,
            "created_at": msg.created_at,
        }
        for msg in messages
    ]
