import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { founder } from "@/data/site";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Handshake,
  Target,
  Key,
  CheckCircle2,
  ShieldCheck,
  Search,
  TrendingUp,
  FileText,
  Scale,
  PieChart,
  ArrowRight,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "Achat / Vente d'entreprise à Maurice — M&A, Due Diligence, LBO",
  description: "Audit financier, rédaction de contrats de cession, pactes d'actionnaires. Supervisé par un spécialiste M&A avec 40+ ans d'expérience.",
};

export default function AchatVentePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image 
            src="/images/entreprise-filiale.jpg" 
            alt="M&A Maurice" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              Services — Vanille Stratégie
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Fusions-Acquisitions <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">& Transmission</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              {founder.name} a piloté des opérations de LBO et de M&amp;A pendant plus de 40 ans. Profitez d&apos;un accompagnement de haut niveau pour vos projets à Maurice.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Consultation confidentielle
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Buy/Sell Sections */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="group p-8 md:p-12 border-none bg-slate-50 transition-all hover:bg-blue-50/50 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Vous achetez</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: "Sourcing stratégique", desc: "Identification de cibles qualitatives (off-market).", icon: Search },
                  { title: "Due diligence 360°", desc: "Audit financier, fiscal et juridique complet.", icon: ShieldCheck },
                  { title: "Évaluation & Négociation", desc: "Détermination de la juste valeur et pilotage des offres.", icon: TrendingUp },
                  { title: "Closing juridique", desc: "Rédaction des SPA (Sales Purchase Agreement).", icon: FileText },
                  { title: "Pacte d&apos;actionnaires", desc: "Sécurisation de la gouvernance et des sorties.", icon: Scale },
                  { title: "Accompagnement post-M&A", desc: "Intégration et pilotage via le dashboard OKE.", icon: Briefcase }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="group p-8 md:p-12 border-none bg-slate-900 text-white transition-all hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-lg">
                  <Key className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-bold text-white">Vous vendez</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: "Valorisation experte", desc: "Analyse multi-critères (DCF, Comparables).", icon: PieChart },
                  { title: "Dossier de présentation", desc: "Rédaction de l'Information Memorandum (IM).", icon: FileText },
                  { title: "Qualification acquéreurs", desc: "Filtrage et vérification de la solvabilité.", icon: Search },
                  { title: "Optimisation de sortie", desc: "Structuration fiscale de la cession.", icon: TrendingUp },
                  { title: "Avantage fiscal Maurice", desc: "0% d'impôt sur les plus-values de cession.", icon: ShieldCheck },
                  { title: "Négociation & Closing", desc: "Accompagnement jusqu'au transfert des fonds.", icon: Handshake }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">L&apos;expertise d&apos;un ancien <span className="text-blue-600">Big Four</span></h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Les opérations de haut de bilan à Maurice nécessitent une double culture : la maîtrise des standards internationaux (IFRS) et la connaissance fine du tissu économique local.
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-blue-50 border border-blue-100 italic text-blue-800 font-medium">
                &quot;Une due diligence réussie à Maurice est la clé de voûte de votre investissement. Nous ne nous contentons pas de lire les chiffres, nous analysons la substance.&quot;
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full bg-slate-200 mb-4 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                <Image src="/images/entrepreneur-maurice.jpg" alt="Didier Laroussinie" fill className="object-cover" />
              </div>
              <h4 className="font-bold text-slate-900">{founder.name}</h4>
              <p className="text-sm text-slate-500">{founder.title}</p>
              <Link href="/didier-laroussinie" className="mt-4 text-blue-600 font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                Voir son parcours <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Notre méthodologie M&A */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Notre méthodologie M&amp;A</h2>
            <p className="mt-4 text-lg text-slate-600">
              Une approche structurée, éprouvée par {founder.name} au cours de plus de 40 ans de carrière, dont 20 ans chez Deloitte.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">1. Cadrage stratégique et lettre de mission</h3>
              <p className="text-slate-600 leading-relaxed">
                Chaque opération débute par un cadrage rigoureux : compréhension de vos objectifs (acquisition de parts de marché, diversification, synergies opérationnelles, succession), définition du périmètre de la transaction, identification des critères de la cible idéale (secteur, taille, localisation, rentabilité). Nous formalisons notre intervention dans une lettre de mission détaillant le scope, le calendrier prévisionnel, les honoraires et les conditions de confidentialité. Un accord de non-divulgation (NDA) est signé dès le premier échange.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. Audit financier et due diligence</h3>
              <p className="text-slate-600 leading-relaxed">
                La due diligence est la pierre angulaire de toute transaction M&amp;A réussie. Notre équipe analyse en profondeur les états financiers (bilan, compte de résultat, flux de trésorerie) sur 3 à 5 exercices, identifie les risques cachés (dettes hors bilan, litiges en cours, contrats défavorables), évalue la qualité des actifs et la pérennité du chiffre d&apos;affaires. Nous réalisons également une due diligence fiscale (conformité déclarative, risques de redressement, positions agressives), juridique (contrats clés, litiges, conformité réglementaire) et opérationnelle (systèmes d&apos;information, ressources humaines, supply chain). L&apos;expérience Big Four de {founder.name} garantit un niveau d&apos;exigence conforme aux standards internationaux les plus élevés.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. Valorisation multi-critères</h3>
              <p className="text-slate-600 leading-relaxed">
                Nous utilisons plusieurs méthodes de valorisation pour déterminer la juste valeur de l&apos;entreprise cible : la méthode DCF (Discounted Cash Flows) basée sur les flux de trésorerie futurs actualisés, la méthode des comparables (multiples d&apos;EBITDA, de chiffre d&apos;affaires) par rapport aux transactions récentes dans le même secteur, et la méthode patrimoniale (actif net réévalué). La confrontation de ces approches permet de définir une fourchette de prix réaliste et de préparer les arguments de négociation. Pour les entreprises mauriciennes, nous intégrons les spécificités locales : taux de change MUR/EUR, prime de risque pays, ajustement pour la taille du marché.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">4. Négociation et structuration</h3>
              <p className="text-slate-600 leading-relaxed">
                La phase de négociation mobilise notre expertise en structuration de transactions. Nous intervenons sur la rédaction et la négociation de la LOI (Letter of Intent), le terme sheet détaillant les conditions financières et juridiques, la structuration de la transaction (achat d&apos;actions vs achat d&apos;actifs, earn-out, crédit-vendeur, GAP — Garantie d&apos;Actif et de Passif), et la coordination avec les conseils juridiques des deux parties. Notre objectif est de maximiser la valeur pour notre client tout en préservant les conditions d&apos;une relation constructive avec le vendeur ou l&apos;acheteur.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">5. Closing et accompagnement post-transaction</h3>
              <p className="text-slate-600 leading-relaxed">
                Le closing comprend la signature des actes définitifs (SPA — Sales Purchase Agreement), le transfert des actions ou des actifs, le versement des fonds (souvent via un compte séquestre), et les formalités administratives (enregistrement au Registrar of Companies, notifications MRA, mise à jour des registres). Après la transaction, nous assurons un suivi post-M&amp;A : intégration opérationnelle, mise en place de la gouvernance (conseil d&apos;administration, comités), pilotage de la performance via le dashboard OKE, et accompagnement sur les 100 premiers jours critiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'opérations */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Types d&apos;opérations accompagnées</h2>
            <p className="mt-4 text-lg text-slate-600">
              Nous intervenons sur l&apos;ensemble des opérations de haut de bilan, de la croissance externe à la transmission familiale.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Acquisition (Buy-side)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Accompagnement complet de l&apos;acquéreur : définition de la stratégie de croissance externe, identification et approche des cibles (y compris off-market), due diligence financière, fiscale et juridique, négociation du prix et des conditions, rédaction du SPA et closing. Nous intervenons sur des opérations allant de 500 000 USD à 50 millions USD à Maurice et dans la région océan Indien.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Cession (Sell-side)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Préparation et pilotage de la vente de votre entreprise : vendor due diligence pour anticiper les questions des acquéreurs, rédaction de l&apos;Information Memorandum (IM), data room virtuelle, qualification des acquéreurs potentiels (lettres d&apos;intention, proof of funds), négociation et maximisation du prix de cession. L&apos;avantage fiscal majeur à Maurice : 0 % d&apos;impôt sur les plus-values de cession.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">LBO — Leveraged Buyout</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Le LBO (rachat avec effet de levier) est la spécialité historique de {founder.name}, qui a structuré de nombreuses opérations de ce type chez Deloitte. Nous assistons les dirigeants et les fonds d&apos;investissement dans la structuration du montage financier (dette senior, dette mezzanine, fonds propres), la modélisation du business plan, la négociation avec les banques mauriciennes et internationales, et la mise en place de la gouvernance post-LBO.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Management Buyout (MBO)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Le MBO permet à l&apos;équipe de direction en place de racheter l&apos;entreprise qu&apos;elle dirige. Cette solution est idéale pour assurer la continuité managériale lors d&apos;un départ en retraite du fondateur ou d&apos;un désengagement d&apos;un actionnaire historique. Nous accompagnons les managers dans la structuration du financement, la négociation avec le vendeur, et la mise en place d&apos;un pacte d&apos;actionnaires adapté à la nouvelle gouvernance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Fusion et rapprochement</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                La fusion de deux entités mauriciennes (ou d&apos;une entité mauricienne avec une entité étrangère) nécessite une planification minutieuse : évaluation des synergies opérationnelles et financières, structuration juridique (fusion-absorption, fusion par création de société nouvelle), plan d&apos;intégration des équipes et des systèmes, communication interne et externe, et conformité avec le Companies Act 2001.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Transmission familiale</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                La transmission d&apos;une entreprise familiale est une opération émotionnellement et techniquement complexe. Nous accompagnons les familles mauriciennes et françaises dans la préparation de la succession : évaluation de l&apos;entreprise, structuration de la gouvernance familiale (family office, conseil de famille), optimisation fiscale de la transmission (donation, trust), et accompagnement de la nouvelle génération dans la prise en main opérationnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aspects juridiques et fiscaux */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Aspects juridiques et fiscaux des transactions M&amp;A à Maurice</h2>
            <p className="mt-4 text-lg text-slate-600">
              Maurice offre un cadre juridique inspiré du droit anglo-saxon, combiné à une fiscalité parmi les plus compétitives au monde.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Pacte d&apos;actionnaires</h3>
                <p className="text-slate-600 leading-relaxed">
                  Le pacte d&apos;actionnaires (Shareholders&apos; Agreement) est un document essentiel dans toute opération M&amp;A. Il régit les relations entre actionnaires et couvre : les droits de vote et la gouvernance (composition du Board, pouvoirs du CEO), les clauses de sortie (tag-along, drag-along, put option, call option), les clauses de non-concurrence et de non-sollicitation, la politique de distribution de dividendes, les mécanismes de résolution des conflits (médiation, arbitrage), et les conditions de valorisation en cas de sortie. À Maurice, le pacte est rédigé en anglais et soumis au droit mauricien ou, selon les cas, au droit anglais ou singapourien.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Garantie de passif (GAP)</h3>
                <p className="text-slate-600 leading-relaxed">
                  La garantie d&apos;actif et de passif est une clause fondamentale du SPA (Sales Purchase Agreement). Le vendeur garantit à l&apos;acheteur l&apos;exactitude des déclarations et représentations faites sur l&apos;entreprise (états financiers, conformité fiscale, absence de litiges cachés). En cas de révélation d&apos;un passif non déclaré après le closing, le vendeur indemnise l&apos;acheteur à hauteur du préjudice. La GAP est généralement plafonnée (50 à 100 % du prix de cession) et limitée dans le temps (18 à 36 mois). Un mécanisme de séquestre ou de retenue sur le prix permet de sécuriser l&apos;acheteur.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Structuration holding à Maurice</h3>
                <p className="text-slate-600 leading-relaxed">
                  Maurice est un hub reconnu pour la structuration de holdings internationales, grâce à son réseau de 46 conventions de non double imposition (dont la France, l&apos;Inde, l&apos;Afrique du Sud, le Royaume-Uni, la Chine), son impôt sur les sociétés de 15 % avec un crédit d&apos;impôt étranger pouvant réduire le taux effectif à 3 %, l&apos;absence de taxe sur les plus-values et les dividendes, et un cadre légal robuste (Companies Act 2001, Financial Services Act 2007). Une Global Business Company (GBC) détenant une licence de la Financial Services Commission (FSC) peut servir de véhicule d&apos;investissement vers l&apos;Afrique, l&apos;Asie et le Moyen-Orient. Nous structurons votre holding en coordination avec les autorités réglementaires.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Optimisation fiscale des transactions</h3>
                <p className="text-slate-600 leading-relaxed">
                  La structuration fiscale d&apos;une opération M&amp;A à Maurice offre des avantages significatifs : absence d&apos;impôt sur les plus-values de cession d&apos;actions (contrairement à la France où la flat tax est de 30 %), absence de retenue à la source sur les dividendes versés à des non-résidents, possibilité de rapatrier librement les fonds (aucun contrôle des changes), et déductibilité des intérêts d&apos;emprunt dans le cadre d&apos;un LBO. La convention fiscale France-Maurice permet d&apos;éviter la double imposition et de bénéficier de crédits d&apos;impôt. Notre équipe travaille en coordination avec vos conseils fiscaux français pour optimiser la structuration globale de l&apos;opération.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ achat/vente d'entreprise */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">FAQ — Achat &amp; Vente d&apos;entreprise à Maurice</h2>
            <p className="mt-4 text-lg text-slate-600">
              Les questions les plus fréquentes de nos clients sur les opérations de M&amp;A à Maurice.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Combien de temps dure une opération de M&A à Maurice ?",
                a: "La durée varie selon la complexité de l'opération. Une acquisition simple (PME, un seul vendeur, pas de dette) peut se conclure en 3 à 4 mois. Une opération plus complexe (LBO, multiples actionnaires, due diligence approfondie) nécessite 6 à 12 mois. Notre méthodologie structurée et notre connaissance du marché local permettent de respecter les délais."
              },
              {
                q: "Quels sont les honoraires pour un mandat M&A ?",
                a: "Nos honoraires sont composés d'un retainer mensuel (frais fixes couvrant le travail de recherche et d'analyse) et d'un success fee (pourcentage de la valeur de la transaction, généralement entre 2 % et 5 % selon la taille de l'opération). Cette structure aligne nos intérêts avec les vôtres : nous sommes rémunérés au résultat."
              },
              {
                q: "Un étranger peut-il détenir 100 % d'une entreprise mauricienne ?",
                a: "Oui, dans la grande majorité des secteurs, un étranger peut détenir 100 % du capital d'une société mauricienne sans restriction. Quelques secteurs réglementés (banque, assurance, télécommunications) nécessitent des licences spécifiques. Il n'y a pas d'obligation de partenaire local, contrairement à d'autres juridictions."
              },
              {
                q: "Comment se passe la due diligence à Maurice ?",
                a: "La due diligence suit les standards internationaux. Les comptes audités sont généralement disponibles (obligation pour les sociétés de plus de 50 MUR de chiffre d'affaires annuel). Les registres du Registrar of Companies sont accessibles en ligne. Les vérifications fiscales se font auprès de la MRA. La principale difficulté est souvent la taille réduite des entreprises mauriciennes, qui peut limiter la documentation disponible. Notre connaissance du tissu local compense ce facteur."
              },
              {
                q: "Quelle est la fiscalité sur la cession d'entreprise à Maurice ?",
                a: "C'est l'un des atouts majeurs de Maurice : il n'y a aucun impôt sur les plus-values de cession d'actions. Que vous vendiez après 1 an ou 20 ans, la totalité du gain vous revient. Il n'y a pas non plus de droits d'enregistrement sur les cessions d'actions (contrairement à la France où ils sont de 0,1 %). Les dividendes versés à des non-résidents ne sont pas soumis à retenue à la source."
              },
              {
                q: "Didier Laroussinie intervient-il personnellement sur chaque dossier ?",
                a: "Oui, Didier Laroussinie supervise personnellement chaque opération de M&A. Fort de ses 20 ans chez Deloitte (dont plusieurs années en tant qu'associé spécialisé en Corporate Finance et LBO), il apporte une expertise technique de premier plan et un réseau de contacts étendu dans le monde des affaires mauricien et international. Son intervention garantit un niveau de qualité conforme aux standards des Big Four."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Confidentialité garantie</h2>
          <p className="mt-4 text-xl text-slate-400">
            Toutes nos interventions en M&amp;A font l&apos;objet d&apos;un accord de confidentialité (NDA) strict dès le premier échange.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10 h-14 text-lg font-bold">
                Discuter de mon projet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
