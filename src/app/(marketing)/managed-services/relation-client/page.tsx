import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Headphones,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Phone,
  MessageSquare,
  Mail,
  Globe2,
  Award,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Gestion de la relation client depuis Maurice — Vanille Managed Services",
  description:
    "Accueil téléphonique, support client multicanal (téléphone, email, chat), traitement des réclamations — en français et en anglais depuis Maurice.",
  openGraph: {
    title:
      "Gestion de la relation client depuis Maurice — Vanille Managed Services",
    description:
      "Support client multicanal francophone et anglophone depuis Maurice. Accueil téléphonique, email, chat, traitement des réclamations.",
    url: "https://vanillestrategie.fr/managed-services/relation-client",
    type: "website",
  },
};

const services = [
  {
    icon: Phone,
    title: "Accueil téléphonique",
    desc: "Prise d'appels entrants en français et anglais, filtrage, qualification et transfert. Script personnalisé selon votre charte, prise de messages et rappels planifiés.",
  },
  {
    icon: Mail,
    title: "Support email",
    desc: "Traitement des demandes entrantes par email, réponse dans les délais contractuels, catégorisation et routage intelligent. Modèles de réponse validés par vos soins.",
  },
  {
    icon: MessageSquare,
    title: "Chat en direct",
    desc: "Gestion du chat en temps réel sur votre site web ou vos plateformes de messaging. Réponses rapides, escalade structurée et satisfaction client mesurée.",
  },
  {
    icon: Shield,
    title: "Traitement des réclamations",
    desc: "Prise en charge des réclamations, investigation, résolution et suivi. Process de médiation et escalade vers vos équipes quand nécessaire. Reporting sur les causes récurrentes.",
  },
  {
    icon: Globe2,
    title: "Bilingue français-anglais",
    desc: "Nos agents sont francophones natifs avec un anglais courant. Capacité à servir vos clients internationaux sans barrière linguistique.",
  },
  {
    icon: Zap,
    title: "Intégration CRM",
    desc: "Nos agents travaillent directement dans votre CRM (Salesforce, HubSpot, Freshdesk, etc.). Historique client unifié, traçabilité complète de chaque interaction.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Analyse de vos parcours client",
    desc: "Cartographie de vos canaux de contact, analyse des volumes, identification des typologies de demandes et des points de friction.",
  },
  {
    step: "02",
    title: "Création des scripts et procédures",
    desc: "Rédaction des scripts d'accueil, des arbres de décision et des procédures d'escalade. Validation conjointe pour garantir la cohérence avec votre image de marque.",
  },
  {
    step: "03",
    title: "Formation et montée en compétence",
    desc: "Formation approfondie de l'équipe dédiée sur vos produits, services et culture d'entreprise. Phase d'écoute et de double écoute avant mise en autonomie.",
  },
  {
    step: "04",
    title: "Déploiement progressif",
    desc: "Prise en charge progressive des flux par canal : téléphone, email puis chat. Montée en charge contrôlée avec suivi quotidien de la qualité.",
  },
  {
    step: "05",
    title: "Pilotage et optimisation",
    desc: "Reporting hebdomadaire sur les KPI (temps de réponse, résolution au premier contact, CSAT). Ajustements continus des scripts et des process.",
  },
];

const guarantees = [
  {
    icon: Clock,
    title: "Couverture étendue",
    desc: "De 6h à 20h heure Paris grâce au fuseau GMT+4. Option 24/7 disponible pour les services critiques.",
  },
  {
    icon: BarChart3,
    title: "KPI mesurés",
    desc: "Taux de décroché > 95%, temps de réponse email < 2h, CSAT > 90%. Reporting transparent et engagements contractuels.",
  },
  {
    icon: Award,
    title: "Équipe dédiée",
    desc: "Des agents formés spécifiquement à votre activité, pas un pool générique. Continuité des interlocuteurs pour une connaissance approfondie de vos clients.",
  },
  {
    icon: Shield,
    title: "Qualité contrôlée",
    desc: "Double écoute régulière, grilles de scoring qualité, feedback loops avec vos équipes. Amélioration continue de la qualité de service.",
  },
];

const faqs = [
  {
    q: "Vos agents peuvent-ils se présenter au nom de notre entreprise ?",
    a: "Oui, c'est le principe même de notre service. Vos clients contactent votre entreprise et sont accueillis par nos agents qui se présentent en votre nom, selon vos scripts et votre charte. La transparence envers vos clients est totale.",
  },
  {
    q: "Comment formez-vous vos agents sur nos produits ?",
    a: "Nous organisons une phase de formation initiale (documentation produit, FAQ, cas d'usage). Nos agents suivent ensuite une période de double écoute supervisée avant d'être autonomes. Des sessions de mise à jour sont planifiées à chaque évolution de votre offre.",
  },
  {
    q: "Quels canaux de communication couvrez-vous ?",
    a: "Téléphone entrant et sortant, email, chat en direct (web, WhatsApp, Messenger), et SMS. Nous nous adaptons à vos canaux existants et pouvons en déployer de nouveaux si nécessaire.",
  },
  {
    q: "Comment s'intègre votre service avec notre CRM ?",
    a: "Nos agents travaillent directement dans votre CRM. Nous supportons Salesforce, HubSpot, Freshdesk, Zendesk et la plupart des solutions du marché. L'historique de chaque interaction est tracé dans votre outil.",
  },
  {
    q: "Quel est le coût par rapport à une équipe interne en France ?",
    a: "En moyenne, nos clients constatent une économie de 45 à 60% par rapport au coût d'un service client internalisé en France, à qualité de service équivalente ou supérieure grâce à nos process de contrôle qualité.",
  },
];

export default function RelationClientPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-purple-600">
              Accueil
            </Link>
            <span>/</span>
            <Link
              href="/managed-services"
              className="hover:text-purple-600"
            >
              Managed Services
            </Link>
            <span>/</span>
            <span className="font-medium text-slate-900">
              Gestion de la relation client
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/coworking.jpg"
            alt="Gestion de la relation client depuis Maurice — Vanille Managed Services"
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
              Managed Services — Relation client
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Relation{" "}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
                client
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Accueil téléphonique, support multicanal, traitement des
              réclamations — en français et en anglais, depuis Maurice, par
              une équipe dédiée à votre image de marque.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 px-8 h-14 text-lg font-bold shadow-lg shadow-purple-500/20"
                >
                  Demander un devis
                </Button>
              </Link>
              <Link href="#process">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 h-14 text-lg font-bold"
                >
                  Notre méthode
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent" />

      {/* Services */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Un service client multicanal depuis Maurice
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Téléphone, email, chat — vos clients sont accueillis en
              français et en anglais par une équipe dédiée, formée à votre
              image de marque.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 text-white mb-6">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Mise en place en 5 étapes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Une montée en charge progressive pour garantir la qualité
              de service dès le premier jour.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-300 to-slate-200 hidden lg:block" />

            <div className="space-y-8">
              {processSteps.map((item, idx) => (
                <div key={idx} className="relative lg:pl-24">
                  <div className="absolute left-[1.15rem] top-1 hidden lg:flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white text-xs font-black ring-4 ring-slate-50">
                    {item.step}
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-3 lg:hidden">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white text-xs font-black">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 hidden lg:block">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Engagements de qualité
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Des KPI mesurés, une couverture horaire étendue et une équipe
              dédiée pour un service client à la hauteur de votre marque.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((g, i) => (
              <div
                key={i}
                className="group rounded-2xl p-8 border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <g.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {g.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {g.desc}
                </p>
              </div>
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
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-slate-200 bg-white p-6 cursor-pointer hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between font-bold text-slate-900">
                  {item.q}
                  <ArrowRight className="h-5 w-5 shrink-0 ml-4 transition-transform group-open:rotate-90" />
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
      <section className="bg-gradient-to-r from-purple-600 to-violet-700 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Offrez à vos clients un service d&apos;excellence
          </h2>
          <p className="text-lg text-purple-100 mb-8 leading-relaxed">
            Didier Laroussinie et son équipe conçoivent un dispositif
            relation client sur mesure — multicanal, bilingue et piloté par
            des KPI exigeants.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 h-14 text-lg font-bold"
            >
              Demander un devis personnalisé
            </Button>
          </Link>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-purple-200">
            Réponse sous 24h ouvrées · Confidentialité Totale
          </p>
        </div>
      </section>
    </main>
  );
}
