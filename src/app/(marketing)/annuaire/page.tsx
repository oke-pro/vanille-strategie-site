import { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  Monitor,
  Building,
  Scale,
  Calculator,
  HeartPulse,
  GraduationCap,
  UtensilsCrossed,
  Truck,
  ShoppingBag,
  HardHat,
  Megaphone,
  Shield,
  Palmtree,
  Leaf,
  Shirt,
  Wheat,
  Radio,
  Factory,
  Briefcase,
  Search,
} from "lucide-react";
import { fetchCategories } from "@/lib/api-annuaire";
import { categorySlug, categoryLabel } from "@/lib/annuaire-helpers";
import { AnnuaireSearch } from "./search";

export const metadata: Metadata = {
  title: "Annuaire des entreprises à Maurice | Vanille Stratégie",
  description:
    "Découvrez les meilleures entreprises à Maurice classées par catégorie : finance, tech, immobilier, juridique, santé et plus. Notes Google, coordonnées et avis.",
  openGraph: {
    title: "Annuaire des entreprises à Maurice",
    description:
      "Le répertoire complet des entreprises à Maurice, avec notes et avis vérifiés.",
    url: "https://vanillestrategie.fr/annuaire",
    siteName: "Vanille Stratégie",
    locale: "fr_FR",
    type: "website",
  },
};

/* Map category keys to lucide icons */
const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  finance: Landmark,
  tech: Monitor,
  immobilier: Building,
  juridique: Scale,
  comptabilite: Calculator,
  sante: HeartPulse,
  education: GraduationCap,
  restauration: UtensilsCrossed,
  transport: Truck,
  commerce: ShoppingBag,
  construction: HardHat,
  marketing: Megaphone,
  assurance: Shield,
  tourisme: Palmtree,
  energie: Leaf,
  textile: Shirt,
  agriculture: Wheat,
  telecom: Radio,
  industrie: Factory,
  services: Briefcase,
};

function getCategoryIcon(key: string) {
  return CATEGORY_ICONS[key.toLowerCase()] || Briefcase;
}

export default async function AnnuairePage() {
  const categories = await fetchCategories();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-purple-300 backdrop-blur-sm">
            Annuaire Maurice
          </p>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Annuaire des entreprises{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              à Maurice
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Trouvez les prestataires, partenaires et services dont vous avez
            besoin pour votre activité à l&apos;île Maurice.
            Catégories, notes Google et coordonnées vérifiées.
          </p>

          {/* Search bar */}
          <div className="mx-auto mt-10 max-w-xl">
            <AnnuaireSearch />
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Explorer par catégorie
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {categories.length > 0
                ? `${categories.reduce((s, c) => s + c.count, 0)} entreprises référencées dans ${categories.length} catégories`
                : "Chargement des catégories…"}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((cat, idx) => {
              const Icon = getCategoryIcon(cat.category);
              const slug = categorySlug(cat.category);
              return (
                <Link
                  key={cat.category}
                  href={`/annuaire/${slug}`}
                  className="group flex items-center gap-5 rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-purple-200"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 truncate">
                      {categoryLabel(cat.category)}
                    </p>
                    <p className="text-sm text-slate-500">
                      {cat.count} entreprise{cat.count > 1 ? "s" : ""}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-purple-600/10 text-purple-500 mb-8 border border-purple-500/20">
            <Search className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Vous aussi, créez votre{" "}
            <span className="text-purple-400">entreprise à Maurice</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Vanille Stratégie vous accompagne de A à Z : création de
            société, permis de résidence, comptabilité et fiscalité.
          </p>
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-purple-600 hover:bg-purple-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-purple-500/20 text-white transition-all duration-300"
            >
              Demander un accompagnement gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
