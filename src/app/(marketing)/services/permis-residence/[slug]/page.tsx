import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { founder } from "@/data/site";
import {
  CheckCircle2,
  ArrowRight,
  FileText,
  Clock,
  Users,
  AlertTriangle,
  HelpCircle,
  Home,
  CreditCard,
} from "lucide-react";
import { ChevronRight } from "lucide-react";

// Define permit types
type PermitSlug =
  | "occupation-permit-investor"
  | "occupation-permit-self-employed"
  | "professional-pass"
  | "expert-pass"
  | "permis-retraite"
  | "premium-visa";

const permitData: Record<PermitSlug, {
  title: string;
  heroTitle: string;
  description: string;
  target: string;
  investment: string;
  minRevenue: string;
  duration: string;
  renewal: string;
  eligibility: string[];
  documents: {
    personal: string[];
    professional: string[];
  };
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  advantages: string[];
  faq: { q: string; a: string }[];
}> = {
  "occupation-permit-investor": {
    title: "Occupation Permit - Investor",
    heroTitle: "Pour les investisseurs",
    description: "Devenez résident mauricien en investissant minimum 50 000 USD dans une entreprise à Maurice. Durée : 10 ans renouvelable, puis résidence permanente possible.",
    target: "Entrepreneur, Investisseur",
    investment: "USD 50 000 minimum (USD 100 000 option 2)",
    minRevenue: "MUR 4 000 000/an cumulatif",
    duration: "10 ans",
    renewal: "Renouvelable indéfiniment sous conditions",
    eligibility: [
      "Investissement d'au moins USD 50 000 sur le compte de votre société à Maurice",
      "Création d'une Domestic Company ou recours à une société existante",
      "Démonstration d'une activité économique réelle (chiffre d'affaires, emplois créés)",
      "Assurance santé internationale couvrant Maurice",
      "Casier judiciaire vierge",
      "Pas de limite d'âge stricte",
    ],
    documents: {
      personal: [
        "Passeport validé 18+ mois",
        "Photos d'identité biométriques",
        "Casier judiciaire apostillé",
        "Certificat médical",
        "Assurance santé internationale",
        "Contrat de location ou acte d'achat immobilier",
      ],
      professional: [
        "Business plan détaillé (2-3 ans)",
        "Preuve d'investissement (USD 50K+)",
        "Relevés bancaires 6 derniers mois",
        "CV et diplômes certifiés",
        "Références professionnelles",
        "Statuts et immatriculation de la société",
      ],
    },
    process: [
      {
        step: 1,
        title: "Analyse de faisabilité",
        description: "Nous étudions votre profil, vos finances et votre projet entrepreneurial pour valider l'éligibilité à l'OP Investor et identifier les optimisations fiscales possibles.",
      },
      {
        step: 2,
        title: "Constitution du dossier",
        description: "Rédaction du business plan détaillé, collecte des justificatifs financiers, documents d'identité et mise en conformité de l'ensemble des pièces.",
      },
      {
        step: 3,
        title: "Dépôt auprès de l'EDB",
        description: "Votre dossier est soumis via la plateforme en ligne de l'EDB. Nous gérons l'ensemble du suivi et répondons à toute demande de clarification.",
      },
      {
        step: 4,
        title: "Traitement et approbation",
        description: "Délai moyen de 15-20 jours ouvrés pour un dossier complet. Vous recevez une Letter of Approval vous permettant d'entrer à Maurice.",
      },
      {
        step: 5,
        title: "Formalités post-obtention",
        description: "Enregistrement biométrique, obtention de la carte de résidence physique, enregistrement fiscal auprès de la MRA. Nous vous accompagnons physiquement.",
      },
    ],
    advantages: [
      "Droit de travailler et de vivre à Maurice",
      "Conjoint et enfants inclus comme dépendants",
      "Accès au marché mauricien pour votre activité",
      "Bénéfice de la convention fiscale France-Maurice",
      "Progression vers la Résidence Permanente après 3 ans",
      "Mobilité professionnelle et entrepreneuriale",
    ],
    faq: [
      {
        q: "Puis-je créer ma propre société avec cet OP ?",
        a: "Oui, c'est même l'objectif principal. Vous créez une Domestic Company (équivalent d'une SARL) à 100% étrangère. Nous gérons l'ensemble des démarches administratives auprès du CBRD (Companies & Business Registration), délai 3 jours environ.",
      },
      {
        q: "Combien dois-je gagner pour être approuvé ?",
        a: "Il n'y a pas de salaire minimum. Votre OP Investor repose sur l'investissement (USD 50K) et la démonstration d'une activité profitable. Le chiffre d'affaires requis est MUR 4M sur la durée du permis (soit env. MUR 400k/an). Notre business plan doit convaincre l'EDB que votre projet est viable.",
      },
      {
        q: "Que se passe-t-il lors de la mid-term review après 5 ans ?",
        a: "L'EDB contrôle le respect de vos engagements : CA réalisé vs. business plan, emplois créés, investissement maintenu, présence 180 jours/an. Nous préparons un rapport de conformité détaillé et un business plan révisé pour les 5 années suivantes.",
      },
      {
        q: "Puis-je accéder au Permanent Residence ?",
        a: "Oui, après 3 années consécutives d'OP Investor avec une contribution fiscale substantielle et un chiffre d'affaires conforme au business plan. C'est une progression naturelle. Nous préparons votre dossier de PRP avec vous.",
      },
      {
        q: "Mon famille peut-elle m'accompagner ?",
        a: "Absolument. Votre conjoint et vos enfants de moins de 24 ans obtiendront un permis de résidence lié au vôtre. Les dossiers des dépendants sont traités en ~10 jours après l'approbation du principal.",
      },
    ],
  },

  "occupation-permit-self-employed": {
    title: "Occupation Permit - Self-Employed",
    heroTitle: "Pour les freelances et indépendants",
    description: "Exercez votre activité en tant que freelance ou consultant à Maurice. Investissement de 50 000 USD, durée 10 ans renouvelable, idéal pour consultants, développeurs, créatifs.",
    target: "Freelance, Consultant, Travailleur Indépendant",
    investment: "USD 50 000 sur compte société",
    minRevenue: "MUR 800 000/an cumulatif",
    duration: "10 ans",
    renewal: "Renouvelable sous conditions de chiffre d'affaires",
    eligibility: [
      "Dépôt de USD 50 000 sur compte bancaire mauricien",
      "Activité professionnelle indépendante vérifiable",
      "Lettres d'intention de clients (3 minimum) ou contrats existants",
      "Aucune limite de nationalité ou d'âge",
      "Assurance santé internationale obligatoire",
      "Casier judiciaire vierge",
    ],
    documents: {
      personal: [
        "Passeport validé 18+ mois",
        "Photos d'identité biométriques",
        "Casier judiciaire apostillé",
        "Certificat médical",
        "Assurance santé internationale",
        "Proof of residence (contrat de location)",
      ],
      professional: [
        "Lettres d'intention de clients (3 minimum)",
        "Portefeuille ou exemples de travaux réalisés",
        "Contrats clients ou devis signés",
        "Relevés bancaires 6-12 mois",
        "CV détaillé et qualifications",
        "Statuts de votre structure (si existante)",
      ],
    },
    process: [
      {
        step: 1,
        title: "Évaluation de votre profil professionnel",
        description: "Nous validons votre domaine d'activité (développement, conseil, création digitale, etc.) et vérifions que vous disposez d'une clientèle potentielle ou confirmée.",
      },
      {
        step: 2,
        title: "Préparation du dossier",
        description: "Collecte des lettres d'intention de clients, constitution de votre portefeuille professionnel, et organisation des justificatifs financiers.",
      },
      {
        step: 3,
        title: "Dépôt auprès de l'EDB",
        description: "Votre dossier est soumis en ligne. L'EDB vérifie la viabilité de votre activité et la crédibilité de votre clientèle.",
      },
      {
        step: 4,
        title: "Approbation et transfert de fonds",
        description: "Une fois approuvé (15-20 jours), vous transférez USD 50 000 sur votre compte bancaire mauricien. C'est la condition finale avant la Letter of Approval.",
      },
      {
        step: 5,
        title: "Installation et mise en route",
        description: "Obtention de la carte de résidence, enregistrement fiscal MRA et ouverture de votre activité. Vous commencez à facturer vos clients.",
      },
    ],
    advantages: [
      "Flexibilité entrepreneuriale et autonomie professionnelle",
      "Pas de limite de chiffre d'affaires",
      "Possibilité de clients internationaux (revenus non-imposables en certain cas)",
      "Conjoint et enfants inclus",
      "Régime fiscal avantageux (15% IS, 0% dividendes)",
      "Chemin vers la résidence permanente après 3 ans",
    ],
    faq: [
      {
        q: "Comment prouver que j'ai des clients si je débute à Maurice ?",
        a: "Nous vous conseillons de vous constituer des lettres d'intention de clients avant le dépôt. Si vous êtes freelance établi en Europe ou ailleurs, vos contrats clients actuels suffisent. L'EDB accepte aussi les promesses de mission (letters of intent) d'entreprises ou de cabinets reconnus.",
      },
      {
        q: "Quel chiffre d'affaires dois-je réaliser ?",
        a: "Le seuil est MUR 800 000/an (soit ~EUR 16 000). C'est un objectif réaliste pour un freelance actif. Lors de la mid-term review, l'EDB examinera votre CA vs. la trajectoire prévue dans votre dossier initial.",
      },
      {
        q: "Puis-je facturer en EUR et recevoir des paiements de l'Europe ?",
        a: "Oui, vous pouvez tout à fait. Vous serez assujettti à la TVA mauricienne (0% sur les services à l'export) et à l'impôt sur le revenu professionnel. Nous vous conseillons sur la meilleure structure (entreprise individuelle vs. SARL).",
      },
      {
        q: "Mon conjoint peut-il aussi être indépendant ?",
        a: "Oui. Si votre conjoint souhaite aussi exercer une activité indépendante, il/elle peut demander un propre OP Self-Employed. Les deux dossiers peuvent être traités en parallèle.",
      },
      {
        q: "Que se passe-t-il si mon CA est inférieur aux objectifs ?",
        a: "L'EDB examine votre bonne foi et le contexte économique. Nous préparons un argumentaire solide justifiant les écarts et un business plan révisé pour les années suivantes. Un dossier transparent est généralement accepté.",
      },
    ],
  },

  "professional-pass": {
    title: "Professional Pass",
    heroTitle: "Pour les professionnels qualifiés",
    description: "Permis pour professionnels salariés avec revenus minimum de 30 000 MUR/mois. Durée : 1 an renouvelable. Procédure simplifiée et rapide.",
    target: "Salarié, Professionnel Qualifié",
    investment: "Aucun",
    minRevenue: "MUR 30 000/mois minimum",
    duration: "1 an renouvelable",
    renewal: "Renouvelable annuellement",
    eligibility: [
      "Contrat de travail signé avec employeur mauricien",
      "Salaire minimum de MUR 30 000 par mois (EUR ~600)",
      "Qualifications professionnelles reconnues",
      "Assurance santé internationale",
      "Casier judiciaire vierge",
      "Pas de limite d'âge",
    ],
    documents: {
      personal: [
        "Passeport validé 18+ mois",
        "Photos d'identité biométriques",
        "Casier judiciaire apostillé",
        "Certificat médical",
        "Assurance santé internationale",
      ],
      professional: [
        "Contrat de travail signé",
        "Lettre d'offre d'emploi de l'employeur",
        "CV et diplômes certifiés",
        "Références professionnelles",
        "Vérification antécédents professionnels",
      ],
    },
    process: [
      {
        step: 1,
        title: "Signature du contrat de travail",
        description: "Vous obtenez une offre d'emploi d'une entreprise mauricienne. Le contrat doit clairement mentionner votre salaire et vos responsabilités.",
      },
      {
        step: 2,
        title: "Préparation du dossier simplifié",
        description: "Contrairement à l'OP Investor, aucun business plan n'est requis. Nous préparons l'ensemble des documents personnels et professionnels.",
      },
      {
        step: 3,
        title: "Dépôt en ligne auprès de l'EDB",
        description: "Votre dossier est soumis via la plateforme EDB. La procédure est accélérée pour le Professional Pass.",
      },
      {
        step: 4,
        title: "Approbation rapide",
        description: "Délai estimé : 10-15 jours ouvrés. L'EDB validé votre contrat et votre qualifications, puis délivre l'approbation.",
      },
      {
        step: 5,
        title: "Formalités et installation",
        description: "Enregistrement biométrique, obtention de la carte de résidence et enregistrement à la MRA. Vous pouvez commencer à travailler.",
      },
    ],
    advantages: [
      "Procédure plus rapide et simplifiée que l'OP Investor",
      "Aucun investissement ni apport de fonds",
      "Parfait pour cadres et professionnels rémunérés",
      "Emploi stable garanti par contrat",
      "Sécurité et prévisibilité",
      "Accès au système de santé mauricien",
    ],
    faq: [
      {
        q: "Puis-je changer d'employeur avec un Professional Pass ?",
        a: "Le Professional Pass est lié à un employeur spécifique. Si vous changez d'emploi, vous devez demander une modification ou renouvellement auprès de l'EDB avec votre nouveau contrat. La procédure est généralement rapide (5-10 jours).",
      },
      {
        q: "Quel est le salaire minimum en pratique ?",
        a: "Le seuil est MUR 30 000/mois. Cependant, pour des expatriés qualifiés, les salaires proposés sont généralement bien au-delà (MUR 50k-100k+), car les employeurs mauriciens cherchent à attirer de talents expérimentés.",
      },
      {
        q: "Mon conjoint peut-il venir avec moi ?",
        a: "Oui. Votre conjoint et vos enfants de moins de 24 ans peuvent être inclus comme dépendants dans le même dossier ou traités en parallèle.",
      },
      {
        q: "Combien de temps dure le renouvellement ?",
        a: "Le renouvellement est simple : votre employeur fournit une lettre de continuation d'emploi, et vous renouvelez auprès de l'EDB environ 2 semaines avant l'expiration. Délai : 5-10 jours.",
      },
      {
        q: "Puis-je accéder au Permanent Residence avec ce permis ?",
        a: "Non, le Professional Pass n'ouvre pas directement la voie au PRP. Vous devez passer par un Occupation Permit (Investor ou Self-Employed) avec 3 ans de résidence effective pour accéder au PRP.",
      },
    ],
  },

  "expert-pass": {
    title: "Expert Pass",
    heroTitle: "Pour les experts et cadres de haut niveau",
    description: "Permis accéléré pour experts internationaux dans des secteurs stratégiques (fintech, IA, biotech, maritime, etc.). Approbation en 48h.",
    target: "Expert, Cadre Dirigeant, Consultant Senior",
    investment: "Aucun",
    minRevenue: "MUR 250 000/mois minimum",
    duration: "Durée du contrat (max 3 ans renouvelable)",
    renewal: "Renouvelable avec nouveau contrat",
    eligibility: [
      "Contrat de travail avec employeur mauricien ou filiale",
      "Salaire minimum MUR 250 000/mois (USD ~5 000+)",
      "Expertise reconnue dans secteurs prioritaires (fintech, IA, biotech, maritime, services financiers)",
      "Diplômes supérieurs ou expérience significative",
      "Assurance santé internationale",
      "Casier judiciaire vierge",
    ],
    documents: {
      personal: [
        "Passeport validé 18+ mois",
        "Photos d'identité biométriques",
        "Casier judiciaire apostillé",
        "Certificat médical",
        "Assurance santé internationale",
      ],
      professional: [
        "Contrat de travail détaillé",
        "Lettre du CEO de l'employeur",
        "CV avec expertises et réalisations",
        "Diplômes masters ou supérieurs",
        "Recommandations de précédents employeurs",
        "Spécialisation dans secteur prioritaire",
      ],
    },
    process: [
      {
        step: 1,
        title: "Identification du secteur prioritaire",
        description: "Votre domaine (fintech, IA, biotechnologie, économie bleue, etc.) doit être reconnu par l'EDB comme stratégique pour le développement de Maurice.",
      },
      {
        step: 2,
        title: "Dossier prioritaire",
        description: "Préparation d'un dossier allégé mais complet, mettant en avant votre expertise unique et la valeur que vous apportez à l'écosystème mauricien.",
      },
      {
        step: 3,
        title: "Soumission accélérée",
        description: "Votre dossier bénéficie d'une voie d'accélération auprès de l'EDB. Les dossiers Expert Pass sont traités en priorité.",
      },
      {
        step: 4,
        title: "Approbation en 48h",
        description: "L'EDB approuve généralement en 48 heures (vs. 15-20 jours pour un OP classique). Letter of Approval délivrée rapidement.",
      },
      {
        step: 5,
        title: "Installation immédiate",
        description: "Formalités biométriques et immigration finalisées. Vous pouvez débuter votre mission très rapidement.",
      },
    ],
    advantages: [
      "Procédure accélérée (48h au lieu de 15-20 jours)",
      "Reconnaissance d'expertise internationale",
      "Flexibilité pour mobilité professionnelle",
      "Salaire rémunérateur (MUR 250k+ soit ~USD 5000+)",
      "Accès aux secteurs stratégiques de Maurice",
      "Crédibilité et prestige du statut Expert",
    ],
    faq: [
      {
        q: "Quels sont exactement les secteurs prioritaires ?",
        a: "Fintech et paiements digitaux, Intelligence Artificielle et data science, Biotechnologie et sciences de la vie, Économie bleue (maritime, aquaculture), Services financiers avancés, Cybersécurité, Technologies numériques innovantes.",
      },
      {
        q: "Quel niveau d'expertise faut-il démontrer ?",
        a: "Master ou diplôme équivalent dans votre domaine, OU au moins 10 années d'expérience professionnelle senior avec réalisations documentées. Les publications, brevets ou projets reconnus renforcent votre dossier.",
      },
      {
        q: "Puis-je changer de poste avec l'Expert Pass ?",
        a: "Oui, c'est l'une des avantages. Vous pouvez changer d'employeur dans le même secteur prioritaire plus facilement qu'avec un OP classique. Une simple notification à l'EDB suffit généralement.",
      },
      {
        q: "Combien de temps est validé l'Expert Pass ?",
        a: "La validité correspond à votre contrat de travail (généralement 1-3 ans). Au renouvellement, vous pouvez soit continuer avec le même employeur, soit changer pour un autre employeur dans un secteur prioritaire.",
      },
      {
        q: "Ma famille peut-elle m'accompagner ?",
        a: "Oui, conjoint et enfants de moins de 24 ans sont inclus. Ils reçoivent un permis dépendant lié au vôtre, traité en ~10 jours après votre approbation.",
      },
    ],
  },

  "permis-retraite": {
    title: "Retired Non-Citizen Permit",
    heroTitle: "Pour les retraités",
    description: "Profitez de votre retraite à Maurice avec revenus mensuels minimum de 1 500 USD. Durée : 10 ans renouvelable, 0% impôt sur pensions étrangères (convention France-Maurice).",
    target: "Retraité, Pensionné",
    investment: "Aucun",
    minRevenue: "USD 1 500/mois (USD 24 000/an)",
    duration: "10 ans",
    renewal: "Renouvelable indéfiniment",
    eligibility: [
      "Âge minimum : généralement 50 ans (flexible selon circonstances)",
      "Revenus mensuels minimum USD 1 500 (pension, rentes, revenus passifs)",
      "Proof of income : relevés bancaires, attestations de pension, relevés placements",
      "Transfert bancaire mensuel obligatoire depuis l'étranger vers compte mauricien",
      "Assurance santé internationale",
      "Casier judiciaire vierge",
    ],
    documents: {
      personal: [
        "Passeport validé 18+ mois",
        "Photos d'identité biométriques",
        "Casier judiciaire apostillé",
        "Certificat médical",
        "Assurance santé internationale",
        "Contrat de location ou acte d'achat immobilier",
      ],
      professional: [
        "Attestation de pension (du régime français, etc.)",
        "Relevés bancaires 12 derniers mois",
        "Attestations de revenus (placements, rentes, etc.)",
        "Certificat de résidence récent (si expatrié actuellement)",
        "Curriculum vitae professionnel",
      ],
    },
    process: [
      {
        step: 1,
        title: "Vérification d'éligibilité",
        description: "Nous validons que vos revenus réguliers atteignent USD 1 500/mois minimum et que vous disposez d'une source de revenus stable et documentable.",
      },
      {
        step: 2,
        title: "Collecte des documents",
        description: "Attestations de pension, relevés bancaires sur 12 mois, certificats de revenus. Tous les documents doivent être apostillés si émis par autorités étrangères.",
      },
      {
        step: 3,
        title: "Dossier de candidature",
        description: "Nous compilons l'ensemble du dossier avec vos documents personnels, preuves de revenus et engagement de transfert mensuel à Maurice.",
      },
      {
        step: 4,
        title: "Soumission et traitement",
        description: "Le dossier est soumis à l'EDB. Traitement généralement rapide pour les permis retraité (10-15 jours) car peu d'enjeux économiques autres que la contribution fiscale.",
      },
      {
        step: 5,
        title: "Installation et résidence",
        description: "Approbation reçue, enregistrement biométrique complété, vous installez à Maurice et commencez vos transferts bancaires mensuels.",
      },
    ],
    advantages: [
      "0% impôt sur les pensions étrangères (convention France-Maurice)",
      "Qualité de vie exceptionnelle (Mercer #1 en Afrique)",
      "0% droits de succession",
      "Climat subtropical, pas de saisons marquées",
      "Conjoint inclus comme dépendant",
      "Communauté francophone importante",
      "Frais de santé très abordables",
    ],
    faq: [
      {
        q: "Comment fonctionne le transfert mensuel de USD 1 500 ?",
        a: "Vous devez programmer un transfert bancaire mensuel de votre compte pension (en France, par ex.) vers votre compte mauricien. Un virement unique mensuel de USD 1 500 minimum suffit. L'EDB vera confirmation des virements de votre banque mauricienne.",
      },
      {
        q: "Puis-je travailler avec ce permis ?",
        a: "Non, le permis retraité est réservé aux personnes dont les revenus proviennent de pensions ou d'investissements passifs. Vous ne pouvez pas exercer d'activité professionnelle. Si vous souhaitez travailler, optez pour un OP Investor ou Self-Employed.",
      },
      {
        q: "Quel est le régime fiscal exact sur mes revenus ?",
        a: "Les pensions étrangères sont exonérées en vertu de la convention France-Maurice (article 18). Les revenus d'investissements (dividendes, intérêts) placés à Maurice seront imposés à 15% IS selon droit mauricien. Notre équipe optimise cette structure avec vous.",
      },
      {
        q: "Dois-je rester 180 jours par an à Maurice ?",
        a: "Pour bénéficier du statut de résident fiscal mauricien et de la convention fiscale, oui, vous devez être présent au minimum 183 jours par an. Mais l'EDB est généralement flexible pour les retraités ayant des raisons familiales ou médicales.",
      },
      {
        q: "Mon conjoint peut-il être inclus ?",
        a: "Oui, votre conjoint est automatiquement inclus comme dépendant. Un dossier conjoint peut être traité en parallèle avec le vôtre.",
      },
      {
        q: "Quelle est la durée avant accès au Permanent Residence ?",
        a: "Après 3 années consécutives de présence effective à Maurice et avec un dossier d'impôts payés conforme, vous pouvez demander la Permanent Residence. C'est une progression naturelle pour les retraités stabilisés.",
      },
    ],
  },

  "premium-visa": {
    title: "Premium Visa",
    heroTitle: "Pour les digital nomads et télétravailleurs",
    description: "Visa de long séjour pour digital nomads et télétravailleurs. Durée : 1 an renouvelable. Obtention en 48h. Aucune condition de revenus minimum stricte.",
    target: "Digital Nomad, Télétravailleur, Remote Worker",
    investment: "Aucun",
    minRevenue: "USD 1 500/mois (preuve de stabilité financière)",
    duration: "1 an renouvelable",
    renewal: "Renouvelable annuellement en 48h",
    eligibility: [
      "Télétravail pour employer ou client situé hors de Maurice",
      "Revenu mensuel minimum USD 1 500 (preuve bancaire)",
      "Aucune intention de travailler localement",
      "Assurance santé internationale",
      "Casier judiciaire vierge",
      "Pas de limite d'âge",
    ],
    documents: {
      personal: [
        "Passeport validé 18+ mois",
        "Photos d'identité biométriques",
        "Casier judiciaire apostillé (recommandé)",
        "Certificat médical",
        "Assurance santé internationale",
      ],
      professional: [
        "Preuve de revenus : relevés bancaires 3 mois",
        "Lettre d'employeur ou contrats clients",
        "CV ou portefeuille professionnel",
        "Contrat de location ou achat immobilier",
      ],
    },
    process: [
      {
        step: 1,
        title: "Vérification de la situation professionnelle",
        description: "Nous vérifions que vous êtes bien télétravailleur pour une entité hors de Maurice et que vous disposez de revenus stables d'au moins USD 1 500/mois.",
      },
      {
        step: 2,
        title: "Dossier allégé",
        description: "Le Premium Visa ne nécessite pas de business plan complexe. Seulement relevés bancaires, preuve d'emploi distant et assurance santé.",
      },
      {
        step: 3,
        title: "Soumission rapide",
        description: "Dossier soumis directement au portail EDB. Pas de processus intermédiaire comme pour les OP.",
      },
      {
        step: 4,
        title: "Approbation en 48h",
        description: "Le Premium Visa est approuvé très rapidement (48 heures) car le critère principal est juste la viabilité financière et la déclaration de non-travail local.",
      },
      {
        step: 5,
        title: "Installation et télétravail",
        description: "Vous recevez votre Letter of Approval et pouvez entrer à Maurice. Pas de formalités complexes. Vous commencez immédiatement votre télétravail depuis l'île.",
      },
    ],
    advantages: [
      "Processus ultra-rapide (48h d'approbation)",
      "Aucun plan d'affaires ni investissement requis",
      "Idéal pour tester votre expatriation sans engagement long",
      "Renouvellement simple et gratuit",
      "Parfait pour digital nomads et freelances",
      "Accès à la qualité de vie mauricienne",
      "Pas de restrictions sur secteurs d'activité (tant que distant)",
    ],
    faq: [
      {
        q: "Puis-je créer une société locale avec un Premium Visa ?",
        a: "Non, le Premium Visa n'autorisé pas la création ou l'exercice d'une activité commerciale locale. Vous ne pouvez que télé-travailler pour employeur/clients à l'étranger. Si vous souhaitez créer une société, optez pour un OP Investor ou Self-Employed.",
      },
      {
        q: "Puis-je être employé par une entreprise mauricienne ?",
        a: "Non, le Premium Visa suppose un emploi distant auprès d'un employeur étranger. Si une entreprise mauricienne vous propose un contrat, vous devrez passer à un Professional Pass ou Expert Pass.",
      },
      {
        q: "Quel revenu minimum faut-il démontrer ?",
        a: "USD 1 500/mois est le seuil (USD 18 000/an). Vous justifiez par relevés bancaires. Aucune vérification rigoureuse de la source du revenu, tant qu'il est stable et régulier.",
      },
      {
        q: "Puis-je renouveler mon Premium Visa chaque année ?",
        a: "Oui, le renouvellement est gratuit et très simple : relevés bancaires 3 mois + assurance santé validé. Traitement en 48h à chaque fois. Vous pouvez théoriquement rester indéfiniment en renouvelant annuellement.",
      },
      {
        q: "Mon famille peut-elle m'accompagner ?",
        a: "Oui, conjoint et enfants peuvent être inclus dans votre dossier Premium Visa. Ils reçoivent le même visa dépendant renouvelable annuellement.",
      },
      {
        q: "Puis-je accéder au Permanent Residence avec ce visa ?",
        a: "Non, le Premium Visa est un permis temporaire renouvelable. Il ne donne pas d'accès au Permanent Residence. Pour accéder au PRP, vous devez d'abord passer par un Occupation Permit (Investor ou Self-Employed) avec 3 ans de présence.",
      },
    ],
  },
};

type PageProps = {
  params: Promise<{ slug: PermitSlug }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const permit = permitData[slug];

  if (!permit) return {};

  return {
    title: `${permit.title} — Permis de résidence Maurice | Vanille Stratégie`,
    description: permit.description,
    openGraph: {
      title: permit.title,
      description: permit.description,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(permitData).map((slug) => ({
    slug,
  }));
}

export default async function PermitDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const permit = permitData[slug as PermitSlug];

  if (!permit) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services" className="hover:text-slate-900">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services/permis-residence" className="hover:text-slate-900">Permis de résidence</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900 font-medium">{permit.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm mb-6">
              Permis de résidence
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.2] mb-6">
              {permit.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {permit.description}
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-slate-400 text-xs uppercase font-bold">Investissement</p>
                  <p className="text-white font-medium">{permit.investment}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-slate-400 text-xs uppercase font-bold">Durée</p>
                  <p className="text-white font-medium">{permit.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-slate-400 text-xs uppercase font-bold">Revenu minimum</p>
                  <p className="text-white font-medium">{permit.minRevenue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Conditions d'éligibilité</h2>
              <div className="space-y-4">
                {permit.eligibility.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8 border-blue-200 bg-blue-50">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Profil cible
                </h3>
                <p className="text-slate-700 font-medium">{permit.target}</p>
              </Card>

              <Card className="p-8 border-slate-200 bg-white">
                <h3 className="font-bold text-slate-900 mb-4">Délais estimés</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Traitement principal :</span>
                    <span className="font-medium text-slate-900">10-20 jours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Dépendants :</span>
                    <span className="font-medium text-slate-900">~10 jours après</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between">
                    <span className="text-slate-600 font-medium">Total :</span>
                    <span className="font-bold text-slate-900">3-4 semaines</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Documents requis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-slate-200">
              <h3 className="font-bold text-slate-900 mb-6 text-lg flex items-center gap-2">
                <Home className="h-5 w-5 text-blue-600" />
                Documents personnels
              </h3>
              <ul className="space-y-3">
                {permit.documents.personal.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-1" />
                    <span className="text-slate-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border-slate-200">
              <h3 className="font-bold text-slate-900 mb-6 text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Documents professionnels
              </h3>
              <ul className="space-y-3">
                {permit.documents.professional.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-1" />
                    <span className="text-slate-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Processus de demande</h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-slate-200 hidden lg:block" />

            <div className="space-y-8 lg:space-y-12">
              {permit.process.map((step) => (
                <div key={step.step} className="relative lg:pl-24">
                  <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black ring-4 ring-white">
                    {step.step}
                  </div>
                  <Card className="p-6 border-slate-200">
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Avantages de ce permis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {permit.advantages.map((advantage, idx) => (
              <Card key={idx} className="p-6 border-slate-200 flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-slate-700 font-medium">{advantage}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Questions fréquentes</h2>
          <div className="space-y-6">
            {permit.faq.map((item, idx) => (
              <Card key={idx} className="p-6 border-slate-200">
                <h3 className="flex items-start gap-3 font-bold text-slate-900 mb-4">
                  <HelpCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  {item.q}
                </h3>
                <p className="text-slate-600 leading-relaxed ml-8">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-16 text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Prêt à demander ce permis ?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Demandez une étude de faisabilité gratuite avec {founder.name}, {founder.title}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 h-14 text-lg font-bold">
                  Demander une consultation
                </Button>
              </Link>
              <Link href="/services/permis-residence">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-10 h-14 text-lg font-bold">
                  Voir tous les permis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
