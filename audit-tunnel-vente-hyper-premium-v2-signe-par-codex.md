# Audit tunnel d'acquisition hyper premium — Vanille Stratégie

_Date : 21 mars 2026_
_Auteur : Codex_

## 1) Résumé exécutif

Le site est **visuellement solide** et le tunnel fonctionne globalement, avec une vraie montée en gamme depuis le dernier audit (capture de leads active sur `/contact` et simulateurs, persistance DB en place).

Mais en l'état, il reste des points faibles qui freinent l'objectif "hyper premium + acquisition" :

1. **Pertes SEO évitables** (canonical global, sitemap incomplet, slugs incohérents).
2. **Frictions UX sur la conversion** (feedback `alert()`, erreurs non premium, validation partielle).
3. **Crédibilité de marque hétérogène** (domaines `.fr` / `.oke.pro` / `.com`, assets manquants).
4. **Pilotage commercial incomplet** (pas d'analytics funnel, endpoint admin cassé, qualité lint non maîtrisée).

### Score global (objectif acquisition premium)
- Positionnement/brand premium : **7.5/10**
- Conversion UX (forms/simulateurs) : **6.5/10**
- SEO acquisition : **5.5/10**
- Fiabilité opérationnelle : **6/10**
- Pilotage (mesure/itération) : **3/10**

## 2) Points faibles prioritaires

## P0 — Critique (impact direct acquisition)

### P0.1 — Canonical global incorrect sur toutes les pages
- Constat : canonical fixé uniquement à la home.
- Preuve : `src/app/layout.tsx:74-75` (`canonical: "https://vanillestrategie.fr"`).
- Impact : signal SEO contradictoire (pages profondes potentiellement consolidées sur `/`), baisse d'indexation utile.

### P0.2 — Sitemap incomplet par rapport aux pages réellement publiées
- Constat : beaucoup de pages blog/ressources ne sont pas dans `sitemap.ts`.
- Preuve : `src/app/sitemap.ts:9-48` ne couvre qu'un sous-ensemble ; 21 routes manquantes détectées (dont `/ressources/analyse-income-tax-act`, `/ressources/analyse-vat-act` et 19 pages blog).
- Impact : acquisition organique bridée sur le bas de funnel informationnel.

### P0.3 — Incohérence de slug blog (accentué vs non accentué)
- Constat : slug listé en ASCII dans index/sitemap, mais clé accentuée dans route dynamique.
- Preuves :
  - `src/app/(marketing)/ressources/blog/page.tsx:29` => `fiscalite-maurice-2026`
  - `src/app/(marketing)/ressources/blog/[slug]/page.tsx:21` => `fiscalité-maurice-2026`
  - `src/app/sitemap.ts:43` => `fiscalite-maurice-2026`
- Impact : risques de mismatch URL/SEO, dilution des signaux, expérience incohérente.

### P0.4 — Endpoint admin non fonctionnel pour piloter les leads
- Constat : fonctions async appelées sans `await` dans router admin.
- Preuves :
  - `backend/app/routers/admin.py:18` (`leads = get_all_leads()`)
  - `backend/app/routers/admin.py:28` (`return get_leads_count()`)
  - alors que `backend/app/services/leads.py:72` et `:92` sont `async`.
- Impact : impossibilité de supervision fiable du tunnel côté ops/commercial.

## P1 — Important (conversion premium et crédibilité)

### P1.1 — UX non premium sur les simulateurs
- Constat : feedback via `alert("...")`, pas d'état loading/error robuste.
- Preuves :
  - `src/app/(marketing)/ressources/simulateur-visa/page.tsx:112`
  - `src/app/(marketing)/ressources/simulateur-fiscal/page.tsx:125`
- Impact : ressenti "MVP" plutôt que "cabinet premium" sur des pages à forte intention.

### P1.2 — Risque de payload invalide côté simulateur fiscal
- Constat : `ca` non requis mais envoyé en `parseFloat(ca)`.
- Preuves :
  - champ non requis `src/app/(marketing)/ressources/simulateur-fiscal/page.tsx:58`
  - envoi API `:124`.
- Impact : erreurs 422 possibles, perte de leads chauds.

### P1.3 — Cohérence de marque/domaine non unifiée
- Constat : mix `.fr`, `.oke.pro`, `.com` dans backend/email.
- Preuves :
  - `backend/app/config.py:10,13,16`
  - `backend/app/services/email.py:34,81,83`
- Impact : baisse de confiance (emails/liens perçus comme "non alignés"), risque délivrabilité.

### P1.4 — Assets SEO manquants
- Constat : logo JSON-LD non présent ; fallback image également absente.
- Preuves :
  - `src/components/seo/json-ld.tsx:10` (`logo-vanille-strategie.png` manquant)
  - `src/components/sections/profil-cards.tsx:48` fallback `hero-maurice.jpg` manquant.
- Impact : qualité SEO/brand dégradée, risque de rendu incomplet selon cas.

### P1.5 — Aucune instrumentation analytics funnel
- Constat : pas d'événements de conversion/analytics détectés (`gtag`, `pixel`, `posthog`, etc.).
- Impact : impossible d'optimiser CAC, messages et étapes du tunnel sur données réelles.

### P1.6 — Qualité technique non verrouillée en CI
- Constat : build OK mais lint KO (4 erreurs, 47 warnings).
- Preuve : `pnpm -s lint` échoue (21 mars 2026).
- Impact : dette rapide sur un site commercial vivant, risque de régressions silencieuses.

## P2 — Opportunités (premium perception)

### P2.1 — Police premium contournée par la variable thème
- Constat : `--font-heading` pointé vers `--font-sans`.
- Preuve : `src/app/globals.css:12`.
- Impact : la direction artistique premium (serif Cormorant) est partiellement neutralisée.

### P2.2 — Poids média élevé sur hero
- Constat : image hero en `quality={100}` + plusieurs assets >1MB.
- Preuves :
  - `src/components/sections/hero.tsx:18`
  - tailles de fichiers dans `public/images` (ex. `hero-paradise.jpg` ~863KB, plusieurs >1MB).
- Impact : LCP potentiellement dégradé, surtout sur trafic mobile paid.

### P2.3 — Double définition de la home
- Constat : deux pages mappées vers `/`.
- Preuves :
  - `src/app/page.tsx`
  - `src/app/(marketing)/page.tsx`
  - `.next/app-path-routes-manifest.json` contient `/page` et `/(marketing)/page` -> `/`.
- Impact : dette de maintenance et risque de divergence produit/SEO.

## 3) Ce qui s'est amélioré depuis l'audit précédent

1. `/contact` passe bien par la brique API dédiée (`ContactForm` + `submitContact`).
2. Les simulateurs capturent désormais des leads vers le backend.
3. La persistance des leads est passée en PostgreSQL (`backend/app/services/leads.py`).
4. Build de production OK (`pnpm -s build`).

## 4) Plan d'action recommandé

### Sprint 0 (24-48h)
1. Corriger canonical par page (ou supprimer le canonical global forcé).
2. Aligner les slugs blog (ASCII uniquement conseillé) et redirections 301 si besoin.
3. Étendre `sitemap.ts` à toutes les pages publiées.
4. Corriger `admin.py` avec `await` + format de retour cohérent.
5. Remplacer les `alert()` simulateurs par feedback inline premium + états loading/error.

### Sprint 1 (semaine 1)
1. Unifier tous les domaines sortants en `.fr` (site, emails, config backend).
2. Ajouter les assets manquants (`logo-vanille-strategie.png`, fallback image).
3. Ajouter analytics funnel (events: CTA hero, submit formulaires, succès simulateurs, clic WhatsApp/tel).
4. Fermer la qualité CI : `lint` bloquant sur erreurs.

### Sprint 2 (semaine 2)
1. Optimiser médias/LCP (hero quality, formats, dimensions, priorités).
2. Nettoyer la duplication de route home.
3. Renforcer anti-spam/rate limiting sur API leads.

## 5) Verdict

La base est maintenant sérieuse et vendable, mais **pas encore au niveau “hyper premium orienté acquisition”** tant que le triptyque **SEO technique + conversion UX premium + pilotage data** n'est pas verrouillé.

Le plus gros levier immédiat est clair : **corriger les signaux SEO (canonical/sitemap/slugs) et la finition des points de capture**. C'est là que se joue la croissance organique et la conversion des leads chauds.
