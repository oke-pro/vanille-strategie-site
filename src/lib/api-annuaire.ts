/**
 * API client for the annuaire (company directory).
 * Used server-side in RSC pages.
 */

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://vanille-strategie-api.oke.pro";

// ---------------------------------------------------------------------------
// Types (mirrors backend Pydantic schemas)
// ---------------------------------------------------------------------------

export interface CategoryCount {
  category: string;
  count: number;
}

export interface CompanyListItem {
  id: number;
  slug: string;
  name: string;
  category: string;
  subcategory: string | null;
  city: string | null;
  website: string | null;
  rating: number | null;
  reviews_count: number | null;
  photo_url: string | null;
}

export interface CompanyListResponse {
  companies: CompanyListItem[];
  total: number;
  page: number;
  page_size: number;
}

export interface CompanyDetail {
  id: number;
  slug: string;
  name: string;
  description: string | null;
  editorial_summary: string | null;
  category: string;
  subcategory: string | null;
  website: string | null;
  phone: string | null;
  email: string | null;
  linkedin: string | null;
  facebook: string | null;
  instagram: string | null;
  address: string | null;
  city: string | null;
  latitude: number | null;
  longitude: number | null;
  rating: number | null;
  reviews_count: number | null;
  photo_urls: string[] | null;
}

// ---------------------------------------------------------------------------
// Fetch helpers
// ---------------------------------------------------------------------------

export async function fetchCategories(): Promise<CategoryCount[]> {
  const res = await fetch(`${API_URL}/api/v1/companies/categories`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

export async function fetchCompanies(params: {
  category?: string;
  subcategory?: string;
  search?: string;
  page?: number;
  page_size?: number;
}): Promise<CompanyListResponse> {
  const qs = new URLSearchParams();
  if (params.category) qs.set("category", params.category);
  if (params.subcategory) qs.set("subcategory", params.subcategory);
  if (params.search) qs.set("search", params.search);
  if (params.page) qs.set("page", String(params.page));
  if (params.page_size) qs.set("page_size", String(params.page_size));

  const res = await fetch(`${API_URL}/api/v1/companies?${qs.toString()}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return { companies: [], total: 0, page: 1, page_size: 20 };
  return res.json();
}

export async function fetchCompany(
  slug: string
): Promise<CompanyDetail | null> {
  const res = await fetch(`${API_URL}/api/v1/companies/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
}
