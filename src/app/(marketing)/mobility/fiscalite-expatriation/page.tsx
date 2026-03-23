import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Scale,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  FileText,
  Globe2,
  ShieldCheck,
  Clock,
  TrendingUp,
  Calculator,
  Users,
  Banknote,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Fiscalité de l'Expatriation — Exit Tax, Résidence Fiscale, Convention Franco-Mauricienne",
  description:
    "Résidence fiscale, exit tax française, convention France-Maurice, structuration patrimoniale pré-départ. Audit fiscal recommandé 12 à 24 mois avant votre expatriation.",
  openGraph: {
    title:
      "Fiscalité de l'Expatriation vers Maurice — Guide Complet",
    description:
      "Tout comprendre sur la fiscalité de l'expatriation : résidence fiscale, exit tax, convention bilatérale, erreurs à éviter. Par Didier Laroussinie, expert-comptable.",
    url: "https://vanillestrategie.fr/mobility/fiscalite-expatriation",
    type: "website",
  },
};

const erreurs = [
  {
    icon: AlertTriangle,
    title: "Partir sans audit fiscal préalable",
    description:
      "Ne pas anticiper les conséquences fiscales du départ (exit tax, plus-values latentes, ISF/IFI) peut coûter très cher. Un audit 12 à 24 mois avant le départ est indispensable.",
  },
  {
    icon: AlertTriangle,
    title: "Croire que l'on perd sa résidence fiscale en partant",
    description:
      "Le simple fait de quitter la France ne suffit pas. Si votre foyer fiscal, vos intérêts économiques ou votre activité principale restent en France, vous pouvez rester résident fiscal français.",
  },
  {
    icon: AlertTriangle,
    title: "Ignorer la convention fiscale France-Maurice",
    description:
      "La convention bilatérale prévoit des règles précises sur la répartition du droit d'imposer. Ne pas la maîtriser peut conduire à une double imposition évitable.",
  },
  {
    icon: AlertTriangle,
    title: "Ne pas déclarer l'exit tax",
    description:
      "L'exit tax doit être déclarée même si elle ne génère pas de paiement immédiat. L'omission de déclaration expose à des pénalités et à la perte du sursis de paiement.",
  },
  {
    icon: AlertTriangle,
    title: "Sous-estimer les obligations déclaratives résiduelles",
    description:
      "Même après le départ, certains revenus de source française restent imposables en France (revenus fonciers, dividendes, plus-values immobilières). Des déclarations annuelles restent nécessaires.",
  },
  {
    icon: AlertTriangle,
    title: "Structurer trop tard",
    description:
      "La structuration patrimoniale (donation, démembrement, apport-cession) doit être mise en place bien avant le départ pour être efficace et non abusive.",
  },
];

const mecanismes = [
  {
    icon: Scale,
    title: "Sursis de paiement automatique",
    description:
      "En cas de départ vers un État de l'UE/EEE ou un État ayant conclu une convention d'assistance administrative (dont Maurice), l'exit tax bénéficie d'un sursis de paiement automatique. Aucune garantie n'est exigée.",
    highlight: "Maurice est éligible au sursis automatique.",
  },
  {
    icon: Clock,
    title: "Dégrèvement après 2 ans",
    description:
      "Si les titres sont conservés pendant au moins 2 ans après le départ, l'exit tax est définitivement dégrevée. Il est donc souvent avantageux de conserver ses participations pendant cette période.",
    highlight: "Conservez vos titres 2 ans pour un dégrèvement total.",
  },
  {
    icon: Building2,
    title: "Apport-cession (150-0 B ter CGI)",
    description:
      "L'apport de titres à une holding avant la cession permet de bénéficier d'un report d'imposition sur la plus-value. Le mécanisme est complexe mais très efficace lorsqu'il est structuré en amont.",
    highlight: "À mettre en place 12 à 24 mois avant le départ.",
  },
  {
    icon: Banknote,
    title: "Donation avant départ",
    description:
      "La donation de titres avant le départ purge les plus-values latentes. Les abattements pour durée de détention et les abattements en ligne directe (100 000 EUR/enfant) peuvent être mobilisés.",
    highlight: "Purge des plus-values + transmission patrimoniale.",
  },
  {
    icon: TrendingUp,
    title: "Démembrement de propriété",
    description:
      "Le démembrement (donation de la nue-propriété avec réserve d'usufruit) permet de transmettre un patrimoine à moindre coût fiscal tout en conservant les revenus. Particulièrement efficace sur l'immobilier.",
    highlight: "Réduction de la base taxable à l'IFI.",
  },
];

const conventionPoints = [
  {
    title: "Résidence fiscale (art. 4)",
    content:
      "En cas de conflit de résidence entre la France et Maurice, la convention prévoit des critères de départage successifs : foyer permanent d'habitation, centre des intérêts vitaux, séjour habituel, nationalité.",
  },
  {
    title: "Revenus d'activité (art. 15)",
    content:
      "Les salaires et revenus d'activité sont imposables dans l'État où l'activité est exercée. Si vous travaillez à Maurice, vos revenus y sont imposés à 15 % flat.",
  },
  {
    title: "Dividendes (art. 10)",
    content:
      "Les dividendes versés par une société française à un résident mauricien sont imposables à Maurice, avec une retenue à la source limitée à 5 % (participation ≥ 10 %) ou 15 % en France.",
  },
  {
    title: "Intérêts (art. 11)",
    content:
      "Les intérêts de source française versés à un résident mauricien ne sont pas imposables en France (exonération de retenue à la source).",
  },
  {
    title: "Plus-values immobilières (art. 13)",
    content:
      "Les plus-values sur immeubles situés en France restent imposables en France, même pour un résident mauricien. Taux de 19 % + prélèvements sociaux (avec exonération possible après 22/30 ans de détention).",
  },
  {
    title: "Pensions (art. 18)",
    content:
      "Les pensions de retraite de source française sont imposables uniquement à Maurice (sauf pensions publiques). À Maurice, les pensions étrangères bénéficient d'un abattement de 50 % avant imposition.",
  },
];

const faq = [
  {
    q: "Quand dois-je commencer à préparer ma fiscalité d'expatriation ?",
    a: "Idéalement 12 à 24 mois avant le départ. Certaines structurations (apport-cession, donation, démembrement) nécessitent un délai incompressible pour être efficaces et non abusives. Plus tôt vous commencez, plus les options sont nombreuses.",
  },
  {
    q: "L'exit tax s'applique-t-elle à tout le monde ?",
    a: "L'exit tax concerne les contribuables qui détiennent des participations (actions, parts sociales) d'une valeur totale supérieure à 800 000 EUR ou représentant plus de 50 % du capital d'une société. Les plus-values latentes, les créances et les plus-values en report sont visées.",
  },
  {
    q: "Vais-je être doublement imposé (France + Maurice) ?",
    a: "Non, la convention fiscale Franco-Mauricienne prévoit des mécanismes d'élimination de la double imposition (crédit d'impôt ou exemption selon le type de revenu). Une structuration correcte garantit qu'aucun revenu n'est taxé deux fois.",
  },
  {
    q: "Quel est le taux d'imposition à Maurice ?",
    a: "L'impôt sur le revenu à Maurice est de 15 % flat (taux unique). Il n'y a pas d'impôt sur les plus-values, pas de droits de succession, pas d'ISF/IFI. Les revenus de source étrangère non rapatriés à Maurice ne sont pas imposés.",
  },
  {
    q: "Dois-je continuer à déclarer en France après mon départ ?",
    a: "Oui, pour les revenus de source française (loyers, dividendes, plus-values immobilières). Vous devez déposer une déclaration de revenus des non-résidents (centre des impôts de Noisy-le-Grand). Les revenus de source mauricienne ne sont plus déclarés en France.",
  },
  {
    q: "Vanille Stratégie peut-elle gérer la partie fiscale de mon expatriation ?",
    a: "Oui. Didier Laroussinie, expert-comptable et fondateur de Vanille Stratégie, réalise personnellement l'audit fiscal pré-départ et coordonne la structuration avec votre conseil fiscal français. Notre groupe intégré couvre la fiscalité des deux côtés de la convention.",
  },
];

export default function FiscaliteExpatriationPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-teal-600">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/mobility" className="hover:text-teal-600">
              Vanille Mobility
            </Link>
            <span>/</span>
            <span className="font-medium text-slate-900">
              Fiscalité de l&apos;expatriation
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bureau-moderne.jpg"
            alt="Fiscalité de l'expatriation vers Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-teal-300 backdrop-blur-sm">
              Vanille Mobility — Fiscalité
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Fiscalité de{" "}
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                l&apos;expatriation
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Résidence fiscale, exit tax, convention Franco-Mauricienne, structuration patrimoniale. Anticipez les enjeux fiscaux de votre départ 12 à 24 mois en avance.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 px-8 h-14 text-lg font-bold shadow-lg shadow-teal-500/20"
                >
                  Demander un audit fiscal
                </Button>
              </Link>
              <Link href="/ressources/simulateur-fiscal">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 h-14 text-lg font-bold"
                >
                  Simulateur fiscal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent" />

      {/* Alerte : anticiper */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-12">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 shrink-0">
                <Clock className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-amber-900">
                  Audit fiscal recommandé : 12 à 24 mois avant le départ
                </h2>
                <p className="mt-4 text-lg text-amber-800 leading-relaxed">
                  La fiscalité de l&apos;expatriation est complexe et les erreurs coûteuses. Un audit fiscal pré-départ permet d&apos;identifier les risques (exit tax, double imposition, obligations déclaratives résiduelles) et de mettre en place les structurations nécessaires dans les délais légaux.
                </p>
                <p className="mt-4 text-sm font-bold text-amber-700">
                  Didier Laroussinie réalise personnellement chaque audit fiscal d&apos;expatriation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Résidence fiscale */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Résidence fiscale : les critères
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                La résidence fiscale en France est déterminée par l&apos;article 4 B du Code Général des Impôts. Vous êtes considéré comme résident fiscal français si vous remplissez l&apos;un des critères suivants :
              </p>
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Foyer fiscal",
                    desc: "Votre conjoint et/ou vos enfants résident en France, même si vous vivez à l'étranger.",
                  },
                  {
                    title: "Séjour principal",
                    desc: "Vous séjournez plus de 183 jours par an en France.",
                  },
                  {
                    title: "Activité professionnelle",
                    desc: "Vous exercez votre activité principale en France (sauf si elle est accessoire).",
                  },
                  {
                    title: "Centre des intérêts économiques",
                    desc: "Vos principaux investissements, revenus ou affaires sont en France.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white p-5 border border-slate-100 hover:border-teal-200 transition-colors"
                  >
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-600 p-8 text-white">
              <h3 className="text-2xl font-bold">
                Convention Franco-Mauricienne
              </h3>
              <p className="mt-4 text-teal-100 leading-relaxed">
                En cas de conflit de résidence (critères remplis dans les deux pays), la convention bilatérale France-Maurice prévoit des critères de départage hiérarchiques.
              </p>
              <div className="mt-8 space-y-4">
                {conventionPoints.map((point, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white/10 backdrop-blur-sm p-4"
                  >
                    <h4 className="font-bold text-sm">{point.title}</h4>
                    <p className="mt-1 text-xs text-teal-100 leading-relaxed">
                      {point.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Erreurs fréquentes */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Les 6 erreurs les plus fréquentes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Nous voyons ces erreurs régulièrement chez les expatriés qui n&apos;ont pas été accompagnés en amont.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {erreurs.map((erreur, i) => (
              <Card
                key={i}
                className="p-6 border-none shadow-sm hover:shadow-lg hover:border-red-100 transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500 mb-4">
                  <erreur.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-900">{erreur.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {erreur.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mécanismes d'atténuation exit tax */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Exit tax : mécanismes d&apos;atténuation
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              L&apos;exit tax n&apos;est pas une fatalité. Plusieurs mécanismes légaux permettent de la neutraliser ou de l&apos;atténuer significativement.
            </p>
          </div>

          <div className="space-y-6">
            {mecanismes.map((m, i) => (
              <Card
                key={i}
                className="p-8 border-none shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-600 text-white shrink-0">
                    <m.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {m.description}
                    </p>
                    <div className="mt-3 inline-block rounded-full bg-teal-50 px-4 py-1.5 text-xs font-bold text-teal-700">
                      {m.highlight}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Les questions que nous recevons le plus souvent sur la fiscalité de l&apos;expatriation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 p-6 hover:border-teal-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-teal-500 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900">{item.q}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-teal-600/10 text-teal-500 mb-8 border border-teal-500/20">
            <Calculator className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Audit fiscal{" "}
            <br />
            <span className="text-teal-400">pré-expatriation</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Didier Laroussinie analyse votre situation fiscale complète et vous remet un rapport détaillé avec les recommandations de structuration.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-teal-500/20"
              >
                Demander un audit fiscal
              </Button>
            </Link>
            <Link href="/ressources/simulateur-fiscal">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-12 h-16 text-lg font-bold"
              >
                Simulateur fiscal
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
