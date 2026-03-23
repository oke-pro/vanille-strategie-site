import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2,
  MapPin,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sun,
  Home,
  Gem,
  Eye,
  Calendar,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Opportunités Immobilières à Maurice — Projets en Cours | Vanille Invest",
  description:
    "Découvrez les projets immobiliers disponibles à Maurice : villas PDS, appartements Smart City, résidences IRS. Zones privilégiées et rendements attractifs. Contactez Didier Laroussinie.",
  openGraph: {
    title: "Opportunités Immobilières à Maurice — Projets en Cours | Vanille Invest",
    description:
      "Projets immobiliers sélectionnés à Maurice. Villas, appartements, résidences hôtelières. Accompagnement complet par Vanille Stratégie.",
    url: "https://vanillestrategie.fr/invest/opportunites",
    type: "website",
  },
};

const projets = [
  {
    icon: Building2,
    titre: "Villas PDS — Grand Baie",
    programme: "PDS",
    zone: "Grand Baie, Nord",
    type: "Villas 3 à 5 chambres",
    budget: "À partir de 450 000 USD",
    livraison: "2026-2027",
    points: [
      "Complexe résidentiel sécurisé avec piscine commune",
      "Permis de résidence inclus",
      "Rendement locatif estimé 5-6%",
      "Garantie financière d'achèvement",
    ],
  },
  {
    icon: Sun,
    titre: "Appartements Smart City — Moka",
    programme: "Smart City",
    zone: "Moka, Centre",
    type: "Appartements 2 à 4 chambres",
    budget: "À partir de 380 000 USD",
    livraison: "2026",
    points: [
      "Au coeur du business hub de Maurice",
      "Écoles internationales à proximité",
      "Permis de résidence inclus",
      "Espaces de coworking et commerces intégrés",
    ],
  },
  {
    icon: Landmark,
    titre: "Résidence IRS — Bel Ombre",
    programme: "IRS",
    zone: "Bel Ombre, Sud",
    type: "Villas de prestige 4 à 6 chambres",
    budget: "À partir de 1 200 000 USD",
    livraison: "Disponible immédiatement",
    points: [
      "Domaine avec golf 18 trous",
      "Accès plage privée et marina",
      "Conciergerie haut de gamme",
      "Rendement locatif premium",
    ],
  },
  {
    icon: Home,
    titre: "Appartements G+2 — Tamarin",
    programme: "Ground+2",
    zone: "Tamarin, Ouest",
    type: "Appartements 1 à 3 chambres",
    budget: "À partir de 180 000 USD",
    livraison: "2026",
    points: [
      "Pas de seuil minimum EDB",
      "Idéal premier investissement",
      "Communauté expatriée francophone",
      "Proximité surf et nature",
    ],
  },
  {
    icon: Gem,
    titre: "Penthouse PDS — Rivière Noire",
    programme: "PDS",
    zone: "Rivière Noire, Ouest",
    type: "Penthouses 3 chambres avec rooftop",
    budget: "À partir de 650 000 USD",
    livraison: "2027",
    points: [
      "Vue mer panoramique",
      "Finitions ultra premium",
      "Permis de résidence inclus",
      "Gestion locative clé en main",
    ],
  },
  {
    icon: Eye,
    titre: "Unités hôtelières IHS — Nord",
    programme: "IHS",
    zone: "Grand Baie, Nord",
    type: "Suites hôtelières",
    budget: "À partir de 350 000 USD",
    livraison: "Disponible immédiatement",
    points: [
      "Rendement garanti par l'opérateur",
      "Gestion entièrement déléguée",
      "Occupation personnelle possible (45j/an)",
      "Accès résidence sous conditions",
    ],
  },
];

const zones = [
  {
    nom: "Grand Baie & Nord",
    description: "Le coeur touristique de Maurice. Restaurants, vie nocturne, plages iconiques. Forte demande locative toute l'année.",
    atouts: ["Tourisme", "Vie nocturne", "Plages", "Forte demande locative"],
  },
  {
    nom: "Tamarin & Ouest",
    description: "La côte préférée des expatriés français. Surf, dauphins, couchers de soleil. Ambiance village avec tous les services.",
    atouts: ["Communauté francophone", "Nature", "Surf", "Cadre familial"],
  },
  {
    nom: "Moka & Centres d'affaires",
    description: "Le nouveau pôle économique de Maurice. Smart Cities, écoles internationales, connexion autoroutière.",
    atouts: ["Business hub", "Écoles", "Modernité", "Croissance rapide"],
  },
  {
    nom: "Bel Ombre & Sud",
    description: "Le luxe absolu. Grands domaines IRS avec golf, marina et plages préservées. Clientèle ultra premium.",
    atouts: ["Ultra luxe", "Golf", "Plages préservées", "Exclusivité"],
  },
];

export default function OpportunitesPage() {
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
            <span className="font-medium text-slate-900">Opportunités</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/villa-luxe.jpg"
            alt="Opportunités immobilières à Maurice"
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
              Vanille Invest — Opportunités
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Opportunités{" "}
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                immobilières en cours
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Projets sélectionnés par Didier Laroussinie et son équipe. Chaque opportunité est auditée : promoteur, garanties, emplacement, potentiel de rendement.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 h-14 text-lg font-bold shadow-lg shadow-amber-500/20">
                  Recevoir les opportunités
                </Button>
              </Link>
              <Link href="#projets">
                <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 h-14 text-lg font-bold">
                  Voir les projets
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />

      {/* Projets */}
      <section id="projets" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Projets sélectionnés
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Ces projets ont été audités et validés par notre équipe. Les budgets indiqués sont des fourchettes de départ — contactez-nous pour un devis personnalisé.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projets.map((p) => (
              <Card key={p.titre} className="p-8 border-none shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-yellow-600 text-white">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 uppercase tracking-wider">
                    {p.programme}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{p.titre}</h3>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="h-4 w-4 text-amber-500 shrink-0" />
                    {p.zone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Home className="h-4 w-4 text-amber-500 shrink-0" />
                    {p.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Calendar className="h-4 w-4 text-amber-500 shrink-0" />
                    Livraison : {p.livraison}
                  </div>
                </div>

                <p className="mt-4 text-lg font-black text-amber-600">{p.budget}</p>

                <ul className="mt-4 space-y-2 flex-1">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link href="/contact" className="flex items-center gap-1 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors">
                    Demander plus d&apos;informations <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zones privilégiées */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Zones privilégiées
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Maurice offre une diversité de cadres de vie remarquable. Chaque zone a sa personnalité et son potentiel d&apos;investissement.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {zones.map((z) => (
              <Card key={z.nom} className="p-8 border-none bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 mb-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{z.nom}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{z.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {z.atouts.map((a) => (
                    <span key={a} className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                      {a}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Comment accéder à ces opportunités ?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "Prenez rendez-vous", desc: "Un entretien confidentiel avec Didier Laroussinie pour comprendre vos objectifs et votre budget." },
              { step: "02", title: "Recevez une sélection personnalisée", desc: "Nous vous présentons les projets les plus adaptés à votre profil, avec un dossier complet pour chacun." },
              { step: "03", title: "Visitez et investissez", desc: "Organisation de visites sur site ou virtuelles, puis accompagnement complet jusqu'à la signature et au-delà." },
            ].map((item) => (
              <Card key={item.step} className="p-8 border-none shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <p className="text-4xl font-black text-amber-600/20">{item.step}</p>
                <h3 className="text-xl font-bold text-slate-900 mt-2">{item.title}</h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
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
              { q: "Les prix affichés sont-ils définitifs ?", a: "Les budgets indiqués sont des fourchettes de départ. Le prix final dépend du lot choisi, des finitions et des options. Nous vous fournissons un devis détaillé sur demande." },
              { q: "Puis-je visiter les projets à distance ?", a: "Oui. Nous organisons des visites virtuelles en visioconférence avec présentation détaillée du projet, des plans et de l'environnement." },
              { q: "Comment sont sélectionnés les projets ?", a: "Chaque projet est audité : solidité financière du promoteur, garantie d'achèvement, qualité de l'emplacement, potentiel de rendement et conformité réglementaire." },
              { q: "Peut-on financer l'achat par crédit ?", a: "Oui. Nous travaillons avec des banques mauriciennes qui proposent des financements aux non-résidents, généralement jusqu'à 70% du prix d'acquisition." },
              { q: "Y a-t-il des frais de service ?", a: "Notre accompagnement fait l'objet d'honoraires transparents, présentés en amont. Aucun frais caché, aucune rétrocommission non déclarée." },
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
            <TrendingUp className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Votre prochaine opportunité{" "}
            <br />
            <span className="text-amber-400">vous attend</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Prenez rendez-vous avec Didier Laroussinie pour recevoir une sélection personnalisée de projets adaptés à vos objectifs. Groupe intégré, accompagnement de A à Z.
          </p>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-amber-500/20">
                Prendre rendez-vous
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
