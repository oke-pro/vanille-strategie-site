from fastapi import APIRouter, Depends, HTTPException, Header

from app.config import settings
from app.services.leads import get_all_leads, get_leads_count

router = APIRouter(prefix="/admin", tags=["Admin"])


async def verify_api_key(x_api_key: str = Header(...)):
    """Vérifie la clé API pour les endpoints admin."""
    if not settings.api_key or x_api_key != settings.api_key:
        raise HTTPException(status_code=403, detail="Invalid API key")


@router.get("/leads", dependencies=[Depends(verify_api_key)])
async def list_leads():
    """Liste tous les leads (protégé par API key)."""
    leads = get_all_leads()
    return {
        "count": len(leads),
        "leads": [l.model_dump() for l in leads],
    }


@router.get("/leads/stats", dependencies=[Depends(verify_api_key)])
async def leads_stats():
    """Statistiques des leads (protégé par API key)."""
    return get_leads_count()
