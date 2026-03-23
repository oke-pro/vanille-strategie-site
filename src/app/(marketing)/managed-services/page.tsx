import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  TrendingDown,
  Globe2,
  Clock,
  Award,
  ArrowRight,
  Calculator,
  Monitor,
  Users,
  FileText,
  Headphones,
  CheckCircle2,
  Briefcase,
  BarChart3,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vanille Managed Services — Externalisation BPO depuis Maurice",
  description:
    "Externalisez comptabilité, IT, RH et back-office depuis Maurice. Équipes francophones qualifiées, jusqu'à 60% d'économies, fuseau GMT+4 aligné sur l'Europe.",
  openGraph: {
    title: "Vanille Managed Services — Externalisation BPO depuis Maurice",
    description:
      "Externalisez comptabilité, IT, RH et back-office depuis Maurice. Équipes francophones qualifiées, jusqu'à 60% d'économies.",
    url: "https://vanillestrategie.fr/managed-services",
    type: "website",
  },
};

const valueProps = [
  {
    icon: TrendingDown,
    stat: "60%",
    label: "d'économies",
    description: "Réduction de vos coûts opérationnels grâce à l'externalisation depuis Maurice.",
  },
  {
    icon: Globe2,
    stat: "FR/EN",
    label: "francophone natif",
    description: "Équipes bilingues français-anglais, formées aux normes européennes.",
  },
  {
    icon: Clock,
    stat: "GMT+4",
    label: "overlap Europe",
    description: "Décalage de seulement 2h avec Paris — collaboration fluide en temps réel.",
  },
  {
    icon: Award,
    stat: "MIPA",
    label: "qualité certifiée",
    description: "Professionnels inscrits au Mauritius Institute of Professional Accountants.",
  },
];

const services = [
  {
    icon: Calculator,
    title: "Externalisation comptable",
    description: "Tenue comptable, saisie, rapprochements, déclarations fiscales — normes IFRS (normes comptables internationales) et françaises, suivi via le dashboard OKE.",
    href: "/managed-services/externalisation-comptable",
  },
  {
    icon: Monitor,
    title: "Support IT & Helpdesk",
    description: "Helpdesk N1/N2, administration systèmes, monitoring infrastructure — support en français de 6h à 20h (heure Paris).",
    href: "/managed-services/support-it",
  },
  {
    icon: Users,
    title: "RH & Paie déléguées",
    description: "Gestion de la paie, administration du personnel, déclarations sociales et suivi des absences — pour vos entités françaises et mauriciennes.",
    href: "/managed-services/rh-paie",
  },
  {
    icon: FileText,
    title: "Secrétariat & Back-office",
    description: "Traitement de documents, data entry, gestion du courrier, facturation et relances clients.",
    href: "/managed-services/back-office",
  },
  {
    icon: Headphones,
    title: "Gestion de la relation client",
    description: "Accueil téléphonique, support client multicanal, traitement des réclamations — en français et en anglais.",
    href: "/managed-services/relation-client",
  },
];

const sellingPoints = [
  {
    title: "Équipe bilingue qualifiée",
    description: "Nos collaborateurs à Maurice sont francophones natifs, formés aux normes comptables internationales (IFRS) et françaises. Recrutés localement, ils bénéficient d'un encadrement direct par nos experts.",
    highlights: ["Français natif", "Anglais courant", "Formation continue"],
  },
  {
    title: "Fuseau horaire compatible",
    description: "GMT+4, soit seulement 2 heures de décalage avec Paris (été comme hiver). Vos équipes à Maurice travaillent en même temps que vos bureaux européens — pas de délai, pas de friction.",
    highlights: ["2h de décalage avec Paris", "6h–20h heure Paris couvert", "Réunions en temps réel"],
  },
  {
    title: "Qualité certifiée MIPA",
    description: "BD Star Management Services est inscrit au Mauritius Institute of Professional Accountants (MIPA). Nos process sont audités et nos équipes suivent un plan de formation continue obligatoire.",
    highlights: ["Inscription MIPA", "Process audités", "Formation continue"],
  },
  {
    title: "Intégration OKE Dashboard",
    description: "Toutes les prestations sont pilotées via le dashboard OKE — suivi en temps réel, documents partagés, reporting automatisé. Vous gardez la visibilité totale sur vos opérations externalisées.",
    highlights: ["Suivi temps réel", "Documents partagés", "Reporting automatisé"],
  },
];

export default function ManagedServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bureau-moderne.jpg"
            alt="Externalisation BPO depuis Maurice — Vanille Managed Services"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-purple-300 backdrop-blur-sm">
              Vanille Managed Services
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-7xl leading-[1.1]">
              Externalisez{" "}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
                sans compromis
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Comptabilité, IT, RH et back-office — externalisez vos fonctions support depuis Maurice avec des équipes francophones qualifiées, à des coûts maîtrisés.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 px-8 h-14 text-lg font-bold shadow-lg shadow-purple-500/20"
                >
                  Demander un devis personnalisé
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 h-14 text-lg font-bold"
                >
                  Nos prestations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent" />

      {/* Value Props */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((vp) => (
              <Card
                key={vp.label}
                className="p-8 border-none shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 mb-6">
                  <vp.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-black text-slate-900">{vp.stat}</p>
                <p className="text-sm font-bold text-purple-600 uppercase tracking-widest mt-1">
                  {vp.label}
                </p>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {vp.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Nos prestations BPO
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Des services externalisés depuis Maurice, opérés par nos équipes en propre — groupe intégré, qualité contrôlée.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.title} href={s.href}>
                <Card className="group h-full p-8 border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 text-white mb-6">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-bold text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Selling Points */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Pourquoi Maurice pour votre BPO ?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Maurice combine talent francophone, fuseau horaire compatible et infrastructure moderne — un choix stratégique pour l&apos;externalisation.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {sellingPoints.map((sp) => (
              <Card
                key={sp.title}
                className="p-8 border-none shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-slate-900">{sp.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {sp.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {sp.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-purple-500 shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{h}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                Un groupe{" "}
                <br />
                <span className="text-purple-600 underline decoration-purple-100 underline-offset-8">
                  intégré
                </span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Vanille Managed Services s&apos;appuie sur les ressources du groupe Vanille Stratégie et de BD Star Management Services à Maurice. Pas de prestataire tiers, pas de chaîne de sous-traitance — vos opérations sont gérées en interne par nos propres équipes.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { text: "Équipes en propre à Maurice", icon: Users },
                  { text: "Encadrement par nos experts", icon: Award },
                  { text: "Dashboard OKE temps réel", icon: Zap },
                  { text: "Reporting mensuel détaillé", icon: BarChart3 },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 transition-colors hover:shadow-md"
                  >
                    <item.icon className="h-4 w-4 text-purple-500" />
                    <span className="text-sm font-bold text-slate-700 leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-black text-purple-600 uppercase tracking-widest text-sm hover:gap-4 transition-all"
                >
                  Discuter de votre projet <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/coworking.jpg"
                alt="Équipe Vanille Managed Services à Maurice"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                <p className="text-white font-medium text-lg italic leading-relaxed">
                  &quot;Des coûts réduits de 55%, une qualité identique, et une disponibilité impressionnante.&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-black text-xs">
                    FM
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">Frédéric Meslin</p>
                    <p className="text-white/70 text-xs">Directeur Financier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-purple-600/10 text-purple-500 mb-8 border border-purple-500/20">
            <Briefcase className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Demander un devis{" "}
            <br />
            <span className="text-purple-400">personnalisé</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Décrivez vos besoins en externalisation — nous vous proposons une solution sur mesure avec un chiffrage transparent, sans engagement.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-purple-500/20 transition-all duration-300"
              >
                Demander un devis personnalisé
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
            Réponse sous 24h ouvrées · Confidentialité Totale
          </p>
        </div>
      </section>
    </main>
  );
}
