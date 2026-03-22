"""Schemas Pydantic pour les factures -- Portail V2 Phase 3."""

from __future__ import annotations

import uuid
from datetime import date, datetime
from decimal import Decimal

from pydantic import BaseModel


# -- Sous-modeles --


class LineItem(BaseModel):
    description: str
    quantity: int
    unit_price: Decimal
    total: Decimal


# -- Requetes --


class InvoiceCreate(BaseModel):
    client_id: uuid.UUID
    dossier_id: uuid.UUID | None = None
    line_items: list[LineItem]
    due_date: date
    notes: str | None = None


class InvoiceUpdate(BaseModel):
    status: str | None = None
    paid_at: datetime | None = None


# -- Reponses --


class InvoiceResponse(BaseModel):
    id: uuid.UUID
    number: str
    client_name: str
    dossier_title: str | None = None
    status: str
    amount_ht: Decimal
    vat_rate: Decimal
    amount_ttc: Decimal
    currency: str
    due_date: date
    paid_at: datetime | None = None
    line_items: list[LineItem] | None = None
    created_at: datetime

    model_config = {"from_attributes": True}


class InvoiceListResponse(BaseModel):
    items: list[InvoiceResponse]
    total: int
