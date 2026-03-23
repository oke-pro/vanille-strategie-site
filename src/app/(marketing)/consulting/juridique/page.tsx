import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Scale,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  FileText,
  Users,
  Building2,
  BookOpen,
  Briefcase,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services Juridiques à Maurice — Secrétariat, AG, Compliance | Vanille Consulting",
  description:
    "Secrétariat juridique, assemblées générales, modifications statutaires, compliance CBRD/MRA. Accompagnement par Didier Laroussinie — groupe intégré depuis 2012.",
  openGraph: {
    title: "Services Juridiques — Vanille Consulting",
    description:
      "Secrétariat juridique, AG, conformité CBRD/MRA — un groupe intégré pour la gestion légale de votre société à Maurice.",
    url: "https://vanillestrategie.fr/consulting/juridique",
    type: "website",
  },
};

const services = [
  {
    icon: BookOpen,
    title: "Secrétariat juridique",
    description:
      "Tenue des registres obligatoires (registre des actionnaires, des administrateurs, des charges), rédaction des procès-verbaux, mise à jour du registre des bénéficiaires effectifs.",
  },
  {
    icon: Users,
    title: "Assemblées générales",
    description:
      "Organisation et tenue des AGO et AGE : convocations, rédaction de l\u2019ordre du jour, procès-verbaux, résolutions écrites. Conformité avec le Companies Act 2001.",
  },
  {
    icon: FileText,
    title: "Modifications statutaires",
    description:
      "Changement de dénomination, modification de l\u2019objet social, augmentation de capital, cession de parts, nomination/révocation d\u2019administrateurs. Dépôt auprès du CBRD (Corporate and Business Registration Department).",
  },
  {
    icon: ShieldCheck,
    title: "Compliance CBRD / MRA (Mauritius Revenue Authority)",
    description:
      "Annual Return, déclarations de bénéficiaires effectifs, mise à jour des informations auprès du Companies and Business Registration Department et de la Mauritius Revenue Authority.",
  },
  {
    icon: Scale,
    title: "Compliance FSC (Financial Services Commission) — GBC",
    description:
      "Rapports de conformité pour la Financial Services Commission, renouvellement de licence, documentation de substance économique, reporting annuel obligatoire.",
  },
  {
    icon: Building2,
    title: "Restructurations & opérations spéciales",
    description:
      "Fusions, scissions, apports partiels d\u2019actifs, transformation de forme juridique, dissolution et liquidation volontaire. Accompagnement de bout en bout.",
  },
];

const complianceTimeline = [
  {
    deadline: "Annuel",
    tasks: [
      "Dépôt de l\u2019Annual Return auprès du CBRD",
      "Déclaration des bénéficiaires effectifs",
      "Tenue de l\u2019AGO (dans les 6 mois après clôture)",
      "Renouvellement de la licence FSC (GBC)",
    ],
  },
  {
    deadline: "À chaque changement",
    tasks: [
      "Notification au CBRD sous 14 jours (administrateurs, secrétaire, siège)",
      "Mise à jour du registre des bénéficiaires effectifs sous 14 jours",
      "Dépôt des résolutions spéciales sous 14 jours",
    ],
  },
  {
    deadline: "Continu",
    tasks: [
      "Tenue à jour des registres obligatoires",
      "Conservation des PV pendant 7 ans minimum",
      "Conformité AML/KYC — mise à jour des dossiers clients",
    ],
  },
];

const faqs = [
  {
    question: "Le secrétariat juridique est-il obligatoire à Maurice ?",
    answer:
      "Oui. Le Companies Act 2001 impose à chaque société enregistrée au CBRD de nommer un secrétaire de société (personne physique ou morale). Pour les GBC, ce rôle doit être assuré par une Management Company agréée par la FSC — notre partenaire BD Star Management Services remplit cette fonction.",
  },
  {
    question: "Quelles sont les sanctions en cas de non-conformité ?",
    answer:
      "Le non-dépôt de l\u2019Annual Return entraîne des pénalités financières croissantes et peut mener à la radiation (\"struck off\") de la société du registre du CBRD. Pour les GBC, la FSC peut suspendre ou révoquer la licence en cas de manquement aux obligations de reporting ou de substance.",
  },
  {
    question: "Pouvez-vous gérer le secrétariat juridique d\u2019une société existante ?",
    answer:
      "Oui. Nous reprenons régulièrement le secrétariat juridique de sociétés existantes. Nous commençons par un audit de conformité complet (registres, Annual Returns, bénéficiaires effectifs) pour identifier les éventuelles lacunes, puis nous régularisons la situation avant de prendre en charge la gestion courante.",
  },
  {
    question: "Comment se déroule une modification des statuts ?",
    answer:
      "La modification statutaire nécessite une résolution spéciale adoptée en AGE (majorité des 3/4 des voix exprimées). Nous rédigeons le projet de résolution, convoquons l\u2019assemblée, rédigeons le procès-verbal et déposons les documents mis à jour auprès du CBRD. Le processus prend généralement 2 à 3 semaines.",
  },
];

export default function JuridiquePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl animate-[fadeSlideUp_0.6s_ease-out]">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              Vanille Consulting — Juridique
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Services{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                juridiques
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Secrétariat juridique, assemblées générales, modifications statutaires et conformité CBRD/MRA/FSC — la gestion légale de votre société mauricienne confiée à un groupe intégré.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Confier mon secrétariat juridique
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-white/80 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <ShieldCheck className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Conformité garantie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      {/* Services */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-[fadeSlideUp_0.6s_ease-out]">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Nos services juridiques</h2>
            <p className="mt-4 text-lg text-slate-600">
              De la tenue des registres à la restructuration — un accompagnement juridique complet pour votre société à Maurice.
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

      {/* Compliance Timeline */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Calendrier de conformité
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Les obligations légales de votre société mauricienne, anticipées et respectées par notre équipe.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {complianceTimeline.map((period, idx) => (
              <div
                key={period.deadline}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm animate-[fadeSlideUp_0.6s_ease-out]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-black text-blue-700 uppercase tracking-widest mb-6">
                  <Clock className="h-4 w-4" />
                  {period.deadline}
                </span>
                <div className="space-y-4">
                  {period.tasks.map((task) => (
                    <div key={task} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-700">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi un groupe intégré */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeSlideUp_0.6s_ease-out]">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                Pourquoi confier le juridique à un{" "}
                <span className="text-blue-600">groupe intégré ?</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Le secrétariat juridique touche à la comptabilité, à la fiscalité et aux permis de travail. Avec un groupe intégré, chaque modification statutaire est immédiatement répercutée sur votre comptabilité et vos déclarations fiscales — sans déperdition d&apos;information.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Un seul interlocuteur pour le juridique, la comptabilité et la fiscalité",
                  "Modifications statutaires répercutées immédiatement sur les déclarations",
                  "Coordination automatique entre secrétariat et obligations MRA/FSC",
                  "Archivage centralisé de tous les documents légaux",
                  "Réactivité maximale — pas de va-et-vient entre prestataires",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 grid-cols-2">
              {[
                { stat: "300+", label: "Sociétés gérées" },
                { stat: "100%", label: "Taux de conformité" },
                { stat: "14j", label: "Délai max notification CBRD" },
                { stat: "12+", label: "Années d\u2019expérience à Maurice" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-6 border border-slate-100 text-center hover:border-blue-200 transition-colors">
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
            <p className="mt-4 text-lg text-slate-600">Services juridiques à Maurice — vos questions, nos réponses.</p>
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
            <Scale className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Votre conformité juridique{" "}
            <span className="text-blue-400">entre de bonnes mains</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Didier Laroussinie et l&apos;équipe BD Star assurent la gestion juridique complète de votre société à Maurice. Un groupe intégré, un seul interlocuteur.
          </p>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-blue-500/20">
                Confier mon secrétariat juridique
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
