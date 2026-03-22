import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog — Guides experts sur l'expatriation et la fiscalité à Maurice",
  description: "Articles signés par Didier Laroussinie, Expert-Comptable Fiscaliste International. Structures juridiques, fiscalité 2026, permis de résidence.",
};

const articles = [
  {
    slug: "budget-2025-2026-maurice-entrepreneurs",
    title: "Budget 2025-2026 de Maurice : analyse pratique pour les entrepreneurs francophones",
    excerpt: "Le budget 2025-2026 de l'île Maurice introduit des mesures structurantes pour les investisseurs étrangers : crédit d'impôt, digitalisation administrative et nouveaux schémas d'investissement.",
    category: "Fiscalité",
    date: "Juin 2025",
    readTime: "7 min",
  },
  {
    slug: "croissance-maurice-banque-mondiale-2025-2026",
    title: "Perspectives économiques de Maurice : décryptage des projections de la Banque mondiale",
    excerpt: "La Banque mondiale a publié ses projections de croissance pour Maurice avec un taux attendu autour de 4 %, un rythme nettement supérieur aux économies occidentales.",
    category: "Actualité",
    date: "Juin 2025",
    readTime: "8 min",
  },
  {
    slug: "csr-fund-maurice-responsabilite-entreprise",
    title: "CSR à Maurice : les entreprises peuvent désormais gérer 50 % de leur fonds directement",
    excerpt: "Le budget 2025-2026 double la part du fonds CSR que les entreprises peuvent gérer directement, transformant une obligation légale en outil stratégique.",
    category: "Fiscalité",
    date: "Juin 2025",
    readTime: "7 min",
  },
  {
    slug: "qdmtt-impot-minimum-multinational-maurice",
    title: "QDMTT à Maurice : ce que l'impôt minimum de 15 % change pour les multinationales",
    excerpt: "L'île Maurice a adopté le Qualified Domestic Minimum Top-Up Tax dans le cadre de la Finance Act 2025 — une mesure qui suscite des inquiétudes souvent injustifiées.",
    category: "Fiscalité",
    date: "Juillet 2025",
    readTime: "8 min",
  },
  {
    slug: "amt-impot-minimum-alternatif-maurice",
    title: "Alternative Minimum Tax à Maurice : qui est concerné et comment s'adapter",
    excerpt: "Le budget 2025-2026 introduit un AMT de 10 % ciblant cinq secteurs spécifiques — les détenteurs de GBL sont explicitement exclus.",
    category: "Fiscalité",
    date: "Juillet 2025",
    readTime: "8 min",
  },
  {
    slug: "immobilier-maurice-nouvelles-regles-2026",
    title: "Immobilier à Maurice : nouvelles règles pour les investisseurs étrangers en 2026",
    excerpt: "La Finance Act 2025 a profondément remanié les conditions d'acquisition immobilière pour les non-citoyens, avec un doublement des droits d'enregistrement prévu en juillet 2026.",
    category: "Guide",
    date: "Août 2025",
    readTime: "8 min",
  },
  {
    slug: "permis-travail-maurice-propass-expertpass",
    title: "ProPass, Expert Pass et nouveaux permis de travail à Maurice : guide pratique 2025",
    excerpt: "Les règles d'immigration mauriciennes ont été substantiellement révisées en août 2025 avec deux nouvelles catégories de permis à validité de 10 ans.",
    category: "Permis",
    date: "Août 2025",
    readTime: "9 min",
  },
  {
    slug: "gbc-maurice-nouvelles-obligations-2025",
    title: "GBC à Maurice : les nouvelles obligations de substance de la Finance Act 2025",
    excerpt: "La Finance Act 2025 renforce significativement les exigences de substance et de gouvernance des Global Business Companies à Maurice.",
    category: "Fiscalité",
    date: "Août 2025",
    readTime: "8 min",
  },
  {
    slug: "convention-fiscale-france-maurice-avantages",
    title: "Convention fiscale France-Maurice : les avantages réels pour les expatriés",
    excerpt: "La convention de non-double imposition signée en 1980 et amendée en 2011 reste l'un des leviers fiscaux les plus puissants pour les Français qui s'expatrient.",
    category: "Fiscalité",
    date: "Septembre 2025",
    readTime: "9 min",
  },
  {
    slug: "retraite-maurice-nouvelles-conditions-2025",
    title: "Retraite à Maurice en 2025 : nouvelles conditions du Retirement Permit décryptées",
    excerpt: "Les conditions du Retirement Permit ont été significativement revues en août 2025 — durée réduite à 5 ans, transfert de 2 000 USD/mois et 180 jours de présence minimum.",
    category: "Permis",
    date: "Septembre 2025",
    readTime: "9 min",
  },
  {
    slug: "maurice-hub-fintech-afrique",
    title: "Maurice comme hub fintech africain : opportunités concrètes pour les entrepreneurs tech",
    excerpt: "Classée 3e pays africain en développement des TIC, Maurice se positionne comme porte d'entrée technologique vers l'Afrique pour les entrepreneurs francophones.",
    category: "Digital",
    date: "Octobre 2025",
    readTime: "8 min",
  },
  {
    slug: "taxe-touristique-maurice-impact-investisseurs",
    title: "Taxe touristique de 3 EUR par nuit à Maurice : implications pour les investisseurs en hébergement",
    excerpt: "Depuis octobre 2025, Maurice applique une taxe touristique de 3 euros par nuitée — une mesure raisonnable qui formalise le secteur de l'hébergement.",
    category: "Fiscalité",
    date: "Octobre 2025",
    readTime: "8 min",
  },
  {
    slug: "digital-nomad-premium-visa-maurice",
    title: "Premium Visa à Maurice : cadre fiscal et pratique pour les travailleurs à distance",
    excerpt: "Le Premium Visa permet de séjourner à Maurice pendant un an renouvelable, avec des subtilités fiscales importantes pour les digital nomads francophones.",
    category: "Permis",
    date: "Novembre 2025",
    readTime: "8 min",
  },
  {
    slug: "mission-edb-afrique-sud-commerce-2026",
    title: "Maurice renforce ses liens commerciaux avec l'Afrique du Sud : opportunités pour les investisseurs francophones",
    excerpt: "L'EDB a conduit une mission de promotion commerciale en Afrique du Sud, créant des opportunités directes pour les entrepreneurs francophones installés à Maurice.",
    category: "Actualité",
    date: "Février 2026",
    readTime: "7 min",
  },
  {
    slug: "cecpa-inde-maurice-porte-entree-asie",
    title: "Accord CECPA Inde-Maurice : utiliser Maurice comme porte d'entrée vers le marché indien",
    excerpt: "Le CECPA accorde à Maurice un accès préférentiel sur 615 lignes tarifaires vers le marché indien — un outil puissant pour les entrepreneurs basés sur l'île.",
    category: "Guide",
    date: "Février 2026",
    readTime: "9 min",
  },
  {
    slug: "routes-financieres-dubai-maurice-transition",
    title: "Quitter Dubaï pour Maurice — Routes financières, transfert de patrimoine et guide de transition",
    excerpt: "Guide urgent mars 2026 : transferts bancaires, fiscalité de transition, création de société, permis de résidence. Tout pour quitter Dubaï pendant la crise.",
    category: "Actualité",
    date: "Mars 2026",
    readTime: "22 min",
  },
  {
    slug: "structures-juridiques-maurice-2026",
    title: "Domestic Company, GBC ou Authorised Company : quel statut choisir en 2026 ?",
    excerpt: "Comparatif actualisé post-Finance Act 2025 des 3 structures juridiques à Maurice. Taux effectifs, substance requirements, accès aux traités.",
    category: "Guide",
    date: "Mars 2026",
    readTime: "12 min",
  },
  {
    slug: "fiscalite-maurice-2026",
    title: "Fiscalité Maurice 2026 : ce qui a vraiment changé",
    excerpt: "Fair Share Contribution, QDMTT, Alternative Minimum Tax, Transfer Pricing — décryptage des réformes par un Expert-Comptable.",
    category: "Fiscalité",
    date: "Mars 2026",
    readTime: "10 min",
  },
  {
    slug: "permis-residence-maurice-guide-2026",
    title: "Permis de résidence à Maurice en 2026 : le guide complet post-réforme",
    excerpt: "OP Investor, Self-Employed, ProPass, Expert Pass, Retired, Premium Visa — conditions mises à jour, mid-term review, PR durci.",
    category: "Permis",
    date: "Mars 2026",
    readTime: "15 min",
  },
  {
    slug: "convention-fiscale-france-maurice",
    title: "Convention fiscale France-Maurice : comment ça marche vraiment",
    excerpt: "Signée en 1980, amendée en 2011 — traitement des dividendes, intérêts, royalties, Exit Tax. Ce que vous devez savoir avant de partir.",
    category: "Fiscalité",
    date: "Mars 2026",
    readTime: "8 min",
  },
  {
    slug: "quitter-dubai-pourquoi-maurice",
    title: "Quitter Dubaï : pourquoi Maurice est la meilleure alternative",
    excerpt: "Guerre Iran, exode des multinationales, fin du Dubai Dream. Comparatif fiscal et géopolitique Dubaï vs Maurice vs Maroc.",
    category: "Actualité",
    date: "Mars 2026",
    readTime: "7 min",
  },
  {
    slug: "ecommerce-depuis-maurice",
    title: "E-commerce depuis Maurice : fiscalité et logistique pour les digital entrepreneurs",
    excerpt: "Premium Visa, OP Self-Employed, 0% TVA sur les services exportés, connecteurs Shopify/Amazon — le guide complet.",
    category: "Digital",
    date: "Mars 2026",
    readTime: "9 min",
  },
  {
    slug: "substance-requirements-maurice",
    title: "Substance Requirements à Maurice — Ce que l'EDB et la FSC attendent vraiment",
    excerpt: "CIGA, directeurs résidents, Partial Exemption Regime, Finance Act 2025 — guide complet sur les exigences de substance économique pour les GBC.",
    category: "Fiscalité",
    date: "Mars 2026",
    readTime: "18 min",
  },
  {
    slug: "comparatif-maurice-maroc-portugal-dubai",
    title: "Maurice vs Maroc vs Portugal vs Dubaï — Comparatif expatriation 360°",
    excerpt: "IS, dividendes, plus-values, succession, TVA, risque géopolitique, coût de la vie : tableau comparatif complet des 4 destinations.",
    category: "Comparatif",
    date: "Mars 2026",
    readTime: "18 min",
  },
  {
    slug: "transfer-pricing-maurice-2025",
    title: "Transfer Pricing à Maurice : nouveau cadre documentaire 2025",
    excerpt: "Cadre OCDE, Finance Act 2025, documentation obligatoire, CbCR, transactions liées — ce que les entreprises doivent savoir.",
    category: "Fiscalité",
    date: "Mars 2026",
    readTime: "14 min",
  },
  {
    slug: "devises-mur-conversion-maurice",
    title: "Devises à Maurice : MUR, conversion et gestion bancaire pour expatriés",
    excerpt: "Roupie mauricienne, taux de change, comptes multi-devises AfrAsia et MCB, transferts internationaux — guide pratique.",
    category: "Guide",
    date: "Mars 2026",
    readTime: "10 min",
  },
  {
    slug: "edb-mauritius-role-programmes",
    title: "L'EDB à Maurice : rôle, programmes et accompagnement des investisseurs",
    excerpt: "Economic Development Board, programmes d'investissement, smart cities, secteurs prioritaires, guichet unique.",
    category: "Guide",
    date: "Mars 2026",
    readTime: "11 min",
  },
  {
    slug: "paiements-en-ligne-maurice-stripe-alternatives",
    title: "Paiements en ligne depuis Maurice : Stripe, alternatives et solutions locales",
    excerpt: "Disponibilité Stripe, limites PayPal, MCB Juice, payment gateways locaux — solutions pour les entrepreneurs digitaux.",
    category: "Digital",
    date: "Mars 2026",
    readTime: "8 min",
  },
  {
    slug: "ecosysteme-tech-startups-maurice",
    title: "Écosystème tech et startups à Maurice : opportunités et défis",
    excerpt: "Fibre optique, câbles SAFE/LION, incubateurs, talents tech, coûts — l'état de la tech à Maurice en 2026.",
    category: "Digital",
    date: "Mars 2026",
    readTime: "12 min",
  },
  {
    slug: "industries-cles-maurice-opportunites",
    title: "Industries clés à Maurice : où investir en 2026",
    excerpt: "Services financiers, textile, tourisme, TIC, immobilier, ocean economy, pharmaceutical — panorama des opportunités.",
    category: "Guide",
    date: "Mars 2026",
    readTime: "14 min",
  },
  {
    slug: "maurice-reunion-liaisons-expats-francais",
    title: "Maurice-Réunion : liaisons, synergies et communauté francophone",
    excerpt: "Vols directs, accords bilatéraux, communauté française, écoles, culture — le pont Maurice-Réunion.",
    category: "Guide",
    date: "Mars 2026",
    readTime: "8 min",
  },
  {
    slug: "infrastructures-maurice-telecom-sante-education",
    title: "Infrastructures à Maurice : télécom, santé et éducation",
    excerpt: "Couverture fibre, hôpitaux privés Welkin et C-Care, écoles internationales — la qualité de vie à Maurice.",
    category: "Guide",
    date: "Mars 2026",
    readTime: "10 min",
  },
  {
    slug: "qualite-de-vie-maurice-lifestyle-golf-business",
    title: "Qualité de vie à Maurice : lifestyle, golf et business au quotidien",
    excerpt: "Climat tropical, sécurité, parcours de golf, restaurants, coût de la vie — vivre premium à Maurice.",
    category: "Guide",
    date: "Mars 2026",
    readTime: "9 min",
  },
  {
    slug: "reseaux-entrepreneurs-clubs-affaires-maurice",
    title: "Réseaux d'entrepreneurs et clubs d'affaires à Maurice",
    excerpt: "MCCI, JCI, CJD Maurice, CCIFM, AmCham — construire son réseau professionnel sur l'île.",
    category: "Guide",
    date: "Mars 2026",
    readTime: "7 min",
  },
  {
    slug: "ouvrir-compte-bancaire-maurice-guide",
    title: "Ouvrir un compte bancaire à Maurice : guide complet 2026",
    excerpt: "AfrAsia, MCB, SBM — documents requis, délais, comptes multi-devises et corporate. Étape par étape.",
    category: "Guide",
    date: "Mars 2026",
    readTime: "10 min",
  },
  {
    slug: "crypto-vasp-licence-maurice",
    title: "Crypto et licence VASP à Maurice : cadre réglementaire 2026",
    excerpt: "Virtual Asset Service Provider, régulation FSC, VAITOS Act 2021, exigences de licence et taxation crypto.",
    category: "Fiscalité",
    date: "Mars 2026",
    readTime: "12 min",
  },
  {
    slug: "succession-internationale-france-maurice",
    title: "Succession internationale France-Maurice : planification et optimisation",
    excerpt: "0% droits de succession à Maurice, convention fiscale, planification patrimoniale, trusts — protéger son patrimoine.",
    category: "Fiscalité",
    date: "Mars 2026",
    readTime: "11 min",
  },
  {
    slug: "droit-travail-maurice-workers-rights-act",
    title: "Droit du travail à Maurice : Workers' Rights Act 2019 et obligations employeurs",
    excerpt: "Contrats, congés, licenciement, cotisations sociales, salaire minimum — cadre légal pour les employeurs à Maurice.",
    category: "Guide",
    date: "Mars 2026",
    readTime: "13 min",
  },
  {
    slug: "ecoles-internationales-maurice-education",
    title: "Écoles internationales à Maurice : guide pour familles expatriées",
    excerpt: "Lycée La Bourdonnais, Northfields, Clavis, Le Bocage — curricula IB, français et britannique pour vos enfants.",
    category: "Guide",
    date: "Mars 2026",
    readTime: "9 min",
  },
  {
    slug: "sources-officielles-fiscalite-maurice",
    title: "Sources officielles sur la fiscalité à Maurice : où trouver l'information fiable",
    excerpt: "MRA, FSC, EDB, BOI, Government Gazette — les sources primaires pour vérifier toute information fiscale.",
    category: "Guide",
    date: "Mars 2026",
    readTime: "6 min",
  },
];

const categoryColors: Record<string, string> = {
  Guide: "bg-blue-100 text-blue-700",
  Fiscalité: "bg-orange-100 text-orange-700",
  Permis: "bg-green-100 text-green-700",
  Actualité: "bg-red-100 text-red-700",
  Digital: "bg-teal-100 text-teal-700",
  Comparatif: "bg-purple-100 text-purple-700",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Nos guides experts</h1>
          <p className="mt-4 text-lg text-slate-300">
            Analyses signées par {founder.name}, {founder.title}. Mis à jour avec les dernières réformes.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link key={a.slug} href={`/ressources/blog/${a.slug}`}>
                <Card className="group h-full p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[a.category]}`}>
                      {a.category}
                    </span>
                    <span className="text-xs text-slate-400">{a.date}</span>
                    <span className="text-xs text-slate-400">· {a.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-blue-600">
                    {a.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">{a.excerpt}</p>
                  <p className="mt-4 text-xs text-slate-400">
                    Par {founder.name}, {founder.title}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
