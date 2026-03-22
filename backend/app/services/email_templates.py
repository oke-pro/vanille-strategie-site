"""Segmented email confirmation templates by lead profile."""

BASE_URL = "https://vanillestrategie.fr"


def _wrap_html(prenom: str, body_content: str) -> str:
    """Wrap body content in the standard Vanille Strategie email layout."""
    return (
        '<!DOCTYPE html>'
        '<html lang="fr">'
        '<head>'
        '<meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
        '</head>'
        '<body style="margin:0;padding:0;background:#f1f5f9;">'
        '<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:20px 0;">'
        '    <div style="background:linear-gradient(135deg,#1e40af,#0ea5e9);padding:30px;border-radius:12px 12px 0 0;text-align:center;">'
        '        <h1 style="color:white;margin:0;font-size:24px;">Vanille Strat\u00e9gie</h1>'
        '        <p style="color:#bfdbfe;margin:8px 0 0;">Votre nouvelle vie \u00e0 Maurice commence ici</p>'
        '    </div>'
        '    <div style="background:white;padding:30px;border:1px solid #e2e8f0;border-top:none;">'
        f'        <h2 style="color:#1e293b;margin-top:0;">Bonjour {prenom},</h2>'
        f'        {body_content}'
        '    </div>'
        '    <div style="background:#f8fafc;padding:20px 30px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">'
        '        <p style="color:#94a3b8;font-size:12px;margin:0;">'
        '            Vanille Strat\u00e9gie \u00b7 Grand Baie, Maurice \u00b7 +230 466 6166'
        '        </p>'
        '    </div>'
        '</div>'
        '</body>'
        '</html>'
    )


def _cta_button(text: str, url: str) -> str:
    """Generate a CTA button."""
    return (
        '<div style="text-align:center;margin:25px 0;">'
        f'<a href="{url}" style="display:inline-block;background:linear-gradient(135deg,#1e40af,#0ea5e9);'
        f'color:white;text-decoration:none;padding:14px 32px;border-radius:8px;'
        f'font-weight:600;font-size:16px;">{text}</a>'
        '</div>'
    )


def _parse_budget(budget: str | None) -> int:
    """Try to extract a numeric value from the budget string. Returns 0 on failure."""
    if not budget:
        return 0
    cleaned = budget.lower().replace(" ", "").replace("+", "").replace(">", "").replace("\u20ac", "")
    if cleaned.endswith("k"):
        try:
            return int(float(cleaned[:-1]) * 1000)
        except ValueError:
            return 0
    try:
        return int(float(cleaned))
    except ValueError:
        return 0


def _template_entrepreneur(prenom: str, budget: str | None) -> tuple[str, str]:
    subject = "Vanille Strat\u00e9gie \u2014 Votre projet d'entreprise \u00e0 Maurice"

    budget_value = _parse_budget(budget)
    high_budget_block = ""
    if budget_value >= 100_000:
        high_budget_block = (
            '<p style="color:#475569;line-height:1.6;background:#eff6ff;padding:15px;'
            'border-radius:8px;border-left:4px solid #1e40af;">'
            "Compte tenu de l\u2019envergure de votre projet, <strong>Didier Laroussinie</strong>, "
            "Expert-Comptable &amp; Fiscaliste International, vous contactera personnellement "
            "pour un \u00e9change approfondi."
            "</p>"
        )

    cta = _cta_button("D\u00e9couvrir les prochaines \u00e9tapes", BASE_URL + "/services/creation-societe")

    body = (
        '<p style="color:#475569;line-height:1.6;">'
        "Merci pour votre int\u00e9r\u00eat pour la cr\u00e9ation d\u2019entreprise \u00e0 Maurice ! "
        "Nous avons bien re\u00e7u votre demande et notre \u00e9quipe l\u2019analyse d\u00e8s maintenant."
        "</p>"
        '<p style="color:#475569;line-height:1.6;">'
        "Saviez-vous que Maurice offre un <strong>imp\u00f4t sur les soci\u00e9t\u00e9s (IS) \u00e0 15%</strong> "
        "et un r\u00e9gime de <strong>Partial Exemption r\u00e9duisant l\u2019IS effectif \u00e0 3%</strong> "
        "sur les revenus d\u2019exportation de services ?"
        "</p>"
        '<p style="color:#475569;line-height:1.6;">'
        "D\u00e9couvrez nos services d\u00e9di\u00e9s \u00e0 la "
        f'<a href="{BASE_URL}/services/creation-societe" style="color:#2563eb;">cr\u00e9ation de soci\u00e9t\u00e9 \u00e0 Maurice</a> '
        "ou estimez vos \u00e9conomies avec notre "
        f'<a href="{BASE_URL}/simulateur-fiscal" style="color:#2563eb;">simulateur fiscal</a>.'
        "</p>"
        + high_budget_block
        + cta
        + '<p style="color:#475569;line-height:1.6;">'
        "<strong>Didier Laroussinie</strong>, Expert-Comptable &amp; Fiscaliste International, "
        "reviendra vers vous personnellement sous 24h."
        "</p>"
    )
    return subject, _wrap_html(prenom, body)


def _template_digital_nomad(prenom: str) -> tuple[str, str]:
    subject = "Vanille Strat\u00e9gie \u2014 Le Premium Visa vous attend"

    cta = _cta_button("V\u00e9rifier mon \u00e9ligibilit\u00e9", BASE_URL + "/simulateur-visa")

    body = (
        '<p style="color:#475569;line-height:1.6;">'
        "Merci pour votre int\u00e9r\u00eat pour le statut Digital Nomad \u00e0 Maurice ! "
        "Nous avons bien re\u00e7u votre demande."
        "</p>"
        '<p style="color:#475569;line-height:1.6;">'
        "Le <strong>Premium Visa</strong> vous permet de vivre et travailler depuis Maurice "
        "tout en b\u00e9n\u00e9ficiant de <strong>0% d\u2019imp\u00f4t sur les dividendes</strong> per\u00e7us "
        "de l\u2019\u00e9tranger."
        "</p>"
        '<p style="color:#475569;line-height:1.6;">'
        "Consultez notre guide complet sur le "
        f'<a href="{BASE_URL}/digital-nomad" style="color:#2563eb;">Premium Visa \u00e0 Maurice</a> '
        "ou v\u00e9rifiez votre \u00e9ligibilit\u00e9 avec notre "
        f'<a href="{BASE_URL}/simulateur-visa" style="color:#2563eb;">simulateur visa</a>.'
        "</p>"
        + cta
        + '<p style="color:#475569;line-height:1.6;">'
        "<strong>Didier Laroussinie</strong>, Expert-Comptable &amp; Fiscaliste International, "
        "reviendra vers vous personnellement sous 24h."
        "</p>"
    )
    return subject, _wrap_html(prenom, body)


def _template_retraite(prenom: str) -> tuple[str, str]:
    subject = "Vanille Strat\u00e9gie \u2014 Votre retraite au soleil \u00e0 Maurice"

    cta = _cta_button("Pr\u00e9parer ma retraite \u00e0 Maurice", BASE_URL + "/retraite")

    body = (
        '<p style="color:#475569;line-height:1.6;">'
        "Merci pour votre int\u00e9r\u00eat pour la retraite \u00e0 Maurice ! "
        "Nous avons bien re\u00e7u votre demande."
        "</p>"
        '<p style="color:#475569;line-height:1.6;">'
        "Le <strong>Retired Non-Citizen Permit</strong> vous ouvre les portes d\u2019une "
        "qualit\u00e9 de vie exceptionnelle : climat tropical, s\u00e9curit\u00e9, infrastructures "
        "de sant\u00e9 modernes, et un cadre fiscal avantageux avec "
        "<strong>0% de droits de succession</strong>."
        "</p>"
        '<p style="color:#475569;line-height:1.6;">'
        "D\u00e9couvrez notre accompagnement d\u00e9di\u00e9 aux retrait\u00e9s sur "
        f'<a href="{BASE_URL}/retraite" style="color:#2563eb;">notre page retraite</a>.'
        "</p>"
        + cta
        + '<p style="color:#475569;line-height:1.6;">'
        "<strong>Didier Laroussinie</strong>, Expert-Comptable &amp; Fiscaliste International, "
        "reviendra vers vous personnellement sous 24h."
        "</p>"
    )
    return subject, _wrap_html(prenom, body)


def _template_entreprise(prenom: str) -> tuple[str, str]:
    subject = "Vanille Strat\u00e9gie \u2014 Votre filiale \u00e0 Maurice"

    cta = _cta_button("Structurer ma filiale", BASE_URL + "/entreprise")

    body = (
        '<p style="color:#475569;line-height:1.6;">'
        "Merci pour votre int\u00e9r\u00eat pour l\u2019implantation de votre entreprise \u00e0 Maurice ! "
        "Nous avons bien re\u00e7u votre demande."
        "</p>"
        '<p style="color:#475569;line-height:1.6;">'
        "Maurice offre un cadre id\u00e9al pour votre filiale gr\u00e2ce \u00e0 la licence "
        "<strong>Global Business Company (GBC)</strong> et un r\u00e9seau de "
        "<strong>plus de 45 conventions fiscales internationales</strong> facilitant "
        "vos \u00e9changes avec l\u2019Europe, l\u2019Afrique et l\u2019Asie."
        "</p>"
        '<p style="color:#475569;line-height:1.6;">'
        "<strong>Didier Laroussinie</strong>, fort de son exp\u00e9rience chez Deloitte, "
        "vous accompagnera dans la structuration optimale de votre pr\u00e9sence \u00e0 Maurice."
        "</p>"
        '<p style="color:#475569;line-height:1.6;">'
        "D\u00e9couvrez nos services sur "
        f'<a href="{BASE_URL}/entreprise" style="color:#2563eb;">notre page entreprise</a>.'
        "</p>"
        + cta
    )
    return subject, _wrap_html(prenom, body)


def _template_investisseur(prenom: str) -> tuple[str, str]:
    subject = "Vanille Strat\u00e9gie \u2014 Investissement immobilier \u00e0 Maurice"

    cta = _cta_button("Voir les opportunit\u00e9s", BASE_URL + "/services/immobilier")

    body = (
        '<p style="color:#475569;line-height:1.6;">'
        "Merci pour votre int\u00e9r\u00eat pour l\u2019investissement immobilier \u00e0 Maurice ! "
        "Nous avons bien re\u00e7u votre demande."
        "</p>"
        '<p style="color:#475569;line-height:1.6;">'
        "Maurice propose des dispositifs attractifs pour les investisseurs \u00e9trangers : "
        "le <strong>Property Development Scheme (PDS)</strong> et le <strong>Smart City Scheme</strong> "
        "vous permettent d\u2019acqu\u00e9rir un bien et d\u2019obtenir un permis de r\u00e9sidence, tout en "
        "b\u00e9n\u00e9ficiant de <strong>0% d\u2019imp\u00f4t sur les plus-values immobili\u00e8res</strong>."
        "</p>"
        '<p style="color:#475569;line-height:1.6;">'
        "Consultez nos opportunit\u00e9s sur "
        f'<a href="{BASE_URL}/services/immobilier" style="color:#2563eb;">notre page immobilier</a>.'
        "</p>"
        + cta
        + '<p style="color:#475569;line-height:1.6;">'
        "<strong>Didier Laroussinie</strong>, Expert-Comptable &amp; Fiscaliste International, "
        "reviendra vers vous personnellement sous 24h."
        "</p>"
    )
    return subject, _wrap_html(prenom, body)


def _template_default(prenom: str) -> tuple[str, str]:
    """Fallback generic template matching the original confirmation email."""
    subject = "Vanille Strat\u00e9gie \u2014 Nous avons bien re\u00e7u votre demande"

    cta = _cta_button("D\u00e9couvrir nos services", BASE_URL)

    body = (
        '<p style="color:#475569;line-height:1.6;">'
        "Merci pour votre int\u00e9r\u00eat pour Maurice ! Nous avons bien re\u00e7u votre demande."
        "</p>"
        '<p style="color:#475569;line-height:1.6;">'
        "<strong>Didier Laroussinie</strong>, Expert-Comptable &amp; Fiscaliste International, "
        "reviendra vers vous personnellement sous 24h."
        "</p>"
        '<p style="color:#475569;line-height:1.6;">'
        "En attendant, consultez nos "
        f'<a href="{BASE_URL}/ressources/guides" style="color:#2563eb;">guides experts</a> '
        "ou notre "
        f'<a href="{BASE_URL}/ressources/faq" style="color:#2563eb;">FAQ</a>.'
        "</p>"
        + cta
    )
    return subject, _wrap_html(prenom, body)


def get_confirmation_html(prenom: str, profil: str, budget: str | None = None) -> tuple[str, str]:
    """Returns (subject, html) based on lead segment.

    Parameters
    ----------
    prenom : str
        Prospect first name.
    profil : str
        Lead profile identifier sent by the frontend.
    budget : str | None
        Optional budget string (e.g. "100k", "50000").

    Returns
    -------
    tuple[str, str]
        (email subject, full HTML body)
    """
    profil_lower = (profil or "").strip().lower()

    if profil_lower == "entrepreneur":
        return _template_entrepreneur(prenom, budget)
    elif profil_lower == "digital-nomad":
        return _template_digital_nomad(prenom)
    elif profil_lower in ("retraite", "retrait\u00e9"):
        return _template_retraite(prenom)
    elif profil_lower == "entreprise":
        return _template_entreprise(prenom)
    elif profil_lower == "investisseur":
        return _template_investisseur(prenom)
    else:
        return _template_default(prenom)
