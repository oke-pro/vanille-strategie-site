import logging

import resend

from app.config import settings

logger = logging.getLogger(__name__)


def _init_resend():
    if settings.resend_api_key:
        resend.api_key = settings.resend_api_key
        return True
    logger.warning("RESEND_API_KEY not set — emails disabled")
    return False


async def send_lead_notification(lead_type: str, data: dict) -> bool:
    """Notifie Didier d'un nouveau lead par email via Resend."""
    if not _init_resend():
        return False

    rows = "".join(
        f"<tr><td style='padding:8px;border-bottom:1px solid #eee;color:#666;'>{k}</td>"
        f"<td style='padding:8px;border-bottom:1px solid #eee;font-weight:600;'>{v}</td></tr>"
        for k, v in data.items()
        if v
    )

    html = f"""
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#1e293b;padding:20px;border-radius:12px 12px 0 0;">
            <h2 style="color:white;margin:0;">Nouveau lead — {lead_type}</h2>
            <p style="color:#94a3b8;margin:4px 0 0;">vanille-strategie.oke.pro</p>
        </div>
        <div style="background:white;padding:20px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
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
            "subject": f"🔔 Nouveau lead VS — {lead_type}",
            "html": html,
        })
        logger.info(f"Lead notification sent to {settings.leads_notify_email}")
        return True
    except Exception as e:
        logger.error(f"Resend error: {e}")
        return False


async def send_confirmation_email(to_email: str, prenom: str) -> bool:
    """Email de confirmation au prospect via Resend."""
    if not _init_resend():
        return False

    html = f"""
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:linear-gradient(135deg,#1e40af,#0ea5e9);padding:30px;border-radius:12px 12px 0 0;text-align:center;">
            <h1 style="color:white;margin:0;font-size:24px;">Vanille Stratégie</h1>
            <p style="color:#bfdbfe;margin:8px 0 0;">Votre nouvelle vie à Maurice commence ici</p>
        </div>
        <div style="background:white;padding:30px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
            <h2 style="color:#1e293b;">Bonjour {prenom},</h2>
            <p style="color:#475569;line-height:1.6;">
                Merci pour votre intérêt pour Maurice ! Nous avons bien reçu votre demande.
            </p>
            <p style="color:#475569;line-height:1.6;">
                <strong>Didier Laroussinie</strong>, Expert-Comptable &amp; Fiscaliste International,
                reviendra vers vous personnellement sous 24h.
            </p>
            <p style="color:#475569;line-height:1.6;">
                En attendant, consultez nos
                <a href="https://vanille-strategie.oke.pro/ressources/guides" style="color:#2563eb;">guides experts</a>
                ou notre
                <a href="https://vanille-strategie.oke.pro/ressources/faq" style="color:#2563eb;">FAQ</a>.
            </p>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;">
            <p style="color:#94a3b8;font-size:12px;">
                Vanille Stratégie · Grand Baie, Maurice · +230 466 6166
            </p>
        </div>
    </div>
    """

    try:
        resend.Emails.send({
            "from": settings.email_from,
            "to": [to_email],
            "subject": "Vanille Stratégie — Nous avons bien reçu votre demande",
            "html": html,
        })
        return True
    except Exception as e:
        logger.error(f"Resend confirmation error: {e}")
        return False
