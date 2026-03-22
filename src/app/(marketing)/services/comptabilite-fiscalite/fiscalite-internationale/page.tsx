import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Globe2,
  PieChart,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Shield,
  ArrowRight,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fiscalité Internationale à Maurice | Transfer Pricing, Partial Exemption",
  description: "Optimisation fiscale légale par convention fiscale France-Maurice. Partial Exemption (IS 3%). Transfer Pricing documentation. Conformité CRS/FATCA.",
};

export default function FiscaliteInternationale() {
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
            <span className="font-medium text-slate-900">Fiscalité Internationale</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/digital-nomad-maurice.jpg"
            alt="Fiscalité internationale Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-indigo-300 backdrop-blur-sm">
              Fiscalité — Internationale
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Fiscalité <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">Internationale</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Optimisation fiscale légale via conventions bilatérales, Partial Exemption, Transfer Pricing documentation, et conformité aux standards OCDE (BEPS, Pilier 2, CRS/FATCA).
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-8 h-14 text-lg font-bold shadow-lg shadow-indigo-500/20">
                  Demander une consultation
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
                L'opportunité fiscale mauricienne pour groupes internationaux
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Maurice offre un régime fiscal attractif et stable, renforcé par des conventions bilatérales (notamment avec la France) qui éliminent les risques de double imposition. Pour les groupes opérant dans plusieurs juridictions, optimiser le positionnement fiscal est un enjeu stratégique majeur.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Notre expertise couvre la structuration légale, la documentation de Transfer Pricing, la Partial Exemption et la conformité aux standards internationaux (BEPS, OCDE, FATCA/CRS). Nous sécurisons votre groupe contre les risques d'ajustements fiscaux inattendus.
              </p>
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-sm text-indigo-900">
                  <p className="font-bold mb-1">Didier Laroussinie supervise</p>
                  <p>Expertise Big Four, convention France-Maurice maîtrisée, conseils basés sur 40+ ans de pratique.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bureau-moderne.jpg"
                alt="Fiscalité internationale"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Les 4 piliers de notre approche
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Globe2,
                title: "Convention bilatérale France-Maurice",
                desc: "Signature du 11 décembre 1980, amendée en 2011. Élimination de la double imposition, échange d'informations fiscales, règlement des différends. Conditions strictes de substance économique à satisfaire.",
              },
              {
                icon: TrendingUp,
                title: "Partial Exemption (taux effectif 3%)",
                desc: "Exemption de 80% sur revenus de source étrangère (dividendes, intérêts, royalties, services) pour GBC approuvées. Conditions : substance locale, actifs éligibles, documentation stricte.",
              },
              {
                icon: Briefcase,
                title: "Transfer Pricing documentation",
                desc: "Justification de prix de transfert conformes aux standards OCDE et Finance Act 2025. Étude de comparabilité, benchmarking international, fichier local et maître accessible à la MRA.",
              },
              {
                icon: Lock,
                title: "Conformité CRS/FATCA et BEPS Pilier 2",
                desc: "Déclarations de compte étranger (CRS), signalements FATCA, rapports GFI (Global Intangible Low-Taxed Income), Fair Share Contribution si applicable (€750M+).",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
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

      {/* Convention FR-MU Deep Dive */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Convention fiscale France-Maurice : Les clés
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Avantages pour structures franco-mauriciennes",
                points: [
                  "Élimination de la double imposition : crédit d'impôt au niveau français",
                  "Accès à la Partial Exemption de Maurice (IS 3% au lieu de 15%)",
                  "Dividendes et revenus de source étrangère exempts ou réduits",
                  "Principe de la substance économique : droit à la convention si gestion et contrôle à Maurice",
                  "Dividende français versé de Maurice sans retenue à la source",
                ],
                bg: "bg-indigo-50 border-indigo-200",
              },
              {
                title: "Risques et conditions strictes",
                points: [
                  "MIPA et MRA scrute la substance locale (bureau, employés, décisions)",
                  "Shell Company non reconnue : substance doit être réelle",
                  "Documentation exigée : contrats, procès-verbaux, preuve de gestion locale",
                  "Contentieux possible en cas de remise en cause par autorités françaises",
                  "Alignement post-BEPS : Pilier 2 (15% minimum) applicable si groupe > €750M",
                ],
                bg: "bg-amber-50 border-amber-200",
              },
            ].map((section, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${section.bg}`}>
                <h3 className="text-2xl font-bold mb-6 text-slate-900">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer Pricing */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Transfer Pricing : Documenter et justifier
          </h2>

          <div className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm mb-8">
            <div className="flex gap-4 mb-6">
              <AlertCircle className="h-6 w-6 text-amber-600 shrink-0" />
              <div>
                <p className="font-bold text-slate-900 mb-2">Finance Act 2025 : nouvelles exigences</p>
                <p className="text-slate-600 text-sm">
                  À partir de janvier 2025, la documentation Transfer Pricing est obligatoire pour transactions intra-groupe dépassant certains seuils. Non-respect = amendes substantielles.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Analyse de comparabilité",
                desc: "Étude fonctionnelle des activités, identification des comparables de marché, construction de fourchette de prix de transfert conforme aux lignes directrices OCDE.",
              },
              {
                step: "2",
                title: "Documentation locale",
                desc: "Fichier détaillé (transfert pricing study) justifiant les prix pratiqués. Déclaration sur formulaire MRA. Conservé 5 ans et accessible à la demande.",
              },
              {
                step: "3",
                title: "Fichier maître (si groupe international)",
                desc: "Documentation groupe centralisée décrivant structure, stratégie, actifs intangibles, allocation des risques. Partagée entre autorités fiscales via accord OCDE.",
              },
              {
                step: "4",
                title: "Monitorage et mise à jour",
                desc: "Révision annuelle des prix pratiqués. Ajustement si conditions de marché changent. Protection contre ajustements unilatéraux des autorités fiscales (correspondance mutual agreement).",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white font-bold text-lg">
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

      {/* Partial Exemption */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Partial Exemption : L'opportunité fiscale 3%
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                metric: "80%",
                label: "Exemption sur revenus étrangers",
              },
              {
                metric: "3%",
                label: "Taux effectif d'IS (au lieu de 15%)",
              },
              {
                metric: "0%",
                label: "Retenue à la source sur dividendes",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-indigo-50 border border-indigo-200 p-8 text-center">
                <p className="text-5xl font-black text-indigo-600 mb-2">{item.metric}</p>
                <p className="text-slate-600 font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Conditions d'éligibilité à la Partial Exemption
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Entreprise constituée sous loi mauricienne (GBC ou local)",
                "Revenus de source étrangère uniquement (dividendes, intérêts, royalties)",
                "Possession effective d'actifs générateurs (filiales, brevets, etc.)",
                "Substance économique vérifiable : bureau à Maurice, équipe locale, gestion effective",
                "Approbation GBC type 1 ou 2 (si applicable) auprès du FSC",
                "Déclaration du bénéfice de l'exemption à la MRA",
                "Documentation complète : contrats, procès-verbaux, organigramme",
                "Respect des normes BEPS et Pilier 2 de l'OCDE",
              ].map((cond, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm leading-relaxed">{cond}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FATCA/CRS Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Conformité CRS/FATCA et standards internationaux
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "CRS — Common Reporting Standard",
                items: [
                  "Échange automatique d'informations financières (AEOI)",
                  "Maurice participant depuis 2018 (signataire OCDE)",
                  "Déclaration annuelle des bénéficiaires de comptes étrangers",
                  "Obligations de diligence raisonnable sur clients et actionnaires",
                  "Consultation de l'AEOI pour bénéficiaires effectifs étrangers",
                ],
              },
              {
                title: "FATCA — Foreign Account Tax Compliance Act",
                items: [
                  "Standard américain pour comptes US ou bénéficiaires US",
                  "Accord FATCA France-USA : déclarations IGA (Inter-Governmental Agreement)",
                  "Identification de bénéficiaires effectifs US (citoyens, résidents permanents)",
                  "Déclaration W-8BEN ou W-9 selon statut fiscal",
                  "Retenue FATCA 30% si non-compliance",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600 text-sm">
                      <Shield className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Nos services de fiscalité internationale
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Structuration légale d'entités (GBC vs holding local)",
              "Étude de convention bilatérale applicable",
              "Calcul et optimisation du taux effectif d'IS",
              "Analyse Partial Exemption et éligibilité",
              "Documentation Transfer Pricing (local + master file)",
              "Support pour demande approbation GBC",
              "Déclarations CRS/FATCA et diligence de compliance",
              "Planification de distributions (dividendes, royalties)",
              "Ajustement post-audit fiscal ou correspondance",
              "Audit de substance économique (substance review)",
              "Conseils sur mobilité internationale et exit tax",
              "Support continu (veille réglementaire, mises à jour)",
            ].map((service, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 p-6 border border-slate-200 flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Structurez votre groupe en toute sécurité fiscale
          </h2>
          <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
            Consultez nos experts en fiscalité internationale. Nous vous présenterons les opportunités légales et les risques associés à votre structure.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 h-14 text-lg font-bold">
              Planifier une consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
