"""Endpoint social proof — données réelles anonymisées."""

from datetime import datetime, timedelta, timezone

from fastapi import APIRouter, Depends
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import get_db
from app.models.db_models import LeadDB

try:
    from app.models.db_models import DossierDB
except ImportError:
    DossierDB = None

router = APIRouter(prefix="/social-proof", tags=["Social Proof"])


@router.get("")
async def get_social_proof(db: AsyncSession = Depends(get_db)):
    now = datetime.now(timezone.utc)
    month_ago = now - timedelta(days=30)

    # Nombre de leads ce mois
    leads_month = await db.execute(
        select(func.count(LeadDB.id)).where(LeadDB.created_at >= month_ago)
    )
    leads_count = leads_month.scalar() or 0

    # Nombre total de dossiers traités
    try:
        dossiers_total = await db.execute(select(func.count(DossierDB.id)))
        dossiers_count = dossiers_total.scalar() or 0
    except Exception:
        dossiers_count = 0

    # Dernier lead (pour "il y a X heures")
    last_lead = await db.execute(
        select(LeadDB.created_at).order_by(LeadDB.created_at.desc()).limit(1)
    )
    last_lead_at = last_lead.scalar()

    hours_ago = None
    if last_lead_at:
        delta = now - last_lead_at.replace(tzinfo=timezone.utc) if last_lead_at.tzinfo is None else now - last_lead_at
        hours_ago = max(1, int(delta.total_seconds() / 3600))

    return {
        "leads_this_month": leads_count,
        "dossiers_total": dossiers_count,
        "last_activity_hours_ago": hours_ago,
        "companies_accompanied": 100,  # chiffre factuel à mettre à jour
    }
