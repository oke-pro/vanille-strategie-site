"""Router API pour la messagerie -- Portail V2 Phase 3."""

from __future__ import annotations

import uuid

from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.auth.dependencies import get_current_user
from app.database import get_db
from app.models.db_models import UserDB
from app.models.messages import (
    ConversationResponse,
    MessageCreate,
    MessageResponse,
    UnreadCountResponse,
)
from app.services import messages as message_service

router = APIRouter(prefix="/messages", tags=["messages"])


@router.get("/conversations", response_model=list[ConversationResponse])
async def list_conversations(
    user: UserDB = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Liste des conversations (staff: toutes, client: siennes)."""
    return await message_service.list_conversations(db, user)


@router.get("/unread-count", response_model=UnreadCountResponse)
async def unread_count(
    user: UserDB = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Nombre de messages non lus."""
    count = await message_service.count_unread(db, user)
    return UnreadCountResponse(count=count)


@router.get("", response_model=list[MessageResponse])
async def list_messages(
    client_id: uuid.UUID = Query(...),
    dossier_id: uuid.UUID | None = Query(None),
    user: UserDB = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Messages d'une conversation."""
    return await message_service.list_messages(
        db, client_id, user, dossier_id=dossier_id
    )


@router.post("", response_model=MessageResponse, status_code=201)
async def send_message(
    body: MessageCreate,
    user: UserDB = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Envoyer un message."""
    return await message_service.send_message(db, body, user)


@router.patch("/{message_id}/read", response_model=MessageResponse)
async def mark_as_read(
    message_id: uuid.UUID,
    user: UserDB = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Marquer un message comme lu."""
    return await message_service.mark_as_read(db, message_id, user)
