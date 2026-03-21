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
      "La JCI (Junior Chamber International) Maurice est très active auprès des jeunes entrepreneurs (18-40 ans). AmCham Mauritius (American Chamber of Commerce) connecte les entreprises au marché américain. La Chinese Business Chamber facilite les échanges avec la Chine, particulièrement depuis le FTA Chine-Maurice de 2019.",
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
