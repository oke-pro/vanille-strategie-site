"""Router API pour la gestion des dossiers — Portail V2 Vanille Stratégie."""

from __future__ import annotations

import uuid

from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.auth.dependencies import get_current_user, require_role
from app.database import get_db
from app.models.db_models import UserDB
from app.models.dossiers import (
    DossierCreate,
    DossierDetailResponse,
    DossierResponse,
    DossierUpdate,
    TimelineEventCreate,
    TimelineEventResponse,
)
from app.services import dossiers as dossier_service

router = APIRouter(prefix="/dossiers", tags=["dossiers"])


@router.get("", response_model=list[DossierResponse])
async def list_dossiers(
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    type: str | None = Query(None),
    status: str | None = Query(None),
    client_id: uuid.UUID | None = Query(None),
    assigned_to: uuid.UUID | None = Query(None),
    user: UserDB = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Liste des dossiers. Staff : tous. Client : les siens."""
    dossiers = await dossier_service.list_dossiers(
        db,
        user,
        page=page,
        page_size=page_size,
        type_filter=type,
        status_filter=status,
        client_id=client_id,
        assigned_to=assigned_to,
    )
    return dossiers


@router.post("", response_model=DossierResponse, status_code=201)
async def create_dossier(
    body: DossierCreate,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Crée un nouveau dossier (staff uniquement)."""
    dossier = await dossier_service.create_dossier(db, body, user)
    return dossier


@router.get("/{dossier_id}", response_model=DossierDetailResponse)
async def get_dossier(
    dossier_id: uuid.UUID,
    user: UserDB = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Récupère un dossier avec sa timeline."""
    dossier = await dossier_service.get_dossier(db, dossier_id, user)
    events = await dossier_service.list_events(db, dossier_id)

    return DossierDetailResponse(
        dossier=dossier,
        events=[
            TimelineEventResponse(
                id=e.id,
                actor=f"{e.actor.first_name} {e.actor.last_name}",
                type=e.type,
                title=e.title,
                description=e.description,
                metadata=e.extra_data,
                created_at=e.created_at,
            )
            for e in events
        ],
    )


@router.patch("/{dossier_id}", response_model=DossierResponse)
async def update_dossier(
    dossier_id: uuid.UUID,
    body: DossierUpdate,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Met à jour un dossier (staff uniquement)."""
    dossier = await dossier_service.update_dossier(db, dossier_id, body, user)
    return dossier


@router.post("/{dossier_id}/events", response_model=TimelineEventResponse, status_code=201)
async def add_event(
    dossier_id: uuid.UUID,
    body: TimelineEventCreate,
    user: UserDB = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Ajoute un événement à la timeline (staff ou client)."""
    event = await dossier_service.add_event(db, dossier_id, body, user)
    return TimelineEventResponse(
        id=event.id,
        actor=f"{event.actor.first_name} {event.actor.last_name}",
        type=event.type,
        title=event.title,
        description=event.description,
        metadata=event.extra_data,
        created_at=event.created_at,
    )
