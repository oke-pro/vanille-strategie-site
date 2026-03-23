// ============================================================
// Department configuration — Vanille Stratégie
// Each department = a brand entity within the group
// ============================================================

export interface DepartmentService {
  title: string;
  description: string;
  href: string;
  iconName: string;
}

export interface DepartmentColors {
  /** Tailwind gradient for hero overlays — e.g. "from-blue-600 to-indigo-600" */
  gradient: string;
  /** Light background — e.g. "bg-blue-50" */
  lightBg: string;
  /** Light-themed text — e.g. "text-blue-600" */
  lightText: string;
  /** Dark background — e.g. "bg-blue-600" */
  darkBg: string;
  /** Button background — e.g. "bg-blue-600 hover:bg-blue-700" */
  buttonBg: string;
  /** Badge background — e.g. "bg-blue-500/10" */
  badgeBg: string;
  /** Badge text — e.g. "text-blue-300" */
  badgeText: string;
  /** Badge border — e.g. "border-blue-400/30" */
  badgeBorder: string;
}

export interface Department {
  slug: string;
  brand: string;
  tagline: string;
  description: string;
  tone: string;
  colors: DepartmentColors;
  iconName: string;
  heroImage: string;
  services: DepartmentService[];
}

// ============================================================
// 1. Vanille Consulting
// ============================================================

const consulting: Department = {
  slug: "consulting",
  brand: "Vanille Consulting",
  tagline: "Structurez votre avenir à Maurice",
  description:
    "Création de sociétés, conseil fiscal, structuration juridique et comptabilité à Maurice. Vanille Consulting vous accompagne à chaque étape de votre implantation avec un groupe intégré d'experts.",
  tone: "expert, pédagogique, rassurant",
  colors: {
    gradient: "from-blue-600 to-indigo-600",
    lightBg: "bg-blue-50",
    lightText: "text-blue-600",
    darkBg: "bg-blue-600",
    buttonBg: "bg-blue-600 hover:bg-blue-700",
    badgeBg: "bg-blue-500/10",
    badgeText: "text-blue-300",
    badgeBorder: "border-blue-400/30",
  },
  iconName: "Briefcase",
  heroImage: "/images/departments/consulting-hero.jpg",
  services: [
    {
      title: "Création de sociétés",
      description:
        "Domestic Company, GBC ou Authorised Company — nous déterminons la structure optimale et gérons l'intégralité des formalités.",
      href: "/services/creation-societe",
      iconName: "FileText",
    },
    {
      title: "Conseil fiscal international",
      description:
        "Optimisation fiscale conforme, transfer pricing, conventions de non-double imposition : une stratégie sur mesure pour chaque profil.",
      href: "/services/conseil-fiscal",
      iconName: "ShieldCheck",
    },
    {
      title: "Structuration juridique",
      description:
        "Holdings, trusts, joint-ventures — nous architecturons des structures solides pour protéger et développer votre patrimoine professionnel.",
      href: "/services/structuration",
      iconName: "Building2",
    },
    {
      title: "Comptabilité & Audit",
      description:
        "Tenue comptable normes IFRS, reporting en temps réel via OKE, audit annuel et liasses fiscales — tout est intégré.",
      href: "/services/comptabilite",
      iconName: "Calculator",
    },
    {
      title: "Secrétariat juridique",
      description:
        "Assemblées générales, PV, registres légaux, dépôts au Registrar — la conformité corporate sans effort.",
      href: "/services/secretariat-juridique",
      iconName: "Scale",
    },
    {
      title: "Licences & Autorisations",
      description:
        "FSC, EDB, BOI — nous pilotons l'obtention de vos licences réglementaires et assurons le suivi des renouvellements.",
      href: "/services/licences",
      iconName: "BadgeCheck",
    },
  ],
};

// ============================================================
// 2. Vanille Invest
// ============================================================

const invest: Department = {
  slug: "invest",
  brand: "Vanille Invest",
  tagline: "Investissez intelligemment, en toute confiance",
  description:
    "Investissement immobilier IRS, PDS, RES et Smart City à Maurice. Vanille Invest combine expertise patrimoniale et connaissance terrain pour des placements sécurisés et rentables.",
  tone: "premium, discret, stratégique",
  colors: {
    gradient: "from-amber-500 to-yellow-600",
    lightBg: "bg-amber-50",
    lightText: "text-amber-600",
    darkBg: "bg-amber-600",
    buttonBg: "bg-amber-600 hover:bg-amber-700",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-300",
    badgeBorder: "border-amber-400/30",
  },
  iconName: "TrendingUp",
  heroImage: "/images/departments/invest-hero.jpg",
  services: [
    {
      title: "Immobilier IRS & PDS",
      description:
        "Accédez à la propriété à Maurice via les programmes Integrated Resort Scheme et Property Development Scheme — avec un accompagnement de bout en bout.",
      href: "/services/immobilier-irs-pds",
      iconName: "Home",
    },
    {
      title: "Immobilier RES & Smart City",
      description:
        "Investissements accessibles via Real Estate Scheme et projets Smart City : sélection, due diligence, négociation et closing.",
      href: "/services/immobilier-res-smart-city",
      iconName: "Building",
    },
    {
      title: "Gestion de patrimoine",
      description:
        "Stratégie patrimoniale globale intégrant immobilier, structures juridiques et optimisation fiscale — une vision 360° de votre patrimoine.",
      href: "/services/gestion-patrimoine",
      iconName: "PieChart",
    },
    {
      title: "Conseil en investissement",
      description:
        "Analyse de marché, étude de rentabilité, due diligence financière — des recommandations documentées pour des décisions éclairées.",
      href: "/services/conseil-investissement",
      iconName: "BarChart3",
    },
    {
      title: "Financement & Montage",
      description:
        "Structuration du financement, relations bancaires locales et internationales, montage d'opérations immobilières complexes.",
      href: "/services/financement",
      iconName: "Wallet",
    },
    {
      title: "Gestion locative",
      description:
        "Mise en location, gestion des baux, suivi des rendements et reporting régulier — votre investissement travaille pour vous.",
      href: "/services/gestion-locative",
      iconName: "Key",
    },
  ],
};

// ============================================================
// 3. Vanille Mobility
// ============================================================

const mobility: Department = {
  slug: "mobility",
  brand: "Vanille Mobility",
  tagline: "Votre nouvelle vie commence ici",
  description:
    "Permis de résidence, expatriation et installation à Maurice. Vanille Mobility vous accompagne dans chaque aspect de votre mobilité internationale avec humanité et efficacité.",
  tone: "humain, chaleureux, rassurant",
  colors: {
    gradient: "from-teal-500 to-cyan-600",
    lightBg: "bg-teal-50",
    lightText: "text-teal-600",
    darkBg: "bg-teal-600",
    buttonBg: "bg-teal-600 hover:bg-teal-700",
    badgeBg: "bg-teal-500/10",
    badgeText: "text-teal-300",
    badgeBorder: "border-teal-400/30",
  },
  iconName: "Globe",
  heroImage: "/images/departments/mobility-hero.jpg",
  services: [
    {
      title: "Permis de résidence",
      description:
        "Occupation Permit, Premium Visa, Retired Non-Citizen — nous identifions le permis adapté et pilotons le dossier jusqu'à l'approbation.",
      href: "/services/permis-residence",
      iconName: "IdCard",
    },
    {
      title: "Expatriation & Fiscalité",
      description:
        "Bilan fiscal pré-départ, domiciliation, sortie du régime fiscal d'origine — une transition maîtrisée et conforme.",
      href: "/services/expatriation",
      iconName: "Plane",
    },
    {
      title: "Installation à Maurice",
      description:
        "Logement, scolarité, banque, assurance, permis de conduire — un accompagnement concret pour une installation sereine.",
      href: "/services/installation",
      iconName: "MapPin",
    },
    {
      title: "Accompagnement familles",
      description:
        "Conjoints, enfants, écoles internationales, réseau social — nous facilitons l'intégration de toute la famille.",
      href: "/services/accompagnement-familles",
      iconName: "Users",
    },
    {
      title: "Retraite à Maurice",
      description:
        "Retired Non-Citizen Permit, transfert de pension, fiscalité des retraités — vivre sa retraite au soleil en toute légalité.",
      href: "/services/retraite",
      iconName: "Sun",
    },
    {
      title: "Digital Nomads & Premium Visa",
      description:
        "Premium Visa longue durée pour les travailleurs à distance — éligibilité, dossier et renouvellement simplifiés.",
      href: "/services/premium-visa",
      iconName: "Laptop",
    },
  ],
};

// ============================================================
// 4. Vanille Managed Services
// ============================================================

const managedServices: Department = {
  slug: "managed-services",
  brand: "Vanille Managed Services",
  tagline: "Externalisez sans compromis",
  description:
    "Externalisation comptable, support IT, RH déléguées et back-office depuis Maurice. Vanille Managed Services offre des prestations BPO de qualité, opérées exclusivement depuis l'Île Maurice.",
  tone: "direct, efficace, moderne",
  colors: {
    gradient: "from-purple-600 to-violet-600",
    lightBg: "bg-purple-50",
    lightText: "text-purple-600",
    darkBg: "bg-purple-600",
    buttonBg: "bg-purple-600 hover:bg-purple-700",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-300",
    badgeBorder: "border-purple-400/30",
  },
  iconName: "Settings",
  heroImage: "/images/departments/managed-services-hero.jpg",
  services: [
    {
      title: "Externalisation comptable",
      description:
        "Tenue comptable complète, saisie, rapprochements, reporting mensuel — opéré depuis Maurice par des comptables qualifiés avec OKE.",
      href: "/services/externalisation-comptable",
      iconName: "Calculator",
    },
    {
      title: "Support IT & Infogérance",
      description:
        "Helpdesk, administration systèmes, maintenance applicative — une équipe IT dédiée à Maurice, disponible sur vos fuseaux horaires.",
      href: "/services/support-it",
      iconName: "Monitor",
    },
    {
      title: "RH déléguées",
      description:
        "Paie, gestion administrative du personnel, recrutement local et conformité droit du travail mauricien — vos RH en toute sérénité.",
      href: "/services/rh-deleguees",
      iconName: "UserCog",
    },
    {
      title: "Back-office & Administration",
      description:
        "Traitement documentaire, data entry, facturation, relances — un back-office structuré et fiable depuis Maurice.",
      href: "/services/back-office",
      iconName: "FolderOpen",
    },
    {
      title: "Gestion de paie internationale",
      description:
        "Multi-pays, multi-devises — nous gérons la paie de vos équipes à Maurice et accompagnons vos obligations déclaratives.",
      href: "/services/gestion-paie",
      iconName: "Receipt",
    },
    {
      title: "Conformité & Reporting",
      description:
        "KYC/AML, reporting réglementaire, audits internes — une conformité sans faille opérée depuis notre bureau à Maurice.",
      href: "/services/conformite-reporting",
      iconName: "ClipboardCheck",
    },
  ],
};

// ============================================================
// Exports
// ============================================================

export const departments: Department[] = [
  consulting,
  invest,
  mobility,
  managedServices,
];

export const departmentBySlug: Record<string, Department> = Object.fromEntries(
  departments.map((d) => [d.slug, d])
);

export function getDepartment(slug: string): Department | undefined {
  return departmentBySlug[slug];
}
