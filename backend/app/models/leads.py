from datetime import datetime
from enum import Enum
from pydantic import BaseModel, EmailStr, Field


class ProfilType(str, Enum):
    entrepreneur = "entrepreneur"
    digital_nomad = "digital-nomad"
    retraite = "retraite"
    entreprise = "entreprise"
    investisseur = "investisseur"
    achat_affaire = "achat-affaire"
    comptabilite = "comptabilite"
    autre = "autre"


class ContactRequest(BaseModel):
    """Formulaire de contact complet (/contact)."""
    prenom: str = Field(min_length=2, max_length=50)
    nom: str = Field(min_length=2, max_length=50)
    email: EmailStr
    telephone: str | None = Field(default=None, max_length=20)
    profil: ProfilType
    objet: str = Field(min_length=5, max_length=200)
    message: str | None = Field(default=None, max_length=5000)
    website: str | None = Field(default=None, max_length=200)  # honeypot — must stay empty


class QuickLeadRequest(BaseModel):
    """Formulaire rapide homepage (#contact-rapide)."""
    prenom: str = Field(min_length=2, max_length=50)
    email: EmailStr
    telephone: str | None = Field(default=None, max_length=20)
    profil: ProfilType
    website: str | None = Field(default=None, max_length=200)  # honeypot — must stay empty


class NewsletterRequest(BaseModel):
    """Inscription newsletter / lead magnet."""
    email: EmailStr
    source: str | None = Field(default=None, max_length=100, description="Page d'origine")


class SimulateurVisaResult(BaseModel):
    """Résultat du simulateur visa (optionnel: capture du lead)."""
    email: EmailStr | None = None
    answers: list[str]
    result_visa: str
    result_invest: str
    result_duration: str


class SimulateurFiscalResult(BaseModel):
    """Résultat du simulateur fiscal (optionnel: capture du lead)."""
    email: EmailStr | None = None
    ca: float
    benefice: float
    dividendes: float
    economie_vs_france: float


class LeadResponse(BaseModel):
    success: bool
    message: str
    lead_id: str | None = None
    score: int | None = None
    score_label: str | None = None


class Lead(BaseModel):
    """Lead stocké (in-memory pour MVP, DB plus tard)."""
    id: str
    type: str  # contact, quick, newsletter, simulateur-visa, simulateur-fiscal
    data: dict
    created_at: datetime
    source_page: str | None = None
    ip: str | None = None
    notified: bool = False
    score: int = 0
    score_label: str | None = None
