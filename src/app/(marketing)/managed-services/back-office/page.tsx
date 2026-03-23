import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Archive,
  Receipt,
  Mail,
  FolderOpen,
  Award,
  TrendingDown,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Secrétariat & Back-office externalisé depuis Maurice — Vanille Managed Services",
  description:
    "Externalisez votre back-office depuis Maurice : data entry, gestion documentaire, facturation, relances clients, traitement du courrier. Jusqu'à 60% d'économies.",
  openGraph: {
    title:
      "Secrétariat & Back-office depuis Maurice — Vanille Managed Services",
    description:
      "Data entry, gestion documentaire, facturation et relances clients externalisés depuis Maurice. Équipe francophone, gain de temps garanti.",
    url: "https://vanillestrategie.fr/managed-services/back-office",
    type: "website",
  },
};

const services = [
  {
    icon: Archive,
    title: "Data entry et saisie de données",
    desc: "Saisie de formulaires, numérisation de documents papier, extraction de données depuis des fichiers PDF ou images. Contrôle qualité systématique et taux d'erreur inférieur à 0,5%.",
  },
  {
    icon: FolderOpen,
    title: "Gestion documentaire",
    desc: "Classement, indexation et archivage numérique de vos documents. Mise en place d'arborescences structurées, contrôle des versions et gestion des droits d'accès.",
  },
  {
    icon: Receipt,
    title: "Facturation et relances",
    desc: "Émission de vos factures clients, suivi des encaissements, relances amiables selon un calendrier défini. Reporting sur les créances et l'ancienneté des impayés.",
  },
  {
    icon: Mail,
    title: "Traitement du courrier",
    desc: "Réception, tri et numérisation de votre courrier entrant. Rédaction et envoi de courriers sortants, gestion des recommandés et suivi des accusés de réception.",
  },
  {
    icon: FileText,
    title: "Administration des ventes",
    desc: "Saisie des commandes, édition des bons de livraison, gestion des retours et avoirs. Interface fluide avec votre ERP ou votre CRM.",
  },
  {
    icon: Zap,
    title: "Automatisation des tâches",
    desc: "Identification et automatisation des tâches répétitives : rapports périodiques, consolidation de données, alertes et workflows de validation.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Analyse de vos flux administratifs",
    desc: "Cartographie de vos tâches back-office, identification des volumes, des pics d'activité et des processus à optimiser ou automatiser.",
  },
  {
    step: "02",
    title: "Définition des procédures",
    desc: "Rédaction des modes opératoires pour chaque tâche externalisée. Définition des critères qualité, des délais de traitement et des circuits de validation.",
  },
  {
    step: "03",
    title: "Mise en place et formation",
    desc: "Paramétrage des accès aux outils, formation de l'équipe dédiée à Maurice sur vos spécificités métier, phase de montée en charge progressive.",
  },
  {
    step: "04",
    title: "Exploitation quotidienne",
    desc: "Traitement des tâches selon les procédures définies. Reporting quotidien ou hebdomadaire sur les volumes traités et les indicateurs qualité.",
  },
  {
    step: "05",
    title: "Optimisation continue",
    desc: "Revue mensuelle des performances, identification des gains de productivité, automatisation progressive des tâches récurrentes.",
  },
];

const guarantees = [
  {
    icon: TrendingDown,
    title: "40 à 60% d'économies",
    desc: "Coût d'un assistant back-office qualifié à Maurice vs France : des économies substantielles sur vos fonctions support.",
  },
  {
    icon: Clock,
    title: "Délais garantis",
    desc: "SLA contractuels sur les temps de traitement : factures sous 24h, relances selon le calendrier défini, data entry sous 48h.",
  },
  {
    icon: Shield,
    title: "Confidentialité",
    desc: "Vos documents et données sont traités dans un environnement sécurisé. Accès contrôlés, chiffrement et traçabilité de chaque opération.",
  },
  {
    icon: Award,
    title: "Groupe intégré",
    desc: "Vos opérations sont gérées par nos propres équipes à Maurice. Pas de prestataire tiers, encadrement direct par nos managers.",
  },
];

const faqs = [
  {
    q: "Quels types de documents pouvez-vous traiter ?",
    a: "Tout type de document professionnel : factures, bons de commande, contrats, courriers, formulaires administratifs, relevés bancaires, pièces comptables. Nous nous adaptons à vos formats (papier, PDF, images, emails).",
  },
  {
    q: "Comment garantissez-vous la qualité de la saisie ?",
    a: "Chaque lot de saisie passe par un double contrôle : saisie initiale, puis vérification par un opérateur distinct. Le taux d'erreur constaté est inférieur à 0,5%. Les anomalies sont signalées en temps réel.",
  },
  {
    q: "Pouvez-vous utiliser nos outils existants ?",
    a: "Oui, notre équipe s'adapte à vos logiciels métier (ERP, CRM, outils de facturation, GED). Nous travaillons également avec le dashboard OKE pour le suivi centralisé des opérations.",
  },
  {
    q: "Le service est-il modulable en fonction de nos pics d'activité ?",
    a: "Absolument. Nous dimensionnons l'équipe en fonction de vos volumes courants et prévoyons une capacité de renfort pour les périodes de forte activité (clôtures, campagnes commerciales, etc.).",
  },
];

export default function BackOfficePage() {
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
              Secrétariat &amp; Back-office
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bureau-moderne.jpg"
            alt="Secrétariat et back-office externalisés depuis Maurice — Vanille Managed Services"
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
              Managed Services — Back-office
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Secrétariat &amp;{" "}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
                Back-office
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Data entry, gestion documentaire, facturation, relances et
              traitement du courrier — libérez du temps pour vos dirigeants
              en externalisant vos tâches administratives à Maurice.
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
                  Notre approche
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent" />

      {/* Value Proposition */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                Concentrez-vous sur votre coeur de métier
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Les tâches administratives répétitives consomment en moyenne
                40% du temps de vos collaborateurs. En externalisant votre
                back-office à Maurice, vous libérez vos équipes pour des
                missions à plus forte valeur ajoutée.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Notre équipe francophone, formée à vos process, prend en
                charge l&apos;intégralité de vos tâches administratives avec
                rigueur et réactivité — le tout piloté via le dashboard OKE.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Data entry",
                  "Facturation",
                  "Relances",
                  "GED",
                  "Courrier",
                  "ADV",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/coworking.jpg"
                alt="Équipe back-office Vanille Managed Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Nos prestations back-office
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Des services modulables, adaptés à vos volumes et à vos
              exigences de qualité.
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
      <section id="process" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Notre approche en 5 étapes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Une méthodologie structurée pour une externalisation réussie,
              de l&apos;analyse initiale à l&apos;optimisation continue.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-300 to-slate-200 hidden lg:block" />

            <div className="space-y-8">
              {processSteps.map((item, idx) => (
                <div key={idx} className="relative lg:pl-24">
                  <div className="absolute left-[1.15rem] top-1 hidden lg:flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white text-xs font-black ring-4 ring-white">
                    {item.step}
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-md transition-shadow">
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
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Qualité, sécurité et engagements
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Des garanties mesurables sur la qualité de traitement, la
              confidentialité de vos données et le respect des délais.
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 cursor-pointer hover:shadow-md transition-shadow"
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
            Libérez vos équipes des tâches répétitives
          </h2>
          <p className="text-lg text-purple-100 mb-8 leading-relaxed">
            Didier Laroussinie et son équipe analysent vos flux
            administratifs et vous proposent une externalisation sur mesure —
            avec un chiffrage transparent et un plan de transition clair.
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
