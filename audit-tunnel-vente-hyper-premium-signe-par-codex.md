# Audit Tunnel de Vente Hyper Premium - Vanille Strategie
Date: 21 mars 2026
Auditeur: Codex

## Objectif
Evaluer la capacite du site a acquerir des clients premium (haut panier, forte confiance, cycle de decision court) avec un tunnel clair: attirer -> qualifier -> convertir -> relancer.

## Resume executif
Le site est visuellement riche et credibilisant, mais le tunnel n'est pas encore "hyper premium" en performance business.

Score global tunnel acquisition: **4.8 / 10**

- Positionnement premium percu: 6/10
- Qualification des prospects: 5/10
- Conversion lead -> demande: 3/10
- Pilotage data/optimisation: 1/10
- Nurturing post-lead: 4/10

## Carte du tunnel actuel
- Top funnel: home + pages profil + blog + guides.
- Middle funnel: simulateurs visa/fiscal + FAQ + pages services.
- Bottom funnel: CTA vers `/contact` + formulaire rapide homepage.
- Post-conversion: notification email + confirmation email (backend).

## Points faibles majeurs (P0)

### P0-1: Le formulaire principal `/contact` n'alimente pas le backend
Impact: perte directe de leads sur la page la plus critique du tunnel.

Preuves:
- Form present mais sans `onSubmit` ni appel API: `src/app/(marketing)/contact/page.tsx:59`
- API de contact existe mais n'est jamais utilisee: `src/lib/api.ts:21`
- Recherche de references: `submitContact` apparait uniquement dans `src/lib/api.ts`.

### P0-2: Les simulateurs ne capturent pas les leads/resultats
Impact: perte des intentions "chaudes" en middle funnel.

Preuves:
- Simulateur visa: logique locale + CTA vers contact, aucune soumission API: `src/app/(marketing)/ressources/simulateur-visa/page.tsx:43`, `:103`
- Simulateur fiscal: calcul local uniquement, aucune capture backend: `src/app/(marketing)/ressources/simulateur-fiscal/page.tsx:36`, `:121`
- Endpoints backend existent mais ne sont pas appeles: `src/lib/api.ts:30`, `:33`

### P0-3: Les leads ne sont pas persistes (stockage en memoire)
Impact: perte potentielle de 100% des leads au redemarrage/deploiement.

Preuves:
- Store in-memory: `backend/app/services/leads.py:10-11`
- Commentaire explicite "remplacer par DB en prod": `backend/app/services/leads.py:10`

### P0-4: Aucun tracking analytics/conversion
Impact: impossible d'optimiser un tunnel premium sans mesure.

Preuves:
- Aucun script/event analytics detecte dans `src`/`backend` (pas de GA4, pixel, posthog, etc.).
- Aucun event de funnel (clic CTA, start form, submit form, call booked) instrumente.

## Points critiques (P1)

### P1-1: Contrat front/back incoherent pour `/contact`
Impact: meme en branchant le formulaire, il cassera sans adaptation.

Preuves:
- Backend exige `objet`: `backend/app/models/leads.py:24`
- Form contact ne collecte pas `objet`: `src/app/(marketing)/contact/page.tsx:59-103`
- `Select` du profil sans mapping payload actuellement.

### P1-2: Nurturing fragile si config email absente
Impact: fuite des leads sans notification commerciale.

Preuves:
- Si `RESEND_API_KEY` absent, emails desactives: `backend/app/services/email.py:14`
- Pas de queue de secours ni webhook fallback.

### P1-3: Incoherences de marque/domaines dans le parcours
Impact: baisse de confiance sur des prospects premium.

Preuves:
- Domaine principal: `https://vanillestrategie.fr` (`src/data/site.ts:10`)
- Liens emails de confirmation vers `vanille-strategie.oke.pro`: `backend/app/services/email.py:81`
- Telephone confirmation email different du site: `backend/app/services/email.py:87` vs `src/data/site.ts:11`

### P1-4: Ton editorial parfois anti-premium / anxiogene
Impact: peut convertir court terme, mais fragilise l'image luxe/conseil.

Preuves:
- Titre "sans les missiles": `src/app/(marketing)/dubai-to-mauritius/page.tsx:8`, `:40`
- Formulations tres "fear-driven" sur guerre/exode: `src/app/(marketing)/dubai-to-mauritius/page.tsx:43`

### P1-5: Middle funnel pas assez premium sur certaines pages
Impact: rupture de perception avant conversion.

Preuves:
- Usage d'emojis type catalogue dans guides: `src/app/(marketing)/ressources/guides/page.tsx:12-15`, `:34`

## Points d'optimisation (P2)

### P2-1: Schemas SEO avances definis mais non exploites
Impact: perte de trafic qualifie organique.

Preuves:
- Fonctions schema presentes: `src/components/seo/json-ld.tsx`
- Non referencees ailleurs (hors `OrganizationJsonLd`).

### P2-2: Tunnel de conversion unique, pas de parcours "high intent"
Impact: pas de differentiation premium entre leads froids/chauds.

Constat:
- Quasi tous les CTA convergent vers `/contact`, sans etape de booking call qualifie.

## Plan d'action recommande

### Sprint 1 (7 jours) - Debloquer la conversion
1. Connecter reellement `/contact` a `submitContact`.
2. Aligner payload front avec `ContactRequest` (ajouter `objet` ou adapter backend).
3. Capturer les resultats des 2 simulateurs via endpoints dedies.
4. Ajouter une page de remerciement et un event `lead_submitted`.
5. Passer les leads sur DB (PostgreSQL) + migration simple.

### Sprint 2 (30 jours) - Installer un tunnel premium pilotable
1. Instrumenter GA4/Pixel + events funnel (`hero_cta_click`, `profil_card_click`, `simulator_started`, `simulator_completed`, `form_started`, `form_submitted`, `whatsapp_click`, `call_booked`).
2. Stocker UTM/source/campaign sur chaque lead.
3. Mettre un score lead (profil + budget + urgence + source).
4. Ajouter un parcours "Appel strategique 20 min" pour leads chauds.

### Sprint 3 (60 jours) - Monter en gamme "hyper premium"
1. Segmenter les LP par intent (Entrepreneur, Digital, Retraite, Corporate) avec offre dediee.
2. Refaire les pages middle funnel (guides/simulateurs) avec design editorial premium (sans emojis).
3. Normaliser le ton de marque (moins anxiogene, plus "confiance + maitrise + discretion").
4. Ajouter des preuves premium quantifiees (cas clients, delais, gains, process).

## KPI cibles pour valider l'upgrade
- Conversion visite -> lead: +40% en 60 jours.
- Taux de completion formulaire contact: > 65%.
- Part leads qualifies (score A/B): > 45%.
- Delai moyen de rappel: < 30 min (leads chauds).
- Taux lead -> call booke: > 25%.

## Verification technique faite pendant l'audit
- Build prod execute le 21 mars 2026: succes (`pnpm -s build`).
- Warning infra detecte: racine workspace/lockfiles (a corriger pour hygiene CI).

---
Document signe: `audit-tunnel-vente-hyper-premium-signe-par-codex.md`
