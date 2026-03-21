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
    excerpt: "Guide urgent mars 2026 : transferts bancaires, fiscalité de transition, création de société, permis de résidence. Tout pour quitter Dubaï pendant la guerre Iran.",
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
    excerpt: "IS, dividendes, plus-values, succession, TVA, risque géopolitique, coût de la vie : tableau comparatif complet des 4 destinations préférées des entrepreneurs francophones.",
    category: "Comparatif",
    date: "Mars 2026",
    readTime: "18 min",
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
