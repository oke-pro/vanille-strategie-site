import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  FileText,
  Briefcase,
  Laptop,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Users,
  Globe2,
  HelpCircle,
  AlertTriangle,
  TreePalm,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Guide des Permis de Résidence à Maurice — Comparatif Complet 2025",
  description:
    "Occupation Permit Investor, Self-Employed, Professional, Premium Visa, Retirement Permit, Permanent Residence : conditions, délais, coûts et documents requis pour chaque permis.",
  openGraph: {
    title: "Guide des Permis de Résidence à Maurice — Comparatif Complet",
    description:
      "Tous les types de permis de résidence à Maurice comparés : conditions, délais, coûts. 30+ dossiers accompagnés chaque année par Vanille Stratégie.",
    url: "https://vanillestrategie.fr/mobility/permis-residence",
    type: "website",
  },
};

const permits = [
  {
    icon: Briefcase,
    name: "Occupation Permit — Investor",
    duration: "10 ans (renouvelable)",
    cost: "Pas de frais EDB (Economic Development Board)",
    delay: "3 à 6 semaines",
    conditions: [
      "Investissement min. 50 000 USD dans une société mauricienne",
      "Business plan viable soumis à l'EDB",
      "Substance locale : bureau, employés, activité réelle",
    ],
    ideal: "Entrepreneurs créant ou rachetant une société à Maurice.",
    color: "from-teal-600 to-cyan-600",
  },
  {
    icon: Laptop,
    name: "Occupation Permit — Self-Employed",
    duration: "10 ans (renouvelable)",
    cost: "Pas de frais EDB",
    delay: "3 à 6 semaines",
    conditions: [
      "Revenu annuel min. 13 500 USD (depuis août 2025)",
      "Activité exercée en nom propre ou via société",
      "Enregistrement auprès de la MRA (Mauritius Revenue Authority)",
    ],
    ideal:
      "Freelances, consultants et indépendants souhaitant s'installer durablement.",
    color: "from-cyan-600 to-teal-600",
  },
  {
    icon: ShieldCheck,
    name: "Occupation Permit — Professional",
    duration: "10 ans (renouvelable)",
    cost: "Pas de frais EDB",
    delay: "2 à 4 semaines",
    conditions: [
      "Contrat de travail avec un employeur mauricien",
      "Salaire min. selon catégorie (ProPass / Expert Pass)",
      "Qualifications ou expérience professionnelle pertinente",
    ],
    ideal:
      "Cadres et salariés recrutés par une entreprise mauricienne.",
    color: "from-teal-500 to-emerald-600",
  },
  {
    icon: Globe2,
    name: "Premium Visa",
    duration: "1 an (renouvelable)",
    cost: "Gratuit",
    delay: "48h à 2 semaines",
    conditions: [
      "Revenus provenant exclusivement de l'étranger",
      "Aucune activité rémunérée localement",
      "Justificatif de revenus réguliers",
    ],
    ideal:
      "Digital nomads, retraités actifs et personnes travaillant à distance.",
    color: "from-violet-600 to-purple-600",
  },
  {
    icon: TreePalm,
    name: "Retirement Permit",
    duration: "10 ans (renouvelable)",
    cost: "Pas de frais EDB",
    delay: "3 à 6 semaines",
    conditions: [
      "Transfert min. 1 500 USD/mois sur un compte mauricien",
      "Âge min. : 50 ans",
      "Pas d'activité professionnelle locale",
    ],
    ideal:
      "Retraités souhaitant profiter du cadre de vie mauricien.",
    color: "from-rose-600 to-pink-600",
  },
  {
    icon: Award,
    name: "Permanent Residence Permit",
    duration: "Permanent",
    cost: "Variable selon catégorie",
    delay: "8 à 16 semaines",
    conditions: [
      "Investissement immobilier ≥ 375 000 USD (PDS/Smart City)",
      "Ou 3 ans d'Occupation Permit consécutifs",
      "Ou investisseur avec participation ≥ 50 000 USD depuis 3 ans",
    ],
    ideal:
      "Expatriés souhaitant un ancrage définitif à Maurice.",
    color: "from-amber-600 to-yellow-600",
  },
];

const comparatif = [
  {
    type: "OP Investor",
    duree: "10 ans",
    investissement: "50 000 USD",
    activiteLocale: "Oui (obligatoire)",
    fiscalite: "15 % flat",
    famille: "Dependents inclus",
  },
  {
    type: "OP Self-Employed",
    duree: "10 ans",
    investissement: "Aucun",
    activiteLocale: "Oui (indépendant)",
    fiscalite: "15 % flat",
    famille: "Dependents inclus",
  },
  {
    type: "OP Professional",
    duree: "10 ans",
    investissement: "Aucun",
    activiteLocale: "Oui (salarié)",
    fiscalite: "15 % flat",
    famille: "Dependents inclus",
  },
  {
    type: "Premium Visa",
    duree: "1 an",
    investissement: "Aucun",
    activiteLocale: "Non",
    fiscalite: "0 % local",
    famille: "Demande séparée",
  },
  {
    type: "Retirement Permit",
    duree: "10 ans",
    investissement: "1 500 USD/mois",
    activiteLocale: "Non",
    fiscalite: "0 % local",
    famille: "Dependents inclus",
  },
  {
    type: "Permanent Residence",
    duree: "Permanent",
    investissement: "375 000 USD (immo)",
    activiteLocale: "Optionnelle",
    fiscalite: "15 % flat",
    famille: "Dependents inclus",
  },
];

const faq = [
  {
    q: "Quel permis choisir si je suis entrepreneur digital ?",
    a: "L'Occupation Permit Investor est le plus courant : vous créez une société locale (Domestic Company ou GBC), investissez 50 000 USD et exercez votre activité depuis Maurice. Si vous travaillez seul, l'OP Self-Employed est une alternative plus légère.",
  },
  {
    q: "Puis-je travailler avec un Premium Visa ?",
    a: "Le Premium Visa interdit toute activité rémunérée localement. Vous pouvez télétravailler pour des clients étrangers, mais pas facturer d'entités mauriciennes. Pour une activité locale, un Occupation Permit est nécessaire.",
  },
  {
    q: "Combien de temps faut-il pour obtenir un permis ?",
    a: "Le Premium Visa peut être obtenu en 48 heures. Les Occupation Permits nécessitent généralement 3 à 6 semaines. La Permanent Residence demande 8 à 16 semaines selon la catégorie.",
  },
  {
    q: "Ma famille peut-elle m'accompagner ?",
    a: "Oui. Tous les Occupation Permits et le Retirement Permit permettent d'inclure conjoint et enfants à charge (Dependent Permit). Pour le Premium Visa, chaque membre de la famille doit faire une demande séparée.",
  },
  {
    q: "Faut-il un casier judiciaire vierge ?",
    a: "Oui, un extrait de casier judiciaire de votre pays d'origine (ou de résidence des 5 dernières années) est exigé pour toute demande de permis de résidence à Maurice.",
  },
  {
    q: "Vanille Stratégie peut-il gérer le dossier de A à Z ?",
    a: "Absolument. Notre groupe intégré prend en charge la constitution du dossier, le dépôt auprès de l'EDB, le suivi administratif et les relances. Plus de 30 dossiers accompagnés chaque année.",
  },
];

export default function PermisResidenceMobilityPage() {
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
              Permis de résidence
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-paradise.jpg"
            alt="Permis de résidence à Maurice — Guide complet"
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
              Vanille Mobility — Guide complet
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Permis de résidence{" "}
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                à l&apos;Île Maurice
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              6 types de permis, des conditions précises et des délais variables. Ce guide vous aide à identifier le permis adapté à votre profil et vos objectifs.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/ressources/simulateur-visa">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 px-8 h-14 text-lg font-bold shadow-lg shadow-teal-500/20"
                >
                  Simulateur de visa
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 h-14 text-lg font-bold"
                >
                  Diagnostic gratuit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent" />

      {/* Intro */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Quel permis pour votre projet ?
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Maurice propose plusieurs catégories de permis de résidence, chacune adaptée à un profil spécifique. Les conditions ont été mises à jour suite à la réforme EDB d&apos;août 2025. Didier Laroussinie et son équipe vous orientent vers la solution la plus adaptée.
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
              <Clock className="h-4 w-4" />
              Données à jour — Post-réforme 2025
            </div>
            <div className="flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
              <Users className="h-4 w-4" />
              30+ dossiers/an
            </div>
          </div>
        </div>
      </section>

      {/* Permit Cards */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl text-center mb-16">
            Les 6 types de permis de résidence
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {permits.map((permit) => (
              <Card
                key={permit.name}
                className="overflow-hidden border-none shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-br ${permit.color} p-6 text-white`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                    <permit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">{permit.name}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Durée
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-900">
                        {permit.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Coût
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-900">
                        {permit.cost}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Délai
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-900">
                        {permit.delay}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      Conditions clés
                    </p>
                    <ul className="space-y-2">
                      {permit.conditions.map((c, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle2 className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-1">
                      Profil idéal
                    </p>
                    <p className="text-sm text-slate-700">{permit.ideal}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif Table */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl text-center mb-4">
            Comparatif détaillé
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Tous les permis côte à côte pour vous aider à choisir en un coup d&apos;oeil.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                  <th className="px-6 py-4 text-left font-bold">Type de permis</th>
                  <th className="px-6 py-4 text-left font-bold">Durée</th>
                  <th className="px-6 py-4 text-left font-bold">Investissement</th>
                  <th className="px-6 py-4 text-left font-bold">Activité locale</th>
                  <th className="px-6 py-4 text-left font-bold">Fiscalité</th>
                  <th className="px-6 py-4 text-left font-bold">Famille</th>
                </tr>
              </thead>
              <tbody>
                {comparatif.map((row, i) => (
                  <tr
                    key={row.type}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50"
                    } hover:bg-teal-50/50 transition-colors`}
                  >
                    <td className="px-6 py-4 font-bold text-slate-900">
                      {row.type}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{row.duree}</td>
                    <td className="px-6 py-4 text-slate-600">
                      {row.investissement}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {row.activiteLocale}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {row.fiscalite}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{row.famille}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 p-6">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-amber-900">
                Conditions sujettes à évolution
              </p>
              <p className="mt-1 text-sm text-amber-700">
                Les montants et conditions sont ceux en vigueur post-réforme EDB août 2025. L&apos;EDB peut modifier ces seuils à tout moment. Contactez-nous pour une vérification à jour de votre situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents requis */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Documents requis
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Quel que soit le type de permis, un socle commun de documents est exigé. Nous vous accompagnons dans la collecte et la mise en conformité de chaque pièce.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Passeport valide (min. 6 mois après la date de demande)",
                  "Photos d'identité aux normes ICAO",
                  "Extrait de casier judiciaire (pays d'origine ou de résidence)",
                  "Certificat médical récent",
                  "Justificatif de domicile à Maurice (bail ou titre de propriété)",
                  "Relevés bancaires des 6 derniers mois",
                  "CV ou parcours professionnel détaillé",
                  "Business plan (OP Investor uniquement)",
                  "Contrat de travail (OP Professional uniquement)",
                  "Justificatif de pension (Retirement Permit uniquement)",
                ].map((doc, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 border border-slate-100"
                  >
                    <FileText className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-slate-700">{doc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-600 p-8 text-white">
              <h3 className="text-2xl font-bold">
                Notre groupe intégré vous accompagne
              </h3>
              <p className="mt-4 text-teal-100 leading-relaxed">
                Didier Laroussinie et son équipe prennent en charge l&apos;intégralité de votre dossier de permis de résidence : collecte des pièces, rédaction du business plan, dépôt auprès de l&apos;EDB, suivi et relances jusqu&apos;à l&apos;obtention.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Constitution complète du dossier",
                  "Rédaction du business plan sur mesure",
                  "Dépôt et suivi auprès de l'EDB",
                  "Gestion des demandes complémentaires",
                  "Accompagnement post-obtention (banque, logement, fiscalité)",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-teal-200 shrink-0" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-8"
                  >
                    Diagnostic gratuit
                  </Button>
                </Link>
              </div>
            </div>
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
              Les réponses aux questions que nous recevons le plus souvent sur les permis de résidence.
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
            <FileText className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Trouvez le bon permis{" "}
            <br />
            <span className="text-teal-400">en 2 minutes</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Notre simulateur de visa analyse votre profil et vous oriente vers le permis le plus adapté. Gratuit et sans engagement.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/ressources/simulateur-visa">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-teal-500/20"
              >
                Lancer le simulateur
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-12 h-16 text-lg font-bold"
              >
                Parler à un expert
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
