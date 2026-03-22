import { MetadataRoute } from "next";
import { fetchCategories, fetchCompanies } from "@/lib/api-annuaire";
import { categorySlug } from "@/lib/annuaire-helpers";
import { blogArticles } from "@/data/blog-articles";

const BASE_URL = "https://vanillestrategie.fr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // Pages statiques principales
  const staticPages = [
    { url: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { url: "/entrepreneur", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "/digital-nomad", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "/retraite", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "/entreprise", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "/dubai-to-mauritius", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/maurice", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/didier-laroussinie", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/a-propos", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/avis-clients", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/medias", changeFrequency: "monthly" as const, priority: 0.5 },
    // Services
    { url: "/services/creation-societe", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/services/permis-residence", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/services/comptabilite-fiscalite", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/services/rh-paie", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/services/immobilier", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/services/achat-vente-entreprise", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/services/achat-vente-entreprise/sourcing", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/services/achat-vente-entreprise/due-diligence", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/services/achat-vente-entreprise/evaluation-negociation", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/services/achat-vente-entreprise/closing", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/services/achat-vente-entreprise/pacte-actionnaires", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/services/achat-vente-entreprise/post-acquisition", changeFrequency: "monthly" as const, priority: 0.6 },
    // Ressources
    { url: "/ressources/guides", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/ressources/blog", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "/ressources/simulateur-visa", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/ressources/simulateur-fiscal", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/ressources/faq", changeFrequency: "monthly" as const, priority: 0.7 },
    // Légal
    { url: "/mentions-legales", changeFrequency: "yearly" as const, priority: 0.3 },
    { url: "/conditions", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Analyses commentées
  const analysePages = [
    { url: "/ressources/analyse-income-tax-act", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/ressources/analyse-vat-act", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  // Articles de blog (tous — dates individuelles)
  const blogPages = blogArticles.map((article) => ({
    url: `/ressources/blog/${article.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: article.dateModifiedISO || article.dateISO,
  }));

  // Annuaire pages
  const annuairePages: typeof staticPages = [
    { url: "/annuaire", changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  try {
    const categories = await fetchCategories();

    // Category pages
    for (const cat of categories) {
      const slug = categorySlug(cat.category);
      annuairePages.push({
        url: `/annuaire/${slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });

      // Fetch companies for each category to include individual pages
      const data = await fetchCompanies({
        category: cat.category,
        page: 1,
        page_size: 100,
      });
      for (const company of data.companies) {
        annuairePages.push({
          url: `/annuaire/${slug}/${company.slug}`,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        });
      }
    }
  } catch {
    // If API is unreachable, just include the static annuaire page
  }

  const allPages = [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...analysePages.map((p) => ({ ...p, lastModified: now })),
    ...blogPages,
    ...annuairePages.map((p) => ({ ...p, lastModified: now })),
  ];

  return allPages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
