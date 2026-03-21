import { MetadataRoute } from "next";

const BASE_URL = "https://vanillestrategie.fr";

export default function sitemap(): MetadataRoute.Sitemap {
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

  // Articles de blog (tous)
  const blogSlugs = [
    "routes-financieres-dubai-maurice-transition",
    "structures-juridiques-maurice-2026",
    "fiscalite-maurice-2026",
    "permis-residence-maurice-guide-2026",
    "convention-fiscale-france-maurice",
    "quitter-dubai-pourquoi-maurice",
    "ecommerce-depuis-maurice",
    "substance-requirements-maurice",
    "comparatif-maurice-maroc-portugal-dubai",
    "transfer-pricing-maurice-2025",
    "devises-mur-conversion-maurice",
    "edb-mauritius-role-programmes",
    "paiements-en-ligne-maurice-stripe-alternatives",
    "ecosysteme-tech-startups-maurice",
    "industries-cles-maurice-opportunites",
    "maurice-reunion-liaisons-expats-francais",
    "infrastructures-maurice-telecom-sante-education",
    "qualite-de-vie-maurice-lifestyle-golf-business",
    "reseaux-entrepreneurs-clubs-affaires-maurice",
    "ouvrir-compte-bancaire-maurice-guide",
    "crypto-vasp-licence-maurice",
    "succession-internationale-france-maurice",
    "droit-travail-maurice-workers-rights-act",
    "ecoles-internationales-maurice-education",
    "sources-officielles-fiscalite-maurice",
  ];

  const blogPages = blogSlugs.map((slug) => ({
    url: `/ressources/blog/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...analysePages, ...blogPages].map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
