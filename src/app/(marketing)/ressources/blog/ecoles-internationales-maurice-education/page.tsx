import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title:
    "Scolariser ses enfants &agrave; Maurice — &Eacute;coles internationales, syst&egrave;me &eacute;ducatif et co&ucirc;ts | Vanille Strat&eacute;gie",
  description:
    "Guide complet 2026 : &eacute;coles francophones (Lyc&eacute;e La Bourdonnais, &Eacute;cole du Nord, Paul et Virginie), &eacute;coles anglophones (Clavis, Le Bocage, Northfields), frais de scolarit&eacute;, baccalaur&eacute;at fran&ccedil;ais vs Cambridge A-Levels, universit&eacute;s &agrave; Maurice.",
  keywords: [
    "ecole internationale Maurice",
    "Lycee La Bourdonnais",
    "Ecole du Nord Maurice",
    "scolarite Maurice expatries",
    "ecole française ile Maurice",
    "Le Bocage International School",
    "Northfields International School",
    "Clavis International School",
    "frais scolarite Maurice",
    "education Maurice expatriation",
    "baccalaureat français Maurice",
    "Cambridge A-Levels Maurice",
  ],
};

export default function EcolesInternationalesMauricePage() {
  return (
    <>
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
              Vie pratique
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">&middot; 14 min</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Scolariser ses enfants &agrave; Maurice
            <br />
            <span className="text-blue-400">
              &Eacute;coles internationales, syst&egrave;me &eacute;ducatif et
              co&ucirc;ts
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            L&apos;&eacute;ducation des enfants est souvent le facteur
            d&eacute;cisif dans un projet d&apos;expatriation. Bonne nouvelle :
            Maurice dispose d&apos;un r&eacute;seau d&apos;&eacute;coles
            internationales francophones et anglophones de grande qualit&eacute;,
            &agrave; des tarifs nettement inf&eacute;rieurs &agrave; Duba&iuml;
            ou Singapour.
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
            <h2>
              L&apos;&eacute;ducation, la premi&egrave;re question des familles
            </h2>
            <p>
              Avant m&ecirc;me la fiscalit&eacute; ou l&apos;immobilier, la
              question que nous posent le plus souvent les familles est&nbsp;:
              &laquo;&nbsp;<em>
                Et pour les enfants, comment &ccedil;a se passe&nbsp;?
              </em>
              &nbsp;&raquo;
            </p>
            <p>
              C&apos;est l&eacute;gitime. Changer de pays, c&apos;est accepter
              de confier l&apos;&eacute;ducation de ses enfants &agrave; un
              syst&egrave;me qu&apos;on ne conna&icirc;t pas. Ce guide
              d&eacute;taille tout ce que vous devez savoir&nbsp;: le
              syst&egrave;me &eacute;ducatif mauricien, les &eacute;coles
              internationales disponibles, les frais de scolarit&eacute;, les
              dipl&ocirc;mes, et comment Vanille Strat&eacute;gie vous
              accompagne dans cette &eacute;tape cl&eacute;.
            </p>
          </div>

          {/* ── Section 1 : Système éducatif ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2>
              1. Le syst&egrave;me &eacute;ducatif mauricien&nbsp;: un
              h&eacute;ritage britannique
            </h2>
            <p>
              Le syst&egrave;me &eacute;ducatif de Maurice est directement
              inspir&eacute; du mod&egrave;le britannique, h&eacute;ritage de la
              p&eacute;riode coloniale. Il se structure en trois
              cycles&nbsp;:
            </p>
            <ul>
              <li>
                <strong>Primary (6-11 ans)</strong> &mdash; 6 ann&eacute;es,
                sanctionn&eacute;es par le <em>Primary School Achievement
                Certificate</em> (PSAC, ex-CPE).
              </li>
              <li>
                <strong>Secondary (12-17 ans)</strong> &mdash; 5 ann&eacute;es
                menant au <em>School Certificate</em> (O-Levels, Cambridge), puis
                2&nbsp;ann&eacute;es suppl&eacute;mentaires pour le{" "}
                <em>Higher School Certificate</em> (A-Levels, Cambridge).
              </li>
              <li>
                <strong>Tertiary</strong> &mdash; Universit&eacute;s publiques et
                priv&eacute;es, dont certaines en partenariat avec des
                &eacute;tablissements britanniques et australiens.
              </li>
            </ul>
            <p>
              L&apos;&eacute;ducation est <strong>gratuite</strong> dans les
              &eacute;tablissements publics, de la maternelle &agrave;
              l&apos;universit&eacute;. Le taux d&apos;alphab&eacute;tisation
              d&eacute;passe 91%, l&apos;un des plus &eacute;lev&eacute;s
              d&apos;Afrique.
            </p>
          </div>

          {/* ── Callout : Langue ── */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6">
            <h3 className="text-lg font-bold text-emerald-800">
              Langues d&apos;enseignement&nbsp;: le bilinguisme naturel de
              Maurice
            </h3>
            <p className="mt-2 text-sm text-emerald-700">
              L&apos;anglais est la langue officielle d&apos;enseignement dans
              le syst&egrave;me public et dans les &eacute;tablissements
              britanniques. Cependant, le fran&ccedil;ais est tr&egrave;s
              largement utilis&eacute; au quotidien&nbsp;: la majorit&eacute;
              des Mauriciens sont parfaitement bilingues. Le cr&eacute;ole
              mauricien, proche du fran&ccedil;ais, est la langue maternelle.
              Vos enfants baigneront naturellement dans un environnement
              trilingue &mdash; un atout consid&eacute;rable pour leur avenir.
            </p>
          </div>

          {/* ── Section 2 : Écoles francophones ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2>
              2. &Eacute;coles internationales francophones
            </h2>
            <p>
              Maurice compte trois &eacute;tablissements francophones de
              r&eacute;f&eacute;rence, tous homologu&eacute;s par le
              minist&egrave;re fran&ccedil;ais de l&apos;&Eacute;ducation
              nationale et membres du r&eacute;seau AEFE (Agence pour
              l&apos;Enseignement Fran&ccedil;ais &agrave;
              l&apos;&Eacute;tranger).
            </p>

            <h3>
              Lyc&eacute;e La Bourdonnais (LLB) &mdash; Curepipe
            </h3>
            <p>
              Le plus ancien et le plus grand &eacute;tablissement
              fran&ccedil;ais de Maurice. Fond&eacute; en 1953, il accueille
              pr&egrave;s de 2&nbsp;500&nbsp;&eacute;l&egrave;ves de la
              maternelle &agrave; la terminale. Homologu&eacute; AEFE, il
              d&eacute;livre le <strong>baccalaur&eacute;at
              fran&ccedil;ais</strong> (s&eacute;ries g&eacute;n&eacute;rales).
              L&apos;&eacute;tablissement dispose de deux campus&nbsp;: le
              primaire &agrave; Curepipe et le secondaire &eacute;galement
              &agrave; Curepipe. Les r&eacute;sultats au baccalaur&eacute;at
              sont r&eacute;guli&egrave;rement sup&eacute;rieurs &agrave; 95%.
            </p>
            <p>
              Frais de scolarit&eacute; annuels&nbsp;: de l&apos;ordre de{" "}
              <strong>142&nbsp;000 &agrave; 199&nbsp;000 MUR/an</strong>{" "}
              (environ 2&nbsp;900 &agrave; 4&nbsp;100&nbsp;&euro;), selon le
              niveau.
            </p>

            <h3>
              &Eacute;cole du Nord &mdash; Mapou
            </h3>
            <p>
              Situ&eacute;e dans le nord de l&apos;&icirc;le (Mapou),
              l&apos;&Eacute;cole du Nord est &eacute;galement
              homologu&eacute;e AEFE. Elle couvre de la maternelle au
              coll&egrave;ge (3&egrave;me). Les familles qui vivent dans le nord
              (Grand Baie, P&eacute;reybere, Trou aux Biches) la
              privil&eacute;gient pour la proximit&eacute;. L&apos;&eacute;cole
              est reconnue pour la qualit&eacute; de son encadrement et ses
              effectifs &agrave; taille humaine.
            </p>
            <p>
              Frais de scolarit&eacute; annuels&nbsp;:{" "}
              <strong>424&nbsp;000 &agrave; 464&nbsp;000 MUR/an</strong>{" "}
              (environ 8&nbsp;700 &agrave; 9&nbsp;500&nbsp;&euro;). Frais de
              pr&eacute;inscription&nbsp;: 3&nbsp;500 MUR.
            </p>

            <h3>
              &Eacute;cole Paul et Virginie &mdash; Tamarin
            </h3>
            <p>
              &Eacute;cole maternelle et primaire fran&ccedil;aise situ&eacute;e
              &agrave; Tamarin, sur la c&ocirc;te ouest. Homologu&eacute;e AEFE,
              elle accueille les enfants de la Petite Section au CM2 (3
              &agrave; 11 ans). L&apos;&eacute;cole fonctionne comme une
              association &agrave; but non lucratif, g&eacute;r&eacute;e par un
              comit&eacute; de parents b&eacute;n&eacute;voles. Ambiance
              familiale et cadre exceptionnel.
            </p>
            <p>
              Frais de scolarit&eacute; annuels&nbsp;:{" "}
              <strong>162&nbsp;000 &agrave; 170&nbsp;000 MUR/an</strong>{" "}
              (environ 3&nbsp;300 &agrave; 3&nbsp;500&nbsp;&euro;). Frais
              d&apos;inscription&nbsp;: 55&nbsp;000 MUR.
            </p>
          </div>

          {/* ── Section 3 : Écoles anglophones/bilingues ── */}
          <section className="bg-slate-50 mt-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
            <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
              <h2>
                3. &Eacute;coles internationales anglophones et bilingues
              </h2>
              <p>
                Pour les familles souhaitant un cursus en anglais, ou un
                environnement v&eacute;ritablement bilingue, Maurice offre
                plusieurs &eacute;tablissements de haut niveau suivant les
                programmes Cambridge ou International Baccalaureate (IB).
              </p>

              <h3>
                Clavis International Primary School &mdash; Moka / Beau Champ
              </h3>
              <p>
                &Eacute;cole primaire internationale accr&eacute;dit&eacute;e
                IB (PYP &mdash; Primary Years Programme). Clavis propose un
                programme bilingue anglais/fran&ccedil;ais et accueille les
                enfants de 3 &agrave; 11 ans. Deux campus&nbsp;: Moka et Beau
                Champ. L&apos;approche p&eacute;dagogique est centr&eacute;e
                sur l&apos;apprentissage par l&apos;enqu&ecirc;te (inquiry-based
                learning).
              </p>
              <p>
                Frais de scolarit&eacute; annuels&nbsp;:{" "}
                <strong>207&nbsp;000 &agrave; 323&nbsp;000 MUR/an</strong>{" "}
                (environ 4&nbsp;200 &agrave; 6&nbsp;600&nbsp;&euro;).
              </p>

              <h3>
                Le Bocage International School &mdash; Moka
              </h3>
              <p>
                L&apos;un des &eacute;tablissements les plus
                r&eacute;put&eacute;s de Maurice. Le Bocage est
                accr&eacute;dit&eacute; IB (PYP, MYP et Diploma Programme) et
                propose &eacute;galement les Cambridge IGCSEs. L&apos;&eacute;cole
                couvre de la maternelle &agrave; la terminale (3-18 ans).
                Situ&eacute;e &agrave; Moka, au c&oelig;ur de l&apos;&icirc;le,
                elle est particuli&egrave;rement pris&eacute;e par les familles
                d&apos;expatri&eacute;s et les familles mauriciennes ais&eacute;es.
              </p>
              <p>
                Frais de scolarit&eacute; annuels&nbsp;: environ{" "}
                <strong>469&nbsp;000 MUR/an</strong> (environ
                9&nbsp;600&nbsp;&euro;) pour un &eacute;l&egrave;ve de 11 ans en
                premi&egrave;re ann&eacute;e (incluant les frais
                d&apos;inscription uniques). Tarifs diff&eacute;renci&eacute;s
                pour les Mauriciens et les autres nationalit&eacute;s.
              </p>

              <h3>
                Northfields International High School &mdash; Labourdonnais
              </h3>
              <p>
                &Eacute;tablissement secondaire international
                accr&eacute;dit&eacute; IB Diploma Programme, situ&eacute; dans
                le nord de l&apos;&icirc;le. Northfields fait partie du groupe
                Inspired, un r&eacute;seau mondial d&apos;&eacute;coles premium
                pr&eacute;sentes dans plus de 80 pays. L&apos;&eacute;cole offre
                &eacute;galement les Cambridge IGCSEs. Campus moderne avec des
                infrastructures sportives de qualit&eacute; (piscine, terrains
                de sport, salle de spectacle).
              </p>
              <p>
                Frais de scolarit&eacute; annuels&nbsp;: &agrave; partir de{" "}
                <strong>211&nbsp;000 MUR/an</strong> (environ
                4&nbsp;300&nbsp;&euro;) pour les plus jeunes. R&eacute;duction
                fratrie&nbsp;: 7,5% pour le 2e enfant, 15% &agrave; partir du
                3e.
              </p>

              <h3>
                Telfair International Academy &mdash; Tamarin
              </h3>
              <p>
                Situ&eacute;e sur la c&ocirc;te ouest &agrave; Tamarin, Telfair
                suit le curriculum britannique (National Curriculum of England)
                et accueille les &eacute;l&egrave;ves de 3 mois &agrave; 15 ans.
                L&apos;&eacute;cole offre un cadre intimiste dans un
                environnement naturel privil&eacute;gi&eacute;. Les frais de
                scolarit&eacute; ne sont pas publi&eacute;s publiquement&nbsp;:
                contactez l&apos;&eacute;tablissement directement.
              </p>
            </div>
          </section>

          {/* ── Section 4 : Tableau comparatif ── */}
          <div className="mt-16">
            <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              Frais de scolarit&eacute; comparatifs
            </h2>
            <p className="mt-2 text-center text-sm text-slate-500">
              Fourchettes annuelles &mdash; Donn&eacute;es 2025/2026 en
              roupies mauriciennes (MUR) et euros indicatifs
            </p>

            <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 shadow-lg">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">
                      &Eacute;tablissement
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Niveaux
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Programme
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Frais/an (MUR)
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Frais/an (&euro; approx.)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Lyc&eacute;e La Bourdonnais
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Maternelle &rarr; Terminale
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Fran&ccedil;ais (AEFE)
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      142&nbsp;000 &ndash; 199&nbsp;000
                    </td>
                    <td className="px-4 py-3 font-semibold text-blue-900">
                      2&nbsp;900 &ndash; 4&nbsp;100
                    </td>
                  </tr>

                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      &Eacute;cole du Nord
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Maternelle &rarr; 3&egrave;me
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Fran&ccedil;ais (AEFE)
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      424&nbsp;000 &ndash; 464&nbsp;000
                    </td>
                    <td className="px-4 py-3 font-semibold text-blue-900">
                      8&nbsp;700 &ndash; 9&nbsp;500
                    </td>
                  </tr>

                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Paul et Virginie
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      PS &rarr; CM2
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Fran&ccedil;ais (AEFE)
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      162&nbsp;000 &ndash; 170&nbsp;000
                    </td>
                    <td className="px-4 py-3 font-semibold text-blue-900">
                      3&nbsp;300 &ndash; 3&nbsp;500
                    </td>
                  </tr>

                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Clavis International
                    </td>
                    <td className="px-4 py-3 text-slate-600">3 &ndash; 11 ans</td>
                    <td className="px-4 py-3 text-slate-600">IB PYP (bilingue)</td>
                    <td className="px-4 py-3 text-slate-600">
                      207&nbsp;000 &ndash; 323&nbsp;000
                    </td>
                    <td className="px-4 py-3 font-semibold text-blue-900">
                      4&nbsp;200 &ndash; 6&nbsp;600
                    </td>
                  </tr>

                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Le Bocage International
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Maternelle &rarr; Terminale
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      IB + Cambridge
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      ~469&nbsp;000 (1re ann&eacute;e)
                    </td>
                    <td className="px-4 py-3 font-semibold text-blue-900">
                      ~9&nbsp;600
                    </td>
                  </tr>

                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Northfields International
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      2 &ndash; 18 ans
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      IB Diploma + Cambridge
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      &agrave; partir de 211&nbsp;000
                    </td>
                    <td className="px-4 py-3 font-semibold text-blue-900">
                      &agrave; partir de 4&nbsp;300
                    </td>
                  </tr>

                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Telfair International
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      3 mois &ndash; 15 ans
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Britannique
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Sur demande
                    </td>
                    <td className="px-4 py-3 font-semibold text-blue-900">
                      Sur demande
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-center text-xs text-slate-400">
              Taux de conversion indicatif&nbsp;: 1&nbsp;&euro; &asymp;
              49&nbsp;MUR (mars 2026). Frais d&apos;inscription uniques non
              inclus. Contactez chaque &eacute;tablissement pour les tarifs
              exacts.
            </p>
          </div>

          {/* ── Callout : Comparaison Dubaï ── */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-blue-800">
              &Agrave; titre de comparaison
            </h3>
            <p className="mt-2 text-sm text-blue-700">
              &Agrave; Duba&iuml;, les frais de scolarit&eacute; d&apos;une
              &eacute;cole internationale de niveau &eacute;quivalent varient de{" "}
              <strong>15&nbsp;000 &agrave; 30&nbsp;000&nbsp;&euro;/an</strong>.
              &Agrave; Singapour, comptez{" "}
              <strong>20&nbsp;000 &agrave; 40&nbsp;000&nbsp;&euro;/an</strong>.
              &Agrave; Maurice, les tarifs les plus &eacute;lev&eacute;s
              tournent autour de 10&nbsp;000&nbsp;&euro;/an &mdash; soit 2
              &agrave; 4 fois moins. C&apos;est un argument de poids pour les
              familles avec plusieurs enfants.
            </p>
          </div>

          {/* ── Section 5 : Inscription ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2>4. Processus d&apos;inscription&nbsp;: anticiper est essentiel</h2>
            <p>
              Les &eacute;coles internationales de Maurice, en particulier les
              &eacute;tablissements francophones, connaissent une demande
              croissante. Voici les points cl&eacute;s&nbsp;:
            </p>
            <ul>
              <li>
                <strong>D&eacute;lai</strong> &mdash; Commencez les d&eacute;marches
                6 &agrave; 12 mois avant la rentr&eacute;e vis&eacute;e. Les
                &eacute;tablissements francophones (LLB, &Eacute;cole du Nord)
                ont souvent des listes d&apos;attente.
              </li>
              <li>
                <strong>Rentr&eacute;e</strong> &mdash; La rentr&eacute;e
                scolaire a lieu en <strong>ao&ucirc;t</strong> pour les
                &eacute;coles fran&ccedil;aises (calendrier Nord) et en{" "}
                <strong>janvier</strong> pour les &eacute;coles suivant le
                calendrier britannique/austral.
              </li>
              <li>
                <strong>Dossier</strong> &mdash; Bulletins scolaires des 2-3
                derni&egrave;res ann&eacute;es, carnet de
                sant&eacute;/vaccinations, copie du passeport, photos
                d&apos;identit&eacute;, certificat de radiation de
                l&apos;&eacute;cole pr&eacute;c&eacute;dente.
              </li>
              <li>
                <strong>Test d&apos;admission</strong> &mdash; Certaines
                &eacute;coles (Le Bocage, Northfields, Clavis) organisent un
                test d&apos;entr&eacute;e ou un entretien pour &eacute;valuer le
                niveau de l&apos;enfant.
              </li>
              <li>
                <strong>R&eacute;inscription</strong> &mdash; Chaque
                ann&eacute;e, les familles doivent proc&eacute;der &agrave; la
                r&eacute;inscription (en ligne via portail type Skolengo pour le
                LLB) et r&eacute;gler les frais dans les d&eacute;lais
                impartis.
              </li>
            </ul>
          </div>

          {/* ── Section 6 : Bac français vs A-Levels ── */}
          <section className="bg-slate-50 mt-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
            <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
              <h2>
                5. Baccalaur&eacute;at fran&ccedil;ais vs Cambridge A-Levels
              </h2>
              <p>
                C&apos;est l&apos;un des choix structurants pour votre
                famille. Les deux syst&egrave;mes sont reconnus mondialement,
                mais pr&eacute;sentent des diff&eacute;rences
                significatives&nbsp;:
              </p>

              <h3>Le baccalaur&eacute;at fran&ccedil;ais &agrave; Maurice</h3>
              <ul>
                <li>
                  D&eacute;livr&eacute; par le Lyc&eacute;e La Bourdonnais
                  (seul &eacute;tablissement allant jusqu&apos;en terminale dans
                  le r&eacute;seau AEFE &agrave; Maurice).
                </li>
                <li>
                  Strictement identique au bac pass&eacute; en France &mdash;
                  m&ecirc;mes &eacute;preuves, m&ecirc;mes correcteurs
                  acad&eacute;miques.
                </li>
                <li>
                  Donne acc&egrave;s &agrave; l&apos;enseignement
                  sup&eacute;rieur fran&ccedil;ais (universit&eacute;s, classes
                  pr&eacute;paratoires, grandes &eacute;coles) via Parcoursup.
                </li>
                <li>
                  Id&eacute;al si vous envisagez un retour en France ou des
                  &eacute;tudes sup&eacute;rieures dans l&apos;espace
                  francophone.
                </li>
              </ul>

              <h3>Les Cambridge A-Levels</h3>
              <ul>
                <li>
                  Propos&eacute;s par les &eacute;tablissements du syst&egrave;me
                  mauricien public et par certaines &eacute;coles
                  internationales (Northfields, Le Bocage via IB Diploma).
                </li>
                <li>
                  Reconnus par les universit&eacute;s britanniques, am&eacute;ricaines,
                  australiennes et canadiennes.
                </li>
                <li>
                  Syst&egrave;me plus sp&eacute;cialis&eacute;&nbsp;:
                  l&apos;&eacute;l&egrave;ve choisit 3-4 mati&egrave;res
                  approfondies, contrairement &agrave; l&apos;approche
                  g&eacute;n&eacute;raliste du bac fran&ccedil;ais.
                </li>
                <li>
                  Id&eacute;al si vous visez des &eacute;tudes dans le monde
                  anglo-saxon.
                </li>
              </ul>

              <h3>
                L&apos;IB Diploma&nbsp;: le meilleur des deux mondes&nbsp;?
              </h3>
              <p>
                Le Bocage et Northfields proposent le{" "}
                <strong>dipl&ocirc;me du Baccalaur&eacute;at
                International (IB)</strong>, reconnu par pratiquement toutes les
                universit&eacute;s du monde. L&apos;IB combine rigueur
                acad&eacute;mique, pens&eacute;e critique, service
                communautaire et m&eacute;moire de recherche. C&apos;est une
                option particuli&egrave;rement pertinente pour les familles
                qui ne savent pas encore dans quel pays leur enfant poursuivra
                ses &eacute;tudes.
              </p>
            </div>
          </section>

          {/* ── Section 7 : Universités ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2>6. Universit&eacute;s &agrave; Maurice</h2>
            <p>
              Maurice dispose d&apos;un &eacute;cosyst&egrave;me universitaire
              en plein d&eacute;veloppement, avec des &eacute;tablissements
              publics et priv&eacute;s, dont certains en partenariat avec des
              universit&eacute;s internationales de renom.
            </p>

            <h3>
              University of Technology, Mauritius (UTM)
            </h3>
            <p>
              Universit&eacute; publique fond&eacute;e en 2000,
              sp&eacute;cialis&eacute;e en technologies, informatique, gestion
              et d&eacute;veloppement durable. Campus principal &agrave; Pointe
              aux Sables (Port-Louis). Class&eacute;e 2e universit&eacute; de
              Maurice.
            </p>

            <h3>Charles Telfair Campus &mdash; Moka</h3>
            <p>
              Campus priv&eacute; situ&eacute; &agrave; Moka, en partenariat
              avec des universit&eacute;s internationales comme
              l&apos;University of Brighton et Edith Cowan University
              (Australie). Propose des licences et masters en informatique,
              business, hospitality et sciences sociales. Un tremplin vers des
              dipl&ocirc;mes reconnus internationalement, sans quitter
              l&apos;&icirc;le.
            </p>

            <h3>Middlesex University Mauritius</h3>
            <p>
              Branche mauricienne de la Middlesex University de Londres.
              Programmes en droit, psychologie, informatique, business et
              m&eacute;dias. Les dipl&ocirc;mes sont d&eacute;livr&eacute;s par
              l&apos;universit&eacute; londonienne &mdash; strictement
              &eacute;quivalents &agrave; ceux du campus de Londres.
            </p>

            <h3>University of Mauritius (UoM)</h3>
            <p>
              La plus ancienne et la plus grande universit&eacute; du pays,
              fond&eacute;e en 1965. Situ&eacute;e &agrave; R&eacute;duit, elle
              offre un large &eacute;ventail de formations (ing&eacute;nierie,
              sciences, droit, agriculture, management). Les frais sont
              tr&egrave;s accessibles pour les r&eacute;sidents.
            </p>
          </div>

          {/* ── Section 8 : Activités extra-scolaires ── */}
          <div className="mx-auto mt-16 max-w-3xl rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <h3 className="text-lg font-bold text-amber-800">
              7. Activit&eacute;s extra-scolaires&nbsp;: le paradis des enfants
              sportifs
            </h3>
            <p className="mt-2 text-sm text-amber-700">
              Maurice offre un cadre exceptionnel pour l&apos;&eacute;panouissement
              des enfants en dehors de l&apos;&eacute;cole&nbsp;:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-amber-800">
              <li>
                <strong>Sports nautiques</strong> &mdash; Voile,
                kitesurf, natation, plong&eacute;e &mdash; l&apos;oc&eacute;an
                est &agrave; quelques minutes de partout.
              </li>
              <li>
                <strong>Sports terrestres</strong> &mdash; Football, rugby,
                tennis, &eacute;quitation, golf (Maurice compte plus de 10
                parcours), arts martiaux.
              </li>
              <li>
                <strong>Musique et arts</strong> &mdash; Cours de musique
                (&eacute;coles priv&eacute;es et conservatoire), th&eacute;&acirc;tre,
                danse, arts plastiques. Plusieurs &eacute;coles internationales
                int&egrave;grent ces activit&eacute;s dans leur programme.
              </li>
              <li>
                <strong>Nature et d&eacute;couverte</strong> &mdash;
                Randonn&eacute;e, observation des dauphins, jardins botaniques,
                r&eacute;serves naturelles. Un terrain de jeu
                in&eacute;gal&eacute;.
              </li>
            </ul>
          </div>

          {/* ── Section 9 : Accompagnement VS ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2>
              8. L&apos;accompagnement Vanille Strat&eacute;gie&nbsp;:
              l&apos;inscription scolaire fait partie du package
            </h2>
            <p>
              Chez Vanille Strat&eacute;gie, nous savons que
              l&apos;&eacute;ducation des enfants ne se r&egrave;gle pas avec
              un simple email &agrave; l&apos;&eacute;cole. C&apos;est pourquoi
              l&apos;inscription scolaire fait partie int&eacute;grante de
              notre <strong>package d&apos;installation &agrave; Maurice</strong>.
            </p>
            <p>Concr&egrave;tement, nous vous aidons &agrave;&nbsp;:</p>
            <ul>
              <li>
                <strong>Choisir la bonne &eacute;cole</strong> en fonction de
                votre lieu de r&eacute;sidence, de la langue souhait&eacute;e, du
                cursus vis&eacute; et de votre budget.
              </li>
              <li>
                <strong>Constituer le dossier d&apos;inscription</strong> et
                g&eacute;rer les &eacute;changes avec l&apos;&eacute;tablissement.
              </li>
              <li>
                <strong>Anticiper les listes d&apos;attente</strong> en
                lan&ccedil;ant les d&eacute;marches d&egrave;s la phase
                d&apos;&eacute;tude de votre projet.
              </li>
              <li>
                <strong>Coordonner l&apos;inscription</strong> avec les autres
                volets de votre installation&nbsp;: permis de r&eacute;sidence,
                logement, ouverture de compte bancaire, cr&eacute;ation de
                soci&eacute;t&eacute;.
              </li>
            </ul>
            <p>
              Nous connaissons personnellement les directions de ces
              &eacute;tablissements. Nous savons quelles &eacute;coles ont des
              places disponibles, lesquelles ont des listes d&apos;attente,
              et comment optimiser vos chances d&apos;admission.
            </p>
          </div>

          {/* ── Callout : Conclusion ── */}
          <div className="mx-auto mt-16 max-w-3xl rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-blue-800">
              En r&eacute;sum&eacute;&nbsp;: Maurice offre une &eacute;ducation
              internationale de qualit&eacute;, &agrave; prix raisonnable
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-blue-800">
              <li>
                <strong>3 &eacute;coles francophones AEFE</strong> pour
                pr&eacute;parer le baccalaur&eacute;at fran&ccedil;ais,
                identique &agrave; celui de la m&eacute;tropole.
              </li>
              <li>
                <strong>Plusieurs &eacute;coles anglophones</strong>{" "}
                accr&eacute;dit&eacute;es IB et Cambridge, reconnues
                mondialement.
              </li>
              <li>
                <strong>Frais de scolarit&eacute;</strong> de 2&nbsp;900 &agrave;
                10&nbsp;000&nbsp;&euro;/an &mdash; 2 &agrave; 4 fois moins
                qu&apos;&agrave; Duba&iuml; ou Singapour.
              </li>
              <li>
                <strong>Environnement bilingue naturel</strong> (fran&ccedil;ais
                + anglais) &mdash; un atout unique pour vos enfants.
              </li>
              <li>
                <strong>Cadre de vie exceptionnel</strong> pour
                l&apos;&eacute;panouissement sportif, artistique et personnel.
              </li>
              <li>
                <strong>Universit&eacute;s</strong> avec diplomes britanniques
                et australiens, accessibles sans quitter l&apos;&icirc;le.
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* ── Sources ── */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            Sources :{" "}
            <a
              href="https://llbinternationalschool.mu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Lyc&eacute;e La Bourdonnais
            </a>
            {" \u00B7 "}
            <a
              href="https://ecoledunord.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              &Eacute;cole du Nord
            </a>
            {" \u00B7 "}
            <a
              href="https://www.ecole-pauletvirginie.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Paul et Virginie
            </a>
            {" \u00B7 "}
            <a
              href="https://clavis.mu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Clavis International
            </a>
            {" \u00B7 "}
            <a
              href="https://lebocage.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Le Bocage International
            </a>
            {" \u00B7 "}
            <a
              href="https://northfieldsinternational.school/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Northfields International
            </a>
            {" \u00B7 "}
            <a
              href="https://www.international-schools-database.com/in/mauritius"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              International Schools Database
            </a>
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Cet article est fourni &agrave; titre informatif et ne constitue pas
            un conseil personnalis&eacute;. Les frais de scolarit&eacute;
            indiqu&eacute;s sont des fourchettes indicatives &mdash; contactez
            directement les &eacute;tablissements pour les tarifs exacts
            2025/2026.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Vous pr&eacute;parez votre expatriation en famille&nbsp;?
          </h2>
          <p className="mt-3 text-slate-400">
            Inscription scolaire, logement, permis de r&eacute;sidence,
            cr&eacute;ation de soci&eacute;t&eacute; &mdash; nous coordonnons
            tout pour vous.
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Consultation gratuite avec {founder.name}, {founder.title} &middot;
            Bas&eacute; &agrave; Maurice depuis 2015
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 px-10 hover:bg-blue-700"
              >
                Discuter de mon projet familial
              </Button>
            </Link>
            <Link href="/ressources/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                Voir tous les articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
