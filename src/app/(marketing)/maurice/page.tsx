import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { mauritiusAdvantages, officialSources } from "@/data/site";

export const metadata: Metadata = {
  title: "L'Île Maurice — Star and Key of the Indian Ocean | Classements internationaux 2025",
  description:
    "N°1 Afrique en liberté économique (Heritage Foundation 2025), gouvernance (Mo Ibrahim) et qualité de vie (Mercer). Fiscalité 15 % flat, 0 % dividendes et plus-values. Le guide complet.",
};

const internationalRankings = [
  { stat: "#1", label: "Afrique — Liberté économique", source: "Heritage Foundation 2025", sublabel: "15e mondial" },
  { stat: "#1", label: "Afrique — Bonheur", source: "ONU World Happiness Report 2025", sublabel: "78e mondial" },
  { stat: "#1", label: "Afrique — Gouvernance", source: "Mo Ibrahim Index", sublabel: "Depuis 2007" },
  { stat: "#1", label: "Afrique — Qualité de vie", source: "Mercer Quality of Living", sublabel: "88e mondial" },
  { stat: "23e", label: "Pays le plus sûr au monde", source: "Global Peace Index 2025", sublabel: "Sur 163 pays" },
  { stat: "13e", label: "Facilité des affaires", source: "Doing Business (Banque Mondiale)", sublabel: "1er Afrique" },
  { stat: "15 %", label: "Taux d'imposition unique", source: "Finance Act — IS et IR flat", sublabel: "Pas de tranches" },
  { stat: "0 %", label: "Plus-values · Dividendes · Succession", source: "Income Tax Act 1995", sublabel: "Aucune taxe patrimoniale" },
  { stat: "47", label: "Conventions fiscales signées", source: "Dont France, UK, Inde, Chine, EAU", sublabel: "Protection juridique" },
  { stat: "11 h", label: "Vol direct Paris — Maurice", source: "Air Mauritius / Air France", sublabel: "Sans escale" },
  { stat: "GMT+4", label: "2 h de décalage avec Paris", source: "Même fuseau que Dubaï", sublabel: "Overlap Europe idéal" },
  { stat: "25 °C", label: "Température moyenne annuelle", source: "Météo France / MMS", sublabel: "Climat tropical tempéré" },
];

const sections = [
  {
    title: "Une fiscalité très favorable",
    points: [
      "Aucun revenu ne peut être taxé à plus de 15 % — taux unique flat, IS comme IR",
      "Aucun revenu ne peut être taxé plus d'une fois — 47 conventions fiscales le garantissent",
      "Pas de droits de succession, ni d'ISF, ni de taxe foncière",
      "Crédit d'impôt de 80 % pour les bénéfices internationaux (GBC)",
      "0 % sur les dividendes, les plus-values et les gains en capital",
      "Libre rapatriement des bénéfices et capitaux — aucune restriction de change",
      "Charges sociales plafonnées (~60 €/mois par employé)",
    ],
  },
  {
    title: "Stabilité politique et économique",
    points: [
      "Indépendance depuis 1968 — démocratie ininterrompue, modèle parlementaire britannique",
      "N°1 Afrique en gouvernance (Mo Ibrahim Index) — depuis 2007",
      "N°1 Afrique en liberté économique (Heritage Foundation 2025, 15e mondial)",
      "23e pays le plus sûr au monde (Global Peace Index 2025)",
      "PIB par habitant ~12 000 USD — revenu intermédiaire supérieur (Banque Mondiale)",
      "Presse libre — « quatrième pouvoir » vigilant, pluralisme garanti",
    ],
  },
  {
    title: "Position géographique stratégique",
    points: [
      "Hub Afrique-Inde-Asie au cœur de l'océan Indien",
      "Fuseau GMT+4 : 2 h de décalage avec Paris, même fuseau que Dubaï",
      "Vol direct Paris-Maurice en 11 h (Air Mauritius, Air France)",
      "3 câbles sous-marins fibre optique — connectivité internationale garantie",
      "Accès préférentiel à 68 % de la population mondiale via accords commerciaux",
      "FTA Chine-Maurice signé en 2019 — membre COMESA, SADC",
    ],
  },
  {
    title: "Capital humain et qualité de vie",
    points: [
      "1,3 million d'habitants — société multiculturelle (français, anglais, créole, hindi)",
      "N°1 Afrique au World Happiness Report 2025 (ONU)",
      "Population bilingue français-anglais, taux d'alphabétisation de 93 %",
      "Universités locales + diplômes internationaux reconnus",
      "25 °C de moyenne annuelle, plus de 300 jours d'ensoleillement",
      "30 000+ expatriés français — communauté active et structurée",
    ],
  },
];

export default function MauricePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <Image src="/images/le-morne.jpg" alt="Nature luxuriante Maurice" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">L&apos;Île Maurice</h1>
            <p className="mt-2 text-xl text-blue-200">&laquo;&nbsp;Star and Key of the Indian Ocean&nbsp;&raquo; — N°1 Afrique en liberté économique, gouvernance et qualité de vie</p>
          </div>
        </div>
      </section>

      {/* Stats rapides */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {mauritiusAdvantages.slice(0, 8).map((a) => (
              <div key={a.label} className="rounded-xl bg-blue-50 p-6 text-center">
                <p className="text-3xl font-bold text-blue-600">{a.stat}</p>
                <p className="mt-1 text-sm font-medium text-slate-700">{a.label}</p>
                <p className="mt-0.5 text-xs text-slate-500">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maurice en chiffres : les classements qui comptent */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Classements internationaux vérifiés</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Maurice en chiffres : les classements qui comptent</h2>
            <p className="mt-4 text-lg text-slate-600">
              Des données sourcées auprès d&apos;institutions internationales reconnues. Pas de marketing, pas d&apos;approximation — des faits.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {internationalRankings.map((r) => (
              <div key={r.label} className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-blue-200">
                <p className="text-4xl font-black text-blue-600 lg:text-5xl">{r.stat}</p>
                <p className="mt-3 text-sm font-bold text-slate-900">{r.label}</p>
                <p className="mt-1 text-xs text-slate-500">{r.sublabel}</p>
                <p className="mt-3 text-[11px] font-medium text-blue-500/70 uppercase tracking-wider">{r.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections détaillées */}
      {sections.map((s, idx) => (
        <section key={s.title} className={idx % 2 === 0 ? "bg-slate-50 py-16" : "bg-white py-16"}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{s.title}</h2>
            <ul className="mt-6 space-y-3">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  <span className="text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Explorer en profondeur */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Explorer Maurice en profondeur</h2>
          <p className="mt-2 text-slate-600">Nos analyses détaillées pour tout savoir avant de vous installer.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/ressources/blog/qualite-de-vie-maurice-lifestyle-golf-business", title: "Qualité de vie & Golfs", badge: "Lifestyle" },
              { href: "/ressources/blog/infrastructures-maurice-telecom-sante-education", title: "Infrastructures", badge: "Pratique" },
              { href: "/ressources/blog/industries-cles-maurice-opportunites", title: "Industries & Commerce", badge: "Business" },
              { href: "/ressources/blog/ecosysteme-tech-startups-maurice", title: "Écosystème Tech", badge: "Digital" },
              { href: "/ressources/blog/maurice-reunion-liaisons-expats-francais", title: "Maurice ↔ La Réunion", badge: "Mobilité" },
              { href: "/ressources/blog/ecoles-internationales-maurice-education", title: "Écoles internationales", badge: "Famille" },
              { href: "/ressources/blog/reseaux-entrepreneurs-clubs-affaires-maurice", title: "Réseaux & Clubs", badge: "Social" },
              { href: "/ressources/blog/comparatif-maurice-maroc-portugal-dubai", title: "Maurice vs le monde", badge: "Comparatif" },
            ].map((article) => (
              <Link key={article.href} href={article.href}>
                <div className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all hover:bg-white hover:shadow-md hover:border-blue-300">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{article.badge}</span>
                  <h3 className="mt-1 text-sm font-bold text-slate-900 group-hover:text-blue-600">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sources officielles */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest text-slate-500">Sources officielles</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {officialSources.slice(0, 6).map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10">
                {s.name}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Étude de faisabilité gratuite</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
