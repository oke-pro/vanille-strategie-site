"""Router API pour la gestion des clients — Portail V2 Vanille Stratégie."""

from __future__ import annotations

import uuid

from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.auth.dependencies import require_role
from app.database import get_db
from app.models.clients_portal import (
    ClientCreate,
    ClientListResponse,
    ClientResponse,
    ClientUpdate,
)
from app.models.db_models import UserDB
from app.models.dossiers import DossierResponse
from app.services import clients_portal as client_service
from app.services import dossiers as dossier_service

router = APIRouter(prefix="/clients", tags=["clients"])


def _client_to_response(client) -> ClientResponse:
    """Convertit un ClientDB en ClientResponse."""
    return ClientResponse(
        id=client.id,
        user=client.user,
        company_name=client.company_name,
        company_type=client.company_type,
        profil=client.profil,
        nationality=client.nationality,
        status=client.status,
        assigned_to=client.assigned_to,
        notes=client.notes,
        created_at=client.created_at,
        updated_at=client.updated_at,
    )


@router.get("", response_model=ClientListResponse)
async def list_clients(
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    status: str | None = Query(None),
    profil: str | None = Query(None),
    search: str | None = Query(None),
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Liste paginée des clients (staff uniquement)."""
    clients, total = await client_service.list_clients(
        db,
        page=page,
        page_size=page_size,
        status_filter=status,
        profil_filter=profil,
        search=search,
    )
    return ClientListResponse(
        items=[_client_to_response(c) for c in clients],
        total=total,
    )


@router.post("", response_model=ClientResponse, status_code=201)
async def create_client(
    body: ClientCreate,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Crée un nouveau client + compte utilisateur (staff uniquement)."""
    client = await client_service.create_client(db, body)
    return _client_to_response(client)


@router.get("/{client_id}", response_model=ClientResponse)
async def get_client(
    client_id: uuid.UUID,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Récupère la fiche complète d'un client (staff uniquement)."""
    client = await client_service.get_client(db, client_id)
    return _client_to_response(client)


@router.patch("/{client_id}", response_model=ClientResponse)
async def update_client(
    client_id: uuid.UUID,
    body: ClientUpdate,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Met à jour les informations d'un client (staff uniquement)."""
    client = await client_service.update_client(db, client_id, body)
    return _client_to_response(client)


@router.get("/{client_id}/dossiers", response_model=list[DossierResponse])
async def list_client_dossiers(
    client_id: uuid.UUID,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Liste les dossiers d'un client spécifique (staff uniquement)."""
    dossiers = await dossier_service.list_dossiers(db, user, client_id=client_id)
    return dossiers
