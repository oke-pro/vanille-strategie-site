import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Cpu,
  BarChart3,
  Zap,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Lock,
  ArrowRight,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard OKE — Comptabilité Temps Réel | BD Star Management Services",
  description: "Pilotage comptable en temps réel via OKE. Synchronisation bancaire automatique (MCB, AfrAsia, SBM). Rapports financiers instantanés. Intégration e-commerce (Shopify, Stripe).",
};

export default function DashboardOKE() {
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
            <span className="font-medium text-slate-900">Dashboard OKE</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/digital-nomad-maurice.jpg"
            alt="Dashboard OKE comptabilité en temps réel"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-cyan-300 backdrop-blur-sm">
              Technologie — Pilotage en temps réel
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Dashboard <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">OKE</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Comptabilité temps réel, synchronisation bancaire automatique, rapports financiers instantanés, intégration e-commerce. Solution propriétaire du Groupe Casalis.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 px-8 h-14 text-lg font-bold shadow-lg shadow-cyan-500/20">
                  Demander une démonstration
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* What is OKE */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                OKE : Le backbone comptable du Groupe Casalis
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                OKE est un logiciel de comptabilité cloud propriétaire développé et maintenu par le Groupe Casalis. Conçu pour les besoins des cabinets d'expertise comptable modernes et des entrepreneurs, il automatise le flux comptable complet : de l'import bancaire à la déclaration fiscale.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Contrairement aux solutions génériques (QuickBooks, Xero), OKE a été pensé pour le contexte mauricien : conformité MRA, normes IFRS, connectivité bancaire locale, et capacités collaboratives pour équipes distribuées.
              </p>
              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                <div className="text-sm text-cyan-900">
                  <p className="font-bold mb-1">Développé localement</p>
                  <p>OKE est le fruit de 15+ ans d'expertise en comptabilité et technologie dans l'océan Indien. Optimisé pour Maurice et l'Afrique du continent.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bureau-moderne.jpg"
                alt="Interface OKE"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Fonctionnalités clés d'OKE
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Cpu,
                title: "Synchronisation bancaire automatique",
                desc: "Connecteurs directs avec MCB, AfrAsia, SBM, Axis Bank et autres. Import quotidien des transactions, réconciliation instantanée, détection des anomalies.",
              },
              {
                icon: BarChart3,
                title: "Rapports financiers instantanés",
                desc: "Compte de résultat, bilan, tableau de trésorerie, rapports d'activité. Générés en temps réel, exportables PDF/Excel, personnalisables selon vos KPI.",
              },
              {
                icon: TrendingUp,
                title: "Tableaux de bord KPI",
                desc: "Suivi des marges, analyse clients, gestion de flux de trésorerie, indicateurs sectoriels. Alertes en temps réel sur anomalies ou seuils atteints.",
              },
              {
                icon: Smartphone,
                title: "Application mobile",
                desc: "Accès complet à vos données depuis votre téléphone. Validation de transactions, consultation des rapports, alertes push. iOS et Android.",
              },
              {
                icon: Lock,
                title: "Sécurité et conformité",
                desc: "Chiffrement AES-256, authentification multi-facteurs, backup quotidien, hébergement cloud certifié ISO 27001, piste d'audit complète.",
              },
              {
                icon: Zap,
                title: "Automatisation intelligente",
                desc: "Classification automatique des transactions (IA 85%+), règles de réconciliation personnalisées, rappels automatiques pour écritures manquantes.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 mb-6">
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

      {/* Integrations */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Écosystème d'intégrations
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Plateformes e-commerce et paiement
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                OKE s'intègre nativement avec 12+ plateformes e-commerce et processeurs de paiement. Vos ventes Shopify, WooCommerce ou Stripe sont automatiquement importées en comptabilité, avec ventilation par canal de vente.
              </p>
              <div className="space-y-3">
                {[
                  "Shopify — Synchro de commandes et paiements",
                  "WooCommerce — Import des ventes et rapprochement",
                  "Stripe, Paypal — Transactions de paiement",
                  "Booking.com, Airbnb — Revenus immobiliers",
                  "Amazon, eBay — Marketplace avec frais",
                  "Square, iZettle — Caisses enregistreuses",
                ].map((integ, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{integ}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
              <div className="flex items-center justify-center h-full text-slate-400">
                <Smartphone className="h-20 w-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Reporting */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Conformité et déclarations fiscales
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Déclaration TVA",
                desc: "Génération automatique du formulaire MRA (Form VAT-1), calcul de TVA due/récupérable, historique par période.",
                icon: "📋",
              },
              {
                title: "Déclaration IS",
                desc: "Préparation de la déclaration annuelle d'impôt sur les sociétés (Self-Assessment). Tous les détails fiscaux en un clic.",
                icon: "💼",
              },
              {
                title: "PAYE",
                desc: "Gestion des salaires et retenues sociales. Déclarations PAYE mensuelles à la MRA. Bulletins de paie automatisés.",
                icon: "💰",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex gap-4 mb-4">
              <CheckCircle2 className="h-6 w-6 text-cyan-600 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Piste d'audit inaltérable</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Chaque transaction est horodatée et documentée. OKE génère automatiquement les fichiers d'audit (export SAF-T) requis par la MRA en cas de contrôle. Zéro risque de rejet administratif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Collaboration en temps réel
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
              <div className="flex items-center justify-center h-full text-slate-400">
                <BarChart3 className="h-20 w-20" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Travail d'équipe sans friction
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                OKE est pensé pour les équipes distribuées. Vos employés comptables, auditeurs et directions peuvent accéder simultanément au même jeu de données en temps réel. Contrôle d'accès granulaire par rôle.
              </p>
              <div className="space-y-4">
                {[
                  {
                    role: "Comptable",
                    access: "Saisie, validation, rapprochements",
                  },
                  {
                    role: "Auditeur",
                    access: "Consultation, exports, tests",
                  },
                  {
                    role: "Directeur financier",
                    access: "Tableaux de bord, rapports, alertes",
                  },
                  {
                    role: "Expert-comptable",
                    access: "Supervision complète, toutes transactions",
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg bg-slate-50 p-4 flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">{item.role}</p>
                      <p className="text-sm text-slate-600">{item.access}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & Support */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Implémentation et support
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Audit des processus actuels",
                desc: "Visite de votre cabinet ou entreprise. Documentation des flux comptables, intégrations souhaitées, exigences de conformité.",
              },
              {
                step: "2",
                title: "Parametrage personnalisé",
                desc: "Création de votre plan comptable, configuration des banques, intégrations e-commerce, règles d'automatisation.",
              },
              {
                step: "3",
                title: "Migration des données historiques",
                desc: "Import des comptes de l'année précédente (si applicable), soldes d'ouverture, balances à date.",
              },
              {
                step: "4",
                title: "Formation et onboarding",
                desc: "Sessions de formation pour votre équipe. Accompagnement durant les premiers mois. Documentation en français.",
              },
              {
                step: "5",
                title: "Support continu 24/7",
                desc: "Support par email, chat et téléphone. Mises à jour régulières. Alertes de sécurité et compliance.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-600 text-white font-bold text-lg">
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

      {/* Comparison */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            OKE vs solutions génériques
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Fonctionnalité</th>
                  <th className="px-6 py-4 text-center font-bold text-cyan-600">OKE</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-600">QuickBooks</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-600">Xero</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Conformité MRA Maurice", oke: true, qb: false, xero: false },
                  { feature: "Normes IFRS bistandard", oke: true, qb: false, xero: false },
                  { feature: "Intégration MCB/AfrAsia", oke: true, qb: false, xero: false },
                  { feature: "Intégration e-commerce (12+)", oke: true, qb: true, xero: true },
                  { feature: "Généré TVA/IS automatique", oke: true, qb: false, xero: false },
                  { feature: "IA pour classification", oke: true, qb: true, xero: true },
                  { feature: "Support français 24/7", oke: true, qb: false, xero: false },
                  { feature: "Optimisé pour Maurice", oke: true, qb: false, xero: false },
                  { feature: "API ouvertes", oke: true, qb: true, xero: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.oke ? <CheckCircle2 className="h-5 w-5 text-cyan-600 mx-auto" /> : <span className="text-slate-400">−</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.qb ? <CheckCircle2 className="h-5 w-5 text-slate-400 mx-auto" /> : <span className="text-slate-400">−</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.xero ? <CheckCircle2 className="h-5 w-5 text-slate-400 mx-auto" /> : <span className="text-slate-400">−</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-700 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Découvrez OKE en action
          </h2>
          <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
            Demandez une démonstration personnalisée. Nous vous montrerons comment OKE automatise votre comptabilité et vous fait gagner 10+ heures par semaine.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 h-14 text-lg font-bold">
              Demander une démo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
