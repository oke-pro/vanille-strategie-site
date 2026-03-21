import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title:
    "Quitter Duba\u00ef pour Maurice \u2014 Routes financi\u00e8res, transfert de patrimoine et guide de transition | Vanille Strat\u00e9gie",
  description:
    "Guide urgent mars 2026 : comment transf\u00e9rer votre patrimoine de Duba\u00ef \u00e0 Maurice pendant la guerre Iran. Routes bancaires, fiscalit\u00e9 de transition, cr\u00e9ation de soci\u00e9t\u00e9, permis de r\u00e9sidence. Par Didier Laroussinie, Expert-Comptable.",
  keywords: [
    "quitter Dubai",
    "relocalisation Dubai",
    "alternative Dubai entrepreneur",
    "quitter Dubai Maurice",
    "transfert patrimoine Dubai",
    "guerre Iran Dubai",
    "exode Dubai 2026",
    "expatriation Maurice depuis Dubai",
    "ouvrir compte bancaire Maurice",
    "fiscalit\u00e9 Maurice vs Dubai",
  ],
};

export default function RoutesDubaiMauricePage() {
  return (
    <>
      {/* ── Hero URGENT ── */}
      <section className="bg-gradient-to-b from-red-950 to-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ressources/blog"
            className="text-sm text-red-300 hover:underline"
          >
            &larr; Tous les articles
          </Link>

          <div className="mt-4 flex items-center gap-2">
            <span className="animate-pulse rounded-full bg-red-600/30 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-red-300">
              Urgent &mdash; Mars 2026
            </span>
            <span className="text-xs text-slate-400">&middot; 22 min</span>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Quitter Duba&iuml; pour Maurice
            <br />
            <span className="text-red-400">
              Routes financi&egrave;res, transfert de patrimoine
              <br className="hidden sm:block" />
              et guide de transition
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            L&apos;a&eacute;roport de Duba&iuml; bombard&eacute;. Goldman Sachs,
            Citi et Standard Chartered &eacute;vacuent leurs &eacute;quipes.
            Bloomberg parle d&apos;un &laquo;&nbsp;exodus &agrave; la Hong
            Kong&nbsp;&raquo;. Pour les 9&nbsp;800 millionnaires install&eacute;s
            &agrave; Duba&iuml; en 2025, la question n&apos;est plus{" "}
            <em>si</em> mais <em>comment</em> transf&eacute;rer son patrimoine
            &mdash; et <strong>vers o&ugrave;</strong>.
          </p>

          <p className="mt-4 text-base text-slate-400">
            Ce guide op&eacute;rationnel couvre chaque &eacute;tape : routes
            bancaires, transfert d&apos;entreprise, fiscalit&eacute; de
            transition, logistique d&apos;installation. Pr&eacute;par&eacute; par
            un Expert-Comptable avec 40&nbsp;ans d&apos;exp&eacute;rience en
            mobilit&eacute; internationale.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-amber-500 text-sm font-bold text-white">
              DL
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{founder.name}</p>
              <p className="text-xs text-slate-400">{founder.title}</p>
            </div>
          </div>

          <div className="mt-8">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/contact">Appel strat&eacute;gique en 24h &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* ══════════════════════════════════════════════════════════
              1. CONTEXTE URGENT
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              1. Contexte : la guerre qui a chang&eacute; la donne
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Le 28&nbsp;f&eacute;vrier 2026, les op&eacute;rations militaires
                am&eacute;ricano-isra&eacute;liennes contre l&apos;Iran
                d&eacute;clenchent une escalade sans pr&eacute;c&eacute;dent dans
                le Golfe. En trois semaines, l&apos;Iran tire plus de
                1&nbsp;800&nbsp;missiles et drones sur les &Eacute;mirats arabes
                unis &mdash; plus que sur tout autre pays.
              </p>

              <p>
                Le 16&nbsp;mars 2026, un drone iranien enflamme un r&eacute;servoir
                de carburant &agrave; proximit&eacute; de l&apos;a&eacute;roport
                international de Duba&iuml;, provoquant sa fermeture temporaire.
                Plus de <strong>52&nbsp;000&nbsp;vols</strong> sont annul&eacute;s
                &agrave; travers le Moyen-Orient. Des d&eacute;bris de drone
                touchent le Burj Al Arab. Le consulat am&eacute;ricain de
                Duba&iuml; est vis&eacute; par une frappe.
              </p>

              <p>
                <strong>Goldman Sachs, Citigroup et Standard Chartered</strong>{" "}
                ordonnent &agrave; leurs &eacute;quipes de quitter le DIFC
                (Dubai International Financial Centre) apr&egrave;s que
                l&apos;Iran menace de frapper les institutions financi&egrave;res
                li&eacute;es aux &Eacute;tats-Unis. Morgan Stanley offre &agrave;
                ses employ&eacute;s la possibilit&eacute; de se relocaliser
                temporairement.
              </p>

              <p>
                Bloomberg pose la question que tout le monde se pose :{" "}
                <em>
                  &laquo;&nbsp;Will Dubai&apos;s Expat Hub Face a Hong
                  Kong-Style Exodus?&nbsp;&raquo;
                </em>
                . La r&eacute;ponse semble d&eacute;j&agrave; &eacute;crite.
                Singapour et Hong Kong se positionnent pour capter les flux.
                Mais pour les entrepreneurs francophones, une destination
                s&apos;impose : <strong>l&apos;&Icirc;le Maurice</strong>.
              </p>
            </div>

            {/* Callout ROUGE */}
            <div className="mt-8 rounded-xl border-l-4 border-red-600 bg-red-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-red-800">
                Situation en temps r&eacute;el &mdash; 21 mars 2026
              </p>
              <ul className="mt-3 space-y-2 text-sm text-red-900">
                <li>
                  &bull; A&eacute;roport de Duba&iuml; : vols
                  &laquo;&nbsp;limit&eacute;s&nbsp;&raquo;, d&eacute;tournements
                  vers Al Maktoum
                </li>
                <li>
                  &bull; 52&nbsp;000+ vols annul&eacute;s depuis le
                  28&nbsp;f&eacute;vrier
                </li>
                <li>
                  &bull; Grandes banques : &eacute;vacuation du DIFC, t&eacute;l&eacute;travail
                  impos&eacute;
                </li>
                <li>
                  &bull; Vols priv&eacute;s charter : prix multipli&eacute;s par
                  5 &agrave; 10 pour quitter Duba&iuml;
                </li>
                <li>
                  &bull; 9&nbsp;800 millionnaires install&eacute;s en 2025
                  &mdash; beaucoup pr&eacute;parent leur sortie
                </li>
              </ul>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              2. ROUTES FINANCIERES
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              2. Routes financi&egrave;res : transf&eacute;rer votre patrimoine
              de Duba&iuml; &agrave; Maurice
            </h2>

            <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-700">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Fermeture de compte bancaire aux EAU
                </h3>
                <p className="mt-2">
                  La fermeture d&apos;un compte bancaire aux &Eacute;mirats
                  (Emirates NBD, ADCB, Mashreq, RAK Bank) prend
                  habituellement 2 &agrave; 4&nbsp;semaines. En p&eacute;riode
                  de crise, attendez-vous &agrave; des d&eacute;lais
                  allong&eacute;s. Les points de vigilance :
                </p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  <li>
                    &bull; Solde cr&eacute;diteur obligatoire &mdash; aucun
                    pr&eacute;l&egrave;vement en cours
                  </li>
                  <li>
                    &bull; Annulation de toutes les cartes de cr&eacute;dit
                    li&eacute;es au compte
                  </li>
                  <li>
                    &bull; Ch&egrave;ques en circulation : tous doivent
                    &ecirc;tre encaiss&eacute;s ou annul&eacute;s
                  </li>
                  <li>
                    &bull; Certificat de cl&ocirc;ture : exigez-le par &eacute;crit
                  </li>
                  <li>
                    &bull; Blocage potentiel si des obligations
                    r&eacute;glementaires restent (licence, visa sponsoring)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Transfert SWIFT vers Maurice : AfrAsia Bank &amp; MCB
                </h3>
                <p className="mt-2">
                  Maurice dispose de deux banques de premier plan pour accueillir
                  les transferts internationaux :
                </p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  <li>
                    &bull; <strong>AfrAsia Bank</strong> : comptes
                    multi-devises (AED, USD, EUR, GBP), service Private Banking
                    pour les montants importants
                  </li>
                  <li>
                    &bull; <strong>MCB (Mauritius Commercial Bank)</strong> :
                    la plus ancienne et solide institution bancaire de Maurice,
                    correspondants bancaires internationaux &eacute;tablis
                  </li>
                  <li>
                    &bull; D&eacute;lais r&eacute;alistes : 3 &agrave;
                    5&nbsp;jours ouvr&eacute;s pour les transferts SWIFT
                    standards, 2 &agrave; 4&nbsp;semaines pour les montants
                    sup&eacute;rieurs &agrave; 1&nbsp;M&nbsp;USD (compliance
                    renforcée)
                  </li>
                  <li>
                    &bull; Pas de contr&ocirc;le des changes &agrave; Maurice
                    &mdash; libert&eacute; totale de rapatriement des capitaux
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Crypto : une alternative pour les transferts rapides ?
                </h3>
                <p className="mt-2">
                  Maurice dispose d&apos;un cadre r&eacute;glementaire pour les
                  actifs virtuels (licence VASP d&eacute;livr&eacute;e par la
                  FSC). Les stablecoins (USDT, USDC) peuvent servir de pont
                  pour des transferts rapides, mais attention : les montants
                  importants n&eacute;cessitent un passage par un exchange
                  r&eacute;gul&eacute; et une d&eacute;claration AML/KYC
                  compl&egrave;te. Ce n&apos;est pas une solution
                  &laquo;&nbsp;grise&nbsp;&raquo; &mdash; c&apos;est une
                  voie l&eacute;gale mais qui demande un accompagnement
                  sp&eacute;cifique.
                </p>
              </div>
            </div>

            {/* Callout ROUGE */}
            <div className="mt-8 rounded-xl border-l-4 border-red-600 bg-red-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-red-800">
                N&apos;attendez pas la panique bancaire aux EAU
              </p>
              <p className="mt-2 text-sm text-red-900">
                Si le conflit s&apos;intensifie, les banques &eacute;miraties
                pourraient imposer des restrictions sur les transferts
                internationaux (plafonds, d&eacute;lais allong&eacute;s,
                justificatifs renforc&eacute;s). Historiquement, c&apos;est ce
                qui s&apos;est pass&eacute; dans chaque zone de conflit. Initier
                vos transferts <strong>maintenant</strong>, pendant que le
                syst&egrave;me bancaire fonctionne encore normalement, est une
                mesure de prudence &eacute;l&eacute;mentaire.
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              3. TRANSFERT D'ENTREPRISE
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              3. Transfert d&apos;entreprise : de la Free Zone &agrave; Maurice
            </h2>

            <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-700">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Liquidation de Free Zone Company vs cr&eacute;ation &agrave;
                  Maurice
                </h3>
                <p className="mt-2">
                  La liquidation d&apos;une soci&eacute;t&eacute; en Free Zone
                  (DMCC, JAFZA, DIFC, ADGM) prend g&eacute;n&eacute;ralement
                  3 &agrave; 6&nbsp;mois en temps normal. La bonne strat&eacute;gie :
                  ne pas attendre la liquidation compl&egrave;te pour
                  cr&eacute;er votre structure &agrave; Maurice.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  <li>
                    &bull; <strong>Domestic Company</strong> : id&eacute;ale pour
                    les activit&eacute;s locales et r&eacute;gionales, IS
                    &agrave; 15%, cr&eacute;ation en 5&nbsp;jours ouvr&eacute;s
                  </li>
                  <li>
                    &bull; <strong>GBC (Global Business Company)</strong> :
                    pour le commerce international, acc&egrave;s aux 46
                    conventions de non-double imposition de Maurice
                  </li>
                  <li>
                    &bull; Les deux structures permettent d&apos;op&eacute;rer
                    imm&eacute;diatement pendant que la Free Zone est en cours
                    de liquidation
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Transfert de contrats clients
                </h3>
                <p className="mt-2">
                  Vos contrats existants peuvent &ecirc;tre
                  transf&eacute;r&eacute;s via une clause de changement de
                  juridiction ou un avenant de novation. Un conseiller juridique
                  sp&eacute;cialis&eacute; pr&eacute;parera les documents de
                  cession. La cl&eacute; : informer vos clients rapidement et
                  professionnellement &mdash; la plupart comprendront la
                  situation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  IP, marques et licences
                </h3>
                <p className="mt-2">
                  Maurice prot&egrave;ge la propri&eacute;t&eacute;
                  intellectuelle via l&apos;Industrial Property Act 2019. Les
                  marques et brevets peuvent &ecirc;tre
                  re-enregistr&eacute;s aupr&egrave;s de l&apos;Industrial
                  Property Office of Mauritius. Le processus prend 4 &agrave;
                  8&nbsp;semaines.
                </p>
              </div>
            </div>

            {/* Callout BLEU */}
            <div className="mt-8 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-800">
                M&ecirc;me fuseau horaire : z&eacute;ro friction
              </p>
              <p className="mt-2 text-sm text-blue-900">
                Maurice et Duba&iuml; partagent le m&ecirc;me fuseau horaire
                (GMT+4). Vos clients, partenaires et &eacute;quipes ne
                remarqueront aucune diff&eacute;rence dans vos horaires de
                travail. La transition est transparente du point de vue
                op&eacute;rationnel.
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              4. FISCALITE DE TRANSITION
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              4. Fiscalit&eacute; de transition : EAU &rarr; Maurice
            </h2>

            <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-700">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Pas d&apos;Exit Tax aux EAU
                </h3>
                <p className="mt-2">
                  Contrairement &agrave; la France (qui impose une exit tax sur
                  les plus-values latentes sup&eacute;rieures &agrave;
                  800&nbsp;000&nbsp;&euro;), les EAU ne pr&eacute;l&egrave;vent
                  aucune taxe de sortie. Vous pouvez transf&eacute;rer votre
                  patrimoine sans friction fiscale &agrave; la sortie.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  R&eacute;sidence fiscale : quand bascule-t-elle ?
                </h3>
                <p className="mt-2">
                  La r&egrave;gle des <strong>183&nbsp;jours</strong> s&apos;applique
                  dans les deux juridictions. Vous devenez r&eacute;sident
                  fiscal mauricien d&egrave;s lors que vous passez plus de
                  183&nbsp;jours par an sur le territoire, ou si votre
                  &laquo;&nbsp;centre d&apos;int&eacute;r&ecirc;ts
                  &eacute;conomiques&nbsp;&raquo; se situe &agrave; Maurice.
                  En pratique, d&egrave;s que vous vous installez
                  physiquement et cr&eacute;ez votre soci&eacute;t&eacute;,
                  la bascule peut &ecirc;tre anticip&eacute;e.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Convention de non-double imposition EAU-Maurice
                </h3>
                <p className="mt-2">
                  <strong>Oui, elle existe.</strong> Sign&eacute;e le
                  18&nbsp;septembre 2006, modifi&eacute;e par la Convention
                  Multilat&eacute;rale (MLI) entr&eacute;e en vigueur en 2020.
                  Elle couvre l&apos;imp&ocirc;t sur le revenu et l&apos;IS.
                  Pendant la p&eacute;riode de transition o&ugrave; vous avez
                  des revenus dans les deux pays, cette convention
                  emp&ecirc;che toute double imposition.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Plus-values : transition fiscalement neutre
                </h3>
                <p className="mt-2">
                  Les plus-values ne sont pas impos&eacute;es aux EAU (0%).
                  &Agrave; Maurice, il n&apos;existe pas d&apos;imp&ocirc;t sur
                  les plus-values de cession de titres ou d&apos;actifs
                  (hors immobilier r&eacute;cent). La transition est donc{" "}
                  <strong>fiscalement neutre</strong> sur ce point capital.
                </p>
              </div>
            </div>

            {/* Callout AMBER */}
            <div className="mt-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-amber-800">
                Attention : revenus pendant la transition
              </p>
              <p className="mt-2 text-sm text-amber-900">
                Si vous percevez des revenus aux EAU pendant que vous devenez
                r&eacute;sident fiscal mauricien, la convention bilatérale
                d&eacute;termine quel pays à le droit d&apos;imposer. Un
                accompagnement fiscal sp&eacute;cifique est indispensable pour
                &eacute;viter les zones grises. Ne laissez pas cette question
                sans r&eacute;ponse.
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              5. COMPARATIF FISCAL DUBAI vs MAURICE
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              5. Comparatif fiscal : Duba&iuml; vs Maurice
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Donn&eacute;es mars 2026 &mdash; Sources : MRA, FTA UAE, PWC
            </p>

            <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 shadow-lg">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">
                      Crit&egrave;re
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Duba&iuml; / EAU
                    </th>
                    <th className="bg-blue-700 px-4 py-3 text-left font-semibold">
                      Maurice
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Imp&ocirc;t sur les soci&eacute;t&eacute;s
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      9% (&gt;375K AED)
                    </td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      15% (3% effectif via GBC)
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Dividendes
                    </td>
                    <td className="px-4 py-3 text-slate-600">0%</td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      0%
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Plus-values
                    </td>
                    <td className="px-4 py-3 text-slate-600">0%</td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      0% (hors immobilier r&eacute;cent)
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Droits de succession
                    </td>
                    <td className="px-4 py-3 text-slate-600">0%</td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      0%
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      TVA
                    </td>
                    <td className="px-4 py-3 text-slate-600">5%</td>
                    <td className="bg-blue-50 px-4 py-3 text-blue-900">15%</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Charges sociales employeur
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      ~12,5% (nationaux uniquement)
                    </td>
                    <td className="bg-blue-50 px-4 py-3 text-blue-900">
                      ~9% (NSF + CSG)
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Taxe fonci&egrave;re
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Frais municipaux variables
                    </td>
                    <td className="bg-blue-50 px-4 py-3 text-blue-900">
                      Land Transfer Tax 5%
                    </td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="px-4 py-3 font-bold text-slate-900">
                      Risque g&eacute;opolitique
                    </td>
                    <td className="px-4 py-3 font-bold text-red-700">
                      CRITIQUE (zone de guerre active)
                    </td>
                    <td className="bg-green-50 px-4 py-3 font-bold text-green-800">
                      Z&Eacute;RO (oc&eacute;an Indien, hors conflit)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Callout BLEU */}
            <div className="mt-8 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-800">
                Le vrai calcul
              </p>
              <p className="mt-2 text-sm text-blue-900">
                Oui, l&apos;IS mauricien (15%) est plus &eacute;lev&eacute; que
                celui des EAU (9%). Mais &agrave; Maurice, les dividendes
                distribu&eacute;s sont &agrave; 0% &mdash; tout comme aux EAU.
                Et via une structure GBC avec cr&eacute;dits d&apos;imp&ocirc;t
                &eacute;tranger, le taux effectif peut descendre &agrave; 3%.
                Le diff&eacute;rentiel fiscal r&eacute;el est marginal. La
                diff&eacute;rence de risque, elle, est absolue.
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              6. LOGISTIQUE DE RELOCALISATION
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              6. Logistique : atterrir &agrave; Maurice et s&apos;installer
            </h2>

            <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-700">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Premium Visa : atterrir en 48h
                </h3>
                <p className="mt-2">
                  Le <strong>Premium Visa</strong> mauricien permet de vivre et
                  travailler &agrave; distance depuis Maurice pendant 1&nbsp;an
                  (renouvelable). Proc&eacute;dure en ligne, traitement en
                  48&nbsp;heures. C&apos;est votre billet d&apos;entr&eacute;e
                  imm&eacute;diat pendant que vous pr&eacute;parez votre
                  permis de r&eacute;sidence d&eacute;finitif.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Permis de r&eacute;sidence : OP Investor ou Self-Employed
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li>
                    &bull; <strong>Occupation Permit &mdash; Investor</strong> :
                    d&eacute;p&ocirc;t minimum de 50&nbsp;000&nbsp;USD,
                    cr&eacute;ation d&apos;une soci&eacute;t&eacute; &agrave;
                    Maurice
                  </li>
                  <li>
                    &bull; <strong>OP Self-Employed</strong> : pour les
                    consultants et freelances, chiffre d&apos;affaires minimum
                    annuel
                  </li>
                  <li>
                    &bull; D&eacute;lai d&apos;obtention : 4 &agrave;
                    8&nbsp;semaines
                  </li>
                  <li>
                    &bull; Donne acc&egrave;s &agrave; la r&eacute;sidence
                    permanente (PR) apr&egrave;s 3&nbsp;ans
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  O&ugrave; s&apos;installer ?
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  <li>
                    &bull; <strong>Grand Baie (Nord)</strong> : la
                    &laquo;&nbsp;Marina de Maurice&nbsp;&raquo;, communaut&eacute;
                    francophone importante, restaurants, vie nocturne, plages
                  </li>
                  <li>
                    &bull; <strong>Tamarin / Rivi&egrave;re Noire (Ouest)</strong> :
                    ambiance surf et nature, populaire aupr&egrave;s des
                    familles, IRS/RES &agrave; proximit&eacute;
                  </li>
                  <li>
                    &bull; <strong>Moka / Eb&egrave;ne (Centre)</strong> :
                    quartier d&apos;affaires, Cybercity, proximit&eacute; des
                    bureaux de BD Star
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  &Eacute;coles internationales
                </h3>
                <p className="mt-2">
                  Maurice compte une dizaine d&apos;&eacute;coles
                  internationales (Lyc&eacute;e La Bourdonnais, Northfields,
                  Clavis, Le Bocage) proposant le programme fran&ccedil;ais,
                  britannique ou le Baccalaur&eacute;at International. Les
                  familles de Duba&iuml; retrouveront un standard
                  &eacute;ducatif comparable.
                </p>
              </div>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              7. POURQUOI MAURICE PLUTOT QUE LE MAROC OU SINGAPOUR
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              7. Pourquoi Maurice plut&ocirc;t que le Maroc ou Singapour ?
            </h2>

            <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 shadow-lg">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">
                      Crit&egrave;re
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Maroc
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Singapour
                    </th>
                    <th className="bg-blue-700 px-4 py-3 text-left font-semibold">
                      Maurice
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">IS</td>
                    <td className="px-4 py-3 text-slate-600">17,5% &agrave; 31%</td>
                    <td className="px-4 py-3 text-slate-600">17%</td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      15%
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Dividendes
                    </td>
                    <td className="px-4 py-3 text-slate-600">15% retenue</td>
                    <td className="px-4 py-3 text-slate-600">0%</td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      0%
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Co&ucirc;t de la vie
                    </td>
                    <td className="px-4 py-3 text-slate-600">Mod&eacute;r&eacute;</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">
                      Tr&egrave;s &eacute;lev&eacute;
                    </td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      Mod&eacute;r&eacute;
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Fuseau vs Duba&iuml;
                    </td>
                    <td className="px-4 py-3 text-slate-600">GMT+1 (-3h)</td>
                    <td className="px-4 py-3 text-slate-600">GMT+8 (+4h)</td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      GMT+4 (identique)
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Langue
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Fran&ccedil;ais / Arabe
                    </td>
                    <td className="px-4 py-3 text-slate-600">Anglais</td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      Fran&ccedil;ais / Anglais
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Risque g&eacute;opolitique
                    </td>
                    <td className="px-4 py-3 text-amber-600 font-semibold">
                      Zone MENA
                    </td>
                    <td className="px-4 py-3 text-amber-600 font-semibold">
                      Tensions Chine-Ta&iuml;wan
                    </td>
                    <td className="bg-green-50 px-4 py-3 font-bold text-green-800">
                      Aucun
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-700">
                      Trait&eacute;s fiscaux
                    </td>
                    <td className="px-4 py-3 text-slate-600">~60</td>
                    <td className="px-4 py-3 text-slate-600">~90</td>
                    <td className="bg-blue-50 px-4 py-3 font-semibold text-blue-900">
                      46 (dont Afrique, Inde, Europe)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-base leading-relaxed text-slate-700">
              <p>
                Le Maroc reste en <strong>zone MENA</strong> &mdash;
                g&eacute;ographiquement proche des tensions actuelles. De plus,
                la retenue &agrave; la source de 15% sur les dividendes
                p&egrave;se lourdement sur la rentabilit&eacute; nette.
              </p>
              <p className="mt-3">
                Singapour est une juridiction d&apos;excellence, mais son
                <strong> co&ucirc;t de la vie prohibitif</strong> (loyers 3 &agrave;
                5 fois sup&eacute;rieurs &agrave; Maurice), son
                &eacute;loignement de l&apos;Europe et l&apos;absence de
                francophonie en font un choix peu adapt&eacute; aux
                entrepreneurs francophones.
              </p>
              <p className="mt-3">
                Maurice combine le meilleur : <strong>fiscalit&eacute;
                comp&eacute;titive</strong>, <strong>z&eacute;ro risque
                g&eacute;opolitique</strong>, <strong>m&ecirc;me fuseau
                horaire</strong> que Duba&iuml;, <strong>francophonie</strong>,
                et un <strong>co&ucirc;t de la vie mod&eacute;r&eacute;</strong>.
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              8. L'EXPERTISE VANILLE STRATEGIE
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              8. L&apos;expertise Vanille Strat&eacute;gie pour les ex-Duba&iuml;
            </h2>

            <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-700">
              <p>
                <strong>Didier Laroussinie</strong>, Expert-Comptable et
                Fiscaliste International, accompagne les entrepreneurs dans leur
                mobilit&eacute; internationale depuis plus de{" "}
                <strong>40&nbsp;ans</strong>. Bas&eacute; &agrave; Maurice
                depuis 2012, il a d&eacute;j&agrave; accompagn&eacute; des
                entrepreneurs et investisseurs en provenance de Duba&iuml; dans
                leur transition vers Maurice.
              </p>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Ce que nous faisons pour vous :
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-blue-600 font-bold">01</span>
                    <div>
                      <strong>Ouverture de compte bancaire en
                      2&nbsp;semaines</strong>
                      <br />
                      Via notre filiale <strong>BD Star Management
                      Services</strong>, nous g&eacute;rons l&apos;ouverture de
                      comptes chez AfrAsia Bank ou MCB avec dossier de
                      compliance pr&eacute;-valid&eacute;
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-blue-600 font-bold">02</span>
                    <div>
                      <strong>Cr&eacute;ation de soci&eacute;t&eacute; en
                      5&nbsp;jours</strong>
                      <br />
                      Domestic Company ou GBC &mdash; nous choisissons la
                      structure adapt&eacute;e &agrave; votre activit&eacute; et
                      &agrave; vos march&eacute;s
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-blue-600 font-bold">03</span>
                    <div>
                      <strong>Comptabilit&eacute; temps r&eacute;el via
                      Dashboard OKE</strong>
                      <br />
                      Pilotez votre transition comptable en temps r&eacute;el :
                      rapprochements bancaires, bilans interm&eacute;diaires,
                      alertes fiscales
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-blue-600 font-bold">04</span>
                    <div>
                      <strong>Permis de r&eacute;sidence et visa</strong>
                      <br />
                      Premium Visa imm&eacute;diat + d&eacute;p&ocirc;t OP
                      Investor ou Self-Employed avec suivi jusqu&apos;&agrave;
                      l&apos;obtention
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 text-blue-600 font-bold">05</span>
                    <div>
                      <strong>Planification fiscale de transition</strong>
                      <br />
                      Convention EAU-Maurice, bascule de r&eacute;sidence
                      fiscale, transfert de patrimoine sans friction
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              9. CHECKLIST 30 JOURS
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              9. Votre plan d&apos;action en 30&nbsp;jours
            </h2>

            {/* Callout VERT */}
            <div className="mt-8 rounded-xl border-l-4 border-green-600 bg-green-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-green-800">
                Checklist de transition Duba&iuml; &rarr; Maurice
              </p>

              <div className="mt-4 space-y-6">
                <div>
                  <p className="font-semibold text-green-900">
                    Semaine 1 &mdash; Lancer la machine
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-green-800">
                    <li>&#9744; Premier appel strat&eacute;gique avec Vanille Strat&eacute;gie</li>
                    <li>&#9744; Demande de Premium Visa en ligne (48h)</li>
                    <li>&#9744; R&eacute;server un vol vers Maurice (via connexion si n&eacute;cessaire)</li>
                    <li>&#9744; Lancer la proc&eacute;dure de fermeture de compte aux EAU</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-green-900">
                    Semaine 2 &mdash; S&eacute;curiser les finances
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-green-800">
                    <li>&#9744; Ouverture de compte AfrAsia Bank ou MCB (via BD Star)</li>
                    <li>&#9744; Initier les transferts SWIFT — tranches progressives</li>
                    <li>&#9744; Rassembler les documents pour la cr&eacute;ation de soci&eacute;t&eacute;</li>
                    <li>&#9744; Consulter un avocat pour les contrats clients &agrave; transf&eacute;rer</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-green-900">
                    Semaine 3 &mdash; Cr&eacute;er la structure
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-green-800">
                    <li>&#9744; Cr&eacute;ation Domestic Company ou GBC &agrave; Maurice</li>
                    <li>&#9744; D&eacute;p&ocirc;t de la demande d&apos;Occupation Permit (Investor)</li>
                    <li>&#9744; Transfert du d&eacute;p&ocirc;t de 50&nbsp;000&nbsp;USD</li>
                    <li>&#9744; Enregistrement marques/IP si applicable</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-green-900">
                    Semaine 4 &mdash; S&apos;installer
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-green-800">
                    <li>&#9744; Signer un bail (Grand Baie, Tamarin ou Moka)</li>
                    <li>&#9744; Inscrire les enfants en &eacute;cole internationale</li>
                    <li>&#9744; Obtenir le permis de conduire mauricien</li>
                    <li>&#9744; Ouvrir une ligne t&eacute;l&eacute;phonique locale</li>
                    <li>&#9744; Activer le Dashboard OKE pour la comptabilit&eacute;</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              10. CTA FORT
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-gradient-to-br from-red-950 to-slate-900 p-8 sm:p-12 text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Le timing est MAINTENANT.
              </h2>
              <p className="mt-4 text-base text-slate-300 sm:text-lg">
                Chaque semaine de retard complique les transferts bancaires.
                Les banques &eacute;miraties pourraient restreindre les sorties
                de capitaux &agrave; tout moment. Les vols sont limit&eacute;s.
                La fen&ecirc;tre d&apos;action se r&eacute;duit.
              </p>
              <p className="mt-4 text-base text-slate-300">
                Nous avons d&eacute;j&agrave; accompagn&eacute; des
                entrepreneurs de Duba&iuml; &agrave; Maurice. Nous connaissons
                chaque &eacute;tape, chaque pi&egrave;ge, chaque
                acc&eacute;l&eacute;rateur. Un seul appel suffit pour lancer
                votre transition.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                 
                  size="lg"
                  className="bg-red-600 text-lg font-bold hover:bg-red-700"
                >
                  <Link href="/contact">
                    Appel strat&eacute;gique gratuit en 24h &rarr;
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-slate-400">
                Ou appelez directement via WhatsApp :{" "}
                <a
                  href="https://wa.me/23059437483"
                  className="font-semibold text-green-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +230 59 43 74 83
                </a>
              </p>
            </div>
          </section>

          {/* ── Sources ── */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-lg font-semibold text-slate-900">Sources</h3>
            <ul className="mt-4 space-y-1 text-xs text-slate-500">
              <li>
                &bull; Al Jazeera, 16 mars 2026 &mdash;{" "}
                &laquo;&nbsp;Drone attack disrupts Dubai flights&nbsp;&raquo;
              </li>
              <li>
                &bull; Bloomberg, 13 mars 2026 &mdash;{" "}
                &laquo;&nbsp;Will Dubai&apos;s Expat Hub Face a Hong Kong-Style
                Exodus?&nbsp;&raquo;
              </li>
              <li>
                &bull; Bloomberg, 11 mars 2026 &mdash;{" "}
                &laquo;&nbsp;Goldman, Citi Tell Staff to Exit Dubai
                Offices&nbsp;&raquo;
              </li>
              <li>
                &bull; CNBC, 5 mars 2026 &mdash;{" "}
                &laquo;&nbsp;The wealthy once rushed to Dubai. Now they&apos;re
                scrambling to leave&nbsp;&raquo;
              </li>
              <li>
                &bull; Washington Post, 16 mars 2026 &mdash;{" "}
                &laquo;&nbsp;Iran targets commerce as drone hits Dubai
                airport&nbsp;&raquo;
              </li>
              <li>
                &bull; Mauritius Revenue Authority &mdash; Convention
                EAU-Maurice, sign&eacute;e 18 septembre 2006
              </li>
              <li>
                &bull; Travel Tourister &mdash; 52&nbsp;000+ vols
                annul&eacute;s, 1&nbsp;800+ missiles et drones
              </li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
