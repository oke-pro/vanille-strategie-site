import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Lock,
  Users,
  ArrowRight,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Audit & Conformité Maurice | Audit Annuel, FSC, Compliance Réglementaire",
  description: "Audit annuel obligatoire (Companies Act 2001). Conformité FSC pour GBC. Reporting réglementaire. Coordination auditeurs externes.",
};

export default function AuditConformite() {
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
            <span className="font-medium text-slate-900">Audit & Conformité</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/digital-nomad-maurice.jpg"
            alt="Audit et conformité Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-emerald-300 backdrop-blur-sm">
              Audit — Conformité réglementaire
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Audit & <br />
              <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">Conformité</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Audit annuel obligatoire, conformité FSC pour GBC, reporting réglementaire, coordination auditeurs externes. Sécurité totale de votre gouvernance.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-8 h-14 text-lg font-bold shadow-lg shadow-emerald-500/20">
                  Demander une consultation
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
                L'audit : Plus qu'une obligation légale
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                À Maurice, l'audit annuel est obligatoire pour toutes les entreprises constituées sous le Companies Act 2001 (sauf si chiffre d'affaires &lt; MUR 6M). C'est un processus qui va bien au-delà d'une simple case à cocher.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Un audit de qualité renforce votre crédibilité auprès des banques, investisseurs et autorités fiscales. Nous coordonnons ce processus avec rigueur, en assurant que vos états financiers reflètent fidèlement la réalité économique de votre entreprise.
              </p>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-sm text-emerald-900">
                  <p className="font-bold mb-1">Coordination avec auditeurs externes</p>
                  <p>Nous facilitons l'interface entre votre comptabilité et les auditeurs indépendants. Accès sécurisé à OKE, fourniture de documentations, clarification de points complexes.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bureau-moderne.jpg"
                alt="Audit et conformité"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Cadre réglementaire d'audit à Maurice
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Companies Act 2001",
                desc: "Loi-cadre sur les sociétés mauritiennes",
                items: [
                  "Audit obligatoire pour toutes les sociétés (sauf micro-entreprises)",
                  "Rapport d'audit annuel transmis à l'assemblée générale",
                  "Responsabilité du Board de garantir des comptes fiables",
                  "Auditeur indépendant nommé pour 3 ans (renouvelable)",
                  "Audit covering conformité & opinion sur states financiers",
                ],
              },
              {
                title: "Standards d'audit à Maurice",
                desc: "Normes Internationales d'Audit (ISA)",
                items: [
                  "ISA/ISAE applicables (adoption par MIPA des normes IAASB)",
                  "Audit financier (True & Fair View selon ISA 200+)",
                  "Procédures de substantive et analytical procedures",
                  "Évaluation des risques d'anomalies significatives",
                  "Rapports sur internal controls et observations",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6">{section.desc}</p>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Le processus d'audit type
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Planification de l'audit",
                desc: "Réunion avec auditeur externe pour définir scope, timing, honoraires. Identification des zones de risque (inventaires, créances douteuses, actifs intangibles).",
              },
              {
                step: "2",
                title: "Visite de terrain et collecte de preuves",
                desc: "L'auditeur visite votre site, inspecte les registres, teste les transactions, observe les inventaires. Nous coordonnons l'accès et fournissons les documents.",
              },
              {
                step: "3",
                title: "Tests de conformité interne",
                desc: "Évaluation des contrôles internes, circuits d'approbation, séparation des tâches, gestion des actifs. Identification des faiblesses potentielles.",
              },
              {
                step: "4",
                title: "Tests de substance (substantive procedures)",
                desc: "Vérification détaillée des montants clés : créances, stocks, immobilisations, dettes. Rapprochement avec tiers (confirmation bancaire, etc.).",
              },
              {
                step: "5",
                title: "Revue analytique et conclusion",
                desc: "Analyse globale des tendances, ratios, cohérence entre périodes. Formation de l'opinion de l'auditeur (opinion clean, qualified, adverse).",
              },
              {
                step: "6",
                title: "Rapport d'audit et management letter",
                desc: "Rapport d'audit (à l'AG). Management letter avec observations et recommandations pour améliorer les contrôles.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white font-bold text-lg">
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

      {/* FSC Compliance for GBC */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Conformité FSC pour GBC (Global Business Companies)
          </h2>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 mb-12">
            <div className="flex gap-4">
              <AlertCircle className="h-6 w-6 text-emerald-600 shrink-0 flex-shrink-0" />
              <div>
                <p className="font-bold text-emerald-900 mb-2">GBC = Extra scrutiny</p>
                <p className="text-emerald-800 text-sm leading-relaxed">
                  Les Global Business Companies bénéficient d'avantages fiscaux (Partial Exemption), mais sont soumises à des obligations de conformité strictes auprès de la FSC (Financial Services Commission) et de la MIPA. Non-respect = annulation de licence.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Obligations annuelles GBC",
                items: [
                  "Déclaration de Beneficial Ownership à la FSC",
                  "Audit annuel obligatoire (rapports à la FSC)",
                  "Déclaration de Substance Économique",
                  "Certification que la GBC respecte conditions d'approbation",
                  "Compliance avec Foreign Investment Act (si applicable)",
                  "Reporting CRS/FATCA si bénéficiaires non-résidents",
                ],
              },
              {
                title: "Substance Économique : checklist FSC",
                items: [
                  "Équipe de direction basée à Maurice (CEO, Secretary)",
                  "Bureau physique avec staffing visible et actif",
                  "Gestion effective de la stratégie depuis Maurice",
                  "Conseil d'administration régulièrement convoqué",
                  "Documentation complète (procès-verbaux, contrats)",
                  "Actifs/revenus correspondent à description de GBC",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Nos services d'audit et conformité
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Coordination d'audit",
                desc: "Interface entre votre comptabilité et auditeur externe. Fourniture de states financiers, working papers, documentation justificative.",
              },
              {
                icon: FileText,
                title: "Préparation états financiers",
                desc: "États financiers consolidés si groupe. Normes IFRS. Ajustements de clôture. Notes aux comptes détaillées.",
              },
              {
                icon: BarChart3,
                title: "Audit interne",
                desc: "Revue des contrôles internes, tests de transaction, recommandations d'amélioration. Avant audit externe si souhaité.",
              },
              {
                icon: Users,
                title: "Due diligence financière",
                desc: "Audit étendu pour M&A, refinancement ou due diligence investor. Analyse approfondie des risques financiers.",
              },
              {
                icon: Lock,
                title: "Conformité GBC/FSC",
                desc: "Vérification annuelle de substance économique. Documentation FSC. Déclarations de beneficial ownership. Rapports GBC.",
              },
              {
                icon: Zap,
                title: "Rapports de conformité réglementaire",
                desc: "Rapports CBRD (Compulsory Bank Reporting Directive), CRS, FATCA. Certification de compliance pour régulateurs.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-6">
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

      {/* Management Letter Issues */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Management Letter : Les problèmes courants
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            Après chaque audit, l'auditeur produit une management letter listant les faiblesses détectées. Voici les observations que nous voyons régulièrement :
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Absence d'inventaire physique de stocks (ou inventaire incomplet)",
              "Créances douteuses non provisionnées ou évaluées à date",
              "Comptes fournisseurs non réconciliés (soldes doublons, vieux comptes)",
              "Immobilisations : manque d'amortissement systématique ou base différente",
              "Pas de système de numérotation de comptes (compta peu structurée)",
              "Transactions sans documents justificatifs (reçus manquants)",
              "Délai de clôture trop long (comptes produites 3-4 mois après fin d'exercice)",
              "Insufficient segregation of duties (une personne = trop de pouvoirs)",
              "Absence d'analyse de variance (pas de comparaison budget/réel)",
              "Problèmes de TVA (déclarations mensuelles incohérentes, retenues non versées)",
              "Personnel n'ayant pas de contrats de travail signés (informalités)",
              "Absence de revue documentée des comptes (no internal review before audit)",
            ].map((issue, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex gap-3">
                <AlertCircle className="h-6 w-6 text-amber-600 shrink-0 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm">{issue}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">
              Nous corrigeons ces problèmes avant l'audit
            </h3>
            <p className="text-emerald-800 text-sm leading-relaxed">
              Grâce à nos services de comptabilité courante et supervision, nous minimisons les observations. Votre management letter est souvent quasi-vide, ce qui améliore votre crédibilité auprès des investisseurs et banquiers.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Tarification audit et conformité
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Coordination d'audit",
                desc: "Avec auditeur externe",
                features: [
                  "Fourniture états financiers",
                  "Working papers préparés",
                  "Disponibilité pendant audit",
                  "Clarifications données à l'auditeur",
                ],
                price: "Inclus",
                subtext: "dans comptabilité",
              },
              {
                title: "Audit interne complet",
                desc: "Avant audit externe",
                features: [
                  "Vérification tous contrôles",
                  "Tests de transaction",
                  "Rapport préliminaire",
                  "Recommandations",
                ],
                price: "À partir de",
                amount: "MUR 10,000",
                featured: true,
              },
              {
                title: "Due diligence financière",
                desc: "Pour M&A/investissement",
                features: [
                  "Audit historique 3-5 ans",
                  "Analyse risques identifiés",
                  "Rapport détaillé 30+ pages",
                  "Recommandations ajustements",
                ],
                price: "À partir de",
                amount: "MUR 25,000",
              },
            ].map((service, i) => (
              <div key={i} className={`rounded-3xl p-8 border-2 transition-all ${
                service.featured
                  ? "bg-emerald-50 border-emerald-300 shadow-lg"
                  : "bg-white border-slate-200 shadow-sm"
              }`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="mb-8">
                  <p className="text-sm text-slate-600">{service.price}</p>
                  {service.amount && <p className={`text-3xl font-black ${service.featured ? "text-emerald-600" : "text-slate-900"}`}>
                    {service.amount}
                  </p>}
                  <p className="text-sm text-slate-600">{service.subtext}</p>
                </div>
                <Link href="/contact" className="block">
                  <Button className={`w-full h-12 text-base font-bold ${
                    service.featured
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  }`}>
                    Demander devis
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Sécurisez votre audit
          </h2>
          <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
            Notre équipe s'assure que votre audit se déroule sans friction. Nous préparons vos comptes, coordonnons avec l'auditeur externe et minimisons les observations.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 h-14 text-lg font-bold">
              Prendre contact
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
