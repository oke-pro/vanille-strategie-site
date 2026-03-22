"""
Test standalone du scraper Google Places (New) — sans PostgreSQL.
Usage : cd backend && uv run python -m app.services.scraper_test
"""

import asyncio
import json
import os
import sys
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

import httpx

# ---------------------------------------------------------------------------
# On importe directement les fonctions utilitaires du scraper SANS toucher
# à la base de données.  Le module scraper importe `settings` (pydantic-settings)
# qui lit le .env automatiquement — donc la clé API est disponible.
# ---------------------------------------------------------------------------
from app.services.scraper import (
    nearby_search,
    parse_place,
    text_search,
)

DATA_DIR = Path(__file__).resolve().parents[2] / "data"
OUTPUT_FILE = DATA_DIR / "companies_scraped.json"


async def main():
    print("=" * 60)
    print("  Scraper Google Places — Test standalone (sans DB)")
    print("=" * 60)

    all_parsed: list[dict] = []
    seen_ids: set[str] = set()

    async with httpx.AsyncClient(timeout=30) as client:

        # ------------------------------------------------------------------
        # 1) Nearby Search : "bank"
        # ------------------------------------------------------------------
        print("\n[1/3] Nearby Search — type='bank' ...")
        try:
            result = await nearby_search(client, "bank")
            places = result.get("places", [])
            print(f"      -> {len(places)} résultats bruts")
            for p in places:
                pid = p.get("id")
                if pid and pid not in seen_ids:
                    seen_ids.add(pid)
                    all_parsed.append(parse_place(p, "Finance & Banque", "Banques"))
        except httpx.HTTPStatusError as e:
            print(f"      ERREUR HTTP {e.response.status_code}: {e.response.text[:200]}")
        except Exception as e:
            print(f"      ERREUR: {e}")

        await asyncio.sleep(0.5)

        # ------------------------------------------------------------------
        # 2) Nearby Search : "hotel"
        # ------------------------------------------------------------------
        print("\n[2/3] Nearby Search — type='hotel' ...")
        try:
            result = await nearby_search(client, "hotel")
            places = result.get("places", [])
            print(f"      -> {len(places)} résultats bruts")
            for p in places:
                pid = p.get("id")
                if pid and pid not in seen_ids:
                    seen_ids.add(pid)
                    all_parsed.append(parse_place(p, "Tourisme & Hôtellerie", "Hôtels"))
        except httpx.HTTPStatusError as e:
            print(f"      ERREUR HTTP {e.response.status_code}: {e.response.text[:200]}")
        except Exception as e:
            print(f"      ERREUR: {e}")

        await asyncio.sleep(0.5)

        # ------------------------------------------------------------------
        # 3) Text Search : "IT company Mauritius"
        # ------------------------------------------------------------------
        print("\n[3/3] Text Search — 'IT company Mauritius' ...")
        try:
            result = await text_search(client, "IT company Mauritius")
            places = result.get("places", [])
            print(f"      -> {len(places)} résultats bruts")
            for p in places:
                pid = p.get("id")
                if pid and pid not in seen_ids:
                    seen_ids.add(pid)
                    all_parsed.append(parse_place(p, "Tech & Digital", "ESN"))
        except httpx.HTTPStatusError as e:
            print(f"      ERREUR HTTP {e.response.status_code}: {e.response.text[:200]}")
        except Exception as e:
            print(f"      ERREUR: {e}")

    # ----------------------------------------------------------------------
    # Sauvegarde JSON
    # ----------------------------------------------------------------------
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    # Convertir les datetime en ISO pour la sérialisation JSON
    def json_default(obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        raise TypeError(f"Type {type(obj)} non sérialisable")

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(all_parsed, f, ensure_ascii=False, indent=2, default=json_default)

    print(f"\n{'=' * 60}")
    print(f"  Résultats sauvegardés dans : {OUTPUT_FILE}")
    print(f"{'=' * 60}")

    # ----------------------------------------------------------------------
    # Résumé
    # ----------------------------------------------------------------------
    total = len(all_parsed)
    with_website = sum(1 for c in all_parsed if c.get("website"))
    without_website = total - with_website
    with_phone = sum(1 for c in all_parsed if c.get("phone"))
    with_rating = sum(1 for c in all_parsed if c.get("rating"))

    cat_counter = Counter(c.get("category", "?") for c in all_parsed)
    subcat_counter = Counter(c.get("subcategory", "?") for c in all_parsed)

    print(f"\n--- RÉSUMÉ ---")
    print(f"  Entreprises uniques trouvées : {total}")
    print(f"  Avec site web               : {with_website}")
    print(f"  Sans site web               : {without_website}")
    print(f"  Avec téléphone              : {with_phone}")
    print(f"  Avec note Google            : {with_rating}")

    print(f"\n  Par catégorie :")
    for cat, count in cat_counter.most_common():
        print(f"    {cat:35s} : {count}")

    print(f"\n  Par sous-catégorie :")
    for subcat, count in subcat_counter.most_common():
        print(f"    {subcat:35s} : {count}")

    # Afficher quelques exemples
    print(f"\n--- EXEMPLES (5 premiers) ---")
    for c in all_parsed[:5]:
        web = c.get("website", "—")
        print(f"  • {c['name']:40s} | {c['category']:25s} | {web}")

    print()


if __name__ == "__main__":
    asyncio.run(main())
