"""Schémas Pydantic pour la gestion des clients — Portail V2."""

from __future__ import annotations

import uuid
from datetime import datetime

from pydantic import BaseModel, EmailStr

from app.models.auth import UserResponse


# ── Requêtes ──────────────────────────────────────────────


class ClientCreate(BaseModel):
    user_email: EmailStr
    first_name: str
    last_name: str
    phone: str | None = None
    company_name: str | None = None
    company_type: str | None = None  # DC, GBC, AC
    profil: str  # entrepreneur, digital-nomad, retraite, entreprise
    nationality: str | None = None


class ClientUpdate(BaseModel):
    company_name: str | None = None
    company_type: str | None = None
    profil: str | None = None
    nationality: str | None = None
    status: str | None = None
    assigned_to: uuid.UUID | None = None
    notes: str | None = None


# ── Réponses ──────────────────────────────────────────────


class ClientResponse(BaseModel):
    id: uuid.UUID
    user: UserResponse
    company_name: str | None = None
    company_type: str | None = None
    profil: str
    nationality: str | None = None
    status: str
    assigned_to: uuid.UUID | None = None
    notes: str | None = None
    created_at: datetime
    updated_at: datetime

    model_config = {"from_attributes": True}


class ClientListResponse(BaseModel):
    items: list[ClientResponse]
    total: int
