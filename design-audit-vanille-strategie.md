# Audit Design - Vanille Stratégie
**Objectif :** Premium, Exclusif, Invitation au voyage (Maurice)
**Date :** 21 Mars 2026

## 1. Analyse de l'Identité Visuelle Actuelle

L'audit révèle un site techniquement moderne mais dont l'exécution visuelle est trop "Corporate Tech" et pas assez "Premium Mauricien". Le design actuel ressemble davantage à celui d'une banque en ligne européenne ou d'un SaaS B2B qu'à un cabinet d'exception facilitant une nouvelle vie sous les tropiques.

### Les Points Faibles Majeurs

#### A. Palette de Couleurs : Trop Froide et "Standard"
*   **Dominance de Gris/Noir (Slate-950) :** L'utilisation massive du noir et du gris foncé écrase l'aspect solaire de Maurice. C'est une palette sécurisante mais "froide".
*   **Bleu "Tech" Générique :** Le bleu utilisé (`blue-600`) est le bleu par défaut de nombreuses bibliothèques UI. Il manque de distinction et ne rappelle ni le turquoise des lagons, ni l'élégance d'un service haut de gamme.
*   **Manque de nuances organiques :** L'absence de tons sable, vanille, ou vert émeraude empêche de créer un lien émotionnel avec la destination.

#### B. Typographie : Manque de Caractère (Premium)
*   **Utilisation exclusive d'Inter :** Bien que lisible et moderne, *Inter* est devenue la police par défaut du web. Pour un positionnement "Premium", il manque une police de titrage (Serif ou Sans-Serif humaniste) qui apporte de l'élégance et une signature visuelle propre.
*   **Hiérarchie trop rigide :** Les textes sont très "blocs", manquant de variations de graisses ou de styles qui guident l'œil de manière fluide.

#### C. Traitement de l'Imagerie : "L'Île sous un voile"
*   **Overlays trop sombres :** Les magnifiques photos de Maurice (Chamarel, Le Morne) sont systématiquement recouvertes de gradients sombres à 85-90%. On "devine" Maurice plus qu'on ne la voit. Cela contredit l'objectif de "faire rêver".
*   **Iconographie standard :** Les icônes Lucide/Heroicons sont fonctionnelles mais manquent de personnalisation. Un cabinet premium devrait utiliser des icônes plus fines, peut-être avec une touche de couleur spécifique ou un style "filaire" plus exclusif.

#### D. Structure et Composants : "Stock UI"
*   **Effet "Template" :** Les sections (Hero, Stats, Testimonials) utilisent des structures très classiques de landing pages. On sent trop la présence de composants "prêts à l'emploi" (shadcn/ui par défaut) sans personnalisation poussée.
*   **Manque de respiration :** Les marges et espacements sont corrects mais ne transmettent pas cette sensation de "grand large" et de sérénité propre à l'île.

---

## 2. Recommandations pour un Design "Premium & Dream"

### Stratégie 1 : Réchauffer la Palette (The "Vanilla" Touch)
*   **Couleur Primaire :** Remplacer le bleu générique par un **Bleu Lagon profond** (tirant légèrement sur le turquoise) ou un **Doré Sable** discret pour les accents.
*   **Couleur de Fond :** Introduire une couleur "Vanille" ou "Papier" (`oklch(0.98 0.01 80)`) au lieu du blanc pur, pour un aspect plus luxueux et moins agressif.
*   **Accents :** Utiliser un vert "Palme" très sombre pour les éléments de réassurance.

### Stratégie 2 : Élégance Typographique
*   **Titres (H1, H2) :** Introduire une police avec empattements (Serif) de type *Cormorant Garamond* ou une Sans-Serif plus exclusive comme *Instrument Sans* ou *Satoshi*. Cela crée instantanément un effet "Haut de Gamme / Editorial".
*   **Corps de texte :** Garder une Sans-Serif très propre mais augmenter l'interligne pour plus de confort de lecture.

### Stratégie 3 : Libérer l'Imagerie
*   **Effet "Glassmorphism" Clair :** Au lieu d'assombrir les photos, utiliser des cartes blanches semi-transparentes avec un fort flou de fond (backdrop-blur) pour laisser passer la lumière et les couleurs des paysages.
*   **Parallaxe Subtil :** Renforcer les effets de mouvement sur les images de fond pour donner une impression de profondeur (l'immensité de l'océan).

### Stratégie 4 : Micro-Détails Premium
*   **Boutons :** Utiliser des arrondis plus subtils (ou au contraire très prononcés pour un effet "pilule") avec des transitions de couleurs plus douces.
*   **Lignes de division :** Remplacer les bordures grises par des lignes très fines, presque invisibles, ou des jeux d'ombres portées très diffuses.
*   **Animations :** Préférer des apparitions en "fondu" (fade-in) lentes plutôt que des mouvements brusques.

---

## 3. Synthèse de l'Audit

| Élément | État Actuel | Cible "Premium Maurice" |
| :--- | :--- | :--- |
| **Vibe** | Corporate / Finance / Froid | Élégant / Solaire / Exclusif |
| **Couleurs** | Slate-950 & Blue-600 | Vanille, Lagon, Or discret |
| **Typo** | Inter (Partout) | Mix Serif (Titres) & Sans-Serif |
| **Images** | Cachées par du noir | Lumineuses, aérées, centrales |
| **UI** | Standard Shadcn | Customisé, aérien, sophistiqué |

---
**Signé :** *Gemini Design Audit Tool*
