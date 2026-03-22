import logging

import resend

from app.config import settings
from app.services.email_templates import get_confirmation_html

logger = logging.getLogger(__name__)


def _init_resend():
    if settings.resend_api_key:
        resend.api_key = settings.resend_api_key
        return True
    logger.warning("RESEND_API_KEY not set — emails disabled")
    return False


async def send_lead_notification(
    lead_type: str,
    data: dict,
    score: int = 0,
    score_label: str | None = None,
) -> bool:
    """Notifie Didier d'un nouveau lead par email via Resend."""
    if not _init_resend():
        return False

    rows = "".join(
        f"<tr><td style='padding:8px;border-bottom:1px solid #eee;color:#666;'>{k}</td>"
        f"<td style='padding:8px;border-bottom:1px solid #eee;font-weight:600;'>{v}</td></tr>"
        for k, v in data.items()
        if v
    )

    # Score badge colors
    badge_colors = {
        "vip": "#dc2626",
        "hot": "#ea580c",
        "warm": "#2563eb",
        "cold": "#6b7280",
    }
    badge_color = badge_colors.get(score_label or "cold", "#6b7280")
    badge_text = (score_label or "cold").upper()
    score_badge = (
        f'<div style="margin-bottom:16px;">'
        f'<span style="background:{badge_color};color:white;padding:6px 16px;'
        f'border-radius:20px;font-weight:700;font-size:14px;">'
        f'{badge_text} — Score {score}</span></div>'
    )

    html = f"""
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#1e293b;padding:20px;border-radius:12px 12px 0 0;">
            <h2 style="color:white;margin:0;">Nouveau lead — {lead_type}</h2>
            <p style="color:#94a3b8;margin:4px 0 0;">vanillestrategie.fr</p>
        </div>
        <div style="background:white;padding:20px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
            {score_badge}
            <table style="width:100%;border-collapse:collapse;">{rows}</table>
            <p style="margin-top:20px;color:#94a3b8;font-size:12px;">
                Répondez dans les 24h pour maximiser la conversion.
            </p>
        </div>
    </div>
    """

    try:
        resend.Emails.send({
            "from": settings.email_from,
            "to": [settings.leads_notify_email],
            "subject": f"🔔 Nouveau lead VS — {lead_type} [{badge_text}]",
            "html": html,
        })
        logger.info(f"Lead notification sent to {settings.leads_notify_email}")
        return True
    except Exception as e:
        logger.error(f"Resend error: {e}")
        return False


async def send_confirmation_email(
    to_email: str, prenom: str, profil: str = "", budget: str | None = None
) -> bool:
    """Email de confirmation au prospect via Resend, segmenté par profil."""
    if not _init_resend():
        return False

    subject, html = get_confirmation_html(prenom, profil, budget)

    try:
        resend.Emails.send({
            "from": settings.email_from,
            "to": [to_email],
            "subject": subject,
            "html": html,
        })
        return True
    except Exception as e:
        logger.error(f"Resend confirmation error: {e}")
        return False
