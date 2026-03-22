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


async def send_guide_fiscal(to_email: str) -> bool:
    """Envoie le Guide Fiscal Maurice 2026 par email."""
    if not _init_resend():
        return False

    guide_url = f"{settings.frontend_url}/documents/guide-fiscal-maurice-2026.html"

    html = (
        '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">'
        '  <div style="background:linear-gradient(135deg,#1e40af,#0ea5e9);padding:30px;border-radius:12px 12px 0 0;text-align:center;">'
        '    <h1 style="color:white;margin:0;font-size:24px;">Vanille Strat\u00e9gie</h1>'
        '    <p style="color:#bfdbfe;margin:8px 0 0;">Guide Fiscal Maurice 2026</p>'
        '  </div>'
        '  <div style="background:white;padding:30px;border:1px solid #e2e8f0;border-top:none;">'
        '    <h2 style="color:#1e293b;margin-top:0;">Votre guide est pr\u00eat !</h2>'
        '    <p style="color:#475569;line-height:1.6;">'
        '      Merci pour votre int\u00e9r\u00eat pour Maurice. Voici votre '
        '      <strong>Guide Fiscal Maurice 2026</strong>, r\u00e9dig\u00e9 par '
        '      Didier Laroussinie, Expert-Comptable &amp; Fiscaliste International.'
        '    </p>'
        '    <p style="color:#475569;line-height:1.6;">'
        '      Ce guide couvre les structures juridiques, la fiscalit\u00e9 2026, '
        '      les permis de r\u00e9sidence, la convention France-Maurice et une checklist '
        '      compl\u00e8te d\u2019implantation.'
        '    </p>'
        '    <div style="text-align:center;margin:30px 0;">'
        f'      <a href="{guide_url}" style="display:inline-block;background:#2563eb;'
        '        color:white;padding:14px 32px;border-radius:8px;text-decoration:none;'
        '        font-weight:700;font-size:16px;">T\u00e9l\u00e9charger le guide</a>'
        '    </div>'
        '    <p style="color:#475569;line-height:1.6;">'
        '      Une question sur votre projet ? '
        f'      <a href="{settings.frontend_url}/contact" style="color:#2563eb;">Contactez-nous</a> '
        '      pour une \u00e9tude de faisabilit\u00e9 gratuite.'
        '    </p>'
        '  </div>'
        '  <div style="background:#f8fafc;padding:20px 30px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">'
        '    <p style="color:#94a3b8;font-size:12px;margin:0;">'
        '      Vanille Strat\u00e9gie \u00b7 Grand Baie, Maurice \u00b7 +230 59 43 74 83'
        '    </p>'
        '  </div>'
        '</div>'
    )

    try:
        resend.Emails.send({
            "from": settings.email_from,
            "to": [to_email],
            "subject": "Vanille Strat\u00e9gie \u2014 Votre Guide Fiscal Maurice 2026",
            "html": html,
        })
        logger.info(f"Guide fiscal sent to {to_email}")
        return True
    except Exception as e:
        logger.error(f"Guide fiscal email error: {e}")
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
