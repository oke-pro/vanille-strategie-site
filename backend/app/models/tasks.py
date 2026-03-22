"""Schemas Pydantic pour les taches -- Portail V2 Phase 4."""

from __future__ import annotations

import uuid
from datetime import date, datetime

from pydantic import BaseModel


class TaskCreate(BaseModel):
    dossier_id: uuid.UUID
    title: str
    description: str | None = None
    priority: str = "normal"
    due_date: date | None = None
    assigned_to: uuid.UUID | None = None


class TaskUpdate(BaseModel):
    status: str | None = None
    priority: str | None = None
    due_date: date | None = None
    assigned_to: uuid.UUID | None = None


class TaskResponse(BaseModel):
    id: uuid.UUID
    dossier_id: uuid.UUID
    dossier_title: str | None = None
    client_name: str | None = None
    assigned_to_name: str | None = None
    title: str
    description: str | None = None
    status: str
    priority: str
    due_date: date | None = None
    completed_at: datetime | None = None
    created_at: datetime

    model_config = {"from_attributes": True}


class TaskListResponse(BaseModel):
    items: list[TaskResponse]
    total: int
