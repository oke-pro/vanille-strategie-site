# Audit Nouvelle Version — Tunnel Premium Vanille Stratégie

Date: 22 mars 2026  
Auteur: Codex

## Synthèse

Le site a clairement progressé: meilleure cohérence visuelle premium, tunnel de lead plus structuré, instrumentation analytics ajoutée, anti-spam/rate-limit côté API, base SEO enrichie.

Niveau actuel estimé: **7.8 / 10** sur l'objectif "acquisition hyper premium".

Le principal écart n'est plus la direction artistique, mais la **fiabilité perçue** sur quelques points critiques (SEO technique, composants conversion globaux, expérience portail).

## Ce qui a nettement progressé

1. **Homepage plus premium et plus dense en preuve d'autorité**: sections renforcées (`src/app/(marketing)/page.tsx`).
2. **Tunnel lead capture maturé**: qualification en 2 étapes + budget/timeline + RGPD + tracking (`src/components/sections/lead-capture.tsx`).
3. **Formulaire contact professionnalisé**: RGPD + tracking + feedback propre (`src/components/forms/contact-form.tsx`).
4. **Analytics intégrée**: composant GA + events (`src/components/analytics/google-analytics.tsx`, `src/app/layout.tsx:88`).
5. **SEO blog structuré**: canonical sur articles et JSON-LD blog (`src/app/(marketing)/ressources/blog/[slug]/page.tsx`).
6. **Backend acquisition renforcé**: anti-spam + rate limit + scoring leads (`backend/app/routers/leads.py`, `backend/app/middleware/*`, `backend/app/services/leads.py`).
7. **Dette d'architecture réduite**: plus de double home `/` (`.next/app-path-routes-manifest.json` ne garde que `/(marketing)/page`).

## Points faibles prioritaires (restants)

### P0 — Critique (impact direct crédibilité / acquisition)

1. **Incohérence robots vs domaine canonique**  
   - `src/app/robots.ts:12` pointe vers `https://vanille-strategie.oke.pro/sitemap.xml` alors que le site, metadata et sitemap sont en `https://vanillestrategie.fr`.  
   - Risque: signal SEO contradictoire (crawl/indexation), perte de confiance technique.

2. **Lint bloquant avec erreurs réelles sur composants clés**  
   - `src/components/conversion/social-proof-notification.tsx:52` (callback utilisé avant déclaration selon règle hooks).  
   - `src/app/(auth)/layout.tsx:7` et `src/app/(auth)/login/page.tsx:115` (`<a href="/">` au lieu de `Link`).  
   - Risque: qualité non "production clean" sur des zones conversion/auth.

### P1 — Important (expérience premium et conversion)

3. **Navigation portail/cabinet vers pages inexistantes (404)**  
   - Liens présents vers `/portal/profil`, `/cabinet/pipeline`, `/cabinet/taches` (`src/app/portal/layout.tsx:13`, `src/app/cabinet/layout.tsx:9,12`).  
   - Dossiers absents: `src/app/portal/profil`, `src/app/cabinet/pipeline`, `src/app/cabinet/taches`.  
   - Risque: rupture de confiance sur espace client/staff (non premium pour un service haut de gamme).

4. **Sticky CTA mobile global potentiellement “no-op”**  
   - Le bouton cible `#contact-rapide` (`src/components/conversion/sticky-cta-mobile.tsx:39`) mais ce target n'existe pas sur la plupart des pages.  
   - Risque: CTA visible qui ne mène à rien sur certaines routes.

5. **Actifs SEO/OG manquants**  
   - `og-blog.png` référencé par metadata blog (`src/app/(marketing)/ressources/blog/[slug]/page.tsx:57`) mais absent de `public/images`.  
   - `hero-maurice.jpg` fallback référencé (`src/components/sections/profil-cards.tsx:48`) mais absent.  
   - Risque: partages sociaux dégradés (image manquante), petites ruptures visuelles.

6. **Capture simulateurs encore fragile sur gestion d'erreur/état**  
   - Succès affiché, mais pas d'état d'échec structuré ni loading dédié dans le mini-form capture (`simulateur-visa`, `simulateur-fiscal`).  
   - `ca` reste optionnel mais envoyé en float (`src/app/(marketing)/ressources/simulateur-fiscal/page.tsx:60` + `:129`), potentiel 422 côté API si vide.

7. **Preuve sociale statique potentiellement perçue comme artificielle**  
   - Messages hardcodés (`src/components/conversion/social-proof-notification.tsx:7-11`).  
   - Risque: perception "marketing fabriqué" pour une cible premium exigeante.

### P2 — Opportunités (robustesse et performance)

8. **Warning build persistant (root lockfiles/turbopack root)**  
   - Vu en build (`pnpm -s build`), pas bloquant mais signal de config incomplète.

9. **Médias lourds sur homepage**  
   - `public/media/podcast-expatriation-fiscale-maurice.m4a` (~40 MB), `presentation-maurice.mp4` (~30 MB), `infographie` (~6 MB).  
   - Peut impacter perception performance sur mobile si mal chargé côté runtime.

10. **Secret JWT par défaut non sécurisé en fallback**  
   - `backend/app/config.py:19` (`CHANGE-ME...`).  
   - Correct si variable d'env override en prod, sinon risque fort.

## Plan d'action recommandé

### Sprint 0 (24-48h)

1. Corriger `robots.ts` vers `https://vanillestrategie.fr/sitemap.xml`.
2. Corriger les 3 erreurs lint bloquantes (social proof + liens auth).
3. Retirer/masquer les items nav pointant vers pages non livrées (ou créer des écrans placeholder propres).
4. Ajouter `public/images/og-blog.png` et corriger les références fallback absentes.

### Sprint 1 (3-5 jours)

1. Rendre le sticky CTA contextuel (affichage uniquement si `#contact-rapide` présent).
2. Durcir la capture simulateurs: loading + error UI + validation stricte `ca`.
3. Rendre la social proof “data-driven” (ou neutraliser les claims chiffrés statiques).

### Sprint 2 (1-2 semaines)

1. Optimiser stratégie médias (compression, poster image, lazy policies, formats).
2. Stabiliser la config build (turbopack root / lockfiles).
3. Vérifier en production que `JWT_SECRET` est injecté et non fallback.

## Verdict

La trajectoire est bonne: la promesse premium est désormais crédible sur le front marketing.  
Pour franchir le vrai seuil "hyper premium", il faut maintenant verrouiller les **détails de fiabilité**: SEO domain consistency, navigation sans impasse, composants conversion irréprochables, et qualité lint clean.
