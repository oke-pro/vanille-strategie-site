"""Service CRUD pour les factures -- Portail V2 Phase 3."""

from __future__ import annotations

import uuid
from datetime import datetime, timezone
from decimal import Decimal

from fastapi import HTTPException, status
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.models.db_models import ClientDB, DossierDB, InvoiceDB, UserDB
from app.models.invoices import (
    InvoiceCreate,
    InvoiceListResponse,
    InvoiceResponse,
    InvoiceUpdate,
    LineItem,
)


def _invoice_to_response(
    invoice: InvoiceDB,
    client_name: str,
    dossier_title: str | None = None,
) -> InvoiceResponse:
    """Convertit un InvoiceDB en InvoiceResponse."""
    line_items = None
    if invoice.line_items:
        line_items = [LineItem(**item) for item in invoice.line_items]

    return InvoiceResponse(
        id=invoice.id,
        number=invoice.number,
        client_name=client_name,
        dossier_title=dossier_title,
        status=invoice.status,
        amount_ht=invoice.amount_ht,
        vat_rate=invoice.vat_rate,
        amount_ttc=invoice.amount_ttc,
        currency=invoice.currency,
        due_date=invoice.due_date,
        paid_at=invoice.paid_at,
        line_items=line_items,
        created_at=invoice.created_at,
    )


async def _get_client_for_user(db: AsyncSession, user: UserDB) -> ClientDB | None:
    """Recupere le profil client lie a un utilisateur."""
    result = await db.execute(
        select(ClientDB).where(ClientDB.user_id == user.id)
    )
    return result.scalar_one_or_none()


async def _generate_invoice_number(db: AsyncSession) -> str:
    """Genere le prochain numero de facture au format VS-{annee}-{numero}."""
    current_year = datetime.now(timezone.utc).year
    prefix = f"VS-{current_year}-"

    result = await db.execute(
        select(InvoiceDB.number)
        .where(InvoiceDB.number.like(f"{prefix}%"))
        .order_by(InvoiceDB.number.desc())
        .limit(1)
    )
    last_number = result.scalar_one_or_none()

    if last_number:
        # Extraire le numero et incrementer
        seq = int(last_number.split("-")[-1]) + 1
    else:
        seq = 1

    return f"{prefix}{seq:03d}"


async def list_invoices(
    db: AsyncSession,
    user: UserDB,
    *,
    status_filter: str | None = None,
    client_id: uuid.UUID | None = None,
) -> InvoiceListResponse:
    """Liste des factures. Staff : toutes + filtres. Client : les siennes."""
    query = (
        select(InvoiceDB)
        .options(
            selectinload(InvoiceDB.client).selectinload(ClientDB.user),
            selectinload(InvoiceDB.dossier),
        )
    )

    if user.role == "client":
        client = await _get_client_for_user(db, user)
        if not client:
            return InvoiceListResponse(items=[], total=0)
        query = query.where(InvoiceDB.client_id == client.id)
    else:
        if client_id:
            query = query.where(InvoiceDB.client_id == client_id)

    if status_filter:
        query = query.where(InvoiceDB.status == status_filter)

    # Total count
    count_query = select(func.count()).select_from(query.subquery())
    total_result = await db.execute(count_query)
    total = total_result.scalar() or 0

    query = query.order_by(InvoiceDB.created_at.desc())
    result = await db.execute(query)
    invoices = list(result.scalars().all())

    items = [
        _invoice_to_response(
            inv,
            client_name=f"{inv.client.user.first_name} {inv.client.user.last_name}",
            dossier_title=inv.dossier.title if inv.dossier else None,
        )
        for inv in invoices
    ]

    return InvoiceListResponse(items=items, total=total)


async def get_invoice(
    db: AsyncSession, invoice_id: uuid.UUID, user: UserDB
) -> InvoiceResponse:
    """Recupere une facture avec verification d'acces."""
    result = await db.execute(
        select(InvoiceDB)
        .options(
            selectinload(InvoiceDB.client).selectinload(ClientDB.user),
            selectinload(InvoiceDB.dossier),
        )
        .where(InvoiceDB.id == invoice_id)
    )
    invoice = result.scalar_one_or_none()
    if not invoice:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Facture introuvable",
        )

    # Verification d'acces pour les clients
    if user.role == "client":
        client = await _get_client_for_user(db, user)
        if not client or client.id != invoice.client_id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Acces refuse a cette facture",
            )

    return _invoice_to_response(
        invoice,
        client_name=f"{invoice.client.user.first_name} {invoice.client.user.last_name}",
        dossier_title=invoice.dossier.title if invoice.dossier else None,
    )


async def create_invoice(
    db: AsyncSession, data: InvoiceCreate, user: UserDB
) -> InvoiceResponse:
    """Cree une facture (staff only). Calcule montants automatiquement."""
    if user.role != "staff":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Action reservee au staff",
        )

    # Verifier que le client existe
    client_result = await db.execute(
        select(ClientDB)
        .options(selectinload(ClientDB.user))
        .where(ClientDB.id == data.client_id)
    )
    client = client_result.scalar_one_or_none()
    if not client:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Client introuvable",
        )

    # Verifier le dossier si fourni
    dossier_title = None
    if data.dossier_id:
        dossier_result = await db.execute(
            select(DossierDB).where(DossierDB.id == data.dossier_id)
        )
        dossier = dossier_result.scalar_one_or_none()
        if not dossier:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Dossier introuvable",
            )
        dossier_title = dossier.title

    # Calculer les montants
    amount_ht = sum(item.total for item in data.line_items)
    vat_rate = Decimal("15.00")
    amount_ttc = amount_ht * (1 + vat_rate / 100)

    # Generer le numero
    number = await _generate_invoice_number(db)

    # Serialiser les lignes
    line_items_json = [item.model_dump(mode="json") for item in data.line_items]

    invoice = InvoiceDB(
        client_id=data.client_id,
        dossier_id=data.dossier_id,
        number=number,
        status="draft",
        amount_ht=amount_ht,
        vat_rate=vat_rate,
        amount_ttc=amount_ttc,
        currency="MUR",
        due_date=data.due_date,
        line_items=line_items_json,
    )
    db.add(invoice)
    await db.commit()
    await db.refresh(invoice)

    client_name = f"{client.user.first_name} {client.user.last_name}"

    return _invoice_to_response(invoice, client_name=client_name, dossier_title=dossier_title)


async def update_invoice(
    db: AsyncSession,
    invoice_id: uuid.UUID,
    data: InvoiceUpdate,
    user: UserDB,
) -> InvoiceResponse:
    """Met a jour le statut d'une facture (staff only)."""
    if user.role != "staff":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Action reservee au staff",
        )

    result = await db.execute(
        select(InvoiceDB)
        .options(
            selectinload(InvoiceDB.client).selectinload(ClientDB.user),
            selectinload(InvoiceDB.dossier),
        )
        .where(InvoiceDB.id == invoice_id)
    )
    invoice = result.scalar_one_or_none()
    if not invoice:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Facture introuvable",
        )

    update_data = data.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(invoice, field, value)

    # Si marquee comme payee sans date, mettre la date courante
    if data.status == "paid" and not invoice.paid_at:
        invoice.paid_at = datetime.now(timezone.utc)

    await db.commit()
    await db.refresh(invoice)

    return _invoice_to_response(
        invoice,
        client_name=f"{invoice.client.user.first_name} {invoice.client.user.last_name}",
        dossier_title=invoice.dossier.title if invoice.dossier else None,
    )
