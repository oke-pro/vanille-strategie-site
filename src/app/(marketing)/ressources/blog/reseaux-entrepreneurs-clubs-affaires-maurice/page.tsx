import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "R\u00e9seaux d\u2019entrepreneurs et clubs d\u2019affaires \u00e0 Maurice \u2014 Guide du networking francophone | Vanille Strat\u00e9gie",
  description:
    "Guide complet 2026 des r\u00e9seaux d\u2019affaires, clubs d\u2019entrepreneurs et associations professionnelles \u00e0 l\u2019\u00cele Maurice. CCIFM, MCCI, BNI, French Tech, Rotary : tous les contacts pour r\u00e9ussir votre networking.",
  keywords: [
    "networking Maurice",
    "clubs affaires Maurice",
    "CCIFM",
    "MCCI",
    "BNI Mauritius",
    "French Tech Mauritius",
    "r\u00e9seaux entrepreneurs Maurice",
    "expatriation Maurice networking",
    "chambre commerce Maurice",
    "business club \u00eele Maurice",
    "Rotary Club Maurice",
    "UFE Maurice",
  ],
  alternates: {
    canonical: "https://vanillestrategie.fr/ressources/blog/reseaux-entrepreneurs-clubs-affaires-maurice",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title: "R\u00e9seaux d\u2019entrepreneurs et clubs d\u2019affaires \u00e0 Maurice \u2014 Guide du networking francophone | Vanille Strat\u00e9gie",
    description:
      "Guide complet 2026 des r\u00e9seaux d\u2019affaires, clubs d\u2019entrepreneurs et associations professionnelles \u00e0 l\u2019\u00cele Maurice. CCIFM, MCCI, BNI, French Tech, Rotary : tous les contacts pour r\u00e9ussir votre networking.",
    siteName: "Vanille Stratégie",
    images: [{ url: "https://vanillestrategie.fr/images/hero-paradise.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "R\u00e9seaux d\u2019entrepreneurs et clubs d\u2019affaires \u00e0 Maurice \u2014 Guide du networking francophone | Vanille Strat\u00e9gie",
    description:
      "Guide complet 2026 des r\u00e9seaux d\u2019affaires, clubs d\u2019entrepreneurs et associations professionnelles \u00e0 l\u2019\u00cele Maurice. CCIFM, MCCI, BNI, French Tech, Rotary : tous les contacts pour r\u00e9ussir votre networking.",
    images: ["https://vanillestrategie.fr/images/hero-paradise.jpg"],
  },
};

export default function ReseauxEntrepreneursPage() {
  return (
    <>
      <BlogPostingJsonLd
        title="R\u00e9seaux d\u2019entrepreneurs et clubs d\u2019affaires \u00e0 Maurice \u2014 Guide du networking francophone | Vanille Strat\u00e9gie"
        description="Guide complet 2026 des r\u00e9seaux d\u2019affaires, clubs d\u2019entrepreneurs et associations professionnelles \u00e0 l\u2019\u00cele Maurice. CCIFM, MCCI, BNI, French Tech, Rotary : tous les contacts pour r\u00e9ussir votre networking."
        slug="reseaux-entrepreneurs-clubs-affaires-maurice"
        datePublished="2026-03-16"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          { name: "R\u00e9seaux d\u2019entrepreneurs et clubs d\u2019affaires \u00e0 Maurice \u2014 Guide du networking francophone | Vanille Strat\u00e9gie", url: "/ressources/blog/reseaux-entrepreneurs-clubs-affaires-maurice" },
        ]}
      />
      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ressources/blog"
            className="text-sm text-blue-400 hover:underline"
          >
            &larr; Tous les articles
          </Link>

          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-300">
              Networking
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">&middot; 14 min</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            R&eacute;seaux d&apos;entrepreneurs et clubs
            d&apos;affaires &agrave; Maurice
            <br />
            <span className="text-emerald-400">
              Le guide du networking francophone
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            CCIFM, MCCI, BNI, French Tech, Rotary, UFE&hellip; Tous les
            r&eacute;seaux, clubs et associations pour construire votre
            carnet d&apos;adresses &agrave; l&apos;&icirc;le Maurice et
            acc&eacute;l&eacute;rer votre business d&egrave;s votre
            arriv&eacute;e.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 text-sm font-bold text-white">
              DL
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{founder.name}</p>
              <p className="text-xs text-slate-400">{founder.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* ── 1. Introduction ── */}
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>Le networking, nerf de la guerre &agrave; Maurice</h2>
            <p>
              Maurice, c&apos;est 1,3&nbsp;million d&apos;habitants sur une
              &icirc;le de 2&nbsp;040&nbsp;km&sup2;. Ici, tout le monde se
              conna&icirc;t &mdash; ou presque. Le bouche-&agrave;-oreille
              reste le premier canal d&apos;affaires, loin devant la
              publicit&eacute; ou le d&eacute;marchage &agrave; froid.
            </p>
            <p>
              Pour un entrepreneur qui s&apos;installe, la question
              n&apos;est pas &laquo;&nbsp;faut-il networker ?&nbsp;&raquo;
              mais &laquo;&nbsp;par o&ugrave; commencer ?&nbsp;&raquo;.
              Int&eacute;grer les bons r&eacute;seaux d&egrave;s les
              premiers mois peut faire la diff&eacute;rence entre un
              d&eacute;marrage laborieux et une mont&eacute;e en puissance
              rapide.
            </p>
            <p>
              Ce guide recense les principaux r&eacute;seaux, clubs et
              &eacute;v&eacute;nements actifs en 2026, avec un focus sur
              la communaut&eacute; francophone. Nous l&apos;avons
              construit &agrave; partir de notre exp&eacute;rience terrain
              depuis 2012.
            </p>
          </div>

          {/* ── 2. Chambres de Commerce ── */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Les chambres de commerce : la porte d&apos;entr&eacute;e officielle
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* MCCI */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-lg font-bold text-blue-700">
                    M
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    MCCI &mdash; Mauritius Chamber of Commerce and Industry
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Fond&eacute;e en 1850, la MCCI est la principale chambre de
                  commerce de l&apos;&icirc;le avec plus de 400&nbsp;membres.
                  Elle organise r&eacute;guli&egrave;rement des
                  d&eacute;jeuners-d&eacute;bats, des tables rondes et des
                  &eacute;v&eacute;nements sectoriels. Son programme{" "}
                  <strong>Xport Accelerator</strong> aide les entreprises
                  &agrave; se connecter avec les march&eacute;s africains.
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  mcci.org &mdash; Si&egrave;ge : Port Louis
                </p>
              </div>

              {/* CCIFM */}
              <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-lg font-bold text-emerald-700">
                    CC
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    CCIFM &mdash; CCI France Maurice
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  <strong>Le r&eacute;seau francophone cl&eacute;.</strong>{" "}
                  Environ 110&nbsp;membres repr&eacute;sentant
                  37&nbsp;secteurs d&apos;activit&eacute; et
                  10&nbsp;000&nbsp;salari&eacute;s. La CCIFM organise des
                  d&eacute;jeuners-d&eacute;bats, happy hours, soir&eacute;es
                  th&eacute;matiques, galas et tournois sportifs. C&apos;est
                  le point d&apos;entr&eacute;e naturel pour tout
                  entrepreneur francophone qui arrive &agrave; Maurice.
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  ccifm.mu &mdash; Si&egrave;ge : Eb&egrave;ne
                </p>
              </div>

              {/* Autres chambres */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Autres chambres bilat&eacute;rales
                </h3>
                <ul className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                  <li>
                    <strong>AMCHAM</strong> &mdash; American Chamber of Commerce
                    Mauritius. Networking r&eacute;gulier, business lunches,
                    s&eacute;minaires avec des experts am&eacute;ricains et
                    mauriciens.
                  </li>
                  <li>
                    <strong>Mauritius-India Joint Business Council</strong>{" "}
                    &mdash; Liens avec le march&eacute; indien, missions
                    commerciales crois&eacute;es.
                  </li>
                  <li>
                    <strong>Mauritius-China Chamber of Commerce</strong>{" "}
                    &mdash; Relations &eacute;conomiques Chine-Maurice,
                    &eacute;v&eacute;nements conjoints.
                  </li>
                  <li>
                    <strong>SA-Mauritius Chamber</strong> &mdash;
                    Acc&egrave;s au march&eacute; sud-africain, missions
                    commerciales.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── 3. Clubs francophones ── */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Clubs et r&eacute;seaux francophones
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              La communaut&eacute; fran&ccedil;aise &agrave; Maurice est
              l&apos;une des plus dynamiques de l&apos;oc&eacute;an Indien.
              Plusieurs structures permettent de tisser des liens rapidement.
            </p>

            <div className="mt-8 space-y-6">
              {/* French Tech */}
              <div className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  La French Tech Mauritius
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Labellis&eacute;e en mars 2019, La French Tech Mauritius
                  f&eacute;d&egrave;re l&apos;&eacute;cosyst&egrave;me des
                  acteurs &eacute;conomiques innovants ayant un lien avec la
                  France. Un board de 12&nbsp;b&eacute;n&eacute;voles anime
                  la communaut&eacute;. Objectif : stimuler la croissance des
                  startups, d&eacute;velopper la coop&eacute;ration
                  r&eacute;gionale avec La R&eacute;union et Madagascar, et
                  projeter les projets &agrave; l&apos;international. Les
                  &laquo;&nbsp;French Tech Connect&nbsp;&raquo; offrent des
                  occasions r&eacute;guli&egrave;res de networking.
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  lafrenchtech-mauritius.com &mdash; Meetup : La French Tech
                  Maurice
                </p>
              </div>

              {/* CCE */}
              <div className="rounded-xl border-l-4 border-amber-500 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Conseillers du Commerce Ext&eacute;rieur de la France (CCEF)
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Le r&eacute;seau des 4&nbsp;500 CCEF dans 150&nbsp;pays
                  inclut une section Maurice. Ces chefs d&apos;entreprise
                  b&eacute;n&eacute;voles, nomm&eacute;s par d&eacute;cret,
                  m&egrave;nent des actions concr&egrave;tes pour
                  l&apos;internationalisation des entreprises
                  fran&ccedil;aises. Ils sont un excellent point de contact
                  pour obtenir des introductions qualifi&eacute;es.
                </p>
              </div>

              {/* UFE */}
              <div className="rounded-xl border-l-4 border-red-500 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  UFE Maurice &mdash; Union des Fran&ccedil;ais de
                  l&apos;&Eacute;tranger
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Association reconnue d&apos;utilit&eacute; publique
                  fond&eacute;e en 1927, l&apos;UFE Maurice propose des
                  activit&eacute;s r&eacute;guli&egrave;res : rencontres
                  conviviales, soir&eacute;es th&eacute;matiques, entraide
                  entre expatri&eacute;s. Id&eacute;al pour les conjoints
                  qui accompagnent un entrepreneur et souhaitent aussi
                  cr&eacute;er leur cercle social rapidement.
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  ufe-maurice.org
                </p>
              </div>

              {/* ADFE */}
              <div className="rounded-xl border-l-4 border-violet-500 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Fran&ccedil;ais du Monde &mdash; ADFE
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  L&apos;Association D&eacute;mocratique des Fran&ccedil;ais
                  &agrave; l&apos;&Eacute;tranger d&eacute;fend les
                  int&eacute;r&ecirc;ts moraux et mat&eacute;riels des
                  expatri&eacute;s. Pr&eacute;sente &agrave; Maurice, elle
                  compl&egrave;te utilement l&apos;UFE pour rester
                  connect&eacute; &agrave; la communaut&eacute;
                  fran&ccedil;aise et acc&eacute;der &agrave; des
                  ressources pratiques (droits sociaux, fiscalit&eacute;,
                  &eacute;ducation).
                </p>
              </div>
            </div>
          </div>

          {/* ── 4. Réseaux internationaux ── */}
          <div className="mt-16 rounded-2xl bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              R&eacute;seaux d&apos;affaires internationaux pr&eacute;sents
              &agrave; Maurice
            </h2>
            <p className="mt-4 text-slate-600">
              Plusieurs r&eacute;seaux mondiaux disposent de chapitres actifs
              sur l&apos;&icirc;le. L&apos;avantage : un cadre
              structur&eacute; et la possibilit&eacute; de connecter avec
              des membres dans d&apos;autres pays.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* BNI */}
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900">BNI Mauritius</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Le plus grand r&eacute;seau de recommandations
                  d&apos;affaires au monde est pr&eacute;sent &agrave;
                  Maurice avec le chapitre <strong>BNI Crossroads</strong>{" "}
                  notamment. R&eacute;unions hebdomadaires
                  structur&eacute;es, syst&egrave;me de r&eacute;f&eacute;rencement
                  crois&eacute;. Excellent pour les prestataires de services
                  (comptables, avocats, consultants).
                </p>
                <p className="mt-2 text-xs text-emerald-600 font-medium">
                  bni.com/country/mauritius
                </p>
              </div>

              {/* Rotary */}
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900">Rotary Club</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Pr&eacute;sent depuis 1964 avec le Rotary Club de Port
                  Louis. Aujourd&apos;hui, plusieurs clubs actifs :
                  Port Louis, Port Louis Citadelle, Quatre Bornes, Curepipe,
                  Grand Bay, Beau Bassin-Rose Hill et Phoenix. Un mix de
                  networking et d&apos;engagement social tr&egrave;s
                  appr&eacute;ci&eacute; des dirigeants.
                </p>
              </div>

              {/* Lions */}
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900">Lions Club</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Plusieurs clubs actifs (Curepipe depuis 1979, Quatre Bornes,
                  Eb&egrave;ne, Flacq) rattach&eacute;s au District 417.
                  R&eacute;seau orient&eacute; service communautaire avec
                  une forte composante relationnelle entre cadres et
                  entrepreneurs.
                </p>
              </div>

              {/* YPO / EO */}
              <div className="rounded-xl bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-3">
                <h3 className="font-bold text-slate-900">
                  YPO et EO &mdash; Pour les dirigeants confirm&eacute;s
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Le <strong>Young Presidents&apos; Organization</strong>{" "}
                  (YPO) et <strong>Entrepreneurs&apos; Organization</strong>{" "}
                  (EO) n&apos;ont pas de chapitre formel &agrave; Maurice,
                  mais plusieurs membres mauriciens sont rattach&eacute;s aux
                  chapitres r&eacute;gionaux (Afrique du Sud, Inde). Si vous
                  &ecirc;tes d&eacute;j&agrave; membre YPO ou EO, votre
                  r&eacute;seau mondial vous ouvrira des portes localement.
                </p>
              </div>
            </div>
          </div>

          {/* ── 5. Événements business ── */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              &Eacute;v&eacute;nements business r&eacute;guliers
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Au-del&agrave; des clubs permanents, Maurice accueille
              r&eacute;guli&egrave;rement des &eacute;v&eacute;nements
              o&ugrave; se cr&eacute;ent de vraies connexions.
            </p>

            <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">
                      &Eacute;v&eacute;nement
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Organisateur
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Fr&eacute;quence
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Public
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Investment Promotion Roadshows
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      EDB Mauritius
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Plusieurs par an (Europe, Inde, Afrique du Sud)
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Investisseurs internationaux
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Xport Accelerator
                    </td>
                    <td className="px-4 py-3 text-slate-600">MCCI</td>
                    <td className="px-4 py-3 text-slate-600">Annuel</td>
                    <td className="px-4 py-3 text-slate-600">
                      Exportateurs, PME
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Happy Hours &amp; Soir&eacute;es th&eacute;matiques
                    </td>
                    <td className="px-4 py-3 text-slate-600">CCIFM</td>
                    <td className="px-4 py-3 text-slate-600">
                      Mensuel / Bimestriel
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Entrepreneurs francophones
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      London / Paris Investment Forums
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      EDB Mauritius
                    </td>
                    <td className="px-4 py-3 text-slate-600">Annuel</td>
                    <td className="px-4 py-3 text-slate-600">
                      HNWI, investisseurs
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      AMCHAM Business Lunches
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      AMCHAM Mauritius
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      R&eacute;gulier
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Business leaders
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      French Tech Connect
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      French Tech Mauritius
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      R&eacute;gulier
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Startups, tech
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      BNI r&eacute;unions chapitre
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      BNI Mauritius
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Hebdomadaire
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Professionnels, PME
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ── 6. Incubateurs et communautés tech ── */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Coworking, incubateurs et communaut&eacute;s tech
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Les espaces de coworking sont devenus des lieux de networking
              incontournables. On y croise freelances, startupeurs et
              dirigeants de PME dans un cadre d&eacute;contract&eacute;.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900">Workshop17</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Marque leader du coworking en Afrique, Workshop17 dispose
                  de 4&nbsp;espaces &agrave; Maurice. Partenariat avec
                  KOFISI pour le plus grand r&eacute;seau de workspaces
                  collaboratifs du continent.
                </p>
                <p className="mt-2 text-xs text-emerald-600 font-medium">
                  workshop17.mu
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900">OFICEA Coworking</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Espaces de coworking haut de gamme dans les business parks
                  d&apos;Eb&egrave;ne et Moka. Communaut&eacute; active,
                  &eacute;v&eacute;nements r&eacute;guliers.
                </p>
                <p className="mt-2 text-xs text-emerald-600 font-medium">
                  oficea.com
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900">Regus Mauritius</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Le g&eacute;ant mondial est pr&eacute;sent &agrave; Grand
                  Baie et Eb&egrave;ne. La CCIFM y organise notamment ses
                  soir&eacute;es &laquo;&nbsp;Accueil Nouveaux
                  Membres&nbsp;&raquo;.
                </p>
              </div>
            </div>

            {/* Callout tech */}
            <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
              <p className="text-sm font-semibold text-blue-800">
                Pour aller plus loin sur l&apos;&eacute;cosyst&egrave;me tech
              </p>
              <p className="mt-1 text-sm text-blue-700">
                D&eacute;couvrez notre article d&eacute;di&eacute; aux
                startups, incubateurs et opportunit&eacute;s tech &agrave;
                Maurice.
              </p>
              <Link
                href="/ressources/blog/ecosysteme-tech-startups-maurice"
                className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:underline"
              >
                Lire : &Eacute;cosyst&egrave;me tech et startups &agrave;
                Maurice &rarr;
              </Link>
            </div>
          </div>

          {/* ── 7. Réseaux sectoriels ── */}
          <div className="mt-16 rounded-2xl bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              R&eacute;seaux sectoriels
            </h2>
            <p className="mt-4 text-slate-600">
              Selon votre secteur d&apos;activit&eacute;, des associations
              professionnelles sp&eacute;cifiques peuvent acc&eacute;l&eacute;rer
              consid&eacute;rablement votre int&eacute;gration.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-slate-900">
                  AHRIM
                </h4>
                <p className="mt-1 text-sm text-slate-600">
                  Association des H&ocirc;teliers et Restaurateurs de
                  l&apos;&Icirc;le Maurice. Fond&eacute;e en 1973,
                  environ 150&nbsp;membres (h&ocirc;tels, restaurants, IRS).
                  Incontournable dans le tourisme.
                </p>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-slate-900">
                  Mauritius Bankers Association
                </h4>
                <p className="mt-1 text-sm text-slate-600">
                  Regroupe les banques commerciales. Utile si votre
                  activit&eacute; touche aux services financiers, au
                  Global Business ou &agrave; la fintech.
                </p>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-slate-900">
                  FSC Regulated Entities
                </h4>
                <p className="mt-1 text-sm text-slate-600">
                  La Financial Services Commission r&eacute;gule les
                  management companies, fonds d&apos;investissement et
                  entit&eacute;s Global Business. Un &eacute;cosyst&egrave;me
                  dense avec ses propres &eacute;v&eacute;nements.
                </p>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h4 className="font-semibold text-slate-900">
                  AMCHAM Mauritius
                </h4>
                <p className="mt-1 text-sm text-slate-600">
                  Au-del&agrave; du lien US-Maurice, l&apos;AMCHAM rassemble
                  des professionnels internationaux de haut niveau. Business
                  lunches et s&eacute;minaires d&apos;experts.
                </p>
              </div>
            </div>
          </div>

          {/* ── 8. Conseils pratiques ── */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              8 conseils pratiques pour networker &agrave; Maurice
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Prenez des cartes de visite
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Oui, en 2026, la carte de visite papier reste un
                    r&eacute;flexe &agrave; Maurice. Ne venez pas les mains
                    vides &agrave; un cocktail.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Privil&eacute;giez les cocktails 17h-19h
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Les cocktails d&apos;affaires de fin de journ&eacute;e
                    sont souvent plus productifs que les r&eacute;unions
                    formelles. C&apos;est l&agrave; que les vrais deals se
                    pr&eacute;parent.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Faites-vous pr&eacute;senter
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    &Agrave; Maurice, la culture du &laquo;&nbsp;connected
                    through&nbsp;&raquo; est fondamentale. Une introduction
                    par un tiers de confiance vaut dix emails &agrave; froid.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  4
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Soignez votre profil LinkedIn
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    LinkedIn est tr&egrave;s utilis&eacute; par les
                    professionnels mauriciens. Ajoutez vos nouveaux contacts
                    d&egrave;s le lendemain d&apos;un &eacute;v&eacute;nement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  5
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Rejoignez un club d&egrave;s le mois 1
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    N&apos;attendez pas d&apos;&ecirc;tre
                    &laquo;&nbsp;install&eacute;&nbsp;&raquo;. Les premiers
                    mois sont d&eacute;cisifs pour construire votre r&eacute;seau.
                    Inscrivez-vous &agrave; la CCIFM ou au BNI
                    d&egrave;s votre arriv&eacute;e.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  6
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Donnez avant de demander
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Le principe de r&eacute;ciprocit&eacute; est sacr&eacute;
                    &agrave; Maurice. Apportez de la valeur, faites des
                    introductions, partagez vos comp&eacute;tences. Le retour
                    viendra naturellement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  7
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Assistez aux &eacute;v&eacute;nements EDB
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Les roadshows et forums de l&apos;Economic Development
                    Board attirent les d&eacute;cideurs. M&ecirc;me si vous
                    &ecirc;tes d&eacute;j&agrave; install&eacute;, c&apos;est
                    l&apos;occasion de rencontrer de nouveaux investisseurs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  8
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Appuyez-vous sur votre expert-comptable
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Votre cabinet comptable conna&icirc;t les banquiers, les
                    avocats, les notaires, les agents immobiliers. Chez
                    Vanille Strat&eacute;gie, nous faisons les pr&eacute;sentations
                    depuis 2012.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── 9. L'avantage Vanille Stratégie ── */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-cyan-600 p-8 text-white sm:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Vanille Strat&eacute;gie : votre premier r&eacute;seau
              &agrave; Maurice
            </h2>
            <p className="mt-4 text-emerald-100">
              Depuis 2012, notre cabinet accompagne les entrepreneurs
              francophones dans leur installation &agrave; Maurice. Au fil des
              ann&eacute;es, nous avons construit un r&eacute;seau dense et
              de confiance.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-lg font-bold">14 ans de r&eacute;seau local</p>
                <p className="mt-1 text-sm text-emerald-100">
                  Nous connaissons personnellement les acteurs cl&eacute;s de
                  l&apos;&eacute;cosyst&egrave;me mauricien &mdash; chambres
                  de commerce, institutions financi&egrave;res,
                  administrations.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-lg font-bold">Introductions qualifi&eacute;es</p>
                <p className="mt-1 text-sm text-emerald-100">
                  Banquiers, avocats, notaires, agents immobiliers,
                  partenaires business : nous vous mettons en relation avec
                  les bonnes personnes, pas juste des noms dans un annuaire.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-lg font-bold">Didier Laroussinie conna&icirc;t tout le monde</p>
                <p className="mt-1 text-sm text-emerald-100">
                  40&nbsp;ans d&apos;exp&eacute;rience en expertise comptable
                  internationale, dont plus d&apos;une d&eacute;cennie &agrave;
                  Maurice. Didier Laroussinie ouvre les portes que les
                  annuaires ne listent pas.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-lg font-bold">Au-del&agrave; de la compta</p>
                <p className="mt-1 text-sm text-emerald-100">
                  Notre r&ocirc;le ne s&apos;arr&ecirc;te pas aux bilans et
                  d&eacute;clarations fiscales. Nous sommes un v&eacute;ritable
                  connecteur pour votre vie professionnelle &agrave; Maurice.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-emerald-50"
                >
                  Parlons de votre projet &rarr;
                </Button>
              </Link>
            </div>
          </div>

          {/* ── Callout final ── */}
          <div className="mt-16 rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="font-bold text-amber-900">
              Vous arrivez &agrave; Maurice ? Ne restez pas seul.
            </h3>
            <p className="mt-2 text-sm text-amber-800">
              Le networking n&apos;est pas un &laquo;&nbsp;plus&nbsp;&raquo;
              &agrave; Maurice, c&apos;est une n&eacute;cessit&eacute;. Mais
              vous n&apos;avez pas besoin de tout construire de z&eacute;ro.
              Contactez-nous : nous vous pr&eacute;senterons aux bonnes
              personnes d&egrave;s votre premier mois sur l&apos;&icirc;le.
            </p>
            <div className="mt-4">
              <Link href="/contact">
                <Button variant="outline" className="border-amber-300 text-amber-900 hover:bg-amber-100">
                  Prendre rendez-vous &rarr;
                </Button>
              </Link>
            </div>
          </div>

          {/* ── Sources ── */}
          <div className="mt-16 border-t border-slate-200 pt-8">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
              Sources et liens utiles
            </h3>
            <ul className="mt-4 space-y-1 text-sm text-slate-500">
              <li>
                MCCI &mdash; Mauritius Chamber of Commerce and Industry &mdash;{" "}
                <span className="text-slate-400">mcci.org</span>
              </li>
              <li>
                CCI France Maurice (CCIFM) &mdash;{" "}
                <span className="text-slate-400">ccifm.mu</span>
              </li>
              <li>
                La French Tech Mauritius &mdash;{" "}
                <span className="text-slate-400">
                  lafrenchtech-mauritius.com
                </span>
              </li>
              <li>
                BNI Mauritius &mdash;{" "}
                <span className="text-slate-400">bni.com/country/mauritius</span>
              </li>
              <li>
                EDB Mauritius &mdash;{" "}
                <span className="text-slate-400">edbmauritius.org</span>
              </li>
              <li>
                AMCHAM Mauritius &mdash;{" "}
                <span className="text-slate-400">amcham-mauritius.com</span>
              </li>
              <li>
                AHRIM &mdash;{" "}
                <span className="text-slate-400">ahrim.mu</span>
              </li>
              <li>
                UFE Maurice &mdash;{" "}
                <span className="text-slate-400">ufe-maurice.org</span>
              </li>
              <li>
                Workshop17 Mauritius &mdash;{" "}
                <span className="text-slate-400">workshop17.mu</span>
              </li>
              <li>
                Ambassade de France &agrave; Maurice &mdash; Associations
                fran&ccedil;aises &mdash;{" "}
                <span className="text-slate-400">mu.ambafrance.org</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* ── CTA final ── */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Pr&ecirc;t &agrave; activer votre r&eacute;seau mauricien ?
          </h2>
          <p className="mt-4 text-slate-300">
            Vanille Strat&eacute;gie vous accompagne depuis la
            cr&eacute;ation de votre soci&eacute;t&eacute;
            jusqu&apos;&agrave; vos premi&egrave;res introductions business.
            Un seul interlocuteur, z&eacute;ro jargon.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-emerald-500 text-white hover:bg-emerald-600"
              >
                Contactez Didier Laroussinie &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
