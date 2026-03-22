import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  UserCheck,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Zap,
  Award,
  Users,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Supervision Comptable par Expert-Comptable | DEC Maurice",
  description: "Supervision par expert-comptable DEC. Révision des comptes. Contrôle qualité. Formation équipes locales. Garantie MIPA.",
};

export default function SupervisionComptable() {
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
            <span className="font-medium text-slate-900">Supervision Comptable</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/digital-nomad-maurice.jpg"
            alt="Supervision comptable par expert"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-slate-400/30 bg-slate-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-slate-300 backdrop-blur-sm">
              Excellence — Supervisé par Expert
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Supervision <br />
              <span className="bg-gradient-to-r from-slate-400 to-slate-300 bg-clip-text text-transparent">Comptable</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Chaque compte, chaque déclaration supervisée par un Expert-Comptable DEC. Révision, contrôle qualité, formation équipes. La garantie MIPA pour vos finances.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-600 hover:bg-slate-700 px-8 h-14 text-lg font-bold shadow-lg shadow-slate-500/20">
                  Demander un audit
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
                Ce que signifie la supervision d'expert-comptable
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                À Maurice, la MIPA réglemente strictement la profession. Un Cabinet doit être supervisé par au moins un Expert-Comptable Diplômé (DEC) ayant 3+ ans d'expérience. Cette supervision n'est pas une simple formalité : c'est une responsabilité professionnelle et légale.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Chez BD Star Management Services, Didier Laroussinie (DEC, ex-Deloitte) supervise personnellement tous les comptes. Chaque écriture, chaque déclaration passe par son filtre. Cela garantit une qualité constante et une conformité totale avec les normes mauriciennes et internationales.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex gap-3">
                <Award className="h-5 w-5 text-slate-600 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-900">
                  <p className="font-bold mb-1">Didier Laroussynie — Expert-Comptable DEC</p>
                  <p>Inscrit au MIPA sous le numéro de licence DEC. 40+ ans d'expertise en comptabilité, fiscalité et audit. Ancien manager senior chez Deloitte.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bureau-moderne.jpg"
                alt="Supervision comptable expert"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is DEC */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Expert-Comptable DEC : Les critères
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Formation requise",
                items: [
                  "Diplôme en comptabilité/audit reconnu par MIPA",
                  "Masters ou BAC + 5 en accounting/finance minimum",
                  "Examen d'aptitude professionnelle MIPA (réussite obligatoire)",
                  "Formation continue obligatoire (30+ CPD points par an)",
                  "Assurance responsabilité civile professionnelle",
                ],
              },
              {
                title: "Expérience et responsabilités",
                items: [
                  "Minimum 3 ans d'expérience avant licence DEC",
                  "Responsabilité personnelle des opinions rendues",
                  "Secret professionnel absolu (confidententialité)",
                  "Code d'éthique strict (indépendance, objectivité)",
                  "Responsabilité disciplinaire auprès du MIPA",
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
                      <CheckCircle2 className="h-5 w-5 text-slate-600 shrink-0 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex gap-4 mb-4">
              <Award className="h-6 w-6 text-slate-600 shrink-0 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Didier Laroussinie : Profil de l'expert</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Didier Laroussinie détient la licence DEC depuis plus de 30 ans. Il a commencé sa carrière chez Deloitte, où il a dirigé le département Audit & Conseil pour 10 années. Depuis, il a supervisé les comptes de 300+ entreprises à Maurice, du PME à la multinationale. Son expertise en fiscalité internationale et Transfer Pricing le place parmi les meilleurs du marché.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Notre processus de contrôle qualité
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Revue des transactions mensuelles",
                desc: "Didier Laroussinie passe en revue tous les journal entries du mois. Vérification cohérence, documentations justificatives, conformité plan comptable.",
              },
              {
                step: "2",
                title: "Validations d'écritures complexes",
                desc: "Écritures d'ajustement, provisions, immobilisations, impôt différé : approuvées en personne par DEC avant comptabilisation.",
              },
              {
                step: "3",
                title: "Rapprochements et analyses",
                desc: "Chaque rapprochement bancaire vérifié. Analyses de variance mensuelles. Identification de tendances anormales ou points nécessitant clarification.",
              },
              {
                step: "4",
                title: "Déclarations fiscales révisées",
                desc: "Avant envoi à la MRA, chaque déclaration (TVA, IS, PAYE) est signée par Didier Laroussskie. Cela engage sa responsabilité et garantit votre sécurité.",
              },
              {
                step: "5",
                title: "Clôture de fin d'exercice",
                desc: "Révision complète des comptes de clôture. États financiers préparés selon ISA. Notes aux comptes expliquant politiques comptables et variations.",
              },
              {
                step: "6",
                title: "Rapport annuel et recommandations",
                desc: "Didier produit un rapport d'audit interne (Audit Summary). Observations et recommandations d'amélioration. Plan d'action pour année suivante.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-600 text-white font-bold text-lg">
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

      {/* Training & Development */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Formation des équipes locales
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            La supervision ne se limite pas à vérifier après coup. Nous formons vos équipes comptables locales pour qu'elles appliquent les bonnes pratiques dès le départ. C'est plus efficient et cela réduit les erreurs.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: BookOpen,
                title: "Formation initiale",
                desc: "Onboarding des nouveaux comptables. Normes IFRS, plan comptable, procédures internes, utilisation d'OKE.",
              },
              {
                icon: TrendingUp,
                title: "Formations continues",
                desc: "Mise à jour sur changements légaux (Finance Act, décrets MRA). Nouvelles normes comptables. Amélioration de productivité.",
              },
              {
                icon: Users,
                title: "Mentorship et supervision directe",
                desc: "Didier Laroussnie consacre du temps à former vos équipes. Revue de leurs travaux, correction d'erreurs, partage de bonnes pratiques.",
              },
              {
                icon: Zap,
                title: "Certification des compétences",
                desc: "À la fin de la formation, vos comptables sont certifiés par BD Star. Plus de confidence et reconnaissance auprès des stakeholders.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 mb-6">
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

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Les avantages d'une supervision forte
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                benefit: "Sécurité juridique maximale",
                desc: "Chaque écriture approuvée par un DEC responsable. En cas de contrôle fiscal, vous avez un expert à côté pour défendre vos positions.",
              },
              {
                benefit: "Réduction des ajustements fiscaux",
                desc: "Les erreurs comptables sont détectées avant la MRA. Zéro surprise au contrôle. Pénalités minimales voire inexistantes.",
              },
              {
                benefit: "Qualité des états financiers",
                desc: "States en conformité total IFRS. Notes explicatives détaillées. Acceptance facilitée par auditeurs externes et investisseurs.",
              },
              {
                benefit: "Confiance des tiers",
                desc: "Banques, investisseurs et partenaires reconnaissent le label « supervisé par expert-comptable ». Plus de facilité pour crédit, levée de fonds.",
              },
              {
                benefit: "Conformité MRA garantie",
                desc: "Déclarations TVA/IS signées par un DEC. Responsabilité professionnelle du DEC garantit la conformité. Moins de risques pour vous.",
              },
              {
                benefit: "Conseils stratégiques intégrés",
                desc: "Didier Laroussnie ajoute de la valeur au-delà de l'audit. Recommandations d'optimisation, alertes réglementaires, insights business.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-slate-600 shrink-0 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.benefit}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Niveaux de supervision
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                level: "Supervision Standard",
                desc: "Pour PME / Startup",
                features: [
                  "Revue mensuelle des comptes",
                  "Approbation transactions complexes",
                  "Révision déclarations fiscales",
                  "Rapport annuel d'audit",
                  "Support par email/téléphone",
                ],
                price: "Inclus",
                note: "dans comptabilité courante",
              },
              {
                level: "Supervision Premium",
                desc: "Pour entreprises établies",
                features: [
                  "Tout du niveau standard",
                  "Formation équipe comptable",
                  "Mentorship personnalisé",
                  "Comité de direction trimestriel",
                  "Conseils stratégiques ad-hoc",
                  "Support prioritaire",
                ],
                price: "À partir de",
                amount: "MUR 8,000",
                freq: "/mois",
                featured: true,
              },
              {
                level: "Supervision Complète",
                desc: "Pour groupes/GBC",
                features: [
                  "Tout du niveau premium",
                  "Supervision consolidation groupe",
                  "Due diligence interne semestrielle",
                  "Rapports FSC/regulatory",
                  "Disponibilité 24/7",
                  "Deloitte-level expertise",
                ],
                price: "Devis",
                amount: "personnalisé",
              },
            ].map((tier, i) => (
              <div key={i} className={`rounded-3xl p-8 border-2 transition-all ${
                tier.featured
                  ? "bg-white border-slate-300 shadow-lg"
                  : "bg-white border-slate-200 shadow-sm"
              }`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {tier.level}
                </h3>
                <p className="text-sm text-slate-600 mb-6">{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 shrink-0 mt-0.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="mb-8">
                  <p className="text-sm text-slate-600">{tier.price}</p>
                  {tier.amount && <p className={`text-3xl font-black text-slate-900`}>
                    {tier.amount}
                  </p>}
                  <p className="text-sm text-slate-600">{tier.freq}</p>
                </div>
                <Link href="/contact" className="block">
                  <Button className="w-full h-12 text-base font-bold bg-slate-600 hover:bg-slate-700 text-white">
                    Demander devis
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Didier */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12 text-center">
            Pourquoi choisir Didier Laroussinie
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bureau-moderne.jpg"
                alt="Didier Laroussinie"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="space-y-6">
                {[
                  {
                    title: "40+ ans d'expertise",
                    desc: "Depuis 1984. Comptabilité, fiscalité, audit. Toutes les mutations légales et réglementaires.",
                  },
                  {
                    title: "Deloitte pedigree",
                    desc: "Manager senior pendant 10 ans. Formé aux meilleures pratiques Big Four. Standards international",
                  },
                  {
                    title: "Domaine de compétence unique",
                    desc: "Connaître les enjeux France-Maurice. Conventions bilatérales, Exit Tax, substance requirements.",
                  },
                  {
                    title: "Engagé personnellement",
                    desc: "Didier ne délègue pas votre dossier. Il supervise lui-même. Sa réputation dépend de votre succès.",
                  },
                  {
                    title: "Approche humaine",
                    desc: "Conseil pragmatique, solutions adaptées. Pas de jargon inutile. Communication claire avec votre équipe.",
                  },
                  {
                    title: "Réseau professionnel large",
                    desc: "Contacts auditeurs, banquiers, autorités fiscales, avocats. Facilite les démarches. Ouvre des portes.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-800 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Confiez votre comptabilité à un expert
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Didier Laroussinie et son équipe supervisent votre comptabilité avec la rigueur Big Four et l'approche personnalisée d'un vrai consultant.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-slate-700 hover:bg-slate-50 px-8 h-14 text-lg font-bold">
              Prendre contact
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
