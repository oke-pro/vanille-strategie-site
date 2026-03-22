import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources, siteConfig } from "@/data/site";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { blogArticles, blogArticlesBySlug } from "@/data/blog-articles";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

// Maillage interne : liens contextuels par catégorie d'article
const relatedLinks: Record<string, { label: string; href: string }[]> = {
  Fiscalité: [
    { label: "Simulateur fiscal Maurice vs France", href: "/ressources/simulateur-fiscal" },
    { label: "Comptabilité & Fiscalité — nos services", href: "/services/comptabilite-fiscalite" },
    { label: "Création de société à Maurice", href: "/services/creation-societe" },
  ],
  Guide: [
    { label: "Simulateur : quel visa pour moi ?", href: "/ressources/simulateur-visa" },
    { label: "Permis de résidence — nos services", href: "/services/permis-residence" },
    { label: "Création de société à Maurice", href: "/services/creation-societe" },
  ],
  Permis: [
    { label: "Simulateur : quel visa pour moi ?", href: "/ressources/simulateur-visa" },
    { label: "Permis de résidence — nos services", href: "/services/permis-residence" },
    { label: "Découvrir l'Île Maurice", href: "/maurice" },
  ],
  Actualité: [
    { label: "Simulateur fiscal Maurice vs France", href: "/ressources/simulateur-fiscal" },
    { label: "Tous nos services", href: "/services/creation-societe" },
    { label: "Pourquoi Maurice ?", href: "/maurice" },
  ],
  Digital: [
    { label: "Profil Digital Nomad", href: "/digital-nomad" },
    { label: "Simulateur : quel visa pour moi ?", href: "/ressources/simulateur-visa" },
    { label: "E-commerce & Comptabilité", href: "/services/comptabilite-fiscalite" },
  ],
  Comparatif: [
    { label: "Simulateur fiscal Maurice vs France", href: "/ressources/simulateur-fiscal" },
    { label: "Pourquoi Maurice ?", href: "/maurice" },
    { label: "Étude de faisabilité gratuite", href: "/contact" },
  ],
};

/** Only generate pages for non-standalone articles (standalone have their own page.tsx) */
export async function generateStaticParams() {
  return blogArticles
    .filter((a) => !a.standalone)
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticlesBySlug[slug];
  if (!article || article.standalone) return { title: "Article non trouvé" };

  const articleUrl = `${siteConfig.url}/ressources/blog/${slug}`;
  const ogImage = `${siteConfig.url}/images/hero-paradise.jpg`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: articleUrl,
      title: article.title,
      description: article.excerpt,
      publishedTime: article.dateISO,
      modifiedTime: article.dateModifiedISO || article.dateISO,
      section: article.category,
      authors: ["Cabinet Vanille Stratégie"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [ogImage],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogArticlesBySlug[slug];
  if (!article || article.standalone) notFound();

  const wordCount = article.content.join(" ").split(/\s+/).length;

  return (
    <>
      <BlogPostingJsonLd
        title={article.title}
        description={article.excerpt}
        slug={slug}
        datePublished={article.dateISO}
        dateModified={article.dateModifiedISO || article.dateISO}
        wordCount={wordCount}
        articleSection={article.category}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          { name: article.title, url: `/ressources/blog/${slug}` },
        ]}
      />

      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/ressources/blog" className="text-sm text-blue-400 hover:underline">&larr; Tous les articles</Link>
          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300">{article.category}</span>
            <span className="text-xs text-slate-500">{article.date}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{article.title}</h1>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">DL</div>
            <div>
              <p className="text-sm font-semibold text-white">{founder.name}</p>
              <p className="text-xs text-slate-400">{founder.title}</p>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </article>

      {/* Maillage interne — liens connexes */}
      {relatedLinks[article.category] && (
        <section className="bg-white border-t border-slate-100 py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Pour aller plus loin</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {relatedLinks[article.category].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4 text-sm font-semibold text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            Sources : {officialSources.slice(0, 4).map((s, i) => (
              <span key={s.url}>
                {i > 0 && " · "}
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{s.name}</a>
              </span>
            ))}
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Cet article est fourni à titre informatif. Contactez nos experts pour une analyse personnalisée de votre situation.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Besoin d&apos;un accompagnement personnalisé ?</h2>
          <p className="mt-3 text-slate-400">Étude de faisabilité gratuite par {founder.name}.</p>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Nous contacter</Button></Link></div>
        </div>
      </section>
    </>
  );
}
