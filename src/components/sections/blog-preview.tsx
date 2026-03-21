import Link from "next/link";
import { Card } from "@/components/ui/card";
import { founder } from "@/data/site";

const articles = [
  {
    slug: "routes-financieres-dubai-maurice-transition",
    title: "Quitter Dubaï pour Maurice — Routes financières et guide de transition",
    excerpt: "Transfert de patrimoine, checklist 30 jours, comparatif fiscal. Le guide urgent pour les entrepreneurs en exode.",
    category: "Urgent",
    date: "Mars 2026",
  },
  {
    slug: "transfer-pricing-maurice-2025",
    title: "Transfer Pricing à Maurice — Nouvelles obligations 2025",
    excerpt: "Le Finance Act 2025 introduit un cadre documentaire formel. Ce que ça change pour votre groupe.",
    category: "Fiscalité",
    date: "Mars 2026",
  },
  {
    slug: "qualite-de-vie-maurice-lifestyle-golf-business",
    title: "Vivre à Maurice — Golfs, lifestyle et art de vivre business",
    excerpt: "5 golfs de classe mondiale, gastronomie fusion, sundowner culture. Le rêve mauricien au quotidien.",
    category: "Lifestyle",
    date: "Mars 2026",
  },
  {
    slug: "paiements-en-ligne-maurice-stripe-alternatives",
    title: "Paiements en ligne — Stripe, MIPS et alternatives à Maurice",
    excerpt: "Stripe n'est pas disponible à Maurice. Voici les solutions qui fonctionnent vraiment.",
    category: "Digital",
    date: "Mars 2026",
  },
  {
    slug: "succession-internationale-france-maurice",
    title: "Succession FR-MU — 0% de droits, mais attention aux pièges",
    excerpt: "La convention fiscale ne couvre PAS les successions. Les erreurs à éviter absolument.",
    category: "Patrimoine",
    date: "Mars 2026",
  },
  {
    slug: "ecosysteme-tech-startups-maurice",
    title: "Écosystème tech à Maurice — Incubateurs et opportunités",
    excerpt: "Turbine, La Plage Factory, Innovator Permit. Maurice se positionne comme hub tech.",
    category: "Tech",
    date: "Mars 2026",
  },
];

const categoryColors: Record<string, string> = {
  Urgent: "bg-red-100 text-red-700",
  Fiscalité: "bg-orange-100 text-orange-700",
  Lifestyle: "bg-emerald-100 text-emerald-700",
  Digital: "bg-teal-100 text-teal-700",
  Patrimoine: "bg-purple-100 text-purple-700",
  Tech: "bg-cyan-100 text-cyan-700",
  Guide: "bg-blue-100 text-blue-700",
  Permis: "bg-green-100 text-green-700",
};

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
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[a.category] || "bg-blue-100 text-blue-700"}`}>
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
