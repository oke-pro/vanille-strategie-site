import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Golden Visa Maurice 2026 : guide complet du nouveau programme pour investisseurs | Vanille Strat\u00e9gie",
  description:
    "Le Conseil des ministres lance un Golden Visa Scheme pour attirer les HNWI \u00e0 Maurice. Conditions, avantages fiscaux, proc\u00e9dures EDB, comparatif international. Par Didier Laroussinie, Expert-Comptable.",
  keywords: [
    "golden visa Maurice",
    "golden visa Maurice 2026",
    "visa dor\u00e9 Maurice",
    "golden visa scheme Mauritius",
    "investir Maurice",
    "HNWI Maurice",
    "r\u00e9sidence Maurice investisseur",
    "EDB Mauritius golden visa",
    "fiscalit\u00e9 Maurice 0%",
    "relocalisation Moyen-Orient Maurice",
    "permis r\u00e9sidence Maurice",
    "IRS RES PDS Maurice",
  ],
  alternates: {
    canonical:
      "https://vanillestrategie.fr/ressources/blog/golden-visa-maurice-2026-guide-complet",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title:
      "Golden Visa Maurice 2026 : guide complet du nouveau programme pour investisseurs | Vanille Strat\u00e9gie",
    description:
      "Le Conseil des ministres lance un Golden Visa Scheme pour attirer les HNWI \u00e0 Maurice. Conditions, avantages fiscaux, proc\u00e9dures EDB, comparatif international.",
    siteName: "Vanille Strat\u00e9gie",
    images: [
      { url: "https://vanillestrategie.fr/images/hero-paradise.jpg" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Golden Visa Maurice 2026 : guide complet du nouveau programme pour investisseurs",
    description:
      "Le Conseil des ministres lance un Golden Visa Scheme pour attirer les HNWI \u00e0 Maurice. Conditions, avantages fiscaux, proc\u00e9dures EDB, comparatif international.",
    images: ["https://vanillestrategie.fr/images/hero-paradise.jpg"],
  },
};

export default function GoldenVisaMaurice2026Page() {
  return (
    <>
      <BlogPostingJsonLd
        title="Golden Visa Maurice 2026 : guide complet du nouveau programme pour investisseurs"
        description="Le Conseil des ministres lance un Golden Visa Scheme pour attirer les HNWI \u00e0 Maurice. Conditions, avantages fiscaux, proc\u00e9dures EDB, comparatif international."
        slug="golden-visa-maurice-2026-guide-complet"
        datePublished="2026-04-13"
        wordCount={4200}
        articleSection="Actualit\u00e9"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          {
            name: "Golden Visa Maurice 2026",
            url: "/ressources/blog/golden-visa-maurice-2026-guide-complet",
          },
        ]}
      />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-amber-950 via-slate-900 to-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ressources/blog"
            className="text-sm text-amber-300 hover:underline"
          >
            &larr; Tous les articles
          </Link>

          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-amber-600/30 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-amber-300">
              Actualit&eacute; &mdash; Avril 2026
            </span>
            <span className="text-xs text-slate-400">&middot; 14 min de lecture</span>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Golden Visa Maurice 2026
            <br />
            <span className="text-amber-400">
              Le guide complet du nouveau programme
              <br className="hidden sm:block" />
              pour investisseurs
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Le 10&nbsp;avril 2026, le Conseil des ministres mauricien adopte une mesure
            historique&nbsp;: un <strong>Golden Visa Scheme</strong> pour attirer
            imm&eacute;diatement les investisseurs et grandes fortunes. Contexte
            g&eacute;opolitique, avantages fiscaux, proc&eacute;dures EDB, comparatif
            international&nbsp;&mdash; tout ce qu&apos;il faut savoir.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-sm font-bold text-white">
              DL
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{founder.name}</p>
              <p className="text-xs text-slate-400">{founder.title}</p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                &Eacute;tude de faisabilit&eacute; gratuite &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Chiffres clés ── */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {[
            { value: "0 %", label: "Plus-values, dividendes, succession" },
            { value: "15 %", label: "IS maximum (effectif 3 %)" },
            { value: "375k $", label: "Seuil r\u00e9sidence immobili\u00e8re" },
            { value: "2 ans", label: "Vers citoyennet\u00e9 (500k\u00a0$)" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-amber-600 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Article ── */}
      <article className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* ══ 1. CONTEXTE ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              1. Contexte&nbsp;: la guerre au Moyen-Orient acc&eacute;l&egrave;re tout
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Le conflit au Moyen-Orient a des r&eacute;percussions directes sur
                Maurice, pays fortement d&eacute;pendant des importations. Le
                8&nbsp;avril 2026, le Premier ministre <strong>Dr&nbsp;Navin Ramgoolam</strong> pr&eacute;side
                une r&eacute;union de crise. Le m&ecirc;me jour, l&apos;Iran et les
                &Eacute;tats-Unis signent un cessez-le-feu conditionnel de deux
                semaines&nbsp;&mdash; jug&eacute; fragile par les autorit&eacute;s.
                Le d&eacute;troit d&apos;Hormuz est temporairement rouvert au trafic
                maritime.
              </p>
              <p>
                Deux jours plus tard, le <strong>Conseil des ministres du 10&nbsp;avril 2026</strong> adopte
                un plan d&apos;urgence global articul&eacute; autour de six piliers.
                Le Golden Visa Scheme en est la mesure phare, ciblant les investisseurs
                et grandes fortunes pour une <strong>relocalisation imm&eacute;diate</strong> &agrave;
                Maurice.
              </p>
            </div>

            {/* Callout contexte */}
            <div className="mt-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-amber-800">
                Plan d&apos;urgence &mdash; 6 piliers
              </p>
              <ul className="mt-3 space-y-2 text-sm text-amber-900">
                <li>&bull; <strong>S&eacute;curit&eacute; &eacute;nerg&eacute;tique</strong> &mdash; Stock strat&eacute;gique 30-45 jours, +15&nbsp;% tarifs &eacute;lectricit&eacute; au 1er mai, 405&nbsp;MW renouvelable</li>
                <li>&bull; <strong>S&eacute;curit&eacute; alimentaire</strong> &mdash; Diversification imports (Madagascar, Namibie, Kenya)</li>
                <li>&bull; <strong>Tourisme</strong> &mdash; 9 vols hebdo suppl&eacute;mentaires, r&eacute;orientation march&eacute;s</li>
                <li>&bull; <strong>PME</strong> &mdash; SME Resilience Scheme, moratoires bancaires</li>
                <li>&bull; <strong>Groupes vuln&eacute;rables</strong> &mdash; Crisis Solidarity Fund</li>
                <li>&bull; <strong>Opportunit&eacute;s &eacute;conomiques</strong> &mdash; Golden Visa Scheme (ci-dessous)</li>
              </ul>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 2. LE GOLDEN VISA ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              2. Le Golden Visa Scheme&nbsp;: ce que l&apos;on sait
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Le programme est con&ccedil;u pour permettre une <strong>relocalisation
                imm&eacute;diate</strong> des investisseurs et grandes fortunes vers
                Maurice. Il se distingue des sch&eacute;mas existants (IRS, RES, PDS)
                par sa vocation d&apos;urgence et son positionnement explicite comme
                alternative pour les investisseurs impact&eacute;s par
                l&apos;instabilit&eacute; au Moyen-Orient.
              </p>
              <p>
                En parall&egrave;le, le gouvernement a cr&eacute;&eacute; un{" "}
                <strong>Fast-Track Concierge Service</strong> au sein de
                l&apos;Economic Development Board (EDB), sp&eacute;cifiquement
                d&eacute;di&eacute; aux HNWI entrants. Ce guichet acc&eacute;l&eacute;r&eacute;
                couvre l&apos;ensemble des d&eacute;marches&nbsp;: permis de r&eacute;sidence,
                ouverture de comptes bancaires, immatriculation d&apos;entreprises,
                inscription scolaire des enfants.
              </p>
            </div>

            {/* 5 mesures en grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Golden Visa Scheme",
                  desc: "Nouveau programme de r\u00e9sidence acc\u00e9l\u00e9r\u00e9e pour investisseurs et HNWI",
                  icon: "\uD83C\uDFAB",
                },
                {
                  title: "Fast-Track Concierge EDB",
                  desc: "Guichet unique et prioritaire pour toutes les d\u00e9marches administratives",
                  icon: "\u26A1",
                },
                {
                  title: "Licences financi\u00e8res acc\u00e9l\u00e9r\u00e9es",
                  desc: "FSC + Registrar of Companies : d\u00e9lais r\u00e9duits sans compromis sur la due diligence",
                  icon: "\uD83C\uDFE6",
                },
                {
                  title: "Acc\u00e8s Freeport imm\u00e9diat",
                  desc: "Op\u00e9rateurs du Moyen-Orient : pas de nouvelle demande pour op\u00e9rer en zone franche",
                  icon: "\uD83D\uDEA2",
                },
                {
                  title: "Extension TVA/MICE",
                  desc: "\u00c9v\u00e9nements sportifs internationaux et remises de prix TV/cin\u00e9ma inclus",
                  icon: "\uD83C\uDFAC",
                },
                {
                  title: "Comptes VOSTRO Inde",
                  desc: "Acc\u00e9l\u00e9ration des transactions commerciales en monnaies locales",
                  icon: "\uD83C\uDDEE\uD83C\uDDF3",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-2xl">{item.icon}</p>
                  <h3 className="mt-2 text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 3. SCHÉMAS EXISTANTS ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              3. Sch&eacute;mas de r&eacute;sidence existants&nbsp;: o&ugrave; se situe le Golden Visa&nbsp;?
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Maurice proposait d&eacute;j&agrave; plusieurs voies d&apos;acc&egrave;s
              &agrave; la r&eacute;sidence pour les investisseurs &eacute;trangers, toutes
              g&eacute;r&eacute;es par l&apos;EDB. Le Golden Visa se positionne au-dessus,
              avec des d&eacute;lais de traitement sans pr&eacute;c&eacute;dent.
            </p>

            {/* Tableau comparatif */}
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300 bg-slate-100">
                    <th className="px-4 py-3 font-semibold text-slate-900">Sch&eacute;ma</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Investissement min.</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Dur&eacute;e</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Citoyennet&eacute;</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-amber-50 font-semibold">
                    <td className="px-4 py-3 text-amber-800">Golden Visa (nouveau)</td>
                    <td className="px-4 py-3 text-amber-800">&Agrave; confirmer</td>
                    <td className="px-4 py-3 text-amber-800">&Agrave; confirmer</td>
                    <td className="px-4 py-3 text-amber-800">Acc&eacute;l&eacute;r&eacute;e</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">IRS / RES / PDS</td>
                    <td className="px-4 py-3">375&nbsp;000 USD</td>
                    <td className="px-4 py-3">20 ans renouvelable</td>
                    <td className="px-4 py-3">7 ans (2 ans si 500k&nbsp;$)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">G+2 (appartements)</td>
                    <td className="px-4 py-3">6M MUR (~135k USD)</td>
                    <td className="px-4 py-3">Dur&eacute;e de propri&eacute;t&eacute;</td>
                    <td className="px-4 py-3">R&eacute;sidence si &ge;&nbsp;375k&nbsp;$</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Occupation Permit</td>
                    <td className="px-4 py-3">50&nbsp;000 USD</td>
                    <td className="px-4 py-3">10 ans renouvelable</td>
                    <td className="px-4 py-3">7 ans de r&eacute;sidence</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Premium Visa</td>
                    <td className="px-4 py-3">Revenus ext&eacute;rieurs</td>
                    <td className="px-4 py-3">1 an renouvelable</td>
                    <td className="px-4 py-3">Non applicable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 4. AVANTAGES FISCAUX ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              4. Pourquoi Maurice&nbsp;? L&apos;avantage fiscal d&eacute;cisif
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                C&apos;est ce qui rend le Golden Visa particuli&egrave;rement attractif.
                En tant que praticiens sur le terrain, nous le constatons quotidiennement&nbsp;:
                Maurice offre une <strong>continuit&eacute; fiscale avantageuse</strong> pour
                un investisseur quittant Duba&iuml; ou une autre place du Moyen-Orient,
                tout en proposant un cadre juridique bilingue (fran&ccedil;ais et anglais)
                h&eacute;rit&eacute; du droit civil fran&ccedil;ais et de la common law
                britannique.
              </p>
            </div>

            {/* Grid avantages fiscaux */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Imp\u00f4t soci\u00e9t\u00e9s", value: "15 %", sub: "Effectif 3 % pour GBC" },
                { title: "Plus-values", value: "0 %", sub: "Aucun imp\u00f4t" },
                { title: "Dividendes", value: "0 %", sub: "Aucune retenue \u00e0 la source" },
                { title: "Succession", value: "0 %", sub: "Aucun droit" },
                { title: "Fortune / Patrimoine", value: "0 %", sub: "Aucune taxe" },
                { title: "Conventions fiscales", value: "40+", sub: "France, UK, Inde, Chine, EAU" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 text-center"
                >
                  <p className="text-3xl font-bold text-amber-600">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.sub}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 5. COMPARATIF INTERNATIONAL ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              5. Comparatif international&nbsp;: Maurice face aux Golden Visas du monde
            </h2>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300 bg-slate-100">
                    <th className="px-4 py-3 font-semibold text-slate-900">Pays</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Investissement min.</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Plus-values</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Citoyennet&eacute;</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Langue FR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-amber-50 font-semibold">
                    <td className="px-4 py-3 text-amber-800">Maurice</td>
                    <td className="px-4 py-3 text-amber-800">375k USD</td>
                    <td className="px-4 py-3 text-amber-800">0 %</td>
                    <td className="px-4 py-3 text-amber-800">2-7 ans</td>
                    <td className="px-4 py-3 text-amber-800">Oui</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">&Eacute;mirats (EAU)</td>
                    <td className="px-4 py-3">545k USD</td>
                    <td className="px-4 py-3">0 %</td>
                    <td className="px-4 py-3">Impossible</td>
                    <td className="px-4 py-3">Non</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Portugal</td>
                    <td className="px-4 py-3">250k EUR</td>
                    <td className="px-4 py-3">28 %</td>
                    <td className="px-4 py-3">5 ans</td>
                    <td className="px-4 py-3">Non</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Gr&egrave;ce</td>
                    <td className="px-4 py-3">250k EUR</td>
                    <td className="px-4 py-3">15 %</td>
                    <td className="px-4 py-3">7 ans</td>
                    <td className="px-4 py-3">Non</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Maurice est le <strong>seul programme</strong> qui combine fiscalit&eacute;
              z&eacute;ro sur les plus-values, cadre juridique bilingue fran&ccedil;ais-anglais,
              chemin vers la citoyennet&eacute;, et acc&egrave;s privil&eacute;gi&eacute; aux
              march&eacute;s africains via le CECPA avec l&apos;Inde et les accords commerciaux
              r&eacute;gionaux.
            </p>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 6. MESURES COMPLÉMENTAIRES ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              6. Mesures compl&eacute;mentaires pour les professionnels de la finance
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                La <strong>Financial Services Commission</strong> (FSC) et le
                Registrar of Companies ont re&ccedil;u instruction d&apos;acc&eacute;l&eacute;rer
                l&apos;octroi des licences financi&egrave;res, sans compromettre les exigences
                de due diligence. Les prestataires de services financiers souhaitant se
                relocaliser &agrave; Maurice b&eacute;n&eacute;ficieront de d&eacute;lais
                r&eacute;duits&nbsp;&mdash; un point crucial pour les fonds
                d&apos;investissement, les family offices et les soci&eacute;t&eacute;s de
                gestion de patrimoine.
              </p>
              <p>
                Les op&eacute;rateurs de zone franche d&eacute;j&agrave;
                &eacute;tablis au Moyen-Orient pourront op&eacute;rer dans la
                <strong> Freeport mauricienne sans passer par une nouvelle
                proc&eacute;dure</strong> de demande. Cette mesure
                d&apos;<em>accelerated clearance</em> &eacute;limine un obstacle
                administratif majeur et permet une transition quasi imm&eacute;diate
                des activit&eacute;s.
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 7. QUALITÉ DE VIE ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              7. Bien plus qu&apos;un avantage fiscal&nbsp;: la qualit&eacute; de vie
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Pour les entrepreneurs francophones, Maurice offre un cadre de vie
                exceptionnel&nbsp;: cinq golfs de classe mondiale, un syst&egrave;me
                de sant&eacute; en am&eacute;lioration constante, des &eacute;coles
                internationales (Le Bocage, Clavis, Northfields), une communaut&eacute;
                francophone importante, et un d&eacute;calage horaire de seulement
                +2h avec Paris en &eacute;t&eacute;.
              </p>
              <p>
                Le co&ucirc;t de la vie reste sensiblement inf&eacute;rieur &agrave;
                celui de Duba&iuml; ou de Singapour, notamment pour le logement et
                l&apos;&eacute;ducation. L&apos;&eacute;cosyst&egrave;me entrepreneurial
                se structure rapidement avec des incubateurs comme Turbine et La Plage
                Factory. Les liaisons a&eacute;riennes directes avec Paris (Air Mauritius,
                Air France), Duba&iuml; (Emirates) et les principales capitales africaines
                assurent une connectivit&eacute; internationale satisfaisante.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "25 \u00b0C", label: "Moyenne annuelle" },
                { value: "GMT+4", label: "+2h Paris en \u00e9t\u00e9" },
                { value: "#1", label: "Qualit\u00e9 de vie en Afrique" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-slate-50 p-5 text-center">
                  <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 8. CE QUI RESTE À VENIR ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              8. Ce qui reste &agrave; confirmer
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Le communiqu&eacute; du Conseil des ministres pr&eacute;cise que les
                minist&egrave;res et organismes publics d&eacute;finiront les
                modalit&eacute;s de mise en &oelig;uvre en consultation avec les
                parties prenantes. Nous anticipons&nbsp;:
              </p>
            </div>

            <div className="mt-6 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-800">
                Modalit&eacute;s attendues
              </p>
              <ul className="mt-3 space-y-2 text-sm text-blue-900">
                <li>&bull; Seuil d&apos;investissement (probablement sup&eacute;rieur aux 375k&nbsp;$ actuels)</li>
                <li>&bull; D&eacute;lais de traitement acc&eacute;l&eacute;r&eacute;s (quelques jours vs plusieurs semaines)</li>
                <li>&bull; Avantages regroupement familial et acc&egrave;s bancaire</li>
                <li>&bull; Date de lancement effective du programme</li>
                <li>&bull; Conditions d&apos;&eacute;ligibilit&eacute; d&eacute;taill&eacute;es</li>
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-bold text-amber-800">
                Notre recommandation
              </p>
              <p className="mt-2 text-sm text-amber-900">
                N&apos;attendez pas la publication des modalit&eacute;s finales.
                Les premi&egrave;res &eacute;tapes&nbsp;&mdash; &eacute;tude de
                faisabilit&eacute;, structuration patrimoniale, choix du
                v&eacute;hicule juridique&nbsp;&mdash; peuvent &ecirc;tre
                lanc&eacute;es imm&eacute;diatement. Pr&eacute;parez votre
                dossier&nbsp;: attestation de patrimoine, business plan,
                documents d&apos;identit&eacute; apostill&eacute;s, preuves de
                revenus. Les premi&egrave;res demandes b&eacute;n&eacute;ficient
                g&eacute;n&eacute;ralement d&apos;un traitement plus fluide.
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 9. NOTRE ACCOMPAGNEMENT ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              9. Notre accompagnement
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Notre cabinet accompagne depuis plus de 14&nbsp;ans les entrepreneurs
                francophones dans leur installation &agrave; Maurice. Cette annonce du
                Golden Visa est, &agrave; notre sens, un tournant&nbsp;: Maurice passe
                d&apos;une strat&eacute;gie d&apos;attraction passive &agrave; une
                d&eacute;marche proactive de captation des talents et capitaux.
              </p>
              <p>
                Nous suivrons de tr&egrave;s pr&egrave;s la publication des
                modalit&eacute;s r&eacute;glementaires et mettrons &agrave; jour ce
                guide d&egrave;s que les conditions pr&eacute;cises seront connues.
                Notre cabinet est &agrave; votre disposition pour un accompagnement
                complet, de l&apos;&eacute;tude initiale jusqu&apos;&agrave;
                l&apos;obtention effective du visa.
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* ── Sources ── */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-3">Sources</p>
          <ul className="space-y-1 text-xs text-slate-600">
            <li>&bull; <a href="https://edbmauritius.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Economic Development Board (EDB)</a></li>
            <li>&bull; <a href="https://defimedia.info/repercussions-economiques-de-la-guerre-au-moyen-orient-introduction-dun-schema-de-visa-dore-pour" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Defi Media &mdash; Visa dor&eacute; Maurice, 10 avril 2026</a></li>
            <li>&bull; <a href="https://lexpress.mu/s/maurice-deploie-un-plan-durgence-pour-proteger-son-economie-556596" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">L&apos;Express Maurice &mdash; Plan d&apos;urgence</a></li>
            <li>&bull; <a href="https://fr.allafrica.com/stories/202604100661.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AllAfrica &mdash; Plan d&apos;urgence Maurice</a></li>
            <li>&bull; <a href="https://maurice-info.mu/2026/04/10/decision-du-conseil-des-ministres-du-10-avril-2026.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Maurice Info &mdash; Conseil des Ministres 10 avril 2026</a></li>
          </ul>
          <p className="mt-4 text-xs text-slate-400">
            Cet article est fourni &agrave; titre informatif et sera mis &agrave; jour
            d&egrave;s publication des modalit&eacute;s r&eacute;glementaires.
            Contactez nos experts pour une analyse personnalis&eacute;e.
          </p>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Int&eacute;ress&eacute; par le Golden Visa Maurice&nbsp;?
          </h2>
          <p className="mt-3 text-slate-400">
            &Eacute;tude de faisabilit&eacute; gratuite par {founder.name}.
            <br />
            Pr&eacute;parez votre dossier d&egrave;s maintenant.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 px-10 hover:bg-amber-700">
                Nous contacter &rarr;
              </Button>
            </Link>
            <Link href="/ressources/simulateur-visa">
              <Button size="lg" variant="outline" className="border-slate-600 px-10 text-slate-300 hover:bg-slate-800">
                Simulateur Visa
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
