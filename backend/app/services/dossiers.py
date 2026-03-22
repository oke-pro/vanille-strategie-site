"""Service CRUD pour la gestion des dossiers — Portail V2."""

from __future__ import annotations

import uuid

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.models.db_models import ClientDB, DossierDB, DossierEventDB, UserDB
from app.models.dossiers import DossierCreate, DossierUpdate, TimelineEventCreate


async def list_dossiers(
    db: AsyncSession,
    user: UserDB,
    *,
    page: int = 1,
    page_size: int = 20,
    type_filter: str | None = None,
    status_filter: str | None = None,
    client_id: uuid.UUID | None = None,
    assigned_to: uuid.UUID | None = None,
) -> list[DossierDB]:
    """Liste des dossiers. Staff voit tout, client voit les siens."""
    query = select(DossierDB)

    if user.role == "client":
        # Le client ne voit que ses propres dossiers
        client_result = await db.execute(
            select(ClientDB).where(ClientDB.user_id == user.id)
        )
        client = client_result.scalar_one_or_none()
        if not client:
            return []
        query = query.where(DossierDB.client_id == client.id)
    else:
        # Staff : filtres optionnels
        if client_id:
            query = query.where(DossierDB.client_id == client_id)
        if assigned_to:
            query = query.where(DossierDB.assigned_to == assigned_to)

    if type_filter:
        query = query.where(DossierDB.type == type_filter)
    if status_filter:
        query = query.where(DossierDB.status == status_filter)

    query = query.order_by(DossierDB.created_at.desc())
    query = query.offset((page - 1) * page_size).limit(page_size)

    result = await db.execute(query)
    return list(result.scalars().all())


async def get_dossier(
    db: AsyncSession, dossier_id: uuid.UUID, user: UserDB
) -> DossierDB:
    """Récupère un dossier avec vérification d'accès."""
    result = await db.execute(
        select(DossierDB)
        .options(selectinload(DossierDB.events).selectinload(DossierEventDB.actor))
        .where(DossierDB.id == dossier_id)
    )
    dossier = result.scalar_one_or_none()
    if not dossier:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Dossier introuvable",
        )

    # Vérifier l'accès pour les clients
    if user.role == "client":
        client_result = await db.execute(
            select(ClientDB).where(ClientDB.user_id == user.id)
        )
        client = client_result.scalar_one_or_none()
        if not client or dossier.client_id != client.id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Accès refusé à ce dossier",
            )

    return dossier


async def create_dossier(
    db: AsyncSession, data: DossierCreate, user: UserDB
) -> DossierDB:
    """Crée un dossier et ajoute un événement 'Dossier créé'."""
    # Vérifier que le client existe
    client_result = await db.execute(
        select(ClientDB).where(ClientDB.id == data.client_id)
    )
    if not client_result.scalar_one_or_none():
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Client introuvable",
        )

    dossier = DossierDB(
        client_id=data.client_id,
        type=data.type,
        title=data.title,
        priority=data.priority,
        due_date=data.due_date,
        steps=data.steps,
        status="draft",
        current_step=0,
        assigned_to=user.id,
    )
    db.add(dossier)
    await db.flush()

    # Événement de création
    event = DossierEventDB(
        dossier_id=dossier.id,
        actor_id=user.id,
        type="status_change",
        title="Dossier créé",
        description=f"Le dossier « {data.title} » a été créé.",
    )
    db.add(event)
    await db.commit()
    await db.refresh(dossier)

    return dossier


async def update_dossier(
    db: AsyncSession, dossier_id: uuid.UUID, data: DossierUpdate, user: UserDB
) -> DossierDB:
    """Met à jour un dossier. Ajoute un événement si le statut change."""
    dossier = await get_dossier(db, dossier_id, user)

    update_data = data.model_dump(exclude_unset=True)
    old_status = dossier.status

    for field, value in update_data.items():
        setattr(dossier, field, value)

    # Si le statut a changé, ajouter un événement
    if "status" in update_data and update_data["status"] != old_status:
        event = DossierEventDB(
            dossier_id=dossier.id,
            actor_id=user.id,
            type="status_change",
            title=f"Statut modifié : {old_status} → {update_data['status']}",
            description=f"Le statut du dossier est passé de « {old_status} » à « {update_data['status']} ».",
        )
        db.add(event)

    await db.commit()
    await db.refresh(dossier)
    return dossier


async def add_event(
    db: AsyncSession,
    dossier_id: uuid.UUID,
    event_data: TimelineEventCreate,
    user: UserDB,
) -> DossierEventDB:
    """Ajoute un événement à la timeline d'un dossier."""
    # Vérifier l'accès
    await get_dossier(db, dossier_id, user)

    event = DossierEventDB(
        dossier_id=dossier_id,
        actor_id=user.id,
        type=event_data.type,
        title=event_data.title,
        description=event_data.description,
        extra_data=event_data.metadata,
    )
    db.add(event)
    await db.commit()
    await db.refresh(event)

    # Charger l'actor
    result = await db.execute(
        select(DossierEventDB)
        .options(selectinload(DossierEventDB.actor))
        .where(DossierEventDB.id == event.id)
    )
    return result.scalar_one()


async def list_events(
    db: AsyncSession, dossier_id: uuid.UUID
) -> list[DossierEventDB]:
    """Liste les événements d'un dossier triés par date."""
    result = await db.execute(
        select(DossierEventDB)
        .options(selectinload(DossierEventDB.actor))
        .where(DossierEventDB.dossier_id == dossier_id)
        .order_by(DossierEventDB.created_at.desc())
    )
    return list(result.scalars().all())
