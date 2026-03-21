from fastapi import APIRouter, Request

from app.models.leads import (
    ContactRequest,
    LeadResponse,
    NewsletterRequest,
    QuickLeadRequest,
    SimulateurFiscalResult,
    SimulateurVisaResult,
)
from app.services.leads import create_lead

router = APIRouter(prefix="/leads", tags=["Leads"])


@router.post("/contact", response_model=LeadResponse)
async def submit_contact(req: ContactRequest, request: Request):
    """Formulaire de contact complet (/contact)."""
    lead = await create_lead(
        lead_type="contact",
        data=req.model_dump(),
        source_page="/contact",
        ip=request.client.host if request.client else None,
    )
    return LeadResponse(
        success=True,
        message="Merci ! Nous vous répondons sous 24h.",
        lead_id=lead.id,
    )


@router.post("/quick", response_model=LeadResponse)
async def submit_quick_lead(req: QuickLeadRequest, request: Request):
    """Formulaire rapide homepage (#contact-rapide)."""
    lead = await create_lead(
        lead_type="quick",
        data=req.model_dump(),
        source_page="/",
        ip=request.client.host if request.client else None,
    )
    return LeadResponse(
        success=True,
        message="Merci ! Nous vous répondons sous 24h.",
        lead_id=lead.id,
    )


@router.post("/newsletter", response_model=LeadResponse)
async def subscribe_newsletter(req: NewsletterRequest, request: Request):
    """Inscription newsletter / lead magnet."""
    lead = await create_lead(
        lead_type="newsletter",
        data=req.model_dump(),
        source_page=req.source,
        ip=request.client.host if request.client else None,
    )
    return LeadResponse(
        success=True,
        message="Inscription confirmée ! Consultez votre boîte email.",
        lead_id=lead.id,
    )


@router.post("/simulateur-visa", response_model=LeadResponse)
async def submit_simulateur_visa(req: SimulateurVisaResult, request: Request):
    """Capture optionnelle du résultat du simulateur visa."""
    lead = await create_lead(
        lead_type="simulateur-visa",
        data=req.model_dump(),
        source_page="/ressources/simulateur-visa",
        ip=request.client.host if request.client else None,
    )
    return LeadResponse(
        success=True,
        message="Résultat enregistré.",
        lead_id=lead.id,
    )


@router.post("/simulateur-fiscal", response_model=LeadResponse)
async def submit_simulateur_fiscal(req: SimulateurFiscalResult, request: Request):
    """Capture optionnelle du résultat du simulateur fiscal."""
    lead = await create_lead(
        lead_type="simulateur-fiscal",
        data=req.model_dump(),
        source_page="/ressources/simulateur-fiscal",
        ip=request.client.host if request.client else None,
    )
    return LeadResponse(
        success=True,
        message="Résultat enregistré.",
        lead_id=lead.id,
    )
