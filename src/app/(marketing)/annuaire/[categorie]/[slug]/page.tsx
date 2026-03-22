import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  Star,
  MapPin,
  Globe,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  ExternalLink,
  Building2,
  ArrowRight,
} from "lucide-react";
import { fetchCompany } from "@/lib/api-annuaire";
import { categoryLabel, categorySlug } from "@/lib/annuaire-helpers";
import { GoogleMap } from "./google-map";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Props = {
  params: Promise<{ categorie: string; slug: string }>;
};

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = await fetchCompany(slug);
  if (!company) return { title: "Entreprise introuvable" };

  const description =
    company.editorial_summary ||
    company.description ||
    `${company.name} — ${categoryLabel(company.category)} à ${company.city || "Maurice"}. Coordonnées, avis et informations.`;

  return {
    title: `${company.name} — ${categoryLabel(company.category)} à Maurice | Vanille Stratégie`,
    description: description.slice(0, 160),
    openGraph: {
      title: company.name,
      description: description.slice(0, 160),
      url: `https://vanillestrategie.fr/annuaire/${categorySlug(company.category)}/${company.slug}`,
      siteName: "Vanille Stratégie",
      locale: "fr_FR",
      type: "website",
      ...(company.photo_urls?.[0] && {
        images: [{ url: company.photo_urls[0] }],
      }),
    },
  };
}

// ---------------------------------------------------------------------------
// Schema.org
// ---------------------------------------------------------------------------

function LocalBusinessSchema({
  company,
}: {
  company: NonNullable<Awaited<ReturnType<typeof fetchCompany>>>;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    ...(company.description && { description: company.description }),
    ...(company.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address,
        ...(company.city && { addressLocality: company.city }),
        addressCountry: "MU",
      },
    }),
    ...(company.phone && { téléphone: company.phone }),
    ...(company.email && { email: company.email }),
    ...(company.website && { url: company.website }),
    ...(company.rating != null && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: company.rating,
        bestRating: 5,
        ...(company.reviews_count != null && {
          reviewCount: company.reviews_count,
        }),
      },
    }),
    ...(company.latitude != null &&
      company.longitude != null && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: company.latitude,
          longitude: company.longitude,
        },
      }),
    ...(company.photo_urls?.[0] && { image: company.photo_urls[0] }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function CompanyPage({ params }: Props) {
  const { categorie, slug } = await params;
  const company = await fetchCompany(slug);

  if (!company) {
    notFound();
  }

  const label = categoryLabel(company.category);
  const hasSocials = company.linkedin || company.facebook || company.instagram;
  const hasContact = company.website || company.phone || company.email;
  const hasMap =
    company.latitude != null && company.longitude != null;

  return (
    <>
      <LocalBusinessSchema company={company} />

      {/* Breadcrumb + header */}
      <section className="bg-slate-900 pt-12 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d’Ariane"
            className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/annuaire" className="hover:text-white transition-colors">
              Annuaire
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href={`/annuaire/${categorie}`}
              className="hover:text-white transition-colors"
            >
              {label}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-purple-300 font-medium truncate max-w-[200px]">
              {company.name}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-purple-300 backdrop-blur-sm mb-4">
                {label}
                {company.subcategory && ` — ${company.subcategory}`}
              </span>
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                {company.name}
              </h1>
              {company.city && (
                <p className="mt-3 flex items-center gap-2 text-slate-400">
                  <MapPin className="h-4 w-4" />
                  {company.address ? `${company.address}, ${company.city}` : company.city}
                </p>
              )}
            </div>

            {/* Rating badge */}
            {company.rating != null && (
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
                <span className="text-3xl font-black text-white">
                  {company.rating.toFixed(1)}
                </span>
                <div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.round(company.rating!)
                            ? "fill-amber-400 text-amber-400"
                            : "fill-slate-600 text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                  {company.reviews_count != null && (
                    <p className="mt-0.5 text-xs text-slate-400">
                      {company.reviews_count} avis Google
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Photos */}
              {company.photo_urls && company.photo_urls.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {company.photo_urls.slice(0, 4).map((url, i) => (
                    <div
                      key={i}
                      className={`relative overflow-hidden rounded-2xl ${
                        i === 0 ? "sm:col-span-2 aspect-[2/1]" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={url}
                        alt={`${company.name} - Photo ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes={i === 0 ? "100vw" : "50vw"}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              {(company.description || company.editorial_summary) && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    À propos
                  </h2>
                  {company.editorial_summary && (
                    <p className="text-lg text-slate-700 leading-relaxed font-medium mb-4">
                      {company.editorial_summary}
                    </p>
                  )}
                  {company.description && (
                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                      {company.description}
                    </p>
                  )}
                </div>
              )}

              {/* Map */}
              {hasMap && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Localisation
                  </h2>
                  <div className="overflow-hidden rounded-2xl border border-slate-100">
                    <GoogleMap
                      lat={company.latitude!}
                      lng={company.longitude!}
                      name={company.name}
                    />
                  </div>
                  {company.address && (
                    <p className="mt-3 text-sm text-slate-500 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {company.address}
                      {company.city && `, ${company.city}`}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact card */}
              {hasContact && (
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-5">
                    Contact
                  </h3>
                  <div className="space-y-4">
                    {company.website && (
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-slate-700 hover:text-purple-600 transition-colors group"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                          <Globe className="h-4 w-4" />
                        </div>
                        <span className="truncate">
                          {company.website
                            .replace(/^https?:\/\//, "")
                            .replace(/\/$/, "")}
                        </span>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                      </a>
                    )}
                    {company.phone && (
                      <a
                        href={`tel:${company.phone}`}
                        className="flex items-center gap-3 text-sm text-slate-700 hover:text-purple-600 transition-colors group"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                          <Phone className="h-4 w-4" />
                        </div>
                        <span>{company.phone}</span>
                      </a>
                    )}
                    {company.email && (
                      <a
                        href={`mailto:${company.email}`}
                        className="flex items-center gap-3 text-sm text-slate-700 hover:text-purple-600 transition-colors group"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                          <Mail className="h-4 w-4" />
                        </div>
                        <span className="truncate">{company.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Social links */}
              {hasSocials && (
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-5">
                    Réseaux sociaux
                  </h3>
                  <div className="flex gap-3">
                    {company.linkedin && (
                      <a
                        href={company.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-600 hover:bg-[#0077B5] hover:text-white transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {company.facebook && (
                      <a
                        href={company.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-600 hover:bg-[#1877F2] hover:text-white transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    )}
                    {company.instagram && (
                      <a
                        href={company.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-600 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] hover:text-white transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* CTA card */}
              <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 p-8 text-white shadow-xl shadow-purple-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-4">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Vous aussi, créez votre entreprise à Maurice
                  </h3>
                  <p className="text-purple-200 text-sm leading-relaxed mb-6">
                    Vanille Stratégie vous accompagne dans toutes les
                    démarches : création de société, permis de
                    résidence, comptabilité.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-purple-700 hover:bg-purple-50 transition-colors"
                  >
                    Nous contacter
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
