import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

// Maillage interne : liens contextuels par catégorie d'article
const relatedLinks: Record<string, { label: string; href: string }[]> = {
  Fiscalité: [
    { label: "Simulateur fiscal Maurice vs France", href: "/ressources/simulateur-fiscal" },
    { label: "Comptabilité & Fiscalité — nos services", href: "/services/comptabilite-fiscalite" },
    { label: "Création de société à Maurice", href: "/services/creation-societe" },
  ],
  Guide: [
    { label: "Simulateur : quel visa pour moi ?", href: "/ressources/simulateur-visa" },
    { label: "Permis de résidence — nos services", href: "/services/permis-residence" },
    { label: "Création de société à Maurice", href: "/services/creation-societe" },
  ],
  Permis: [
    { label: "Simulateur : quel visa pour moi ?", href: "/ressources/simulateur-visa" },
    { label: "Permis de résidence — nos services", href: "/services/permis-residence" },
    { label: "Découvrir l'Île Maurice", href: "/maurice" },
  ],
  Actualité: [
    { label: "Simulateur fiscal Maurice vs France", href: "/ressources/simulateur-fiscal" },
    { label: "Tous nos services", href: "/services/creation-societe" },
    { label: "Pourquoi Maurice ?", href: "/maurice" },
  ],
  Digital: [
    { label: "Profil Digital Nomad", href: "/digital-nomad" },
    { label: "Simulateur : quel visa pour moi ?", href: "/ressources/simulateur-visa" },
    { label: "E-commerce & Comptabilité", href: "/services/comptabilite-fiscalite" },
  ],
  Comparatif: [
    { label: "Simulateur fiscal Maurice vs France", href: "/ressources/simulateur-fiscal" },
    { label: "Pourquoi Maurice ?", href: "/maurice" },
    { label: "Étude de faisabilité gratuite", href: "/contact" },
  ],
};

const articles: Record<string, { title: string; category: string; date: string; content: string[] }> = {
  "structures-juridiques-maurice-2026": {
    title: "Domestic Company, GBC ou Authorised Company : quel statut choisir en 2026 ?",
    category: "Guide",
    date: "Mars 2026",
    content: [
      "Maurice propose trois types de structures juridiques pour les entreprises. Le choix dépend de votre activité, de votre résidence fiscale souhaitée et de vos objectifs internationaux.",
      "La Domestic Company est l'équivalent d'une SARL française. Taxée à 15% flat, elle peut être détenue à 100% par des étrangers, sans capital minimum. La création prend 3 jours ouvrés via le CBRD. C'est le choix idéal pour une activité locale ou un e-commerce depuis Maurice.",
      "La Global Business Company (GBC) est conçue pour les activités internationales. Avec le Partial Exemption Regime (80%), le taux effectif descend à 3-3,4%. Elle donne accès aux 37 traités de non-double imposition. Attention : depuis le Finance Act 2025, les substance requirements sont renforcés — c'est l'activité générant le revenu qui doit satisfaire les conditions, pas juste la société.",
      "L'Authorised Company (AC) n'est pas résidente fiscale à Maurice. Elle paie 0% d'IS sur ses revenus étrangers mais n'a pas accès aux traités fiscaux. Idéale pour du holding pur ou de l'IP.",
      "Le Finance Act 2025 a aussi introduit la Fair Share Contribution (15% au-delà de 12M MUR de revenus), le QDMTT pour les multinationales (750M€+ de CA), et un cadre formel de Transfer Pricing.",
      "Notre recommandation : faites analyser votre situation par un Expert-Comptable Fiscaliste International avant de choisir. Les implications fiscales peuvent différer considérablement selon votre profil.",
    ],
  },
  "fiscalite-maurice-2026": {
    title: "Fiscalité Maurice 2026 : ce qui a vraiment changé",
    category: "Fiscalité",
    date: "Mars 2026",
    content: [
      "Le Finance Act 2025, publié le 9 août 2025, a introduit plusieurs réformes fiscales. Mais contrairement à ce que certains titres alarmistes laissent entendre, Maurice reste extrêmement attractive pour 95% des entrepreneurs.",
      "Ce qui n'a PAS changé : le taux d'IS reste à 15% flat, les dividendes restent à 0%, les plus-values restent à 0%, les droits de succession n'existent toujours pas, et l'ISF non plus.",
      "La Fair Share Contribution (FSC) est une surtaxe temporaire (3 ans, jusqu'en juin 2028) de 15% sur les revenus nets dépassant 12 millions de roupies par an (~240 000€). Pour les sociétés à 15% d'IS, c'est 5% additionnel. Cela ne concerne que les très hauts revenus.",
      "Le QDMTT (Qualified Domestic Minimum Top-up Tax) applique un taux plancher de 15% aux multinationales avec un CA consolidé supérieur à 750 millions d'euros. Cela ne concerne que les très grandes entreprises.",
      "Le Transfer Pricing a maintenant un cadre documentaire formel. Les sociétés en transactions avec des parties liées doivent maintenir des records prescrits. C'est une mise en conformité OCDE, pas un durcissement fiscal.",
      "L'Alternative Minimum Tax de 10% touche certains secteurs (hôtels, assurance, immobilier, télécoms) si leur impôt calculé normalement est inférieur à ce seuil.",
      "En résumé : si vous êtes un entrepreneur classique avec moins de 240 000€ de revenus annuels, strictement rien n'a changé pour vous. Maurice reste un paradis fiscal légal.",
    ],
  },
  "permis-residence-maurice-guide-2026": {
    title: "Permis de résidence à Maurice en 2026 : le guide complet post-réforme",
    category: "Permis",
    date: "Mars 2026",
    content: [
      "Les guidelines EDB du 19 août 2025 ont modifié plusieurs conditions des Occupation Permits. Voici le guide complet actualisé.",
      "L'OP Investor existe en deux options : Option 1 (50 000 $ d'investissement, turnover 1,5M MUR en année 1, cumulatif 20M MUR à 5 ans) et Option 2 (100 000 $, turnover 1M MUR en année 1, cumulatif 15M MUR à 5 ans). Nouveauté 2025 : un mid-term review à l'année 5 par l'EDB.",
      "L'OP Self-Employed nécessite 50 000 $ sur le compte de votre société mauricienne, 3 lettres d'intention (dont 2 de clients locaux), et un turnover cumulé de 6M MUR sur 5 ans.",
      "L'OP Professional a été scindé en deux : le ProPass (salaire min. 30 000 MUR/mois) pour les spécialistes, et le nouveau Expert Pass (250 000 MUR/mois) pour les cadres dirigeants et consultants seniors.",
      "L'OP Retired (50 ans+) exige maintenant un transfert de 2 000 $/mois (ou 24 000 $/an) avec un premier versement dans les 60 jours. Nouveau : 180 jours de présence minimum par an.",
      "Le Premium Visa est gratuit, traité en 48h, valable 1 an renouvelable. Revenu minimum 1 500 $/mois. Idéal pour tester Maurice avant de s'engager sur un OP.",
      "La résidence permanente est durcie : il faut maintenant 5 ans de permis (au lieu de 3) et des seuils de revenus/investissement plus élevés.",
      "Délai moyen : 15-20 jours ouvrés pour le principe d'approbation. Nous avons déposé 30 à 50 dossiers par an depuis 2012 — nous connaissons les attentes de l'EDB.",
    ],
  },
  "convention-fiscale-france-maurice": {
    title: "Convention fiscale France-Maurice : comment ça marche vraiment",
    category: "Fiscalité",
    date: "Mars 2026",
    content: [
      "La convention de non-double imposition entre la France et Maurice a été signée le 11 décembre 1980 à Port-Louis, puis amendée le 23 juin 2011 (entrée en vigueur le 1er mai 2012).",
      "Son objectif : éviter qu'un même revenu soit imposé deux fois, une fois en France et une fois à Maurice. Elle organise la répartition des compétences fiscales entre les deux pays.",
      "Pour les dividendes : la convention limite la retenue à la source. Pour les intérêts et royalties : des taux réduits s'appliquent. Pour les plus-values : Maurice ne les taxe pas, et la convention précise les cas où la France peut les imposer.",
      "L'Exit Tax française s'applique aux résidents fiscaux français qui transfèrent leur domicile hors de France et détiennent des participations significatives. Un sursis de paiement est possible sous conditions. La planification de votre départ doit être minutieuse.",
      "L'amendement de 2011 a renforcé l'échange d'informations entre les administrations fiscales (article 27), en conformité avec les standards internationaux de lutte contre la fraude.",
      "Vanille Stratégie est spécialiste de l'interprétation de cette convention. Chaque situation est unique — nous analysons la vôtre pour optimiser légalement votre position fiscale.",
    ],
  },
  "quitter-dubai-pourquoi-maurice": {
    title: "Quitter Dubaï : pourquoi Maurice est la meilleure alternative",
    category: "Actualité",
    date: "Mars 2026",
    content: [
      "Depuis le 28 février 2026, la guerre USA/Israël-Iran a frappé Dubaï. Drones sur l'aéroport, 37 000 vols annulés, Goldman Sachs et Citi ont évacué leur staff. Bloomberg parle d'un \"exodus à la Hong Kong\".",
      "9 800 millionnaires s'étaient installés à Dubaï en 2025, apportant ~63 milliards de dollars. Ce flux est en train de se retourner.",
      "Beaucoup partent au Maroc : proximité (2-3h de Paris), coût de vie bas, communauté francophone. Mais fiscalement, Maurice est meilleur : 15% IS flat vs 17,5% au Maroc, 0% dividendes vs retenue à la source, 0% plus-values vs imposables.",
      "Et surtout : Maurice est à 8 000 km du premier conflit. Zéro risque géopolitique. Le même fuseau horaire que Dubaï (GMT+4). Les mêmes avantages fiscaux. Sans les missiles.",
      "Maurice est aussi un hub vers l'Afrique (COMESA, 500M+ de consommateurs) et l'Asie, grâce au FTA Chine-Maurice signé en 2019.",
      "Notre groupe (Vanille Stratégie + BD Star) offre ce qu'aucun concurrent ne peut : conseil en implantation + expertise comptable MIPA + dashboard SaaS connecté aux banques mauriciennes. Un seul interlocuteur, zéro sous-traitance.",
    ],
  },
  "ecommerce-depuis-maurice": {
    title: "E-commerce depuis Maurice : fiscalité et logistique pour les digital entrepreneurs",
    category: "Digital",
    date: "Mars 2026",
    content: [
      "Maurice est devenu un hub pour les entrepreneurs digitaux : e-commerçants, infopreneurs, freelances. La fiscalité est imbattable et le cadre de vie exceptionnel.",
      "Le Premium Visa est le point d'entrée idéal : gratuit, traité en 48h, 1 an renouvelable. Revenu minimum 1 500 $/mois. Vous ne pouvez pas travailler pour un employeur local, mais vous pouvez piloter votre business international.",
      "Si vous décidez de rester, l'OP Self-Employed (50 000 $) ou Investor vous donnent un permis de 10 ans avec résidence fiscale mauricienne : 15% IS, 0% dividendes, 0% plus-values.",
      "Avantage massif pour le e-commerce : les services exportés vers l'UE ne sont pas soumis à la TVA mauricienne. Si vos clients sont en Europe, vous facturez sans TVA depuis Maurice.",
      "Notre dashboard OKE se connecte à 12 plateformes e-commerce : Shopify, Amazon, WooCommerce, PrestaShop, eBay, Cdiscount, Rakuten, ManoMano, Back Market, Zalando, Magento et Mirakl. Chaque vente génère automatiquement une écriture comptable.",
      "Avec les connecteurs bancaires AfrAsia et MCB, la réconciliation est automatique. Vos transactions sont classées automatiquement avec 85%+ de précision. Votre comptabilité tourne en autopilote.",
    ],
  },
  "routes-financieres-dubai-maurice-transition": {
    title: "Quitter Dubaï pour Maurice — Routes financières, transfert de patrimoine et guide de transition",
    category: "Actualité",
    date: "Mars 2026",
    content: [
      "La transition de Dubaï vers Maurice implique une planification financière rigoureuse, notamment en matière de transferts bancaires internationaux. Les virements SWIFT depuis les banques émiraties (Emirates NBD, FAB, Mashreq) vers les banques mauriciennes (AfrAsia Bank, MCB, SBM) s'exécutent en 2 à 4 jours ouvrés. Il est recommandé d'initier les premiers transferts avant le déménagement physique, en ouvrant un compte à distance via l'EDB Concierge Service.",
      "Sur le plan fiscal, la transition nécessite une attention particulière à la date de cessation de résidence fiscale aux EAU et à l'établissement de la résidence fiscale mauricienne. Maurice applique le critère des 183 jours de présence physique, mais l'EDB peut délivrer un certificat de résidence fiscale dès l'obtention de l'Occupation Permit. Les revenus perçus pendant la période de transition doivent être correctement attribués à chaque juridiction pour éviter toute double imposition.",
      "L'ouverture d'un compte bancaire à Maurice peut se faire à distance pour les détenteurs d'un Occupation Permit approuvé. AfrAsia Bank propose des comptes multi-devises (USD, EUR, GBP, AED, MUR) avec des seuils de dépôt initial de 5 000 USD pour les comptes personnels et 10 000 USD pour les comptes corporate. MCB offre des conditions similaires avec une gamme de produits de placement (dépôts à terme, obligations).",
      "La création de société à Maurice depuis Dubaï est un processus structuré : réservation du nom auprès du CBRD (Companies and Business Registration Department), rédaction des statuts (Constitution), ouverture du compte bancaire de la société, dépôt du capital, puis demande d'Occupation Permit auprès de l'EDB. Le tout prend 3 à 6 semaines avec un accompagnement professionnel. Si vous avez une Free Zone Company à Dubaï, elle peut être maintenue en parallèle ou liquidée selon votre stratégie.",
      "Les permis de résidence pour les ex-résidents de Dubaï sont généralement l'OP Investor (50 000 ou 100 000 USD selon l'option choisie) ou le Premium Visa pour une phase exploratoire. Le Premium Visa est traité en 48h et permet de vivre à Maurice pendant un an renouvelable, le temps de finaliser la structure permanente.",
      "Timeline pratique recommandée : Mois 1 — étude de faisabilité et choix de structure avec Vanille Stratégie. Mois 2 — création de la société mauricienne et ouverture de compte bancaire. Mois 3 — dépôt du dossier OP auprès de l'EDB. Mois 4 — obtention du principe d'approbation et transfert des fonds. Mois 5 — installation physique à Maurice, obtention de la carte de séjour. Cette timeline est réaliste et éprouvée sur plusieurs dizaines de dossiers traités par notre cabinet.",
      "Vanille Stratégie accompagne spécifiquement les entrepreneurs quittant Dubaï grâce à une connaissance fine des deux juridictions. Didier Laroussinie et son équipe gèrent l'ensemble du processus : de la structuration juridique à l'ouverture de compte, en passant par la demande de permis et la mise en conformité fiscale.",
    ],
  },
  "substance-requirements-maurice": {
    title: "Substance Requirements à Maurice — Ce que l'EDB et la FSC attendent vraiment",
    category: "Fiscalité",
    date: "Mars 2026",
    content: [
      "Les substance requirements à Maurice ont été considérablement renforcés depuis 2019, dans le cadre de la mise en conformité avec les standards de l'UE et de l'OCDE. Le concept central est celui des CIGA — Core Income Generating Activities : les activités principales qui génèrent le revenu de la société doivent être effectivement réalisées à Maurice, par des personnes qualifiées résidentes.",
      "Pour les Global Business Companies (GBC), la FSC (Financial Services Commission) et l'EDB exigent des preuves tangibles de substance : au moins deux directeurs résidents à Maurice qui participent activement à la prise de décisions stratégiques, des réunions du conseil d'administration tenues physiquement à Maurice (au moins deux par an), des employés qualifiés locaux, et des dépenses opérationnelles proportionnelles à l'activité déclarée.",
      "Le Partial Exemption Regime (80% d'exemption, taux effectif de 3%) est conditionné au respect de ces substance requirements. Depuis le Finance Act 2025, l'EDB effectue des contrôles plus fréquents et plus approfondis. Une société qui ne peut pas démontrer une substance réelle risque de se voir retirer le bénéfice du régime d'exemption partielle, avec une requalification rétroactive au taux plein de 15%.",
      "Le Finance Act 2025 a introduit des précisions importantes : la notion de « substance adéquate » est désormais liée à la nature et au volume de l'activité. Une société de trading international devra démontrer que les négociations commerciales, la gestion des contrats et la logistique sont coordonnées depuis Maurice. Une société de conseil devra prouver que les consultants principaux travaillent effectivement depuis l'île.",
      "La documentation requise comprend : les procès-verbaux des réunions du board avec preuves de présence physique (billets d'avion, tampons de passeport), les contrats de travail des employés locaux avec fiches de paie, les baux commerciaux, les factures de prestataires locaux, et les relevés bancaires montrant des transactions opérationnelles depuis Maurice. Le MRA (Mauritius Revenue Authority) peut demander ces documents lors d'un contrôle fiscal.",
      "Notre recommandation : ne considérez jamais les substance requirements comme une formalité administrative. L'EDB et la FSC ont durci leur approche, et les sociétés « coquilles vides » sont systématiquement identifiées. Vanille Stratégie vous aide à structurer une substance réelle et documentée, conforme aux attentes des régulateurs.",
    ],
  },
  "comparatif-maurice-maroc-portugal-dubai": {
    title: "Maurice vs Maroc vs Portugal vs Dubaï — Comparatif expatriation 360°",
    category: "Comparatif",
    date: "Mars 2026",
    content: [
      "Le choix d'une destination d'expatriation fiscale dépend de multiples critères. Voici un comparatif objectif entre Maurice, le Maroc, le Portugal et Dubaï, basé sur les données fiscales en vigueur en 2026.",
      "Impôt sur les sociétés : Maurice applique 15% flat (3% effectif via le Partial Exemption Regime pour les GBC). Le Maroc impose à 20% (réduit à 15% pour les zones franches). Le Portugal taxe à 21% (plus derrama locale de 1,5%). Dubaï a introduit un IS de 9% en juin 2023 pour les bénéfices supérieurs à 375 000 AED. Sur ce critère, Maurice et Dubaï sont les plus compétitifs.",
      "Dividendes et plus-values : Maurice — 0% sur les deux. Maroc — retenue à la source de 15% sur les dividendes, plus-values imposables à 20%. Portugal — 28% sur les dividendes (avec possibilité d'exonération partielle pour le RNH 2.0), plus-values à 28%. Dubaï — 0% sur les deux. Avantage clair pour Maurice et Dubaï.",
      "Succession et patrimoine : Maurice n'a ni droits de succession, ni ISF, ni impôt sur la fortune. Le Maroc applique des droits de mutation de 1 à 6%. Le Portugal a un droit de timbre de 10% pour les non-résidents héritiers. Dubaï n'a pas de droits de succession mais la transmission est complexe sans testament enregistré au DIFC. Maurice offre la meilleure sécurité patrimoniale.",
      "Risque géopolitique et stabilité : Maurice est classée parmi les démocraties les plus stables d'Afrique (Democracy Index de The Economist), sans conflit armé dans un rayon de 3 000 km. Le Maroc est stable mais situé dans une zone de tensions (Sahel, Algérie). Le Portugal est stable mais soumis aux pressions fiscales de l'UE (fin du Golden Visa, restriction du RNH). Dubaï est désormais en zone de conflit actif depuis février 2026.",
      "Coût de la vie et qualité de vie : Maurice offre un coût de la vie inférieur de 30 à 40% par rapport à Dubaï pour un standing équivalent. Le Maroc est le moins cher des quatre. Le Portugal a vu ses prix exploser à Lisbonne et Porto. Maurice combine un cadre de vie exceptionnel (plages, golf, climat tropical) avec des infrastructures modernes et une communauté francophone importante.",
      "En synthèse, Maurice domine sur la combinaison fiscalité + sécurité + qualité de vie. Vanille Stratégie peut réaliser une simulation personnalisée comparant votre situation dans chacune de ces juridictions.",
    ],
  },
  "transfer-pricing-maurice-2025": {
    title: "Transfer Pricing à Maurice : nouveau cadre documentaire 2025",
    category: "Fiscalité",
    date: "Mars 2026",
    content: [
      "Le Finance Act 2025 a formalisé le cadre de Transfer Pricing (prix de transfert) à Maurice, alignant l'île sur les recommandations de l'OCDE en matière de BEPS (Base Erosion and Profit Shifting). Ce cadre s'applique aux transactions entre parties liées, qu'elles soient domestiques ou internationales.",
      "Les sociétés mauriciennes engagées dans des transactions avec des entités liées doivent désormais maintenir une documentation contemporaine justifiant que les prix pratiqués respectent le principe de pleine concurrence (arm's length principle). Cette documentation comprend un Master File (fichier principal décrivant le groupe), un Local File (fichier local détaillant les transactions de l'entité mauricienne) et, pour les groupes dépassant 750 millions d'euros de chiffre d'affaires consolidé, un Country-by-Country Report (CbCR).",
      "Les transactions visées incluent : la vente de biens et services entre entités liées, les prêts intra-groupe et leurs conditions d'intérêt, les redevances et licences de propriété intellectuelle, les management fees, et les garanties financières. Le MRA peut requalifier une transaction si le prix ne correspond pas à ce qui serait pratiqué entre parties indépendantes.",
      "Les méthodes de détermination des prix acceptées suivent les guidelines OCDE : méthode du prix comparable sur le marché libre (CUP), méthode du prix de revente, méthode du coût majoré, méthode transactionnelle de la marge nette (TNMM), et méthode du partage des bénéfices. Le choix de la méthode doit être justifié et documenté.",
      "Les sanctions en cas de non-conformité sont significatives : le MRA peut procéder à un ajustement des bénéfices imposables, appliquer des pénalités pouvant aller jusqu'à 50 000 MUR par défaut de documentation, et imposer des intérêts de retard. Les ajustements de transfer pricing peuvent également avoir des conséquences en matière de droits de douane et de TVA.",
      "Pour les PME, des seuils de minimis s'appliquent : les sociétés dont le chiffre d'affaires est inférieur à 100 millions de MUR (environ 2 millions d'euros) et dont les transactions liées ne dépassent pas certains seuils bénéficient d'obligations documentaires allégées. Néanmoins, le principe de pleine concurrence reste applicable.",
      "Vanille Stratégie, en collaboration avec BD Star (expertise comptable MIPA), accompagne les entreprises dans la mise en place de leur documentation de transfer pricing, l'analyse de benchmarking et la rédaction des politiques de prix intercompagnie conformes au cadre mauricien.",
    ],
  },
  "devises-mur-conversion-maurice": {
    title: "Devises à Maurice : MUR, conversion et gestion bancaire pour expatriés",
    category: "Guide",
    date: "Mars 2026",
    content: [
      "La roupie mauricienne (MUR) est la monnaie officielle de Maurice. En mars 2026, le taux de change oscille autour de 49-50 MUR pour 1 EUR et 45-46 MUR pour 1 USD. La Bank of Mauritius (BoM) publie quotidiennement les taux de référence. La roupie est relativement stable mais tend à se déprécier lentement face aux devises majeures (environ 2-3% par an).",
      "Pour les expatriés, le compte multi-devises est indispensable. AfrAsia Bank propose le Global Account avec des compartiments en MUR, USD, EUR, GBP et ZAR. MCB offre le Multi-Currency Account avec des options similaires. L'avantage : vous recevez vos revenus en devise forte (EUR ou USD) et convertissez en MUR uniquement pour vos dépenses locales, au moment le plus favorable.",
      "Les transferts internationaux entrants sont libres et sans plafond. Maurice a une politique de libre circulation des capitaux : vous pouvez rapatrier vos bénéfices, dividendes et salaires sans autorisation préalable. Les transferts sortants sont également libres pour les détenteurs d'Occupation Permit, à condition de pouvoir justifier l'origine des fonds.",
      "AfrAsia Bank est la banque préférée des expatriés et investisseurs internationaux. Elle propose un service premium avec un relationship manager dédié, des taux de change négociables pour les montants supérieurs à 50 000 USD, et une plateforme de banque en ligne moderne. MCB (Mauritius Commercial Bank), la plus grande banque de l'île, offre le réseau d'agences le plus étendu et des produits de crédit immobilier compétitifs.",
      "Conseil pratique : maintenez l'essentiel de votre trésorerie en USD ou EUR sur votre compte multi-devises. La roupie mauricienne est parfaite pour les dépenses quotidiennes, mais la dépréciation historique rend le stockage en MUR sous-optimal pour des montants importants. Négociez vos taux de change pour les conversions supérieures à 10 000 USD — les banques mauriciennes accordent systématiquement des taux préférentiels.",
      "Pour les entreprises, la gestion des devises est encore plus critique. Les factures en devise étrangère peuvent être réglées depuis le compartiment correspondant sans double conversion. Les solutions comme OKE, le dashboard comptable développé par le Groupe Casalis, automatisent la réconciliation multi-devises et simplifient la déclaration fiscale auprès du MRA.",
    ],
  },
  "edb-mauritius-role-programmes": {
    title: "L'EDB à Maurice : rôle, programmes et accompagnement des investisseurs",
    category: "Guide",
    date: "Mars 2026",
    content: [
      "L'Economic Development Board (EDB) est l'agence gouvernementale centrale pour la promotion de l'investissement à Maurice. Créé en 2017 par la fusion du Board of Investment (BOI), de l'Enterprise Mauritius et du Financial Services Promotion Agency, l'EDB est le guichet unique pour les investisseurs étrangers. C'est auprès de l'EDB que se déposent les demandes d'Occupation Permit et de permis de résidence.",
      "L'EDB administre plusieurs programmes d'investissement majeurs. Le Smart City Scheme offre des avantages fiscaux aux projets immobiliers intégrés (zones résidentielles, commerciales et de loisirs) avec un investissement minimum de 100 millions USD. Les acquéreurs de biens dans une Smart City peuvent obtenir un permis de résidence. Citons notamment Mont Choisy Smart City, Moka Smart City, et Cap Tamarin Smart City.",
      "Le Property Development Scheme (PDS) permet aux étrangers d'acquérir des biens immobiliers résidentiels de luxe à Maurice. L'investissement minimum est de 375 000 USD, et l'achat donne droit à un permis de résidence pour l'acquéreur et sa famille. L'Integrated Resort Scheme (IRS) et le Real Estate Scheme (RES) ont été fusionnés dans le PDS.",
      "L'EDB publie régulièrement des guidelines sectorielles pour les secteurs prioritaires : services financiers (Global Business), technologies de l'information et de la communication (TIC), industrie manufacturière à haute valeur ajoutée, ocean economy (aquaculture, biotechnologie marine), et biotech/pharma. Chaque secteur bénéficie d'incitations spécifiques détaillées dans le National Budget annuel.",
      "Le processus de demande auprès de l'EDB est dématérialisé via le portail en ligne. Les délais officiels sont de 15-20 jours ouvrés pour un Occupation Permit, mais les dossiers complets et bien préparés sont souvent traités plus rapidement. L'EDB peut demander des informations complémentaires, ce qui rallonge le délai si le dossier initial est incomplet.",
      "Vanille Stratégie entretient des relations professionnelles étroites avec l'EDB depuis 2012. Didier Laroussinie et son équipe connaissent les attentes précises des officers de l'EDB pour chaque type de permis. Cette expertise nous permet d'obtenir des taux d'approbation supérieurs à 95% sur les dossiers que nous déposons, contre une moyenne de 70-75% pour les dossiers non accompagnés.",
    ],
  },
  "paiements-en-ligne-maurice-stripe-alternatives": {
    title: "Paiements en ligne depuis Maurice : Stripe, alternatives et solutions locales",
    category: "Digital",
    date: "Mars 2026",
    content: [
      "Stripe est officiellement disponible à Maurice depuis 2023, ce qui a considérablement simplifié la vie des entrepreneurs digitaux basés sur l'île. Les entreprises mauriciennes peuvent créer un compte Stripe avec une Domestic Company ou une GBC, recevoir des paiements par carte bancaire dans plus de 135 devises, et se faire verser les fonds sur un compte bancaire local en MUR ou en devise étrangère.",
      "PayPal reste problématique à Maurice : les comptes mauriciens ne peuvent recevoir que des paiements personnels, pas des paiements commerciaux. Cette limitation pousse de nombreux freelances et e-commerçants à maintenir un compte PayPal dans leur pays d'origine, ce qui pose des questions de conformité fiscale. Wise (ex-TransferWise) est une alternative fiable pour les virements internationaux, mais ne remplace pas une solution de paiement en ligne.",
      "Les solutions locales méritent attention. MCB Juice est le portefeuille mobile le plus utilisé à Maurice (plus de 500 000 utilisateurs). La MCB propose également un gateway de paiement en ligne (e-Commerce Payment Gateway) pour les sites marchands ciblant le marché local. SBM et AfrAsia offrent des terminaux de paiement virtuels (VPOS) pour les transactions par carte.",
      "Pour les entrepreneurs ciblant le marché européen depuis Maurice, la configuration optimale est : Stripe Atlas pour créer une entité américaine (LLC Delaware) qui sert de passerelle de paiement, couplée à une société mauricienne qui facture la LLC en management fees. Cette structure est légale, conforme, et permet d'accéder à l'écosystème Stripe US avec ses frais réduits (2,9% + 30 cents par transaction).",
      "Les crypto-paiements gagnent du terrain à Maurice. Avec le cadre réglementaire VASP (Virtual Asset Service Provider) mis en place par la FSC, certaines entreprises acceptent les paiements en Bitcoin et Ethereum. Cependant, la conversion en fiat reste un défi : seules quelques plateformes (comme OVEX ou Yellow Card) proposent un off-ramp vers les comptes bancaires mauriciens.",
      "Notre conseil : pour un e-commerce international depuis Maurice, combinez Stripe (cartes bancaires internationales), un compte Wise Business (virements B2B), et MCB Juice ou un VPOS local (marché mauricien). Cette combinaison couvre 99% des cas d'usage. Vanille Stratégie vous aide à structurer ces flux de paiement en conformité avec les obligations déclaratives du MRA.",
    ],
  },
  "ecosysteme-tech-startups-maurice": {
    title: "Écosystème tech et startups à Maurice : opportunités et défis",
    category: "Digital",
    date: "Mars 2026",
    content: [
      "Maurice ambitionne de devenir un hub technologique régional, reliant l'Afrique à l'Asie. L'île est connectée par plusieurs câbles sous-marins (SAFE, LION, MARS, METISS) qui offrent une bande passante internationale de plus de 10 Tbps. La couverture fibre optique atteint 98% du territoire national, avec des débits allant de 30 Mbps à 1 Gbps pour les entreprises.",
      "L'écosystème startup mauricien est encore jeune mais en croissance rapide. Le National SME Incubator Scheme, géré par l'EDB, offre un accompagnement de 24 mois aux startups éligibles : espace de coworking gratuit, mentorat, accès à un réseau d'investisseurs, et une subvention pouvant aller jusqu'à 500 000 MUR. Le Mauritius Research and Innovation Council (MRIC) finance des projets R&D via des grants compétitifs.",
      "Les coûts opérationnels sont un atout majeur. Un développeur senior mauricien coûte entre 30 000 et 60 000 MUR par mois (600-1 200 EUR), soit 3 à 5 fois moins qu'en France. Les espaces de bureau dans les zones technologiques (Ébène Cybercity, Moka Smart City) se louent entre 15 et 25 USD le mètre carré par mois. L'électricité et internet sont fiables et abordables.",
      "Les défis existent. Le pool de talents tech est limité (environ 15 000 développeurs actifs sur l'île) et les meilleurs sont courtisés par les BPO (Business Process Outsourcing) et les grandes entreprises internationales présentes. Le recrutement de profils seniors en IA, cybersécurité ou blockchain reste difficile. L'OP Professional et le nouveau Expert Pass facilitent l'importation de talents étrangers.",
      "Le financement est un autre défi : le venture capital est quasi inexistant à Maurice. Les startups se financent principalement par bootstrapping, business angels locaux ou fonds régionaux (Knife Capital, Savannah Fund). Le Mauritius Africa FinTech Hub (MAFH) joue un rôle de catalyseur pour le secteur fintech, avec des programmes d'accélération et des connexions vers les marchés africains.",
      "Pour les entrepreneurs tech français qui s'installent à Maurice, l'île offre un avantage stratégique unique : un fuseau horaire (GMT+4) qui chevauche les heures de bureau européennes le matin et asiatiques l'après-midi, une fiscalité ultra-compétitive, et un accès privilégié au marché africain via les accords COMESA et AfCFTA.",
    ],
  },
  "industries-cles-maurice-opportunites": {
    title: "Industries clés à Maurice : où investir en 2026",
    category: "Guide",
    date: "Mars 2026",
    content: [
      "Maurice a diversifié son économie bien au-delà du sucre et du tourisme. En 2026, plusieurs secteurs offrent des opportunités d'investissement attractives, soutenues par des incitations fiscales ciblées et un cadre réglementaire favorable.",
      "Les services financiers restent le pilier de l'économie mauricienne, représentant environ 12% du PIB. Le Global Business sector compte plus de 20 000 entités enregistrées, gérant des flux d'investissement vers l'Afrique et l'Asie. Maurice est la première source d'IDE (investissement direct étranger) vers l'Inde grâce à la convention fiscale bilatérale. La FSC régule le secteur avec des standards alignés sur les normes internationales.",
      "Le secteur des TIC et du BPO connaît une croissance de 6-8% par an. Maurice héberge des centres d'opérations pour Accenture, Ceridian, Infosys et plusieurs groupes français. L'ICT Academy forme 2 000 nouveaux diplômés par an. L'EDB offre un crédit d'impôt de 200% sur les dépenses de R&D dans le secteur technologique.",
      "L'ocean economy est le secteur le plus prometteur. Avec une Zone Économique Exclusive (ZEE) de 2,3 millions de km², Maurice dispose de ressources marines considérables. L'aquaculture, la biotechnologie marine, la pêche durable et l'exploration des fonds marins sont des sous-secteurs prioritaires. Le gouvernement a mis en place un Ocean Economy Roadmap avec un objectif de 25% du PIB d'ici 2030.",
      "L'immobilier et les Smart Cities attirent des investissements massifs. Le PDS (Property Development Scheme) a généré plus de 500 millions USD d'investissements étrangers depuis son lancement. Les projets Smart City (Mont Choisy, Moka, Beau Plan) combinent résidentiel, commercial et loisirs. Les rendements locatifs oscillent entre 4 et 7% pour les biens de qualité dans les zones touristiques.",
      "Le secteur pharmaceutique et biotechnologique bénéficie d'incitations spécifiques : exonération de droits de douane sur les équipements, tax holiday de 8 ans pour les nouvelles entreprises, et accès préférentiel aux marchés africains via le COMESA. Plusieurs laboratoires indiens (Aurobindo, Sun Pharma) ont établi des unités de production à Maurice.",
      "Vanille Stratégie accompagne les investisseurs dans l'analyse sectorielle, le choix de la structure juridique adaptée à chaque industrie, et l'obtention des licences et permis nécessaires auprès de l'EDB et des régulateurs sectoriels.",
    ],
  },
  "maurice-reunion-liaisons-expats-francais": {
    title: "Maurice-Réunion : liaisons, synergies et communauté francophone",
    category: "Guide",
    date: "Mars 2026",
    content: [
      "Maurice et La Réunion sont séparées par seulement 172 km d'océan Indien. Les vols directs entre Roland-Garros (RUN) et Sir Seewoosagur Ramgoolam (MRU) durent 45 minutes, avec plusieurs liaisons quotidiennes opérées par Air Mauritius et Air Austral. Les tarifs aller-retour oscillent entre 150 et 350 EUR selon la saison. Cette proximité crée des synergies uniques pour les entrepreneurs francophones.",
      "La communauté française à Maurice compte environ 12 000 résidents inscrits au registre consulaire, auxquels s'ajoutent plusieurs milliers de non-inscrits et de binationaux. La communauté réunionnaise est particulièrement importante, avec des liens familiaux, culturels et économiques profonds entre les deux îles. Le créole mauricien et le créole réunionnais partagent des racines communes.",
      "Plusieurs accords facilitent les échanges : la Commission de l'océan Indien (COI) promeut la coopération régionale, et des accords bilatéraux couvrent la reconnaissance des diplômes, la coopération médicale (évacuations sanitaires de Maurice vers La Réunion) et les échanges culturels. Le consulat de France à Maurice traite les démarches administratives pour les Français résidents.",
      "Les écoles françaises à Maurice offrent une continuité éducative pour les familles expatriées. Le Lycée La Bourdonnais (maternelle au baccalauréat, programme AEFE) est l'établissement de référence, avec environ 2 000 élèves. L'École du Nord, l'École du Centre et le Petit Lycée complètent l'offre. Les frais de scolarité varient de 3 000 à 8 000 EUR par an, soit nettement moins qu'à Dubaï ou Singapour.",
      "Sur le plan business, la complémentarité Maurice-Réunion est évidente : Maurice offre la fiscalité et le cadre réglementaire international, La Réunion offre l'accès aux financements européens (FEDER, FSE) et au marché français. Certains entrepreneurs structurent leur activité avec une société opérationnelle à Maurice (15% IS) et une filiale de distribution à La Réunion pour le marché DOM-TOM.",
      "La culture francophone est un atout souvent sous-estimé de Maurice. Le français est la langue des affaires et de l'administration, aux côtés de l'anglais et du créole mauricien. Les médias francophones (L'Express, Le Mauricien, Radio Plus) sont largement diffusés. Cette francophonie naturelle facilite considérablement l'intégration des expatriés français.",
    ],
  },
  "infrastructures-maurice-telecom-sante-education": {
    title: "Infrastructures à Maurice : télécom, santé et éducation",
    category: "Guide",
    date: "Mars 2026",
    content: [
      "Les infrastructures de Maurice ont connu un développement remarquable au cours des deux dernières décennies. En matière de télécommunications, l'île affiche une couverture fibre optique de 98% du territoire, portée par Mauritius Telecom (opérateur historique) et ses concurrents EMTEL et MyT. Les débits résidentiels atteignent 100 Mbps en standard, avec des offres professionnelles jusqu'à 1 Gbps. Le réseau 4G couvre 99% du territoire et la 5G est en cours de déploiement.",
      "La connectivité internationale repose sur quatre câbles sous-marins : SAFE (vers l'Afrique du Sud et la Malaisie), LION (vers La Réunion et Madagascar), MARS (redondance régionale) et METISS (vers l'Afrique du Sud, mis en service en 2023). Cette redondance garantit une résilience exceptionnelle : une coupure de câble n'affecte pas la connectivité grâce au reroutage automatique.",
      "Le système de santé mauricien combine offre publique et privée. Le secteur public offre des soins gratuits dans les hôpitaux régionaux (Victoria, Jeetoo, Candos, Flacq, Jawaharlal Nehru). Le secteur privé est de qualité internationale : le groupe C-Care (ex-Clinique Darné et Wellkin Hospital) est accrédité internationalement, avec des spécialistes formés au Royaume-Uni, en France et en Inde. Le Wellkin Hospital à Moka est l'établissement de référence pour les expatriés.",
      "Les tarifs médicaux privés restent très compétitifs par rapport à l'Europe : une consultation spécialiste coûte 1 500-3 000 MUR (30-60 EUR), une IRM environ 15 000 MUR (300 EUR), et une intervention chirurgicale classique 100 000-300 000 MUR (2 000-6 000 EUR). Les assurances santé internationales (Allianz, Cigna, AXA) couvrent les établissements privés mauriciens.",
      "L'éducation offre un large éventail de choix. Outre les écoles françaises (Lycée La Bourdonnais, AEFE), plusieurs écoles internationales proposent le curriculum britannique (Northfields International High School, Le Bocage International School) ou le Baccalauréat International (Clavis International Primary School). L'Université de Maurice (UoM) et l'Université de Technologie (UTM) forment les cadres locaux. Plusieurs universités étrangères ont des campus à Maurice : Middlesex University, Curtin University.",
      "Les transports sont le point faible relatif de l'île. Le Metro Express, mis en service en 2019, relie Curepipe à Port-Louis via Rose-Hill et Quatre Bornes (26 km). Le réseau routier est correct mais congestionné aux heures de pointe, notamment sur l'axe Nord-Sud. La plupart des expatriés possèdent un véhicule. L'aéroport international SSR est moderne et bien connecté (vols directs vers Paris, Londres, Dubaï, Johannesburg, Mumbai).",
    ],
  },
  "qualite-de-vie-maurice-lifestyle-golf-business": {
    title: "Qualité de vie à Maurice : lifestyle, golf et business au quotidien",
    category: "Guide",
    date: "Mars 2026",
    content: [
      "Maurice offre une qualité de vie exceptionnelle qui combine climat tropical, sécurité et infrastructures modernes. Le climat est agréable toute l'année : 25-33°C en été (novembre-avril) et 18-25°C en hiver (mai-octobre). L'ensoleillement dépasse 300 jours par an sur la côte ouest. La saison cyclonique (janvier-mars) apporte des pluies bienvenues mais les cyclones directs sont rares.",
      "La sécurité est un atout majeur. Maurice est classée parmi les pays les plus sûrs d'Afrique et de l'océan Indien. Le taux de criminalité violente est très faible. Les expatriés circulent librement, y compris le soir. Les résidences dans les Smart Cities et les PDS bénéficient d'une sécurité 24h/24. Ce niveau de sécurité est comparable à celui du Portugal et nettement supérieur à celui de nombreuses destinations concurrentes.",
      "Le golf est indissociable du lifestyle mauricien. L'île compte une dizaine de parcours de niveau international : Anahita Golf Club (Ernie Els design, 18 trous), Avalon Golf Estate (parcours de Peter Matkovich), Heritage Golf Club (18 trous en bord de mer), Île aux Cerfs Golf Club (Bernhard Langer design), Mont Choisy Le Golf, et Tamarina Golf Club. Les abonnements annuels varient de 50 000 à 200 000 MUR (1 000-4 000 EUR) selon le club.",
      "La gastronomie mauricienne reflète la diversité culturelle de l'île : cuisine créole, indienne, chinoise et française se côtoient. Les restaurants haut de gamme (The Château Mon Désir, Escale Créole, La Table du Château) rivalisent avec les meilleures adresses européennes. Le coût d'un dîner gastronomique pour deux se situe entre 3 000 et 6 000 MUR (60-120 EUR), soit deux à trois fois moins qu'à Paris.",
      "Le coût de la vie global est un avantage considérable. Un couple sans enfant peut vivre confortablement avec 80 000-120 000 MUR par mois (1 600-2 400 EUR) : loyer d'un appartement 2 chambres en zone résidentielle (25 000-40 000 MUR), alimentation (15 000-25 000 MUR), transport et essence (5 000-8 000 MUR), loisirs et restaurants (15 000-25 000 MUR). Pour un lifestyle premium avec villa et club de golf, comptez 200 000-350 000 MUR (4 000-7 000 EUR) par mois.",
      "Le business networking est facilité par la taille de l'île. Tout le monde se connaît dans le milieu des affaires. Les rencontres informelles au golf, dans les restaurants ou lors d'événements de la Chambre de Commerce Franco-Mauricienne (CCIFM) sont souvent plus productives que les réunions formelles. Le fuseau horaire GMT+4 permet de travailler avec l'Europe le matin et l'Asie l'après-midi.",
    ],
  },
  "reseaux-entrepreneurs-clubs-affaires-maurice": {
    title: "Réseaux d'entrepreneurs et clubs d'affaires à Maurice",
    category: "Guide",
    date: "Mars 2026",
    content: [
      "Le networking est un pilier du business à Maurice. L'île étant petite (1,3 million d'habitants), les cercles d'affaires sont accessibles et les connexions se font rapidement. Plusieurs organisations structurent ce réseau et offrent des opportunités de rencontre régulières.",
      "La MCCI (Mauritius Chamber of Commerce and Industry), fondée en 1850, est la plus ancienne et la plus influente. Elle compte plus de 500 membres corporate et organise des événements mensuels : conférences sectorielles, missions commerciales, et le Mauritius Business Forum annuel. L'adhésion coûte entre 10 000 et 50 000 MUR par an selon la catégorie. La MCCI est aussi le point de contact pour les certifications d'origine et les formalités d'import-export.",
      "La Chambre de Commerce et d'Industrie France-Maurice (CCIFM) est le réseau francophone de référence. Elle organise des petits-déjeuners d'affaires, des afterworks mensuels et le French Business Awards. Environ 200 entreprises sont membres, dont de grands groupes français (Total, Colas, Alstom) et des PME locales. C'est le meilleur point d'entrée pour un entrepreneur français qui s'installe.",
      "La JCI (Junior Chamber International) Maurice est très active auprès des jeunes entrepreneurs (18-40 ans). Le CJD Maurice (Centre des Jeunes Dirigeants d'entreprise) est la section locale du mouvement français : il réunit des dirigeants engagés dans une démarche de progrès et organise des commissions thématiques, des plénières mensuelles et des formations entre pairs. C'est un réseau particulièrement pertinent pour les entrepreneurs francophones qui veulent s'intégrer rapidement à la communauté des décideurs locaux. AmCham Mauritius (American Chamber of Commerce) connecte les entreprises au marché américain. La Chinese Business Chamber facilite les échanges avec la Chine, particulièrement depuis le FTA Chine-Maurice de 2019.",
      "Au-delà des chambres de commerce, des clubs informels jouent un rôle important. Le Mauritius Business Club réunit des CEO et dirigeants pour des dîners mensuels exclusifs. Les clubs de golf (Anahita, Heritage, Mont Choisy) sont des lieux de networking naturels où se concluent de nombreuses affaires. Les co-working spaces comme The Hive (Ébène), CWORKZ (Moka) et Turbine (Bagatelle) organisent régulièrement des événements tech et startup.",
      "Notre recommandation : rejoignez au minimum la CCIFM et participez à 2-3 événements par mois pendant votre première année. Le retour sur investissement est considérable — la plupart de nos clients obtiennent leurs premiers contrats locaux via ces réseaux. Vanille Stratégie facilite les introductions auprès des décideurs clés de l'écosystème mauricien.",
    ],
  },
  "ouvrir-compte-bancaire-maurice-guide": {
    title: "Ouvrir un compte bancaire à Maurice : guide complet 2026",
    category: "Guide",
    date: "Mars 2026",
    content: [
      "L'ouverture d'un compte bancaire à Maurice est une étape fondamentale de toute installation. Le système bancaire mauricien est solide, bien régulé par la Bank of Mauritius (BoM), et aligné sur les standards internationaux de conformité (AML/KYC, CRS, FATCA).",
      "Les principales banques pour les expatriés sont : AfrAsia Bank (banque premium, spécialisée dans la clientèle internationale et le Global Business), MCB (Mauritius Commercial Bank, la plus grande banque de l'île avec le réseau d'agences le plus étendu), SBM (State Bank of Mauritius, banque à capitaux publics avec des offres compétitives), et Bank One (joint-venture avec I&M Group Kenya, orientée Afrique).",
      "Documents requis pour un compte personnel : passeport certifié, preuve d'adresse à Maurice (bail ou facture d'utilité), preuve de revenus ou source de fonds (3 derniers relevés bancaires de votre banque actuelle, avis d'imposition), lettre de référence de votre banque actuelle, et copie de votre Occupation Permit ou Premium Visa. Pour les ressortissants de pays à haut risque AML, des documents supplémentaires peuvent être demandés.",
      "Pour un compte corporate (société), ajoutez : certificat d'incorporation, Constitution de la société, registre des actionnaires et directeurs, business plan ou présentation de l'activité, et résolution du board autorisant l'ouverture du compte. Les sociétés GBC doivent également fournir leur licence FSC.",
      "Délais réalistes : comptez 5 à 10 jours ouvrés pour un compte personnel et 10 à 20 jours ouvrés pour un compte corporate. AfrAsia est généralement plus rapide pour les comptes corporate internationaux. MCB est plus rapide pour les comptes personnels résidents. Le dépôt initial minimum varie de 1 000 à 10 000 USD selon la banque et le type de compte.",
      "Les comptes multi-devises sont la norme pour les expatriés. Vous pouvez détenir des soldes en MUR, USD, EUR, GBP, ZAR, AUD, CHF et d'autres devises selon la banque. Les virements internationaux SWIFT entrants et sortants sont traités en 1 à 3 jours ouvrés. Les frais de virement varient de 500 à 2 000 MUR (10-40 EUR) par transaction sortante.",
      "Vanille Stratégie facilite l'ouverture de compte grâce à ses relations établies avec les départements corporate des principales banques. Nous pré-vérifions vos documents pour éviter les allers-retours, et nous accompagnons le processus de A à Z. Résultat : un taux de réussite de 100% et des délais raccourcis de 30 à 50% par rapport à une démarche individuelle.",
    ],
  },
  "crypto-vasp-licence-maurice": {
    title: "Crypto et licence VASP à Maurice : cadre réglementaire 2026",
    category: "Fiscalité",
    date: "Mars 2026",
    content: [
      "Maurice a mis en place un cadre réglementaire structuré pour les actifs virtuels, administré par la Financial Services Commission (FSC). La licence VASP (Virtual Asset Service Provider) est obligatoire pour toute entité opérant à Maurice qui fournit des services liés aux actifs virtuels : échange, transfert, conservation, ou conseil en investissement crypto.",
      "Le Virtual Asset and Initial Token Offering Services Act 2021 (VAITOS Act) est le texte fondateur. Il définit les obligations des VASP en matière de gouvernance, de capital minimum, de cybersécurité, de protection des clients et de conformité AML/CFT. La FSC a publié des guidelines complémentaires en 2023 et 2024, précisant les exigences opérationnelles et technologiques.",
      "Les conditions d'obtention de la licence VASP incluent : un capital minimum de 1 million MUR (environ 20 000 EUR) pour les services de base, pouvant aller jusqu'à 10 millions MUR pour les activités de custody, des directeurs fit and proper avec expérience dans le secteur financier, un Money Laundering Reporting Officer (MLRO) résident à Maurice, une infrastructure IT conforme aux standards de cybersécurité (ISO 27001 recommandé), et une assurance responsabilité professionnelle.",
      "Sur le plan fiscal, les revenus des activités crypto sont imposables à Maurice au taux standard de 15% pour les sociétés. Les plus-values sur crypto-actifs détenus par des particuliers ne sont pas imposées à Maurice (cohérent avec l'absence générale d'impôt sur les plus-values). Les GBC opérant dans le secteur crypto peuvent bénéficier du Partial Exemption Regime (taux effectif de 3%) sous réserve de substance requirements renforcés.",
      "Le processus de demande de licence VASP prend généralement 3 à 6 mois. La FSC procède à un examen approfondi du business plan, de la technologie, des procédures AML/KYC, et du profil des dirigeants. Un sandbox réglementaire (Regulatory Sandbox Licence) est disponible pour les projets innovants qui ne rentrent pas dans les catégories existantes — il permet d'opérer pendant 2 ans sous conditions supervisées.",
      "Maurice se positionne comme un hub crypto régional, concurrent de Singapour et des Émirats. Plusieurs exchanges et projets blockchain ont choisi Maurice pour leur siège : la clarté réglementaire, la fiscalité avantageuse et l'accès aux marchés africains et asiatiques sont les principaux arguments. Vanille Stratégie accompagne les projets crypto dans la structuration juridique et la demande de licence VASP auprès de la FSC.",
    ],
  },
  "succession-internationale-france-maurice": {
    title: "Succession internationale France-Maurice : planification et optimisation",
    category: "Fiscalité",
    date: "Mars 2026",
    content: [
      "Maurice ne prélève aucun droit de succession, aucun droit de donation et aucun impôt sur la fortune. C'est l'un des avantages les plus significatifs de l'île pour la planification patrimoniale. À titre de comparaison, la France applique des droits de succession pouvant atteindre 45% en ligne directe et 60% entre non-parents.",
      "La convention fiscale France-Maurice de 1980 (amendée en 2011) ne couvre pas spécifiquement les droits de succession. En l'absence de convention successorale bilatérale, c'est le droit interne de chaque pays qui s'applique. La France impose les successions sur la base de la résidence fiscale du défunt ou de l'héritier : si le défunt ou l'héritier a été résident fiscal français pendant au moins 6 des 10 dernières années, la France peut imposer la succession mondiale.",
      "La planification successorale doit donc être anticipée. Pour un résident fiscal mauricien d'origine française, il est crucial de documenter la rupture définitive de la résidence fiscale française : vente du logement en France, transfert du centre des intérêts économiques à Maurice, inscription consulaire, et respect du critère des 183 jours de présence à Maurice. Plus le temps passe depuis le départ de France, plus la position est solide.",
      "Les trusts mauriciens (Mauritius Trusts Act 2001) offrent un outil de planification patrimoniale puissant. Un trust permet de transférer des actifs à un trustee qui les gère pour le bénéfice de bénéficiaires désignés. Les trusts mauriciens ne sont pas soumis à l'impôt sur les revenus ou les plus-values (sauf si les bénéficiaires sont résidents fiscaux d'un pays qui impose les trusts). La FSC supervise les trust companies agréées.",
      "L'assurance-vie est un autre véhicule de planification efficace. Les contrats d'assurance-vie souscrits à Maurice ou au Luxembourg bénéficient d'un cadre fiscal favorable. Les primes ne sont pas soumises à la taxe sur les primes à Maurice. Le dénouement du contrat au décès permet de transmettre le capital aux bénéficiaires désignés sans passer par la succession civile mauricienne.",
      "Attention particulière : la France a renforcé ses dispositifs anti-évasion. Le trust est fiscalement transparent en droit français (articles 792-0 bis du CGI) : un trust détenu par un résident fiscal français est pleinement imposable. La planification successorale internationale nécessite une coordination entre les conseils mauriciens et français. Vanille Stratégie travaille en partenariat avec des avocats fiscalistes français pour offrir une solution intégrée.",
      "Notre recommandation : démarrez la planification successorale dès votre installation à Maurice, pas après. Chaque année de résidence fiscale mauricienne renforce votre position. Didier Laroussinie et son équipe analysent votre patrimoine global et vous proposent une stratégie sur mesure, en coordination avec vos conseils en France.",
    ],
  },
  "droit-travail-maurice-workers-rights-act": {
    title: "Droit du travail à Maurice : Workers' Rights Act 2019 et obligations employeurs",
    category: "Guide",
    date: "Mars 2026",
    content: [
      "Le Workers' Rights Act 2019 (WRA 2019) est le texte fondamental du droit du travail mauricien. Il a remplacé l'Employment Rights Act 2008 et l'Employment Relations Act 2008, unifiant le cadre juridique en un seul texte. Tout employeur opérant à Maurice — y compris les sociétés détenues par des étrangers — doit s'y conformer.",
      "Les contrats de travail doivent être écrits et remis au salarié dans les 7 jours suivant l'embauche. Ils doivent mentionner : l'identité des parties, la description du poste, la rémunération et ses composantes, les horaires de travail, la durée de la période d'essai (maximum 12 mois), et les conditions de résiliation. Le WRA 2019 prévoit des contrats à durée indéterminée (CDI) et déterminée (CDD), avec des restrictions sur le renouvellement excessif des CDD.",
      "Le salaire minimum national (National Minimum Wage) est fixé à 15 000 MUR par mois depuis janvier 2024 (environ 300 EUR). Les secteurs réglementés (hôtellerie, textile, construction) ont des grilles salariales spécifiques définies par les Remuneration Orders. La rémunération doit être versée en roupies mauriciennes, sauf accord contraire pour les employés internationaux.",
      "Les congés et absences sont encadrés : 20 jours ouvrés de congé annuel, 15 jours de congé maladie (avec certificat médical à partir du 3ème jour), 14 semaines de congé maternité (dont 12 à plein salaire), 5 jours de congé paternité, et les jours fériés nationaux (15 par an). Les heures supplémentaires sont rémunérées à 150% du taux horaire normal en semaine et 200% les dimanches et jours fériés.",
      "Le licenciement est strictement encadré par le WRA 2019. Tout licenciement doit être justifié par un motif valable : faute grave, insuffisance professionnelle, ou nécessité économique. Un préavis écrit est obligatoire (30 jours pour les employés ayant plus de 3 ans d'ancienneté). L'indemnité de licenciement pour raison économique est de 3 mois de salaire par période de 12 mois d'ancienneté. Le Workfare Programme offre un filet de sécurité aux travailleurs licenciés.",
      "Les cotisations sociales à la charge de l'employeur comprennent : la CSG (Contribution Sociale Généralisée) de 6% du salaire brut (plafonné), le NSF (National Savings Fund) de 2,5%, et le HRDC (Human Resource Development Council) levy de 1,5% de la masse salariale. L'employé contribue à hauteur de 3% en CSG. Ces cotisations sont collectées par le MRA.",
      "Vanille Stratégie et BD Star accompagnent les employeurs dans la rédaction des contrats conformes au WRA 2019, le calcul des charges sociales, la gestion de la paie, et la conformité avec les obligations de reporting auprès du Ministry of Labour et du MRA. Notre dashboard OKE automatise le calcul des salaires et la génération des bulletins de paie conformes.",
    ],
  },
  "ecoles-internationales-maurice-education": {
    title: "Écoles internationales à Maurice : guide pour familles expatriées",
    category: "Guide",
    date: "Mars 2026",
    content: [
      "Le choix de l'école est souvent le facteur décisif pour les familles qui envisagent une expatriation à Maurice. L'île offre un éventail d'établissements internationaux couvrant les curricula français, britannique et international (IB), avec des frais de scolarité nettement inférieurs à ceux de Dubaï, Singapour ou Hong Kong.",
      "Le Lycée La Bourdonnais est l'établissement français de référence, homologué par l'AEFE (Agence pour l'Enseignement Français à l'Étranger). Situé à Curepipe, il accueille environ 2 000 élèves de la maternelle à la terminale. Le programme suit strictement le curriculum de l'Éducation nationale française, avec passage du baccalauréat français. Les frais de scolarité sont d'environ 4 000-7 000 EUR par an selon le niveau. L'admission est sélective et les listes d'attente sont fréquentes — inscrivez-vous 6 à 12 mois avant l'arrivée prévue.",
      "L'École du Nord (Mapou) et l'École du Centre (Moka) offrent le curriculum français en primaire, avec des effectifs plus réduits et une ambiance plus familiale. Le Petit Lycée (Tamarin) est une option prisée sur la côte ouest, couvrant la maternelle et le primaire. Ces écoles sont des choix pertinents pour les familles qui s'installent loin de Curepipe.",
      "Pour le curriculum britannique, Northfields International High School (Labourdonnais) est l'établissement le plus réputé. Il prépare aux examens IGCSE et A-Levels, avec un taux de réussite supérieur à 95%. Le Bocage International School propose les IGCSE et le diplôme IB (International Baccalaureate). Les frais de scolarité varient de 5 000 à 12 000 EUR par an.",
      "Clavis International Primary School (Moka) se distingue par son approche IB PYP (Primary Years Programme) et son environnement bilingue français-anglais. C'est un choix populaire pour les familles internationales qui souhaitent que leurs enfants maîtrisent les deux langues. L'école est située dans la Smart City de Moka, à proximité de nombreuses résidences prisées par les expatriés.",
      "Critères pratiques de choix : la proximité du domicile est importante car les embouteillages aux heures de pointe rallongent considérablement les trajets. Privilégiez une école dans la même zone géographique que votre résidence (Nord, Ouest, Centre). Les écoles proposent généralement un service de bus scolaire payant. Les activités extrascolaires (sport, musique, arts) sont bien développées dans les établissements internationaux.",
      "Vanille Stratégie accompagne les familles dans le choix de l'école en fonction de leur lieu de résidence, de la langue de scolarisation souhaitée et du projet éducatif. Nous facilitons les contacts avec les directeurs d'établissement et les démarches d'inscription. Pour les familles avec des enfants au lycée, nous recommandons systématiquement le Lycée La Bourdonnais ou Le Bocage pour garantir la continuité vers des études supérieures en France ou à l'international.",
    ],
  },
  "sources-officielles-fiscalite-maurice": {
    title: "Sources officielles sur la fiscalité à Maurice : où trouver l'information fiable",
    category: "Guide",
    date: "Mars 2026",
    content: [
      "Dans un domaine aussi sensible que la fiscalité internationale, la fiabilité des sources est primordiale. Internet regorge d'articles obsolètes, approximatifs ou commercialement orientés sur la fiscalité mauricienne. Voici les sources officielles à consulter pour obtenir des informations à jour et exactes.",
      "Le MRA (Mauritius Revenue Authority) est l'administration fiscale de Maurice, équivalent de la DGFiP française. Son site officiel (mra.mu) publie les Income Tax Act, les Practice Notes, les rulings fiscaux anonymisés, et les formulaires de déclaration. Les Practice Notes du MRA sont particulièrement utiles : elles expliquent l'interprétation officielle des textes fiscaux. La base de données des taux d'imposition et seuils est mise à jour après chaque Finance Act.",
      "La FSC (Financial Services Commission) régule le secteur des services financiers, y compris les Global Business Companies. Son site (fscmauritius.org) publie les licences, les circulaires, les guidelines sur les substance requirements, et les listes des entités agréées (management companies, trust companies, fonds d'investissement). Les FSC Rules et Codes sont les textes de référence pour les GBC.",
      "L'EDB (Economic Development Board) est le point de contact pour les investisseurs étrangers. Son site (edbmauritius.org) publie les guidelines sur les Occupation Permits, les programmes d'investissement (Smart City, PDS), et les incitations sectorielles. Les guidelines EDB de 2025 sur les permis de résidence sont le document de référence le plus récent pour les conditions d'immigration.",
      "Le Government Gazette (gazette.govmu.org) est le journal officiel de Maurice. Tous les textes de loi, amendements et Government Notices y sont publiés. Le Finance Act (publié annuellement après le National Budget, généralement en juillet-août) est le texte clé pour les modifications fiscales. Les National Budget Speeches du Minister of Finance sont disponibles sur le site du Ministry of Finance.",
      "Autres sources officielles utiles : la Bank of Mauritius (bom.mu) pour les réglementations bancaires et de change, le CBRD (Companies and Business Registration Department) via le portail eRegulations pour les démarches de création de société, l'ATMC (Association of Trust and Management Companies) pour les pratiques du secteur GBC, et les conventions fiscales bilatérales disponibles sur le site du MRA.",
      "Notre approche chez Vanille Stratégie : chaque conseil que nous donnons est sourcé et vérifiable. Nous citons systématiquement les textes de loi, les Practice Notes et les guidelines officielles. Didier Laroussinie et son équipe maintiennent une veille permanente sur les évolutions législatives et réglementaires, pour que nos clients disposent toujours d'une information exacte et à jour.",
    ],
  },
  "budget-2025-2026-maurice-entrepreneurs": {
    title: "Budget 2025-2026 de Maurice : analyse pratique pour les entrepreneurs francophones",
    category: "Fiscalité",
    date: "Juin 2025",
    content: [
      "Le budget 2025-2026 de l'île Maurice, présenté le 5 juin 2025 sous le thème « From Abyss to Prosperity: Rebuilding the Bridge to the Future », introduit des mesures structurantes pour les investisseurs étrangers. Depuis notre cabinet à Port-Louis, nous avons décortiqué les dispositions qui concernent directement les entrepreneurs francophones.",
      "Le gouvernement a articulé son budget autour du renouveau économique, de la consolidation fiscale et d'un nouvel ordre social. Dans notre pratique quotidienne, c'est le premier pilier qui concentre l'essentiel des mesures opérationnelles pour nos clients. L'Economic Development Board (EDB) pilote désormais une simplification des procédures de permis et une accélération de la digitalisation administrative. La Financial Services Commission (FSC) lance une plateforme unifiée de licence électronique avec un repository KYC centralisé et un tableau de bord en temps réel. En pratique, le délai annoncé de traitement accéléré reste à confirmer — nous observons encore des lenteurs sur certains dossiers, et nous recommandons d'anticiper un délai supérieur aux promesses officielles.",
      "Les petites entreprises dont le chiffre d'affaires annuel ne dépasse pas 10 millions de roupies mauriciennes bénéficient d'un crédit d'impôt de 15 % sur l'acquisition de nouveaux équipements (hors véhicules), plafonné à 500 000 roupies. Ce dispositif est valable jusqu'au 30 juin 2030. Nos clients nous interrogent régulièrement sur ce mécanisme : il est réellement avantageux, à condition de bien documenter les acquisitions et de respecter les critères d'éligibilité définis par la MRA.",
      "Le budget prévoit l'expansion du terminal à conteneurs, la construction d'une jetée de croisière et l'acquisition de remorqueurs, pour un total de 5,4 milliards de roupies. Pour les entreprises tournées vers l'export — notamment via le CECPA avec l'Inde ou l'AGOA avec les États-Unis — cette modernisation portuaire est un signal positif.",
      "Le budget introduit sept nouveaux dispositifs d'investissement accompagnés d'un soutien renforcé aux entreprises exportatrices. Les détails réglementaires ne sont pas encore tous publiés à ce stade. En tant que praticiens sur le terrain, nous suivons leur mise en œuvre effective pour conseiller nos clients au bon moment.",
      "Ce budget ne se résume pas à un taux d'imposition de 15 %. La combinaison du crédit d'impôt, de la digitalisation administrative et des nouveaux schémas d'investissement crée un environnement plus lisible qu'il y a deux ans. Cependant, il faut être prudent : la réalité administrative diffère souvent des annonces officielles. Nous accompagnons nos clients dans le suivi concret de ces mesures, au-delà des effets d'annonce. Notre cabinet accompagne régulièrement des entrepreneurs sur ces problématiques budgétaires et fiscales — n'hésitez pas à nous solliciter pour un éclairage adapté à votre situation.",
    ],
  },
  "qdmtt-impot-minimum-multinational-maurice": {
    title: "QDMTT à Maurice : ce que l'impôt minimum de 15 % change pour les multinationales",
    category: "Fiscalité",
    date: "Juillet 2025",
    content: [
      "L'île Maurice a officiellement adopté le Qualified Domestic Minimum Top-Up Tax (QDMTT) dans le cadre de la Finance Act 2025. Depuis notre cabinet, nous constatons que cette mesure suscite beaucoup d'inquiétudes — souvent injustifiées — chez les investisseurs francophones. Décryptage.",
      "Le QDMTT est un impôt minimum complémentaire aligné sur les règles GloBE du Pilier 2 de l'OCDE. Il s'applique lorsque le taux effectif d'imposition (ETR) d'un groupe multinational à Maurice tombe en dessous de 15 %. Concrètement, la différence entre l'ETR réel et le plancher de 15 % est récupérée par la Mauritius Revenue Authority.",
      "Attention, cette mesure est souvent mal interprétée. Le QDMTT vise exclusivement les groupes multinationaux dont le chiffre d'affaires annuel consolidé dépasse 750 millions d'euros. Les PME, les entreprises de taille intermédiaire et la très grande majorité des GBC détenus par des investisseurs francophones ne sont pas touchés. Sont également exclus : les fonds d'investissement, les véhicules d'investissement immobilier et les entités d'investissement d'assurance.",
      "Le QDMTT s'applique à tous les exercices se terminant après le 31 décembre 2024. La déclaration et le paiement sont dus dans les 15 mois suivant la fin de l'exercice fiscal. Nos clients nous interrogent régulièrement sur ce calendrier : il faut noter que la MRA n'a pas encore publié tous les formulaires spécifiques, ce qui crée une zone d'incertitude pratique que nous surveillons de près.",
      "L'Alternative Minimum Tax (AMT) de 10 % sur les bénéfices comptables, également introduite par le budget 2025-2026, ne s'applique pas aux détenteurs de Global Business Licence (GBL). Le régime fiscal du GBL conserve donc son attractivité pour les structures qui restent sous le seuil des 750 millions d'euros de chiffre d'affaires consolidé.",
      "En adoptant le QDMTT, Maurice prend les devants : plutôt que de laisser d'autres juridictions (France, Inde, Afrique du Sud) percevoir l'impôt complémentaire via l'Income Inclusion Rule du Pilier 2, Maurice choisit de le collecter elle-même. Les recettes fiscales restent sur le territoire, et la conformité aux standards internationaux est démontrée. En tant que praticiens sur le terrain, nous recommandons aux groupes potentiellement concernés de faire auditer leur taux effectif d'imposition dès maintenant. Pour les autres — c'est-à-dire l'immense majorité de nos clients — le QDMTT ne change fondamentalement rien à leur structuration.",
    ],
  },
  "immobilier-maurice-nouvelles-regles-2026": {
    title: "Immobilier à Maurice : nouvelles règles pour les investisseurs étrangers en 2026",
    category: "Guide",
    date: "Août 2025",
    content: [
      "La Finance Act 2025 a profondément remanié les conditions d'acquisition immobilière pour les non-citoyens à l'île Maurice. Ce que nous observons depuis notre cabinet, c'est que beaucoup d'investisseurs francophones n'ont pas encore mesuré l'ampleur de ces changements. Voici notre décryptage terrain.",
      "C'est le changement le plus significatif : la possibilité pour les étrangers d'acquérir un bien en dehors des régimes approuvés (IRS, RES, PDS, Smart City) pour un minimum de 500 000 USD est supprimée. Tout investissement immobilier par un non-citoyen doit désormais s'inscrire dans un régime encadré par le gouvernement. Dans notre pratique quotidienne à Port-Louis, nous constatons que cette suppression a pris de court plusieurs investisseurs qui avaient des projets en cours.",
      "À compter du 1er juillet 2026, les droits d'enregistrement pour les non-citoyens achetant sous les régimes IRS, RES, PDS, Smart City, IHS et Ground+2 passent de 5 % à 10 % de la valeur du bien. Sur un bien PDS à 500 000 USD, cela représente un surcoût de 25 000 USD. Il faut être prudent ici : certains promoteurs tentent de minimiser cet impact dans leurs projections financières.",
      "Autre nouveauté majeure : toute revente par un non-citoyen d'un bien acquis sous les régimes EDB sera soumise à une taxe de transfert foncier de 10 % sur la valeur du bien, à partir du 1er juillet 2026. Ce point est crucial et pourtant rarement abordé dans les guides d'investissement : il modifie substantiellement le calcul de rentabilité à la revente.",
      "Malgré ce durcissement, trois régimes restent ouverts. Le PDS (Property Development Scheme) propose des résidences de standing avec services — c'est le régime le plus utilisé par nos clients francophones. Le Smart City Scheme concerne des projets urbains intégrés combinant logement, bureaux et commerces. Le Ground+2 permet d'acquérir des appartements dans des immeubles d'au moins deux étages au-dessus du rez-de-chaussée, accessibles à partir de 6 millions de roupies mauriciennes (environ 120 000 EUR). L'acquisition d'un bien d'une valeur minimale de 375 000 USD dans un régime approuvé ouvre toujours droit à un permis de résidence.",
      "Les entrepreneurs que nous accompagnons doivent intégrer trois éléments dans leur réflexion : premièrement, les investisseurs déjà en réflexion ont intérêt à finaliser avant juillet 2026 pour bénéficier des droits à 5 %. Deuxièmement, le calcul de rentabilité locative doit désormais intégrer la taxe de transfert de 10 % à la sortie. Troisièmement, le Ground+2 devient une option sérieuse pour les budgets plus modestes. Notre cabinet accompagne régulièrement des investisseurs sur ces acquisitions immobilières — contactez-nous pour une analyse adaptée à votre projet et votre calendrier.",
    ],
  },
  "permis-travail-maurice-propass-expertpass": {
    title: "ProPass, Expert Pass et nouveaux permis de travail à Maurice : guide pratique 2025",
    category: "Permis",
    date: "Août 2025",
    content: [
      "Les règles d'immigration mauriciennes ont été substantiellement révisées en août 2025. Nos clients nous interrogent régulièrement sur les nouvelles catégories de permis. Voici notre analyse terrain, au-delà des informations officielles.",
      "L'Occupation Permit a été restructuré en deux catégories distinctes. Le ProPass est destiné aux professionnels avec un salaire minimum de 30 000 roupies mauriciennes par mois (environ 600 EUR), pour une validité de 10 ans — une avancée considérable par rapport aux anciens permis de 3 ans. L'Expert Pass est réservé aux profils hautement qualifiés avec un salaire minimum de 250 000 roupies par mois (environ 5 000 EUR), également valable 10 ans, ciblant les cadres dirigeants et consultants spécialisés.",
      "Depuis notre implantation à Maurice, nous avons pu constater que le ProPass ouvre les portes à un éventail de profils beaucoup plus large qu'avant. Le seuil de 30 000 MUR est réaliste pour la plupart des entrepreneurs francophones.",
      "Depuis le 1er décembre 2025, des frais de 50 USD non remboursables s'appliquent à toutes les demandes. Un montant symbolique, mais qui formalise le processus. En pratique, le délai de traitement annoncé de quelques semaines peut s'étirer à 6 à 8 semaines selon la charge administrative du Passport and Immigration Office. Nous recommandons de déposer les dossiers bien en amont de la date d'installation prévue.",
      "Pour les professionnels en télétravail, le Premium Visa permet de séjourner et travailler à distance depuis Maurice pour un an, renouvelable. Aucun salaire minimum local n'est requis — les revenus doivent simplement provenir de l'extérieur de Maurice. Le Retirement Permit a été significativement modifié : durée réduite à 5 ans (contre 10 auparavant), transfert minimum de 2 000 USD par mois, et obligation de passer au moins 180 jours par an à Maurice.",
      "La réforme de 2025 présente un double visage. La validité de 10 ans des ProPass et Expert Pass offre une stabilité sans précédent et constitue un argument décisif pour une installation durable. En revanche, les conditions du Retirement Permit se durcissent nettement. Ce que nous observons depuis notre cabinet, c'est que le ProPass devient la voie d'entrée privilégiée pour les entrepreneurs francophones, grâce à son seuil accessible et sa durée longue. Si vous envisagez une installation à Maurice, notre cabinet peut vous orienter vers le permis le mieux adapté à votre profil et vos objectifs.",
    ],
  },
  "convention-fiscale-france-maurice-avantages": {
    title: "Convention fiscale France-Maurice : les avantages réels pour les expatriés",
    category: "Fiscalité",
    date: "Septembre 2025",
    content: [
      "La convention de non-double imposition entre la France et Maurice, signée en 1980 et amendée en 2011, reste l'un des leviers fiscaux les plus puissants pour les Français qui s'expatrient. Pourtant, dans notre pratique quotidienne à Port-Louis, nous constatons que ses avantages sont souvent mal compris, voire sous-exploités.",
      "La convention répartit les droits d'imposition entre la France et Maurice selon le type de revenu et la résidence fiscale du contribuable. L'objectif : éviter qu'un même revenu soit imposé deux fois. Mais attention — la réalité administrative diffère souvent des schémas théoriques, et une planification rigoureuse est indispensable.",
      "Les revenus locatifs générés par des biens situés à Maurice sont imposés au taux fixe de 15 %. Comparé au barème progressif français pouvant atteindre 45 % (plus prélèvements sociaux à 17,2 %), l'économie est substantielle. Nos clients nous interrogent régulièrement sur ce point : le différentiel est réel, à condition d'avoir établi sa résidence fiscale à Maurice de manière effective et documentable.",
      "L'île Maurice ne prévoit pas de taxe sur les plus-values immobilières. Un investisseur français résident fiscal mauricien qui revend un bien à Maurice conserve 100 % de la plus-value réalisée. Toutefois, depuis la Finance Act 2025, il faut intégrer la nouvelle taxe de transfert foncier de 10 % applicable aux non-citoyens revendant sous les régimes EDB. La convention plafonne l'imposition des dividendes à 15 %, contre un prélèvement forfaitaire unique (PFU) de 30 % en France.",
      "Les biens immobiliers détenus à Maurice par un résident fiscal mauricien ne sont pas pris en compte dans l'assiette de l'Impôt sur la Fortune Immobilière français. Pour les patrimoines immobiliers importants, cet avantage peut être décisif. Toutefois, pour profiter pleinement de la convention, il faut établir sa résidence fiscale à Maurice — résider plus de 183 jours par an ou y avoir son centre d'intérêts économiques. L'administration fiscale française examine de plus en plus attentivement les transferts de résidence vers Maurice. Nous recommandons de constituer un dossier solide attestant de la réalité de l'installation.",
      "Depuis notre implantation à Maurice, nous avons pu constater que la convention franco-mauricienne offre des avantages fiscaux concrets et mesurables. Mais son application requiert une rigueur absolue. Les contribuables qui « bricolent » leur transfert de résidence s'exposent à des redressements. Au-delà de la France, Maurice dispose d'un réseau de plus de 45 conventions fiscales (Inde, Afrique du Sud, Royaume-Uni, Chine), ce qui en fait une plateforme d'investissement international de premier plan. Notre cabinet travaille avec des fiscalistes spécialisés en droit franco-mauricien — nous sommes à votre disposition pour analyser votre situation personnelle.",
    ],
  },
  "maurice-hub-fintech-afrique": {
    title: "Maurice comme hub fintech africain : opportunités concrètes pour les entrepreneurs tech",
    category: "Digital",
    date: "Octobre 2025",
    content: [
      "L'île Maurice se positionne comme porte d'entrée technologique vers l'Afrique. Classée 3e pays africain en développement des TIC par l'UIT en 2025 et Tier 1 en cybersécurité, l'île attire un flux croissant d'entrepreneurs tech. Ce que nous observons depuis notre cabinet, c'est que les profils francophones sont particulièrement bien placés pour en tirer parti.",
      "Maurice dispose d'un réseau fibre et 5G couvrant les principaux centres urbains et districts d'affaires. Dans notre pratique quotidienne, nous accompagnons des entrepreneurs tech qui confirment la fiabilité de cette infrastructure — un point essentiel pour les applications fintech, cloud et intelligence artificielle.",
      "Le Mauritius Africa FinTech Hub fédère la communauté tech locale à travers des événements réguliers. La Banque de Maurice a lancé son Innovation Hub (Innov8) pour encourager les projets fintech dans un cadre réglementaire adapté aux expérimentations. La FSC (Financial Services Commission) délivre des licences spécifiques aux services financiers numériques. L'écosystème compte désormais plus de 100 startups technologiques actives, principalement dans la fintech, la cybersécurité, l'e-commerce et le contenu numérique.",
      "En mai 2025, le gouvernement a lancé « A Blueprint for Mauritius: A Bridge to the Future », une stratégie de transformation digitale élaborée avec le PNUD. Elle repose sur quatre piliers : infrastructure de pointe, développement du capital humain, promotion de l'innovation, et construction d'un avenir numérique durable.",
      "Les entrepreneurs que nous accompagnons citent plusieurs facteurs différenciants : stabilité juridique avec un système légal hybride (droit français et common law britannique), bilinguisme français-anglais comme langues de travail, fiscalité à 15 % d'IS sans taxe sur les plus-values, accords commerciaux (CECPA avec l'Inde, AGOA avec les États-Unis), et qualité de vie (sécurité, climat, services de santé et d'éducation).",
      "Maurice reste un petit marché intérieur. L'intérêt n'est pas de vendre aux 1,3 million de Mauriciens, mais d'utiliser l'île comme base opérationnelle pour adresser le marché africain (1,4 milliard de personnes) et asiatique. En tant que praticiens sur le terrain, nous constatons que les entrepreneurs qui réussissent ici sont ceux qui ont pensé leur modèle à l'échelle régionale dès le départ. Le ProPass à 10 ans (seuil de 30 000 MUR/mois) facilite désormais considérablement cette installation. Notre cabinet accompagne les entrepreneurs tech dans leur structuration juridique et fiscale à Maurice.",
    ],
  },
  "gbc-maurice-nouvelles-obligations-2025": {
    title: "GBC à Maurice : les nouvelles obligations de substance de la Finance Act 2025",
    category: "Fiscalité",
    date: "Août 2025",
    content: [
      "Les Global Business Companies (GBC) constituent depuis des années l'un des piliers de l'attractivité de Maurice pour les investisseurs internationaux. La Finance Act 2025 renforce significativement les exigences de substance et de gouvernance. Depuis notre cabinet à Port-Louis, nous avons accompagné plusieurs clients dans leur mise en conformité — voici ce qu'il faut savoir concrètement.",
      "Désormais, un GBC doit remplir simultanément trois conditions cumulatives de substance économique. Premièrement, exercer ses activités génératrices de revenus à Maurice ou depuis Maurice : il ne suffit plus d'avoir une présence administrative. Deuxièmement, être géré et contrôlé depuis Maurice : les décisions stratégiques doivent être prises sur l'île — la simple tenue de réunions annuelles de conseil d'administration ne suffira pas si la gestion opérationnelle est réalisée ailleurs. Troisièmement, être administré par une Management Company agréée par la FSC.",
      "Tout changement de directeur au sein d'un GBC doit être notifié à la FSC dans un délai de 7 jours. En pratique, ce délai est très court et nous recommandons d'avoir un processus interne rodé pour ne pas être pris au dépourvu.",
      "L'Alternative Minimum Tax de 10 % sur les bénéfices comptables ajustés, introduite pour certains secteurs (hôtellerie, assurance, immobilier, télécoms), ne s'applique pas aux détenteurs de Global Business Licence. Le régime fiscal du GBL conserve son avantage compétitif. Le QDMTT (impôt minimum de 15 %) ne concerne que les multinationales avec un chiffre d'affaires consolidé supérieur à 750 millions d'euros — la grande majorité des GBC détenus par des investisseurs francophones restent largement sous ce seuil.",
      "Nos clients nous interrogent régulièrement sur l'impact réel de ces changements. Notre réponse est nuancée : ces exigences renforcées ne sont pas un frein, mais une protection. Un GBC avec une substance réelle est beaucoup moins vulnérable aux contestations fiscales dans d'autres juridictions — notamment en France, où l'administration est de plus en plus vigilante sur les structures offshore sans substance.",
      "Pour les détenteurs actuels de GBC, nous recommandons un audit de conformité couvrant trois points : vérifier que les activités core sont exercées depuis Maurice, documenter la gestion effective sur le territoire, et mettre en place un processus de notification des changements de directeurs. Pour les nouveaux projets, ces exigences doivent être intégrées dès la conception de la structure. Notre cabinet accompagne la création, la gestion et la mise en conformité des GBC à Maurice.",
    ],
  },
  "amt-impot-minimum-alternatif-maurice": {
    title: "Alternative Minimum Tax à Maurice : qui est concerné et comment s'adapter",
    category: "Fiscalité",
    date: "Juillet 2025",
    content: [
      "Le budget 2025-2026 introduit un Alternative Minimum Tax (AMT) de 10 % qui modifie le calcul fiscal de certaines entreprises à Maurice. Depuis notre cabinet, nous avons analysé en détail les implications pratiques de cette mesure pour nos clients.",
      "L'AMT s'applique lorsque l'impôt total payable par une entreprise est inférieur à 10 % de ses bénéfices comptables. Dans ce cas, l'entreprise doit payer 10 % de ses bénéfices comptables au lieu du montant normalement calculé. C'est un plancher fiscal qui garantit un niveau minimum de contribution.",
      "L'AMT cible spécifiquement cinq secteurs : hôtellerie, assurance, immobilier, télécommunications et intermédiation financière. Attention, cette mesure est souvent mal interprétée : elle ne touche pas toutes les entreprises, mais uniquement celles opérant dans ces secteurs spécifiques. Les détenteurs d'une Global Business Licence sont explicitement exclus du champ d'application de l'AMT. Cette exemption préserve l'attractivité du GBL comme véhicule d'investissement international.",
      "Prenons un exemple concret : une société hôtelière réalise 100 millions de roupies de bénéfices comptables mais ne paie que 8 millions d'impôts grâce à diverses déductions et incitations fiscales. Avec l'AMT, elle devra désormais payer au minimum 10 millions de roupies (10 % de 100 millions). Le surcoût est de 2 millions de roupies.",
      "Le gouvernement cherche à élargir l'assiette fiscale et à réduire le déficit budgétaire. Certaines grandes entreprises, notamment dans les secteurs bancaire et hôtelier, bénéficiaient de déductions qui réduisaient considérablement leur taux effectif d'imposition. L'AMT vient poser un plancher à cette optimisation.",
      "En tant que praticiens sur le terrain, nous recommandons aux investisseurs francophones opérant dans les secteurs concernés trois pistes d'adaptation : revoir la planification fiscale pour intégrer le seuil de 10 %, évaluer l'opportunité de restructurer certaines activités sous un GBL si la nature de l'activité le justifie, et optimiser les dépenses déductibles en amont du calcul des bénéfices comptables. Pour replacer les choses en perspective : l'AMT de 10 % reste inférieur au Pilier 2 de l'OCDE (15 %) et très largement inférieur à l'IS effectif en France. Maurice conserve un avantage compétitif net, même avec cet ajustement.",
    ],
  },
  "digital-nomad-premium-visa-maurice": {
    title: "Premium Visa à Maurice : cadre fiscal et pratique pour les travailleurs à distance",
    category: "Permis",
    date: "Novembre 2025",
    content: [
      "L'île Maurice est devenue l'une des destinations les plus prisées des travailleurs à distance dans l'océan Indien. Depuis notre implantation à Maurice, nous avons accompagné de nombreux professionnels francophones dans cette démarche — voici notre retour d'expérience.",
      "Le Premium Visa permet à un non-citoyen de séjourner à Maurice pendant un an, avec possibilité de renouvellement. Il cible trois profils : les touristes de longue durée, les retraités et les professionnels travaillant à distance pour des clients ou employeurs situés hors de Maurice. Contrairement à l'Occupation Permit, aucun salaire minimum local n'est requis — les revenus doivent simplement provenir de l'extérieur du pays.",
      "Maurice est classée 3e en Afrique pour le développement des TIC (ITU 2025), avec des réseaux fibre et 5G dans les principales zones urbaines. Les espaces de coworking se multiplient à Grand Baie, Ébène et Port-Louis. Le fuseau horaire GMT+4 permet de travailler confortablement avec l'Europe (2 à 3 heures de décalage) tout en restant joignable pour les États-Unis en fin de journée. Le bilinguisme français-anglais est un avantage décisif pour les francophones.",
      "Le Premium Visa ne confère pas automatiquement la résidence fiscale mauricienne. Cependant, si le séjour dépasse 183 jours par an, le titulaire peut devenir résident fiscal à Maurice et bénéficier du taux d'imposition de 15 % sur les revenus de source mauricienne. Pour les revenus de source étrangère, seuls les montants rapatriés à Maurice sont imposables — c'est le régime dit « remittance basis » qui offre une flexibilité considérable. Les revenus laissés à l'étranger ne sont pas taxés à Maurice, ce qui permet une optimisation légale significative.",
      "La demande se fait en ligne auprès du Passport and Immigration Office. Documents requis : passeport valide, preuve de revenus suffisants, assurance santé et justificatif d'hébergement. En pratique, le délai de traitement varie de 2 à 5 semaines selon notre expérience — nous conseillons de ne pas attendre la dernière minute.",
      "Le Premium Visa est l'outil idéal pour tester Maurice sans engagement définitif. Ce que nous observons depuis notre cabinet, c'est que beaucoup de digital nomads francophones démarrent avec un Premium Visa, puis transitionnent vers un ProPass (validité 10 ans, seuil de 30 000 MUR/mois) lorsqu'ils décident de s'ancrer durablement. Le coût de la vie, inférieur de 30 à 40 % à la France métropolitaine pour un confort équivalent, facilite cette transition. Notre cabinet accompagne les professionnels à distance dans leur installation à Maurice, de la demande de visa à la planification fiscale.",
    ],
  },
  "cecpa-inde-maurice-porte-entree-asie": {
    title: "Accord CECPA Inde-Maurice : utiliser Maurice comme porte d'entrée vers le marché indien",
    category: "Guide",
    date: "Février 2026",
    content: [
      "La mission de promotion commerciale de l'EDB en Inde, du 23 février au 3 mars 2026, rappelle l'importance stratégique du CECPA (Comprehensive Economic Cooperation and Partnership Agreement). Les entrepreneurs que nous accompagnons depuis Port-Louis commencent à exploiter concrètement cet accord — voici notre analyse terrain.",
      "Signé le 22 février 2021 et entré en vigueur le 1er avril 2021, le CECPA est le premier accord commercial de l'Inde avec un pays africain. Il établit un cadre préférentiel pour les échanges de biens, de services et les investissements bilatéraux.",
      "Le CECPA accorde à Maurice un accès préférentiel sur 615 lignes tarifaires vers le marché indien. Les concessions les plus intéressantes concernent les produits alimentaires (poissons congelés, biscuits, fruits frais, jus, eaux minérales, sucre de spécialité), les boissons (bière, rhum et autres boissons alcoolisées) et les biens manufacturés (savons, équipements médicaux). Les quotas annuels sont significatifs : 40 000 tonnes de sucre, 7,5 millions de pièces de vêtements, 1,5 million de litres de rhum et 2 millions de litres de bière.",
      "Pour un entrepreneur francophone, s'implanter à Maurice via un GBC ou une société locale permet d'exploiter directement ces avantages tarifaires. Plutôt que d'exporter depuis l'Europe avec des droits de douane standards, une structure mauricienne bénéficie de conditions préférentielles vers le plus grand marché émergent du monde. L'EDB a organisé une mission multi-sectorielle dans quatre villes indiennes : Mumbai, Ahmedabad, Bangalore et Chennai.",
      "Maurice ne se limite pas à l'Inde. L'île bénéficie également de l'AGOA (accès duty-free au marché américain sur environ 6 500 lignes tarifaires), de l'Interim EPA (accès préférentiel au marché européen) et du SADC FTA (libre-échange avec les pays d'Afrique australe).",
      "Le CECPA est un outil puissant sur le papier, mais son exploitation effective demande une connaissance fine des procédures douanières indiennes. Dans notre pratique, nous constatons que les entrepreneurs qui réussissent sont ceux qui ont structuré leur chaîne logistique en amont et qui disposent de partenaires locaux en Inde. Les quotas sont loin d'être saturés sur la plupart des lignes tarifaires, ce qui laisse une marge réelle pour les nouveaux entrants. Notre cabinet accompagne les entrepreneurs dans la structuration de leurs activités commerciales à Maurice pour tirer parti du CECPA.",
    ],
  },
  "croissance-maurice-banque-mondiale-2025-2026": {
    title: "Perspectives économiques de Maurice : décryptage des projections de la Banque mondiale",
    category: "Actualité",
    date: "Juin 2025",
    content: [
      "La Banque mondiale a publié ses projections de croissance pour Maurice dans son rapport Global Economic Prospects. Avec un taux attendu autour de 4 %, l'île se rapproche de son rythme de croisière. Depuis notre cabinet, nous analysons ce que ce chiffre signifie concrètement pour les investisseurs francophones.",
      "La Banque mondiale prévoit un ralentissement vers 4 % en 2025-2026, un taux proche du potentiel de long terme du pays. Après les années de rebond post-COVID affichant des taux supérieurs, ce retour à la normale est un signe de maturité économique — pas d'inquiétude. Pour comparaison, la France affiche environ 1 %, la zone euro 1,5 %. À 4 %, Maurice reste nettement plus dynamique que les économies occidentales.",
      "Les moteurs de la croissance sont multiples. Le tourisme a retrouvé et dépassé ses niveaux pré-pandémiques. Les services financiers continuent de croître, portés par les GBC et les fonds d'investissement. Le secteur numérique est en expansion rapide, porté par la stratégie « Blueprint for Mauritius ». L'immobilier reste soutenu, notamment dans les Smart Cities et les projets PDS.",
      "Maurice bénéficie d'indicateurs macroéconomiques rassurants : inflation maîtrisée, réserves de change confortables, taux de change relativement stable, système bancaire robuste et note de crédit investment grade. Le budget 2025-2026 prévoit 5,4 milliards de roupies pour les infrastructures portuaires, des projets Smart City en expansion et un programme de transformation digitale national.",
      "Il faut être prudent ici : la Banque mondiale identifie des défis réels. La dépendance au tourisme, le vieillissement de la population et la nécessité de diversification économique sont des points de vigilance. Le gouvernement y répond par les sept nouveaux schémas d'investissement et le soutien aux secteurs exportateurs, mais les résultats restent à démontrer.",
      "Dans notre pratique quotidienne à Port-Louis, nous constatons que Maurice n'est pas un marché spéculatif à forte croissance — c'est une économie mature et stable qui offre un rendement régulier dans un cadre fiscal optimisé. Un taux de croissance de 4 % combiné à un environnement fiscal à 15 % représente une équation que peu de juridictions peuvent proposer. C'est précisément ce que recherchent les investisseurs avertis que nous accompagnons.",
    ],
  },
  "taxe-touristique-maurice-impact-investisseurs": {
    title: "Taxe touristique de 3 EUR par nuit à Maurice : implications pour les investisseurs en hébergement",
    category: "Fiscalité",
    date: "Octobre 2025",
    content: [
      "Depuis octobre 2025, l'île Maurice applique une taxe touristique de 3 euros par nuitée pour tous les visiteurs. Les entrepreneurs que nous accompagnons dans le secteur de l'hébergement nous posent beaucoup de questions sur cette mesure. Voici notre analyse terrain.",
      "La Tourist Fee de 3 EUR par nuit s'applique à l'ensemble des hébergements touristiques à Maurice. Les établissements doivent s'enregistrer auprès de la MRA (Mauritius Revenue Authority) et collecter cette taxe pour le compte de l'État. L'enregistrement et la déclaration se font via la plateforme en ligne de la MRA.",
      "À 3 EUR par nuit, Maurice se situe dans la fourchette basse des destinations concurrentes : Bali applique 10 USD par visiteur (taxe unique), Barcelone jusqu'à 4 EUR par nuit, Amsterdam 7 % du prix de la chambre, et Dubaï entre 7 et 20 AED par nuit selon la catégorie. Cette modération tarifaire devrait limiter l'impact sur la fréquentation.",
      "La taxe est à la charge du visiteur, pas du propriétaire. Elle s'ajoute au prix de la chambre sans réduire la marge de l'investisseur. En revanche, elle crée une obligation administrative : les propriétaires de locations touristiques doivent s'enregistrer auprès de la MRA, collecter la taxe et la reverser selon le calendrier fixé. Dans notre pratique quotidienne, nous constatons que cette obligation d'enregistrement formalise un secteur qui fonctionnait parfois de manière informelle — un signal de professionnalisation du marché, positif à moyen terme pour les investisseurs sérieux.",
      "Pour les investisseurs qui acquièrent des biens dans des projets PDS ou Smart City avec une composante locative, la taxe touristique doit être intégrée dans les projections de revenus. Bien que la charge soit portée par le touriste, l'attractivité tarifaire relative de Maurice par rapport aux destinations concurrentes mérite d'être évaluée dans le business plan.",
      "Depuis notre implantation à Maurice, nous avons pu constater que cette taxe est une mesure raisonnable qui génère des recettes publiques sans pénaliser la compétitivité du secteur. Pour les investisseurs, c'est un élément à intégrer dans la gestion opérationnelle — pas un facteur de remise en cause de la rentabilité. Le véritable enjeu reste les droits d'enregistrement passant à 10 % en juillet 2026, un sujet autrement plus impactant. Notre cabinet intègre ces obligations réglementaires dans l'accompagnement global des investisseurs en hébergement touristique à Maurice.",
    ],
  },
  "csr-fund-maurice-responsabilite-entreprise": {
    title: "CSR à Maurice : les entreprises peuvent désormais gérer 50 % de leur fonds directement",
    category: "Fiscalité",
    date: "Juin 2025",
    content: [
      "Le budget 2025-2026 double la part du fonds CSR (Corporate Social Responsibility) que les entreprises peuvent gérer directement. Ce que nous observons depuis notre cabinet, c'est que cette évolution transforme une obligation légale en véritable outil stratégique pour les entrepreneurs qui s'implantent à Maurice.",
      "À Maurice, toute entreprise dont le chiffre d'affaires dépasse un certain seuil est tenue de consacrer 2 % de ses bénéfices comptables à des activités de responsabilité sociale. Ce mécanisme, unique dans la région, fait de la RSE une obligation légale — pas une démarche volontaire. C'est un point que nous expliquons systématiquement aux entrepreneurs francophones qui découvrent le cadre mauricien.",
      "Jusqu'au budget 2025-2026, les entreprises ne pouvaient gérer directement que 25 % de leur contribution CSR, les 75 % restants étant versés à un fonds gouvernemental. Désormais, 50 % peuvent être utilisés directement par l'entreprise pour financer des projets de son choix, dans le cadre des catégories approuvées : éducation, santé, protection de l'environnement, logement social, loisirs et sports, soutien aux ONG accréditées.",
      "Nos clients nous interrogent régulièrement sur l'intérêt concret du CSR. Notre réponse : en choisissant des projets alignés avec ses valeurs et son secteur d'activité, l'entreprise renforce son ancrage local, développe son réseau dans la communauté mauricienne et améliore son image auprès des partenaires locaux. Concrètement, sur le terrain mauricien, le CSR est un levier de légitimité pour une entreprise étrangère qui s'installe. La contribution CSR de 2 % est déductible des bénéfices imposables. Avec un taux d'IS de 15 %, le coût net effectif pour l'entreprise est de 1,7 % des bénéfices.",
      "Au-delà du CSR, les entreprises à Maurice doivent gérer la CSG (Contribution Sociale Généralisée) de 3 % à 6 % employeur selon le niveau de salaire, le NSF (National Savings Fund) de 2,5 % employeur sur la rémunération totale, et le Skills Development Levy de 1 % des salaires de base. Ces charges restent nettement inférieures à celles pratiquées en France (environ 45 % de charges patronales).",
      "En tant que praticiens sur le terrain, nous recommandons d'intégrer la stratégie CSR dès la phase de création de l'entreprise à Maurice. Le doublement de la part gérable directement offre une opportunité concrète de combiner obligation légale et stratégie d'entreprise. Les entrepreneurs qui s'investissent dans des projets CSR visibles localement bénéficient d'un retour d'image disproportionné par rapport au coût engagé. Notre cabinet intègre les obligations CSR dans la planification globale de nos clients.",
    ],
  },
  "mission-edb-afrique-sud-commerce-2026": {
    title: "Maurice renforce ses liens commerciaux avec l'Afrique du Sud : opportunités pour les investisseurs francophones",
    category: "Actualité",
    date: "Février 2026",
    content: [
      "L'Economic Development Board a conduit une mission de promotion commerciale en Afrique du Sud du 26 au 30 janvier 2026. Depuis notre cabinet à Port-Louis, nous suivons ces initiatives de près car elles créent des opportunités directes pour les entrepreneurs francophones installés à Maurice.",
      "La mission a porté sur la manufacture, l'immobilier et les services financiers. Des rencontres acheteurs-vendeurs et des forums d'affaires ont été organisés dans plusieurs villes sud-africaines. Ce type d'initiative de l'EDB est régulier et témoigne de la volonté de Maurice de diversifier ses partenariats commerciaux en Afrique australe.",
      "Pour les entrepreneurs francophones, l'intérêt dépasse le simple commerce bilatéral avec l'Afrique du Sud. Maurice est membre de la SADC (Southern African Development Community) et bénéficie du SADC Free Trade Agreement, offrant un accès préférentiel aux marchés de 16 pays d'Afrique australe. Combiné au CECPA avec l'Inde, à l'AGOA avec les États-Unis et à l'Interim EPA avec l'Europe, ce réseau fait de Maurice un hub commercial permettant d'adresser trois continents depuis une seule base.",
      "Les secteurs porteurs entre Maurice et l'Afrique du Sud incluent les services financiers (les banques et gestionnaires de fonds sud-africains utilisent déjà Maurice comme plateforme pour leurs investissements en Afrique), la manufacture (Maurice dispose de zones franches d'exportation) et l'immobilier (les projets Smart City et PDS attirent des investisseurs sud-africains).",
      "Les entrepreneurs francophones installés à Maurice bénéficient d'un positionnement unique : ils combinent la maîtrise du français (langue de nombreux pays d'Afrique de l'Ouest et centrale) avec un accès privilégié aux marchés anglophones d'Afrique australe via Maurice. Dans notre pratique, nous constatons que cette dualité linguistique et commerciale est un atout différenciant rare et précieux.",
      "Concrètement, sur le terrain mauricien, nous observons que les flux d'investissement entre Maurice et l'Afrique du Sud sont en croissance régulière, particulièrement dans les services financiers et le tourisme. Pour un entrepreneur francophone, s'installer à Maurice ne signifie pas se limiter au marché local de 1,3 million d'habitants — c'est se positionner à la croisée de l'Afrique, de l'Asie et du Moyen-Orient. Notre cabinet peut vous aider à identifier les secteurs porteurs et à structurer vos opérations commerciales entre Maurice et l'Afrique.",
    ],
  },
  "retraite-maurice-nouvelles-conditions-2025": {
    title: "Retraite à Maurice en 2025 : nouvelles conditions du Retirement Permit décryptées",
    category: "Permis",
    date: "Septembre 2025",
    content: [
      "Les conditions du Retirement Permit à Maurice ont été significativement revues en août 2025. Nos clients retraités nous interrogent régulièrement sur ces changements — voici notre décryptage, fondé sur notre expérience pratique des dossiers que nous traitons depuis Port-Louis.",
      "Le Retirement Permit passe de 10 ans à 5 ans, avec possibilité de renouvellement. Les titulaires doivent transférer au minimum 2 000 USD par mois (soit 24 000 USD par an) vers un compte bancaire mauricien. Un minimum de 180 jours par an doit être passé à Maurice. En pratique, ce seuil coïncide avec le critère de résidence fiscale, ce qui simplifie la planification.",
      "Le gouvernement souhaite que les détenteurs de Retirement Permit soient de véritables résidents. L'objectif est d'éliminer les permis de complaisance et de valoriser les retraités qui s'investissent réellement dans la vie locale. Depuis notre implantation à Maurice, nous avons pu constater que cette orientation est cohérente avec le renforcement général des exigences de substance.",
      "Pour un retraité français devenant résident fiscal à Maurice (plus de 183 jours par an), la convention de non-double imposition prévoit que les pensions privées sont imposées à Maurice au taux maximum de 15 %, tandis que les pensions de la fonction publique restent imposées en France. Les revenus immobiliers de biens situés en France restent imposés en France, et les revenus immobiliers de biens situés à Maurice sont imposés à 15 %. Attention, cette répartition est souvent mal interprétée : les anciens fonctionnaires ne bénéficient pas du taux mauricien sur leur pension principale.",
      "Avec l'obligation de transférer 2 000 USD par mois (environ 1 850 EUR), un retraité doit disposer d'une pension ou de revenus de cet ordre. Pour un cadre supérieur français à la retraite, ce montant est généralement compatible. Le coût de la vie à Maurice est inférieur de 30 à 40 % à la France métropolitaine pour un confort équivalent, ce qui laisse une marge appréciable. Les frais de dossier s'élèvent à 50 USD depuis décembre 2025.",
      "En tant que praticiens sur le terrain, nous recommandons aux candidats à la retraite à Maurice d'évaluer trois points avant de se lancer : la compatibilité de leurs revenus avec le transfert de 2 000 USD mensuels, la nature de leur pension (publique ou privée) pour anticiper l'impact fiscal réel, et leur capacité à respecter les 180 jours de présence annuelle. Malgré ces conditions plus strictes, Maurice reste une destination de retraite particulièrement attractive pour les francophones : climat, sécurité, communauté francophone, système de santé de qualité, et fiscalité avantageuse pour les pensions privées. Notre cabinet accompagne les retraités francophones dans leur projet d'installation à Maurice.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article non trouvé" };
  return {
    title: article.title,
    description: article.content[0],
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/ressources/blog" className="text-sm text-blue-400 hover:underline">&larr; Tous les articles</Link>
          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300">{article.category}</span>
            <span className="text-xs text-slate-500">{article.date}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{article.title}</h1>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">DL</div>
            <div>
              <p className="text-sm font-semibold text-white">{founder.name}</p>
              <p className="text-xs text-slate-400">{founder.title}</p>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </article>

      {/* Maillage interne — liens connexes */}
      {relatedLinks[article.category] && (
        <section className="bg-white border-t border-slate-100 py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Pour aller plus loin</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {relatedLinks[article.category].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4 text-sm font-semibold text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            Sources : {officialSources.slice(0, 4).map((s, i) => (
              <span key={s.url}>
                {i > 0 && " · "}
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{s.name}</a>
              </span>
            ))}
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Cet article est fourni à titre informatif. Contactez nos experts pour une analyse personnalisée de votre situation.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Besoin d&apos;un accompagnement personnalisé ?</h2>
          <p className="mt-3 text-slate-400">Étude de faisabilité gratuite par {founder.name}.</p>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Nous contacter</Button></Link></div>
        </div>
      </section>
    </>
  );
}
