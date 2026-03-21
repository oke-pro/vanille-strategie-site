// ============================================================
// Site-wide constants & content data
// ============================================================

export const siteConfig = {
  name: "Vanille Stratégie",
  tagline: "Votre nouvelle vie à Maurice commence ici.",
  description:
    "Depuis 2012, le groupe Vanille Stratégie & BD Star accompagne entrepreneurs, familles et retraités dans leur implantation à l'Île Maurice. Expert-Comptable diplômé, fiscaliste international, comptabilité temps réel.",
  url: "https://vanillestrategie.fr",
  phone: "+230 59 43 74 83",
  whatsapp: "+23059437483",
  email: "dl@vanillestrategie.fr",
  addresses: {
    grandBaie: {
      label: "Vanille Stratégie — Conseil & Implantation",
      line1: "Sottise Road",
      city: "Grand Baie",
      country: "Maurice",
    },
    ebene: {
      label: "BD Star Management Services — Comptabilité & Services",
      line1: "Suites 1210/1211, 12th Floor, The Core",
      line2: "62 ICT Avenue, Cybercity",
      city: "Ebene 72201",
      country: "Maurice",
    },
  },
  social: {
    facebook:
      "https://www.facebook.com/p/Vanille-Strategie-Expertise-Comptable-100067023412463/",
    twitter: "https://x.com/mauriceisland",
    linkedin: "https://www.linkedin.com/in/didier-laroussinie-bab4765b/",
  },
} as const;

// ============================================================
// Didier Laroussinie — Authority figure
// ============================================================

export const founder = {
  name: "Didier Laroussinie",
  title: "Expert-Comptable — Fiscaliste",
  role: "CEO — Groupe Vanille Stratégie",
  experience: "40+",
  basedSince: "2015",
  specialties: [
    "Tax Planning",
    "Transfer Pricing",
    "Fusions-Acquisitions & LBO",
    "Global Mobility",
    "Consolidation IFRS",
    "Convention fiscale FR-MU",
  ],
  background: [
    "Grands cabinets (Deloitte)",
    "Fondateur de cabinets d'expertise comptable",
    "Direction financière de groupes (prêt-à-porter, immobilier coté, courtage, formation)",
    "Opérations de LBO",
    "Management d'équipes de 60 à 200 personnes",
    "Consolidation IFRS pour sociétés cotées",
    "Développement d'activités en Afrique francophone",
  ],
  bio: "Installé à l'Île Maurice depuis 2015, Didier accompagne entrepreneurs, investisseurs et groupes internationaux dans leurs projets de structuration et d'implantation. Son expertise repose sur plus de 40 années d'expérience en fiscalité internationale, fusions-acquisitions, restructurations et direction financière — acquise au sein de grands cabinets (Deloitte), en entrepreneuriat et en management opérationnel de groupes.",
  credentials: [
    { label: "Deloitte", description: "Parcours en Big Four" },
    { label: "MIPA", description: "BD Star inscrit au Mauritius Institute of Professional Accountants" },
    { label: "40+ ans", description: "d'expérience en fiscalité internationale" },
    { label: "LBO & M&A", description: "Opérations de haut niveau pilotées" },
  ],
} as const;

// ============================================================
// Key stats — Trust badges
// ============================================================

export const trustStats = [
  { value: "14", suffix: "ans", label: "d'expérience à Maurice", detail: "Depuis 2012" },
  { value: "40", suffix: "+", label: "ans d'expertise comptable", detail: "Didier Laroussinie, DEC" },
  { value: "15", suffix: "%", label: "IS maximum", detail: "0% dividendes, 0% plus-values" },
  { value: "37", suffix: "", label: "traités fiscaux", detail: "Non-double imposition" },
] as const;

// ============================================================
// Services — Grouped by entity
// ============================================================

export const serviceGroups = [
  {
    entity: "Vanille Stratégie",
    subtitle: "Conseil & Implantation",
    services: [
      {
        slug: "creation-societe",
        title: "Création de société",
        summary: "Domestic Company, GBC ou Authorised Company — nous trouvons la structure optimale et gérons tout, de la rédaction des statuts à l'enregistrement.",
        icon: "building",
      },
      {
        slug: "permis-residence",
        title: "Permis de résidence",
        summary: "Investor, Self-Employed, Professional, Retraité ou Premium Visa — 30 à 50 dossiers déposés chaque année auprès de l'EDB.",
        icon: "passport",
      },
      {
        slug: "immobilier",
        title: "Immobilier & Patrimoine",
        summary: "Investissement locatif, acquisition IRS/PDS/Smart City, conseil patrimonial audité et validé.",
        icon: "home",
      },
      {
        slug: "achat-vente-entreprise",
        title: "Achat / Vente d'entreprise",
        summary: "Audit financier, due diligence, rédaction de contrats de cession et pactes d'actionnaires — supervisés par un spécialiste M&A.",
        icon: "handshake",
      },
    ],
  },
  {
    entity: "BD Star Management Services",
    subtitle: "Comptabilité, RH & Conformité",
    services: [
      {
        slug: "comptabilite-fiscalite",
        title: "Comptabilité & Fiscalité",
        summary: "Tenue comptable en normes françaises ET IFRS, déclarations MRA, bilan annuel, conseil fiscal permanent.",
        icon: "calculator",
      },
      {
        slug: "rh-paie",
        title: "RH & Paie",
        summary: "Recrutement, contrats de travail, bulletins de paie, conformité Workers' Rights Act, gestion des charges CSG/PAYE.",
        icon: "users",
      },
    ],
  },
] as const;

// ============================================================
// Parcours — Sales funnel entry points
// ============================================================

export const parcours = [
  {
    slug: "entrepreneur",
    title: "Entrepreneur",
    subtitle: "Créer ou délocaliser ma société",
    description: "Vous voulez vous implanter à Maurice pour développer votre activité ? De la structure juridique au premier bilan.",
    icon: "rocket",
    color: "blue",
  },
  {
    slug: "digital-nomad",
    title: "Digital Nomad",
    subtitle: "Piloter mon business depuis Maurice",
    description: "E-commerçant, freelance, infopreneur — Maurice offre la fiscalité de Dubaï sans les risques.",
    icon: "laptop",
    color: "teal",
  },
  {
    slug: "retraite",
    title: "Retraité",
    subtitle: "Profiter de ma retraite au soleil",
    description: "N°1 qualité de vie en Afrique (Mercer). 0% droits de succession. 2 000 $/mois de transfert.",
    icon: "palmtree",
    color: "amber",
  },
  {
    slug: "entreprise",
    title: "Entreprise",
    subtitle: "Implanter une filiale à Maurice",
    description: "Comme l'École Centrale de Nantes, implantez votre filiale avec recrutement, compta et bureaux clé en main.",
    icon: "building2",
    color: "purple",
  },
] as const;

// ============================================================
// Testimonials
// ============================================================

export const testimonials = [
  {
    name: "Frédéric Meslin",
    role: "Head of Centrale Nantes in Mauritius",
    company: "École Centrale de Nantes",
    url: "https://www.ec-nantes.fr",
    quote:
      "L'écoute, la qualité de service et le professionnalisme de Vanille Stratégie ont permis d'aboutir rapidement dans notre projet et de déployer ainsi nos activités à Maurice.",
    type: "entreprise" as const,
  },
  {
    name: "Laetitia Girard",
    role: "Directrice Générale",
    company: "Mahoe.jobs",
    url: "https://www.mahoe.jobs",
    quote:
      "Un vrai accompagnement de tous les jours, un gain de temps qui nous a permis d'être opérationnels très rapidement.",
    type: "entrepreneur" as const,
  },
  {
    name: "Sylvie et Hervé Frouin",
    role: "Permis retraité",
    company: "",
    url: "",
    quote:
      "Je recommande à toutes et tous Vanille Stratégie comme l'entreprise incontournable pour les Français désireux de s'installer à Maurice.",
    type: "retraite" as const,
  },
] as const;

// ============================================================
// Mauritius advantages — from EDB + existing content
// ============================================================

export const mauritiusAdvantages = [
  {
    stat: "15%",
    label: "Impôt sur les sociétés",
    detail: "Taux unique flat — pas de tranches",
  },
  {
    stat: "0%",
    label: "Impôt sur les dividendes",
    detail: "Aucune retenue à la source",
  },
  {
    stat: "0%",
    label: "Impôt sur les plus-values",
    detail: "Cession de titres et parts sociales",
  },
  {
    stat: "0%",
    label: "Droits de succession",
    detail: "Ni ISF, ni taxe foncière, ni taxe d'habitation",
  },
  {
    stat: "1er",
    label: "Qualité de vie en Afrique",
    detail: "Classement Mercer — devant l'Afrique du Sud",
  },
  {
    stat: "37",
    label: "Traités de non-double imposition",
    detail: "Dont convention France-Maurice (1980)",
  },
  {
    stat: "3 jours",
    label: "Pour créer votre société",
    detail: "100% propriété étrangère autorisée",
  },
  {
    stat: "GMT+4",
    label: "Fuseau horaire idéal",
    detail: "2-3h de décalage avec Paris",
  },
] as const;

// ============================================================
// Company types — for the interactive quiz
// ============================================================

export const companyTypes = [
  {
    type: "Domestic Company",
    shortName: "DC",
    taxRate: "15%",
    taxResident: true,
    treatyAccess: true,
    localActivity: true,
    idealFor: "Business local, e-commerce, services — l'équivalent d'une SARL",
    highlights: [
      "100% propriété étrangère autorisée",
      "Pas de capital minimum",
      "Création en 3 jours ouvrés",
      "Pas de licence FSC nécessaire",
    ],
  },
  {
    type: "Global Business Company",
    shortName: "GBC",
    taxRate: "3-3,4% effectif",
    taxResident: true,
    treatyAccess: true,
    localActivity: true,
    idealFor: "Holding, trading international, services financiers",
    highlights: [
      "Partial Exemption 80% (taux effectif ~3%)",
      "Accès aux 37 traités de non-double imposition",
      "Min. 2 directeurs résidents MU",
      "Licence FSC obligatoire (via notre partenaire agréé)",
    ],
  },
  {
    type: "Authorised Company",
    shortName: "AC",
    taxRate: "0%",
    taxResident: false,
    treatyAccess: false,
    localActivity: false,
    idealFor: "IP holding, investissement passif, structure offshore",
    highlights: [
      "Non-résident fiscal = 0% IS sur revenus étrangers",
      "Pas d'activité à Maurice autorisée",
      "Pas d'accès aux traités fiscaux",
      "Registered Agent FSC obligatoire",
    ],
  },
] as const;

// ============================================================
// Permits — Updated post Finance Act 2025
// ============================================================

export const permits = [
  {
    type: "OP Investor",
    target: "Entrepreneur",
    investment: "50 000 $ (Option 1) ou 100 000 $ (Option 2)",
    turnover: "1,5M MUR an 1 → cumulatif 20M MUR à 5 ans (Option 1)",
    duration: "10 ans",
    renewal: "Mid-term review Y5 + Y10 (NOUVEAU 2025)",
    icon: "briefcase",
  },
  {
    type: "OP Self-Employed",
    target: "Freelance / Indépendant",
    investment: "50 000 $ sur compte société MU",
    turnover: "6M MUR cumulés sur 5 ans + 3 lettres d'intention",
    duration: "10 ans",
    renewal: "Sous conditions CA",
    icon: "laptop",
  },
  {
    type: "OP Professional — ProPass",
    target: "Salarié",
    investment: "N/A",
    turnover: "Salaire min. 30 000 MUR/mois",
    duration: "10 ans",
    renewal: "—",
    icon: "badge",
  },
  {
    type: "OP Professional — Expert Pass",
    target: "Cadre dirigeant / Consultant",
    investment: "N/A",
    turnover: "Salaire min. 250 000 MUR/mois",
    duration: "10 ans",
    renewal: "NOUVEAU 2025",
    icon: "award",
  },
  {
    type: "OP Retired",
    target: "Retraité 50+",
    investment: "N/A",
    turnover: "2 000 $/mois (ou 24 000 $/an)",
    duration: "10 ans",
    renewal: "180 jours/an de présence requis (NOUVEAU 2025)",
    icon: "palmtree",
  },
  {
    type: "Premium Visa",
    target: "Digital Nomad / Long séjour",
    investment: "Aucun",
    turnover: "Revenu min. 1 500 $/mois (étranger)",
    duration: "1 an renouvelable",
    renewal: "Gratuit, 48h de traitement",
    icon: "plane",
  },
] as const;

// ============================================================
// Official sources — Authority links
// ============================================================

export const officialSources = [
  { name: "EDB Mauritius", url: "https://edbmauritius.org", description: "Economic Development Board" },
  { name: "FSC Mauritius", url: "https://www.fscmauritius.org", description: "Financial Services Commission" },
  { name: "MRA", url: "https://www.mra.mu", description: "Mauritius Revenue Authority" },
  { name: "CBRD", url: "https://companies.govmu.org", description: "Companies & Business Registration" },
  { name: "MIPA", url: "https://www.mipa.mu", description: "Mauritius Institute of Professional Accountants" },
  { name: "Bank of Mauritius", url: "https://www.bom.mu", description: "Banque centrale" },
  { name: "Residency Portal", url: "https://residency.mu", description: "Portail officiel résidence" },
  { name: "Convention FR-MU", url: "https://www.impots.gouv.fr/sites/default/files/media/10_conventions/ile_maurice/ile-maurice_convention-avec-l-ile-maurice_fd_1920.pdf", description: "Texte consolidé" },
] as const;

// ============================================================
// Funnel steps — The subtle sales tunnel
// ============================================================

export const funnelSteps = [
  {
    step: 1,
    label: "Analyse",
    title: "Étude de faisabilité gratuite",
    description: "Bénéficiez d'une expertise gratuite sur votre projet et des recommandations juridiques et fiscales de nos conseillers.",
  },
  {
    step: 2,
    label: "Évaluation",
    title: "Proposition détaillée",
    description: "Recevez notre analyse écrite de votre situation et le devis précis menant à la réussite de votre projet.",
  },
  {
    step: 3,
    label: "Accompagnement",
    title: "Mise en œuvre clé en main",
    description: "Profitez de notre accompagnement personnalisé à chaque phase de votre installation ou de votre investissement.",
  },
  {
    step: 4,
    label: "Pilotage",
    title: "Suivi temps réel avec OKE",
    description: "Comptabilité, banque, paie — tout est intégré dans votre dashboard. Votre business en autopilote.",
  },
] as const;
