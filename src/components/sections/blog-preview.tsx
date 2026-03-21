import Link from "next/link";
import { Card } from "@/components/ui/card";
import { founder } from "@/data/site";

const articles = [
  {
    slug: "structures-juridiques-maurice-2026",
    title: "Domestic Company, GBC ou Authorised Company : quel statut choisir en 2026 ?",
    excerpt:
      "Comparatif actualisé post-Finance Act 2025 des 3 structures juridiques à Maurice. Taux effectifs, substance requirements, acc\u00e8s aux traités.",
    category: "Guide",
    date: "Mars 2026",
  },
  {
    slug: "fiscalite-maurice-2026",
    title: "Fiscalité Maurice 2026 : ce qui a vraiment changé",
    excerpt:
      "Fair Share Contribution, QDMTT, Alternative Minimum Tax, Transfer Pricing — décryptage des réformes par un Expert-Comptable.",
    category: "Fiscalité",
    date: "Mars 2026",
  },
  {
    slug: "permis-residence-maurice-guide-2026",
    title: "Permis de résidence à Maurice en 2026 : le guide complet post-réforme",
    excerpt:
      "OP Investor, Self-Employed, ProPass, Expert Pass, Retired, Premium Visa — conditions mises à jour, mid-term review, PR durci.",
    category: "Permis",
    date: "Mars 2026",
  },
];

export function BlogPreview() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Nos guides experts
            </h2>
            <p className="mt-2 text-lg text-slate-600">
              Analyses signées par {founder.name}, {founder.title}.
            </p>
          </div>
          <Link
            href="/ressources/blog"
            className="hidden text-sm font-medium text-blue-600 hover:underline sm:block"
          >
            Tous les articles &rarr;
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link key={a.slug} href={`/ressources/blog/${a.slug}`}>
              <Card className="group h-full p-6 transition-shadow hover:shadow-md">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                    {a.category}
                  </span>
                  <span className="text-xs text-slate-400">{a.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-blue-600">
                  {a.title}
                </h3>
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
  );
}
