"""Schemas Pydantic pour la messagerie -- Portail V2 Phase 3."""

from __future__ import annotations

import uuid
from datetime import datetime

from pydantic import BaseModel


# -- Requetes --


class MessageCreate(BaseModel):
    content: str
    dossier_id: uuid.UUID | None = None
    client_id: uuid.UUID
    attachments: list[str] | None = None


# -- Reponses --


class SenderInfo(BaseModel):
    name: str
    role: str


class MessageResponse(BaseModel):
    id: uuid.UUID
    dossier_id: uuid.UUID | None = None
    client_id: uuid.UUID
    sender: SenderInfo
    content: str
    is_read: bool
    attachments: list[str] | None = None
    created_at: datetime

    model_config = {"from_attributes": True}


class ConversationResponse(BaseModel):
    client_id: uuid.UUID
    client_name: str
    last_message: str
    unread_count: int
    updated_at: datetime

    model_config = {"from_attributes": True}


class UnreadCountResponse(BaseModel):
    count: int
