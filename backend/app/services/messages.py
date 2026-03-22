"""Service CRUD pour la messagerie -- Portail V2 Phase 3."""

from __future__ import annotations

import uuid

from fastapi import HTTPException, status
from sqlalchemy import and_, case, func, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.models.db_models import ClientDB, MessageDB, UserDB
from app.models.messages import (
    ConversationResponse,
    MessageCreate,
    MessageResponse,
    SenderInfo,
)


def _message_to_response(msg: MessageDB) -> MessageResponse:
    """Convertit un MessageDB en MessageResponse."""
    sender = msg.sender
    return MessageResponse(
        id=msg.id,
        dossier_id=msg.dossier_id,
        client_id=msg.client_id,
        sender=SenderInfo(
            name=f"{sender.first_name} {sender.last_name}",
            role=sender.role,
        ),
        content=msg.content,
        is_read=msg.is_read,
        attachments=msg.attachments,
        created_at=msg.created_at,
    )


async def _get_client_for_user(db: AsyncSession, user: UserDB) -> ClientDB | None:
    """Recupere le profil client lie a un utilisateur."""
    result = await db.execute(
        select(ClientDB).where(ClientDB.user_id == user.id)
    )
    return result.scalar_one_or_none()


async def list_conversations(
    db: AsyncSession, user: UserDB
) -> list[ConversationResponse]:
    """Liste des conversations groupees par client.

    Staff : toutes les conversations.
    Client : ses conversations uniquement.
    """
    # Sous-requete pour le dernier message par client
    latest_msg = (
        select(
            MessageDB.client_id,
            func.max(MessageDB.created_at).label("last_at"),
        )
        .group_by(MessageDB.client_id)
        .subquery()
    )

    query = (
        select(
            MessageDB.client_id,
            MessageDB.content,
            MessageDB.created_at,
            func.count(
                case(
                    (
                        and_(
                            MessageDB.is_read == False,  # noqa: E712
                            MessageDB.sender_id != user.id,
                        ),
                        MessageDB.id,
                    )
                )
            ).label("unread_count"),
        )
        .join(
            latest_msg,
            and_(
                MessageDB.client_id == latest_msg.c.client_id,
                MessageDB.created_at == latest_msg.c.last_at,
            ),
        )
        .group_by(
            MessageDB.client_id,
            MessageDB.content,
            MessageDB.created_at,
        )
    )

    if user.role == "client":
        client = await _get_client_for_user(db, user)
        if not client:
            return []
        query = query.where(MessageDB.client_id == client.id)

    query = query.order_by(MessageDB.created_at.desc())
    result = await db.execute(query)
    rows = result.all()

    # Charger les noms des clients
    client_ids = [r.client_id for r in rows]
    if not client_ids:
        return []

    clients_result = await db.execute(
        select(ClientDB)
        .options(selectinload(ClientDB.user))
        .where(ClientDB.id.in_(client_ids))
    )
    clients_map = {
        c.id: f"{c.user.first_name} {c.user.last_name}"
        for c in clients_result.scalars().all()
    }

    return [
        ConversationResponse(
            client_id=r.client_id,
            client_name=clients_map.get(r.client_id, "Inconnu"),
            last_message=r.content,
            unread_count=r.unread_count,
            updated_at=r.created_at,
        )
        for r in rows
    ]


async def list_messages(
    db: AsyncSession,
    client_id: uuid.UUID,
    user: UserDB,
    dossier_id: uuid.UUID | None = None,
) -> list[MessageResponse]:
    """Messages d'une conversation avec verification d'acces."""
    # Verification d'acces pour les clients
    if user.role == "client":
        client = await _get_client_for_user(db, user)
        if not client or client.id != client_id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Acces refuse a cette conversation",
            )

    query = (
        select(MessageDB)
        .options(selectinload(MessageDB.sender))
        .where(MessageDB.client_id == client_id)
    )

    if dossier_id:
        query = query.where(MessageDB.dossier_id == dossier_id)

    query = query.order_by(MessageDB.created_at.asc())
    result = await db.execute(query)
    messages = list(result.scalars().all())

    return [_message_to_response(m) for m in messages]


async def send_message(
    db: AsyncSession, data: MessageCreate, user: UserDB
) -> MessageResponse:
    """Cree un message et marque les precedents comme lus pour l'expediteur."""
    # Verification d'acces pour les clients
    if user.role == "client":
        client = await _get_client_for_user(db, user)
        if not client or client.id != data.client_id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Acces refuse",
            )

    # Marquer les messages precedents comme lus pour l'expediteur
    previous_query = (
        select(MessageDB)
        .where(
            MessageDB.client_id == data.client_id,
            MessageDB.sender_id != user.id,
            MessageDB.is_read == False,  # noqa: E712
        )
    )
    if data.dossier_id:
        previous_query = previous_query.where(
            MessageDB.dossier_id == data.dossier_id
        )

    previous_result = await db.execute(previous_query)
    for msg in previous_result.scalars().all():
        msg.is_read = True

    # Creer le nouveau message
    message = MessageDB(
        client_id=data.client_id,
        dossier_id=data.dossier_id,
        sender_id=user.id,
        content=data.content,
        attachments=data.attachments,
        is_read=False,
    )
    db.add(message)
    await db.commit()
    await db.refresh(message)

    # Recharger avec le sender
    result = await db.execute(
        select(MessageDB)
        .options(selectinload(MessageDB.sender))
        .where(MessageDB.id == message.id)
    )
    message = result.scalar_one()

    return _message_to_response(message)


async def mark_as_read(
    db: AsyncSession, message_id: uuid.UUID, user: UserDB
) -> MessageResponse:
    """Marque un message comme lu."""
    result = await db.execute(
        select(MessageDB)
        .options(selectinload(MessageDB.sender))
        .where(MessageDB.id == message_id)
    )
    message = result.scalar_one_or_none()
    if not message:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Message introuvable",
        )

    # Verification d'acces
    if user.role == "client":
        client = await _get_client_for_user(db, user)
        if not client or client.id != message.client_id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Acces refuse",
            )

    message.is_read = True
    await db.commit()
    await db.refresh(message)

    return _message_to_response(message)


async def count_unread(db: AsyncSession, user: UserDB) -> int:
    """Nombre de messages non lus pour l'utilisateur."""
    query = select(func.count(MessageDB.id)).where(
        MessageDB.is_read == False,  # noqa: E712
        MessageDB.sender_id != user.id,
    )

    if user.role == "client":
        client = await _get_client_for_user(db, user)
        if not client:
            return 0
        query = query.where(MessageDB.client_id == client.id)

    result = await db.execute(query)
    return result.scalar() or 0
