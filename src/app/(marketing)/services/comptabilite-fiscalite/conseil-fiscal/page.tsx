import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Building2,
  FileText,
  DollarSign,
  ArrowRight,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Conseil Fiscal International | Structuration, Planification, Optimisation",
  description: "Structuration fiscale sur mesure. Convention fiscale France-Maurice. Planification successorale. Substance requirements. Exit tax française.",
};

export default function ConseiFiscal() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <Link href="/services/comptabilite-fiscalite" className="hover:text-blue-600">Comptabilité & Fiscalité</Link>
            <span>/</span>
            <span className="font-medium text-slate-900">Conseil Fiscal</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bureau-moderne.jpg"
            alt="Conseil fiscal international"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-amber-300 backdrop-blur-sm">
              Conseil — Stratégie fiscale
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Conseil <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Fiscal</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Structuration fiscale sur mesure, planification successorale, optimisation légale, advising en mobilité internationale. Expertise Didier Laroussinie, ex-Deloitte.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 h-14 text-lg font-bold shadow-lg shadow-amber-500/20">
                  Planifier une consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Overview */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                Fiscalité d'entreprise : Une question de stratégie
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                La fiscalité n'est pas une fatalité à subir. Elle se structure, se planifie et s'optimise. Avec Didier Laroussinie, ancien manager chez Deloitte avec 40+ ans de pratique, nous vous guidons vers des décisions qui sécurisent votre patrimoine et boostent votre croissance.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Nous couvrons tout : de la structuration initiale d'une holding franco-mauricienne, à la planification de succession multi-génération, en passant par la mobilité internationale et l'optimisation des distributions de trésorerie.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm text-amber-900">
                  <p className="font-bold mb-1">Approche confidentielle et sécurisée</p>
                  <p>Secret professionnel absolu. Toutes les consultations bénéficient de protection privilégiée auprès des autorités fiscales.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/digital-nomad-maurice.jpg"
                alt="Conseil fiscal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Nos domaines de conseil
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Building2,
                title: "Structuration de holdings et groupes",
                desc: "Création et optimisation de structures multi-niveaux. Holding mère en France + exploitantes à Maurice. Allocation optimale du capital et des revenus.",
              },
              {
                icon: Lightbulb,
                title: "Optimisation de distributions",
                desc: "Stratégie de dividend timing et structure. Dividendes vs distributions de plus-values. Minimisation de la fiscalité tout en respectant la loi.",
              },
              {
                icon: FileText,
                title: "Planification successorale",
                desc: "Transmission patrimoniale multi-génération. Démembrement de propriété, donations, testaments. Zéro droits de succession à Maurice.",
              },
              {
                icon: Users,
                title: "Mobilité internationale",
                desc: "Conseils en changement de domicile fiscal. Obligations déclaratives (CRS, FATCA). Minors naturalization et residency permits.",
              },
              {
                icon: TrendingUp,
                title: "Optimisation du prix de transfert",
                desc: "Benchmarking international, étude de comparabilité. Prix de transfert justes et documentés selon OCDE et Finance Act 2025.",
              },
              {
                icon: DollarSign,
                title: "Gestion de la trésorerie",
                desc: "Stratégie de cash-pooling, minimisation des frais bancaires. Gestion multi-devises EUR/MUR. Prévention de pénalités sur trésorerie excessive.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exit Tax & French Considerations */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Exit Tax française : Préparer votre départ
          </h2>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 mb-12">
            <div className="flex gap-4 mb-4">
              <AlertCircle className="h-6 w-6 text-amber-600 shrink-0 flex-shrink-0" />
              <div>
                <p className="font-bold text-amber-900 mb-2">Exit Tax française : règle des 5 ans</p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Si vous êtes résident fiscal français et que vous quittez la France, vous restez assujetti à l'Exit Tax pendant 5 ans sur les plus-values latentes de vos titres. Planifier cette transition est stratégique pour optimiser votre fiscalité.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Stratégies avant départ de France",
                points: [
                  "Donation-partage de titres pour fixer la valeur avant expatriation",
                  "Apport de plus-values à une holding avant changement de domicile",
                  "Étalement du gain sur plusieurs exercices pour minimiser le taux marginal",
                  "Utilisation des abattements TFUE (titre françaises exonérées) si applicable",
                  "Optimisation des dates clés (dernier jour de résidence, premier achat Maurice)",
                ],
              },
              {
                title: "Gestion pendant et après les 5 ans",
                points: [
                  "Déclaration d'exit tax à l'administration française (Imprimé 2074-DIR)",
                  "Suivi annuel des variations de valeur de vos actifs",
                  "Possibilité de renoncer à l'application de la règle (certaines conditions)",
                  "Minimisation de la base d'exit tax par justification de dépréciations",
                  "Après 5 ans : libération totale de la surveillance française",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Substance Requirements */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Substance Requirements : La fondation de la légitimité fiscale
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            La MIPA et l'administration fiscale mauricienne exigent une véritable substance économique pour reconnaître une entité. Ce n'est pas juste du papier. Voici comment structurer correctement.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Substance locale (in Mauritius)",
                items: [
                  "Bureau physique à Maurice (adresse enregistrée auprès du Registrar)",
                  "Employés locaux qualifiés (directeur, accountant, decision makers)",
                  "Gestion effective et décisions prises à Maurice (board meetings, minutes)",
                  "Comptes bancaires locaux (MCB, AfrAsia, SBM)",
                  "Participation active dans la vie économique mauricienne",
                ],
              },
              {
                title: "Documentation et preuves",
                items: [
                  "Procès-verbaux des assemblées (en anglais ou français)",
                  "Décisions directeur documentées, votes d'actionnaires",
                  "Contrats de travail des employés mauritiens",
                  "Factures et contrats de location pour bureau",
                  "Extraits bancaires montrant activité locale",
                  "Proof of payment de taxes et cotisations sociales",
                ],
              },
              {
                title: "Risques d'insuffisance de substance",
                items: [
                  "Remise en cause par l'administration (challenge après audit)",
                  "Déni de convention bilatérale (Partial Exemption refusée)",
                  "Pénalités et intérêts (jusqu'à 25% de l'impôt non-payé)",
                  "Obligation de reclassification (entité non reconnue)",
                  "Complications pour crédits bancaires et restructuration",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-slate-400 shrink-0 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Notre processus de conseil
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Diagnostic fiscal complet",
                desc: "Audit de votre situation actuelle : structure, revenus, actifs, obligations déclaratives, risques identifiés.",
              },
              {
                step: "2",
                title: "Définition des objectifs",
                desc: "Discussion approfondie de vos ambitions : croissance, transmission, mobilité, optimisation de trésorerie.",
              },
              {
                step: "3",
                title: "Étude de scénarios",
                desc: "Modélisation de 2-3 structures alternatives avec impact fiscal simulé sur 5-10 ans.",
              },
              {
                step: "4",
                title: "Recommandation et plan d'action",
                desc: "Présentation de la structure recommandée, roadmap de transition, calendrier d'implémentation.",
              },
              {
                step: "5",
                title: "Implémentation supervisée",
                desc: "Accompagnement dans la création d'entités, modifications statutaires, notifications administratives.",
              },
              {
                step: "6",
                title: "Suivi et optimisation annuelle",
                desc: "Revue annuelle, ajustements si conditions changent, mise à jour de documentation.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-600 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Tarification du conseil
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consultation initiale",
                desc: "Diagnostic et recommandations",
                price: "MUR 25,000",
                freq: "unique",
                features: [
                  "Audit fiscal complet",
                  "Analyse de 2-3 scénarios",
                  "Recommandation écrite détaillée",
                  "Rapport de 20-30 pages",
                ],
              },
              {
                title: "Implémentation complète",
                desc: "Structure + accompagnement",
                price: "À partir de",
                amount: "MUR 50,000",
                freq: "",
                features: [
                  "Diagnostic inclus",
                  "Création d'entités",
                  "Mise à jour documentation",
                  "Notifications administratives",
                  "Support 3 mois",
                ],
                featured: true,
              },
              {
                title: "Retainer annuel",
                desc: "Suivi et optimisation",
                price: "À partir de",
                amount: "MUR 15,000",
                freq: "/an",
                features: [
                  "Revue annuelle complète",
                  "Optimisations tactiques",
                  "Support téléphonique",
                  "Mise à jour légale",
                  "Conseils adhoc",
                ],
              },
            ].map((plan, i) => (
              <div key={i} className={`rounded-3xl p-8 border-2 transition-all ${
                plan.featured
                  ? "bg-amber-50 border-amber-300 shadow-lg"
                  : "bg-white border-slate-200 shadow-sm"
              }`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6">{plan.desc}</p>
                <div className="mb-8">
                  <p className="text-sm text-slate-600">{plan.price}</p>
                  {plan.amount && <p className={`text-4xl font-black ${plan.featured ? "text-amber-600" : "text-slate-900"}`}>
                    {plan.amount}
                  </p>}
                  <p className="text-sm text-slate-600">{plan.freq}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block">
                  <Button className={`w-full h-12 text-base font-bold ${
                    plan.featured
                      ? "bg-amber-600 hover:bg-amber-700 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  }`}>
                    Prendre contact
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Transformez votre fiscalité en stratégie
          </h2>
          <p className="text-lg text-amber-100 mb-8 leading-relaxed">
            Avec Didier Laroussinie et son équipe, placez votre entreprise et votre patrimoine dans les meilleures conditions pour croître et se transmettre.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 px-8 h-14 text-lg font-bold">
              Planifier une consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
