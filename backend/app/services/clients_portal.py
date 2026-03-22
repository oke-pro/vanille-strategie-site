"""Service CRUD pour la gestion des clients — Portail V2."""

from __future__ import annotations

import secrets
import uuid

from fastapi import HTTPException, status
from sqlalchemy import func, or_, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.auth.passwords import hash_password
from app.models.clients_portal import ClientCreate, ClientUpdate
from app.models.db_models import ClientDB, UserDB


async def list_clients(
    db: AsyncSession,
    *,
    page: int = 1,
    page_size: int = 20,
    status_filter: str | None = None,
    profil_filter: str | None = None,
    search: str | None = None,
) -> tuple[list[ClientDB], int]:
    """Liste paginée des clients avec filtres optionnels."""
    query = select(ClientDB).options(selectinload(ClientDB.user))

    if status_filter:
        query = query.where(ClientDB.status == status_filter)
    if profil_filter:
        query = query.where(ClientDB.profil == profil_filter)
    if search:
        pattern = f"%{search}%"
        query = query.join(ClientDB.user).where(
            or_(
                UserDB.first_name.ilike(pattern),
                UserDB.last_name.ilike(pattern),
                UserDB.email.ilike(pattern),
                ClientDB.company_name.ilike(pattern),
            )
        )

    # Total count
    count_query = select(func.count()).select_from(query.subquery())
    total_result = await db.execute(count_query)
    total = total_result.scalar() or 0

    # Paginated results
    query = query.order_by(ClientDB.created_at.desc())
    query = query.offset((page - 1) * page_size).limit(page_size)
    result = await db.execute(query)
    clients = list(result.scalars().all())

    return clients, total


async def get_client(db: AsyncSession, client_id: uuid.UUID) -> ClientDB:
    """Récupère un client par ID avec ses relations."""
    result = await db.execute(
        select(ClientDB)
        .options(selectinload(ClientDB.user))
        .where(ClientDB.id == client_id)
    )
    client = result.scalar_one_or_none()
    if not client:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Client introuvable",
        )
    return client


async def create_client(db: AsyncSession, data: ClientCreate) -> ClientDB:
    """Crée un utilisateur + profil client. Génère un mot de passe temporaire."""
    # Vérifier que l'email n'existe pas déjà
    existing = await db.execute(select(UserDB).where(UserDB.email == data.user_email))
    if existing.scalar_one_or_none():
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Un utilisateur avec cet email existe déjà",
        )

    # Générer un mot de passe temporaire
    temp_password = secrets.token_urlsafe(12)

    # Créer le user
    user = UserDB(
        email=data.user_email,
        hashed_password=hash_password(temp_password),
        first_name=data.first_name,
        last_name=data.last_name,
        phone=data.phone,
        role="client",
        is_active=True,
        email_verified=False,
    )
    db.add(user)
    await db.flush()  # Pour obtenir l'ID du user

    # Créer le profil client
    client = ClientDB(
        user_id=user.id,
        company_name=data.company_name,
        company_type=data.company_type,
        profil=data.profil,
        nationality=data.nationality,
        status="onboarding",
    )
    db.add(client)
    await db.commit()
    await db.refresh(client)

    # Charger la relation user
    result = await db.execute(
        select(ClientDB)
        .options(selectinload(ClientDB.user))
        .where(ClientDB.id == client.id)
    )
    client = result.scalar_one()

    # TODO Phase 3 : Envoyer email avec le mot de passe temporaire
    # Pour l'instant on log le mot de passe temporaire
    import logging
    logging.info(
        "Mot de passe temporaire pour %s : %s (à envoyer par email)",
        data.user_email,
        temp_password,
    )

    return client


async def update_client(
    db: AsyncSession, client_id: uuid.UUID, data: ClientUpdate
) -> ClientDB:
    """Met à jour les informations d'un client."""
    client = await get_client(db, client_id)

    update_data = data.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(client, field, value)

    await db.commit()
    await db.refresh(client)

    # Recharger avec les relations
    result = await db.execute(
        select(ClientDB)
        .options(selectinload(ClientDB.user))
        .where(ClientDB.id == client.id)
    )
    return result.scalar_one()
