"""Schemas Pydantic pour le Pipeline CRM -- Portail V2 Phase 4."""

from __future__ import annotations

import uuid
from datetime import datetime

from pydantic import BaseModel


# -- Responses --

class LeadPipelineResponse(BaseModel):
    id: str
    prenom: str | None = None
    nom: str | None = None
    email: str | None = None
    telephone: str | None = None
    profil: str | None = None
    budget: str | None = None
    timeline: str | None = None
    pipeline_stage: str
    assigned_to_name: str | None = None
    score: int = 0
    notes: str | None = None
    last_contacted_at: datetime | None = None
    created_at: datetime

    model_config = {"from_attributes": True}


class PipelineView(BaseModel):
    stages: dict[str, list[LeadPipelineResponse]]


class StageUpdate(BaseModel):
    pipeline_stage: str


class AssignRequest(BaseModel):
    assigned_to: uuid.UUID


class LeadConvertRequest(BaseModel):
    company_name: str | None = None
    company_type: str | None = None
    profil: str | None = None


class DashboardStats(BaseModel):
    leads_this_month: int = 0
    leads_total: int = 0
    conversion_rate: float = 0.0
    revenue_monthly: float = 0.0
    tasks_urgent: int = 0
    messages_unread: int = 0
