import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Server,
  Headphones,
  Eye,
  Wrench,
  Lock,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support IT & Helpdesk depuis Maurice — Vanille Managed Services",
  description:
    "Helpdesk N1/N2 francophone, administration systèmes, monitoring et maintenance préventive depuis Maurice. Couverture 6h-20h heure Paris grâce au GMT+4.",
  openGraph: {
    title: "Support IT & Helpdesk depuis Maurice — Vanille Managed Services",
    description:
      "Helpdesk N1/N2 francophone, monitoring 24/7 et maintenance préventive depuis Maurice. Couverture étendue grâce au GMT+4.",
    url: "https://vanillestrategie.fr/managed-services/support-it",
    type: "website",
  },
};

const services = [
  {
    icon: Headphones,
    title: "Helpdesk N1 / N2",
    desc: "Prise en charge des incidents utilisateurs : problèmes de poste de travail, messagerie, VPN, imprimantes, applications métier. Résolution en première ligne ou escalade structurée.",
  },
  {
    icon: Server,
    title: "Administration systèmes",
    desc: "Gestion de vos serveurs Windows et Linux, Active Directory, GPO, sauvegardes. Administration de vos environnements cloud (Azure, AWS, OVH).",
  },
  {
    icon: Eye,
    title: "Monitoring infrastructure",
    desc: "Supervision en temps réel de vos serveurs, réseaux et applications critiques. Alertes proactives, dashboards de disponibilité et rapports de performance.",
  },
  {
    icon: Wrench,
    title: "Maintenance préventive",
    desc: "Mises à jour de sécurité, patches OS, renouvellement de certificats, nettoyage des logs. Planification des maintenances en dehors des heures de production.",
  },
  {
    icon: Lock,
    title: "Sécurité et conformité",
    desc: "Gestion des antivirus, pare-feu, politiques de mots de passe. Audits de vulnérabilité réguliers et plans de remédiation documentés.",
  },
  {
    icon: Zap,
    title: "Automatisation et scripting",
    desc: "Automatisation des tâches récurrentes (provisioning, déploiement, rapports). Scripts PowerShell, Bash et outils d'orchestration pour gagner en efficacité.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit de votre infrastructure",
    desc: "Cartographie complète de votre parc informatique, inventaire des logiciels, analyse des flux réseau et identification des points de fragilité.",
  },
  {
    step: "02",
    title: "Mise en place des outils de supervision",
    desc: "Déploiement de nos agents de monitoring, configuration des alertes, création des dashboards de suivi et mise en place du ticketing.",
  },
  {
    step: "03",
    title: "Transition et transfert de compétences",
    desc: "Prise en main progressive par notre équipe à Maurice. Documentation des procédures, formation croisée avec vos équipes existantes.",
  },
  {
    step: "04",
    title: "Exploitation courante",
    desc: "Traitement des tickets, monitoring continu, maintenance planifiée. Reporting hebdomadaire sur les incidents, les temps de résolution et la disponibilité.",
  },
  {
    step: "05",
    title: "Amélioration continue",
    desc: "Revue mensuelle des indicateurs, identification des causes récurrentes, recommandations d'optimisation et mise à jour des procédures.",
  },
];

const guarantees = [
  {
    icon: Clock,
    title: "Couverture 6h-20h Paris",
    desc: "Grâce au fuseau GMT+4, nos équipes à Maurice couvrent une plage horaire étendue de 6h à 20h heure de Paris — sans surcoût d'astreinte.",
  },
  {
    icon: Shield,
    title: "SLA contractuels",
    desc: "Temps de prise en charge garanti : P1 en 15 min, P2 en 1h, P3 en 4h. Taux de disponibilité engagé à 99,5% sur le périmètre supervisé.",
  },
  {
    icon: Award,
    title: "Équipe certifiée",
    desc: "Techniciens et ingénieurs certifiés Microsoft, Linux, réseau. Formation continue et veille technologique permanente.",
  },
  {
    icon: Monitor,
    title: "Approche proactive",
    desc: "80% des incidents détectés avant impact utilisateur grâce au monitoring proactif. Maintenance préventive planifiée pour réduire les arrêts imprévus.",
  },
];

const faqs = [
  {
    q: "Quels outils de ticketing utilisez-vous ?",
    a: "Nous nous adaptons à vos outils existants (Jira, Freshdesk, GLPI, etc.) ou déployons notre solution intégrée. Chaque ticket est tracé, catégorisé et documenté pour assurer un suivi complet.",
  },
  {
    q: "Pouvez-vous gérer notre parc à distance ?",
    a: "Oui, nous utilisons des outils de prise en main à distance sécurisés (RMM) pour intervenir sur vos postes et serveurs. L'administration se fait intégralement à distance depuis Maurice, avec connexion chiffrée.",
  },
  {
    q: "Comment gérez-vous les urgences en dehors des horaires ?",
    a: "Notre couverture standard va de 6h à 20h heure Paris. Pour les astreintes 24/7, nous proposons une option dédiée avec engagement de temps de réponse garanti, y compris les week-ends et jours fériés.",
  },
  {
    q: "Pouvez-vous travailler avec notre DSI existante ?",
    a: "Absolument. Nous fonctionnons en complément de votre équipe IT interne ou de votre DSI externalisée. Le périmètre est défini conjointement pour éviter tout chevauchement et assurer une collaboration fluide.",
  },
];

export default function SupportITPage() {
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
              Support IT &amp; Helpdesk
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bureau-moderne.jpg"
            alt="Support IT et Helpdesk depuis Maurice — Vanille Managed Services"
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
              Managed Services — IT
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Support IT{" "}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
                &amp; Helpdesk
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Helpdesk N1/N2, administration systèmes, monitoring et
              maintenance préventive — opérés depuis Maurice par une équipe
              francophone, de 6h à 20h heure Paris.
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
                  Découvrir le process
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
              Un support IT complet depuis Maurice
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              De la résolution d&apos;incidents au monitoring proactif, nos
              équipes assurent la continuité de vos opérations IT au
              quotidien.
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
              Une transition structurée pour une prise en charge fluide et
              sans interruption de service.
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
              Engagements de service
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Des SLA clairs, une couverture horaire étendue et une
              approche proactive pour minimiser les interruptions.
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
            Un support IT francophone, réactif et économique
          </h2>
          <p className="text-lg text-purple-100 mb-8 leading-relaxed">
            Didier Laroussinie et son équipe dimensionnent la solution IT
            adaptée à votre infrastructure — avec un engagement de qualité
            mesurable.
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
