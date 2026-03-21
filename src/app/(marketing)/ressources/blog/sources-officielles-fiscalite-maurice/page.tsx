import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";

export const metadata: Metadata = {
  title:
    "Sources officielles de la reglementation fiscale à Maurice — Guide de reference",
  description:
    "Toutes les sources officielles pour comprendre la fiscalité mauricienne : Laws of Mauritius, MRA, Government Gazette, conventions fiscales, Finance Act. Guide de reference par Didier Laroussinie, Expert-Comptable.",
  openGraph: {
    title:
      "Sources officielles de la reglementation fiscale à Maurice — Guide de reference",
    description:
      "Toutes les sources officielles pour comprendre la fiscalité mauricienne : Laws of Mauritius, MRA, Government Gazette, conventions fiscales, Finance Act.",
    type: "article",
  },
};

export default function SourcesOfficiellesFiscaliteMauricePage() {
  return (
    <>
      {/* ============================================================ */}
      {/* Hero Section */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ressources/blog"
            className="text-sm text-blue-400 hover:underline"
          >
            &larr; Tous les articles
          </Link>
          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300">
              Reference
            </span>
            <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-medium text-orange-300">
              Fiscalite
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">· 22 min</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Sources officielles de la reglementation fiscale à Maurice — Guide
            de reference
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Ou trouver les textes de loi, les reglements, les conventions
            fiscales et les interpretations administratives qui regissent la
            fiscalité mauricienne ? Ce guide recense et explique chaque source
            officielle, pour vous permettre de verifier par vous-meme.
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

      {/* ============================================================ */}
      {/* Section 1 — Introduction */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            1. Pourquoi connaitre les sources officielles est essentiel
          </h2>
          <p>
            A Maurice, la fiscalité evolue presque chaque annee. Le Finance Bill
            annuel modifie les taux, introduit de nouvelles obligations et
            ajuste les regimes existants. Pour tout investisseur, entrepreneur ou
            conseiller, il est indispensable de savoir ou trouver les textes a
            jour et de comprendre leur hierarchie juridique.
          </p>
          <p>
            Trop souvent, les decisions d&apos;implantation ou de structuration
            sont basees sur des articles de blog, des forums ou des conseils de
            seconde main. Or, en fiscalité internationale, une information
            obsolete ou approximative peut couter tres cher : redressement
            fiscal, pénalités, voire remise en cause de toute une structure.
          </p>
          <p>
            Ce guide recense les sources primaires — celles qui font autorite —
            et vous explique comment les utiliser. Il constitue un complement
            indispensable a nos articles techniques sur le{" "}
            <Link
              href="/ressources/blog/transfer-pricing-maurice-2025"
              className="text-blue-600 hover:underline"
            >
              Transfer Pricing
            </Link>
            , la{" "}
            <Link
              href="/ressources/blog/succession-internationale-france-maurice"
              className="text-blue-600 hover:underline"
            >
              succession internationale France-Maurice
            </Link>{" "}
            ou les{" "}
            <Link
              href="/ressources/blog/substance-requirements-maurice"
              className="text-blue-600 hover:underline"
            >
              substance requirements
            </Link>
            .
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose">
            <p className="text-sm font-semibold text-blue-800">
              Principe fondamental
            </p>
            <p className="mt-1 text-sm text-blue-700">
              En fiscalite, seule la loi publiee fait autorite. Les articles de
              presse, les sites de conseil et meme les circulaires
              administratives ne sont que des interpretations. Remontez toujours
              au texte source pour valider une information.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 2 — Laws of Mauritius */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            2. Laws of Mauritius — Attorney General&apos;s Office
          </h2>
          <p>
            Le site{" "}
            <a
              href="https://lawsofmauritius.govmu.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              lawsofmauritius.govmu.org
            </a>{" "}
            est maintenu par le Bureau de l&apos;Attorney General de la
            Republique de Maurice. Il constitue la source la plus complete pour
            acceder aux lois consolidees du pays.
          </p>
          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Ce que vous y trouverez
          </h3>
          <ul>
            <li>
              <strong>Les lois consolidees</strong> (Revised Laws of Mauritius) :
              toutes les lois en vigueur, integrant les amendements successifs
              apportes par les Finance Acts et autres lois modificatives.
            </li>
            <li>
              <strong>L&apos;Income Tax Act 1995</strong> — la loi fondamentale
              en matiere d&apos;impot sur le revenu et d&apos;impot sur les
              sociétés à Maurice.
            </li>
            <li>
              <strong>La Value Added Tax Act 1998</strong> — le regime de TVA
              mauricien.
            </li>
            <li>
              <strong>Les reglements (Regulations)</strong> — textes
              d&apos;application pris en vertu des lois principales.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Comment naviguer sur le site
          </h3>
          <p>
            Utilisez l&apos;onglet{" "}
            <strong>&ldquo;Legislations&rdquo;</strong> dans le menu principal.
            Vous accederez à un index alphabetique de toutes les lois. Les
            textes fiscaux se trouvent principalement sous les lettres I (Income
            Tax), V (Value Added Tax), C (Customs, Companies) et F (Financial
            Services).
          </p>
          <p>
            Chaque loi est présentée dans sa version consolidee, avec un
            historique des amendements. Vous pouvez telecharger les textes au
            format PDF pour archivage.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose">
            <p className="text-sm font-semibold text-blue-800">
              Source de reference
            </p>
            <p className="mt-1 text-sm text-blue-700">
              C&apos;est la source la plus formelle pour acceder aux versions
              integrales et consolidees des lois mauriciennes. Lorsque vous devez
              citer un texte dans un avis fiscal, un rapport ou une
              correspondance officielle, c&apos;est ici que vous devez le
              chercher.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 3 — MRA */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            3. Mauritius Revenue Authority (MRA)
          </h2>
          <p>
            La{" "}
            <a
              href="https://www.mra.mu/legislations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              Mauritius Revenue Authority (mra.mu)
            </a>{" "}
            est l&apos;administration fiscale de Maurice — l&apos;equivalent de
            la DGFIP en France. Son site web est une mine d&apos;informations
            pratiques pour les contribuables et les professionnels.
          </p>
          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Acts &amp; Regulations
          </h3>
          <p>
            La section{" "}
            <a
              href="https://www.mra.mu/legislations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Legislations
            </a>{" "}
            du site de la MRA donne acces aux textes de loi sous un angle
            pratique. Vous y trouverez les Acts principaux, les Finance Acts
            annuels et les reglements d&apos;application.
          </p>
          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Les Statements of Practice (SP)
          </h3>
          <p>
            Les <strong>Statements of Practice</strong> sont des notes
            d&apos;interpretation officielles publiees par la MRA sur des points
            techniques precis. Elles n&apos;ont pas force de loi au sens strict,
            mais elles indiquent la position de l&apos;administration fiscale sur
            un sujet donne. En pratique, les contribuables qui suivent les SP
            sont rarement contestes.
          </p>
          <p>
            Exemples de sujets couverts par les SP : traitement fiscal des
            avantages en nature, règles d&apos;amortissement, méthodes de
            calcul du revenu imposable, obligations de retenue à la source.
          </p>
          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Les Rulings
          </h3>
          <p>
            Les <strong>Rulings</strong> sont des decisions rendues par le
            Directeur General de la MRA sur des cas specifiques soumis par des
            contribuables. Ils sont publies de maniere anonymisee et constituent
            une jurisprudence administrative precieuse. Avant de structurer une
            operation complexe, il est utile de verifier si un Ruling existant
            couvre un cas similaire au votre.
          </p>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose">
            <p className="text-sm font-semibold text-amber-800">
              Mise en garde
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Les versions des lois disponibles sur le site de la MRA sont
              fournies a titre indicatif (&ldquo;for reference purposes
              only&rdquo;). En cas de divergence avec le texte publie dans la
              Government Gazette ou sur le site de l&apos;Attorney General, ce
              sont ces derniers qui font foi. Verifiez toujours la date de
              mise a jour.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 4 — Government Gazette */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            4. La Government Gazette — Journal officiel de la Republique
          </h2>
          <p>
            La <strong>Government Gazette</strong> est le journal officiel de la
            Republique de Maurice. C&apos;est l&apos;equivalent du Journal
            officiel de la Republique francaise (JORF). Son role est
            fondamental : un texte de loi n&apos;a force de loi qu&apos;une
            fois publie dans la Gazette.
          </p>
          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Pourquoi la Gazette est incontournable
          </h3>
          <ul>
            <li>
              <strong>Date d&apos;entree en vigueur</strong> : de nombreuses lois
              mauriciennes prevoient une entree en vigueur &ldquo;upon
              publication in the Gazette&rdquo; ou à une date fixee par
              proclamation. Pour verifier si une disposition est en vigueur, la
              Gazette est l&apos;unique source fiable.
            </li>
            <li>
              <strong>Proclamations et avis</strong> : les taux de change
              officiels, les dates limites de depot, les appels a candidatures
              pour certains programmes — tout passe par la Gazette.
            </li>
            <li>
              <strong>Reglements</strong> : les Regulations (textes
              d&apos;application) sont publiees dans la Gazette avant
              d&apos;etre integrees aux versions consolidees des lois.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Comment y acceder
          </h3>
          <p>
            La Government Gazette est accessible via le site du{" "}
            <a
              href="https://pmo.govmu.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              Prime Minister&apos;s Office (pmo.govmu.org)
            </a>
            . Les editions sont publiees chaque semaine et archivees au format
            PDF. Utilisez la fonction de recherche pour localiser une loi ou un
            reglement specifique par son numero ou son titre.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose">
            <p className="text-sm font-semibold text-blue-800">
              Conseil pratique
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Lorsqu&apos;un client nous interroge sur la date d&apos;entree en
              vigueur d&apos;une disposition, nous remontons
              systematiquement à la Government Gazette. C&apos;est le seul
              moyen de donner une reponse definitive et juridiquement fondee.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 5 — Tableau recapitulatif des textes cles */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            5. Tableau recapitulatif des textes cles
          </h2>
          <p className="mt-4 text-slate-600">
            Voici les principales lois mauriciennes que tout investisseur ou
            professionnel doit connaitre. Chaque texte est disponible sur{" "}
            <a
              href="https://lawsofmauritius.govmu.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              lawsofmauritius.govmu.org
            </a>
            .
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Texte de loi
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Domaine
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Points cles
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Income Tax Act 1995
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Impot sur le revenu et les societes
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Taux IS 15%, regime de Partial Exemption, retenues a la
                    source, Transfer Pricing (depuis 2025)
                  </td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Value Added Tax Act 1998
                  </td>
                  <td className="px-4 py-3 text-slate-600">TVA</td>
                  <td className="px-4 py-3 text-slate-600">
                    Taux standard 15%, seuil d&apos;enregistrement, exonerations,
                    mecanisme de remboursement
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Customs Act 1988
                  </td>
                  <td className="px-4 py-3 text-slate-600">Douanes</td>
                  <td className="px-4 py-3 text-slate-600">
                    Droits de douane, procedures d&apos;importation/exportation,
                    zones franches
                  </td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Registration Duty Act
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Droits d&apos;enregistrement
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Droits sur les transferts immobiliers, cessions de parts,
                    actes notaries
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Mauritius Revenue Authority Act 2004
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Organisation de la MRA
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Pouvoirs de controle, procedures de redressement, droits des
                    contribuables
                  </td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Financial Services Act 2007
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Services financiers
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Licences GBC, regulation FSC, obligations de conformite,
                    substance requirements
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Companies Act 2001
                  </td>
                  <td className="px-4 py-3 text-slate-600">Droit des societes</td>
                  <td className="px-4 py-3 text-slate-600">
                    Constitution, administration, obligations des directeurs,
                    liquidation
                  </td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Trusts Act 2001
                  </td>
                  <td className="px-4 py-3 text-slate-600">Trusts</td>
                  <td className="px-4 py-3 text-slate-600">
                    Constitution de trusts, obligations du trustee, fiscalité des
                    trusts
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Workers&apos; Rights Act 2019
                  </td>
                  <td className="px-4 py-3 text-slate-600">Droit du travail</td>
                  <td className="px-4 py-3 text-slate-600">
                    Contrats, congés, licenciement, CSG, charges patronales
                  </td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    Virtual Asset and Initial Token Offering Services Act 2021
                  </td>
                  <td className="px-4 py-3 text-slate-600">Crypto / VASP</td>
                  <td className="px-4 py-3 text-slate-600">
                    Licence VASP, obligations AML/KYC, custody, echanges
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Tous ces textes sont accessibles gratuitement sur le site de
            l&apos;Attorney General. Pour le Workers&apos; Rights Act, voir
            aussi notre article{" "}
            <Link
              href="/ressources/blog/droit-travail-maurice-workers-rights-act"
              className="text-blue-600 hover:underline"
            >
              Droit du travail à Maurice
            </Link>
            . Pour les licences VASP, voir{" "}
            <Link
              href="/ressources/blog/crypto-vasp-licence-maurice"
              className="text-blue-600 hover:underline"
            >
              Crypto et licence VASP à Maurice
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 6 — Le Finance Bill annuel */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            6. Le Finance Bill annuel — le moteur de l&apos;evolution fiscale
          </h2>
          <p>
            A Maurice, la fiscalité change presque chaque annee via le{" "}
            <strong>Finance Bill</strong> (projet de loi de finances), qui
            devient le <strong>Finance Act</strong> une fois adopte par
            l&apos;Assemblee nationale. C&apos;est l&apos;equivalent de la loi
            de finances en France.
          </p>
          <p>
            Le Finance Bill est traditionnellement présenté entre juin et
            aout, à la suite du discours budgetaire du ministre des Finances.
            Il modifie l&apos;Income Tax Act, la VAT Act, le Customs Act et
            d&apos;autres lois sectorielles. Chaque annee, il apporte son lot de
            changements : nouveaux taux, nouvelles obligations, nouveaux regimes
            d&apos;incitation.
          </p>
          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            L&apos;importance des versions consolidees
          </h3>
          <p>
            Le Finance Act ne remplace pas l&apos;Income Tax Act — il le
            modifie. Pour connaitre le droit en vigueur, il faut donc lire la
            version <strong>consolidee</strong> de l&apos;Income Tax Act,
            c&apos;est-a-dire la version qui integre tous les amendements
            successifs. C&apos;est exactement ce que propose le site de
            l&apos;Attorney General.
          </p>
          <p>
            En pratique, il y a toujours un delai entre l&apos;adoption du
            Finance Act et la mise a jour des versions consolidees. Pendant cette
            periode transitoire, il faut lire le Finance Act en parallele de la
            version consolidee precedente — un exercice technique qui demande de
            l&apos;expertise.
          </p>
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 not-prose">
            <p className="text-sm font-semibold text-green-800">
              Ressource Vanille Strategie
            </p>
            <p className="mt-1 text-sm text-green-700">
              Nous avons analyse le Finance Act 2025 (Act No. 18 of 2025) dans
              le detail. Consultez notre article complet sur le{" "}
              <Link
                href="/ressources/blog/transfer-pricing-maurice-2025"
                className="text-green-800 underline hover:text-green-900"
              >
                Transfer Pricing à Maurice
              </Link>{" "}
              et telechargez le texte officiel :{" "}
              <a
                href="/documents/finance-act-2025-mauritius.pdf"
                className="text-green-800 underline hover:text-green-900"
              >
                Finance Act 2025 (PDF, 1.6 MB)
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 7 — Convention fiscale France-Maurice */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            7. La convention fiscale France-Maurice
          </h2>
          <p>
            La convention de non-double imposition entre la France et Maurice a
            ete <strong>signee le 11 decembre 1980</strong> et{" "}
            <strong>amendee par avenant le 23 juin 2011</strong>. Elle regit
            la repartition des droits d&apos;imposer entre les deux pays pour
            les personnes (physiques et morales) qui ont des liens avec les deux
            juridictions.
          </p>
          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Les points essentiels de la convention
          </h3>
          <ul>
            <li>
              <strong>Residence fiscale</strong> (article 4) : critères de
              determination de l&apos;Etat de residence en cas de double
              residence.
            </li>
            <li>
              <strong>Revenus immobiliers</strong> (article 6) : imposables dans
              l&apos;Etat ou se situe l&apos;immeuble.
            </li>
            <li>
              <strong>Benefices des entreprises</strong> (article 7) : imposables
              dans l&apos;Etat de residence sauf en cas d&apos;etablissement
              stable.
            </li>
            <li>
              <strong>Dividendes, interets, redevances</strong> (articles 10, 11,
              12) : repartition des droits d&apos;imposer avec retenues a la
              source plafonnees.
            </li>
            <li>
              <strong>Pensions</strong> (article 18) : les pensions privees sont
              imposables dans l&apos;Etat de residence — un point cle pour les
              retraites installes à Maurice.
            </li>
            <li>
              <strong>Elimination de la double imposition</strong> (article 23) :
              méthode du credit d&apos;impot.
            </li>
          </ul>
          <p>
            Pour une analyse approfondie de la convention dans le contexte
            successoral, consultez notre article sur la{" "}
            <Link
              href="/ressources/blog/succession-internationale-france-maurice"
              className="text-blue-600 hover:underline"
            >
              succession internationale France-Maurice
            </Link>
            .
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose">
            <p className="text-sm font-semibold text-blue-800">
              Document a telecharger
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Telechargez le texte consolide de la convention fiscale
              France-Maurice directement depuis notre site :{" "}
              <a
                href="/documents/convention-fiscale-france-maurice.pdf"
                className="text-blue-800 underline hover:text-blue-900"
              >
                Convention fiscale France-Maurice (PDF)
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 8 — Autres sources utiles */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            8. Autres sources utiles
          </h2>
          <p>
            Au-dela des trois sources primaires (Laws of Mauritius, MRA,
            Government Gazette), plusieurs institutions mauriciennes et
            internationales publient des informations precieuses pour les
            investisseurs et les professionnels.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Institutions mauriciennes
          </h3>
          <ul>
            <li>
              <a
                href="https://www.fscmauritius.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                FSC Mauritius (fscmauritius.org)
              </a>{" "}
              — Financial Services Commission. Delivre les licences GBC et VASP,
              publie les guides de conformite et les circulaires reglementaires.
              Incontournable pour toute activité de services financiers. Voir
              aussi notre article{" "}
              <Link
                href="/ressources/blog/crypto-vasp-licence-maurice"
                className="text-blue-600 hover:underline"
              >
                Licence VASP à Maurice
              </Link>
              .
            </li>
            <li>
              <a
                href="https://edbmauritius.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                EDB Mauritius (edbmauritius.org)
              </a>{" "}
              — Economic Development Board. Gere les Occupation Permits, les
              programmes d&apos;investissement (IRS, PDS, Smart City) et la
              promotion de Maurice comme destination business. Voir notre
              article{" "}
              <Link
                href="/ressources/blog/edb-mauritius-role-programmes"
                className="text-blue-600 hover:underline"
              >
                Le role de l&apos;EDB
              </Link>
              .
            </li>
            <li>
              <a
                href="https://www.mipa.mu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                MIPA (mipa.mu)
              </a>{" "}
              — Mauritius Institute of Professional Accountants. Fixe les normes
              comptables applicables à Maurice (IFRS pour les entites d&apos;interet
              public, IFRS for SMEs pour les autres). BD Star est inscrit
              aupres du MIPA.
            </li>
            <li>
              <a
                href="https://companies.govmu.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                CBRD (companies.govmu.org)
              </a>{" "}
              — Companies and Business Registration Department. Le registre
              des sociétés mauriciennes. Vous pouvez y verifier
              l&apos;existence d&apos;une societe, consulter ses directeurs
              enregistres et obtenir des copies d&apos;actes constitutifs.
            </li>
            <li>
              <a
                href="https://www.bom.mu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                Bank of Mauritius (bom.mu)
              </a>{" "}
              — Banque centrale. Publie les taux de change officiels, la
              politique monetaire, les statistiques economiques et les
              circulaires bancaires. Indispensable pour les questions de change
              et de rapatriement de fonds. Voir notre article{" "}
              <Link
                href="/ressources/blog/devises-mur-conversion-maurice"
                className="text-blue-600 hover:underline"
              >
                Devises et conversion MUR
              </Link>
              .
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Sources internationales et analyses de cabinets
          </h3>
          <ul>
            <li>
              <strong>PwC Tax Summaries — Mauritius</strong> : resume annuel du
              systeme fiscal mauricien, mis a jour apres chaque Finance Act.
              Synthetique et bien structure.
            </li>
            <li>
              <strong>KPMG — Mauritius Tax Guide</strong> : analyse detaillee
              des regimes fiscaux, y compris les conventions fiscales et les
              regimes d&apos;incitation.
            </li>
            <li>
              <strong>EY — Worldwide Tax Guide</strong> : fiche pays Mauritius
              avec les taux, les bases d&apos;imposition et les principaux
              regimes.
            </li>
            <li>
              <strong>Deloitte — International Tax Highlights</strong> : resume
              compare des systemes fiscaux, utile pour le benchmarking entre
              juridictions.
            </li>
          </ul>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose">
            <p className="text-sm font-semibold text-amber-800">
              Rappel important
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Les analyses des Big Four (PwC, KPMG, EY, Deloitte) sont
              d&apos;excellents outils de veille et de synthese. Mais ce ne
              sont pas des sources primaires. Elles peuvent contenir des erreurs,
              des simplifications ou des retards de mise a jour. Repartez
              toujours du texte de loi original pour valider un point precis.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 9 — L'expertise Vanille Strategie */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            9. L&apos;expertise Vanille Strategie — de la lecture a
            l&apos;application
          </h2>
          <p>
            Connaitre les sources est une chose. Les lire, les interpreter et
            les appliquer correctement en est une autre. C&apos;est la que
            l&apos;expertise de Vanille Strategie fait la difference.
          </p>
          <p>
            {founder.name} assure une veille permanente sur les evolutions
            legislatives mauriciennes. Chaque Finance Bill est analyse des sa
            publication, chaque Statement of Practice est decortique, chaque
            Ruling pertinent est integre a notre base de connaissances.
          </p>
          <p>
            Chez BD Star Management Services, notre equipe comptable et fiscale
            applique ces textes au quotidien pour nos clients : declarations
            d&apos;impots, calcul des charges sociales, mise en conformite TVA,
            preparation des dossiers de Transfer Pricing, demandes de Rulings
            aupres de la MRA.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose">
            <p className="text-sm font-semibold text-blue-800">
              Notre engagement
            </p>
            <p className="mt-1 text-sm text-blue-700">
              &ldquo;Nous ne nous contentons pas de lire les textes — nous les
              appliquons. Chaque conseil que nous donnons est ancre dans le
              texte de loi, pas dans une interpretation de seconde main. C&apos;est
              ce qui differencie un cabinet d&apos;expertise comptable d&apos;un
              simple intermediaire.&rdquo; — {founder.name},{" "}
              {founder.title}
            </p>
          </div>
          <p className="mt-6">
            Pour approfondir un sujet, consultez nos autres articles de
            reference :
          </p>
          <ul>
            <li>
              <Link
                href="/ressources/blog/transfer-pricing-maurice-2025"
                className="text-blue-600 hover:underline"
              >
                Transfer Pricing à Maurice — Nouvelles obligations du Finance
                Act 2025
              </Link>
            </li>
            <li>
              <Link
                href="/ressources/blog/substance-requirements-maurice"
                className="text-blue-600 hover:underline"
              >
                Substance requirements à Maurice
              </Link>
            </li>
            <li>
              <Link
                href="/ressources/blog/succession-internationale-france-maurice"
                className="text-blue-600 hover:underline"
              >
                Succession internationale France-Maurice
              </Link>
            </li>
            <li>
              <Link
                href="/ressources/blog/comparatif-maurice-maroc-portugal-dubai"
                className="text-blue-600 hover:underline"
              >
                Comparatif Maurice vs Maroc, Portugal, Dubai
              </Link>
            </li>
            <li>
              <Link
                href="/ressources/blog/crypto-vasp-licence-maurice"
                className="text-blue-600 hover:underline"
              >
                Crypto et licence VASP à Maurice
              </Link>
            </li>
            <li>
              <Link
                href="/ressources/blog/droit-travail-maurice-workers-rights-act"
                className="text-blue-600 hover:underline"
              >
                Droit du travail à Maurice — Workers&apos; Rights Act
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Sources officielles */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-slate-700">
            Sources citees dans cet article
          </h3>
          <ul className="mt-3 space-y-1 text-xs text-slate-500">
            <li>
              Laws of Mauritius — Attorney General&apos;s Office —{" "}
              <a
                href="https://lawsofmauritius.govmu.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                lawsofmauritius.govmu.org
              </a>
            </li>
            <li>
              Mauritius Revenue Authority —{" "}
              <a
                href="https://www.mra.mu/legislations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                mra.mu/legislations
              </a>
            </li>
            <li>
              Government Gazette — Prime Minister&apos;s Office —{" "}
              <a
                href="https://pmo.govmu.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                pmo.govmu.org
              </a>
            </li>
            <li>
              Finance Act 2025 (Act No. 18 of 2025) —{" "}
              <a
                href="/documents/finance-act-2025-mauritius.pdf"
                className="text-blue-600 hover:underline"
              >
                Telecharger le PDF
              </a>
            </li>
            <li>
              Convention fiscale France-Maurice (1980, amendee 2011) —{" "}
              <a
                href="/documents/convention-fiscale-france-maurice.pdf"
                className="text-blue-600 hover:underline"
              >
                Telecharger le PDF
              </a>
            </li>
            {officialSources.map((s) => (
              <li key={s.url}>
                {s.name} ({s.description}) —{" "}
                <a
                  href={s.url}
                  target={s.url.startsWith("/") ? undefined : "_blank"}
                  rel={
                    s.url.startsWith("/")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="text-blue-600 hover:underline"
                >
                  {s.url.startsWith("/") ? "Telecharger" : s.url}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-400">
            Cet article est fourni a titre informatif et ne constitue pas un
            conseil fiscal personnalise. La legislation mauricienne evolue
            frequemment — verifiez toujours la date de derniere mise a jour des
            textes cites. Pour un conseil adapte à votre situation, contactez
            nos experts.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA Final */}
      {/* ============================================================ */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            Besoin d&apos;un eclairage sur un texte fiscal mauricien ?
          </h2>
          <p className="mt-3 text-slate-400">
            Etude de faisabilite gratuite par {founder.name},{" "}
            {founder.title}. Analyse de textes, veille legislative, mise en
            conformite — nous vous accompagnons avec rigueur et precision.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 px-10 hover:bg-blue-700"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
