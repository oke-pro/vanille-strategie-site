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
    excerpt: "MCCI, JCI, CCIFM, AmCham — construire son réseau professionnel sur l'île.",
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
