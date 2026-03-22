import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { founder } from "@/data/site";
import { blogArticles } from "@/data/blog-articles";

export const metadata: Metadata = {
  title: "Blog — Guides experts sur l'expatriation et la fiscalité à Maurice",
  description: "Articles signés par Didier Laroussinie, Expert-Comptable Fiscaliste International. Structures juridiques, fiscalité 2026, permis de résidence.",
};

const categoryColors: Record<string, string> = {
  Guide: "bg-blue-100 text-blue-700",
  Fiscalité: "bg-orange-100 text-orange-700",
  Permis: "bg-green-100 text-green-700",
  Actualité: "bg-red-100 text-red-700",
  Digital: "bg-teal-100 text-teal-700",
  Comparatif: "bg-purple-100 text-purple-700",
};

/** Articles sorted by dateISO descending (most recent first) */
const sortedArticles = [...blogArticles].sort(
  (a, b) => b.dateISO.localeCompare(a.dateISO),
);

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
            {sortedArticles.map((a) => (
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
