from datetime import datetime, timezone

from sqlalchemy import JSON, Boolean, DateTime, Float, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


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
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )


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
    latitude: Mapped[float | None] = mapped_column(Float, nullable=True)
    longitude: Mapped[float | None] = mapped_column(Float, nullable=True)

    # Métadonnées Google
    rating: Mapped[float | None] = mapped_column(Float, nullable=True)
    reviews_count: Mapped[int | None] = mapped_column(Integer, nullable=True)
    photo_urls: Mapped[dict | None] = mapped_column(JSON, nullable=True)

    # Status
    is_published: Mapped[bool] = mapped_column(Boolean, default=False)
    scraped_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
    )
