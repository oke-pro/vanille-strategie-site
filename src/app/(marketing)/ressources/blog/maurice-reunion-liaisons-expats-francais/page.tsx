import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title:
    "Maurice et La Réunion — La France à 45 minutes pour les expatriés français | Vanille Stratégie",
  description:
    "Vols Maurice-Réunion en 45 min, liaisons aériennes quotidiennes, accès aux services français, hôpitaux, administration. Pourquoi la proximité de La Réunion est un atout majeur pour les expats français à Maurice.",
  keywords: [
    "Maurice Réunion vol",
    "expatriation Maurice",
    "Maurice La Réunion avion",
    "Air Austral Maurice",
    "Air Mauritius Réunion",
    "expat français Maurice",
    "vivre à Maurice",
    "Maurice proche France",
    "liaisons aériennes Maurice Réunion",
    "fiscalité Maurice expatrié",
  ],
};

export default function MauriceReunionLiaisonsPage() {
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
            <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300">
              Mobilit&eacute;
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">&middot; 14 min</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Maurice et La R&eacute;union
            <br />
            <span className="text-blue-400">
              La France &agrave; 45&nbsp;minutes pour les expatri&eacute;s
              fran&ccedil;ais
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Vivre &agrave; Maurice, ce n&apos;est pas quitter la France.
            C&apos;est l&apos;&eacute;largir. Avec La R&eacute;union &mdash;
            d&eacute;partement fran&ccedil;ais &mdash; &agrave; moins d&apos;une
            heure de vol, vous gardez un pied dans l&apos;Hexagone tout en
            profitant d&apos;un cadre de vie et d&apos;une fiscalit&eacute;
            exceptionnels.
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
      <article>
        {/* ── Section 1 : Introduction ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg mx-auto">
              <h2>Un atout m&eacute;connu des expatri&eacute;s fran&ccedil;ais</h2>
              <p>
                Quand on parle d&apos;expatriation &agrave; Maurice, on
                &eacute;voque souvent le soleil, la fiscalit&eacute; attractive
                ou la qualit&eacute; de vie. On oublie un avantage consid&eacute;rable
                : <strong>La R&eacute;union, d&eacute;partement fran&ccedil;ais
                d&apos;outre-mer, se trouve &agrave; seulement 45&nbsp;minutes
                de vol</strong>.
              </p>
              <p>
                Concr&egrave;tement, cela signifie que depuis votre domicile
                mauricien, vous pouvez &ecirc;tre <em>en France</em> en moins
                de temps qu&apos;il n&apos;en faut pour traverser Paris en
                m&eacute;tro aux heures de pointe.
              </p>
              <p>
                Et quand on dit &laquo;&nbsp;en France&nbsp;&raquo;, c&apos;est
                au sens plein du terme. La R&eacute;union, c&apos;est
                l&apos;Union europ&eacute;enne, la S&eacute;curit&eacute; sociale,
                la CAF, France Travail (ex-P&ocirc;le Emploi), les tribunaux
                fran&ccedil;ais, les lyc&eacute;es fran&ccedil;ais, le CHU, les
                pr&eacute;fectures. Tout ce dont vous pourriez avoir besoin en
                tant que citoyen fran&ccedil;ais.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 2 : Liaisons aériennes ── */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg mx-auto">
              <h2>Liaisons a&eacute;riennes Maurice &harr; La R&eacute;union</h2>
              <p>
                L&apos;axe a&eacute;rien entre l&apos;a&eacute;roport
                international Sir Seewoosagur Ramgoolam (SSR) &agrave; Maurice
                et l&apos;a&eacute;roport Roland Garros &agrave; Saint-Denis de
                La R&eacute;union est l&apos;un des corridors les plus
                fr&eacute;quent&eacute;s de l&apos;oc&eacute;an Indien.
              </p>
            </div>

            {/* Tableau récapitulatif */}
            <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-lg">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">
                      Crit&egrave;re
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      D&eacute;tails
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Compagnies
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      <strong>Air Austral</strong> (compagnie r&eacute;unionnaise)
                      et <strong>Air Mauritius</strong> (compagnie nationale
                      mauricienne)
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Fr&eacute;quence
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Jusqu&apos;&agrave; <strong>27 fr&eacute;quences
                      hebdomadaires</strong> en haute saison &mdash; soit
                      jusqu&apos;&agrave; 4 vols par jour
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Dur&eacute;e du vol
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      <strong>40 &agrave; 50 minutes</strong> pour 231&nbsp;km
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Tarifs aller-retour
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      De <strong>220&nbsp;&euro;</strong> en basse saison
                      &agrave; <strong>400-430&nbsp;&euro;</strong> en haute
                      saison (d&eacute;cembre-janvier, juillet-ao&ucirc;t)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-700">
                      A&eacute;roports
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      SSR International (Plaisance, Maurice) &harr; Roland
                      Garros (Sainte-Marie, R&eacute;union)
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Meilleure p&eacute;riode tarifaire
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Avril-mai et septembre-octobre &mdash; tarifs souvent
                      autour de 220&nbsp;&euro; AR
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <div className="prose prose-slate prose-lg mx-auto">
                <p>
                  La concurrence entre Air Austral et Air Mauritius sur cet axe
                  est une excellente nouvelle pour les passagers : les deux
                  compagnies proposent des vols quotidiens, avec des horaires
                  compl&eacute;mentaires le matin et l&apos;apr&egrave;s-midi.
                  Pour un navetteur r&eacute;gulier, il est tout &agrave; fait
                  possible de partir le matin, passer la journ&eacute;e &agrave;
                  La R&eacute;union et rentrer le soir m&ecirc;me &agrave;
                  Maurice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3 : Liaisons maritimes ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg mx-auto">
              <h2>Liaisons maritimes : un projet r&eacute;current</h2>
              <p>
                &Agrave; ce jour, <strong>il n&apos;existe pas de liaison
                maritime r&eacute;guli&egrave;re pour passagers</strong> entre
                Maurice et La R&eacute;union. Le sujet revient
                r&eacute;guli&egrave;rement dans le d&eacute;bat public des
                deux &icirc;les, et plusieurs projets de ferry ont
                &eacute;t&eacute; annonc&eacute;s au fil des ann&eacute;es,
                sans aboutir durablement.
              </p>
              <p>
                La SCOAM (Soci&eacute;t&eacute; Commerciale de l&apos;Oc&eacute;an
                Indien et d&apos;Afrique de Madagascar) avait propos&eacute;
                par le pass&eacute; des travers&eacute;es passagers, mais ce
                service n&apos;est plus op&eacute;rationnel. Les autorit&eacute;s
                des deux &icirc;les continuent d&apos;&eacute;tudier la
                faisabilit&eacute; d&apos;une ligne r&eacute;guli&egrave;re, et
                le projet n&apos;est pas abandonn&eacute;.
              </p>
              <p>
                En attendant, le <strong>fret maritime</strong> entre Maurice et
                La R&eacute;union fonctionne normalement, avec des navires
                cargo assurant l&apos;approvisionnement r&eacute;gulier entre
                les deux &icirc;les. Pour le transport de passagers, l&apos;avion
                reste la seule option pratique &mdash; et &agrave;
                45&nbsp;minutes de vol, c&apos;est de toute fa&ccedil;on
                difficilement battable.
              </p>
            </div>

            {/* Callout bleu */}
            <div className="mx-auto mt-8 max-w-3xl rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
              <p className="text-sm font-semibold text-blue-800">
                Le saviez-vous ?
              </p>
              <p className="mt-2 text-sm text-blue-700">
                La distance entre Maurice et La R&eacute;union n&apos;est que
                de 231&nbsp;km &mdash; soit l&apos;&eacute;quivalent d&apos;un
                Paris-Le Mans. En avion, c&apos;est &agrave; peine le temps de
                boire un caf&eacute;.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 4 : Pourquoi c'est important ── */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg mx-auto">
              <h2>
                Pourquoi cette proximit&eacute; change tout pour les expats
              </h2>
              <p>
                La proximit&eacute; de La R&eacute;union n&apos;est pas un
                simple d&eacute;tail logistique. C&apos;est un v&eacute;ritable
                filet de s&eacute;curit&eacute; pour les Fran&ccedil;ais qui
                s&apos;installent &agrave; Maurice. Voici pourquoi.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
              {/* Carte 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 text-2xl">&#x1F3E5;</div>
                <h3 className="text-lg font-bold text-slate-900">
                  Sant&eacute;
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Le CHU de La R&eacute;union (sites Nord et Sud) offre un
                  plateau technique hospitalier fran&ccedil;ais complet. En cas
                  de besoin m&eacute;dical important &mdash; intervention
                  chirurgicale, imagerie avanc&eacute;e, sp&eacute;cialistes
                  &mdash; vous &ecirc;tes &agrave; 45&nbsp;minutes d&apos;un
                  h&ocirc;pital fran&ccedil;ais.
                </p>
              </div>

              {/* Carte 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 text-2xl">&#x1F4CB;</div>
                <h3 className="text-lg font-bold text-slate-900">
                  Administration
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Passeport, carte d&apos;identit&eacute;, procurations
                  notari&eacute;es, services consulaires : tout est accessible
                  &agrave; La R&eacute;union, avec des pr&eacute;fectures et
                  sous-pr&eacute;fectures fran&ccedil;aises &agrave; plein
                  r&eacute;gime.
                </p>
              </div>

              {/* Carte 3 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 text-2xl">&#x1F6D2;</div>
                <h3 className="text-lg font-bold text-slate-900">
                  Shopping &amp; produits fran&ccedil;ais
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Envie de fromage, de charcuterie ou de produits sp&eacute;cifiques
                  introuvables &agrave; Maurice ? La R&eacute;union dispose de
                  grandes surfaces (Carrefour, Leclerc, Super U) avec toute la
                  gamme fran&ccedil;aise.
                </p>
              </div>

              {/* Carte 4 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 text-2xl">&#x1F393;</div>
                <h3 className="text-lg font-bold text-slate-900">
                  &Eacute;ducation
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Lyc&eacute;es fran&ccedil;ais, universit&eacute; de La
                  R&eacute;union, formations professionnelles : pour les
                  familles, c&apos;est la garantie d&apos;un acc&egrave;s au
                  syst&egrave;me &eacute;ducatif fran&ccedil;ais &agrave;
                  port&eacute;e de main.
                </p>
              </div>

              {/* Carte 5 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 text-2xl">&#x1F46A;</div>
                <h3 className="text-lg font-bold text-slate-900">
                  Famille &amp; proches
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Vos proches en visite depuis la m&eacute;tropole peuvent faire
                  escale &agrave; La R&eacute;union. Et vous pouvez
                  &laquo;&nbsp;rentrer en France&nbsp;&raquo; pour un week-end
                  sans prendre 11 heures d&apos;avion.
                </p>
              </div>

              {/* Carte 6 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 text-2xl">&#x2696;&#xFE0F;</div>
                <h3 className="text-lg font-bold text-slate-900">
                  Juridique
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Tribunaux fran&ccedil;ais, notaires, avocats inscrits au
                  barreau fran&ccedil;ais : pour toute d&eacute;marche juridique
                  en droit fran&ccedil;ais, La R&eacute;union est votre
                  relais naturel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 5 : Avantages fiscaux ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg mx-auto">
              <h2>
                R&eacute;sider &agrave; Maurice, avoir la France &agrave;
                c&ocirc;t&eacute; : le meilleur des deux mondes
              </h2>
              <p>
                L&apos;&eacute;quation est redoutablement efficace. En
                &eacute;tablissant votre r&eacute;sidence fiscale &agrave;
                Maurice, vous b&eacute;n&eacute;ficiez d&apos;un environnement
                fiscal parmi les plus comp&eacute;titifs au monde :
              </p>
              <ul>
                <li>
                  <strong>Imp&ocirc;t sur les soci&eacute;t&eacute;s
                  (IS)</strong> : taux unique de <strong>15&nbsp;%</strong>
                </li>
                <li>
                  <strong>Dividendes</strong> : <strong>0&nbsp;%</strong> de
                  retenue &agrave; la source, 0&nbsp;% d&apos;imp&ocirc;t sur
                  les dividendes re&ccedil;us
                </li>
                <li>
                  <strong>Plus-values</strong> : <strong>pas
                  d&apos;imposition</strong> sur les gains en capital
                </li>
                <li>
                  <strong>Droits de succession</strong> :{" "}
                  <strong>inexistants</strong> &agrave; Maurice
                </li>
              </ul>
              <p>
                Et gr&acirc;ce &agrave; la proximit&eacute; de La
                R&eacute;union, vous conservez un acc&egrave;s facile et rapide
                &agrave; la France pour toutes vos d&eacute;marches
                administratives, sans pour autant y &ecirc;tre r&eacute;sident
                fiscal.
              </p>
            </div>

            {/* Callout warning ambre */}
            <div className="mx-auto mt-8 max-w-3xl rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
              <p className="text-sm font-semibold text-amber-800">
                Attention : r&egrave;gle des 183 jours
              </p>
              <p className="mt-2 text-sm text-amber-700">
                Si vous passez plus de 183&nbsp;jours par an en France (y
                compris &agrave; La R&eacute;union), l&apos;administration
                fiscale fran&ccedil;aise peut requalifier votre r&eacute;sidence
                fiscale. La convention fiscale franco-mauricienne vous
                prot&egrave;ge, mais elle s&apos;applique au cas par cas.{" "}
                <strong>
                  Ne multipliez pas les s&eacute;jours prolong&eacute;s &agrave;
                  La R&eacute;union sans conseil fiscal pr&eacute;alable.
                </strong>{" "}
                Chez Vanille Strat&eacute;gie, nous vous aidons &agrave;
                structurer votre calendrier de d&eacute;placements pour
                s&eacute;curiser votre r&eacute;sidence fiscale mauricienne.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 6 : Liaisons Paris ── */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg mx-auto">
              <h2>Maurice &harr; Paris : vols directs ou via La R&eacute;union</h2>
              <p>
                Pour rejoindre la m&eacute;tropole, deux options s&apos;offrent
                aux r&eacute;sidents mauriciens :
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
              {/* Option 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">
                  Vol direct Paris-Maurice
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>
                    <strong>Compagnies</strong> : Air France et Air Mauritius
                  </li>
                  <li>
                    <strong>Fr&eacute;quence</strong> : jusqu&apos;&agrave;
                    6&nbsp;vols par semaine (vol quotidien Air Mauritius)
                  </li>
                  <li>
                    <strong>Dur&eacute;e</strong> : environ 11&nbsp;heures
                  </li>
                  <li>
                    <strong>Trajet</strong> : Paris CDG &harr; SSR International
                  </li>
                  <li>
                    <strong>Horaires</strong> : d&eacute;part CDG &agrave;
                    16h20, arriv&eacute;e Maurice 6h35 le lendemain
                  </li>
                </ul>
              </div>

              {/* Option 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">
                  Via La R&eacute;union
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>
                    <strong>Compagnie</strong> : Air Austral (Paris &harr; La
                    R&eacute;union ~11h, puis connexion Maurice ~45&nbsp;min)
                  </li>
                  <li>
                    <strong>Avantage</strong> : possibilit&eacute; de faire
                    escale &agrave; La R&eacute;union, visiter famille ou
                    r&eacute;gler des d&eacute;marches en chemin
                  </li>
                  <li>
                    <strong>Id&eacute;al pour</strong> : ceux qui veulent
                    combiner un passage en France et le retour &agrave; Maurice
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <div className="prose prose-slate prose-lg mx-auto">
                <p>
                  Depuis l&apos;&eacute;t&eacute; 2025, Air Mauritius a
                  inaugur&eacute; des vols directs estivaux Paris-Maurice, une
                  premi&egrave;re en dehors des rotations via La R&eacute;union.
                  L&apos;exp&eacute;rience ayant &eacute;t&eacute; concluante,
                  deux vols directs sont d&eacute;j&agrave; envisag&eacute;s
                  pour l&apos;&eacute;t&eacute; 2026, renfor&ccedil;ant encore
                  la connectivit&eacute; avec la m&eacute;tropole.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 7 : Connexions internationales ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg mx-auto">
              <h2>
                Maurice, hub a&eacute;rien de l&apos;oc&eacute;an Indien
              </h2>
              <p>
                Au-del&agrave; de la France, Maurice offre des connexions
                directes vers les principales places d&apos;affaires
                internationales. Air Mauritius dessert 13&nbsp;destinations
                directes et connecte &agrave; plus de 70&nbsp;destinations via
                ses hubs partenaires.
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  city: "Londres",
                  detail: "Vol direct Air Mauritius (~12h)",
                  flag: "GB",
                },
                {
                  city: "Duba\u00ef",
                  detail: "Via Emirates (m\u00eame fuseau GMT+4)",
                  flag: "AE",
                },
                {
                  city: "Johannesburg",
                  detail: "Vol direct (~4h)",
                  flag: "ZA",
                },
                {
                  city: "Nairobi",
                  detail: "Hub partenaire Air Mauritius",
                  flag: "KE",
                },
                {
                  city: "Mumbai / Delhi",
                  detail: "Vol direct Air Mauritius (~7h)",
                  flag: "IN",
                },
                {
                  city: "Singapour",
                  detail: "Vol direct Air Mauritius (~8h)",
                  flag: "SG",
                },
              ].map((dest) => (
                <div
                  key={dest.city}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {dest.city}
                  </p>
                  <p className="text-xs text-slate-500">{dest.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="prose prose-slate prose-lg mx-auto">
                <p>
                  Cette connectivit&eacute; internationale fait de Maurice une
                  base id&eacute;ale pour les entrepreneurs qui travaillent avec
                  l&apos;Afrique, l&apos;Asie ou le Moyen-Orient, tout en
                  conservant un lien &eacute;troit avec l&apos;Europe via Paris
                  et Londres.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 8 : Réseau océan Indien ── */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg mx-auto">
              <h2>
                Le r&eacute;seau des &icirc;les de l&apos;oc&eacute;an Indien
              </h2>
              <p>
                Maurice n&apos;est pas une &icirc;le isol&eacute;e. Elle est au
                c&oelig;ur d&apos;un archipel de destinations accessibles en
                quelques heures, formant un v&eacute;ritable{" "}
                <strong>bassin de vie r&eacute;gional</strong> :
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900">
                  Maurice &harr; Madagascar
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Vols r&eacute;guliers vers Antananarivo et Nosy Be. Air
                  Mauritius, Air Austral et Madagascar Airlines op&egrave;rent
                  cette route. Environ 2h de vol.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900">
                  Maurice &harr; Seychelles
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Vols directs Air Seychelles et Air Mauritius vers
                  Mah&eacute;. Les Seychelles ont lanc&eacute; des vols directs
                  Paris-Mah&eacute; depuis mars 2026.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900">
                  Maurice &harr; Mayotte &amp; Comores
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Connexions via La R&eacute;union avec Air Austral. Mayotte
                  &eacute;tant un d&eacute;partement fran&ccedil;ais,
                  c&apos;est un deuxi&egrave;me point d&apos;acc&egrave;s &agrave;
                  la France dans la r&eacute;gion.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900">
                  L&apos;oc&eacute;an Indien comme zone de vie
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Avec deux d&eacute;partements fran&ccedil;ais (La
                  R&eacute;union et Mayotte), des &icirc;les paradisiaques et
                  des connexions a&eacute;riennes denses, cette r&eacute;gion
                  offre un cadre de vie unique au monde.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 9 : Recommandations pratiques ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Callout vert */}
            <div className="rounded-xl border-l-4 border-green-500 bg-green-50 p-6">
              <p className="text-sm font-semibold text-green-800">
                Recommandations pratiques pour les navetteurs Maurice-R&eacute;union
              </p>
              <ul className="mt-4 space-y-3 text-sm text-green-700">
                <li>
                  <strong>
                    Carte de r&eacute;sident mauricien + passeport
                    fran&ccedil;ais
                  </strong>{" "}
                  = mobilit&eacute; totale. Vous passez la douane mauricienne
                  avec votre Occupation Permit ou votre Premium Visa, et vous
                  entrez &agrave; La R&eacute;union avec votre passeport (ou
                  carte d&apos;identit&eacute;) fran&ccedil;ais. Aucun visa
                  n&eacute;cessaire de part et d&apos;autre.
                </li>
                <li>
                  <strong>Programmes de fid&eacute;lit&eacute;</strong> : Air
                  Mauritius (Kestrelflyer) et Air Austral (Capricorne)
                  proposent des programmes pour les voyageurs
                  fr&eacute;quents. Accumulez des miles pour r&eacute;duire le
                  co&ucirc;t de vos allers-retours r&eacute;guliers.
                </li>
                <li>
                  <strong>R&eacute;servez en avance</strong> : en basse saison
                  (avril-mai, septembre-octobre), les billets sont souvent
                  autour de 220&nbsp;&euro; AR. Plus vous r&eacute;servez
                  t&ocirc;t, meilleur sera le tarif.
                </li>
                <li>
                  <strong>Applications utiles</strong> : Skyscanner, Google
                  Flights et les apps Air Austral / Air Mauritius pour comparer
                  et r&eacute;server rapidement.
                </li>
                <li>
                  <strong>Astuce week-end</strong> : les vols du vendredi soir
                  et dimanche soir sont les plus demand&eacute;s. Privil&eacute;giez
                  les d&eacute;parts en semaine pour de meilleurs tarifs.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA Final ── */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Vanille Strat&eacute;gie vous accompagne dans votre installation
              &agrave; Maurice
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              &Agrave; 45&nbsp;minutes de la France, avec une fiscalit&eacute;
              optimis&eacute;e et un cadre de vie exceptionnel. Parlons de votre
              projet d&apos;expatriation.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg">
                <Link href="/contact">
                  Prendre rendez-vous avec Didier Laroussinie
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              Expertise comptable &middot; Fiscalit&eacute; internationale
              &middot; Structuration &middot; Implantation &agrave; Maurice
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
