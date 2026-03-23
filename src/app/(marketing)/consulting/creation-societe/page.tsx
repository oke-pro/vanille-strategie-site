import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  HelpCircle,
  FileText,
  Users,
  Scale,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Création de Société à Maurice — Domestic, GBC, Authorised | Vanille Consulting",
  description:
    "Créez votre société à l'Île Maurice en 72h. Domestic Company, GBC ou Authorised Company — analyse fiscale par Didier Laroussinie, Expert-Comptable diplômé. Groupe intégré depuis 2012.",
  openGraph: {
    title: "Création de Société à Maurice — Vanille Consulting",
    description:
      "Constitution en 3 jours, 3 structures juridiques, accompagnement intégral par un Expert-Comptable Fiscaliste International.",
    url: "https://vanillestrategie.fr/consulting/creation-societe",
    type: "website",
  },
};

const structures = [
  {
    name: "Domestic Company",
    shortName: "DC",
    taxRate: "15%",
    delay: "3-5 jours",
    idealFor: "Activité locale, e-commerce, freelance à Maurice",
    highlights: [
      "Aucun capital minimum requis",
      "1 seul directeur suffit — pas de résidence obligatoire",
      "Imposition au taux standard de 15%",
      "Pas d\u2019accès aux conventions fiscales",
      "Idéale pour le marché local et régional",
    ],
    gradient: "from-blue-600 to-indigo-600",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  {
    name: "Global Business Company",
    shortName: "GBC",
    taxRate: "3%",
    delay: "3-6 semaines",
    idealFor: "Trading international, holding, consulting cross-border",
    highlights: [
      "Taux effectif de 3% via Partial Exemption (80%)",
      "Accès aux 47 conventions fiscales de Maurice",
      "Licence FSC (Financial Services Commission) obligatoire — substance renforcée",
      "Minimum 2 directeurs dont 1 résident mauricien",
      "Audit annuel obligatoire sans exception",
    ],
    gradient: "from-indigo-600 to-purple-600",
    bg: "bg-indigo-50",
    text: "text-indigo-700",
  },
  {
    name: "Authorised Company",
    shortName: "AC",
    taxRate: "0%",
    delay: "3-5 jours",
    idealFor: "Détention d\u2019actifs passifs, IP holding, structures intra-groupe",
    highlights: [
      "Exonérée d\u2019impôt si aucun revenu source Maurice",
      "Aucune exigence renforcée de substance",
      "1 seul directeur — pas de résidence obligatoire",
      "Pas d\u2019audit annuel obligatoire",
      "Pas d\u2019accès aux conventions fiscales",
    ],
    gradient: "from-purple-600 to-violet-600",
    bg: "bg-purple-50",
    text: "text-purple-700",
  },
];

const processSteps = [
  {
    icon: FileText,
    title: "Consultation initiale",
    description:
      "Entretien avec Didier Laroussinie pour analyser votre activité, résidence fiscale et objectifs. Recommandation de la structure optimale.",
    delay: "1-2 jours",
  },
  {
    icon: ShieldCheck,
    title: "Collecte KYC (Know Your Customer) & documents",
    description:
      "Checklist personnalisée : passeport certifié, justificatif de domicile, CV, références bancaires, business plan (GBC).",
    delay: "3-5 jours",
  },
  {
    icon: Building2,
    title: "Réservation du nom & rédaction des statuts",
    description:
      "Vérification de disponibilité auprès du CBRD (Corporate and Business Registration Department), rédaction de la Constitution et nomination des administrateurs.",
    delay: "1-2 jours",
  },
  {
    icon: Scale,
    title: "Dépôt auprès du CBRD",
    description:
      "Enregistrement officiel de la société. Pour une DC : 24-48h. Pour une GBC : après approbation FSC (3-4 semaines).",
    delay: "1-4 semaines",
  },
  {
    icon: Globe2,
    title: "Obtention BRN (Business Registration Number) & enregistrement MRA (Mauritius Revenue Authority)",
    description:
      "Attribution du Business Registration Number, enregistrement fiscal auprès de la Mauritius Revenue Authority, demande de TRC.",
    delay: "2-3 jours",
  },
  {
    icon: Briefcase,
    title: "Ouverture du compte bancaire",
    description:
      "Accompagnement auprès d\u2019AfrAsia, MCB, SBM ou HSBC. Compte multi-devises, carte internationale, Internet banking.",
    delay: "2-4 semaines",
  },
];

const faqs = [
  {
    question: "Quel est le délai réel pour créer une société à Maurice ?",
    answer:
      "Pour une Domestic Company ou une Authorised Company, comptez 3 à 5 jours ouvrés une fois les documents KYC validés. Pour une Global Business Company (GBC), le processus est plus long (3 à 6 semaines) en raison de l\u2019approbation requise par la Financial Services Commission (FSC). L\u2019ouverture du compte bancaire ajoute 2 à 4 semaines supplémentaires.",
  },
  {
    question: "Puis-je créer une société à Maurice sans y résider ?",
    answer:
      "Oui. Pour une Domestic Company ou une Authorised Company, aucune obligation de résidence pour les directeurs. Pour une GBC, au moins un directeur doit être résident mauricien — notre partenaire BD Star Management Services fournit un administrateur résident qualifié et agréé FSC.",
  },
  {
    question: "Quelle est la différence entre GBC et Domestic Company ?",
    answer:
      "La GBC bénéficie d\u2019un taux d\u2019imposition effectif de 3% (via la Partial Exemption de 80%) et de l\u2019accès aux 47 conventions fiscales de Maurice. En contrepartie, elle exige une licence FSC, des critères de substance renforcés et un audit annuel obligatoire. La Domestic Company est imposée à 15% mais offre une constitution plus rapide et moins de contraintes réglementaires.",
  },
  {
    question: "Le régime de Partial Exemption est-il menacé par le Pilier 2 de l\u2019OCDE ?",
    answer:
      "Maurice a introduit la Fair Share Contribution et le QDMTT dans le Finance Act 2025 pour se conformer au cadre GloBE. Les groupes dont le CA consolidé dépasse 750 M EUR sont concernés. Pour les PME et groupes intermédiaires, le taux effectif de 3% reste pleinement applicable.",
  },
];

export default function CreationSocieteConsultingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl animate-[fadeSlideUp_0.6s_ease-out]">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              Vanille Consulting — Création de société
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Créez votre société{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                à l&apos;Île Maurice
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Domestic Company, GBC ou Authorised Company — Didier Laroussinie, Expert-Comptable Fiscaliste, recommande la structure optimale et pilote l&apos;ensemble de la constitution.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Démarrer mon projet
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-white/80 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Constitution dès 72h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      {/* 3 Structures */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-[fadeSlideUp_0.6s_ease-out]">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              3 structures juridiques possibles
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Chaque structure répond à un besoin spécifique : activité locale, trading international ou détention d&apos;actifs passifs.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {structures.map((s, idx) => (
              <Card
                key={s.shortName}
                className="group flex flex-col overflow-hidden border-none shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-[fadeSlideUp_0.6s_ease-out]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${s.gradient}`} />
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} px-3 py-1.5 text-xs font-black text-white uppercase tracking-widest`}>
                      {s.shortName}
                    </span>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Taxe effective</p>
                      <p className="text-2xl font-black text-slate-900 leading-none mt-1">{s.taxRate}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{s.name}</h3>
                  <p className="mt-2 text-sm text-slate-500 italic">{s.idealFor}</p>
                  <p className="mt-1 text-xs font-bold text-blue-600">Délai : {s.delay}</p>
                  <div className="mt-6 space-y-3 flex-1">
                    {s.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" />
                        <span className="text-sm text-slate-700">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Processus de création en 6 étapes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              De la consultation initiale à l&apos;ouverture de votre compte bancaire, chaque étape est pilotée par notre groupe intégré.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-400 to-slate-200 hidden lg:block" />
            <div className="space-y-10">
              {processSteps.map((step, idx) => (
                <div key={step.title} className="relative lg:pl-24 animate-[fadeSlideUp_0.6s_ease-out]" style={{ animationDelay: `${idx * 0.08}s` }}>
                  <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black ring-4 ring-slate-50">
                    {idx + 1}
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="h-6 w-6 text-blue-600" />
                      <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      <Clock className="h-3 w-3" /> {step.delay}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages fiscaux */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeSlideUp_0.6s_ease-out]">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                Pourquoi Maurice pour{" "}
                <span className="text-blue-600">votre société ?</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                L&apos;Île Maurice combine une fiscalité compétitive, un cadre juridique inspiré du droit anglais et français, et un réseau de 47 conventions fiscales couvrant l&apos;Europe, l&apos;Asie et l&apos;Afrique.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { stat: "15%", label: "Taux IS nominal unique" },
                { stat: "3%", label: "Taux effectif GBC (Partial Exemption)" },
                { stat: "0%", label: "Impôt sur les plus-values" },
                { stat: "0%", label: "Droits de succession" },
                { stat: "47", label: "Conventions de non double imposition" },
                { stat: "72h", label: "Délai de constitution (DC)" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-6 border border-slate-100 hover:border-blue-200 transition-colors">
                  <p className="text-3xl font-black text-blue-600">{item.stat}</p>
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
            <p className="mt-4 text-lg text-slate-600">Création de société à Maurice — les réponses à vos questions.</p>
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
            <Building2 className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Prêt à créer votre société{" "}
            <span className="text-blue-400">à Maurice ?</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Didier Laroussinie analyse votre projet et recommande la structure juridique optimale. Consultation gratuite et confidentielle.
          </p>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-blue-500/20">
                Demander mon étude gratuite
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
