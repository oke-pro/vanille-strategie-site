"""
Enrichissement des fiches entreprises avec des descriptions détaillées basées sur le contenu de leur site web.
Utilise l'API Claude pour générer des descriptions SEO en français.
Usage : uv run python -m app.services.enrich_companies
"""

import asyncio
import json
import logging
import re
import time
from pathlib import Path

import httpx
from sqlalchemy import select, and_
from sqlalchemy.ext.asyncio import AsyncSession

from app.config import settings
from app.database import async_session
from app.models.db_models import CompanyDB

logging.basicConfig(level=logging.INFO, format="%(asctime)s | %(levelname)s | %(message)s")
log = logging.getLogger(__name__)

# Configuration
ANTHROPIC_API_KEY = settings.anthropic_api_key
ANTHROPIC_ENDPOINT = "https://api.anthropic.com/v1/messages"
ANTHROPIC_VERSION = "2023-06-01"
MODEL = "claude-haiku-4-5-20251001"
TIMEOUT_SECONDS = 10
DELAY_BETWEEN_CALLS = 1  # délai entre appels API en secondes
USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)


def extract_text_from_html(html: str, max_chars: int = 3000) -> str:
    """
    Extrait le texte visible du HTML en utilisant des regex.
    
    Récupère:
    - La balise <title>
    - Les meta description et meta keywords
    - Le texte des premiers <p>, <h1>, <h2>, <h3>
    """
    if not html:
        return ""

    extracted = []

    # Extraire le titre
    title_match = re.search(r"<title[^>]*>([^<]+)</title>", html, re.IGNORECASE)
    if title_match:
        title = title_match.group(1).strip()
        if title:
            extracted.append(f"Titre: {title}")

    # Extraire meta description
    meta_desc = re.search(
        r'<meta\s+name=["\']?description["\']?\s+content=["\']([^"\']+)["\']',
        html,
        re.IGNORECASE
    )
    if meta_desc:
        desc = meta_desc.group(1).strip()
        if desc:
            extracted.append(f"Description: {desc}")

    # Extraire meta keywords
    meta_keywords = re.search(
        r'<meta\s+name=["\']?keywords["\']?\s+content=["\']([^"\']+)["\']',
        html,
        re.IGNORECASE
    )
    if meta_keywords:
        keywords = meta_keywords.group(1).strip()
        if keywords:
            extracted.append(f"Mots-clés: {keywords}")

    # Extraire les headings et paragraphes
    for tag in ["h1", "h2", "h3", "p"]:
        pattern = rf"<{tag}[^>]*>([^<]+)</{tag}>"
        matches = re.findall(pattern, html, re.IGNORECASE)
        for match in matches:
            text = match.strip()
            # Nettoyer les balises HTML résiduelles
            text = re.sub(r"<[^>]+>", "", text)
            text = text.strip()
            if text and len(text) > 10:
                extracted.append(text)

    # Joindre et limiter la longueur
    result = "\n".join(extracted)
    if len(result) > max_chars:
        result = result[:max_chars]

    return result


async def scrape_website(url: str) -> str | None:
    """
    Scrape la page d'accueil du site web.
    Retourne le contenu HTML brut ou None en cas d'erreur.
    """
    if not url:
        return None

    # Assurer que l'URL a un schéma
    if not url.startswith(("http://", "https://")):
        url = f"https://{url}"

    try:
        async with httpx.AsyncClient(timeout=TIMEOUT_SECONDS, follow_redirects=True) as client:
            response = await client.get(
                url,
                headers={"User-Agent": USER_AGENT}
            )
            response.raise_for_status()
            return response.text
    except Exception as e:
        log.warning(f"Erreur lors du scraping de {url}: {e}")
        return None


async def call_claude_api(extracted_text: str, company_name: str) -> str | None:
    """
    Appelle l'API Claude pour générer une description SEO.
    """
    if not ANTHROPIC_API_KEY:
        log.error("ANTHROPIC_API_KEY not set in environment")
        return None

    if not extracted_text or len(extracted_text.strip()) < 50:
        log.warning(f"Texte extrait insuffisant pour {company_name} ({len(extracted_text)} caractères)")
        return None

    prompt = f"""Vous êtes un expert en rédaction SEO spécialisé dans les entreprises à Maurice.

Basé sur les informations suivantes extraites du site web de l'entreprise "{company_name}", 
rédigez un article de présentation SEO:

INFORMATIONS EXTRAITES:
{extracted_text}

CONSIGNES:
- Rédigez un article de présentation en français de 300-500 mots
- Utilisez des sous-titres en markdown (##) pour structurer l'article
- Ton professionnel et informatif
- Mentionnez la localisation à Maurice dans le contenu
- NE PAS inventer d'informations non présentes dans le contenu fourni
- Si le contenu est insuffisant, écrivez une description plus courte mais factuelle (150-200 mots)
- Optimisez pour le SEO tout en restant naturel
- Commencez directement par le contenu sans préambule

Article:"""

    try:
        async with httpx.AsyncClient(timeout=TIMEOUT_SECONDS * 3) as client:
            response = await client.post(
                ANTHROPIC_ENDPOINT,
                headers={
                    "x-api-key": ANTHROPIC_API_KEY,
                    "anthropic-version": ANTHROPIC_VERSION,
                    "content-type": "application/json",
                },
                json={
                    "model": MODEL,
                    "max_tokens": 1000,
                    "messages": [
                        {
                            "role": "user",
                            "content": prompt
                        }
                    ]
                }
            )
            response.raise_for_status()
            result = response.json()
            
            if result.get("content") and len(result["content"]) > 0:
                return result["content"][0].get("text", "").strip()
            
            log.warning(f"Réponse Claude vide pour {company_name}")
            return None

    except Exception as e:
        log.error(f"Erreur appel API Claude pour {company_name}: {e}")
        return None


async def get_companies_needing_enrichment(session: AsyncSession) -> list[CompanyDB]:
    """
    Récupère les entreprises sans description ou avec une description < 100 caractères.
    """
    query = select(CompanyDB).where(
        and_(
            CompanyDB.website.isnot(None),
            (
                CompanyDB.description.is_(None) |
                (len(CompanyDB.description) < 100)
            )
        )
    )
    result = await session.execute(query)
    return result.scalars().all()


async def enrich_company(
    session: AsyncSession,
    company: CompanyDB
) -> bool:
    """
    Enrichit une entreprise avec sa description générée.
    Retourne True si succès, False sinon.
    """
    log.info(f"Traitement: {company.name} ({company.website})")

    # Scraper le site web
    html = await scrape_website(company.website)
    if not html:
        log.warning(f"Impossible de scraper {company.website}")
        return False

    # Extraire le texte
    extracted_text = extract_text_from_html(html)
    if not extracted_text or len(extracted_text.strip()) < 50:
        log.warning(f"Texte extrait insuffisant pour {company.name}")
        return False

    # Générer la description via Claude
    description = await call_claude_api(extracted_text, company.name)
    if not description:
        log.warning(f"Impossible de générer la description pour {company.name}")
        return False

    # Sauvegarder
    try:
        company.description = description
        await session.commit()
        log.info(f"✓ Description sauvegardée pour {company.name}")
        return True
    except Exception as e:
        log.error(f"Erreur lors de la sauvegarde pour {company.name}: {e}")
        await session.rollback()
        return False


async def run_enrichment():
    """
    Exécute l'enrichissement pour toutes les entreprises.
    """
    log.info("=== Démarrage de l'enrichissement des entreprises ===")

    if not ANTHROPIC_API_KEY:
        log.error("ANTHROPIC_API_KEY non configurée dans les variables d'environnement")
        return

    async with async_session() as session:
        # Récupérer les entreprises à traiter
        companies = await get_companies_needing_enrichment(session)
        total = len(companies)

        if total == 0:
            log.info("Aucune entreprise à enrichir")
            return

        log.info(f"Trouvé {total} entreprise(s) à enrichir")

        success_count = 0
        failed_count = 0

        for i, company in enumerate(companies, 1):
            try:
                log.info(f"[{i}/{total}] Traitement...")
                success = await enrich_company(session, company)

                if success:
                    success_count += 1
                else:
                    failed_count += 1

                # Délai entre les appels API
                if i < total:
                    await asyncio.sleep(DELAY_BETWEEN_CALLS)

            except Exception as e:
                log.error(f"Erreur lors du traitement de {company.name}: {e}")
                failed_count += 1

    # Résumé
    log.info("\n=== Résumé ===")
    log.info(f"Total: {total}")
    log.info(f"Succès: {success_count}")
    log.info(f"Échecs: {failed_count}")


def main():
    """Point d'entrée du script."""
    asyncio.run(run_enrichment())


if __name__ == "__main__":
    main()
