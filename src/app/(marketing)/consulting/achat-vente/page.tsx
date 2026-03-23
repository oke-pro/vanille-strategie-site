import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  FileText,
  Search,
  BarChart3,
  Users,
  Scale,
  Briefcase,
  Target,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Achat & Vente d'Entreprise à Maurice — M&A, Due Diligence | Vanille Consulting",
  description:
    "Accompagnement M&A à Maurice : due diligence, évaluation, structuration LBO, pacte d'actionnaires. Piloté par Didier Laroussinie, Expert-Comptable diplômé — groupe intégré.",
  openGraph: {
    title: "Achat & Vente d'Entreprise — Vanille Consulting",
    description:
      "M&A, due diligence, valorisation, pacte d'actionnaires — accompagnement intégral par un Expert-Comptable Fiscaliste International.",
    url: "https://vanillestrategie.fr/consulting/achat-vente",
    type: "website",
  },
};

const services = [
  {
    icon: Search,
    title: "Due diligence financière & fiscale",
    description:
      "Audit approfondi de la cible : analyse des états financiers, identification des risques fiscaux latents, revue des engagements hors bilan, vérification de la conformité réglementaire.",
  },
  {
    icon: BarChart3,
    title: "Évaluation d\u2019entreprise",
    description:
      "Valorisation selon les méthodes reconnues : DCF (Discounted Cash Flow), multiples de marché, actif net réévalué. Rapport de valorisation détaillé et défendable.",
  },
  {
    icon: Scale,
    title: "Structuration de l\u2019opération",
    description:
      "Architecture juridique et fiscale optimale : acquisition directe, LBO, holding de reprise, earn-out, vendor loan. Optimisation de la structure capitalistique.",
  },
  {
    icon: Users,
    title: "Pacte d\u2019actionnaires",
    description:
      "Rédaction et négociation du pacte : clauses de sortie (tag-along, drag-along), droit de préemption, gouvernance, résolution des conflits, clauses de non-concurrence.",
  },
  {
    icon: FileText,
    title: "Accompagnement cession",
    description:
      "Préparation de la data room, rédaction du memorandum d\u2019information, coordination des conseils, négociation du SPA (Share Purchase Agreement).",
  },
  {
    icon: Target,
    title: "Intégration post-acquisition",
    description:
      "Plan d\u2019intégration : reprise comptable, harmonisation des systèmes, transition managériale, accompagnement des 100 premiers jours.",
  },
];

const processSteps = [
  {
    phase: "Phase 1",
    title: "Cadrage stratégique",
    description: "Définition des objectifs, critères de recherche (acquisition) ou préparation à la cession. Analyse du marché mauricien et des valorisations sectorielles.",
    duration: "2-4 semaines",
  },
  {
    phase: "Phase 2",
    title: "Due diligence",
    description: "Audit financier, fiscal, juridique et opérationnel approfondi. Identification des risques, ajustements de valorisation, rapport de synthèse.",
    duration: "4-8 semaines",
  },
  {
    phase: "Phase 3",
    title: "Négociation & structuration",
    description: "Négociation du prix et des conditions, structuration juridique et fiscale de l\u2019opération, rédaction des documents contractuels (LOI, SPA, pacte).",
    duration: "4-6 semaines",
  },
  {
    phase: "Phase 4",
    title: "Closing & intégration",
    description: "Signature définitive, transfert des titres, formalités CBRD (Corporate and Business Registration Department) / FSC (Financial Services Commission), reprise comptable et plan d\u2019intégration post-acquisition.",
    duration: "2-4 semaines",
  },
];

const faqs = [
  {
    question: "Quel est le cadre fiscal d\u2019une cession d\u2019entreprise à Maurice ?",
    answer:
      "Maurice ne prélève aucun impôt sur les plus-values de cession (capital gains tax = 0%). C\u2019est un avantage majeur par rapport à la France ou à d\u2019autres juridictions. Toutefois, si la société cédante est une GBC, il convient de vérifier les implications dans les juridictions des acquéreurs et des bénéficiaires effectifs via les conventions fiscales applicables.",
  },
  {
    question: "Pouvez-vous accompagner l\u2019acquisition d\u2019une société déjà existante à Maurice ?",
    answer:
      "Oui. Nous réalisons une due diligence complète (financière, fiscale, juridique) de la cible, évaluons les risques et accompagnons l\u2019intégralité de la transaction : valorisation, négociation, structuration, closing et intégration. Notre connaissance approfondie du tissu économique mauricien est un atout clé.",
  },
  {
    question: "Qu\u2019est-ce qu\u2019un pacte d\u2019actionnaires et est-il obligatoire ?",
    answer:
      "Le pacte d\u2019actionnaires n\u2019est pas légalement obligatoire mais est fortement recommandé dès qu\u2019il y a plusieurs associés. Il régit les relations entre actionnaires au-delà des statuts : conditions de sortie, droit de préemption, gouvernance, distributions de dividendes, résolution des conflits. C\u2019est votre assurance contre les désaccords futurs.",
  },
  {
    question: "Quelle est la durée moyenne d\u2019une opération M&A à Maurice ?",
    answer:
      "Comptez entre 3 et 6 mois pour une opération standard, du cadrage initial au closing. Les délais varient selon la complexité de la due diligence, le nombre de parties prenantes et les approbations réglementaires requises (FSC pour les GBC, Board of Investment pour certains secteurs).",
  },
];

export default function AchatVentePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950" />
        <div className="absolute top-10 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl animate-[fadeSlideUp_0.6s_ease-out]">
            <p className="inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-indigo-300 backdrop-blur-sm">
              Vanille Consulting — M&amp;A
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Achat &amp; Vente{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                d&apos;entreprise
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Due diligence, évaluation, structuration et pacte d&apos;actionnaires — Didier Laroussinie accompagne vos opérations M&amp;A à Maurice avec l&apos;exigence d&apos;un parcours Big Four.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-8 h-14 text-lg font-bold shadow-lg shadow-indigo-500/20">
                  Discuter de mon projet
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-white/80 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <TrendingUp className="h-5 w-5 text-indigo-400" />
                <span className="text-sm font-medium">0% d&apos;impôt sur les plus-values</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />

      {/* Services Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-[fadeSlideUp_0.6s_ease-out]">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Notre accompagnement M&amp;A</h2>
            <p className="mt-4 text-lg text-slate-600">
              De la due diligence à l&apos;intégration post-acquisition — un accompagnement de bout en bout.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <Card
                key={s.title}
                className="group p-8 border-none shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 animate-[fadeSlideUp_0.6s_ease-out]"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white mb-6">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Le processus en 4 phases</h2>
            <p className="mt-4 text-lg text-slate-600">
              Une méthodologie éprouvée pour sécuriser votre opération, du cadrage au closing.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div
                key={step.phase}
                className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow animate-[fadeSlideUp_0.6s_ease-out]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 px-3 py-1.5 text-xs font-black text-white uppercase tracking-widest mb-4">
                  {step.phase}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{step.description}</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                    Durée : {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Maurice M&A */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeSlideUp_0.6s_ease-out]">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                Maurice, une juridiction{" "}
                <span className="text-indigo-600">favorable au M&amp;A</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                L&apos;absence d&apos;impôt sur les plus-values, le réseau de conventions fiscales et la flexibilité du droit des sociétés font de Maurice une plateforme idéale pour structurer vos opérations de croissance externe.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "0% d\u2019impôt sur les plus-values de cession",
                  "Pas de droit d\u2019enregistrement sur les transferts de titres (GBC)",
                  "Accès aux 47 conventions fiscales pour structurer les flux",
                  "Droit des sociétés flexible — Companies Act 2001",
                  "Pas de contrôle des changes — libre rapatriement des fonds",
                  "Arbitrage international reconnu (New York Convention)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 grid-cols-2">
              {[
                { stat: "0%", label: "Impôt sur les plus-values" },
                { stat: "3-6", label: "Mois (durée moyenne)" },
                { stat: "47", label: "Conventions fiscales" },
                { stat: "40+", label: "Années d\u2019expérience DL" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-6 border border-slate-100 text-center hover:border-indigo-200 transition-colors">
                  <p className="text-3xl font-black text-indigo-600">{item.stat}</p>
                  <p className="mt-2 text-sm font-medium text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Questions fréquentes</h2>
            <p className="mt-4 text-lg text-slate-600">M&amp;A à Maurice — vos questions, nos réponses.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-500 mb-8 border border-indigo-500/20">
            <TrendingUp className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Votre opération M&amp;A{" "}
            <span className="text-indigo-400">mérite un expert</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Didier Laroussinie, fort de son parcours Big Four et de plus de 40 ans d&apos;expérience, accompagne vos acquisitions et cessions à Maurice.
          </p>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-indigo-500/20">
                Discuter de mon projet M&amp;A
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
