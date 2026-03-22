"""Schémas Pydantic pour la gestion des documents — Portail V2."""

from __future__ import annotations

import uuid
from datetime import datetime

from pydantic import BaseModel


# ── Réponses ──────────────────────────────────────────────


class DocumentResponse(BaseModel):
    id: uuid.UUID
    filename: str
    original_name: str
    mime_type: str
    size_bytes: int
    category: str
    status: str
    uploaded_by_name: str
    dossier_id: uuid.UUID | None = None
    client_id: uuid.UUID
    created_at: datetime

    model_config = {"from_attributes": True}


# ── Requêtes ──────────────────────────────────────────────


class DocumentUpdate(BaseModel):
    status: str | None = None  # validated, rejected, pending
    notes: str | None = None
