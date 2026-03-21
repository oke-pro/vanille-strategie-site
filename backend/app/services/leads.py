import logging
from datetime import datetime, timezone
from uuid import uuid4

from app.models.leads import Lead
from app.services.email import send_confirmation_email, send_lead_notification

logger = logging.getLogger(__name__)

# In-memory store pour MVP — remplacer par DB (PostgreSQL) en prod
_leads: list[Lead] = []


async def create_lead(
    lead_type: str,
    data: dict,
    source_page: str | None = None,
    ip: str | None = None,
) -> Lead:
    """Crée un lead, notifie Didier, envoie un email de confirmation au prospect."""
    lead = Lead(
        id=uuid4().hex[:12],
        type=lead_type,
        data=data,
        created_at=datetime.now(timezone.utc),
        source_page=source_page,
        ip=ip,
    )

    _leads.append(lead)
    logger.info(f"New lead created: {lead.id} ({lead_type})")

    # Notification email à Didier (async, non-bloquant)
    notified = await send_lead_notification(lead_type, data)
    lead.notified = notified

    # Email de confirmation au prospect (si email présent)
    email = data.get("email")
    prenom = data.get("prenom", "")
    if email and prenom:
        await send_confirmation_email(email, prenom)

    return lead


def get_all_leads() -> list[Lead]:
    """Retourne tous les leads (pour le dashboard admin)."""
    return sorted(_leads, key=lambda l: l.created_at, reverse=True)


def get_leads_count() -> dict:
    """Stats leads."""
    return {
        "total": len(_leads),
        "by_type": {
            t: sum(1 for l in _leads if l.type == t)
            for t in {l.type for l in _leads}
        },
    }
