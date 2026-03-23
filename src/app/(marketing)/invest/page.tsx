import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  TrendingUp,
  ShieldCheck,
  Building,
  Gem,
  ArrowRight,
  BarChart3,
  MapPin,
  Home,
  Landmark,
  Sun,
  CheckCircle2,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vanille Invest — Patrimoine, Immobilier & Investissement à Maurice",
  description:
    "Investissez intelligemment à l'Île Maurice : 0% plus-values, 0% dividendes, 6 programmes immobiliers accessibles aux étrangers. Conseil patrimonial sur mesure.",
  openGraph: {
    title: "Vanille Invest — Patrimoine, Immobilier & Investissement à Maurice",
    description:
      "Investissez intelligemment à l'Île Maurice : 0% plus-values, 0% dividendes, programmes immobiliers accessibles aux étrangers.",
    url: "https://vanillestrategie.fr/invest",
    type: "website",
  },
};

const valueProps = [
  {
    icon: TrendingUp,
    stat: "0%",
    label: "plus-values",
    description: "Aucune taxe sur les plus-values immobilières et mobilières à Maurice.",
  },
  {
    icon: Gem,
    stat: "0%",
    label: "dividendes",
    description: "Les dividendes perçus à Maurice ne sont pas imposés.",
  },
  {
    icon: Building,
    stat: "6",
    label: "programmes immobiliers",
    description: "PDS, IRS, RES, Smart City, SCS, G+2 — des schémas adaptés à chaque budget.",
  },
  {
    icon: ShieldCheck,
    stat: "Sur-mesure",
    label: "gestion patrimoniale",
    description: "Analyse patrimoniale complète, structuration et accompagnement personnalisé.",
  },
];

const services = [
  {
    href: "/invest/immobilier",
    icon: Home,
    title: "Immobilier à Maurice",
    description: "Vue d'ensemble des 6 programmes accessibles aux étrangers, fiscalité immobilière et rendements par zone.",
  },
  {
    href: "/invest/gestion-patrimoine",
    icon: ShieldCheck,
    title: "Gestion de patrimoine",
    description: "Structuration patrimoniale Franco-Mauricienne, trusts, family office. Protection et transmission du capital.",
  },
  {
    href: "/invest/gestion-actifs",
    icon: BarChart3,
    title: "Gestion d'actifs & portefeuilles",
    description: "Conseil en investissement, marchés cotés, private equity. Performance et sécurité depuis Maurice.",
  },
  {
    href: "/invest/opportunites",
    icon: Briefcase,
    title: "Opportunités en cours",
    description: "Projets immobiliers sélectionnés et audités : villas PDS, Smart City, IRS. Zones privilégiées de Maurice.",
  },
  {
    href: "/services/immobilier/pds",
    icon: Building,
    title: "Property Development Scheme (PDS)",
    description: "Le programme phare : résidence premium à partir de 375 000 USD, permis de résidence inclus.",
  },
  {
    href: "/services/immobilier/smart-city",
    icon: Sun,
    title: "Smart City Scheme",
    description: "Investir dans les villes intelligentes de Maurice : bureaux, résidences et espaces de vie modernes.",
  },
];

const opportunities = [
  {
    title: "Résidence par l'investissement",
    description: "Un achat immobilier de 375 000 USD ou plus dans un programme agréé ouvre droit au permis de résidence permanent pour toute la famille.",
    highlights: ["Permis de résidence permanent", "Regroupement familial", "Accès aux traités fiscaux"],
  },
  {
    title: "Rendement locatif attractif",
    description: "Les programmes PDS et Smart City offrent des rendements locatifs nets de 4 à 7%, portés par une demande expatriée croissante.",
    highlights: ["4–7% rendement net", "Gestion locative intégrée", "Marché en croissance"],
  },
  {
    title: "Fiscalité avantageuse",
    description: "Pas de taxe sur les plus-values, pas d'impôt sur les dividendes, pas de droits de succession — Maurice est l'une des juridictions les plus favorables au monde.",
    highlights: ["0% plus-values", "0% dividendes", "0% droits de succession"],
  },
];

export default function InvestPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/villa-luxe.jpg"
            alt="Investissement immobilier à Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-amber-300 backdrop-blur-sm">
              Vanille Invest
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-7xl leading-[1.1]">
              Investissez intelligemment,{" "}
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                en toute confiance
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Patrimoine, immobilier et investissement à Maurice — une fiscalité exceptionnelle alliée à un cadre de vie unique, avec un accompagnement sur mesure.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 px-8 h-14 text-lg font-bold shadow-lg shadow-amber-500/20"
                >
                  Demander une étude patrimoniale
                </Button>
              </Link>
              <Link href="#programmes">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 h-14 text-lg font-bold"
                >
                  Voir les programmes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />

      {/* Value Props */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((vp) => (
              <Card
                key={vp.label}
                className="p-8 border-none shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-6">
                  <vp.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-black text-slate-900">{vp.stat}</p>
                <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mt-1">
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
      <section id="programmes" className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Programmes immobiliers
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Maurice propose plusieurs schémas d&apos;acquisition immobilière pour les étrangers, chacun avec ses avantages spécifiques.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.href} href={s.href}>
                <Card className="group h-full p-8 border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-yellow-600 text-white mb-6">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-xs font-bold text-amber-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Découvrir <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunités Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Pourquoi investir à Maurice ?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Un environnement fiscal, juridique et économique parmi les plus attractifs au monde pour les investisseurs internationaux.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {opportunities.map((opp, idx) => (
              <Card
                key={opp.title}
                className="p-8 border-none shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-black text-lg mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{opp.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {opp.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {opp.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{h}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-600/10 text-amber-500 mb-8 border border-amber-500/20">
            <BarChart3 className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Demander une étude{" "}
            <br />
            <span className="text-amber-400">patrimoniale personnalisée</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Nous analysons votre situation patrimoniale et vous proposons une stratégie d&apos;investissement adaptée à vos objectifs et à votre fiscalité.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-amber-500/20 transition-all duration-300"
              >
                Demander une étude patrimoniale
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
