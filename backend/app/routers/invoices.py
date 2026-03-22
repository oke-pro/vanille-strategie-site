"""Router API pour les factures -- Portail V2 Phase 3."""

from __future__ import annotations

import uuid

from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.auth.dependencies import get_current_user, require_role
from app.database import get_db
from app.models.db_models import UserDB
from app.models.invoices import (
    InvoiceCreate,
    InvoiceListResponse,
    InvoiceResponse,
    InvoiceUpdate,
)
from app.services import invoices as invoice_service

router = APIRouter(prefix="/invoices", tags=["invoices"])


@router.get("", response_model=InvoiceListResponse)
async def list_invoices(
    status: str | None = Query(None),
    client_id: uuid.UUID | None = Query(None),
    user: UserDB = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Liste des factures (staff: toutes + filtres, client: siennes)."""
    return await invoice_service.list_invoices(
        db, user, status_filter=status, client_id=client_id
    )


@router.post("", response_model=InvoiceResponse, status_code=201)
async def create_invoice(
    body: InvoiceCreate,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Creer une facture (staff uniquement)."""
    return await invoice_service.create_invoice(db, body, user)


@router.get("/{invoice_id}", response_model=InvoiceResponse)
async def get_invoice(
    invoice_id: uuid.UUID,
    user: UserDB = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Detail d'une facture."""
    return await invoice_service.get_invoice(db, invoice_id, user)


@router.patch("/{invoice_id}", response_model=InvoiceResponse)
async def update_invoice(
    invoice_id: uuid.UUID,
    body: InvoiceUpdate,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Modifier le statut d'une facture (staff uniquement)."""
    return await invoice_service.update_invoice(db, invoice_id, body, user)
