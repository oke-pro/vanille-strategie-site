import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Shield,
  Clock,
  BookOpen,
  Zap,
  Lock,
  Award,
  Globe2,
  TrendingDown,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Externalisation Comptable depuis Maurice — Vanille Managed Services",
  description:
    "Externalisez votre comptabilité depuis Maurice : saisie, rapprochements bancaires, déclarations fiscales, bilans. Équipe MIPA, normes IFRS et françaises, dashboard OKE. Jusqu'à 60% d'économies.",
  openGraph: {
    title:
      "Externalisation Comptable depuis Maurice — Vanille Managed Services",
    description:
      "Externalisez votre comptabilité depuis Maurice. Équipe francophone qualifiée MIPA, normes IFRS et françaises, dashboard OKE temps réel.",
    url: "https://vanillestrategie.fr/managed-services/externalisation-comptable",
    type: "website",
  },
};

const processSteps = [
  {
    step: "01",
    title: "Audit et cadrage initial",
    desc: "Analyse de votre plan comptable, de vos flux documentaires et de vos obligations déclaratives. Définition du périmètre, des SLA (Service Level Agreement) et du calendrier de bascule.",
  },
  {
    step: "02",
    title: "Paramétrage et migration",
    desc: "Configuration de votre espace sur le dashboard OKE, import de l'historique comptable, mise en place des connecteurs bancaires et des circuits de validation.",
  },
  {
    step: "03",
    title: "Saisie et rapprochements quotidiens",
    desc: "Notre équipe à Maurice saisit vos factures, notes de frais et écritures bancaires. Rapprochements bancaires automatisés avec contrôle humain systématique.",
  },
  {
    step: "04",
    title: "Déclarations et reporting mensuel",
    desc: "Génération des déclarations TVA, IS, PAYE. Production du compte de résultat, bilan intermédiaire et tableau de bord KPI dans OKE.",
  },
  {
    step: "05",
    title: "Révision et clôture annuelle",
    desc: "Préparation du bilan annuel, coordination avec votre commissaire aux comptes, archivage sécurisé de toutes les pièces justificatives.",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Saisie comptable intégrale",
    desc: "Enregistrement quotidien de vos factures d'achat, de vente, notes de frais et opérations bancaires. Classification analytique selon votre plan de comptes.",
  },
  {
    icon: Calculator,
    title: "Rapprochements bancaires",
    desc: "Réconciliation quotidienne ou hebdomadaire de vos relevés bancaires avec vos écritures comptables. Détection immédiate des anomalies et écarts.",
  },
  {
    icon: BarChart3,
    title: "Déclarations fiscales",
    desc: "Préparation et transmission de vos déclarations TVA, IS, CFE, CVAE et DSN. Respect strict des échéances légales françaises et mauriciennes.",
  },
  {
    icon: Shield,
    title: "Reporting financier",
    desc: "Compte de résultat mensuel, bilan intermédiaire, analyse des marges et de la trésorerie. Indicateurs de pilotage accessibles en temps réel via OKE.",
  },
  {
    icon: Lock,
    title: "Bilans et clôture annuelle",
    desc: "Préparation complète du bilan annuel, liasse fiscale, annexes et documents de synthèse. Coordination fluide avec votre commissaire aux comptes.",
  },
  {
    icon: Zap,
    title: "Dashboard OKE temps réel",
    desc: "Accédez à votre comptabilité 24/7 depuis le dashboard OKE : écritures, documents justificatifs, reporting automatisé et exports en un clic.",
  },
];

const guarantees = [
  {
    icon: Award,
    title: "Qualité MIPA",
    desc: "Équipe inscrite au Mauritius Institute of Professional Accountants. Process audités et formation continue obligatoire.",
  },
  {
    icon: Globe2,
    title: "Double référentiel IFRS / FR",
    desc: "Maîtrise des normes IFRS obligatoires à Maurice et du Plan Comptable Général français. Comptabilité bistandard sur demande.",
  },
  {
    icon: Clock,
    title: "SLA engagés",
    desc: "Saisie sous 48h, rapprochements hebdomadaires, déclarations J-5 avant échéance. Pénalités contractuelles en cas de retard.",
  },
  {
    icon: TrendingDown,
    title: "40 à 60% d'économies",
    desc: "Coût d'un comptable qualifié à Maurice vs France : des économies substantielles sans compromis sur la qualité.",
  },
];

const faqs = [
  {
    q: "Comment transmettez-vous les pièces justificatives ?",
    a: "Vous déposez vos factures et justificatifs directement dans le dashboard OKE (upload, scan ou email dédié). Notre équipe les traite sous 48h ouvrées. Chaque pièce est indexée, classée et liée à son écriture comptable.",
  },
  {
    q: "Comment assurez-vous la qualité de la saisie depuis Maurice ?",
    a: "Chaque écriture passe par un double contrôle : saisie par un comptable MIPA, puis validation par un réviseur senior. Le taux d'erreur constaté est inférieur à 0,3% grâce à nos process qualité audités.",
  },
  {
    q: "Est-ce compatible avec la réglementation française ?",
    a: "Absolument. Notre équipe maîtrise le Plan Comptable Général, les normes IFRS et les obligations déclaratives françaises (TVA, IS, DSN). Nous travaillons en lien direct avec BD Star et le cabinet Vanille Stratégie pour garantir la conformité totale.",
  },
  {
    q: "Quel est le délai de mise en place ?",
    a: "Comptez 2 à 4 semaines entre le cadrage initial et la bascule effective, selon la complexité de votre dossier. La migration de l'historique comptable est incluse dans la prestation.",
  },
  {
    q: "Puis-je garder la main sur certaines écritures ?",
    a: "Oui, le périmètre est modulable. Vous pouvez conserver la saisie des notes de frais par exemple, et nous confier le reste. Le dashboard OKE permet un travail collaboratif en temps réel.",
  },
];

export default function ExternalisationComptablePage() {
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
              Externalisation comptable
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bureau-moderne.jpg"
            alt="Externalisation comptable depuis Maurice — Vanille Managed Services"
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
              Managed Services — Comptabilité
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Externalisation{" "}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
                comptable
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Confiez votre comptabilité à notre équipe francophone qualifiée
              à Maurice. Saisie, rapprochements, déclarations, bilans — le
              tout piloté via le dashboard OKE, avec jusqu&apos;à 60%
              d&apos;économies.
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
                  Comment ça marche
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Votre comptabilité, gérée par des experts depuis Maurice
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Une équipe dédiée, francophone, qualifiée MIPA (Mauritius Institute of Professional Accountants) et formée aux
              normes IFRS (normes comptables internationales) comme françaises. Groupe intégré, qualité
              contrôlée, visibilité totale.
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

      {/* Process Section */}
      <section id="process" className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Comment ça marche
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Un processus structuré en 5 étapes pour une bascule fluide et
              un fonctionnement optimal dès le premier mois.
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
              Qualité, conformité et sécurité
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Des engagements contractuels sur la qualité, la sécurité des
              données et les délais de traitement.
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
            Externalisez votre comptabilité en toute sérénité
          </h2>
          <p className="text-lg text-purple-100 mb-8 leading-relaxed">
            Didier Laroussinie et son équipe étudient votre dossier et vous
            proposent une solution sur mesure — avec un chiffrage
            transparent et sans engagement.
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
