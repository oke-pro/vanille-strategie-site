import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Zap,
  MapPin,
  DollarSign,
  CheckCircle2,
  Building2,
  Briefcase,
  Home,
  ShoppingCart,
  ArrowRight,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Smart City Maurice | Investissement Urbain Intégré",
  description: "Smart City Scheme à Maurice. Villes intelligentes mixtes (travail, loisirs, résidentiel). Investissement 375 000 USD. Permis résidence inclus. Moka Smart City, Cap Tamarin.",
};

export default function SmartCityPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <Link href="/services/immobilier" className="hover:text-blue-600">Immobilier</Link>
            <span>/</span>
            <span className="font-medium text-slate-900">Smart City</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/villa-luxe.jpg"
            alt="Smart City Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-purple-300 backdrop-blur-sm">
              Immobilier — Visionnaire
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Smart City <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">Scheme</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Villes intelligentes mixtes combinant travail, loisirs et habitat. Projets d'envergure : Moka Smart City, Cap Tamarin. Investissement dès 375 000 USD avec permis résidence.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Explorer le concept
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Overview Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                Qu'est-ce que Smart City ?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Le Smart City Scheme représente la vision future de Maurice pour l'immobilier et l'urbanisme. Ces projets transcendent le simple résidentiel : ils combinent habitat moderne, espaces de travail, commerces, loisirs et services, le tout pensé de manière intégrée et technologiquement avancée.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Contrairement aux domaines résidentiels classiques, les Smart Cities sont des écosystèmes urbains complets. Elles accueillent start-ups, services numériques, centres commerciaux, restaurants, musées et espaces verts. L'objectif : créer des environnements durables où l'on peut vivre, travailler et se divertir sans quitter le projet.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  { icon: Zap, text: "Technologie & innovation" },
                  { icon: Building2, text: "Mixité urbaine" },
                  { icon: DollarSign, text: "375 000 USD min" },
                  { icon: Home, text: "Permis résidence" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700">
                    <item.icon className="h-4 w-4" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/grand-baie.jpg"
                alt="Smart City Maurice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Details Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Conditions d'accès Smart City
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Investissement minimum",
                value: "375 000 USD",
                desc: "Pour résidentiel ou commercial. Même barème que PDS et IRS.",
              },
              {
                title: "Types d'investissement",
                value: "Variés",
                desc: "Résidences, bureaux, commerces, locaux d'activité. Diversité de produits.",
              },
              {
                title: "Permis résidence",
                value: "10 ans renouvelable",
                desc: "Investir en Smart City ouvre accès au permis Investor Permit.",
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {card.title}
                </p>
                <p className="text-3xl font-black text-purple-600 mb-4">{card.value}</p>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caractéristiques Smart City */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Caractéristiques d'une Smart City
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Lightbulb,
                title: "Infrastructure technologique avancée",
                desc: "Fibre optique, 5G, IoT (Internet of Things), systèmes domotiques, gestion énergétique intelligente.",
              },
              {
                icon: Briefcase,
                title: "Zones commerciales et de travail",
                desc: "Espaces de bureaux, co-working, incubateurs start-ups, zones artisanales pour services et petits commerces.",
              },
              {
                icon: Home,
                title: "Habitat moderne et varié",
                desc: "Studios, T2, T3, villas — tous les typologies. Conçus avec normes de durabilité élevée.",
              },
              {
                icon: ShoppingCart,
                title: "Commerces et services intégrés",
                desc: "Restaurants, cafés, épiceries fines, salons, pharmacies. Tout pour vivre sans sortir du projet.",
              },
              {
                icon: Zap,
                title: "Durabilité et écologie",
                desc: "Énergie solaire, gestion des eaux, espaces verts, transports doux (vélos, navettes électriques).",
              },
              {
                icon: TrendingUp,
                title: "Potentiel de croissance",
                desc: "Ces projets attirent les jeunes talents, entrepreneurs, digital nomads — demande croissante.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Smart City */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Avantages majeurs de Smart City
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: TrendingUp,
                title: "Potentiel de plus-value exceptionnel",
                desc: "Les smart cities attirent entreprises et talents. Demande élevée, offre limitée = appréciations significatives.",
              },
              {
                icon: Briefcase,
                title: "Revenus multiples possibles",
                desc: "Louer votre résidence, vos bureaux, votre local commercial. Diversifier vos flux de trésorerie.",
              },
              {
                icon: Home,
                title: "Environnement de vie complet",
                desc: "Travail, loisirs, services, culture tout dans le projet. Qualité de vie supérieure.",
              },
              {
                icon: Lightbulb,
                title: "Accès à l'innovation et à la tech",
                desc: "Proximité avec entrepreneurs, start-ups. Réseautage naturel et opportunités d'affaires.",
              },
              {
                icon: CheckCircle2,
                title: "Permis résidence garanti",
                desc: "Investir en Smart City facilite l'accès au permis Investor Permit pour vous et votre famille.",
              },
              {
                icon: MapPin,
                title: "Localisation stratégique",
                desc: "Les Smart Cities sont situées aux carrefours dynamiques de l'île (Moka, Cap Tamarin).",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemples de projets Smart City */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Projets Smart City en cours à Maurice
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Moka Smart City",
                location: "Moka (centre île)",
                stage: "En cours de développement",
                features: [
                  "Écosystème urbain complet",
                  "Espace de travail pour start-ups",
                  "Résidences modernes",
                  "Shopping center intégré",
                  "Parc écologique",
                ],
              },
              {
                name: "Cap Tamarin Smart City",
                location: "Cap Tamarin (ouest)",
                stage: "Phases de lancement",
                features: [
                  "Vue panoramique mer",
                  "Marina et ports de plaisance",
                  "Villas et appartements premium",
                  "Zones commerciales",
                  "Restaurants et divertissements",
                ],
              },
            ].map((project, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </p>
                <p className="text-sm font-bold text-purple-600 mb-6">
                  {project.stage}
                </p>
                <ul className="space-y-2">
                  {project.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-purple-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structuration juridique et fiscale */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Structuration pour l'investissement Smart City
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Investisseur résident étrangers",
                options: [
                  "Domestic Company (localisation île mauricienne)",
                  "Ou holding offshore GBC (si multi-projets)",
                  "Permis Investor Permit fourni",
                ],
              },
              {
                title: "Investisseur multi-projets",
                options: [
                  "Structure GBC locale (Best practice)",
                  "Holding offshore (si revente envisagée)",
                  "Convention France-Maurice optimale",
                ],
              },
              {
                title: "Fiscalité immobilière Maurice",
                options: [
                  "Plus-values : 0% (Maurice ✓)",
                  "Revenus locatifs : 15% IS",
                  "Droits achat : 10% du prix",
                ],
              },
              {
                title: "Gestion locative et comptable",
                options: [
                  "Gestion du portefeuille via BD Star",
                  "Déclarations MRA annuelles",
                  "Rapports d'audit et suivi fiscal",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.options.map((option, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Questions fréquentes Smart City
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Smart City est-il plus cher que PDS classique ?",
                a: "Investissement minimum identique (375 000 USD), mais les prix au m² peuvent être plus élevés selon la localisation et les commodités.",
              },
              {
                q: "Puis-je investir en bureau ou commerce ?",
                a: "Oui, Smart City offre résidentiel, bureaux et commerces. Diversifiez votre portefeuille immobilier à Maurice.",
              },
              {
                q: "Quel est le potentiel de revenus locatifs ?",
                a: "Résidences : 4-6% net. Bureaux : 6-8%. Commerces : 7-10%. Dépend de la localisation et des services.",
              },
              {
                q: "Le permis résidence est-il automatique ?",
                a: "L'investissement Smart City facilite l'accès au permis Investor Permit, mais l'EDB doit approuver le dossier.",
              },
              {
                q: "Smart City est-il moins risqué que PDS ?",
                a: "Risque similaire. Tous deux imposent GFA et audit promoteur. Smart City offre plus de diversité de revenus.",
              },
            ].map((item, i) => (
              <details key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="flex items-center justify-between font-bold text-slate-900">
                  {item.q}
                  <ArrowRight className="h-5 w-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            L'avenir urbain de Maurice vous attend
          </h2>
          <p className="text-lg text-purple-100 mb-8 leading-relaxed">
            Investir en Smart City, c'est miser sur la vision future de Maurice. Écosystèmes complets, potentiel de plus-value, revenus diversifiés, qualité de vie exceptionnelle.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 h-14 text-lg font-bold">
              Étudier mon projet Smart City
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
