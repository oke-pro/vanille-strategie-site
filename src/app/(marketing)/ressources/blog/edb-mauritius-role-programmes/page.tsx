import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { founder } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import {
  Building2,
  CheckCircle2,
  Globe2,
  Landmark,
  Rocket,
  Ship,
  Lightbulb,
  FileText,
  Users,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  Clock,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "L'EDB Mauritius -- Votre partenaire institutionnel pour investir à Maurice | Vanille Strategie",
  description:
    "Decouvrez le rôle de l'Economic Development Board (EDB) de Maurice : Occupation Permits, programmes d'accompagnement, Premium Investor Certificate, Freeport et secteurs prioritaires 2025-2026.",
  keywords: [
    "EDB Mauritius",
    "Economic Development Board Maurice",
    "Occupation Permit Maurice",
    "investir Maurice",
    "Premium Investor Certificate",
    "Freeport Mauritius",
    "SME Mauritius",
    "Innovator Permit Maurice",
    "residency.mu",
    "Vanille Strategie",
  ],
  openGraph: {
    title:
      "L'EDB Mauritius -- Votre partenaire institutionnel pour investir à Maurice",
    description:
      "Guide complet sur l'Economic Development Board : missions, Occupation Permits, programmes, Freeport, secteurs prioritaires.",
    type: "article",
    locale: "fr_FR",
    siteName: "Vanille Stratégie",
    images: [{ url: "https://vanillestrategie.fr/images/hero-paradise.jpg" }],
  },
  alternates: {
    canonical: "https://vanillestrategie.fr/ressources/blog/edb-mauritius-role-programmes",
  },
  twitter: {
    card: "summary_large_image",
    title: "L'EDB Mauritius -- Votre partenaire institutionnel pour investir à Maurice | Vanille Strategie",
    description:
      "Decouvrez le rôle de l'Economic Development Board (EDB) de Maurice : Occupation Permits, programmes d'accompagnement, Premium Investor Certificate, Freeport et secteurs prioritaires 2025-2026.",
    images: ["https://vanillestrategie.fr/images/hero-paradise.jpg"],
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const opSteps = [
  {
    step: 1,
    title: "Constitution du dossier",
    description:
      "Formulaire de demande, business plan, justificatifs d'identite, extraits bancaires, casier judiciaire, CV, diplomes.",
    delay: "Variable selon la completude",
  },
  {
    step: 2,
    title: "Depot en ligne via residency.mu",
    description:
      "Soumission electronique sur le portail officiel Residency. Paiement des frais de dossier (processing fee).",
    delay: "Immediat",
  },
  {
    step: 3,
    title: "Instruction par l'EDB",
    description:
      "Verification des documents, analyse du projet economique, due diligence. L'EDB peut demander des complements.",
    delay: "10-15 jours ouvres",
  },
  {
    step: 4,
    title: "Approval in Principle (AIP)",
    description:
      "Lettre d'approbation de principe. Vous pouvez commencer vos demarches bancaires et d'installation.",
    delay: "15-20 jours ouvres au total",
  },
  {
    step: 5,
    title: "Delivrance du permis",
    description:
      "Apres validation finale et versement de l'investissement requis, l'Occupation Permit est emis pour 10 ans.",
    delay: "Quelques jours apres l'AIP",
  },
];

const prioritySectors = [
  {
    name: "Fintech & Financial Services",
    icon: TrendingUp,
    description:
      "Sandbox réglementaire, licences FSC accelerees, hub blockchain et paiements numeriques.",
  },
  {
    name: "Blue Economy",
    icon: Ship,
    description:
      "Aquaculture, biotechnologies marines, energies oceaniennes. Zone économique exclusive de 2,3 millions km2.",
  },
  {
    name: "Renewable Energy",
    icon: Zap,
    description:
      "Objectif 60% d'energies renouvelables d'ici 2030. Solaire, eolien offshore, biomasse.",
  },
  {
    name: "ICT & Innovation",
    icon: Globe2,
    description:
      "Cybercity Ebene, Smart Cities, cables sous-marins SAFE/LION. Connectivite Afrique-Asie.",
  },
];

const freeportAdvantages = [
  "Exemption de droits de douane sur les importations et reexportations",
  "Pas de TVA sur les operations en zone franche",
  "Regime fiscal preferentiel pour les operateurs agrees",
  "Positionnement strategique entre l'Afrique, l'Asie et l'Europe",
  "Infrastructure logistique portuaire et aeroportuaire moderne",
  "Acces privilegie aux marches COMESA, SADC et CECPA (Inde)",
];

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function EDBMauritiusPage() {
  return (
    <>
      <BlogPostingJsonLd
        title="L'EDB Mauritius -- Votre partenaire institutionnel pour investir à Maurice"
        description="Guide complet sur l'Economic Development Board : missions, Occupation Permits, programmes, Freeport, secteurs prioritaires."
        slug="edb-mauritius-role-programmes"
        datePublished="2026-03-10"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          { name: "L'EDB à Maurice : rôle, programmes et accompagnement des investisseurs", url: "/ressources/blog/edb-mauritius-role-programmes" },
        ]}
      />
    <main className="min-h-screen">
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ressources/blog"
            className="text-sm text-blue-400 hover:underline"
          >
            &larr; Tous les articles
          </Link>

          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-blue-500/20 px-3 py-0.5 text-xs font-medium text-blue-300">
              Institutions
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">-- 18 min de lecture</span>
          </div>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            L&apos;EDB Mauritius -- Votre partenaire institutionnel pour
            investir{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              à Maurice
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            L&apos;Economic Development Board (EDB) est l&apos;organisme
            central qui facilite l&apos;investissement étranger à Maurice.
            Guide complet : missions, Occupation Permits, programmes de
            soutien, Freeport et secteurs prioritaires.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">
              DL
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {founder.name}
              </p>
              <p className="text-xs text-slate-400">{founder.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 1 — Qu'est-ce que l'EDB                              */}
      {/* ============================================================ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Landmark className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Qu&apos;est-ce que l&apos;EDB ?
              </h2>
              <p className="mt-1 text-sm font-medium text-blue-600">
                L&apos;organisme apex de Maurice pour l&apos;investissement
              </p>
            </div>
          </div>

          <div className="prose prose-slate prose-lg mt-8 max-w-none">
            <p>
              L&apos;<strong>Economic Development Board (EDB)</strong> a ete
              crée en 2017 par le gouvernement mauricien, issu de la{" "}
              <strong>
                fusion du Board of Investment (BOI) et d&apos;Enterprise
                Mauritius
              </strong>
              . Cette consolidation visait a creer un guichet unique, plus
              efficace, pour la promotion et la facilitation de
              l&apos;investissement etranger.
            </p>
            <p>
              L&apos;EDB est le point de contact principal pour tout
              investisseur souhaitant s&apos;implanter à Maurice. Il opere
              sous la tutelle du Premier Ministre et joue un role
              strategique dans la diversification économique du pays.
            </p>
          </div>

          {/* Callout */}
          <div className="mt-8 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
            <p className="text-sm font-bold text-blue-800">
              Bon a savoir
            </p>
            <p className="mt-2 text-sm text-blue-700">
              L&apos;EDB n&apos;est pas un simple bureau d&apos;information.
              C&apos;est l&apos;autorite qui delivre les Occupation Permits,
              les Premium Investor Certificates, et qui coordonne les
              programmes de soutien aux entreprises. Tout passe par l&apos;EDB.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — Missions                                         */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Les missions de l&apos;EDB
          </h2>
          <p className="mt-3 text-slate-600">
            Trois axes strategiques au service du developpement economique.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card className="border-t-4 border-t-blue-500 p-6">
              <Globe2 className="h-8 w-8 text-blue-500" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Promotion des investissements
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Missions commerciales, roadshows internationaux, marketing
                de destination. L&apos;EDB positionne Maurice comme hub
                Afrique-Asie aupres des investisseurs du monde entier.
              </p>
            </Card>

            <Card className="border-t-4 border-t-emerald-500 p-6">
              <FileText className="h-8 w-8 text-emerald-500" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Facilitation des permis
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Instruction et délivrance des Occupation Permits (Investor,
                Self-Employed, Professional), des Premium Investor
                Certificates et des Innovator Permits.
              </p>
            </Card>

            <Card className="border-t-4 border-t-purple-500 p-6">
              <Users className="h-8 w-8 text-purple-500" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Accompagnement continu
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Apres l&apos;installation, l&apos;EDB continue d&apos;assister
                les entreprises : mise en relation, resolution de
                problemes administratifs, accès aux programmes de soutien.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — Processus Occupation Permit                      */}
      {/* ============================================================ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Le processus de demande d&apos;Occupation Permit
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Via le portail residency.mu -- de la constitution du dossier
                à la délivrance
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-0">
            {opSteps.map((s, idx) => (
              <div key={s.step} className="relative flex gap-6 pb-8">
                {/* Timeline line */}
                {idx < opSteps.length - 1 && (
                  <div className="absolute left-5 top-12 h-full w-px bg-slate-200" />
                )}
                {/* Step number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                  {s.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {s.description}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-xs font-medium text-slate-400">
                      {s.delay}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="mt-6 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6">
            <p className="text-sm font-bold text-emerald-800">
              Notre expérience
            </p>
            <p className="mt-2 text-sm text-emerald-700">
              Vanille Strategie depose entre 30 et 50 dossiers d&apos;Occupation
              Permit par an aupres de l&apos;EDB depuis 2012. Nous connaissons
              les attentes precises des officiers en charge de
              l&apos;instruction, ce qui nous permet de reduire
              significativement les demandes de complements et donc les delais.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — Programmes d'accompagnement SME                  */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Programmes d&apos;accompagnement et financement
          </h2>
          <p className="mt-3 text-slate-600">
            L&apos;EDB coordonne plusieurs mecanismes de soutien aux
            entreprises, en partenariat avec SME Mauritius et la Development
            Bank of Mauritius (DBM).
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                  <Rocket className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  SME Mauritius Schemes
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Grants pouvant atteindre{" "}
                <strong>Rs 200 000</strong> pour les PME mauriciennes.
                Couvrent le marketing, la formation, la certification
                qualité, l&apos;innovation produit et l&apos;acces aux
                marches d&apos;exportation.
              </p>
              <ul className="mt-3 space-y-1.5">
                {[
                  "Booster Programme (marketing & branding)",
                  "Innovation Box (R&D et prototypage)",
                  "Skills Development Grant",
                  "Women Entrepreneur Programme",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <Building2 className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  DBM Loans & Financement
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                La Development Bank of Mauritius propose des{" "}
                <strong>prets a taux preferentiels</strong> pour les PME et
                les startups. Des lignes de credit specifiques existent pour
                les secteurs prioritaires : green energy, ICT,
                agro-industrie.
              </p>
              <ul className="mt-3 space-y-1.5">
                {[
                  "Taux d'interet reduits (subventionnes par l'Etat)",
                  "Prets jusqu'a Rs 5 millions pour les PME",
                  "Ligne specifique femmes entrepreneures",
                  "Pas de garantie immobiliere pour les micro-entreprises",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Callout femmes entrepreneures */}
          <div className="mt-8 rounded-xl border-l-4 border-pink-500 bg-pink-50 p-6">
            <p className="text-sm font-bold text-pink-800">
              Focus : Femmes entrepreneures
            </p>
            <p className="mt-2 text-sm text-pink-700">
              Maurice a mis en place des programmes dedies aux femmes
              entrepreneures, avec des grants specifiques, du mentoring et
              un accès facilite au financement DBM. L&apos;EDB joue un role
              de coordination entre les differentes agences pour simplifier
              les demarches.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — Premium Investor Certificate                     */}
      {/* ============================================================ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Premium Investor Certificate
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Pour les projets d&apos;envergure -- Rs 500 millions minimum
              </p>
            </div>
          </div>

          <div className="prose prose-slate prose-lg mt-8 max-w-none">
            <p>
              Le <strong>Premium Investor Certificate (PIC)</strong> est un
              dispositif reserve aux projets d&apos;investissement majeurs,
              avec un seuil minimum de{" "}
              <strong>Rs 500 millions</strong> (environ 10 millions EUR).
              Il est delivre directement par l&apos;EDB et offre des
              avantages considerables.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Interlocuteur dedie au sein de l'EDB (fast-track)",
              "Facilitation acceleree de tous les permis et licences",
              "Exoneration ou reduction de droits de douane",
              "Acces prioritaire au foncier et aux zones franches",
              "Coordination interministerielle par l'EDB",
              "Accompagnement post-investissement pendant 5 ans",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg bg-purple-50 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-600" />
                <span className="text-sm text-purple-900">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border-l-4 border-purple-500 bg-purple-50 p-6">
            <p className="text-sm font-bold text-purple-800">
              A noter
            </p>
            <p className="mt-2 text-sm text-purple-700">
              Le PIC est particulierement adapte aux projets
              d&apos;infrastructure, aux chaines hotelieres internationales,
              aux fonds d&apos;investissement et aux groupes industriels
              souhaitant utiliser Maurice comme base regionale.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 — Innovator Permit                                 */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
              <Lightbulb className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Innovator Permit
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Pour les startups innovantes -- pas de capital minimum
              </p>
            </div>
          </div>

          <div className="prose prose-slate prose-lg mt-8 max-w-none">
            <p>
              L&apos;<strong>Innovator Permit</strong> (anciennement
              Innovator Occupation Permit) est un dispositif specifiquement
              concu pour les{" "}
              <strong>fondateurs de startups innovantes</strong>. A la
              difference de l&apos;OP Investor, il ne requiert{" "}
              <strong>aucun capital minimum d&apos;investissement</strong>.
            </p>
            <p>
              Le candidat doit presenter un projet innovant valide par
              l&apos;EDB, avec un business plan demontrant le potentiel de
              creation d&apos;emplois et de valeur ajoutee pour
              l&apos;economie mauricienne. L&apos;EDB evalue le caractère
              innovant du projet et le profil du fondateur.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Card className="bg-teal-50 p-5 text-center">
              <p className="text-3xl font-bold text-teal-700">0 $</p>
              <p className="mt-1 text-sm text-teal-600">
                Capital minimum requis
              </p>
            </Card>
            <Card className="bg-teal-50 p-5 text-center">
              <p className="text-3xl font-bold text-teal-700">10 ans</p>
              <p className="mt-1 text-sm text-teal-600">
                Duree du permis
              </p>
            </Card>
            <Card className="bg-teal-50 p-5 text-center">
              <p className="text-3xl font-bold text-teal-700">15%</p>
              <p className="mt-1 text-sm text-teal-600">
                IS flat -- même regime que tous
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-xl border-l-4 border-teal-500 bg-teal-50 p-6">
            <p className="text-sm font-bold text-teal-800">
              Ideal pour
            </p>
            <p className="mt-2 text-sm text-teal-700">
              Les fondateurs de startups tech, les createurs de SaaS, les
              projets deeptech, fintech, edtech ou healthtech. Si votre
              projet est innovant mais que vous n&apos;avez pas les 50 000 $
              de l&apos;OP Investor, l&apos;Innovator Permit est fait pour
              vous.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 — Portail Residency                                */}
      {/* ============================================================ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Le portail Residency (residency.mu)
          </h2>
          <p className="mt-3 text-slate-600">
            Depuis 2020, l&apos;EDB a digitalise l&apos;ensemble du
            processus de demande de permis via le portail{" "}
            <a
              href="https://residency.mu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:underline"
            >
              residency.mu
              <ExternalLink className="ml-1 inline h-3.5 w-3.5" />
            </a>
            .
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Depot en ligne",
                desc: "Soumission 100% electronique des demandes d'OP, Premium Visa, et Permanent Residence Permit.",
              },
              {
                title: "Suivi en temps reel",
                desc: "Tableau de bord personnel pour suivre l'avancement de votre dossier a chaque etape.",
              },
              {
                title: "Upload securise",
                desc: "Telechargement des justificatifs au format PDF. Systeme de notifications par email.",
              },
              {
                title: "Renouvellement simplifie",
                desc: "Renouvellement des permis existants directement via le portail, sans deplacement.",
              },
            ].map((item) => (
              <Card key={item.title} className="p-5">
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8 — Freeport Mauritius                               */}
      {/* ============================================================ */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
              <Ship className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Freeport Mauritius : la zone franche logistique
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Un regime special pour les activités de transit, stockage et
                transformation
              </p>
            </div>
          </div>

          <div className="mt-8 text-slate-300">
            <p>
              Le <strong className="text-white">Freeport de Maurice</strong>{" "}
              est un regime de zone franche qui permet aux operateurs agrees
              de mener des activités de{" "}
              <strong className="text-white">
                stockage, conditionnement, assemblage leger et
                reexportation
              </strong>{" "}
              depuis Maurice, avec des avantages fiscaux et douaniers
              significatifs.
            </p>
          </div>

          <div className="mt-8 grid gap-3">
            {freeportAdvantages.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg bg-white/5 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6">
            <p className="text-sm font-bold text-cyan-300">
              Procedure d&apos;agrement
            </p>
            <p className="mt-2 text-sm text-cyan-100/80">
              L&apos;obtention du statut d&apos;operateur Freeport passe par
              une demande aupres de l&apos;EDB, avec un business plan
              detaillant les operations prevues, les volumes, et les
              marches cibles. L&apos;agrement est generalement delivre en
              4 a 6 semaines.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9 — Secteurs prioritaires                            */}
      {/* ============================================================ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Secteurs prioritaires 2025-2026
          </h2>
          <p className="mt-3 text-slate-600">
            L&apos;EDB concentre ses efforts de promotion sur quatre
            secteurs strategiques ou Maurice dispose d&apos;avantages
            competitifs differenciants.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {prioritySectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Card key={sector.name} className="p-6">
                  <Icon className="h-8 w-8 text-blue-600" />
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {sector.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {sector.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <p className="text-sm font-bold text-amber-800">
              Pourquoi c&apos;est important pour vous
            </p>
            <p className="mt-2 text-sm text-amber-700">
              Les projets dans les secteurs prioritaires beneficient
              d&apos;un traitement accelere par l&apos;EDB, d&apos;un acces
              facilite aux incentives fiscaux et aux programmes de
              financement. Si votre activité touche à la fintech, aux
              energies renouvelables, a l&apos;economie bleue ou a
              l&apos;ICT, votre dossier sera traite en priorite.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 10 — Vanille Strategie x EDB                        */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Comment Vanille Strategie travaille avec l&apos;EDB au quotidien
          </h2>

          <div className="prose prose-slate prose-lg mt-8 max-w-none">
            <p>
              Depuis 2012, Vanille Strategie entretient une relation de
              travail etroite avec l&apos;EDB. Nous deposons entre{" "}
              <strong>30 et 50 dossiers par an</strong> -- ce qui fait de
              nous l&apos;un des cabinets les plus actifs aupres de
              l&apos;institution.
            </p>
            <p>
              Cette expérience cumulee nous donne un avantage decisif :
              nous connaissons les critères d&apos;evaluation precis des
              officiers de l&apos;EDB, les motifs de rejet les plus
              frequents, et les elements qui font la difference dans un
              dossier.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Pre-qualification du dossier",
                desc: "Avant tout depot, nous verifions que votre dossier repond a 100% des critères EDB. Zero mauvaise surprise.",
              },
              {
                title: "Business plan conforme",
                desc: "Nous redigeons un business plan au format attendu par l'EDB, avec les projections financieres requises.",
              },
              {
                title: "Suivi proactif",
                desc: "Nous suivons votre dossier a chaque etape et repondons aux demandes de complements sous 24h.",
              },
              {
                title: "Relation directe",
                desc: "Notre equipe connait personnellement les officiers de l'EDB. Pas d'intermediaire, pas de perte de temps.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border bg-white p-5"
              >
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
            <p className="text-sm font-bold">
              Resultat concret
            </p>
            <p className="mt-2 text-sm text-blue-100">
              Grace a notre preparation rigoureuse, nos dossiers ont un taux
              d&apos;approbation tres eleve et un delai moyen de traitement
              de 15 a 20 jours ouvres -- contre parfois 2 a 3 mois pour des
              dossiers mal prepares.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 11 — Contact EDB                                     */}
      {/* ============================================================ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Contacter l&apos;EDB Mauritius
          </h2>

          <Card className="mt-8 overflow-hidden">
            <div className="bg-slate-900 p-6">
              <h3 className="text-lg font-bold text-white">
                Economic Development Board of Mauritius
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Organisme officiel -- Gouvernement de Maurice
              </p>
            </div>
            <div className="divide-y p-6">
              <div className="flex items-start gap-3 pb-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Adresse
                  </p>
                  <p className="mt-0.5 text-sm text-slate-600">
                    Ground Floor, One Exchange Square
                    <br />
                    Wall Street, Ebene 72201
                    <br />
                    Republic of Mauritius
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 py-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Telephone
                  </p>
                  <p className="mt-0.5 text-sm text-slate-600">
                    +230 203 3800
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-4">
                <Globe2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Site officiel
                  </p>
                  <a
                    href="https://edbmauritius.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                  >
                    edbmauritius.org
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SOURCES                                                      */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            Sources :{" "}
            <a
              href="https://edbmauritius.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              EDB Mauritius (edbmauritius.org)
            </a>
            {" "}&middot;{" "}
            <a
              href="https://residency.mu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Portail Residency (residency.mu)
            </a>
            {" "}&middot;{" "}
            <a
              href="https://www.mra.mu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Mauritius Revenue Authority (mra.mu)
            </a>
            {" "}&middot;{" "}
            <a
              href="https://www.fscmauritius.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              FSC Mauritius
            </a>
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Cet article est fourni a titre informatif et ne constitue pas un
            conseil juridique ou fiscal. Les informations sont basees sur les
            donnees officielles disponibles en mars 2026. Contactez nos
            experts pour une analyse personnalisee de votre situation.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA FINAL                                                    */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Vous avez un projet d&apos;investissement à Maurice ?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            {founder.name}, {founder.title}, analyse votre projet
            gratuitement et vous accompagne dans toutes vos demarches
            aupres de l&apos;EDB.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 px-10 text-lg font-bold hover:bg-blue-700"
              >
                Etude de faisabilite gratuite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services/permis-residence">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 px-8 text-lg font-bold text-white hover:bg-white/20"
              >
                Voir nos services permis
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            30 a 50 dossiers EDB deposes par an depuis 2012 -- Taux
            d&apos;approbation exceptionnel
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
