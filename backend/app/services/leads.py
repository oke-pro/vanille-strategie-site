import logging
from datetime import datetime, timezone
from uuid import uuid4

from sqlalchemy import select, func

from app.database import async_session
from app.models.db_models import LeadDB
from app.models.leads import Lead
from app.services.email import send_confirmation_email, send_guide_fiscal, send_lead_notification
from app.services.scoring import compute_lead_score

logger = logging.getLogger(__name__)


async def create_lead(
    lead_type: str,
    data: dict,
    source_page: str | None = None,
    ip: str | None = None,
) -> Lead:
    """Crée un lead en base PostgreSQL, notifie Didier, confirme au prospect."""
    lead_id = uuid4().hex[:12]
    now = datetime.now(timezone.utc)

    # Persist to PostgreSQL
    async with async_session() as session:
        db_lead = LeadDB(
            id=lead_id,
            type=lead_type,
            data=data,
            source_page=source_page,
            ip=ip,
            created_at=now,
        )
        session.add(db_lead)
        await session.commit()

    logger.info(f"Lead saved to DB: {lead_id} ({lead_type})")

    # Compute and persist lead score
    score, score_label = compute_lead_score(lead_type, data)
    async with async_session() as session:
        db_lead = await session.get(LeadDB, lead_id)
        if db_lead:
            db_lead.score = score
            db_lead.score_label = score_label
            await session.commit()
    logger.info(f"Lead {lead_id} scored: {score} ({score_label})")

    # Build response model
    lead = Lead(
        id=lead_id,
        type=lead_type,
        data=data,
        created_at=now,
        source_page=source_page,
        ip=ip,
        score=score,
        score_label=score_label,
    )

    # Notification email à Didier (async, non-bloquant)
    notified = await send_lead_notification(lead_type, data, score=score, score_label=score_label)
    lead.notified = notified

    # Update notified status in DB
    if notified:
        async with async_session() as session:
            db_lead = await session.get(LeadDB, lead_id)
            if db_lead:
                db_lead.notified = True
                await session.commit()

    # Email de confirmation au prospect (segmenté par profil)
    email = data.get("email")
    prenom = data.get("prenom", "")
    profil = data.get("profil", "")
    budget = data.get("budget")
    if email and prenom:
        await send_confirmation_email(email, prenom, profil=profil, budget=budget)

    # Guide fiscal pour les leads exit intent
    if email and source_page == "exit_intent_guide":
        await send_guide_fiscal(email)

    return lead


async def get_all_leads() -> list[dict]:
    """Retourne tous les leads depuis PostgreSQL."""
    async with async_session() as session:
        result = await session.execute(
            select(LeadDB).order_by(LeadDB.created_at.desc())
        )
        leads = result.scalars().all()
        return [
            {
                "id": l.id,
                "type": l.type,
                "data": l.data,
                "source_page": l.source_page,
                "created_at": l.created_at.isoformat(),
                "notified": l.notified,
                "score": l.score,
                "score_label": l.score_label,
            }
            for l in leads
        ]


async def get_hot_leads() -> list[dict]:
    """Retourne les leads hot et vip (score >= 50)."""
    async with async_session() as session:
        result = await session.execute(
            select(LeadDB)
            .where(LeadDB.score >= 50)
            .order_by(LeadDB.score.desc(), LeadDB.created_at.desc())
        )
        leads = result.scalars().all()
        return [
            {
                "id": l.id,
                "type": l.type,
                "data": l.data,
                "source_page": l.source_page,
                "created_at": l.created_at.isoformat(),
                "notified": l.notified,
                "score": l.score,
                "score_label": l.score_label,
            }
            for l in leads
        ]


async def get_leads_count() -> dict:
    """Stats leads depuis PostgreSQL."""
    async with async_session() as session:
        total = await session.scalar(select(func.count(LeadDB.id)))
        result = await session.execute(
            select(LeadDB.type, func.count(LeadDB.id)).group_by(LeadDB.type)
        )
        by_type = {row[0]: row[1] for row in result.all()}
        return {"total": total or 0, "by_type": by_type}
