/**
 * Category display helpers for the annuaire.
 */

/** Map of category slugs to human-readable labels */
export const CATEGORY_LABELS: Record<string, string> = {
  finance: "Finance & Banque",
  tech: "Technologies & IT",
  immobilier: "Immobilier",
  juridique: "Juridique & Conseil",
  comptabilite: "Comptabilit\u00e9 & Audit",
  sante: "Sant\u00e9 & Bien-\u00eatre",
  education: "Education & Formation",
  restauration: "Restauration & H\u00f4tellerie",
  transport: "Transport & Logistique",
  commerce: "Commerce & Distribution",
  construction: "Construction & BTP",
  marketing: "Marketing & Communication",
  assurance: "Assurance",
  tourisme: "Tourisme & Loisirs",
  energie: "Energie & Environnement",
  textile: "Textile & Mode",
  agriculture: "Agriculture & Agroalimentaire",
  telecom: "T\u00e9l\u00e9communications",
  industrie: "Industrie & Manufacture",
  services: "Services aux entreprises",
};

/** Return a human label for a category key. Falls back to capitalised key. */
export function categoryLabel(key: string): string {
  return (
    CATEGORY_LABELS[key.toLowerCase()] ||
    key.charAt(0).toUpperCase() + key.slice(1)
  );
}

/** Slug-ify a category string for URL usage */
export function categorySlug(category: string): string {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Render a rating as filled/empty star characters */
export function renderStars(rating: number): string {
  const full = Math.round(rating);
  return "\u2605".repeat(full) + "\u2606".repeat(5 - full);
}
