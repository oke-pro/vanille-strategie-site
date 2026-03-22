from datetime import datetime, timezone

from sqlalchemy import JSON, Boolean, DateTime, String
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
