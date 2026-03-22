import logging

from fastapi import APIRouter, HTTPException, Request

from app.middleware.antispam import is_suspicious_submission
from app.middleware.rate_limit import (
    contact_limiter,
    newsletter_limiter,
    quick_limiter,
    simulateur_limiter,
)
from app.models.leads import (
    ContactRequest,
    LeadResponse,
    NewsletterRequest,
    QuickLeadRequest,
    SimulateurFiscalResult,
    SimulateurVisaResult,
)
from app.services.leads import create_lead

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/leads", tags=["Leads"])


def _get_ip(request: Request) -> str:
    """Extract client IP, falling back to '0.0.0.0'."""
    return request.client.host if request.client else "0.0.0.0"


def _spam_guard(data: dict) -> None:
    """Raise HTTP 400 if the submission looks like spam."""
    is_spam, reason = is_suspicious_submission(data)
    if is_spam:
        logger.warning("Spam détecté (raison=%s)", reason)
        raise HTTPException(
            status_code=400,
            detail="Votre message n'a pas pu être envoyé. Veuillez vérifier vos informations et réessayer.",
        )


@router.post("/contact", response_model=LeadResponse)
async def submit_contact(req: ContactRequest, request: Request):
    """Formulaire de contact complet (/contact)."""
    ip = _get_ip(request)
    contact_limiter.check_or_raise(ip)
    _spam_guard(req.model_dump())

    lead = await create_lead(
        lead_type="contact",
        data=req.model_dump(exclude={"website"}),
        source_page="/contact",
        ip=ip,
    )
    return LeadResponse(
        success=True,
        message="Merci ! Nous vous répondons sous 24h.",
        lead_id=lead.id,
    )


@router.post("/quick", response_model=LeadResponse)
async def submit_quick_lead(req: QuickLeadRequest, request: Request):
    """Formulaire rapide homepage (#contact-rapide)."""
    ip = _get_ip(request)
    quick_limiter.check_or_raise(ip)
    _spam_guard(req.model_dump())

    lead = await create_lead(
        lead_type="quick",
        data=req.model_dump(exclude={"website"}),
        source_page="/",
        ip=ip,
    )
    return LeadResponse(
        success=True,
        message="Merci ! Nous vous répondons sous 24h.",
        lead_id=lead.id,
    )


@router.post("/newsletter", response_model=LeadResponse)
async def subscribe_newsletter(req: NewsletterRequest, request: Request):
    """Inscription newsletter / lead magnet."""
    ip = _get_ip(request)
    newsletter_limiter.check_or_raise(ip)
    _spam_guard(req.model_dump())

    lead = await create_lead(
        lead_type="newsletter",
        data=req.model_dump(),
        source_page=req.source,
        ip=ip,
    )
    return LeadResponse(
        success=True,
        message="Inscription confirmée ! Consultez votre boîte email.",
        lead_id=lead.id,
    )


@router.post("/simulateur-visa", response_model=LeadResponse)
async def submit_simulateur_visa(req: SimulateurVisaResult, request: Request):
    """Capture optionnelle du résultat du simulateur visa."""
    ip = _get_ip(request)
    simulateur_limiter.check_or_raise(ip)
    _spam_guard(req.model_dump())

    lead = await create_lead(
        lead_type="simulateur-visa",
        data=req.model_dump(),
        source_page="/ressources/simulateur-visa",
        ip=ip,
    )
    return LeadResponse(
        success=True,
        message="Résultat enregistré.",
        lead_id=lead.id,
    )


@router.post("/simulateur-fiscal", response_model=LeadResponse)
async def submit_simulateur_fiscal(req: SimulateurFiscalResult, request: Request):
    """Capture optionnelle du résultat du simulateur fiscal."""
    ip = _get_ip(request)
    simulateur_limiter.check_or_raise(ip)
    _spam_guard(req.model_dump())

    lead = await create_lead(
        lead_type="simulateur-fiscal",
        data=req.model_dump(),
        source_page="/ressources/simulateur-fiscal",
        ip=ip,
    )
    return LeadResponse(
        success=True,
        message="Résultat enregistré.",
        lead_id=lead.id,
    )
