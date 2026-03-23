import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Users,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  FileText,
  Award,
  Calculator,
  Briefcase,
  Scale,
  UserPlus,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "RH & Paie déléguées depuis Maurice — Vanille Managed Services",
  description:
    "Externalisez la gestion de la paie (française et mauricienne), les déclarations sociales, l'administration du personnel et le recrutement local depuis Maurice.",
  openGraph: {
    title: "RH & Paie déléguées depuis Maurice — Vanille Managed Services",
    description:
      "Paie, déclarations sociales, administration du personnel et recrutement local externalisés depuis Maurice. Conformité droit du travail FR et mauricien.",
    url: "https://vanillestrategie.fr/managed-services/rh-paie",
    type: "website",
  },
};

const services = [
  {
    icon: Calculator,
    title: "Gestion de la paie",
    desc: "Calcul et édition des bulletins de paie pour vos entités françaises et mauriciennes. Gestion des variables (primes, absences, heures supplémentaires), soldes de tout compte.",
  },
  {
    icon: FileText,
    title: "Déclarations sociales",
    desc: "DSN (Déclaration Sociale Nominative) mensuelle et événementielle (France), déclarations PAYE (Pay As You Earn) et NSF (National Savings Fund) (Maurice). Transmission électronique aux organismes, suivi des régularisations.",
  },
  {
    icon: Users,
    title: "Administration du personnel",
    desc: "Gestion des contrats de travail, avenants, attestations, suivi des périodes d'essai, congés, absences maladie et registre du personnel.",
  },
  {
    icon: UserPlus,
    title: "Recrutement local à Maurice",
    desc: "Sourcing et présélection de candidats à Maurice pour vos équipes locales. Entretiens, vérification des références, gestion administrative de l'embauche.",
  },
  {
    icon: Briefcase,
    title: "Portage salarial",
    desc: "Solution de portage pour vos collaborateurs expatriés ou freelances à Maurice. Cadre juridique sécurisé, bulletins de paie conformes, couverture sociale.",
  },
  {
    icon: Scale,
    title: "Conformité juridique",
    desc: "Veille réglementaire permanente sur le droit du travail français (Code du travail) et mauricien (Workers' Rights Act). Mise en conformité de vos pratiques RH.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit RH et cadrage",
    desc: "Analyse de votre organisation RH, de vos conventions collectives applicables, de votre politique de rémunération et de vos obligations déclaratives.",
  },
  {
    step: "02",
    title: "Paramétrage et migration",
    desc: "Configuration des profils de paie dans OKE, import de l'historique des salariés, mise en place des circuits de validation des variables de paie.",
  },
  {
    step: "03",
    title: "Production de la paie mensuelle",
    desc: "Collecte des variables, calcul des bulletins, contrôle qualité par un gestionnaire senior, mise à disposition via OKE. Virements préparés pour validation.",
  },
  {
    step: "04",
    title: "Déclarations et charges sociales",
    desc: "Génération et transmission des DSN (France) ou déclarations PAYE/NSF (Maurice). Suivi du paiement des cotisations et régularisations éventuelles.",
  },
  {
    step: "05",
    title: "Reporting et pilotage RH",
    desc: "Tableaux de bord RH mensuels : masse salariale, turnover, absentéisme, coûts par service. Données accessibles en temps réel dans OKE.",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Double conformité FR/MU",
    desc: "Maîtrise du Code du travail français et du Workers' Rights Act mauricien. Vos paies et déclarations sont conformes dans les deux juridictions.",
  },
  {
    icon: Lock,
    title: "Confidentialité renforcée",
    desc: "Données RH sensibles hébergées sur des serveurs sécurisés. Accès restreint, chiffrement des données, traçabilité complète des consultations.",
  },
  {
    icon: Clock,
    title: "SLA de production",
    desc: "Bulletins de paie livrés au plus tard J-3 avant la date de virement. Déclarations sociales transmises J-2 avant l'échéance légale.",
  },
  {
    icon: Award,
    title: "Groupe intégré",
    desc: "Votre paie est gérée par nos propres équipes à Maurice, formées en continu. Pas de prestataire tiers, pas de chaîne de sous-traitance.",
  },
];

const faqs = [
  {
    q: "Gérez-vous les conventions collectives françaises ?",
    a: "Oui. Notre équipe maîtrise les principales conventions collectives (Syntec, HCR, Commerce, BTP, etc.). Le paramétrage des grilles salariales, des primes conventionnelles et des spécificités de chaque branche est intégré dans notre prestation.",
  },
  {
    q: "Comment transmettez-vous les bulletins de paie ?",
    a: "Les bulletins sont mis à disposition dans un espace sécurisé sur le dashboard OKE. Chaque salarié peut accéder à ses bulletins via un accès personnel. L'archivage dématérialisé conforme est inclus.",
  },
  {
    q: "Pouvez-vous gérer la paie pour nos deux entités (France et Maurice) ?",
    a: "C'est précisément notre spécialité. Nous gérons les deux paies en parallèle depuis Maurice, avec les spécificités réglementaires de chaque pays, et produisons un reporting consolidé.",
  },
  {
    q: "Quel est le coût par rapport à une gestion en interne ?",
    a: "En moyenne, nos clients constatent une économie de 40 à 55% par rapport au coût d'un gestionnaire de paie en interne en France, tout en bénéficiant d'une qualité supérieure grâce à nos process de double contrôle.",
  },
  {
    q: "Proposez-vous un service de conseil RH ?",
    a: "Oui, en complément de la gestion administrative. Nous conseillons sur les clauses contractuelles, les procédures disciplinaires, les ruptures conventionnelles et les spécificités du portage salarial à Maurice.",
  },
];

export default function RHPaiePage() {
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
              RH &amp; Paie déléguées
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/coworking.jpg"
            alt="RH et paie déléguées depuis Maurice — Vanille Managed Services"
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
              Managed Services — RH &amp; Paie
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              RH &amp; Paie{" "}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
                déléguées
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Paie française et mauricienne, déclarations sociales,
              administration du personnel et recrutement local — confiés à
              notre équipe francophone à Maurice.
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
                  Notre process
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
              Une gestion RH complète depuis Maurice
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              De la paie aux déclarations sociales, en passant par le
              recrutement local et le portage salarial — nous couvrons
              l&apos;intégralité de vos besoins RH.
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
              Comment nous gérons votre paie
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Un processus éprouvé pour une paie juste, ponctuelle et
              conforme — chaque mois, sans exception.
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
              Conformité, sécurité et engagements
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Des garanties contractuelles sur la qualité, la confidentialité
              et le respect des échéances.
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
            Simplifiez votre gestion RH et paie
          </h2>
          <p className="text-lg text-purple-100 mb-8 leading-relaxed">
            Didier Laroussinie et son équipe analysent vos besoins RH et
            vous proposent une solution clé en main — paie, déclarations et
            administration du personnel, en toute conformité.
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
