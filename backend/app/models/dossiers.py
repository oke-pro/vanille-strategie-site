"""Schémas Pydantic pour la gestion des dossiers — Portail V2."""

from __future__ import annotations

import uuid
from datetime import date, datetime

from pydantic import BaseModel


# ── Requêtes ──────────────────────────────────────────────


class DossierCreate(BaseModel):
    client_id: uuid.UUID
    type: str  # creation_societe, permis_residence, ...
    title: str
    priority: str = "normal"
    due_date: date | None = None
    steps: list[dict] | None = None


class DossierUpdate(BaseModel):
    status: str | None = None
    current_step: int | None = None
    priority: str | None = None
    due_date: date | None = None
    assigned_to: uuid.UUID | None = None
    steps: list[dict] | None = None


class TimelineEventCreate(BaseModel):
    type: str  # status_change, comment, document_upload, task_completed
    title: str
    description: str | None = None
    metadata: dict | None = None


class TimelineEventResponse(BaseModel):
    id: uuid.UUID
    actor: str  # Nom complet de l'acteur
    type: str
    title: str
    description: str | None = None
    metadata: dict | None = None
    created_at: datetime

    model_config = {"from_attributes": True}


# ── Réponses ──────────────────────────────────────────────


class DossierResponse(BaseModel):
    id: uuid.UUID
    client_id: uuid.UUID
    type: str
    title: str
    status: str
    current_step: int
    steps: list[dict] | None = None
    priority: str
    due_date: date | None = None
    assigned_to: uuid.UUID | None = None
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}


class DossierDetailResponse(BaseModel):
    """Dossier complet avec timeline."""

    dossier: DossierResponse
    events: list[TimelineEventResponse]
