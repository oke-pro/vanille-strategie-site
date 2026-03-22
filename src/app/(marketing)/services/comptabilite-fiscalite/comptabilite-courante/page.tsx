import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Calculator,
  BookOpen,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Zap,
  Lock,
  ArrowRight,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Comptabilité Courante à Maurice | BD Star Management Services",
  description: "Tenue comptable complète aux normes IFRS/mauriciennes, synchronisation bancaire automatique (MCB, AfrAsia), déclarations fiscales TVA/IS/PAYE, dashboard OKE temps réel.",
};

export default function ComptabiliteCourante() {
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
            <span className="font-medium text-slate-900">Comptabilité Courante</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bureau-moderne.jpg"
            alt="Comptabilité courante Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              Comptabilité — Tenue courante
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Comptabilité <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Courante</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Tenue comptable complète selon les normes IFRS et mauriciennes, synchronisation bancaire automatique, déclarations fiscales (TVA, IS, PAYE) et reporting mensuel en temps réel via le dashboard OKE.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Overview Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                Qu'est-ce que la comptabilité courante ?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                La comptabilité courante est la tenue quotidienne des livres de votre entreprise. Elle englobe l'enregistrement de chaque facture, dépense, paiement bancaire et mouvement de trésorerie selon les normes comptables en vigueur à Maurice et en France.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Au-delà d'une simple saisie, nous assurons une comptabilité de qualité qui vous permet de prendre des décisions éclairées, de vous préparer aux contrôles fiscaux et de disposer de déclarations fiscales précises et en conformité complète avec la MRA.
              </p>
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-bold mb-1">Supervisée par un expert-comptable</p>
                  <p>Tenue assurée sous la responsabilité d'un Expert-Comptable Diplômé (DEC) immatriculé au MIPA.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/digital-nomad-maurice.jpg"
                alt="Comptabilité courante"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Nos services de comptabilité courante
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: BookOpen,
                title: "Saisie et classification comptable",
                desc: "Enregistrement quotidien de vos factures, notes de frais et paiements. Classification automatique avec intelligence artificielle (85%+ de précision) ou manuelle selon vos besoins.",
              },
              {
                icon: Cpu,
                title: "Synchronisation bancaire automatique",
                desc: "Connecteurs directs avec MCB, AfrAsia et SBM. Réconciliation instantanée des transactions. Détection des écarts et anomalies en temps réel.",
              },
              {
                icon: Calculator,
                title: "Déclarations fiscales automatisées",
                desc: "Génération mensuelle des déclarations TVA (VAT), IS trimestriel et PAYE. Conformité complète avec la MRA. Transmission électronique sécurisée.",
              },
              {
                icon: BarChart3,
                title: "Reporting mensuel et KPI",
                desc: "Compte de résultat, bilan simplifié, analyse des marges, suivi de trésorerie. Indicateurs clés adaptés à votre secteur d'activité.",
              },
              {
                icon: Lock,
                title: "Piste d'audit inaltérable",
                desc: "Chaque écriture est horodatée, documentée et liée à sa pièce justificative. Archivage sécurisé en conformité avec la MRA (7 ans minimum).",
              },
              {
                icon: Zap,
                title: "Access via OKE 24/7",
                desc: "Visualisez votre comptabilité en temps réel depuis le dashboard OKE. Exports PDF, Excel, transmission à vos auditeurs ou banquiers en un clic.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-6">
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

      {/* Normes comptables Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Conformité IFRS et normes mauriciennes
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Comptabilité bistandard FR/IFRS",
                points: [
                  "Normes IFRS obligatoires à Maurice (Financial Reporting Act)",
                  "Comptabilité parallèle en normes françaises (PCG) si demandé",
                  "Rapprochement des écarts (immobilisations, provisions, IFRS 16)",
                  "Bénéfice pour les groupes franco-mauriciens et leurs investisseurs",
                  "Audit externe facilité (pas de retraitement systématique)",
                ],
                bg: "bg-blue-50 border-blue-200 text-blue-900",
              },
              {
                title: "Conformité MRA et déclarations",
                points: [
                  "Déclarations mensuelles VAT (15%) conformes à la MRA",
                  "Déclaration annuelle IS à la date butoir (30 juin de l'année suivante)",
                  "PAYE correctement déclaré et versé (8,5% de cotisations sociales)",
                  "Traçabilité complète des transactions et pièces justificatives",
                  "Zéro risque d'audit fiscal surprenant grâce à notre rigueur",
                ],
                bg: "bg-emerald-50 border-emerald-200 text-emerald-900",
              },
            ].map((section, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${section.bg}`}>
                <h3 className="text-2xl font-bold mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Comment nous organisons votre comptabilité courante
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Mise en place de vos connecteurs bancaires",
                desc: "Configuration des accès sécurisés aux comptes MCB, AfrAsia ou SBM. Imports automatisés quotidiens. Mise en place d'une nomenclature comptable adaptée à votre secteur.",
              },
              {
                step: "2",
                title: "Saisie et classification quotidienne/hebdomadaire",
                desc: "Vous nous envoyez vos factures fournisseurs, notes de frais et pièces justificatives. Notre équipe classe et saisit chaque transaction. Validation de la cohérence et complétude.",
              },
              {
                step: "3",
                title: "Rapprochements bancaires et ajustements",
                desc: "Réconciliation mensuelle des comptes. Identification et justification des écarts. Éventuels ajustements (amortissements, provisions, charges à payer).",
              },
              {
                step: "4",
                title: "Génération des déclarations fiscales",
                desc: "Déclarations TVA mensuelle, IS annuelle, PAYE à la source. Transmission électronique à la MRA si vous le souhaitez. Archivage sécurisé de tous les documents.",
              },
              {
                step: "5",
                title: "Reporting mensuel et pilotage",
                desc: "Production de compte de résultat, bilan simplifié, tableau de bord KPI. Disponible dans OKE 24/7 pour vous et vos auditeurs. Export PDF/Excel à la demande.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white font-bold text-lg">
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

      {/* Pricing & CTA Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Tarification flexible
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "PME / Startup",
                desc: "Chiffre d'affaires < MUR 10M",
                price: "À partir de",
                amount: "MUR 5,000",
                freq: "/mois",
                features: [
                  "Saisie comptable complète",
                  "Synchronisation bancaire",
                  "Déclarations TVA/IS",
                  "Dashboard OKE inclus",
                  "Support par email",
                ],
              },
              {
                title: "Entreprise établie",
                desc: "Chiffre d'affaires MUR 10M–50M",
                price: "À partir de",
                amount: "MUR 8,000",
                freq: "/mois",
                features: [
                  "Tout du forfait PME",
                  "Reporting mensuel avancé",
                  "Analyse coûts/marges",
                  "Support téléphonique",
                  "KPI sectoriels",
                ],
                featured: true,
              },
              {
                title: "Grand groupe",
                desc: "Chiffre d'affaires > MUR 50M",
                price: "Devis",
                amount: "personnalisé",
                freq: "",
                features: [
                  "Solution complète sur mesure",
                  "Consolidation multi-entités",
                  "Comité de direction inclus",
                  "Support dédié",
                  "Contrats spécifiques",
                ],
              },
            ].map((plan, i) => (
              <div key={i} className={`rounded-3xl p-8 border-2 transition-all ${
                plan.featured
                  ? "bg-blue-50 border-blue-300 shadow-lg"
                  : "bg-white border-slate-200 shadow-sm"
              }`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6">{plan.desc}</p>
                <div className="mb-8">
                  <p className="text-sm text-slate-600">{plan.price}</p>
                  <p className={`text-4xl font-black ${plan.featured ? "text-blue-600" : "text-slate-900"}`}>
                    {plan.amount}
                  </p>
                  <p className="text-sm text-slate-600">{plan.freq}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block">
                  <Button className={`w-full h-12 text-base font-bold ${
                    plan.featured
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  }`}>
                    Demander un devis
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Quels sont les délais pour avoir ma comptabilité à jour ?",
                a: "Nous visons un délai maximal de 10 jours après la clôture du mois. Les déclarations fiscales sont traitées en priorité avant les dates de transmission à la MRA.",
              },
              {
                q: "Puis-je accéder à ma comptabilité en temps réel ?",
                a: "Oui, complètement. Via le dashboard OKE, vous voyez vos transactions, votre trésorerie et vos rapports financiers 24/7. Access sécurisé avec authentification multi-facteurs.",
              },
              {
                q: "Que se passe-t-il en cas de contrôle fiscal ?",
                a: "Notre piste d'audit inaltérable est précisément pensée pour les contrôles. Nous fournissons tous les justificatifs numérisés et une documentation complète. Vous êtes couvert.",
              },
              {
                q: "Vos tarifs incluent-ils les déclarations TVA et IS ?",
                a: "Oui, les déclarations TVA (mensuelle), IS (annuelle) et PAYE sont incluses dans nos forfaits. Seules les déclarations optionnelles comme la Déclaration de Revenus Fonciers ont un coût additionnel.",
              },
            ].map((item, i) => (
              <details key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="flex items-center justify-between font-bold text-slate-900">
                  {item.q}
                  <ArrowRight className="h-5 w-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Prêt à maîtriser votre comptabilité ?
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Discutez de vos besoins avec notre équipe. Nous vous proposerons une solution clé en main, transparente et ajustée à votre taille et secteur.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 h-14 text-lg font-bold">
              Planifier une consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
