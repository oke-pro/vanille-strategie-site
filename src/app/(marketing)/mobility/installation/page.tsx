import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Home,
  CreditCard,
  ShieldCheck,
  GraduationCap,
  Car,
  ShoppingCart,
  Clock,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  MapPin,
  Calendar,
  Plane,
  Heart,
  Phone,
  Wifi,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Accompagnement Installation à Maurice — Logement, Banque, Scolarité, Vie Quotidienne",
  description:
    "Checklist complète pour s'installer à Maurice : logement, ouverture de compte bancaire, assurance santé, scolarité des enfants, voiture, démarches administratives. On s'occupe de tout.",
  openGraph: {
    title: "S'installer à Maurice — Guide d'accompagnement complet",
    description:
      "De la recherche de logement à l'inscription scolaire, Vanille Stratégie vous accompagne dans chaque étape de votre installation à Maurice.",
    url: "https://vanillestrategie.fr/mobility/installation",
    type: "website",
  },
};

const timeline = [
  {
    period: "24 à 18 mois avant",
    icon: Calendar,
    color: "bg-teal-600",
    steps: [
      "Définir votre projet d'expatriation (objectifs, budget, durée)",
      "Premier diagnostic avec Vanille Stratégie",
      "Audit fiscal pré-départ (résidence fiscale, exit tax)",
      "Voyage de repérage recommandé (1 à 2 semaines)",
    ],
  },
  {
    period: "18 à 12 mois avant",
    icon: ShieldCheck,
    color: "bg-teal-500",
    steps: [
      "Choix du type de permis de résidence",
      "Constitution du dossier de permis",
      "Structuration patrimoniale et fiscale pré-départ",
      "Première recherche de logement à distance",
    ],
  },
  {
    period: "12 à 6 mois avant",
    icon: Home,
    color: "bg-cyan-600",
    steps: [
      "Dépôt du dossier de permis auprès de l'EDB",
      "Sélection et réservation du logement",
      "Recherche d'écoles et pré-inscription des enfants",
      "Souscription assurance santé internationale",
    ],
  },
  {
    period: "6 à 3 mois avant",
    icon: Plane,
    color: "bg-cyan-500",
    steps: [
      "Obtention du permis de résidence",
      "Organisation du déménagement international",
      "Résiliation des contrats en France (bail, énergie, téléphone)",
      "Préparation des documents administratifs (apostilles, traductions)",
    ],
  },
  {
    period: "3 mois à J-0",
    icon: MapPin,
    color: "bg-emerald-600",
    steps: [
      "Ouverture du compte bancaire mauricien",
      "Signature du bail ou acte de propriété",
      "Transfert de fonds vers Maurice",
      "Réservation du vol et logement temporaire d'arrivée",
    ],
  },
  {
    period: "Arrivée et premier mois",
    icon: CheckCircle2,
    color: "bg-emerald-500",
    steps: [
      "Enregistrement auprès de l'immigration (NID)",
      "Activation du compte bancaire et carte de débit",
      "Souscription forfait téléphone et internet fibre",
      "Inscription définitive à l'école, achat ou location de voiture",
    ],
  },
];

const services = [
  {
    icon: Home,
    title: "Logement",
    description:
      "Recherche personnalisée selon votre budget et vos critères. Location longue durée, résidence PDS, appartement ou villa. Nous visitons pour vous si nécessaire.",
    details: [
      "Sélection de biens vérifiés par notre réseau",
      "Négociation du bail et vérification juridique",
      "Quartiers recommandés selon votre profil",
      "Budget moyen : 800 à 2 500 USD/mois (location)",
    ],
  },
  {
    icon: CreditCard,
    title: "Banque",
    description:
      "Ouverture de compte bancaire auprès des meilleures banques mauriciennes. Compte personnel, compte société, carte internationale.",
    details: [
      "Accompagnement personnalisé en agence",
      "MCB, SBM, AfrAsia, Bank One — selon vos besoins",
      "Compte multi-devises disponible",
      "Délai : 1 à 3 semaines après le dépôt",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Assurance santé",
    description:
      "Couverture santé adaptée aux expatriés : assurance internationale, complémentaire locale, couverture rapatriement.",
    details: [
      "Comparatif des offres disponibles à Maurice",
      "Cliniques privées : Wellkin, C-Care, Fortis",
      "Couverture dentaire et optique incluse",
      "Tarifs compétitifs vs France",
    ],
  },
  {
    icon: GraduationCap,
    title: "Scolarité",
    description:
      "Écoles internationales francophones et anglophones. Du primaire au lycée, avec options IB et bac français.",
    details: [
      "Lycée La Bourdonnais (programme français)",
      "Northfields International High School (IB)",
      "Écoles Clavis, Lighthouse, Le Bocage",
      "Pré-inscription et accompagnement administratif",
    ],
  },
  {
    icon: Car,
    title: "Voiture",
    description:
      "Achat ou location longue durée de véhicule. Conduite à gauche, permis international, assurance auto.",
    details: [
      "Location longue durée dès 300 USD/mois",
      "Achat d'occasion : marché fiable et structuré",
      "Permis international valide 1 an, puis permis local",
      "Assurance auto obligatoire (tiers ou tous risques)",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Vie quotidienne",
    description:
      "Courses, loisirs, sport, restaurants, communauté francophone. Tout ce qu'il faut savoir pour profiter de Maurice au quotidien.",
    details: [
      "Supermarchés : Super U, Winners, Intermart",
      "Forfait mobile + fibre : 30 à 60 USD/mois",
      "Restaurants : 10 à 40 USD/personne",
      "Communauté francophone active et accueillante",
    ],
  },
];

const faq = [
  {
    q: "Combien de temps faut-il pour s'installer complètement à Maurice ?",
    a: "Comptez 12 à 24 mois entre la décision et l'installation effective. Les 6 premiers mois sont consacrés à la préparation (permis, fiscalité, logement), les 6 suivants aux démarches pratiques (déménagement, banque, école).",
  },
  {
    q: "Faut-il parler anglais pour vivre à Maurice ?",
    a: "Le français est largement parlé au quotidien : commerces, restaurants, administrations. L'anglais est la langue officielle des affaires et de l'administration, mais la majorité de la population est bilingue. Le créole mauricien est la langue courante.",
  },
  {
    q: "Quel budget prévoir pour une famille de 4 personnes ?",
    a: "Comptez entre 3 000 et 6 000 USD/mois pour un train de vie confortable : logement (1 200-2 500 USD), scolarité (300-800 USD/enfant), courses (600-1 000 USD), loisirs et divers (500-1 000 USD). Ce budget varie selon le quartier et le niveau de vie souhaité.",
  },
  {
    q: "Vanille Stratégie s'occupe de tout ?",
    a: "Oui, notre groupe intégré prend en charge l'ensemble des démarches : permis, logement, banque, scolarité, assurance, véhicule. Didier Laroussinie et son équipe coordonnent chaque étape pour que vous n'ayez qu'un seul interlocuteur.",
  },
  {
    q: "Puis-je faire un voyage de repérage avant de m'engager ?",
    a: "Absolument, et nous le recommandons fortement. Nous pouvons organiser un programme de visites sur 1 à 2 semaines : quartiers, écoles, bureaux, rencontres avec la communauté expatriée. C'est la meilleure façon de valider votre projet.",
  },
];

export default function InstallationPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-teal-600">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/mobility" className="hover:text-teal-600">
              Vanille Mobility
            </Link>
            <span>/</span>
            <span className="font-medium text-slate-900">Installation</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/lifestyle-maurice.jpg"
            alt="S'installer à Maurice — Accompagnement complet"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-teal-300 backdrop-blur-sm">
              Vanille Mobility — Installation
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              On s&apos;occupe{" "}
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                de tout
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Logement, banque, assurance, scolarité, voiture, vie quotidienne — votre installation à Maurice, étape par étape, avec un seul interlocuteur.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 px-8 h-14 text-lg font-bold shadow-lg shadow-teal-500/20"
                >
                  Planifier mon installation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent" />

      {/* Timeline */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Timeline : 24 mois avant le départ
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Une expatriation réussie se prépare en amont. Voici le calendrier idéal pour ne rien oublier.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-600 via-cyan-500 to-emerald-500 hidden lg:block" />

            <div className="space-y-8">
              {timeline.map((phase, i) => (
                <div key={i} className="relative flex gap-8">
                  <div className="hidden lg:flex flex-col items-center">
                    <div
                      className={`${phase.color} h-16 w-16 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0`}
                    >
                      <phase.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <Card className="flex-1 p-6 border-none shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`${phase.color} h-10 w-10 rounded-xl flex items-center justify-center text-white lg:hidden`}
                      >
                        <phase.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {phase.period}
                      </h3>
                    </div>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {phase.steps.map((step, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle2 className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services d'installation */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Chaque aspect de votre installation
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Nous coordonnons l&apos;ensemble des démarches grâce à notre réseau de partenaires locaux vérifiés.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="p-8 border-none shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 text-white mb-6">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-500"
                    >
                      <CheckCircle2 className="h-3 w-3 text-teal-400 mt-0.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement "On s'occupe de tout" */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-teal-600 to-cyan-600 p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Un seul interlocuteur pour toute votre installation
                </h2>
                <p className="mt-6 text-lg text-teal-100 leading-relaxed">
                  Grâce à notre groupe intégré, Didier Laroussinie et son équipe coordonnent l&apos;ensemble des démarches. Permis, fiscalité, logement, banque, école, assurance : vous n&apos;avez qu&apos;un seul point de contact.
                </p>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-8"
                    >
                      Diagnostic gratuit
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    text: "Un interlocuteur dédié joignable par WhatsApp",
                  },
                  {
                    icon: Users,
                    text: "Réseau de partenaires locaux vérifiés (agents, écoles, banques)",
                  },
                  {
                    icon: ShieldCheck,
                    text: "Vérification juridique de chaque contrat",
                  },
                  {
                    icon: Heart,
                    text: "Accompagnement humain — pas juste administratif",
                  },
                  {
                    icon: Wifi,
                    text: "Suivi en temps réel via votre espace client",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-xl bg-white/10 backdrop-blur-sm p-4"
                  >
                    <item.icon className="h-5 w-5 text-teal-200 shrink-0" />
                    <p className="text-sm font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tout ce que vous devez savoir avant de vous installer à Maurice.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-teal-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-teal-500 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900">{item.q}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-teal-600/10 text-teal-500 mb-8 border border-teal-500/20">
            <MapPin className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Prêt à franchir le pas ?{" "}
            <br />
            <span className="text-teal-400">On s&apos;occupe de tout.</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Partagez-nous votre projet — nous construisons ensemble votre plan d&apos;installation sur mesure.
          </p>
          <div className="mt-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-teal-500/20"
              >
                Planifier mon installation
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
