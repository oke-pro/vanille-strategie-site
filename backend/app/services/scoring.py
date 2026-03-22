"""Lead scoring service for Vanille Stratégie."""


# Base scores by lead type
BASE_SCORES: dict[str, int] = {
    "contact": 30,
    "quick": 20,
    "simulateur-fiscal": 25,
    "simulateur-visa": 25,
    "newsletter": 10,
}

# Budget bonuses
BUDGET_BONUSES: dict[str, int] = {
    "< 50k€": 0,
    "50k-100k€": 15,
    "100k-250k€": 30,
    "250k€+": 50,
}

# Timeline bonuses
TIMELINE_BONUSES: dict[str, int] = {
    "< 3 mois": 20,
    "3-6 mois": 10,
    "6-12 mois": 5,
    "> 12 mois": 0,
}

# Profile bonuses
PROFILE_BONUSES: dict[str, int] = {
    "entrepreneur": 10,
    "entreprise": 15,
    "investisseur": 15,
    "retraite": 5,
    "digital-nomad": 5,
    "autre": 0,
}


def _get_label(score: int) -> str:
    """Return score label based on numeric score."""
    if score >= 70:
        return "vip"
    if score >= 50:
        return "hot"
    if score >= 30:
        return "warm"
    return "cold"


def compute_lead_score(lead_type: str, data: dict) -> tuple[int, str]:
    """Compute a lead score and label based on type and data fields.

    Returns:
        A tuple of (score, label) where label is one of
        "cold", "warm", "hot", "vip".
    """
    score = BASE_SCORES.get(lead_type, 10)

    # Budget bonus
    budget = data.get("budget", "")
    score += BUDGET_BONUSES.get(budget, 0)

    # Timeline bonus
    timeline = data.get("timeline", "")
    score += TIMELINE_BONUSES.get(timeline, 0)

    # Profile bonus
    profil = data.get("profil", "")
    score += PROFILE_BONUSES.get(profil, 0)

    # Completeness bonuses
    if data.get("telephone"):
        score += 5
    if data.get("message"):
        score += 5

    label = _get_label(score)
    return score, label
