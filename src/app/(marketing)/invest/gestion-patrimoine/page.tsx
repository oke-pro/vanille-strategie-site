import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Shield,
  TrendingUp,
  Users,
  Globe,
  CheckCircle2,
  ArrowRight,
  Gem,
  Scale,
  Heart,
  Briefcase,
  Lock,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gestion de Patrimoine à Maurice — Structuration & Planification | Vanille Invest",
  description:
    "Structuration patrimoniale Franco-Mauricienne, trusts, family office. Optimisation fiscale, protection du capital et transmission. Accompagnement sur mesure par Didier Laroussinie.",
  openGraph: {
    title: "Gestion de Patrimoine à Maurice — Structuration & Planification | Vanille Invest",
    description:
      "Planification patrimoniale internationale, trusts mauriciens, family office. Protection et transmission de votre capital.",
    url: "https://vanillestrategie.fr/invest/gestion-patrimoine",
    type: "website",
  },
};

const piliers = [
  {
    icon: Shield,
    title: "Protection du capital",
    description:
      "Structures juridiques robustes pour protéger vos actifs contre les aléas économiques, juridiques et familiaux. Trusts mauriciens, sociétés holding, ségrégation patrimoniale.",
  },
  {
    icon: TrendingUp,
    title: "Optimisation fiscale",
    description:
      "Exploitation légale des conventions de non double imposition (notamment France-Maurice). Structuration pour minimiser la charge fiscale globale tout en restant conforme.",
  },
  {
    icon: Heart,
    title: "Transmission & succession",
    description:
      "Planification successorale anticipée. Maurice n'applique pas de droits de succession : une opportunité majeure pour transmettre votre patrimoine dans les meilleures conditions.",
  },
  {
    icon: Globe,
    title: "Diversification internationale",
    description:
      "Allocation d'actifs multi-juridictions. Immobilier mauricien, placements financiers, participations dans des entreprises locales et internationales.",
  },
];

const services = [
  {
    icon: Scale,
    title: "Audit patrimonial complet",
    description: "Cartographie exhaustive de votre patrimoine : actifs immobiliers, financiers, professionnels. Identification des risques et des opportunités d'optimisation.",
  },
  {
    icon: Briefcase,
    title: "Structuration Franco-Mauricienne",
    description: "Architecture juridique et fiscale adaptée aux résidents français s'installant à Maurice. Exploitation de la convention fiscale bilatérale.",
  },
  {
    icon: Lock,
    title: "Trusts mauriciens",
    description: "Mise en place de trusts conformes au droit mauricien pour la protection d'actifs, la planification successorale et la gestion de patrimoine familial.",
  },
  {
    icon: Users,
    title: "Family office",
    description: "Service de family office dédié pour les patrimoines importants. Coordination de tous les intervenants : avocats, notaires, banquiers, fiscalistes.",
  },
  {
    icon: Gem,
    title: "Gestion de fortune",
    description: "Conseil en allocation d'actifs, sélection de véhicules d'investissement, suivi de performance. Approche prudente et personnalisée.",
  },
  {
    icon: BarChart3,
    title: "Reporting patrimonial",
    description: "Tableaux de bord consolidés, rapports trimestriels, suivi de la valorisation de vos actifs et de votre exposition fiscale.",
  },
];

const etapes = [
  { step: 1, title: "Entretien de découverte", desc: "Échange confidentiel pour comprendre votre situation patrimoniale, vos objectifs et vos contraintes." },
  { step: 2, title: "Audit patrimonial", desc: "Analyse approfondie de tous vos actifs, passifs, flux de revenus et engagements fiscaux en France et à Maurice." },
  { step: 3, title: "Recommandations stratégiques", desc: "Présentation d'un plan patrimonial personnalisé avec plusieurs scénarios d'optimisation." },
  { step: 4, title: "Mise en oeuvre", desc: "Création des structures, transferts d'actifs, ouverture de comptes. Coordination avec tous les intervenants." },
  { step: 5, title: "Suivi continu", desc: "Revue annuelle de votre patrimoine, ajustements en fonction de l'évolution législative et de votre situation." },
];

export default function GestionPatrimoinePage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-amber-600">Accueil</Link>
            <span>/</span>
            <Link href="/invest" className="hover:text-amber-600">Vanille Invest</Link>
            <span>/</span>
            <span className="font-medium text-slate-900">Gestion de patrimoine</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/villa-luxe.jpg"
            alt="Gestion de patrimoine à Maurice"
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
              Vanille Invest — Patrimoine
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Gestion de patrimoine{" "}
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                & planification
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Structuration patrimoniale Franco-Mauricienne, trusts, family office. Protégez, optimisez et transmettez votre patrimoine avec Didier Laroussinie.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 h-14 text-lg font-bold shadow-lg shadow-amber-500/20">
                  Demander un audit patrimonial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />

      {/* 4 piliers */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Les 4 piliers de notre approche
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Une gestion patrimoniale sur mesure, construite autour de vos objectifs de vie et de votre situation internationale.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {piliers.map((p) => (
              <Card key={p.title} className="p-8 border-none shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-6">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{p.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Nos services patrimoniaux
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="flex gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Notre processus
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-300 to-slate-200 hidden lg:block" />
            <div className="space-y-12 lg:space-y-16">
              {etapes.map((item) => (
                <div key={item.step} className="relative lg:pl-24">
                  <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-white text-xs font-black ring-4 ring-white">
                    {item.step}
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {[
              { q: "À qui s'adresse la gestion de patrimoine Vanille Invest ?", a: "À tout investisseur ou expatrié souhaitant structurer son patrimoine entre la France et Maurice, quel que soit le montant. Nous adaptons notre approche à chaque profil." },
              { q: "Qu'est-ce qu'un trust mauricien ?", a: "Un trust est une structure juridique où un constituant confie des actifs à un trustee pour le bénéfice de bénéficiaires désignés. À Maurice, les trusts bénéficient d'un cadre légal solide et d'une fiscalité avantageuse." },
              { q: "Comment fonctionne la convention fiscale France-Maurice ?", a: "La convention évite la double imposition. Selon votre résidence fiscale et la nature de vos revenus, certains revenus ne sont imposés que dans un seul pays." },
              { q: "Les droits de succession sont-ils vraiment à 0% ?", a: "Oui. Maurice n'applique aucun droit de succession. Toutefois, si vous conservez des actifs en France, le droit français peut s'appliquer sur ces actifs." },
              { q: "Quel est le coût d'un audit patrimonial ?", a: "L'entretien de découverte est offert. L'audit patrimonial complet fait l'objet d'un devis personnalisé en fonction de la complexité de votre situation." },
            ].map((item, i) => (
              <details key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="flex items-center justify-between font-bold text-slate-900">
                  {item.q}
                  <ArrowRight className="h-5 w-5 transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-600/10 text-amber-500 mb-8 border border-amber-500/20">
            <Shield className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Protégez et transmettez{" "}
            <br />
            <span className="text-amber-400">votre patrimoine</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Didier Laroussinie et son équipe construisent avec vous une stratégie patrimoniale sur mesure. Groupe intégré, confidentialité totale.
          </p>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-amber-500/20">
                Demander un audit patrimonial
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
