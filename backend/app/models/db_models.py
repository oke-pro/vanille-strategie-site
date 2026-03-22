import uuid
from datetime import date, datetime, timezone
from decimal import Decimal

from sqlalchemy import (
    JSON,
    BigInteger,
    Boolean,
    Date,
    DateTime,
    ForeignKey,
    Integer,
    Numeric,
    String,
    Text,
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database import Base


# ──────────────────────────── helpers ────────────────────────────

def _utcnow() -> datetime:
    return datetime.now(timezone.utc)


def _new_uuid() -> uuid.UUID:
    return uuid.uuid4()


# ──────────────────────────── Leads (existant) ────────────────────────────

class LeadDB(Base):
    __tablename__ = "leads"

    id: Mapped[str] = mapped_column(String(12), primary_key=True)
    type: Mapped[str] = mapped_column(String(30), index=True)
    data: Mapped[dict] = mapped_column(JSON, default=dict)
    source_page: Mapped[str | None] = mapped_column(String(200), nullable=True)
    ip: Mapped[str | None] = mapped_column(String(45), nullable=True)
    score: Mapped[int] = mapped_column(default=0)
    score_label: Mapped[str | None] = mapped_column(String(20), nullable=True)
    notified: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=_utcnow
    )

    # Pipeline CRM (Phase 4)
    pipeline_stage: Mapped[str] = mapped_column(
        String(30), default="nouveau", index=True
    )
    assigned_to: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id"), nullable=True
    )
    converted_client_id: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True), ForeignKey("clients.id"), nullable=True
    )
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    last_contacted_at: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True), nullable=True
    )

    # Relations
    assigned_staff: Mapped["UserDB | None"] = relationship(
        "UserDB", foreign_keys=[assigned_to]
    )
    converted_client: Mapped["ClientDB | None"] = relationship(
        "ClientDB", foreign_keys=[converted_client_id]
    )


# ──────────────────────────── Companies (existant) ────────────────────────────

class CompanyDB(Base):
    __tablename__ = "companies"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    google_place_id: Mapped[str | None] = mapped_column(String(300), unique=True, nullable=True)
    slug: Mapped[str] = mapped_column(String(300), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(300), index=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    editorial_summary: Mapped[str | None] = mapped_column(Text, nullable=True)

    # Catégorisation
    category: Mapped[str] = mapped_column(String(100), index=True)
    subcategory: Mapped[str | None] = mapped_column(String(100), nullable=True)
    google_types: Mapped[dict | None] = mapped_column(JSON, nullable=True)

    # Contact
    website: Mapped[str | None] = mapped_column(String(500), nullable=True)
    phone: Mapped[str | None] = mapped_column(String(50), nullable=True)
    email: Mapped[str | None] = mapped_column(String(200), nullable=True)

    # Réseaux sociaux
    linkedin: Mapped[str | None] = mapped_column(String(500), nullable=True)
    facebook: Mapped[str | None] = mapped_column(String(500), nullable=True)
    instagram: Mapped[str | None] = mapped_column(String(500), nullable=True)

    # Localisation
    address: Mapped[str | None] = mapped_column(String(500), nullable=True)
    city: Mapped[str | None] = mapped_column(String(100), nullable=True)
    latitude: Mapped[float | None] = mapped_column(nullable=True)
    longitude: Mapped[float | None] = mapped_column(nullable=True)

    # Métadonnées Google
    rating: Mapped[float | None] = mapped_column(nullable=True)
    reviews_count: Mapped[int | None] = mapped_column(Integer, nullable=True)
    photo_urls: Mapped[dict | None] = mapped_column(JSON, nullable=True)

    # Status
    is_published: Mapped[bool] = mapped_column(Boolean, default=False)
    scraped_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=_utcnow, onupdate=_utcnow,
    )


# ══════════════════════════════════════════════════════════════════
#  PORTAIL V2 — Modèles
# ══════════════════════════════════════════════════════════════════


class UserDB(Base):
    __tablename__ = "users"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=_new_uuid
    )
    email: Mapped[str] = mapped_column(String(200), unique=True, index=True)
    hashed_password: Mapped[str] = mapped_column(Text)
    first_name: Mapped[str] = mapped_column(String(100))
    last_name: Mapped[str] = mapped_column(String(100))
    phone: Mapped[str | None] = mapped_column(String(30), nullable=True)
    role: Mapped[str] = mapped_column(String(20))  # 'client' ou 'staff'
    staff_permissions: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    email_verified: Mapped[bool] = mapped_column(Boolean, default=False)
    last_login: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=_utcnow, onupdate=_utcnow,
    )

    # Relations
    client_profile: Mapped["ClientDB | None"] = relationship(
        "ClientDB", back_populates="user", foreign_keys="ClientDB.user_id", uselist=False,
    )


class ClientDB(Base):
    __tablename__ = "clients"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=_new_uuid
    )
    user_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id"), unique=True
    )
    company_name: Mapped[str | None] = mapped_column(String(300), nullable=True)
    company_type: Mapped[str | None] = mapped_column(String(50), nullable=True)  # DC, GBC, AC
    profil: Mapped[str] = mapped_column(String(30))  # entrepreneur, digital-nomad, retraite, entreprise
    nationality: Mapped[str | None] = mapped_column(String(100), nullable=True)
    assigned_to: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id"), nullable=True
    )
    status: Mapped[str] = mapped_column(String(20), default="onboarding")
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=_utcnow, onupdate=_utcnow,
    )

    # Relations
    user: Mapped["UserDB"] = relationship(
        "UserDB", back_populates="client_profile", foreign_keys=[user_id]
    )
    assigned_staff: Mapped["UserDB | None"] = relationship(
        "UserDB", foreign_keys=[assigned_to]
    )
    dossiers: Mapped[list["DossierDB"]] = relationship(
        "DossierDB", back_populates="client"
    )
    documents: Mapped[list["DocumentDB"]] = relationship(
        "DocumentDB", back_populates="client"
    )
    messages: Mapped[list["MessageDB"]] = relationship(
        "MessageDB", back_populates="client"
    )
    invoices: Mapped[list["InvoiceDB"]] = relationship(
        "InvoiceDB", back_populates="client"
    )


class DossierDB(Base):
    __tablename__ = "dossiers"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=_new_uuid
    )
    client_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("clients.id")
    )
    type: Mapped[str] = mapped_column(String(30))  # creation_societe, permis_residence, …
    title: Mapped[str] = mapped_column(String(300))
    status: Mapped[str] = mapped_column(String(30), default="draft")
    current_step: Mapped[int] = mapped_column(Integer, default=0)
    steps: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    priority: Mapped[str] = mapped_column(String(20), default="normal")
    due_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    assigned_to: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id"), nullable=True
    )
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=_utcnow, onupdate=_utcnow,
    )

    # Relations
    client: Mapped["ClientDB"] = relationship("ClientDB", back_populates="dossiers")
    assigned_staff: Mapped["UserDB | None"] = relationship("UserDB", foreign_keys=[assigned_to])
    events: Mapped[list["DossierEventDB"]] = relationship(
        "DossierEventDB", back_populates="dossier"
    )
    documents: Mapped[list["DocumentDB"]] = relationship(
        "DocumentDB", back_populates="dossier"
    )
    messages: Mapped[list["MessageDB"]] = relationship(
        "MessageDB", back_populates="dossier"
    )
    invoices: Mapped[list["InvoiceDB"]] = relationship(
        "InvoiceDB", back_populates="dossier"
    )
    tasks: Mapped[list["TaskDB"]] = relationship(
        "TaskDB", back_populates="dossier"
    )


class DossierEventDB(Base):
    __tablename__ = "dossier_events"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=_new_uuid
    )
    dossier_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("dossiers.id")
    )
    actor_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id")
    )
    type: Mapped[str] = mapped_column(String(30))  # status_change, comment, document_upload, task_completed
    title: Mapped[str] = mapped_column(String(300))
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    extra_data: Mapped[dict | None] = mapped_column("metadata", JSON, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_utcnow)

    # Relations
    dossier: Mapped["DossierDB"] = relationship("DossierDB", back_populates="events")
    actor: Mapped["UserDB"] = relationship("UserDB")


class DocumentDB(Base):
    __tablename__ = "documents"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=_new_uuid
    )
    dossier_id: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True), ForeignKey("dossiers.id"), nullable=True
    )
    client_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("clients.id")
    )
    uploaded_by: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id")
    )
    filename: Mapped[str] = mapped_column(String(500))
    original_name: Mapped[str] = mapped_column(String(500))
    mime_type: Mapped[str] = mapped_column(String(100))
    size_bytes: Mapped[int] = mapped_column(BigInteger)
    storage_path: Mapped[str] = mapped_column(String(1000))
    category: Mapped[str] = mapped_column(String(100))
    status: Mapped[str] = mapped_column(String(20), default="pending")
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=_utcnow, onupdate=_utcnow,
    )

    # Relations
    dossier: Mapped["DossierDB | None"] = relationship("DossierDB", back_populates="documents")
    client: Mapped["ClientDB"] = relationship("ClientDB", back_populates="documents")
    uploader: Mapped["UserDB"] = relationship("UserDB")


class MessageDB(Base):
    __tablename__ = "messages"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=_new_uuid
    )
    dossier_id: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True), ForeignKey("dossiers.id"), nullable=True
    )
    client_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("clients.id")
    )
    sender_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id")
    )
    content: Mapped[str] = mapped_column(Text)
    is_read: Mapped[bool] = mapped_column(Boolean, default=False)
    attachments: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_utcnow)

    # Relations
    dossier: Mapped["DossierDB | None"] = relationship("DossierDB", back_populates="messages")
    client: Mapped["ClientDB"] = relationship("ClientDB", back_populates="messages")
    sender: Mapped["UserDB"] = relationship("UserDB")


class InvoiceDB(Base):
    __tablename__ = "invoices"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=_new_uuid
    )
    client_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("clients.id")
    )
    dossier_id: Mapped[uuid.UUID | None] = mapped_column(
        UUID(as_uuid=True), ForeignKey("dossiers.id"), nullable=True
    )
    number: Mapped[str] = mapped_column(String(50), unique=True)
    status: Mapped[str] = mapped_column(String(20), default="draft")
    amount_ht: Mapped[Decimal] = mapped_column(Numeric(12, 2))
    vat_rate: Mapped[Decimal] = mapped_column(Numeric(5, 2), default=Decimal("15.00"))
    amount_ttc: Mapped[Decimal] = mapped_column(Numeric(12, 2))
    currency: Mapped[str] = mapped_column(String(3), default="MUR")
    due_date: Mapped[date] = mapped_column(Date)
    paid_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    pdf_url: Mapped[str | None] = mapped_column(String(1000), nullable=True)
    line_items: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=_utcnow, onupdate=_utcnow,
    )

    # Relations
    client: Mapped["ClientDB"] = relationship("ClientDB", back_populates="invoices")
    dossier: Mapped["DossierDB | None"] = relationship("DossierDB", back_populates="invoices")


class TaskDB(Base):
    __tablename__ = "tasks"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=_new_uuid
    )
    dossier_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("dossiers.id")
    )
    assigned_to: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("users.id")
    )
    title: Mapped[str] = mapped_column(String(300))
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    status: Mapped[str] = mapped_column(String(20), default="todo")
    priority: Mapped[str] = mapped_column(String(20), default="normal")
    due_date: Mapped[date | None] = mapped_column(Date, nullable=True)
    completed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=_utcnow, onupdate=_utcnow,
    )

    # Relations
    dossier: Mapped["DossierDB"] = relationship("DossierDB", back_populates="tasks")
    assignee: Mapped["UserDB"] = relationship("UserDB")


# ──────────────────────────── Chat (Phase 5) ────────────────────────────

class ChatConversationDB(Base):
    __tablename__ = "chat_conversations"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=_new_uuid
    )
    visitor_id: Mapped[str] = mapped_column(String(100), index=True)
    lead_id: Mapped[str | None] = mapped_column(
        String(12), ForeignKey("leads.id"), nullable=True
    )
    status: Mapped[str] = mapped_column(String(20), default="active")
    visitor_name: Mapped[str | None] = mapped_column(String(200), nullable=True)
    visitor_email: Mapped[str | None] = mapped_column(String(200), nullable=True)
    visitor_phone: Mapped[str | None] = mapped_column(String(50), nullable=True)
    visitor_profil: Mapped[str | None] = mapped_column(String(50), nullable=True)
    visitor_budget: Mapped[str | None] = mapped_column(String(50), nullable=True)
    visitor_ip: Mapped[str | None] = mapped_column(String(50), nullable=True)
    visitor_country: Mapped[str | None] = mapped_column(String(100), nullable=True)
    visitor_city: Mapped[str | None] = mapped_column(String(100), nullable=True)
    qualification_score: Mapped[int] = mapped_column(Integer, default=0)
    page_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=_utcnow, onupdate=_utcnow,
    )

    # Relations
    lead: Mapped["LeadDB | None"] = relationship("LeadDB", foreign_keys=[lead_id])
    messages: Mapped[list["ChatMessageDB"]] = relationship(
        "ChatMessageDB", back_populates="conversation", cascade="all, delete-orphan"
    )


class ChatMessageDB(Base):
    __tablename__ = "chat_messages"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), primary_key=True, default=_new_uuid
    )
    conversation_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True), ForeignKey("chat_conversations.id")
    )
    role: Mapped[str] = mapped_column(String(20))  # 'user' ou 'assistant'
    content: Mapped[str] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=_utcnow)

    # Relations
    conversation: Mapped["ChatConversationDB"] = relationship(
        "ChatConversationDB", back_populates="messages"
    )
