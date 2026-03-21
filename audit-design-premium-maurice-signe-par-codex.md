# Audit Design - Vanille Strategie
Date: 21 mars 2026
Auditeur: Codex

## Objectif
Evaluer si l'interface projette une image premium et donne envie de vivre/investir a l'Ile Maurice.

## Methode
- Audit UX/UI du code front (home + pages marketing principales + formulaires + header/footer).
- Revue de la coherence visuelle, hiérarchie, branding, conversion, lisibilite et perception luxe.

## Verdict rapide
Le site est energique et riche en contenu, mais il ressemble davantage a un "template SaaS agressif" qu'a une marque premium experientielle autour de Maurice.

## Score global (sur 10)
- Direction artistique premium: 5.5
- Imaginaire "reve de Maurice": 4.5
- Cohérence de marque: 5
- Lisibilite / confort: 5
- Parcours conversion haut de gamme: 6

## Points faibles prioritaires

### 1) Direction visuelle trop "fintech", pas assez "Maurice d'exception" (Critique)
Impact:
- Le visiteur percoit surtout une promesse business agressive, pas une projection de vie premium.

Constats:
- Repetition du meme schema visuel: image plein ecran + gros overlay sombre + CTA bleu.
- Exemples: `src/components/sections/hero.tsx:23`, `src/app/(marketing)/entrepreneur/page.tsx:56`, `src/app/(marketing)/services/creation-societe/page.tsx:47`.

### 2) Cohérence de marque fragmentee selon les pages (Critique)
Impact:
- L'identite change trop vite (bleu/teal/purple/amber), ce qui diminue la memorisation premium.

Constats:
- Palette par persona plutot que systeme de marque unifie.
- Exemples: `src/app/(marketing)/digital-nomad/page.tsx:84`, `src/app/(marketing)/entreprise/page.tsx:75`, `src/app/(marketing)/retraite/page.tsx:81`.

### 3) Typographie trop standard + micro-texte trop petit (Eleve)
Impact:
- Moins de sophistication percue et fatigue de lecture.

Constats:
- Police Inter seule, sans paire editorial/luxe: `src/app/layout.tsx:2`.
- Usage massif de `text-[10px]` en uppercase/letter-spacing: header, footer, formulaires.
- Exemples: `src/components/layout/header.tsx:88`, `src/components/layout/footer.tsx:10`, `src/components/sections/lead-capture.tsx:82`.
- Compteurs globaux: `text-[10px]` (51 occurrences), `animate-[fadeSlideUp` (59 occurrences), `group-hover:scale-110` (26 occurrences).

### 4) Surcharge visuelle (badges, capsules, glow, animations) (Eleve)
Impact:
- Rend "bruyant", donc moins luxe (un premium credible est plus maitrise).

Constats:
- Beaucoup d'elements decoratifs concurrencent les messages clefs.
- Exemples: `src/components/sections/hero.tsx:29`, `src/components/sections/profil-cards.tsx:60`, `src/components/sections/oke-teaser.tsx:92`.

### 5) Composants repetitifs => sensation de template (Eleve)
Impact:
- Le site parait industrialise plutot qu'iconique.

Constats:
- Les memes patterns "cards + hover lift + gradient + icone" sont reutilises partout.
- Exemples: `src/app/(marketing)/entrepreneur/page.tsx:109`, `src/app/(marketing)/digital-nomad/page.tsx:114`, `src/app/(marketing)/services/creation-societe/page.tsx:97`.

### 6) Rupture de niveau entre sections "hero" et sections "info" (Moyen)
Impact:
- La promesse premium retombe sur certaines pages internes.

Constats:
- La page Maurice devient tres "liste informative" apres le hero.
- Exemples: `src/app/(marketing)/maurice/page.tsx:73`, `src/app/(marketing)/maurice/page.tsx:88`, `src/app/(marketing)/maurice/page.tsx:120`.

### 7) Parcours de contact incoherent entre la home et la page Contact (Moyen)
Impact:
- Friction et perte de confiance en phase de conversion.

Constats:
- Le formulaire home est connecte (`onSubmit`, etat loading/success): `src/components/sections/lead-capture.tsx:80`.
- Le formulaire `/contact` est purement presentatif (pas de handler visible): `src/app/(marketing)/contact/page.tsx:59`.

### 8) Eléments fixes potentiellement intrusifs sur mobile (Moyen)
Impact:
- Encombrement de l'ecran et concurrence avec les CTA principaux.

Constats:
- Header sticky + bouton WhatsApp flottant permanent.
- Exemples: `src/components/layout/header.tsx:72`, `src/components/layout/whatsapp-button.tsx:15`.

## Recommandations design (ordre d'impact)

### Sprint 1 (rapide, 1-2 semaines)
- Definir un vrai systeme visuel "Maurice premium": 1 palette maitre + 2 accents max.
- Remonter les textes micro (10px -> 12/13px min), reduire uppercase tracking agressif.
- Reduire de 50% les animations decoratives, garder seulement celles qui servent la comprehension.
- Uniformiser le style de CTA (1 primaire, 1 secondaire) sur tout le site.

### Sprint 2 (structurant, 2-4 semaines)
- Repenser les 3 premiers ecrans de la home en narration emotionnelle: 1) projection de vie a Maurice, 2) preuves de credibilite, 3) passage a l'action.
- Remplacer la logique "template par couleur" par une direction artistique unique.
- Harmoniser les blocs internes pour eviter la chute de qualite percue (notamment `/maurice`).

### Sprint 3 (premium durable)
- Introduire une paire typo de marque (headline editorial + texte lisible).
- Definir une grammaire iconographique et photo propre (cadrages, tonalite, filtre, texture).
- Aligner tous les formulaires (visuel + comportement) pour une conversion sans rupture.

## Conclusion
La base est solide (densite de contenu, preuve d'expertise, effort de mise en scene), mais le rendu actuel n'atteint pas encore le niveau "premium qui fait rever de Maurice". Le principal levier est de passer d'un design "SaaS performatif" a une direction artistique plus rare, plus maitrisee et plus emotionnelle.

---
Document signe: `audit-design-premium-maurice-signe-par-codex.md`
