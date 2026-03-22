"""Router API pour le Pipeline CRM -- Portail V2 Phase 4."""

from __future__ import annotations

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.auth.dependencies import require_role
from app.database import get_db
from app.models.db_models import UserDB
from app.models.pipeline import (
    AssignRequest,
    DashboardStats,
    LeadConvertRequest,
    PipelineView,
    StageUpdate,
)
from app.services import pipeline as pipeline_service

router = APIRouter(prefix="/pipeline", tags=["pipeline"])


@router.get("", response_model=PipelineView)
async def get_pipeline(
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Vue pipeline : leads groupes par stage."""
    return await pipeline_service.get_pipeline_view(db)


@router.patch("/leads/{lead_id}/stage")
async def update_stage(
    lead_id: str,
    body: StageUpdate,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Deplacer un lead dans le pipeline."""
    await pipeline_service.update_lead_stage(db, lead_id, body.pipeline_stage)
    return {"ok": True}


@router.patch("/leads/{lead_id}/assign")
async def assign_lead(
    lead_id: str,
    body: AssignRequest,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Assigner un staff a un lead."""
    await pipeline_service.assign_lead(db, lead_id, body.assigned_to)
    return {"ok": True}


@router.post("/leads/{lead_id}/convert")
async def convert_lead(
    lead_id: str,
    body: LeadConvertRequest,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Convertir un lead en client."""
    client = await pipeline_service.convert_lead_to_client(db, lead_id, body)
    return {"ok": True, "client_id": str(client.id)}


@router.get("/dashboard", response_model=DashboardStats)
async def get_dashboard(
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Statistiques reelles du dashboard."""
    return await pipeline_service.get_dashboard_stats(db)
