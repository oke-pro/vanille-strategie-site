import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Building2,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  FileText,
  CreditCard,
  MapPin,
  Scale,
  Users,
  ArrowRight,
  Zap,
  Clock,
  HelpCircle,
  Award,
  AlertTriangle,
  Home,
} from "lucide-react";

// ============================================================
// Company Type Data
// ============================================================

const companyTypeData: Record<
  string,
  {
    title: string;
    metaTitle: string;
    metaDescription: string;
    heroSubtitle: string;
    shortName: string;
    taxRate: string;
    description: string;
    idealFor: string;
    conditions: Array<{ label: string; value: string }>;
    advantages: string[];
    requirements: string[];
    costs: {
      label: string;
      range: string;
      items: string[];
    };
    faq: Array<{ q: string; a: string }>;
  }
> = {
  "domestic-company": {
    title: "Domestic Company",
    metaTitle: "Création Domestic Company à Maurice — IS 15% pour activité locale",
    metaDescription: "Constitution en 3 jours, taux effectif 3%, idéale pour entrepreneurs, freelances et e-commerçants. Capital min 1 MUR, pas de licence FSC.",
    heroSubtitle: "Pour les entrepreneurs, e-commerçants et freelances",
    shortName: "DC",
    taxRate: "15% (effectif 3%)",
    description:
      "La Domestic Company est une structure de droit mauricien destinée aux activités économiques locales ou régionales. Avec un impôt sur les bénéfices à 15% et une exonération partielle accessible, elle offre une fiscalité avantageuse pour les entrepreneurs établis à Maurice.",
    idealFor: "Entrepreneurs, freelances, e-commerçants, services locaux, petite entreprise",
    conditions: [
      { label: "Capital minimum", value: "1 MUR (aucun minimum réel)" },
      { label: "Directeurs résidents", value: "Minimum 1 résident mauricien" },
      { label: "Actionnaires", value: "Minimum 1 (peut être étranger à 100%)" },
      { label: "Licence FSC", value: "Pas requise" },
      { label: "Délai de constitution", value: "2-3 semaines ouvrées" },
    ],
    advantages: [
      "Taux d'imposition effectif de 3% avec Partial Exemption (sous conditions)",
      "Pas de licence FSC obligatoire (économies de frais)",
      "Pas de substance requirements complexes",
      "Création rapide et simple",
      "Accès aux conventions fiscales mauriciennes",
      "Diviserres 0% IS si distribuées localement",
    ],
    requirements: [
      "Document d'identité validé de l'actionnaire (passeport ou carte d'identité)",
      "Certificat de résidence bancaire",
      "Preuve d'adresse professionnelle à Maurice",
      "Rédaction et signature des statuts (société civile ou commerciale)",
      "Enregistrement auprès du CBRD (Companies and Business Registration Department)",
    ],
    costs: {
      label: "Coûts de création",
      range: "2 500 - 4 500 MUR",
      items: [
        "Frais de rédaction des statuts : 1 500 - 2 000 MUR",
        "Frais d'enregistrement CBRD : 800 - 1 500 MUR",
        "Domiciliation professionnelle (1ère année) : 500 - 1 000 MUR",
        "Frais bancaires d'ouverture de compte : 500 - 1 000 MUR",
      ],
    },
    faq: [
      {
        q: "Puis-je créer une Domestic Company avec une résidence à l'étranger ?",
        a: "Oui, vous pouvez être le propriétaire à 100% depuis l'étranger, mais vous devez avoir au minimum un directeur résident à Maurice. Nous pouvons vous proposer un administrateur résident agréé.",
      },
      {
        q: "Quel est le vrai taux d'imposition effectif ?",
        a: "Le taux nominal est de 15%, mais avec la Partial Exemption (sous certaines conditions d'activité), le taux effectif descend souvent à 3% ou moins. Notre expert-comptable étudie votre situation spécifique.",
      },
      {
        q: "Dois-je avoir une présence physique à Maurice ?",
        a: "Pour une Domestic Company, il est recommandé d'avoir une adresse professionnelle enregistrée à Maurice. Les services de domiciliation professionnelle suffisent.",
      },
      {
        q: "Combien de temps prend la création ?",
        a: "Généralement 2-3 semaines ouvrées une fois tous les documents collectés. Avec notre processus optimisé, nous accélèrons souvent ce délai.",
      },
      {
        q: "Puis-je cumuler une Domestic Company avec un autre statut (Investor, Self-Employed) ?",
        a: "Oui, c'est même recommandé pour les entrepreneurs. Vous pouvez obtenir un permis OP Self-Employed en parallèle de votre Domestic Company.",
      },
    ],
  },
  "global-business-company": {
    title: "Global Business Company",
    metaTitle: "GBC (Global Business Company) Maurice — IS effectif 3%, Partial Exemption 80%",
    metaDescription: "Société pour trading international, holding, services financiers. Licence FSC, accès aux 46 traités de non-double imposition, Partial Exemption 80%.",
    heroSubtitle: "Pour le trading international et l'optimisation fiscale",
    shortName: "GBC",
    taxRate: "3-3,4% effectif",
    description:
      "La Global Business Company est conçue pour les activités internationales, les holdings, le trading et les services financiers. Avec une Partial Exemption couvrant 80% des revenus étrangers, elle offre un taux effectif d'impôt sur les bénéfices autour de 3%.",
    idealFor: "Holdings, trading international, services financiers, gestion de portefeuille, services IT globaux",
    conditions: [
      { label: "Capital minimum", value: "Variable (souvent 25 000 USD)" },
      { label: "Directeurs résidents", value: "Minimum 2 résidents mauriciens" },
      { label: "Actionnaires", value: "Minimum 1 (peut être étranger)" },
      { label: "Licence FSC", value: "Obligatoire" },
      { label: "Substance", value: "Nécessaire (locaux, équipe, opérations)" },
      { label: "Délai de constitution", value: "3-4 semaines" },
    ],
    advantages: [
      "Partial Exemption 80% sur revenus étrangers → taux effectif 3%",
      "Accès aux 46 conventions de non-double imposition",
      "Legitimacy and credibility via licence FSC",
      "Reconnaissance mondiale (banking, trading, M&A)",
      "Déductibilité des frais opérationnels",
      "Flexibilité dans la structuration de groupes",
      "Dividendes reçus de filiales étrangères : 0% IS",
    ],
    requirements: [
      "Business plan détaillé validé par la FSC",
      "Capitaux suffisants et justification de la source",
      "Certificats de résidence bancaire des directeurs",
      "Curriculum Vitae de l'équipe de gestion",
      "Adresse professionnelle dédiée à Maurice",
      "Statuts conformes aux règles FSC",
      "Nomination d'un secretary (secrétaire) local agréé",
      "Contrats clients/fournisseurs (le cas échéant)",
    ],
    costs: {
      label: "Coûts d'établissement GBC",
      range: "7 500 - 12 000 MUR + licence FSC",
      items: [
        "Rédaction dossier FSC : 3 000 - 5 000 MUR",
        "Frais d'enregistrement CBRD : 1 000 - 2 000 MUR",
        "Licence FSC (annuelle) : 2 500 - 3 500 MUR",
        "Administrateur résident (1ère année) : 1 500 - 2 500 MUR",
        "Secrétaire légal (1ère année) : 1 500 - 2 000 MUR",
        "Domiciliation professionnelle (1ère année) : 1 000 - 2 000 MUR",
      ],
    },
    faq: [
      {
        q: "Qu'est-ce que la Partial Exemption ?",
        a: "C'est un mécanisme fiscal mauricien qui exonère 80% des revenus étrangers nets de la Domestic Company (et donc des revenus étrangers de la GBC). Cela ramène le taux effectif de 15% à environ 3%.",
      },
      {
        q: "Pourquoi la GBC exige-t-elle une licence FSC ?",
        a: "Parce qu'elle peut exercer des activités de services financiers (trading de devises, gestion de titres, etc.). La licence FSC garantit la transparence et la conformité réglementaire internationale.",
      },
      {
        q: "Que signifie 'substance' pour une GBC ?",
        a: "Substance = présence réelle à Maurice. Cela inclut : locaux dédiés, équipe employée à temps plein, système comptable, clients/fournisseurs réels. Pas d'activité purement théorique.",
      },
      {
        q: "Puis-je créer une GBC pour du trading crypto ou forex ?",
        a: "Potentiellement oui, mais avec conditions strictes et autorisation FSC. Le secteur est très régulé. Nous vous conseillons de discuter de votre modèle en amont.",
      },
      {
        q: "Quel est le coût annuel de maintenance d'une GBC ?",
        a: "Environ 8 000-15 000 MUR/an (licence FSC, administrateur, secrétaire, comptabilité, compliance). Ce coût est amortissable par la fiscalité gagnée.",
      },
      {
        q: "Puis-je convertir ma Domestic Company en GBC ?",
        a: "Oui, c'est une migration simple si votre activité évolue vers l'international. Nos équipes gèrent cette transition.",
      },
    ],
  },
  "authorised-company": {
    title: "Authorised Company",
    metaTitle: "Authorised Company Maurice — 0% IS sur revenus étrangers, structure offshore",
    metaDescription: "Société non-résident fiscal pour holding IP, investissement passif. Pas de FSC, pas de conventions fiscales, IS 0%. Moins coûteuse que GBC.",
    heroSubtitle: "Pour les holdings, l'IP et les investissements passifs",
    shortName: "AC",
    taxRate: "0% (non-résident)",
    description:
      "L'Authorised Company est une société enregistrée à Maurice mais qui n'y exerce aucune activité. En tant que non-résident fiscal, elle bénéficie d'une exonération totale d'impôt sur les revenus étrangers. Idéale pour les holdings IP, les investissements passifs ou les structures intra-groupe.",
    idealFor: "Holding de propriété intellectuelle, investissement passif, structure de groupe, détention d'actifs, structure de financement",
    conditions: [
      { label: "Capital minimum", value: "Variable (souvent 5 000 USD)" },
      { label: "Activité à Maurice", value: "Aucune (zéro activité)" },
      { label: "Licence FSC", value: "Pas requise" },
      { label: "Directeurs résidents", value: "Pas obligatoire" },
      { label: "Registered Agent", value: "Obligatoire (FSC) " },
      { label: "Délai de constitution", value: "2-3 semaines" },
    ],
    advantages: [
      "Exonération totale IS sur revenus étrangers (0%)",
      "Pas de licence FSC obligatoire",
      "Structure simple et moins coûteuse que GBC",
      "Pas d'activité opérationnelle requise",
      "Ideal pour holding IP ou investissement passif",
      "Reconnaissance internationalepour structuration groupe",
      "Flexibilité d'actionnariat",
    ],
    requirements: [
      "Document d'identité de l'actionnaire principal",
      "Certificat bancaire de résidence (pour preuve de source de fonds)",
      "Statuts déclarant 'aucune activité à Maurice'",
      "Nomination d'un Registered Agent agréé par la FSC",
      "Adresse administrative enregistrée (souvent adresse de l'agent)",
      "Justification de la source de capitaux",
      "Documentation de la structure actionnariale",
    ],
    costs: {
      label: "Coûts de création AC",
      range: "2 000 - 4 000 MUR + frais agent",
      items: [
        "Rédaction des statuts : 1 000 - 1 500 MUR",
        "Enregistrement CBRD : 800 - 1 200 MUR",
        "Registered Agent (1ère année) : 500 - 1 500 MUR",
        "Domiciliation adresse (1ère année) : 300 - 500 MUR",
        "Frais bancaires : optionnel si pas de compte",
      ],
    },
    faq: [
      {
        q: "Quelle est la différence entre une AC et une GBC ?",
        a: "La GBC peut exercer une activité à Maurice (trading, services) et accéder aux traités fiscaux. L'AC ne peut faire AUCUNE activité à Maurice, mais bénéficie d'une fiscalité plus simple (0% IS). Les coûts de maintenance sont aussi plus bas.",
      },
      {
        q: "Puis-je avoir un compte bancaire avec une Authorised Company ?",
        a: "Techniquement oui, mais c'est compliqué (KYC stricts, raisons documentées). Généralement, on limite AC aux comptes de titre ou holding pur sans flux opérationnels.",
      },
      {
        q: "Que signifie 'aucune activité à Maurice' concrètement ?",
        a: "Cela veut dire : pas de clients/fournisseurs à Maurice, pas de locaux, pas d'employés, pas de ventes/services. AC est une enveloppe patrimoniale ou de financement, pas un opérateur.",
      },
      {
        q: "Puis-je utiliser une AC comme holding pour ma GBC ?",
        a: "Absolument ! C'est une structure courante. L'AC détient les parts de la GBC qui opère. L'AC taxe à 0%, la GBC à 3%. Optimisation multiniveaux.",
      },
      {
        q: "Un Registered Agent, qu'est-ce que c'est ?",
        a: "C'est un tiers agréé par la FSC qui représente légalement la société à Maurice (adresse, documents officiels). Coûte environ 500-1500 MUR/an.",
      },
      {
        q: "Puis-je convertir une AC en GBC ?",
        a: "Oui, si vous souhaitez développer une activité opérationnelle à Maurice. C'est une simple modification statutaire.",
      },
    ],
  },
};

// ============================================================
// Metadata Génération
// ============================================================

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = companyTypeData[slug];
  if (!data) return notFound();

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

// ============================================================
// Page Component
// ============================================================

export default async function CompanyTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = companyTypeData[slug];
  if (!data) return notFound();

  const gradients: Record<string, string> = {
    "domestic-company": "from-blue-600 to-indigo-600",
    "global-business-company": "from-emerald-600 to-teal-600",
    "authorised-company": "from-purple-600 to-violet-600",
  };

  const gradient = gradients[slug] || "from-blue-600 to-indigo-600";

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900">Accueil</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-slate-900">Services</Link>
            <span>/</span>
            <Link href="/services/creation-societe" className="hover:text-slate-900">Création de société</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{data.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/nature-paradis.jpg"
            alt={data.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              {data.shortName} — Création de société
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              {data.title}
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              {data.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Obtenir une consultation
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-white/80 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <Clock className="h-5 w-5 text-amber-400" />
                <span className="text-sm font-medium italic">Traitement en 2-3 semaines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Description & Fiscal Info */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Qu'est-ce qu'une {data.title} ?</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Fiscal Card */}
            <div className={`rounded-2xl bg-gradient-to-br ${gradient} p-8 text-white shadow-lg`}>
              <p className="text-sm font-bold uppercase tracking-widest opacity-90 mb-2">Impôt sur les bénéfices</p>
              <p className="text-4xl font-black mb-6">{data.taxRate}</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Partial Exemption applicable</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Dividendes 0% IS</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Plus-values longue durée 0% IS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Conditions de création</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.conditions.map((cond, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-2">{cond.label}</p>
                <p className="text-lg font-bold text-slate-900">{cond.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Avantages de cette structure</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.advantages.map((adv, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 transition-colors">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-slate-700 font-medium">{adv}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Documents requis pour la création</h2>
          <div className="space-y-4">
            {data.requirements.map((req, idx) => (
              <div key={idx} className="flex gap-3 p-4 bg-white rounded-xl border border-slate-100">
                <FileText className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-slate-700">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{data.costs.label}</h2>
          <p className="text-lg text-slate-600 mb-8">
            Fourchette : <span className="font-bold text-slate-900">{data.costs.range}</span>
          </p>
          <div className="space-y-3">
            {data.costs.items.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CreditCard className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl bg-blue-50 border border-blue-100">
            <p className="text-sm text-slate-600 italic">
              * Les frais de création sont tout compris : rédaction des statuts, enregistrement légal, domiciliation, ouverture de compte bancaire (si applicable) et conseil Expert-Comptable initial.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Questions fréquemment posées</h2>
          <div className="space-y-6">
            {data.faq.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 select-none">
                  <h3 className="text-lg font-bold text-slate-900">{item.q}</h3>
                  <HelpCircle className="h-5 w-5 text-slate-600 group-open:hidden" />
                  <AlertTriangle className="h-5 w-5 text-slate-600 hidden group-open:block" />
                </summary>
                <div className="border-t border-slate-100 p-6 text-slate-700 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à créer votre {data.title} ?</h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Didier Laroussinie et notre équipe vous accompagnent du premier entretien à la signature des documents.
            Consultation gratuite, sans engagement.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 h-12 font-bold">
              Demander une consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500 italic leading-relaxed text-center">
            * Les démarches légales liées à la constitution des sociétés internationales sont réalisées par nos partenaires mauriciens dûment agréés par la Financial Services Commission (FSC) of Mauritius.
            BD Star Management Services est membre du Mauritius Institute of Professional Accountants (MIPA).
            Didier Laroussinie, Expert-Comptable diplômé (DEC), assure le conseil fiscal et la conformité fiscale selon les normes internationales.
          </p>
        </div>
      </section>
    </main>
  );
}

// ============================================================
// Static Génération
// ============================================================

export function generateStaticParams() {
  return [
    { slug: "domestic-company" },
    { slug: "global-business-company" },
    { slug: "authorised-company" },
  ];
}
