import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Globe2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Scale,
  TrendingUp,
  FileText,
  Landmark,
  Target,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Conseil Fiscal & Structuration Internationale — Vanille Consulting",
  description:
    "Optimisation fiscale, conventions de non double imposition, transfer pricing, exit tax. Structuration multi-juridictionnelle pilotée par Didier Laroussinie, Expert-Comptable Fiscaliste.",
  openGraph: {
    title: "Conseil Fiscal & Structuration — Vanille Consulting",
    description:
      "47 conventions fiscales, transfer pricing, exit tax — structuration internationale par un Expert-Comptable diplômé.",
    url: "https://vanillestrategie.fr/consulting/conseil-fiscal",
    type: "website",
  },
};

const expertises = [
  {
    icon: Globe2,
    title: "Structuration multi-juridictionnelle",
    description:
      "Architecture fiscale optimale pour vos flux internationaux : holding, trading, IP, management fees. Analyse des conventions applicables entre chaque juridiction.",
  },
  {
    icon: Scale,
    title: "Transfer pricing",
    description:
      "Documentation des prix de transfert conforme aux guidelines OCDE et au Finance Act 2025. Country-by-Country Reporting, fichier local et fichier maître.",
  },
  {
    icon: TrendingUp,
    title: "Exit tax & mobilité internationale",
    description:
      "Anticipation de l\u2019exit tax française (article 167 bis du CGI), planification du changement de résidence fiscale, sursis et report d\u2019imposition.",
  },
  {
    icon: Landmark,
    title: "Conventions fiscales",
    description:
      "Exploitation du réseau de 47 traités de non double imposition de Maurice : France, Inde, Royaume-Uni, Afrique du Sud, Singapour, Chine, EAU et plus.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité CRS (Common Reporting Standard) / FATCA (Foreign Account Tax Compliance Act)",
    description:
      "Mise en conformité avec les obligations d\u2019échange automatique d\u2019informations (Common Reporting Standard) et FATCA. Déclarations auprès de la MRA (Mauritius Revenue Authority).",
  },
  {
    icon: Target,
    title: "Ruling & rescrit fiscal",
    description:
      "Obtention de rulings auprès de la Mauritius Revenue Authority pour sécuriser votre position fiscale. Accompagnement en cas de contrôle fiscal.",
  },
];

const useCases = [
  {
    title: "Entrepreneur e-commerce relocalisé",
    scenario: "Un entrepreneur français vendant en ligne depuis Maurice via une Domestic Company.",
    solution: "Structuration DC + convention France-Maurice pour éviter la double imposition sur les dividendes (retenue à la source réduite à 5%). Accompagnement exit tax avec sursis d\u2019imposition.",
  },
  {
    title: "Groupe industriel avec filiale GBC",
    scenario: "Un groupe européen souhaitant centraliser ses flux Afrique/Asie via Maurice.",
    solution: "GBC avec substance renforcée, documentation transfer pricing complète, accès aux conventions avec l\u2019Inde (retenue dividendes à 5%), l\u2019Afrique du Sud et Singapour.",
  },
  {
    title: "Family office — détention patrimoniale",
    scenario: "Une famille souhaitant structurer la détention de ses actifs immobiliers et financiers.",
    solution: "Authorised Company pour les actifs passifs, GBC pour les investissements actifs. Planification successorale avec absence de droits de succession à Maurice.",
  },
];

const faqs = [
  {
    question: "Maurice est-elle toujours intéressante fiscalement après le Pilier 2 de l\u2019OCDE ?",
    answer:
      "Oui. Le Pilier 2 (taux minimum de 15%) ne concerne que les groupes dont le CA consolidé dépasse 750 M EUR. Pour les PME et groupes intermédiaires, le taux effectif de 3% via Partial Exemption reste pleinement applicable. Maurice a introduit proactivement la Fair Share Contribution et le QDMTT pour se conformer aux standards internationaux.",
  },
  {
    question: "Comment fonctionne la convention fiscale France-Maurice ?",
    answer:
      "La convention élimine la double imposition et réduit les retenues à la source : dividendes à 5% (participation ≥ 10%) ou 15%, intérêts à 0%, redevances à 15%. Elle prévoit aussi des dispositions sur les gains en capital, les pensions et les revenus d\u2019emploi. L\u2019application nécessite un Tax Residence Certificate (TRC) délivré annuellement par la MRA.",
  },
  {
    question: "Qu\u2019est-ce que l\u2019exit tax et comment l\u2019anticiper ?",
    answer:
      "L\u2019exit tax française (article 167 bis du CGI) taxe les plus-values latentes sur les participations supérieures à 800 000 EUR ou représentant plus de 50% du capital lors du transfert de résidence fiscale hors de France. Un sursis automatique s\u2019applique au sein de l\u2019UE/EEE ; vers Maurice, un report est possible sous conditions. Notre cabinet structure votre départ pour optimiser cette imposition.",
  },
  {
    question: "Proposez-vous un accompagnement en cas de contrôle fiscal ?",
    answer:
      "Oui. Didier Laroussinie, fort de son parcours Big Four (Deloitte) et de plus de 40 ans d\u2019expérience, assure la représentation et la défense fiscale de nos clients face à la MRA comme face à l\u2019administration fiscale française. Nous préparons les réponses aux demandes de renseignements et accompagnons chaque étape du contrôle.",
  },
];

export default function ConseilFiscalPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl animate-[fadeSlideUp_0.6s_ease-out]">
            <p className="inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-indigo-300 backdrop-blur-sm">
              Vanille Consulting — Conseil fiscal
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Conseil fiscal &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                structuration internationale
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Optimisation des conventions fiscales, transfer pricing, exit tax — une expertise pointue pour structurer vos flux internationaux en toute conformité.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-8 h-14 text-lg font-bold shadow-lg shadow-indigo-500/20">
                  Consultation fiscale
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-white/80 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <Globe2 className="h-5 w-5 text-indigo-400" />
                <span className="text-sm font-medium">47 conventions fiscales</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />

      {/* Expertises */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-[fadeSlideUp_0.6s_ease-out]">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Nos domaines d&apos;expertise fiscale</h2>
            <p className="mt-4 text-lg text-slate-600">
              Un accompagnement complet en fiscalité internationale, piloté par un Expert-Comptable Fiscaliste avec plus de 40 ans d&apos;expérience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertises.map((e, idx) => (
              <Card
                key={e.title}
                className="group p-8 border-none shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 animate-[fadeSlideUp_0.6s_ease-out]"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white mb-6">
                  <e.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {e.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{e.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conventions fiscales highlight */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeSlideUp_0.6s_ease-out]">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                47 conventions fiscales à votre{" "}
                <span className="text-indigo-600">avantage</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Maurice dispose d&apos;un réseau de traités de non double imposition couvrant les principales juridictions économiques. Ces conventions permettent de réduire significativement les retenues à la source sur les dividendes, intérêts et redevances.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "France — Dividendes 5% | Intérêts 0% | Redevances 15%",
                  "Inde — Dividendes 5% | Intérêts 7,5% | Redevances 15%",
                  "Royaume-Uni — Dividendes 10% | Intérêts 0% | Redevances 15%",
                  "Afrique du Sud — Dividendes 5% | Intérêts 0% | Redevances 5%",
                  "Singapour — Dividendes 0% | Intérêts 0% | Redevances 0%",
                ].map((line) => (
                  <div key={line} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{line}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 grid-cols-2">
              {[
                { stat: "47", label: "Conventions fiscales" },
                { stat: "3%", label: "Taux effectif GBC" },
                { stat: "0%", label: "Impôt plus-values" },
                { stat: "0%", label: "Droits de succession" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm text-center hover:border-indigo-200 transition-colors">
                  <p className="text-3xl font-black text-indigo-600">{item.stat}</p>
                  <p className="mt-2 text-sm font-medium text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Cas d&apos;usage concrets</h2>
            <p className="mt-4 text-lg text-slate-600">
              Chaque structuration est unique. Voici trois profils types que nous accompagnons régulièrement.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {useCases.map((uc, idx) => (
              <div
                key={uc.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow animate-[fadeSlideUp_0.6s_ease-out]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-6">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{uc.title}</h3>
                <p className="mt-3 text-sm text-slate-500 italic">{uc.scenario}</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed">{uc.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Questions fréquentes</h2>
            <p className="mt-4 text-lg text-slate-600">Fiscalité internationale à Maurice — vos questions, nos réponses.</p>
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
            <Briefcase className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Optimisez votre{" "}
            <span className="text-indigo-400">structuration fiscale</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Didier Laroussinie, Expert-Comptable Fiscaliste International, analyse votre situation et vous propose une structuration sur mesure.
          </p>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-indigo-500/20">
                Demander une consultation fiscale
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
