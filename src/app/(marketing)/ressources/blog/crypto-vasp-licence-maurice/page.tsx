import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title:
    "Crypto et Virtual Assets \u00e0 Maurice \u2014 Licence VASP, cadre r\u00e9glementaire et opportunit\u00e9s | Vanille Strat\u00e9gie",
  description:
    "Guide complet 2026 : licence VASP \u00e0 Maurice, VAITOS Act, classes de licences FSC (M, O, R, I, S), fiscalit\u00e9 crypto 0% capital gains, partial exemption 80%, regulatory sandbox. Par Didier Laroussinie, Expert-Comptable.",
  keywords: [
    "VASP licence Maurice",
    "crypto Maurice",
    "virtual assets Mauritius",
    "VAITOS Act 2021",
    "FSC Mauritius crypto",
    "licence crypto Maurice",
    "fiscalit\u00e9 crypto Maurice",
    "capital gains crypto 0%",
    "partial exemption 80%",
    "regulatory sandbox Mauritius",
    "exchange crypto Maurice",
    "VASP classes M O R I S",
    "AML KYC crypto Maurice",
    "comptabilit\u00e9 crypto IFRS",
  ],
};

export default function CryptoVaspLicenceMauricePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-slate-950 to-indigo-950 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ressources/blog"
            className="text-sm text-indigo-300 hover:underline"
          >
            &larr; Tous les articles
          </Link>

          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-indigo-600/30 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-indigo-300">
              Guide complet
            </span>
            <span className="text-xs text-slate-400">&middot; 18 min</span>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Crypto et Virtual Assets &agrave; Maurice
            <br />
            <span className="text-indigo-400">
              Licence VASP, cadre r&eacute;glementaire
              <br className="hidden sm:block" />
              et opportunit&eacute;s
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Maurice s&apos;impose comme le hub crypto de l&apos;oc&eacute;an
            Indien. Avec le <strong>VAITOS Act 2021</strong>, une fiscalit&eacute;
            &agrave; <strong>0&nbsp;% sur les plus-values crypto</strong> et un
            cadre r&eacute;glementaire align&eacute; sur les standards FATF,
            l&apos;&icirc;le offre un &eacute;cosyst&egrave;me unique pour les
            Virtual Asset Service Providers. Ce guide d&eacute;taille chaque
            aspect : licences, proc&eacute;dures, fiscalit&eacute;,
            conformit&eacute; et comptabilit&eacute;.
          </p>

          <p className="mt-4 text-base text-slate-400">
            Pr&eacute;par&eacute; par un Expert-Comptable avec 40&nbsp;ans
            d&apos;exp&eacute;rience en structuration internationale et
            consolidation IFRS.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-bold text-white">
              DL
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{founder.name}</p>
              <p className="text-xs text-slate-400">{founder.title}</p>
            </div>
          </div>

          <div className="mt-8">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Link href="/contact">
                Consultation crypto &amp; VASP &rarr;
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* ══════════════════════════════════════════════════════════
              1. MAURICE HUB CRYPTO
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              1. Maurice, hub crypto de l&apos;oc&eacute;an Indien
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Depuis l&apos;adoption du{" "}
                <strong>
                  Virtual Asset and Initial Token Offering Services Act
                  (VAITOS)
                </strong>{" "}
                en d&eacute;cembre 2021 &mdash; entr&eacute; en vigueur le
                7&nbsp;f&eacute;vrier 2022 &mdash; Maurice dispose d&apos;un
                cadre r&eacute;glementaire d&eacute;di&eacute; aux actifs
                virtuels, supervis&eacute; par la{" "}
                <strong>Financial Services Commission (FSC)</strong>. Maurice
                est l&apos;une des rares juridictions africaines &agrave;
                proposer un r&eacute;gime de licence VASP align&eacute; sur les
                recommandations du FATF (GAFI).
              </p>

              <p>
                L&apos;&icirc;le b&eacute;n&eacute;ficie d&apos;atouts
                structurels consid&eacute;rables : un syst&egrave;me juridique
                hybride (common law + code civil), 37&nbsp;trait&eacute;s de
                non-double imposition, un fuseau horaire GMT+4 id&eacute;al
                pour couvrir l&apos;Asie, l&apos;Europe et l&apos;Afrique, ainsi
                qu&apos;une main-d&apos;&oelig;uvre qualifi&eacute;e bilingue
                fran&ccedil;ais-anglais. Le Financial Services sector
                repr&eacute;sente plus de 12&nbsp;% du PIB mauricien.
              </p>

              <p>
                Pour les entrepreneurs crypto francophones, Maurice offre un
                positionnement unique : la rigueur r&eacute;glementaire
                n&eacute;cessaire &agrave; la cr&eacute;dibilit&eacute;
                institutionnelle, combin&eacute;e &agrave; une fiscalit&eacute;
                parmi les plus attractives au monde pour les actifs
                num&eacute;riques.
              </p>
            </div>

            {/* Callout bleu */}
            <div className="mt-8 rounded-xl border-l-4 border-indigo-600 bg-indigo-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-indigo-800">
                Pourquoi Maurice pour la crypto&nbsp;?
              </p>
              <ul className="mt-3 space-y-2 text-sm text-indigo-900">
                <li>
                  &bull; Cadre r&eacute;glementaire FATF-compliant (VAITOS Act
                  2021)
                </li>
                <li>
                  &bull; 0&nbsp;% d&apos;imp&ocirc;t sur les plus-values crypto
                </li>
                <li>
                  &bull; 0&nbsp;% de retenue &agrave; la source sur les
                  dividendes
                </li>
                <li>
                  &bull; 37&nbsp;trait&eacute;s de non-double imposition
                </li>
                <li>
                  &bull; Regulatory sandbox FSC pour les projets innovants
                </li>
                <li>
                  &bull; Acc&egrave;s aux march&eacute;s Afrique, Asie,
                  Moyen-Orient
                </li>
              </ul>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              2. VAITOS ACT 2021
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              2. Le VAITOS Act 2021 : fondement du cadre r&eacute;glementaire
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Le{" "}
                <strong>
                  Virtual Asset and Initial Token Offering Services Act 2021
                </strong>{" "}
                a &eacute;t&eacute; adopt&eacute; par l&apos;Assembl&eacute;e
                nationale le 10&nbsp;d&eacute;cembre 2021 et publi&eacute; au
                Journal officiel le 16&nbsp;d&eacute;cembre 2021. Il confie
                &agrave; la <strong>FSC</strong> la supervision et la
                r&eacute;gulation des VASP et des &eacute;metteurs d&apos;Initial
                Token Offerings (ITO).
              </p>

              <p>
                La loi d&eacute;coule directement de la{" "}
                <strong>Recommandation 15 du FATF</strong>, qui impose aux pays
                membres de r&eacute;guler les VASP en mati&egrave;re de lutte
                anti-blanchiment (AML) et de financement du terrorisme (CFT).
                Maurice, retir&eacute; de la liste grise du FATF en 2021, a
                fait de cette conformit&eacute; une priorit&eacute;
                strat&eacute;gique.
              </p>

              <p>
                Le VAITOS Act d&eacute;finit un <strong>VASP</strong> comme
                toute personne qui, dans le cadre d&apos;une activit&eacute;
                commerciale et pour le compte d&apos;autrui, exerce l&apos;une
                des activit&eacute;s suivantes :
              </p>

              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  &bull; &Eacute;change entre actifs virtuels et monnaies fiat
                </li>
                <li>
                  &bull; &Eacute;change entre diff&eacute;rentes formes
                  d&apos;actifs virtuels
                </li>
                <li>&bull; Transfert d&apos;actifs virtuels</li>
                <li>
                  &bull; Conservation (safekeeping) d&apos;actifs virtuels ou
                  d&apos;instruments permettant leur contr&ocirc;le
                </li>
                <li>&bull; Administration d&apos;actifs virtuels</li>
                <li>
                  &bull; Participation et fourniture de services financiers
                  li&eacute;s &agrave; l&apos;&eacute;mission et la vente
                  d&apos;actifs virtuels (ITO)
                </li>
              </ul>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              3. TYPES DE LICENCES
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              3. Les 5 classes de licences VASP
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Le VAITOS Act pr&eacute;voit cinq classes de licences VASP,
              chacune correspondant &agrave; un type d&apos;activit&eacute;
              sp&eacute;cifique. Le choix de la licence d&eacute;pend du
              mod&egrave;le &eacute;conomique du projet.
            </p>

            {/* Tableau des licences */}
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="pb-3 pr-4 font-semibold text-slate-900">
                      Classe
                    </th>
                    <th className="pb-3 pr-4 font-semibold text-slate-900">
                      D&eacute;signation
                    </th>
                    <th className="pb-3 pr-4 font-semibold text-slate-900">
                      Activit&eacute;s
                    </th>
                    <th className="pb-3 font-semibold text-slate-900">
                      Capital minimum
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 font-bold text-indigo-700">M</td>
                    <td className="py-3 pr-4 text-slate-700">
                      Virtual Asset Broker-Dealer
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      &Eacute;change crypto/fiat, crypto/crypto
                    </td>
                    <td className="py-3 text-slate-700">
                      2&nbsp;000&nbsp;000 MUR
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-bold text-indigo-700">O</td>
                    <td className="py-3 pr-4 text-slate-700">
                      Virtual Asset Wallet Services
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      Transfert d&apos;actifs virtuels
                    </td>
                    <td className="py-3 text-slate-700">
                      D&eacute;fini par la FSC
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-bold text-indigo-700">R</td>
                    <td className="py-3 pr-4 text-slate-700">
                      Virtual Asset Custodian
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      Conservation, administration d&apos;actifs virtuels
                    </td>
                    <td className="py-3 text-slate-700">
                      5&nbsp;000&nbsp;000 MUR
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-bold text-indigo-700">I</td>
                    <td className="py-3 pr-4 text-slate-700">
                      Virtual Asset Advisory Services
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      Conseil en ITO, services financiers li&eacute;s aux VA
                    </td>
                    <td className="py-3 text-slate-700">
                      D&eacute;fini par la FSC
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-bold text-indigo-700">S</td>
                    <td className="py-3 pr-4 text-slate-700">
                      Virtual Asset Market Place
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      Plateforme d&apos;&eacute;change (exchange)
                    </td>
                    <td className="py-3 text-slate-700">
                      6&nbsp;500&nbsp;000 MUR
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Note : 1&nbsp;MUR &asymp; 0,020&nbsp;EUR (mars 2026). Le capital
              minimum pour une licence Class&nbsp;S repr&eacute;sente environ
              130&nbsp;000&nbsp;EUR.
            </p>

            {/* Callout vert */}
            <div className="mt-8 rounded-xl border-l-4 border-emerald-600 bg-emerald-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">
                Bon &agrave; savoir
              </p>
              <p className="mt-2 text-sm text-emerald-900">
                Un m&ecirc;me op&eacute;rateur peut d&eacute;tenir plusieurs
                classes de licences simultan&eacute;ment. Un exchange complet
                demandera typiquement les classes <strong>S</strong> (marketplace),{" "}
                <strong>M</strong> (broker-dealer) et <strong>R</strong>{" "}
                (custodian).
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              4. PROCÉDURE D'OBTENTION
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              4. Proc&eacute;dure d&apos;obtention de la licence VASP
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                L&apos;obtention d&apos;une licence VASP aupr&egrave;s de la FSC
                suit un processus structur&eacute; qui prend typiquement{" "}
                <strong>5 &agrave; 9&nbsp;mois</strong> de
                l&apos;incorporation &agrave; la d&eacute;livrance de la
                licence. Voici les &eacute;tapes principales :
              </p>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  &Eacute;tape 1 : Incorporation de la soci&eacute;t&eacute;
                </h3>
                <p className="mt-2">
                  Cr&eacute;ation d&apos;une soci&eacute;t&eacute; mauricienne
                  (Domestic Company ou GBC). La soci&eacute;t&eacute; doit
                  disposer d&apos;un <strong>bureau physique &agrave; Maurice</strong>{" "}
                  et ses activit&eacute;s doivent &ecirc;tre{" "}
                  <strong>dirig&eacute;es et g&eacute;r&eacute;es depuis Maurice</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  &Eacute;tape 2 : Pr&eacute;paration du dossier
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li>
                    &bull; Business plan d&eacute;taill&eacute; (mod&egrave;le
                    &eacute;conomique, march&eacute; cible, projections)
                  </li>
                  <li>
                    &bull; Politique AML/CFT et programme de conformit&eacute;
                  </li>
                  <li>
                    &bull; Profils des dirigeants (au minimum{" "}
                    <strong>2&nbsp;directeurs r&eacute;sidents &agrave; Maurice</strong>)
                  </li>
                  <li>
                    &bull; Nomination d&apos;un Compliance Officer et d&apos;un
                    MLRO (Money Laundering Reporting Officer) agr&eacute;&eacute;s
                    par la FSC
                  </li>
                  <li>
                    &bull; Preuve du capital minimum lib&eacute;r&eacute;
                  </li>
                  <li>
                    &bull; Infrastructure technologique et plan de
                    cybers&eacute;curit&eacute;
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  &Eacute;tape 3 : Soumission et examen par la FSC
                </h3>
                <p className="mt-2">
                  La FSC examine le dossier, proc&egrave;de aux v&eacute;rifications
                  de <em>fit and proper</em> sur les actionnaires et dirigeants,
                  et peut demander des compl&eacute;ments. Des frais de dossier
                  sont applicables lors du d&eacute;p&ocirc;t.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  &Eacute;tape 4 : D&eacute;livrance et conformit&eacute;
                  continue
                </h3>
                <p className="mt-2">
                  Une fois la licence accord&eacute;e, le VASP est soumis &agrave;
                  une supervision continue : rapports p&eacute;riodiques,
                  audits annuels, renouvellement de la licence. La FSC peut
                  suspendre ou r&eacute;voquer la licence en cas de
                  non-conformit&eacute;.
                </p>
              </div>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              5. FISCALITÉ CRYPTO
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              5. Fiscalit&eacute; crypto &agrave; Maurice : un avantage
              d&eacute;cisif
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                La fiscalit&eacute; mauricienne est l&apos;un des principaux
                attraits pour les acteurs crypto. Voici les points cl&eacute;s :
              </p>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  0&nbsp;% d&apos;imp&ocirc;t sur les plus-values (Capital
                  Gains Tax)
                </h3>
                <p className="mt-2">
                  Maurice ne pr&eacute;l&egrave;ve <strong>aucun imp&ocirc;t
                  sur les plus-values</strong>, quelle que soit la nature de
                  l&apos;actif &mdash; y compris les cryptomonnaies. Pour les
                  investisseurs individuels, toute appr&eacute;ciation de la
                  valeur d&apos;un actif virtuel est exon&eacute;r&eacute;e
                  d&apos;imp&ocirc;t lors de sa cession.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Imp&ocirc;t sur les soci&eacute;t&eacute;s : 15&nbsp;% flat
                </h3>
                <p className="mt-2">
                  Le taux d&apos;imposition des soci&eacute;t&eacute;s est de
                  15&nbsp;% &mdash; un taux unique, sans tranches progressives.
                  Ce taux s&apos;applique aux revenus d&apos;activit&eacute;
                  commerciale des VASP (frais de transaction, commissions, etc.).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Partial Exemption Regime (PER) 80&nbsp;%
                </h3>
                <p className="mt-2">
                  Le r&eacute;gime d&apos;exemption partielle permet aux
                  soci&eacute;t&eacute;s &eacute;ligibles de b&eacute;n&eacute;ficier
                  d&apos;une <strong>exemption de 80&nbsp;%</strong> sur
                  certaines cat&eacute;gories de revenus qualifi&eacute;s,
                  r&eacute;duisant le taux effectif d&apos;IS &agrave;{" "}
                  <strong>3&nbsp;%</strong>. Ce r&eacute;gime s&apos;applique
                  d&eacute;j&agrave; &agrave; de nombreux services financiers
                  sous licence FSC.
                </p>
                <p className="mt-2">
                  Concernant les VASP, l&apos;&eacute;ligibilit&eacute; au PER
                  d&eacute;pend de la classification des revenus et des
                  amendements l&eacute;gislatifs en cours. Le{" "}
                  <strong>Budget 2025-2026</strong> a signal&eacute;
                  l&apos;intention du gouvernement d&apos;&eacute;tendre le PER
                  aux revenus qualifi&eacute;s des VASP licenci&eacute;s
                  (exchange, transfer, safekeeping, administration), sous
                  r&eacute;serve des r&egrave;gles de substance. Il est
                  essentiel de se faire accompagner par un fiscaliste pour
                  &eacute;valuer pr&eacute;cis&eacute;ment sa position fiscale.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Autres avantages fiscaux
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li>
                    &bull; <strong>0&nbsp;%</strong> de retenue &agrave; la
                    source sur les dividendes
                  </li>
                  <li>
                    &bull; <strong>0&nbsp;%</strong> de droits de succession
                  </li>
                  <li>
                    &bull; Pas d&apos;ISF, pas de taxe fonci&egrave;re, pas de
                    taxe d&apos;habitation
                  </li>
                  <li>
                    &bull; Libre rapatriement des b&eacute;n&eacute;fices, sans
                    contr&ocirc;le des changes
                  </li>
                </ul>
              </div>
            </div>

            {/* Callout amber */}
            <div className="mt-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-amber-800">
                Attention : activit&eacute; commerciale vs. investissement
              </p>
              <p className="mt-2 text-sm text-amber-900">
                Si la MRA (Mauritius Revenue Authority) qualifie votre
                activit&eacute; crypto de <em>trading professionnel</em>{" "}
                (activit&eacute; commerciale r&eacute;guli&egrave;re), les gains
                peuvent &ecirc;tre requalifi&eacute;s en revenus imposables au
                taux de 15&nbsp;%. Pour les petites activit&eacute;s de trading
                local, un taux pr&eacute;f&eacute;rentiel de 1&nbsp;% peut
                s&apos;appliquer. Un accompagnement fiscal est indispensable
                pour s&eacute;curiser votre position.
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              6. REGULATORY SANDBOX
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              6. Regulatory Sandbox : tester avant de se lancer
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Depuis 2018, le gouvernement mauricien a mis en place un{" "}
                <strong>Regulatory Sandbox</strong> pour faciliter le
                d&eacute;veloppement des projets fintech et blockchain. Ce
                dispositif, g&eacute;r&eacute; par l&apos;Innovation Office de
                la FSC, permet aux entreprises de tester des produits et
                services innovants dans un environnement r&eacute;glement&eacute;
                contr&ocirc;l&eacute;.
              </p>

              <p>
                La FSC a mis &agrave; jour ses{" "}
                <strong>Regulatory Sandbox Guidelines</strong> fin 2023, avec un
                nouveau portail Fintech &amp; Innovation facilitant
                l&apos;acc&egrave;s aux ressources pour les porteurs de projets.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Avantages du Regulatory Sandbox
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li>
                    &bull; P&eacute;riode de test limit&eacute;e dans le temps
                    (12 &agrave; 24&nbsp;mois)
                  </li>
                  <li>
                    &bull; All&egrave;gement temporaire de certaines exigences
                    r&eacute;glementaires
                  </li>
                  <li>
                    &bull; Accompagnement personnalis&eacute; par la FSC
                  </li>
                  <li>
                    &bull; Transition fluide vers une licence compl&egrave;te en
                    fin de sandbox
                  </li>
                  <li>
                    &bull; Possibilit&eacute; de tester des mod&egrave;les
                    &eacute;conomiques crypto innovants (DeFi, tokenisation
                    d&apos;actifs, stablecoins)
                  </li>
                </ul>
              </div>

              <p>
                Le Regulatory Sandbox est particuli&egrave;rement adapt&eacute;
                aux startups et projets en phase d&apos;amor&ccedil;age qui
                souhaitent valider leur concept avant de s&apos;engager dans une
                proc&eacute;dure de licence compl&egrave;te.
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              7. AML/KYC OBLIGATIONS
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              7. Obligations AML/KYC pour les VASP
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                La conformit&eacute; AML/CFT (Anti-Money Laundering / Combating
                the Financing of Terrorism) est au c&oelig;ur du cadre
                r&eacute;glementaire mauricien pour les VASP. Depuis mars 2025,
                les obligations ont &eacute;t&eacute; renforc&eacute;es avec de
                nouvelles exigences.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Exigences AML/CFT renforc&eacute;es (mars 2025)
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  <li>
                    &bull;{" "}
                    <strong>
                      Syst&egrave;mes de surveillance des transactions
                    </strong>{" "}
                    obligatoires pour tous les VASP
                  </li>
                  <li>
                    &bull;{" "}
                    <strong>
                      Reporting en temps r&eacute;el des transferts
                      transfrontaliers
                    </strong>{" "}
                    au-del&agrave; de seuils sp&eacute;cifi&eacute;s
                  </li>
                  <li>
                    &bull;{" "}
                    <strong>
                      D&eacute;clarations renforc&eacute;es des
                      b&eacute;n&eacute;ficiaires effectifs
                    </strong>
                  </li>
                  <li>
                    &bull; Conformit&eacute; &agrave; la{" "}
                    <strong>Travel Rule</strong> (identification de
                    l&apos;exp&eacute;diteur et du destinataire pour chaque
                    transaction)
                  </li>
                  <li>
                    &bull; V&eacute;rification d&apos;identit&eacute; (KYC)
                    approfondie pour tous les clients
                  </li>
                  <li>
                    &bull; D&eacute;claration de soup&ccedil;on aupr&egrave;s de
                    la FIU (Financial Intelligence Unit)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Obligations sp&eacute;cifiques aux stablecoins
                </h3>
                <p className="mt-2">
                  Les &eacute;metteurs de stablecoins op&eacute;rant depuis
                  Maurice doivent d&eacute;sormais maintenir des{" "}
                  <strong>r&eacute;serves fiat 1:1</strong> dans des comptes
                  bancaires s&eacute;par&eacute;s &agrave; Maurice, avec des{" "}
                  <strong>audits trimestriels</strong> r&eacute;alis&eacute;s
                  par des auditeurs ind&eacute;pendants.
                </p>
              </div>
            </div>

            {/* Callout rouge */}
            <div className="mt-8 rounded-xl border-l-4 border-red-500 bg-red-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-red-800">
                Sanctions en cas de non-conformit&eacute;
              </p>
              <p className="mt-2 text-sm text-red-900">
                La FSC dispose de pouvoirs &eacute;tendus : suspension ou
                r&eacute;vocation de licence, amendes administratives,
                poursuites p&eacute;nales. L&apos;op&eacute;ration d&apos;un
                service d&apos;actifs virtuels sans licence VASP constitue une
                infraction p&eacute;nale &agrave; Maurice.
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              8. COMPARAISON INTERNATIONALE
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              8. Comparaison internationale : Maurice vs. Duba&iuml;,
              Singapour, Suisse
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Comment Maurice se positionne-t-elle face aux autres juridictions
              crypto de r&eacute;f&eacute;rence&nbsp;? Voici un comparatif
              synth&eacute;tique.
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="pb-3 pr-4 font-semibold text-slate-900">
                      Crit&egrave;re
                    </th>
                    <th className="pb-3 pr-4 font-semibold text-slate-900">
                      Maurice
                    </th>
                    <th className="pb-3 pr-4 font-semibold text-slate-900">
                      Duba&iuml; (VARA)
                    </th>
                    <th className="pb-3 pr-4 font-semibold text-slate-900">
                      Singapour (MAS)
                    </th>
                    <th className="pb-3 font-semibold text-slate-900">
                      Suisse (FINMA)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-800">
                      R&eacute;gulateur
                    </td>
                    <td className="py-3 pr-4 text-slate-600">FSC</td>
                    <td className="py-3 pr-4 text-slate-600">VARA</td>
                    <td className="py-3 pr-4 text-slate-600">MAS</td>
                    <td className="py-3 text-slate-600">FINMA</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-800">
                      D&eacute;lai de licence
                    </td>
                    <td className="py-3 pr-4 text-slate-600">5-9 mois</td>
                    <td className="py-3 pr-4 text-slate-600">4-8 semaines</td>
                    <td className="py-3 pr-4 text-slate-600">6-12 mois</td>
                    <td className="py-3 text-slate-600">6-12 mois</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-800">
                      Capital gains tax
                    </td>
                    <td className="py-3 pr-4 font-semibold text-emerald-700">
                      0&nbsp;%
                    </td>
                    <td className="py-3 pr-4 font-semibold text-emerald-700">
                      0&nbsp;%
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      0&nbsp;% (investisseurs)
                    </td>
                    <td className="py-3 text-slate-600">
                      0&nbsp;% (particuliers)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-800">
                      IS (corporate tax)
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      15&nbsp;% (eff. 3&nbsp;% PER)
                    </td>
                    <td className="py-3 pr-4 text-slate-600">9&nbsp;%</td>
                    <td className="py-3 pr-4 text-slate-600">17&nbsp;%</td>
                    <td className="py-3 text-slate-600">11-21&nbsp;%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-800">
                      Trait&eacute;s fiscaux
                    </td>
                    <td className="py-3 pr-4 font-semibold text-indigo-700">
                      37
                    </td>
                    <td className="py-3 pr-4 text-slate-600">Limit&eacute;s</td>
                    <td className="py-3 pr-4 text-slate-600">90+</td>
                    <td className="py-3 text-slate-600">100+</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-800">
                      Co&ucirc;t de vie
                    </td>
                    <td className="py-3 pr-4 font-semibold text-emerald-700">
                      Bas
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      Tr&egrave;s &eacute;lev&eacute;
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      Tr&egrave;s &eacute;lev&eacute;
                    </td>
                    <td className="py-3 text-slate-600">
                      Tr&egrave;s &eacute;lev&eacute;
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-800">
                      Langue
                    </td>
                    <td className="py-3 pr-4 text-slate-600">FR / EN</td>
                    <td className="py-3 pr-4 text-slate-600">EN / AR</td>
                    <td className="py-3 pr-4 text-slate-600">EN / ZH</td>
                    <td className="py-3 text-slate-600">DE / FR / IT</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-800">
                      March&eacute; cible
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      Afrique, Asie, Europe
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      MENA, Asie du Sud
                    </td>
                    <td className="py-3 pr-4 text-slate-600">
                      Asie du Sud-Est
                    </td>
                    <td className="py-3 text-slate-600">Europe</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Callout indigo */}
            <div className="mt-8 rounded-xl border-l-4 border-indigo-600 bg-indigo-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-indigo-800">
                L&apos;avantage Maurice
              </p>
              <p className="mt-2 text-sm text-indigo-900">
                Maurice offre le meilleur rapport qualit&eacute;-prix pour les
                entrepreneurs crypto francophones : une r&eacute;gulation
                cr&eacute;dible, une fiscalit&eacute; ultra-comp&eacute;titive,
                un co&ucirc;t de vie mod&eacute;r&eacute; et un acc&egrave;s
                naturel aux march&eacute;s africains en pleine croissance. Le
                tout dans un cadre de vie exceptionnel (1er en Afrique selon
                Mercer).
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              9. COMPTABILITÉ CRYPTO & IFRS
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              9. Comptabilit&eacute; crypto : normes IFRS et valorisation
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                La comptabilit&eacute; des actifs virtuels pose des
                d&eacute;fis sp&eacute;cifiques qui n&eacute;cessitent une
                expertise pointue en normes IFRS. BD Star Management Services,
                la branche comptable du groupe Vanille Strat&eacute;gie, dispose
                de l&apos;exp&eacute;rience n&eacute;cessaire pour accompagner
                les VASP dans leur conformit&eacute; comptable.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Classification comptable des crypto-actifs
                </h3>
                <p className="mt-2">
                  Sous les normes IFRS, les cryptomonnaies sont
                  g&eacute;n&eacute;ralement class&eacute;es comme{" "}
                  <strong>actifs incorporels</strong> (IAS&nbsp;38) ou comme{" "}
                  <strong>stocks</strong> (IAS&nbsp;2) selon l&apos;usage
                  qu&apos;en fait l&apos;entit&eacute;. Les stablecoins et
                  tokens utilitaires peuvent n&eacute;cessiter des traitements
                  sp&eacute;cifiques.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  D&eacute;fis de valorisation
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li>
                    &bull; Volatilit&eacute; extr&ecirc;me des cours (choix du
                    prix de r&eacute;f&eacute;rence, date de cl&ocirc;ture)
                  </li>
                  <li>
                    &bull; Forks, airdrops et staking rewards &mdash; traitement
                    comptable et fiscal
                  </li>
                  <li>
                    &bull; D&eacute;pr&eacute;ciation et tests d&apos;impairment
                    (IAS&nbsp;36)
                  </li>
                  <li>
                    &bull; Revenus DeFi (yield farming, liquidity mining)
                  </li>
                  <li>
                    &bull; Consolidation multi-wallets et multi-blockchains
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  L&apos;expertise BD Star
                </h3>
                <p className="mt-2">
                  Notre &eacute;quipe, dirig&eacute;e par Didier Laroussinie
                  (40+&nbsp;ans d&apos;exp&eacute;rience, parcours Deloitte,
                  sp&eacute;cialiste consolidation IFRS), prend en charge
                  l&apos;ensemble de la cha&icirc;ne comptable et fiscale des
                  VASP :
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li>
                    &bull; Tenue comptable en normes IFRS adapt&eacute;e aux
                    actifs virtuels
                  </li>
                  <li>
                    &bull; D&eacute;clarations MRA et conformit&eacute; fiscale
                  </li>
                  <li>
                    &bull; Rapports r&eacute;glementaires FSC (reporting
                    p&eacute;riodique)
                  </li>
                  <li>
                    &bull; Pr&eacute;paration des audits annuels
                  </li>
                  <li>
                    &bull; Conseil en structuration fiscale (PER, trait&eacute;s
                    de non-double imposition)
                  </li>
                  <li>
                    &bull; Suivi en temps r&eacute;el via notre plateforme OKE
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              10. CHECKLIST PRATIQUE
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              10. Checklist : lancer votre projet crypto &agrave; Maurice
            </h2>

            <div className="mt-6 space-y-3 text-base leading-relaxed text-slate-700">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                  1
                </span>
                <p>
                  <strong>&Eacute;tude de faisabilit&eacute;</strong> &mdash;
                  Analyser votre mod&egrave;le &eacute;conomique, identifier la
                  classe de licence VASP adapt&eacute;e (M, O, R, I, S).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                  2
                </span>
                <p>
                  <strong>Incorporation</strong> &mdash; Cr&eacute;er votre
                  soci&eacute;t&eacute; mauricienne (Domestic Company ou GBC),
                  ouvrir un compte bancaire.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                  3
                </span>
                <p>
                  <strong>Substance</strong> &mdash; &Eacute;tablir un bureau
                  physique, recruter au minimum 2&nbsp;directeurs
                  r&eacute;sidents, nommer Compliance Officer et MLRO.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                  4
                </span>
                <p>
                  <strong>Dossier FSC</strong> &mdash; Business plan, programme
                  AML/CFT, infrastructure technologique, preuve de capital.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                  5
                </span>
                <p>
                  <strong>Licence VASP</strong> &mdash; Soumission du dossier
                  &agrave; la FSC, examen fit &amp; proper, obtention (5
                  &agrave; 9&nbsp;mois).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                  6
                </span>
                <p>
                  <strong>Comptabilit&eacute; &amp; conformit&eacute;</strong>{" "}
                  &mdash; Mise en place de la tenue comptable IFRS, reporting
                  FSC, d&eacute;clarations MRA, audit annuel.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                  7
                </span>
                <p>
                  <strong>Optimisation fiscale</strong> &mdash; Analyser
                  l&apos;&eacute;ligibilit&eacute; au PER 80&nbsp;%,
                  structurer via les trait&eacute;s de non-double imposition.
                </p>
              </div>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              SOURCES OFFICIELLES
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Sources officielles
            </h2>

            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>
                &bull;{" "}
                <a
                  href="https://www.fscmauritius.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 underline hover:text-indigo-900"
                >
                  Financial Services Commission (FSC)
                </a>{" "}
                &mdash; R&eacute;gulateur des VASP &agrave; Maurice
              </li>
              <li>
                &bull;{" "}
                <a
                  href="https://www.fscmauritius.org/media/119928/the-virtual-asset-and-initial-token-offering-services-act.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 underline hover:text-indigo-900"
                >
                  VAITOS Act 2021 (texte int&eacute;gral)
                </a>{" "}
                &mdash; Loi sur les actifs virtuels et ITO
              </li>
              <li>
                &bull;{" "}
                <a
                  href="https://www.fiumauritius.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 underline hover:text-indigo-900"
                >
                  Financial Intelligence Unit (FIU)
                </a>{" "}
                &mdash; D&eacute;clarations de soup&ccedil;on et AML
              </li>
              <li>
                &bull;{" "}
                <a
                  href="https://www.mra.mu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 underline hover:text-indigo-900"
                >
                  Mauritius Revenue Authority (MRA)
                </a>{" "}
                &mdash; Administration fiscale
              </li>
              <li>
                &bull;{" "}
                <a
                  href="https://edbmauritius.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 underline hover:text-indigo-900"
                >
                  Economic Development Board (EDB)
                </a>{" "}
                &mdash; Permis de r&eacute;sidence et investissement
              </li>
            </ul>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══════════════════════════════════════════════════════════
              CTA FINAL
          ══════════════════════════════════════════════════════════ */}
          <section className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Lancez votre projet crypto &agrave; Maurice
              </h2>
              <p className="mt-4 text-base leading-relaxed text-indigo-200">
                De l&apos;&eacute;tude de faisabilit&eacute; &agrave;
                l&apos;obtention de la licence VASP, en passant par la
                cr&eacute;ation de soci&eacute;t&eacute;, la comptabilit&eacute;
                IFRS et l&apos;optimisation fiscale &mdash; notre &eacute;quipe
                vous accompagne &agrave; chaque &eacute;tape.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-indigo-300">
                <li>
                  &bull; Identification de la classe de licence VASP
                  adapt&eacute;e
                </li>
                <li>
                  &bull; Pr&eacute;paration du dossier FSC cl&eacute; en main
                </li>
                <li>
                  &bull; Structuration fiscale optimale (PER, trait&eacute;s)
                </li>
                <li>
                  &bull; Tenue comptable IFRS sp&eacute;cialis&eacute;e crypto
                </li>
                <li>
                  &bull; Conformit&eacute; AML/CFT et reporting
                  r&eacute;glementaire
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                 
                  size="lg"
                  className="bg-indigo-500 hover:bg-indigo-600"
                >
                  <Link href="/contact">
                    Consultation gratuite &rarr;
                  </Link>
                </Button>
                <Button
                 
                  size="lg"
                  variant="outline"
                  className="border-indigo-400 text-indigo-200 hover:bg-indigo-800"
                >
                  <Link href="/services/creation-société">
                    Cr&eacute;er ma soci&eacute;t&eacute; &rarr;
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 text-sm font-bold text-white">
                  DL
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {founder.name}
                  </p>
                  <p className="text-xs text-indigo-300">{founder.title}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
