import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { founder } from "@/data/site";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Calculator,
  PieChart,
  Lightbulb,
  ShieldCheck,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Cpu,
  HelpCircle,
  AlertTriangle,
  Globe2,
  FileText,
  BarChart3,
  Landmark,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Comptabilité & Fiscalité Maurice — BD Star Management Services (MIPA)",
  description: "Comptabilité bistandard FR/IFRS, déclarations MRA, Transfer Pricing, autopilote fiscal. Dashboard OKE temps réel avec connecteurs AfrAsia/MCB.",
};

export default function ComptaFiscalitePage() {
  const services = [
    {
      title: "Comptabilité courante",
      icon: Calculator,
      color: "blue",
      items: ["Saisie comptable FR + IFRS", "Lettrage et rapprochement", "Déclarations TVA (VAT)", "États financiers annuels"]
    },
    {
      title: "Fiscalité",
      icon: PieChart,
      color: "indigo",
      items: ["Déclarations MRA (self-assessment)", "Analyse convention FR-MU", "Transfer Pricing (Finance Act 2025)", "Optimisation fiscale légale"]
    },
    {
      title: "Dashboard OKE",
      icon: Cpu,
      color: "cyan",
      items: ["Connecteurs AfrAsia & MCB", "12 plateformes e-commerce", "Classification automatique (85%+)", "Réconciliation bancaire intelligente"]
    },
    {
      title: "Conseil fiscal",
      icon: Lightbulb,
      color: "amber",
      items: ["Exit Tax française", "Structuration holding", "Prix de transfert", "Mobilité internationale"]
    },
    {
      title: "Audit & conformité",
      icon: ShieldCheck,
      color: "emerald",
      items: ["Audit annuel", "Due diligence financière", "Conformité CBRD/MRA", "Piste d'audit inaltérable"]
    },
    {
      title: "Supervision",
      icon: UserCheck,
      color: "slate",
      items: [`Par ${founder.name}`, "Expert-Comptable DEC", "Ex-Deloitte", "40+ ans d'expertise"]
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bureau-moderne.jpg"
            alt="Comptabilité et Fiscalité à Maurice"
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
              Services — BD Star Management Services
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Expertise Comptable <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">& Fiscalité Internationale</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Cabinet inscrit au MIPA, supervisé par Didier Laroussinie (DEC). Comptabilité bistandard FR/IFRS et pilotage en temps réel avec OKE.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Services Grid */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Une offre complète de gestion</h2>
            <p className="mt-4 text-lg text-slate-600">
              De la tenue courante à la fiscalité complexe des prix de transfert, nous assurons la sécurité et la conformité de votre groupe.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <Card
                key={s.title}
                className="group flex flex-col p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-none bg-white"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <ul className="space-y-3 flex-1">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Le standard Big Four <br /><span className="text-blue-400">à taille humaine</span></h2>
                <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                  Notre cabinet BD Star Management Services Ltd est inscrit au Mauritius Institute of Professional Accountants (MIPA). Nous appliquons la rigueur des grands cabinets internationaux avec la réactivité d&apos;un partenaire local dédié.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Supervision par un Expert-Comptable Diplômé (DEC)",
                    "Logiciels de pointe et connectivité bancaire directe",
                    "Veille fiscale permanente post-Finance Act 2025",
                    "Secret professionnel et sécurité des données"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      <span className="text-slate-200 font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/digital-nomad-maurice.jpg"
                  alt="Pilotage d'entreprise"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">OKE</div>
                    <p className="text-white font-bold">Pilotage temps réel inclus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — Notre approche comptable */}
      {/* ================================================================ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Notre approche comptable : rigueur et transparence
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Une comptabilité bistandard FR/IFRS, une piste d&apos;audit inaltérable et un pilotage en temps réel via notre dashboard OKE. Voici comment nous gérons vos comptes au quotidien.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                <Calculator className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Comptabilité bistandard FR/IFRS</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Maurice exige la tenue des comptes selon les normes IFRS (International Financial Reporting Standards). Cependant, de nombreux clients francophones ont besoin de disposer en parallèle d&apos;une comptabilité conforme au Plan Comptable Général français pour leurs obligations dans leur pays d&apos;origine, leurs investisseurs ou leur holding mère.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Notre cabinet produit les deux jeux d&apos;états financiers en parallèle, avec un rapprochement systématique des écarts de traitement (immobilisations, provisions, contrats de location IFRS 16, instruments financiers). Cette approche bistandard est rare à Maurice et constitue un avantage décisif pour les groupes opérant dans les deux juridictions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-6">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Piste d&apos;audit inaltérable</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Conformément aux meilleures pratiques internationales et aux exigences de la MRA, nous maintenons une piste d&apos;audit inaltérable pour chaque écriture comptable. Chaque transaction est horodatée, documentée et liée à sa pièce justificative numérisée.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Cette rigueur est essentielle en cas de contrôle fiscal ou d&apos;audit externe. Les auditeurs et inspecteurs peuvent retracer chaque mouvement financier du compte bancaire jusqu&apos;aux états financiers finaux, sans rupture de chaîne. Notre système de gestion documentaire cloud sécurisé garantit la conservation et l&apos;accessibilité de toutes les pièces pendant la durée légale requise (7 ans minimum à Maurice).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 mb-6">
                <BarChart3 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Reporting mensuel et analyse</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Au-delà de la simple tenue comptable, nous produisons des reportings mensuels détaillés incluant le compte de résultat, le bilan simplifié, l&apos;analyse des marges par activité, le suivi de trésorerie et les indicateurs clés de performance (KPI) adaptés à votre secteur.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Ces rapports sont disponibles en temps réel via le dashboard OKE et peuvent être exportés aux formats PDF, Excel ou transmis directement à vos actionnaires, banquiers ou investisseurs. Cette visibilité continue sur vos finances vous permet de prendre des décisions éclairées sans attendre la clôture annuelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — Fiscalité mauricienne décryptée */}
      {/* ================================================================ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Fiscalité mauricienne décryptée
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Le système fiscal de Maurice est l&apos;un des plus attractifs et des plus stables au monde. Voici les éléments clés à connaître, mis à jour post-Finance Act 2025.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Impôts sur les sociétés</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 font-black text-lg">15%</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Taux nominal d&apos;IS</h4>
                    <p className="mt-1 text-sm text-slate-600">Le taux d&apos;impôt sur les sociétés à Maurice est de 15%, uniforme pour toutes les entreprises. Il n&apos;existe pas de surtaxe, de contribution additionnelle ou de taux réduit par tranche. La simplicité du système est un atout majeur pour les investisseurs internationaux.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 font-black text-lg">3%</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Taux effectif avec Partial Exemption</h4>
                    <p className="mt-1 text-sm text-slate-600">Les GBC bénéficiant de la Partial Exemption de 80% voient leur taux effectif réduit à 3% sur les revenus de source étrangère éligibles (dividendes, intérêts, royalties, revenus de services). Ce mécanisme est soumis à des conditions strictes de substance économique.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 font-black text-lg">0%</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Dividendes et plus-values</h4>
                    <p className="mt-1 text-sm text-slate-600">Maurice ne prélève aucun impôt sur les dividendes distribués (ni à la source, ni au niveau du bénéficiaire) et aucun impôt sur les plus-values de cession de titres ou d&apos;actifs. Cette fiscalité exceptionnelle est particulièrement attractive pour les holdings et les structures d&apos;investissement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Autres impôts et taxes</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                    <Landmark className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">TVA (VAT) — 15%</h4>
                    <p className="mt-1 text-sm text-slate-600">La TVA mauricienne est de 15% et s&apos;applique à la plupart des biens et services. L&apos;enregistrement est obligatoire au-delà de MUR 6 millions de chiffre d&apos;affaires annuel. Les exportations de services sont exonérées de TVA, ce qui profite aux sociétés de consulting et de services internationaux.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Fair Share Contribution (2025)</h4>
                    <p className="mt-1 text-sm text-slate-600">Introduite par le Finance Act 2025, cette contribution s&apos;applique aux entreprises dont le groupe consolidé dépasse EUR 750M de chiffre d&apos;affaires. Elle vise à porter le taux effectif à 15% minimum, en ligne avec le Pilier 2 de l&apos;OCDE. Les PME ne sont pas concernées.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Pas de droits de succession</h4>
                    <p className="mt-1 text-sm text-slate-600">Maurice n&apos;applique aucun droit de succession ni impôt sur la fortune (ISF/IFI). La transmission de patrimoine s&apos;effectue sans taxation, faisant de Maurice une juridiction privilégiée pour la planification successorale et patrimoniale internationale.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — Convention fiscale France-Maurice */}
      {/* ================================================================ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-blue-800 mb-6">
                  <Globe2 className="h-4 w-4" /> Convention bilatérale
                </span>
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                  Convention fiscale France-Maurice : guide pratique
                </h2>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  La convention fiscale entre la France et Maurice, signée le 11 décembre 1980 et amendée par avenant en 2011, est la pierre angulaire de toute structuration franco-mauricienne. Voici les points essentiels.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Résidence fiscale et élimination de la double imposition</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  La convention prévoit des critères de départage en cas de double résidence fiscale (tie-breaker rules). Une personne physique est considérée comme résidente de l&apos;État où elle dispose d&apos;un foyer d&apos;habitation permanent, puis de son centre d&apos;intérêts vitaux, puis de son séjour habituel, et enfin de sa nationalité. Pour les sociétés, c&apos;est le lieu de direction effective qui détermine la résidence.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  L&apos;élimination de la double imposition se fait par la méthode du crédit d&apos;impôt : la France accorde un crédit d&apos;impôt égal à l&apos;impôt payé à Maurice, dans la limite de l&apos;impôt français correspondant aux revenus concernés. Ce mécanisme garantit qu&apos;un même revenu n&apos;est pas imposé deux fois.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Retenues à la source</h3>
                <div className="space-y-4 text-slate-600">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-500 shrink-0" />
                    <span><strong>Dividendes :</strong> retenue limitée à 5% si le bénéficiaire effectif détient au moins 10% du capital, 15% dans les autres cas. À Maurice, les dividendes ne sont pas imposés, ce qui rend ce mécanisme particulièrement favorable.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-500 shrink-0" />
                    <span><strong>Intérêts :</strong> retenue à la source limitée à 15%. Les intérêts payés à un État ou à une banque publique sont exonérés. Cette disposition est pertinente pour les structures de financement intra-groupe.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-500 shrink-0" />
                    <span><strong>Redevances (royalties) :</strong> retenue limitée à 15%. Concerne les paiements pour l&apos;utilisation de droits d&apos;auteur, brevets, marques et savoir-faire technique. Les structures de propriété intellectuelle doivent démontrer une substance réelle à Maurice.</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Exit Tax française (article 167 bis CGI)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  L&apos;Exit Tax est un sujet majeur pour les entrepreneurs français s&apos;expatriant à Maurice. Elle s&apos;applique lors du transfert de résidence fiscale hors de France si vous détenez des participations dont la valeur totale dépasse EUR 800 000 ou représentant plus de 50% d&apos;une société.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  La plus-value latente est constatée à la date du transfert et l&apos;impôt est calculé, mais son paiement peut être différé sous conditions (sursis automatique vers un État membre de l&apos;UE, sursis sur demande vers un pays ayant une convention d&apos;assistance administrative comme Maurice). Le sursis prend fin en cas de cession effective des titres dans les 5 ans suivant le transfert (2 ans pour les participations inférieures à 2,57% du capital).
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Notre cabinet réalise le calcul précis de l&apos;Exit Tax, prépare les déclarations françaises nécessaires (formulaire 2074-ETD) et met en place la stratégie optimale pour gérer cette contrainte. La convention fiscale France-Maurice prévoit les mécanismes nécessaires au sursis de paiement.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Établissement stable et prix de transfert</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  La notion d&apos;établissement stable (Permanent Establishment) est centrale dans la convention. Une société mauricienne qui opère en France sans y disposer d&apos;un bureau fixe, d&apos;un agent dépendant ou d&apos;un chantier de plus de 6 mois n&apos;est imposable qu&apos;à Maurice. Il est crucial de structurer les opérations pour éviter la création involontaire d&apos;un établissement stable en France.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Les transactions entre sociétés liées (France-Maurice) doivent respecter le principe de pleine concurrence (arm&apos;s length). Nous préparons la documentation de prix de transfert conforme aux standards BEPS et aux exigences respectives de la DGFIP française et de la MRA mauricienne, évitant ainsi les risques de redressement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — FAQ comptabilité & fiscalité */}
      {/* ================================================================ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Questions fréquentes — Comptabilité & Fiscalité à Maurice
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Les réponses de Didier Laroussinie, Expert-Comptable, aux interrogations les plus courantes.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Quelles sont les obligations comptables d\u2019une société à Maurice ?",
                a: "Toute société enregistrée à Maurice doit tenir une comptabilité conforme aux normes IFRS et déposer ses états financiers annuels auprès du CBRD dans les 28 jours suivant l\u2019Assemblée Générale. Les déclarations fiscales (Corporate Tax Return) doivent être déposées auprès de la MRA dans les 6 mois suivant la clôture de l\u2019exercice. Pour les GBC, un audit annuel est obligatoire sans exception. Pour les Domestic Companies, l\u2019audit est requis si le chiffre d\u2019affaires dépasse MUR 50 millions ou les actifs totaux dépassent MUR 100 millions."
              },
              {
                q: "Comment fonctionne la TVA (VAT) à Maurice ?",
                a: "La TVA mauricienne est de 15% et s\u2019applique à la plupart des biens et services fournis à Maurice. L\u2019enregistrement à la TVA est obligatoire lorsque le chiffre d\u2019affaires dépasse MUR 6 millions sur les 12 derniers mois ou que l\u2019on anticipe ce dépassement. Les exportations de services (services rendus à des clients hors Maurice) sont exonérées de TVA (zero-rated), ce qui est un avantage significatif pour les sociétés de consulting, de services IT ou de trading international. Nous assurons le dépôt trimestriel des déclarations de TVA auprès de la MRA."
              },
              {
                q: "Peut-on déduire les frais de déplacement et de vie à Maurice ?",
                a: "Oui, les frais professionnels engagés dans l\u2019exercice de l\u2019activité sont déductibles de l\u2019impôt sur les sociétés : déplacements professionnels, loyer du bureau, salaires, frais de représentation, véhicule de société, etc. Les critères de déductibilité sont similaires à ceux appliqués en France : les dépenses doivent être engagées dans l\u2019intérêt de la société, justifiées par des pièces comptables et d\u2019un montant raisonnable. Les frais personnels du dirigeant ne sont pas déductibles et constituent un avantage en nature imposable."
              },
              {
                q: "Comment se passe un contrôle fiscal de la MRA ?",
                a: "La Mauritius Revenue Authority (MRA) peut effectuer des contrôles fiscaux dans les 3 ans suivant le dépôt de la déclaration (7 ans en cas de fraude présumée). Le contrôle prend généralement la forme d\u2019une demande écrite de documents et de clarifications, suivie éventuellement d\u2019une visite sur site. Notre cabinet assiste nos clients à chaque étape du contrôle : préparation des documents, réponse aux questionnaires, représentation devant la MRA et, le cas échéant, négociation ou contestation des redressements. Notre piste d\u2019audit inaltérable facilite considérablement ces contrôles."
              },
              {
                q: "Qu\u2019est-ce que le Tax Residence Certificate (TRC) et comment l\u2019obtenir ?",
                a: "Le Tax Residence Certificate est un document délivré par la MRA attestant que votre société est résidente fiscale de Maurice. Il est indispensable pour bénéficier des conventions fiscales signées par Maurice (47 traités en vigueur). L\u2019obtention du TRC nécessite de démontrer que la société est effectivement gérée et contrôlée depuis Maurice (substance requirements). Nous préparons chaque année le dossier de demande de TRC pour nos clients GBC et assurons son renouvellement."
              },
              {
                q: "Quelle est la différence entre le système fiscal français et mauricien ?",
                a: "Les différences sont majeures : Maurice applique un taux unique de 15% vs. 25% (ou 26,5%) en France ; Maurice n\u2019impose pas les dividendes ni les plus-values vs. PFU à 30% en France ; pas de droits de succession à Maurice vs. barème progressif jusqu\u2019à 45% en France ; pas d\u2019ISF/IFI à Maurice ; TVA identique à 15% vs. 20% en France. En revanche, la France offre davantage de crédits d\u2019impôt (CIR, CICE) et de régimes spéciaux. Notre expertise bilatérale nous permet d\u2019optimiser la structuration entre les deux juridictions."
              },
              {
                q: "Comment gérer la comptabilité d\u2019une holding avec des filiales dans plusieurs pays ?",
                a: "Notre cabinet gère régulièrement des structures multi-pays avec Maurice comme siège de la holding. Nous assurons la consolidation des comptes selon les normes IFRS, la gestion des prix de transfert entre les entités du groupe, les déclarations pays par pays (CbCR) si applicable, et la coordination avec les auditeurs locaux dans chaque juridiction. Le dashboard OKE centralise la vue consolidée de toutes les entités, avec des connecteurs bancaires multi-pays et une vision en temps réel de la trésorerie du groupe."
              },
              {
                q: "Est-il possible de récupérer la TVA sur les achats professionnels ?",
                a: "Oui, si votre société est enregistrée à la TVA à Maurice, vous pouvez récupérer la TVA d\u2019amont (input VAT) sur tous les achats et dépenses professionnels éligibles. Le mécanisme est similaire à celui pratiqué en France : la TVA collectée sur vos ventes est diminuée de la TVA payée sur vos achats, et la différence est versée à la MRA (ou remboursée si la TVA d\u2019amont est supérieure). Les déclarations de TVA sont trimestrielles et nous les préparons intégralement pour nos clients."
              }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="flex items-start gap-3 text-lg font-bold text-slate-900">
                  <HelpCircle className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" />
                  {item.q}
                </h3>
                <p className="mt-4 ml-9 text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — Dashboard OKE */}
      {/* ================================================================ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-bold text-cyan-800 mb-6">
                <Zap className="h-4 w-4" /> Technologie propriétaire
              </span>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                Dashboard <span className="text-blue-600">OKE</span> : votre cockpit financier
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                OKE est notre plateforme de pilotage financier en temps réel, développée en interne pour offrir à nos clients une visibilité continue sur leurs finances. Connectée directement à vos comptes bancaires mauriciens et à vos plateformes e-commerce, elle automatise la collecte des données et accélère le traitement comptable.
              </p>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Grâce à des algorithmes de classification automatique entraînés sur des milliers de transactions, OKE catégorise automatiquement plus de 85% de vos opérations bancaires, réduisant drastiquement les délais de saisie comptable et les risques d&apos;erreur.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Connecteurs bancaires directs</h3>
                    <p className="mt-1 text-sm text-slate-600">Connexion sécurisée avec AfrAsia Bank, MCB et SBM pour l&apos;import automatique des relevés bancaires multi-devises. Les transactions sont récupérées quotidiennement et pré-classifiées en temps réel.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">12 plateformes e-commerce</h3>
                    <p className="mt-1 text-sm text-slate-600">Intégration native avec Shopify, WooCommerce, Amazon, Stripe, PayPal et 7 autres plateformes pour une réconciliation automatique des ventes, commissions et remboursements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                    <PieChart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Classification automatique 85%+</h3>
                    <p className="mt-1 text-sm text-slate-600">Notre algorithme de machine learning classifie automatiquement plus de 85% des transactions bancaires dans les bons comptes comptables. Les 15% restants sont traités manuellement par nos comptables avec une validation systématique.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Alertes et reporting automatique</h3>
                    <p className="mt-1 text-sm text-slate-600">Alertes automatiques en cas d&apos;anomalie (solde bas, transaction inhabituelle, échéance fiscale), rapports mensuels générés automatiquement, et export aux formats PDF/Excel pour vos actionnaires et partenaires.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "85%+", label: "Transactions classifiées automatiquement" },
                { value: "12", label: "Plateformes e-commerce connectées" },
                { value: "J+1", label: "Import bancaire quotidien" },
                { value: "24/7", label: "Accès dashboard temps réel" },
                { value: "3", label: "Banques mauriciennes connectées" },
                { value: "0", label: "Installation requise (100% cloud)" },
              ].map((stat, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center hover:bg-white hover:shadow-md transition-all">
                  <p className="text-3xl font-black text-blue-600">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles liés */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-900">Articles liés</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { href: "/ressources/blog/transfer-pricing-maurice-2025", title: "Transfer Pricing à Maurice", desc: "Règles de prix de transfert post-Finance Act 2025 : obligations, seuils et documentation." },
              { href: "/ressources/blog/substance-requirements-maurice", title: "Substance Requirements", desc: "Critères de substance économique pour les sociétés GBC à Maurice." },
              { href: "/ressources/blog/devises-mur-conversion-maurice", title: "Gestion des devises à Maurice", desc: "Taux de change, comptes multi-devises et stratégies de conversion MUR." },
            ].map((a) => (
              <Link key={a.href} href={a.href}>
                <div className="group rounded-xl border bg-white p-4 transition-all hover:shadow-md hover:border-blue-300">
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-600">{a.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">{a.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Parlons de votre gestion</h2>
          <p className="mt-4 text-xl text-slate-600">
            Obtenez un devis personnalisé adapté à votre volume d&apos;activité et vos besoins spécifiques.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10 h-14 text-lg font-bold">
                Obtenir mon devis
              </Button>
            </Link>
            <Link href="/ressources/simulateur-fiscal">
              <Button size="lg" variant="outline" className="px-10 h-14 text-lg font-bold">
                Simulateur fiscal
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Première consultation offerte par notre Expert-Comptable.
          </p>
        </div>
      </section>
    </main>
  );
}
