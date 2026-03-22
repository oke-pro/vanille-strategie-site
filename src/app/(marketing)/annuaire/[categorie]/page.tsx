import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, Star, MapPin, Globe, Building2 } from "lucide-react";
import {
  fetchCategories,
  fetchCompanies,
  type CompanyListItem,
} from "@/lib/api-annuaire";
import { categoryLabel, categorySlug } from "@/lib/annuaire-helpers";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Props = {
  params: Promise<{ categorie: string }>;
  searchParams: Promise<{ page?: string }>;
};

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorie } = await params;
  const categories = await fetchCategories();
  const cat = categories.find((c) => categorySlug(c.category) === categorie);
  const label = cat ? categoryLabel(cat.category) : categorie;

  return {
    title: `${label} à Maurice — Annuaire | Vanille Stratégie`,
    description: `Liste des entreprises en ${label} à l’île Maurice. Notes, avis Google et coordonnées vérifiées.`,
    openGraph: {
      title: `${label} à Maurice — Annuaire entreprises`,
      description: `Découvrez les meilleures entreprises en ${label} à Maurice.`,
      url: `https://vanillestrategie.fr/annuaire/${categorie}`,
      siteName: "Vanille Stratégie",
      locale: "fr_FR",
      type: "website",
    },
  };
}

// ---------------------------------------------------------------------------
// Company card
// ---------------------------------------------------------------------------

function CompanyCard({ company, categorie }: { company: CompanyListItem; categorie: string }) {
  return (
    <Link
      href={`/annuaire/${categorie}/${company.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-purple-200"
    >
      {/* Photo */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        {company.photo_url ? (
          <Image
            src={company.photo_url}
            alt={company.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
            <Building2 className="h-12 w-12 text-slate-300" />
          </div>
        )}
        {company.subcategory && (
          <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
            {company.subcategory}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-1">
          {company.name}
        </h3>

        {/* Rating */}
        {company.rating != null && (
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(company.rating!)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-slate-200 text-slate-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-700">
              {company.rating.toFixed(1)}
            </span>
            {company.reviews_count != null && (
              <span className="text-xs text-slate-400">
                ({company.reviews_count} avis)
              </span>
            )}
          </div>
        )}

        {/* Meta */}
        <div className="mt-auto pt-4 flex items-center gap-4 text-xs text-slate-500">
          {company.city && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {company.city}
            </span>
          )}
          {company.website && (
            <span className="inline-flex items-center gap-1">
              <Globe className="h-3.5 w-3.5" />
              Site web
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Pagination
// ---------------------------------------------------------------------------

function Pagination({
  current,
  total,
  pageSize,
  categorie,
}: {
  current: number;
  total: number;
  pageSize: number;
  categorie: string;
}) {
  const totalPages = Math.ceil(total / pageSize);
  if (totalPages <= 1) return null;

  const pages: (number | "ellipsis")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= current - 1 && i <= current + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "ellipsis") {
      pages.push("ellipsis");
    }
  }

  return (
    <nav className="mt-16 flex items-center justify-center gap-2" aria-label="Pagination">
      {pages.map((p, idx) =>
        p === "ellipsis" ? (
          <span key={`e-${idx}`} className="px-2 text-slate-400">
            &hellip;
          </span>
        ) : (
          <Link
            key={p}
            href={`/annuaire/${categorie}${p > 1 ? `?page=${p}` : ""}`}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold transition-colors ${
              p === current
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-purple-50 hover:text-purple-600"
            }`}
          >
            {p}
          </Link>
        )
      )}
    </nav>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function CategoriePage({ params, searchParams }: Props) {
  const { categorie } = await params;
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  // Resolve real category name from slug
  const categories = await fetchCategories();
  const cat = categories.find((c) => categorySlug(c.category) === categorie);

  if (!cat) {
    notFound();
  }

  const label = categoryLabel(cat.category);
  const PAGE_SIZE = 21;

  const data = await fetchCompanies({
    category: cat.category,
    page,
    page_size: PAGE_SIZE,
  });

  return (
    <>
      {/* Breadcrumb + header */}
      <section className="bg-slate-900 pt-12 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d’Ariane"
            className="flex items-center gap-1.5 text-sm text-slate-400 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href="/annuaire"
              className="hover:text-white transition-colors"
            >
              Annuaire
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-purple-300 font-medium">{label}</span>
          </nav>

          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {label}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              à Maurice
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            {data.total} entreprise{data.total > 1 ? "s" : ""} référencée
            {data.total > 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Company grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {data.companies.length === 0 ? (
            <div className="text-center py-20">
              <Building2 className="mx-auto h-16 w-16 text-slate-300 mb-6" />
              <p className="text-xl font-bold text-slate-700">
                Aucune entreprise trouvée
              </p>
              <p className="mt-2 text-slate-500">
                Cette catégorie ne contient pas encore d&apos;entreprises.
              </p>
              <Link
                href="/annuaire"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-8 py-3 text-sm font-bold text-white transition-colors"
              >
                Retour à l&apos;annuaire
              </Link>
            </div>
          ) : (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {data.companies.map((company) => (
                  <CompanyCard
                    key={company.id}
                    company={company}
                    categorie={categorie}
                  />
                ))}
              </div>
              <Pagination
                current={page}
                total={data.total}
                pageSize={PAGE_SIZE}
                categorie={categorie}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
}
