"""Schémas Pydantic pour l'authentification — Portail V2."""

from __future__ import annotations

import uuid
from datetime import datetime

from pydantic import BaseModel, EmailStr


# ── Requêtes ──────────────────────────────────────────────

class LoginRequest(BaseModel):
    email: EmailStr
    password: str


# ── Réponses ──────────────────────────────────────────────

class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"


class UserResponse(BaseModel):
    id: uuid.UUID
    email: str
    first_name: str
    last_name: str
    phone: str | None = None
    role: str
    staff_permissions: dict | None = None
    is_active: bool
    email_verified: bool
    last_login: datetime | None = None
    created_at: datetime

    model_config = {"from_attributes": True}


# ── Mise à jour ───────────────────────────────────────────

class UserUpdate(BaseModel):
    first_name: str | None = None
    last_name: str | None = None
    phone: str | None = None
