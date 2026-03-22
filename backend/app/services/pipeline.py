"""Service Pipeline CRM -- Portail V2 Phase 4."""

from __future__ import annotations

import uuid
from datetime import datetime, timezone

from fastapi import HTTPException, status
from sqlalchemy import extract, func, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.auth.passwords import hash_password
from app.models.db_models import (
    ClientDB,
    InvoiceDB,
    LeadDB,
    MessageDB,
    TaskDB,
    UserDB,
)
from app.models.pipeline import (
    DashboardStats,
    LeadConvertRequest,
    LeadPipelineResponse,
    PipelineView,
)

PIPELINE_STAGES = ["nouveau", "qualifie", "rdv", "proposition", "signe", "client"]


def _lead_to_response(lead: LeadDB) -> LeadPipelineResponse:
    """Convertit un LeadDB en LeadPipelineResponse."""
    data = lead.data or {}
    staff_name = None
    if lead.assigned_staff:
        staff_name = f"{lead.assigned_staff.first_name} {lead.assigned_staff.last_name}"

    return LeadPipelineResponse(
        id=lead.id,
        prenom=data.get("prenom") or data.get("first_name") or data.get("nom", "").split(" ")[0] if data.get("nom") else None,
        nom=data.get("nom") or data.get("last_name") or data.get("name"),
        email=data.get("email"),
        telephone=data.get("telephone") or data.get("phone"),
        profil=data.get("profil") or data.get("profile") or lead.type,
        budget=data.get("budget"),
        timeline=data.get("timeline") or data.get("delai"),
        pipeline_stage=lead.pipeline_stage or "nouveau",
        assigned_to_name=staff_name,
        score=lead.score,
        notes=lead.notes,
        last_contacted_at=lead.last_contacted_at,
        created_at=lead.created_at,
    )


async def get_pipeline_view(db: AsyncSession) -> PipelineView:
    """Retourne les leads groupes par stage."""
    result = await db.execute(
        select(LeadDB)
        .options(selectinload(LeadDB.assigned_staff))
        .order_by(LeadDB.created_at.desc())
    )
    leads = result.scalars().all()

    stages: dict[str, list[LeadPipelineResponse]] = {s: [] for s in PIPELINE_STAGES}
    for lead in leads:
        stage = lead.pipeline_stage or "nouveau"
        if stage not in stages:
            stage = "nouveau"
        stages[stage].append(_lead_to_response(lead))

    return PipelineView(stages=stages)


async def update_lead_stage(
    db: AsyncSession, lead_id: str, new_stage: str
) -> LeadDB:
    """Met a jour le stage d'un lead."""
    if new_stage not in PIPELINE_STAGES:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Stage invalide. Valeurs possibles : {', '.join(PIPELINE_STAGES)}",
        )

    result = await db.execute(select(LeadDB).where(LeadDB.id == lead_id))
    lead = result.scalar_one_or_none()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead introuvable")

    lead.pipeline_stage = new_stage
    await db.commit()
    await db.refresh(lead)
    return lead


async def assign_lead(
    db: AsyncSession, lead_id: str, staff_id: uuid.UUID
) -> LeadDB:
    """Assigne un staff a un lead."""
    # Verifier le staff
    staff_result = await db.execute(
        select(UserDB).where(UserDB.id == staff_id, UserDB.role == "staff")
    )
    staff = staff_result.scalar_one_or_none()
    if not staff:
        raise HTTPException(status_code=404, detail="Staff introuvable")

    result = await db.execute(select(LeadDB).where(LeadDB.id == lead_id))
    lead = result.scalar_one_or_none()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead introuvable")

    lead.assigned_to = staff_id
    await db.commit()
    await db.refresh(lead)
    return lead


async def convert_lead_to_client(
    db: AsyncSession, lead_id: str, data: LeadConvertRequest
) -> ClientDB:
    """Convertit un lead en client (cree UserDB + ClientDB)."""
    result = await db.execute(select(LeadDB).where(LeadDB.id == lead_id))
    lead = result.scalar_one_or_none()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead introuvable")

    if lead.converted_client_id:
        raise HTTPException(
            status_code=400, detail="Ce lead a deja ete converti en client"
        )

    lead_data = lead.data or {}
    email = lead_data.get("email")
    if not email:
        raise HTTPException(
            status_code=400,
            detail="Le lead n'a pas d'email, conversion impossible",
        )

    # Verifier que l'email n'est pas deja utilise
    existing = await db.execute(select(UserDB).where(UserDB.email == email))
    if existing.scalar_one_or_none():
        raise HTTPException(
            status_code=400,
            detail="Un utilisateur avec cet email existe deja",
        )

    # Creer le user
    prenom = lead_data.get("prenom") or lead_data.get("first_name") or "Client"
    nom = lead_data.get("nom") or lead_data.get("last_name") or lead_id

    user = UserDB(
        email=email,
        hashed_password=hash_password(f"VS-{lead_id}-temp"),  # Mot de passe temporaire
        first_name=prenom,
        last_name=nom,
        phone=lead_data.get("telephone") or lead_data.get("phone"),
        role="client",
    )
    db.add(user)
    await db.flush()

    # Creer le client
    client = ClientDB(
        user_id=user.id,
        company_name=data.company_name or lead_data.get("company_name"),
        company_type=data.company_type or lead_data.get("company_type"),
        profil=data.profil or lead_data.get("profil") or lead.type or "entrepreneur",
        assigned_to=lead.assigned_to,
        status="onboarding",
    )
    db.add(client)
    await db.flush()

    # Mettre a jour le lead
    lead.pipeline_stage = "client"
    lead.converted_client_id = client.id

    await db.commit()
    await db.refresh(client)
    return client


async def get_dashboard_stats(db: AsyncSession) -> DashboardStats:
    """Calcule les statistiques reelles du dashboard."""
    now = datetime.now(timezone.utc)

    # Leads ce mois
    leads_month_result = await db.execute(
        select(func.count(LeadDB.id)).where(
            extract("year", LeadDB.created_at) == now.year,
            extract("month", LeadDB.created_at) == now.month,
        )
    )
    leads_this_month = leads_month_result.scalar() or 0

    # Leads total
    leads_total_result = await db.execute(select(func.count(LeadDB.id)))
    leads_total = leads_total_result.scalar() or 0

    # Taux de conversion = clients / leads
    clients_result = await db.execute(
        select(func.count(LeadDB.id)).where(LeadDB.pipeline_stage == "client")
    )
    clients_count = clients_result.scalar() or 0
    conversion_rate = (clients_count / leads_total * 100) if leads_total > 0 else 0.0

    # CA mensuel = somme des factures payees ce mois
    revenue_result = await db.execute(
        select(func.coalesce(func.sum(InvoiceDB.amount_ttc), 0)).where(
            InvoiceDB.status == "paid",
            extract("year", InvoiceDB.paid_at) == now.year,
            extract("month", InvoiceDB.paid_at) == now.month,
        )
    )
    revenue_monthly = float(revenue_result.scalar() or 0)

    # Taches urgentes (priority=urgent, status != done)
    tasks_urgent_result = await db.execute(
        select(func.count(TaskDB.id)).where(
            TaskDB.priority == "urgent",
            TaskDB.status != "done",
        )
    )
    tasks_urgent = tasks_urgent_result.scalar() or 0

    # Messages non lus
    messages_unread_result = await db.execute(
        select(func.count(MessageDB.id)).where(MessageDB.is_read == False)  # noqa: E712
    )
    messages_unread = messages_unread_result.scalar() or 0

    return DashboardStats(
        leads_this_month=leads_this_month,
        leads_total=leads_total,
        conversion_rate=round(conversion_rate, 1),
        revenue_monthly=revenue_monthly,
        tasks_urgent=tasks_urgent,
        messages_unread=messages_unread,
    )
