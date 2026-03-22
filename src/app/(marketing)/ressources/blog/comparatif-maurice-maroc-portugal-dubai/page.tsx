import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Maurice vs Maroc vs Portugal vs Dubaï — Comparatif expatriation 360° | Vanille Stratégie",
  description:
    "Comparatif fiscal complet 2026 : IS, dividendes, plus-values, succession, TVA, risque géopolitique, coût de la vie. Pourquoi Maurice reste la meilleure destination pour les entrepreneurs francophones.",
  keywords: [
    "expatriation Maurice",
    "comparatif fiscal Maurice Dubaï",
    "Maurice vs Portugal",
    "Maurice vs Maroc",
    "expatriation entrepreneur",
    "fiscalité Maurice 2026",
    "quitter Dubaï",
    "expatriation fiscale",
  ],
  alternates: {
    canonical: "https://vanillestrategie.fr/ressources/blog/comparatif-maurice-maroc-portugal-dubai",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title: "Maurice vs Maroc vs Portugal vs Dubaï — Comparatif expatriation 360° | Vanille Stratégie",
    description:
      "Comparatif fiscal complet 2026 : IS, dividendes, plus-values, succession, TVA, risque géopolitique, coût de la vie. Pourquoi Maurice reste la meilleure destination pour les entrepreneurs francophones.",
    siteName: "Vanille Stratégie",
    images: [{ url: "https://vanillestrategie.fr/images/hero-paradise.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maurice vs Maroc vs Portugal vs Dubaï — Comparatif expatriation 360° | Vanille Stratégie",
    description:
      "Comparatif fiscal complet 2026 : IS, dividendes, plus-values, succession, TVA, risque géopolitique, coût de la vie. Pourquoi Maurice reste la meilleure destination pour les entrepreneurs francophones.",
    images: ["https://vanillestrategie.fr/images/hero-paradise.jpg"],
  },
};

export default function ComparatifPage() {
  return (
    <>
      <BlogPostingJsonLd
        title="Maurice vs Maroc vs Portugal vs Dubaï — Comparatif expatriation 360° | Vanille Stratégie"
        description="Comparatif fiscal complet 2026 : IS, dividendes, plus-values, succession, TVA, risque géopolitique, coût de la vie. Pourquoi Maurice reste la meilleure destination pour les entrepreneurs francophones."
        slug="comparatif-maurice-maroc-portugal-dubai"
        datePublished="2026-03-09"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          { name: "Maurice vs Maroc vs Portugal vs Dubaï — Comparatif expatriation 360° | Vanille Stratégie", url: "/ressources/blog/comparatif-maurice-maroc-portugal-dubai" },
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
            <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300">
              Comparatif
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">&middot; 18 min</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Maurice vs Maroc vs Portugal vs Duba&iuml;
            <br />
            <span className="text-blue-400">
              Comparatif expatriation 360&deg;
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Fiscalit&eacute;, co&ucirc;t de la vie, risque g&eacute;opolitique,
            qualit&eacute; de vie, acc&egrave;s march&eacute;s : analyse
            compl&egrave;te des 4&nbsp;destinations pr&eacute;f&eacute;r&eacute;es
            des entrepreneurs francophones en 2026.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">
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
          {/* ── Introduction ── */}
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>Pourquoi ces 4 destinations ?</h2>
            <p>
              Chaque ann&eacute;e, des milliers d&apos;entrepreneurs francophones
              cherchent une terre d&apos;accueil fiscalement attractive, stable et
              compatible avec leur mode de vie. Quatre destinations concentrent
              l&apos;essentiel des flux : <strong>Maurice</strong>,{" "}
              <strong>le Maroc</strong>, <strong>le Portugal</strong> et{" "}
              <strong>Duba&iuml;</strong>.
            </p>
            <p>
              Chacune à ses atouts. Le Maroc s&eacute;duit par sa proximit&eacute;
              (2-3h de Paris) et son co&ucirc;t de la vie. Le Portugal a longtemps
              attir&eacute; avec le r&eacute;gime RNH (R&eacute;sident Non
              Habituel), d&eacute;sormais remplac&eacute; par un dispositif plus
              restrictif. Duba&iuml; a &eacute;t&eacute; le &laquo;&nbsp;El
              Dorado&nbsp;&raquo; fiscal de 2020-2025, avant que la
              g&eacute;opolitique ne rattrape la r&eacute;alit&eacute;. Et
              Maurice, discr&egrave;te mais redoutablement efficace, offre un
              &eacute;quilibre unique entre fiscalit&eacute;, s&eacute;curit&eacute;
              et qualit&eacute; de vie.
            </p>
            <p>
              Cet article propose un comparatif factuel, bas&eacute; sur les
              l&eacute;gislations en vigueur en mars 2026, pour vous aider
              &agrave; faire un choix &eacute;clair&eacute;.
            </p>
          </div>

          {/* ── Tableau comparatif ── */}
          <div className="mt-16">
            <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              Tableau comparatif 360&deg;
            </h2>
            <p className="mt-2 text-center text-sm text-slate-500">
              Donn&eacute;es actualis&eacute;es mars 2026 &mdash; Sources
              officielles
            </p>

            <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 shadow-lg">
              <table className="w-full min-w-[800px] text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">
                      Crit&egrave;re
                    </th>
                    <th className="bg-blue-700 px-4 py-3 text-left font-semibold">
                      Maurice
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">Maroc</th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Portugal
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Duba&iuml;
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* IS */}
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      IS (taux effectif)
                    </td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      15% flat (3% via GBC)
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      17,5% &agrave; 31%
                    </td>
                    <td className="px-4 py-3 text-slate-600">21%</td>
                    <td className="px-4 py-3 text-slate-600">9% (&gt;375K AED)</td>
                  </tr>

                  {/* Dividendes */}
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Dividendes
                    </td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      0%
                    </td>
                    <td className="px-4 py-3 text-slate-600">15% retenue</td>
                    <td className="px-4 py-3 text-slate-600">28%</td>
                    <td className="px-4 py-3 text-slate-600">0%</td>
                  </tr>

                  {/* Plus-values */}
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Plus-values
                    </td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      0%
                    </td>
                    <td className="px-4 py-3 text-slate-600">20%</td>
                    <td className="px-4 py-3 text-slate-600">28%</td>
                    <td className="px-4 py-3 text-slate-600">0%</td>
                  </tr>

                  {/* Succession */}
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Droits de succession
                    </td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      0%
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      1% &agrave; 20%
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      10% (&gt;1M&euro;)
                    </td>
                    <td className="px-4 py-3 text-slate-600">0%</td>
                  </tr>

                  {/* TVA */}
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">TVA</td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      15% (0% export services)
                    </td>
                    <td className="px-4 py-3 text-slate-600">20%</td>
                    <td className="px-4 py-3 text-slate-600">23%</td>
                    <td className="px-4 py-3 text-slate-600">5%</td>
                  </tr>

                  {/* ISF */}
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      ISF / IFI
                    </td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      Aucun
                    </td>
                    <td className="px-4 py-3 text-slate-600">Aucun</td>
                    <td className="px-4 py-3 text-slate-600">
                      AIMI (0,3-1,5%)
                    </td>
                    <td className="px-4 py-3 text-slate-600">Aucun</td>
                  </tr>

                  {/* Risque géopolitique */}
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Risque g&eacute;opolitique
                    </td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      Tr&egrave;s faible
                    </td>
                    <td className="px-4 py-3 text-slate-600">Mod&eacute;r&eacute;</td>
                    <td className="px-4 py-3 text-slate-600">Faible</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">
                      &Eacute;lev&eacute; (conflit Iran)
                    </td>
                  </tr>

                  {/* Fuseau horaire */}
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Fuseau horaire
                    </td>
                    <td className="bg-blue-50 px-4 py-3 text-blue-900">
                      GMT+4 (+2h vs Paris)
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      GMT+1 (=Paris)
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      GMT+0/+1 (-1h vs Paris)
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      GMT+4 (+2h vs Paris)
                    </td>
                  </tr>

                  {/* Langue */}
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Langue
                    </td>
                    <td className="bg-blue-50 px-4 py-3 text-blue-900">
                      Fran&ccedil;ais + Anglais
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Fran&ccedil;ais + Arabe
                    </td>
                    <td className="px-4 py-3 text-slate-600">Portugais</td>
                    <td className="px-4 py-3 text-slate-600">
                      Anglais + Arabe
                    </td>
                  </tr>

                  {/* Coût de la vie */}
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Co&ucirc;t de la vie (vs France)
                    </td>
                    <td className="bg-blue-50 px-4 py-3 text-blue-900">
                      -30% &agrave; -40%
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      -40% &agrave; -50%
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      -10% &agrave; -20%
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      +20% &agrave; +40%
                    </td>
                  </tr>

                  {/* Propriété étrangère */}
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Propri&eacute;t&eacute; &eacute;trang&egrave;re
                    </td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      100% (aucune restriction)
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      100% (restrictions foncier agricole)
                    </td>
                    <td className="px-4 py-3 text-slate-600">100%</td>
                    <td className="px-4 py-3 text-slate-600">
                      100% (free zones uniquement)
                    </td>
                  </tr>

                  {/* Accès marchés */}
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Acc&egrave;s march&eacute;s / Trait&eacute;s
                    </td>
                    <td className="bg-blue-50 px-4 py-3 text-blue-900">
                      37 CDI + FTA Chine + COMESA + AfCFTA
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      60+ CDI + Statut avanc&eacute; UE
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      UE + 80+ CDI
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      130+ CDI + GCC
                    </td>
                  </tr>

                  {/* Qualité de vie */}
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Qualit&eacute; de vie
                    </td>
                    <td className="bg-blue-50 px-4 py-3 text-blue-900">
                      Mercer : Top 80 / Climat tropical
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Mercer : Top 120
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Mercer : Top 40
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Mercer : Top 75
                    </td>
                  </tr>

                  {/* Visa / permis */}
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Visa / Permis
                    </td>
                    <td className="bg-blue-50 px-4 py-3 text-blue-900">
                      Premium Visa 48h + OP 15-20j
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Visa 1 an / CDS complexe
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      D7 ou Golden Visa (&gt;500K&euro;)
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Visa investor (72h) / Golden Visa
                    </td>
                  </tr>

                  {/* Création société */}
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Cr&eacute;ation soci&eacute;t&eacute; (d&eacute;lai)
                    </td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      3 jours ouvrables
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      2-4 semaines
                    </td>
                    <td className="px-4 py-3 text-slate-600">1-3 semaines</td>
                    <td className="px-4 py-3 text-slate-600">
                      2-5 jours (free zone)
                    </td>
                  </tr>

                  {/* Convention avec la France */}
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Convention fiscale avec la France
                    </td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      Oui (1980, amend&eacute;e 2011)
                    </td>
                    <td className="px-4 py-3 text-slate-600">Oui (1970)</td>
                    <td className="px-4 py-3 text-slate-600">Oui (1971)</td>
                    <td className="px-4 py-3 text-slate-600">Non</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-center text-xs text-slate-400">
              Sources : MRA, DGI Maroc, Autoridade Tribut&aacute;ria, FTA UAE,
              l&eacute;gislations nationales. Donn&eacute;es mars 2026.
            </p>
          </div>

          {/* ── Analyses par pays ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-20 max-w-3xl">
            {/* Maurice */}
            <h2 className="!text-blue-700">
              Maurice &mdash; Le champion du rapport qualit&eacute;/prix/s&eacute;curit&eacute;
            </h2>
            <p>
              Maurice combine un taux d&apos;IS &agrave; 15% flat (descendant
              &agrave; 3% via une GBC et le Partial Exemption Régime), z&eacute;ro
              imp&ocirc;t sur les dividendes, z&eacute;ro sur les plus-values,
              z&eacute;ro droit de succession, et aucun ISF. Pour un entrepreneur
              classique, la charge fiscale globale est imbattable.
            </p>
            <p>
              C&ocirc;t&eacute; stabilit&eacute;, l&apos;&icirc;le est
              situ&eacute;e &agrave; plus de 8&nbsp;000 km du premier conflit
              arm&eacute;. Aucune menace terroriste, aucune tension
              g&eacute;opolitique. La d&eacute;mocratie est stable depuis
              l&apos;ind&eacute;pendance en 1968 &mdash; un record en Afrique.
            </p>
            <p>
              L&apos;acc&egrave;s aux march&eacute;s est strat&eacute;gique :
              37&nbsp;conventions de non-double imposition, un Free Trade Agreement
              avec la Chine (unique en Afrique), l&apos;acc&egrave;s au
              COMESA (500M+ de consommateurs) et &agrave; la ZLECAf (African
              Continental Free Trade Area). Maurice est un pont entre
              l&apos;Europe, l&apos;Asie et l&apos;Afrique.
            </p>
            <p>
              Enfin, la qualit&eacute; de vie est exceptionnelle : climat
              tropical, plages, s&eacute;curit&eacute;, &eacute;coles
              internationales, syst&egrave;me de sant&eacute; priv&eacute;
              abordable. Le fran&ccedil;ais est la langue courante &mdash; aucune
              barri&egrave;re linguistique.
            </p>

            {/* Maroc */}
            <h2>Maroc &mdash; La proximit&eacute; &agrave; quel prix fiscal ?</h2>
            <p>
              Le Maroc attire par sa proximit&eacute; g&eacute;ographique avec
              la France (2-3h de vol), son co&ucirc;t de la vie bas (-40
              &agrave; -50% vs la France) et sa large communaut&eacute;
              francophone. C&apos;est un choix logique pour ceux qui veulent
              rester proches de l&apos;Europe.
            </p>
            <p>
              Cependant, la fiscalit&eacute; est nettement moins avantageuse.
              L&apos;IS est progressif (17,5% &agrave; 31%), les dividendes
              subissent une retenue &agrave; la source de 15%, les plus-values
              sont tax&eacute;es &agrave; 20%, et les droits de succession
              peuvent atteindre 20%. Le co&ucirc;t de la vie bas ne compense pas
              l&apos;&eacute;cart fiscal pour les revenus significatifs.
            </p>
            <p>
              L&apos;environnement des affaires s&apos;am&eacute;liore (Charte
              de l&apos;investissement 2022), mais la cr&eacute;ation
              d&apos;entreprise reste lourde (2-4 semaines) et la bureaucratie
              peut &ecirc;tre d&eacute;routante. Le Maroc dispose n&eacute;anmoins
              de 60+ CDI et d&apos;un statut avanc&eacute; avec l&apos;UE.
            </p>

            {/* Portugal */}
            <h2>
              Portugal &mdash; Le RNH est mort, vive le&hellip; 21% d&apos;IS
            </h2>
            <p>
              Pendant une d&eacute;cennie, le r&eacute;gime RNH (R&eacute;sident
              Non Habituel) a fait du Portugal la destination vedette de
              l&apos;optimisation fiscale europ&eacute;enne : 20% flat sur les
              revenus de source portugaise, exon&eacute;ration de nombreux
              revenus &eacute;trangers pendant 10 ans. Ce r&eacute;gime a
              &eacute;t&eacute; supprim&eacute; pour les nouvelles demandes
              depuis janvier 2024.
            </p>
            <p>
              Le r&eacute;gime de remplacement (&laquo;&nbsp;Incentivo Fiscal
              &agrave; la Recherche Scientifique et &agrave;
              l&apos;Innovation&nbsp;&raquo;) est bien plus restrictif et cible
              des profils sp&eacute;cifiques. Pour un entrepreneur classique, le
              Portugal signifie d&eacute;sormais : 21% d&apos;IS, 28% sur les
              dividendes, 28% sur les plus-values, et un co&ucirc;t de la vie en
              forte hausse (Lisbonne est devenue l&apos;une des villes les plus
              ch&egrave;res du sud de l&apos;Europe).
            </p>
            <p>
              Le Portugal reste un choix de <em>qualit&eacute; de vie</em> (Top
              40 Mercer, climat agr&eacute;able, infrastructures
              europ&eacute;ennes), mais plus un choix d&apos;optimisation
              fiscale. Le Golden Visa a &eacute;galement &eacute;t&eacute;
              restreint (&gt;500K&euro;, hors immobilier r&eacute;sidentiel dans
              les grandes villes).
            </p>

            {/* Dubaï */}
            <h2>
              Duba&iuml; &mdash; Le r&ecirc;ve fiscal rattrap&eacute; par la
              g&eacute;opolitique
            </h2>
            <p>
              Duba&iuml; a &eacute;t&eacute; <em>la</em> destination des
              entrepreneurs entre 2020 et 2025. Z&eacute;ro IS (puis 9% depuis
              juin 2023 au-del&agrave; de 375 000 AED), z&eacute;ro imp&ocirc;t
              sur les dividendes et les plus-values, z&eacute;ro droit de
              succession, cr&eacute;ation d&apos;entreprise en 48h. Le
              &laquo;&nbsp;Dubai Dream&nbsp;&raquo;.
            </p>
            <p>
              Mais deux r&eacute;alit&eacute;s ont frapp&eacute;. D&apos;abord
              le co&ucirc;t de la vie : +20 &agrave; +40% par rapport &agrave;
              la France, avec des loyers qui ont explos&eacute;
              post-Covid. Ensuite, et surtout, la <strong>g&eacute;opolitique</strong>.
            </p>
          </div>

          {/* ── Callout : Contexte géopolitique 2026 ── */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border-l-4 border-red-500 bg-red-50 p-6">
            <h3 className="text-lg font-bold text-red-800">
              Contexte g&eacute;opolitique mars 2026 : l&apos;exode de Duba&iuml;
            </h3>
            <p className="mt-2 text-sm text-red-700">
              Depuis le 28 f&eacute;vrier 2026, la guerre USA/Isra&euml;l-Iran a
              directement impact&eacute; les &Eacute;mirats. Attaques de drones
              sur l&apos;a&eacute;roport de Duba&iuml;,
              37&nbsp;000&nbsp;vols annul&eacute;s, Goldman Sachs et Citi ont
              &eacute;vacu&eacute; leur staff. Bloomberg qualifie la situation
              d&apos;&laquo;&nbsp;exodus &agrave; la Hong Kong&nbsp;&raquo;.
            </p>
            <p className="mt-2 text-sm text-red-700">
              Les 9&nbsp;800 millionnaires install&eacute;s &agrave; Duba&iuml;
              en 2025 (repr&eacute;sentant ~63 milliards de dollars de capitaux)
              cherchent activement des alternatives. Le flux migratoire
              s&apos;est invers&eacute;. Beaucoup se tournent vers le Maroc par
              r&eacute;flexe de proximit&eacute;, mais les plus
              avis&eacute;s comparent la fiscalit&eacute; &mdash; et
              choisissent Maurice.
            </p>
          </div>

          <div className="prose prose-slate prose-lg mx-auto mt-10 max-w-3xl">
            <p>
              Duba&iuml; souffre aussi de l&apos;absence de convention fiscale
              avec la France. Un r&eacute;sident fiscal &agrave; Duba&iuml; qui
              conserve des int&eacute;r&ecirc;ts en France peut se retrouver
              expos&eacute; &agrave; une double imposition sur certains revenus,
              sans m&eacute;canisme conventionnel de protection. &Agrave; Maurice,
              la convention de 1980 (amend&eacute;e 2011) couvre pr&eacute;cis&eacute;ment
              ces cas.
            </p>
            <p>
              Enfin, la propri&eacute;t&eacute; &agrave; 100% n&apos;est
              possible qu&apos;en free zone &agrave; Duba&iuml;. En mainland, un
              sponsor local est souvent n&eacute;cessaire. &Agrave; Maurice,
              la propri&eacute;t&eacute; &eacute;trang&egrave;re est libre
              &agrave; 100%, sans aucune restriction sectorielle.
            </p>
          </div>

          {/* ── Callout : Conclusion ── */}
          <div className="mx-auto mt-16 max-w-3xl rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-blue-800">
              Conclusion : Maurice, le meilleur rapport qualit&eacute; / prix / s&eacute;curit&eacute;
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-blue-800">
              <li>
                <strong>Fiscalit&eacute;</strong> : 15% IS flat (3% via GBC), 0%
                dividendes, 0% plus-values, 0% succession, 0% ISF &mdash;
                imbattable pour les entrepreneurs.
              </li>
              <li>
                <strong>S&eacute;curit&eacute;</strong> : z&eacute;ro risque
                g&eacute;opolitique, d&eacute;mocratie stable depuis 1968,
                &agrave; 8&nbsp;000 km du premier conflit.
              </li>
              <li>
                <strong>Co&ucirc;t de la vie</strong> : -30 &agrave; -40% vs la
                France, sans le surco&ucirc;t Duba&iuml;.
              </li>
              <li>
                <strong>Langue</strong> : fran&ccedil;ais courant &mdash; aucune
                barri&egrave;re.
              </li>
              <li>
                <strong>Convention fiscale</strong> : protection compl&egrave;te
                avec la France (contrairement &agrave; Duba&iuml;).
              </li>
              <li>
                <strong>Acc&egrave;s march&eacute;s</strong> : pont
                Europe-Asie-Afrique via 37 CDI, FTA Chine, COMESA.
              </li>
              <li>
                <strong>Cr&eacute;ation d&apos;entreprise</strong> : 3 jours
                ouvrables, propri&eacute;t&eacute; 100%, z&eacute;ro
                restriction.
              </li>
            </ul>
          </div>

          <div className="prose prose-slate prose-lg mx-auto mt-10 max-w-3xl">
            <p>
              Le Maroc est un bon choix de <em>vie</em>, mais pas de{" "}
              <em>fiscalit&eacute;</em>. Le Portugal post-RNH a perdu son
              avantage comp&eacute;titif. Duba&iuml;, malgr&eacute; ses atouts
              fiscaux historiques, est aujourd&apos;hui un pari
              g&eacute;opolitique que beaucoup ne sont plus
              dispos&eacute;s &agrave; prendre.
            </p>
            <p>
              <strong>
                Maurice reste la seule destination qui coche toutes les
                cases : fiscalit&eacute; l&eacute;gale ultra-comp&eacute;titive,
                s&eacute;curit&eacute; totale, qualit&eacute; de vie
                exceptionnelle, et convention fiscale protectrice avec la France.
              </strong>
            </p>
          </div>
        </div>
      </article>

      {/* ── Sources ── */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            Sources :{" "}
            {officialSources.slice(0, 4).map((s, i) => (
              <span key={s.url}>
                {i > 0 && " \u00B7 "}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {s.name}
                </a>
              </span>
            ))}
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Cet article est fourni &agrave; titre informatif et ne constitué pas
            un conseil fiscal personnalis&eacute;. Chaque situation est unique
            &mdash; contactez nos experts pour une analyse adapt&eacute;e.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Pr&ecirc;t &agrave; comparer votre situation ?
          </h2>
          <p className="mt-3 text-slate-400">
            &Eacute;tude de faisabilit&eacute; gratuite et confidentielle par{" "}
            {founder.name}, {founder.title}.
          </p>
          <p className="mt-1 text-sm text-slate-500">
            40+ ans d&apos;exp&eacute;rience &middot; 30-50 dossiers
            d&apos;expatriation par an &middot; Bas&eacute; &agrave; Maurice
            depuis 2015
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 px-10 hover:bg-blue-700"
              >
                Demander mon &eacute;tude gratuite
              </Button>
            </Link>
            <Link href="/ressources/simulateur-fiscal">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                Simuler ma fiscalit&eacute;
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
