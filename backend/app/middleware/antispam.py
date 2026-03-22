"""Anti-spam validators for lead submissions."""

import re

# ── Blocked disposable-email domains ──────────────────────────────────────────
BLOCKED_EMAIL_DOMAINS: set[str] = {
    "tempmail.com",
    "temp-mail.org",
    "guerrillamail.com",
    "guerrillamail.net",
    "guerrillamailblock.com",
    "grr.la",
    "mailinator.com",
    "yopmail.com",
    "yopmail.fr",
    "throwaway.email",
    "trashmail.com",
    "trashmail.net",
    "sharklasers.com",
    "guerrillamail.info",
    "dispostable.com",
    "maildrop.cc",
    "10minutemail.com",
    "tempail.com",
    "fakeinbox.com",
    "mailnesia.com",
}

# ── Spam phrases (lowercased) ────────────────────────────────────────────────
SPAM_PHRASES: list[str] = [
    "buy now",
    "click here",
    "free money",
    "make money fast",
    "viagra",
    "cialis",
    "casino",
    "cryptocurrency investment",
    "earn extra cash",
    "nigerian prince",
    "you have been selected",
    "congratulations you won",
    "act now",
    "limited time offer",
    "dear friend",
    "bitcoin doubler",
]

_URL_PATTERN = re.compile(r"https?://", re.IGNORECASE)


def is_suspicious_submission(data: dict) -> tuple[bool, str]:
    """Check for spam indicators.

    Returns (is_spam, reason).
    """
    # 1. Honeypot field — must stay empty
    website = data.get("website")
    if website:
        return True, "honeypot"

    # 2. Email domain blocklist
    email: str | None = data.get("email")
    if email and "@" in email:
        domain = email.rsplit("@", 1)[1].lower()
        if domain in BLOCKED_EMAIL_DOMAINS:
            return True, "email_blocked"

    # 3. Name validation (prenom / nom)
    for field in ("prenom", "nom"):
        name: str | None = data.get(field)
        if name is not None:
            stripped = name.strip()
            if len(stripped) < 2:
                return True, f"{field}_too_short"
            if stripped.isdigit():
                return True, f"{field}_numeric"

    # 4. Message content checks
    message: str | None = data.get("message")
    if message:
        lower_msg = message.lower()

        # Too many URLs
        url_count = len(_URL_PATTERN.findall(message))
        if url_count > 3:
            return True, "too_many_urls"

        # Mostly uppercase (> 80 % of alpha chars, min 20 chars)
        alpha_chars = [c for c in message if c.isalpha()]
        if len(alpha_chars) >= 20:
            upper_ratio = sum(1 for c in alpha_chars if c.isupper()) / len(alpha_chars)
            if upper_ratio > 0.8:
                return True, "excessive_caps"

        # Known spam phrases
        for phrase in SPAM_PHRASES:
            if phrase in lower_msg:
                return True, f"spam_phrase:{phrase}"

    # 5. Objet (subject) checks — same content rules
    objet: str | None = data.get("objet")
    if objet:
        lower_objet = objet.lower()
        for phrase in SPAM_PHRASES:
            if phrase in lower_objet:
                return True, f"spam_phrase_objet:{phrase}"

    return False, ""
