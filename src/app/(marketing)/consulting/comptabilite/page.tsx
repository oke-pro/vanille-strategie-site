import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Calculator,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  BarChart3,
  FileText,
  Clock,
  Globe2,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Comptabilité & Conformité à Maurice — IFRS, BD Star, Dashboard OKE | Vanille Consulting",
  description:
    "Tenue comptable IFRS et normes françaises, audit annuel, déclarations fiscales MRA. Pilotage temps réel via le dashboard OKE. BD Star MIPA — groupe intégré depuis 2012.",
  openGraph: {
    title: "Comptabilité & Conformité — Vanille Consulting",
    description:
      "Normes IFRS, comptabilité temps réel, conformité MRA — piloté par BD Star Management Services, membre MIPA.",
    url: "https://vanillestrategie.fr/consulting/comptabilite",
    type: "website",
  },
};

const services = [
  {
    icon: Calculator,
    title: "Tenue comptable complète",
    description:
      "Saisie et lettrage quotidiens, rapprochements bancaires, suivi des comptes clients et fournisseurs. Normes IFRS (normes comptables internationales) pour les GBC, plan comptable français disponible pour les filiales de groupes hexagonaux.",
  },
  {
    icon: FileText,
    title: "Déclarations fiscales MRA (Mauritius Revenue Authority)",
    description:
      "Préparation et dépôt des déclarations d\u2019impôt sur les sociétés, de TVA (si applicable), de CSG (Contribution Sociale Généralisée) et des formulaires CRS (Common Reporting Standard) / FATCA (Foreign Account Tax Compliance Act). Respect strict des échéances réglementaires.",
  },
  {
    icon: BarChart3,
    title: "Dashboard OKE — pilotage temps réel",
    description:
      "Accédez à vos indicateurs clés en temps réel : trésorerie, résultat mensuel, créances échues, TVA à déclarer. Un tableau de bord connecté à votre comptabilité, accessible 24h/24.",
  },
  {
    icon: ShieldCheck,
    title: "Audit annuel & certification",
    description:
      "Préparation du dossier d\u2019audit pour les GBC (obligatoire) et les DC dépassant les seuils. Coordination avec les auditeurs agréés et production des états financiers certifiés.",
  },
  {
    icon: Globe2,
    title: "Reporting groupe & consolidation",
    description:
      "Production des packages de consolidation conformes aux normes groupe. Liasses fiscales françaises, reporting IFRS, analyses mensuelles pour les comités de direction.",
  },
  {
    icon: Users,
    title: "Paie & obligations sociales",
    description:
      "Établissement des bulletins de paie, déclarations NPF (National Pensions Fund), PAYE (Pay As You Earn), CSG employeur. Conformité avec l\u2019Employment Rights Act.",
  },
];

const monthlyProcess = [
  { step: "J+1 à J+5", label: "Collecte & saisie", desc: "Import des relevés bancaires, factures et pièces comptables dans le système OKE." },
  { step: "J+5 à J+10", label: "Rapprochements", desc: "Lettrage des comptes, rapprochements bancaires, suivi des encaissements et décaissements." },
  { step: "J+10 à J+15", label: "Revue & validation", desc: "Contrôle des écritures par un expert-comptable, corrections et ajustements." },
  { step: "J+15", label: "Dashboard mis à jour", desc: "Résultat mensuel, trésorerie, indicateurs clés disponibles sur le dashboard OKE." },
];

const annualProcess = [
  { month: "Janvier", task: "Clôture annuelle et production des états financiers" },
  { month: "Février", task: "Préparation du dossier d\u2019audit (GBC)" },
  { month: "Mars", task: "Dépôt des comptes audités auprès de la FSC" },
  { month: "Juin", task: "Déclaration annuelle d\u2019impôt (MRA) — exercice clos au 31 décembre" },
  { month: "Septembre", task: "Demande de renouvellement du Tax Residence Certificate (TRC)" },
  { month: "Continu", task: "Déclarations trimestrielles de TVA, CSG, PAYE" },
];

const faqs = [
  {
    question: "Quelles normes comptables s\u2019appliquent à Maurice ?",
    answer:
      "Les Global Business Companies (GBC) doivent préparer leurs états financiers selon les normes IFRS (International Financial Reporting Standards). Les Domestic Companies peuvent utiliser les IFRS ou les normes comptables mauriciennes simplifiées. Pour les filiales de groupes français, nous produisons en parallèle un reporting au plan comptable français pour la consolidation groupe.",
  },
  {
    question: "Qu\u2019est-ce que le dashboard OKE ?",
    answer:
      "OKE est notre plateforme de pilotage comptable et financier en temps réel. Connecté directement à votre comptabilité, il vous donne accès à vos indicateurs clés (trésorerie, résultat, créances, dettes) via une interface intuitive, accessible depuis n\u2019importe où. Plus besoin d\u2019attendre le bilan annuel pour piloter votre entreprise.",
  },
  {
    question: "L\u2019audit annuel est-il obligatoire pour toutes les sociétés ?",
    answer:
      "Non. L\u2019audit est obligatoire pour les GBC (sans exception) et pour les Domestic Companies dont le chiffre d\u2019affaires dépasse MUR 50 millions ou les actifs dépassent MUR 100 millions. Pour les autres DC, un audit volontaire reste recommandé pour crédibiliser vos comptes auprès des banques et partenaires.",
  },
  {
    question: "Quel est l\u2019avantage d\u2019un groupe intégré pour la comptabilité ?",
    answer:
      "Avec un groupe intégré (Vanille Stratégie + BD Star), votre comptabilité est tenue par l\u2019équipe qui a créé votre société, qui connaît votre structure fiscale et qui gère vos obligations réglementaires. Pas de déperdition d\u2019information entre prestataires, un seul interlocuteur, et une réactivité maximale sur les sujets transverses.",
  },
];

export default function ComptabilitePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
        <div className="absolute top-10 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl animate-[fadeSlideUp_0.6s_ease-out]">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              Vanille Consulting — Comptabilité
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Comptabilité &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                conformité
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Normes IFRS et françaises, déclarations fiscales, audit annuel — piloté par BD Star Management Services, membre MIPA (Mauritius Institute of Professional Accountants), avec un suivi temps réel via le dashboard OKE.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Demander un devis
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-white/80 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <BarChart3 className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Pilotage temps réel OKE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      {/* Services Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-[fadeSlideUp_0.6s_ease-out]">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Services inclus</h2>
            <p className="mt-4 text-lg text-slate-600">
              Une offre comptable complète, de la saisie quotidienne à la certification annuelle.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <Card
                key={s.title}
                className="group p-8 border-none shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 animate-[fadeSlideUp_0.6s_ease-out]"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white mb-6">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process mensuel */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                Processus{" "}
                <span className="text-blue-600">mensuel</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Chaque mois, votre comptabilité est traitée selon un calendrier rigoureux pour que vos indicateurs soient disponibles avant le 15 du mois suivant.
              </p>
              <div className="mt-10 space-y-6">
                {monthlyProcess.map((p, idx) => (
                  <div key={p.label} className="flex gap-4 animate-[fadeSlideUp_0.6s_ease-out]" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 font-black text-xs">
                      {p.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{p.label}</h3>
                      <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                Calendrier{" "}
                <span className="text-indigo-600">annuel</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Les échéances réglementaires annuelles, anticipées et pilotées par notre équipe.
              </p>
              <div className="mt-10 space-y-4">
                {annualProcess.map((p, idx) => (
                  <div key={p.month} className="flex items-start gap-4 rounded-xl bg-white p-4 border border-slate-200 shadow-sm animate-[fadeSlideUp_0.6s_ease-out]" style={{ animationDelay: `${idx * 0.08}s` }}>
                    <span className="inline-flex items-center justify-center rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-black text-indigo-700 uppercase tracking-widest shrink-0">
                      {p.month}
                    </span>
                    <p className="text-sm font-medium text-slate-700">{p.task}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages OKE */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeSlideUp_0.6s_ease-out]">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                Le pilotage temps réel{" "}
                <span className="text-blue-600">change tout</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Avec le dashboard OKE, vous n&apos;attendez plus le bilan annuel pour savoir où en est votre entreprise. Chaque décision est éclairée par des données à jour.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Trésorerie en temps réel", desc: "Soldes bancaires, encaissements et décaissements prévisionnels." },
                { title: "Résultat mensuel", desc: "P&L actualisé avant le 15 de chaque mois." },
                { title: "Créances échues", desc: "Suivi des retards de paiement, relances automatisées." },
                { title: "TVA & obligations", desc: "Calcul automatique, alertes avant les échéances MRA." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-6 border border-slate-100 hover:border-blue-200 transition-colors">
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
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
            <p className="mt-4 text-lg text-slate-600">Comptabilité à Maurice — les réponses à vos questions.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" />
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
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/10 text-blue-500 mb-8 border border-blue-500/20">
            <Calculator className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Une comptabilité{" "}
            <span className="text-blue-400">qui vous éclaire</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            BD Star Management Services, membre MIPA, assure votre comptabilité et conformité. Didier Laroussinie supervise personnellement chaque dossier.
          </p>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-blue-500/20">
                Demander un devis comptabilité
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
