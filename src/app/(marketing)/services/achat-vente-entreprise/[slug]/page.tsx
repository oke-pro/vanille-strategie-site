import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";
import {
  ArrowRight,
  ChevronRight,
  Search,
  ShieldCheck,
  TrendingUp,
  FileText,
  Scale,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

interface SubServiceContent {
  title: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  content: string;
  keyPoints: Array<{
    title: string;
    description: string;
  }>;
  benefits: string[];
}

const subServices: Record<string, SubServiceContent> = {
  sourcing: {
    title: "Sourcing & Identification",
    description: "Identification d'opportunités d'acquisition à Maurice et analyse sectorielle",
    shortDescription: "Identification de cibles qualitatives et analyse de marché",
    heroImage: "/images/entreprise-filiale.jpg",
    content: `Le sourcing constitue la phase fondamentale de toute acquisition réussie. À Maurice, le marché des entreprises à vendre n'est pas transparent : la plupart des opportunités de qualité circulent via des réseaux fermés et des relations établies de confiance.

Notre approche combine une double expertise : la maîtrise des standards internationaux de sourcing et une connaissance fine du tissu économique mauricien. Nous nous appuyons sur un réseau dense de contacts parmi les acteurs locaux (banquiers, avocats, autres cabinets de conseil), les chambres consulaires, et les fédérations patronales.

Nous conduisons une analyse sectorielle rigoureuse pour identifier les cibles potentielles alignées avec votre stratégie : secteurs en croissance (tourisme, fintech, énergie renouvelable), cibles de taille idéale pour votre profil (PME, ETI, filiale de groupe français), situation financière stable ou potentiel de transformation, et localisation (Maurice, île Maurice, ou archipel de l'océan Indien).

Le matching acquéreur-cible est crucial : au-delà de la simple adéquation financière, nous évaluons la compatibilité stratégique, les synergies opérationnelles possibles, et la qualité de l'équipe managériale en place. Pour chaque opportunité, nous préparons une première analyse (pitch summary) détaillant les forces, les risques apparents, et le potentiel créateur de valeur.`,
    keyPoints: [
      {
        title: "Identification d'opportunités off-market",
        description: "Accès à des cibles de qualité non listées publiquement via notre réseau de partenaires et de vendeurs potentiels.",
      },
      {
        title: "Analyse sectorielle et positionnement",
        description: "Étude du marché, identification des tendances, des champions, et des acteurs en difficulté dans votre secteur cible.",
      },
      {
        title: "Ciblage stratégique et profiling",
        description: "Sélection des entreprises alignées avec votre stratégie : taille, rentabilité, potentiel de croissance, qualité managériale.",
      },
      {
        title: "Matching acquéreur-cible et synergies",
        description: "Évaluation des synergies opérationnelles et financières possibles, compatibilité culturelle, et potentiel de création de valeur.",
      },
    ],
    benefits: [
      "Accès à des opportunités non publiquement disponibles",
      "Analyse comparative du marché et du secteur",
      "Définition claire du profil de cible idéale",
      "Recommandations basées sur l'expertise locale et internationale",
      "Gain de temps dans l'identification des bonnes cibles",
    ],
  },
  "due-diligence": {
    title: "Due Diligence",
    description: "Audit financier, fiscal, juridique et analyse des risques de la cible",
    shortDescription: "Audit complet financier, fiscal et juridique",
    heroImage: "/images/entreprise-filiale.jpg",
    content: `La due diligence est la pierre angulaire de toute acquisition réussie. Elle consiste en une analyse exhaustive de la cible pour identifier les forces, les faiblesses, et les risques cachés.

Notre approche de due diligence suit les standards internationaux de haut niveau, garantis par l'expérience Big Four de Didier Laroussinie. Nous structurons notre analyse selon plusieurs volets interdépendants.

**Audit financier** : Analyse détaillée des états financiers sur 3 à 5 exercices (bilan, compte de résultat, flux de trésorerie). Nous vérifions la qualité et la pérennité du chiffre d'affaires, la trajectoire de rentabilité, la structure des coûts, et la gestion du besoin en fonds de roulement. Identification des éléments non récurrents, des provisions douteuses, et des anomalies comptables.

**Due diligence fiscale** : Vérification de la conformité déclarative (déclarations de revenus, TVA, retenues à la source), identification des positions agressives ou fragiles, vérification de la compliance avec les réglementations fiscales mauriciennes, et évaluation des risques de redressement MRA.

**Due diligence juridique** : Audit des contrats clés (clients, fournisseurs, distribution), vérification des titres de propriété, identification des litiges en cours ou potentiels, conformité avec la réglementation (emploi, environnement, données), et vérification du registre des charges (hypothèques, gages).

**Due diligence opérationnelle** : Évaluation des systèmes d'information, de la structure des ressources humaines, de la supply chain, et de la qualité de l'équipe managériale. Nous rencontrons les principaux clients et fournisseurs pour valider les hypothèses du vendeur.`,
    keyPoints: [
      {
        title: "Audit financier approfondi",
        description: "Analyse des 3-5 derniers exercices, vérification de la qualité du chiffre d'affaires, de la rentabilité et du besoin en fonds de roulement.",
      },
      {
        title: "Due diligence fiscale",
        description: "Vérification de la compliance fiscale, identification des risques de redressement MRA, évaluation des positions agressives.",
      },
      {
        title: "Due diligence juridique",
        description: "Audit des contrats clés, vérification des titres, identification des litiges et conformité réglementaire.",
      },
      {
        title: "Due diligence opérationnelle",
        description: "Évaluation des SI, des RH, de la supply chain, et rencontres avec les clients et fournisseurs clés.",
      },
    ],
    benefits: [
      "Identification complète des risques et des faiblesses",
      "Vérification de la qualité des chiffres annoncés",
      "Évaluation précise des passifs cachés",
      "Fondement solide pour la phase d'évaluation et de négociation",
      "Sécurisation de l'investissement",
    ],
  },
  "evaluation-negociation": {
    title: "Évaluation & Négociation",
    description: "Valorisation multi-critères, négociation des termes et structuration du deal",
    shortDescription: "Valorisation et pilotage de la négociation",
    heroImage: "/images/entreprise-filiale.jpg",
    content: `L'évaluation et la négociation constituent le cœur de la phase commerciale de l'opération. Il s'agit de déterminer la juste valeur de la cible et de structurer la transaction de manière optimale pour l'acquéreur.

**Méthodes de valorisation** : Nous utilisons trois approches complémentaires pour triangulariser la valeur. La méthode DCF (Discounted Cash Flows) projette les flux de trésorerie futurs et les actualise à un taux reflet du risque. La méthode des comparables analyse les multiples d'EBITDA et de chiffre d'affaires de sociétés similaires ayant fait l'objet de transactions récentes. La méthode patrimoniale évalue l'actif net réévalué (immobilier, stock, créances, dettes).

Pour les entreprises mauriciennes, nous ajustons les valorisations en fonction des spécificités locales : taux de change MUR/EUR, prime de risque pays, ajustement pour la taille du marché, et taxation différentielle.

**Structuration de la transaction** : Au-delà du prix, il existe de nombreux leviers de structuration. Achat d'actions vs achat d'actifs ? Paiement comptant vs earn-out (paiement différé basé sur la performance) ? Crédit-vendeur ? Garantie d'actif et de passif (GAP) ? Ces choix impact le risque de l'acquéreur, l'impôt du vendeur, et les modalités de closing.

**Pilotage de la négociation** : Nous assistons l'acquéreur lors de chaque phase : rédaction de la LOI (Letter of Intent), terme sheet avec les conditions financières et juridiques, phase de due diligence approfondie, et négociation du SPA (Sales Purchase Agreement). Notre objectif : maximiser la valeur pour notre client tout en préservant une relation constructive avec le vendeur.`,
    keyPoints: [
      {
        title: "Valorisation multi-critères",
        description: "Application des méthodes DCF, comparables et patrimoniales avec ajustements pour les spécificités mauriciennes.",
      },
      {
        title: "Structuration du deal",
        description: "Définition optimale de la structure : achat d'actions vs actifs, earn-out, crédit-vendeur, GAP, price adjustments.",
      },
      {
        title: "Négociation des termes commerciaux",
        description: "Pilotage de la LOI, term sheet, et négociation du SPA avec les conseils juridiques.",
      },
      {
        title: "Price adjustment mechanisms",
        description: "Mise en place de mécanismes assurant que le prix payé reflète la substance au moment du closing (adjustments, trésorerie, BFR).",
      },
    ],
    benefits: [
      "Détermination de la juste valeur sur la base de données objectives",
      "Maximisation du pouvoir de négociation de l'acquéreur",
      "Structuration optimale de la transaction",
      "Sécurisation contre les variations post-signing",
      "Gain financier potentiel de plusieurs points",
    ],
  },
  closing: {
    title: "Closing & Transfert",
    description: "Rédaction des actes, formalités administratives et transfert d'actions",
    shortDescription: "Documentation juridique et formalités administratives",
    heroImage: "/images/entreprise-filiale.jpg",
    content: `La phase de closing marque l'aboutissement de la transaction. Elle comprend la signature des actes définitifs, le transfert des actions ou des actifs, le versement des fonds, et l'accomplissement des formalités administratives.

**Rédaction des actes de cession** : Le Sales Purchase Agreement (SPA) est le document fondamental du closing. Il détaille les termes de la transaction : prix, modalités de paiement, conditions précédentes, représentations et garanties du vendeur, indemnités pour manquement, clauses de non-concurrence et de non-sollicitation. Le SPA est généralement accompagné de schedules (listes des contrats, de la dette, des actifs transférés, des immeubles, etc.). À Maurice, le SPA est rédigé en anglais, selon le droit mauricien ou anglais.

**Formalités administratives** : Après signature du SPA, plusieurs étapes administratives doivent être accomplies. Enregistrement de la cession auprès du Registrar of Companies (ROC), notification à la Financial Services Commission (FSC) si applicable, modification des registres d'actionnaires et des certificats d'actions, notification à la Mauritius Revenue Authority (MRA) pour fins fiscales, mise à jour des licences commerciales et des autorisations sectorielles. Un notaire mauricien supervise souvent ces démarches.

**Transfert des actions et de contrôle** : Le transfert des actions s'effectue par la remise des certificats d'actions signés et cachetés (indications de propriété), l'enregistrement de la cession au registre des actionnaires, et l'émission de nouveaux certificats au nom de l'acquéreur. Le contrôle de facto s'accompagne du transfert des accès aux systèmes d'information, des contrats clients clés, et de la correspondance avec les partenaires externes.

**Notifications réglementaires** : Selon le secteur, d'autres notifications peuvent être requises. Secteur bancaire : notification à la Banque Centrale et à la FSC. Secteur assurantiel : notification à la FSC. Secteur immobilier : notification à l'État Civil et aux collectivités. Secteur télécoms : notification à l'autorité sectorielle.`,
    keyPoints: [
      {
        title: "Rédaction du Sales Purchase Agreement",
        description: "Rédaction et négociation du SPA avec clauses de représentations, garanties, indemnités et modalités de paiement.",
      },
      {
        title: "Formalités enregistrement et notifications",
        description: "Enregistrement auprès du ROC, notification à la MRA, mise à jour des registres et des licences.",
      },
      {
        title: "Transfert des actions et droits",
        description: "Remise des certificats d'actions, enregistrement au registre des actionnaires, attribution des nouveaux droits.",
      },
      {
        title: "Gestion des modalités de paiement",
        description: "Mise en place du séquestre, gestion de la clôture du compte séquestre, et versement aux parties.",
      },
    ],
    benefits: [
      "Sécurisation juridique du transfert de propriété",
      "Respect des obligations légales et réglementaires",
      "Accomplissement sans risque de la transmission de contrôle",
      "Documentation conforme aux standards internationaux",
      "Transition transparente vers la nouvelle gouvernance",
    ],
  },
  "pacte-actionnaires": {
    title: "Pacte d'actionnaires",
    description: "Rédaction, négociation et mise en place de gouvernance et de mécanismes de sortie",
    shortDescription: "Gouvernance et clauses de sortie d'actionnaires",
    heroImage: "/images/entreprise-filiale.jpg",
    content: `Le pacte d'actionnaires (Shareholders' Agreement) est un document contractuel distinct des statuts sociaux. Il régit les relations entre actionnaires et couvre une multitude de sujets liés à la gouvernance et à la protection des investisseurs.

**Rédaction et négociation du pacte** : Nous assistons les actionnaires (fondateurs, investisseurs, managers) dans la rédaction d'un pacte adapté à la structure de capital et aux enjeux spécifiques de l'opération. Le pacte reflète les discussions entre actionnaires sur la gouvernance, les droits de chacun, et les règles de sortie. À Maurice, le pacte est rédigé en anglais et est juridiquement contraignant sous le droit mauricien ou anglais selon les préférences des parties.

**Gouvernance et droits de vote** : Le pacte définit la composition du conseil d'administration (nombre de sièges, expertise requise, processus de nomination), les pouvoirs du CEO, l'existence de comités spécialisés (audit, rémunération, investissements), les majorités requises pour certaines décisions (augmentation de capital, indebtement important, distribution de dividendes). Nous établissons un équilibre entre la protection des droits des minoritaires et le pouvoir de décision du contrôlant.

**Clauses de sortie (tag-along, drag-along)** : Ces mécanismes protègent les actionnaires minoritaires en cas de vente. La clause de tag-along permet aux minoritaires de vendre leurs actions au même prix que le contrôlant en cas de cession de la majorité. La clause de drag-along oblige les minoritaires à vendre à un même acquéreur tiers si le contrôlant vend. Nous structurons ces clauses de manière équitable et efficiente.

**Mécanismes de résolution de conflits** : Les conflits entre actionnaires sont inévitables. Nous intégrons des mécanismes de résolution : médiation amiable en cas de désaccord, arbitrage en cas d'impasse, clauses de rupture (shotgun clause, Russian roulette) permettant à un actionnaire d'offrir à l'autre un prix de rachat ou de cession.`,
    keyPoints: [
      {
        title: "Rédaction du Shareholders' Agreement",
        description: "Document contractuel régissant les relations entre actionnaires : gouvernance, droits, obligations, sorties.",
      },
      {
        title: "Governance et composition du Board",
        description: "Définition de la composition du conseil, des pouvoirs du CEO, des comités, et des majorités pour les décisions clés.",
      },
      {
        title: "Clauses de sortie (tag-along, drag-along)",
        description: "Protection des minoritaires en cas de cession du contrôle, mécanismes d'alignement des prix.",
      },
      {
        title: "Droits de vote et préemption",
        description: "Définition des droits de vote pour chaque classe d'actions, clauses de préemption en cas de cession.",
      },
    ],
    benefits: [
      "Clarification des droits et obligations de chaque actionnaire",
      "Protection contre les conflits futurs",
      "Mécanismes de sortie clairs et équitables",
      "Gouvernance transparente et professionnelle",
      "Facilitation de transactions futures",
    ],
  },
  "post-acquisition": {
    title: "Accompagnement post-acquisition",
    description: "Intégration opérationnelle, transition et optimisation post-deal",
    shortDescription: "Intégration et suivi post-transaction",
    heroImage: "/images/entreprise-filiale.jpg",
    content: `Le succès d'une opération de M&A ne se mesure pas uniquement au closing. Les 100 jours suivants sont décisifs pour créer la valeur promise et éviter les pièges courants de l'intégration.

**Intégration opérationnelle** : Après le closing, il est critique de conduire rapidement l'intégration des systèmes d'information (consolidation des données, migration des applications, mise en place d'une infrastructure IT commune), des processus comptables et financiers (uniformisation des principes comptables, consolidation des comptes, définition d'une trésorerie commune), et des fonctions support (ressources humaines, paie, finances). Une mauvaise intégration peut détruire de la valeur et démoraliser les collaborateurs.

**Transition managériale** : Le maintien et la motivation de l'équipe de direction est crucial. Nous assistons dans la définition des nouveaux rôles et responsabilités, la mise en place d'une gouvernance claire avec la nouvelle structure, et si nécessaire, l'accompagnement des transitions managériales. Un management package (stock options, earn-out) permet de sécuriser la rétention des talents clés.

**Optimisation fiscale post-deal** : Le closing ne marque pas la fin des opportunités d'optimisation fiscale. Nous gérons la consolidation fiscale (répartition des crédits d'impôt, pertes reportées), l'optimisation de la structure du groupe (holding intermediate, debt push-down), et la gestion des dividendes et transferts de trésorerie vers la maison mère.

**Reporting et suivi de performance** : Via le dashboard OKE, nous mettons en place un suivi continu de la performance de l'acquisition : comparaison des résultats réels vs le business plan, gestion des KPIs opérationnels, suivi des synergies réalisées. Un reporting mensuel permet d'identifier rapidement les dérives et de mettre en place des actions correctives.`,
    keyPoints: [
      {
        title: "Plan d'intégration opérationnelle",
        description: "Roadmap de 100 jours pour l'intégration des SI, des processus financiers et des fonctions support.",
      },
      {
        title: "Gestion de la transition managériale",
        description: "Définition des rôles, mise en place d'une gouvernance claire, accompagnement des transitions et rétention des talents.",
      },
      {
        title: "Optimisation fiscale post-deal",
        description: "Consolidation fiscale, optimisation de la structure du groupe, gestion des flux de trésorerie.",
      },
      {
        title: "Suivi de performance via OKE",
        description: "Mise en place d'un dashboard OKE pour le suivi des KPIs, réalisation des synergies et écarts business plan.",
      },
    ],
    benefits: [
      "Sécurisation de la création de valeur promise",
      "Réduction des risques opérationnels post-closing",
      "Préservation des talents et compétences clés",
      "Optimisation fiscale additionnelle",
      "Suivi continu et ajustements rapides en cas de dérives",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(subServices).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = subServices[slug];
  if (!service) {
    return {
      title: "Service non trouvé",
      description: "Le service demandé n'existe pas.",
    };
  }
  return {
    title: `${service.title} — Achat/Vente d'entreprise à Maurice | Vanille Stratégie`,
    description: `${service.description}. Audit financier, due diligence, valorisation et négociation supervisés par Didier Laroussinie, ancien associé Deloitte.`,
  };
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = subServices[slug];

  if (!service) {
    return (
      <main className="min-h-screen">
        <section className="py-24 text-center">
          <div className="mx-auto max-w-2xl px-4">
            <h1 className="text-4xl font-bold text-slate-900">Service non trouvé</h1>
            <p className="mt-4 text-lg text-slate-600">
              Le service que vous recherchez n'existe pas.
            </p>
            <Link href="/services/achat-vente-entreprise">
              <Button className="mt-8">
                Retour aux services M&A
              </Button>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <Link href="/services" className="text-slate-600 hover:text-slate-900 transition-colors">
              Services
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <Link href="/services/achat-vente-entreprise" className="text-slate-600 hover:text-slate-900 transition-colors">
              Achat/Vente d'entreprise
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <span className="font-semibold text-slate-900">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="group relative min-h-[50vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              M&A — {service.title}
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl leading-[1.1]">
              {service.title}
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              {service.shortDescription}
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

      {/* Main Content */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              {service.content}
            </p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">
            Points clés de notre approche
          </h2>
          <div className="grid gap-8">
            {service.keyPoints.map((point, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">
            Avantages de cette approche
          </h2>
          <div className="grid gap-6">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
                <p className="text-lg text-slate-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Expertise reconnue
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Didier Laroussinie supervise personnellement chaque phase de ce service. Fort de 20 ans d'expérience chez Deloitte (dont plusieurs années en tant qu'associé spécialisé en Corporate Finance et M&A) et de plus de 40 ans de carrière dans les opérations de haut de bilan, il apporte une expertise technique de premier plan et un réseau étendu d'acteurs du monde des affaires mauricien et international.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Notre approche combine les standards internationaux les plus élevés avec une compréhension fine du contexte économique, fiscal et réglementaire de Maurice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Prêt à avancer sur votre projet ?
          </h2>
          <p className="mt-4 text-xl text-slate-400">
            Toutes nos interventions sont confidentielles et régies par un accord NDA signé dès le premier échange.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10 h-14 text-lg font-bold">
                Discuter de mon projet
              </Button>
            </Link>
            <Link href="/services/achat-vente-entreprise">
              <Button size="lg" variant="outline" className="h-14 text-lg font-bold">
                Voir tous les services M&A
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
