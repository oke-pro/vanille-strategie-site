import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title:
    "Income Tax Act 1995 — Analyse commentée des dispositions clés pour les investisseurs | Vanille Stratégie",
  description:
    "Analyse commentée par Didier Laroussinie des articles clés de l'Income Tax Act 1995 de Maurice : résidence fiscale (section 73), taux 15 %, dividendes, Partial Exemption Regime, CSG.",
  keywords: [
    "Income Tax Act 1995 Maurice",
    "section 73 résident fiscal Maurice",
    "taux imposition 15% Maurice",
    "dividendes Maurice exemption",
    "Partial Exemption Regime Maurice",
    "CSG Maurice",
    "fiscalité expatrié Maurice",
    "plus-values Maurice",
    "analyse Income Tax Act",
    "Vanille Stratégie",
  ],
  openGraph: {
    title:
      "Income Tax Act 1995 — Analyse commentée des dispositions clés pour les investisseurs",
    description:
      "Lecture commentée de l'Income Tax Act 1995 par un Expert-Comptable Fiscaliste installé à Maurice depuis 2015.",
    type: "article",
    locale: "fr_FR",
  },
};

/* ------------------------------------------------------------------ */
/*  Callout                                                            */
/* ------------------------------------------------------------------ */

type CalloutVariant = "amber" | "blue" | "green" | "red";

const calloutStyles: Record<
  CalloutVariant,
  { wrapper: string; icon: string; title: string }
> = {
  amber: {
    wrapper: "border-amber-300 bg-amber-50",
    icon: "\u26A0\uFE0F",
    title: "text-amber-800",
  },
  blue: {
    wrapper: "border-blue-300 bg-blue-50",
    icon: "\uD83D\uDCA1",
    title: "text-blue-800",
  },
  green: {
    wrapper: "border-green-300 bg-green-50",
    icon: "\u2705",
    title: "text-green-800",
  },
  red: {
    wrapper: "border-red-300 bg-red-50",
    icon: "\uD83D\uDED1",
    title: "text-red-800",
  },
};

function Callout({
  variant,
  title,
  children,
}: {
  variant: CalloutVariant;
  title: string;
  children: React.ReactNode;
}) {
  const s = calloutStyles[variant];
  return (
    <div className={`my-8 rounded-xl border-l-4 p-5 ${s.wrapper}`}>
      <p className={`mb-2 text-sm font-bold ${s.title}`}>
        {s.icon} {title}
      </p>
      <div className="text-sm leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Bloc texte officiel                                                */
/* ------------------------------------------------------------------ */

function OfficialText({
  reference,
  children,
}: {
  reference: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-slate-50 p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
        {reference}
      </p>
      <div className="text-sm italic leading-relaxed text-slate-700">
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

function Section({
  id,
  bg,
  children,
}: {
  id?: string;
  bg: "white" | "slate";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`py-14 ${bg === "slate" ? "bg-slate-50" : "bg-white"}`}
    >
      <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AnalyseIncomeTaxActPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ressources/guides"
            className="text-sm text-blue-400 hover:underline"
          >
            &larr; Ressources &amp; Guides
          </Link>

          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300">
              Analyse de texte officiel
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">&middot; 22 min</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Income Tax Act 1995 — Analyse commentée des dispositions clés pour
            les investisseurs
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            L&apos;Income Tax Act 1995, consolidé jusqu&apos;au Finance Act
            2025, est le texte fondateur de la fiscalité mauricienne.
            Nous en extrayons ici les articles qui impactent directement
            les expatriés, entrepreneurs et investisseurs, avec un
            commentaire pratique section par section.
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

      {/* ===== SOMMAIRE ===== */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Sommaire
          </p>
          <ol className="mt-3 list-inside list-decimal space-y-1 text-sm text-blue-700">
            <li>
              <a href="#section-5" className="hover:underline">
                Section 5 — Charge to income tax
              </a>
            </li>
            <li>
              <a href="#section-73" className="hover:underline">
                Section 73 — Définition de résident fiscal
              </a>
            </li>
            <li>
              <a href="#taux" className="hover:underline">
                Second Schedule — Taux d&apos;imposition (15 %)
              </a>
            </li>
            <li>
              <a href="#section-10" className="hover:underline">
                Section 10 — Revenus exonérés et dividendes
              </a>
            </li>
            <li>
              <a href="#plus-values" className="hover:underline">
                Absence de taxation des plus-values
              </a>
            </li>
            <li>
              <a href="#per" className="hover:underline">
                Sub-Part C, Second Schedule — Partial Exemption Regime (80 %)
              </a>
            </li>
            <li>
              <a href="#csg" className="hover:underline">
                CSG — Contribution Sociale Généralisée
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* ===== SECTION 5 — CHARGE TO INCOME TAX ===== */}
      <Section id="section-5" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          1. Section 5 — Charge to income tax
        </h2>
        <p>
          La section 5 de l&apos;Income Tax Act 1995 pose le principe
          fondamental de l&apos;assujettissement à l&apos;impôt sur le revenu a
          Maurice.
        </p>

        <OfficialText reference="Income Tax Act 1995 — Section 5(1)">
          <p>
            &laquo;&nbsp;Subject to this Act, income tax shall be charged for
            each income year at the appropriate rate specified in the Second
            Schedule upon the chargeable income of every person.&nbsp;&raquo;
          </p>
        </OfficialText>

        <Callout variant="blue" title="Commentaire de Didier Laroussinie">
          <p>
            Cette section est la pierre angulaire du système fiscal mauricien. Le
            mot clé ici est <strong>&laquo;&nbsp;chargeable income&nbsp;&raquo;</strong>
            — c&apos;est-à-dire le revenu imposable <em>après</em> déductions et
            exemptions. Pour un expatrié, cela signifie que seuls les revenus de
            source mauricienne (ou remis à Maurice) sont concernés, sauf cas
            particulier du GBC. Le taux unique de 15 % est fixé dans le Second
            Schedule, ce qui rend la planification fiscale remarquablement
            prévisible par rapport à la progressivité française.
          </p>
        </Callout>
      </Section>

      {/* ===== SECTION 73 — RESIDENT ===== */}
      <Section id="section-73" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          2. Section 73 — Définition de résident fiscal
        </h2>
        <p>
          La section 73 définit ce qu&apos;est un &laquo;&nbsp;resident&nbsp;&raquo;
          au sens de l&apos;ITA. C&apos;est le critère déterminant pour savoir
          si un individu est assujetti à Maurice.
        </p>

        <OfficialText reference="Income Tax Act 1995 — Section 73 (extraits)">
          <p>
            &laquo;&nbsp;An individual is resident in Mauritius in an income year
            if he — (a) has his domicile in Mauritius, unless his permanent place
            of abode is outside Mauritius; or (b) has been present in Mauritius
            in that income year for a period of, or an aggregate period of, 183
            days or more; or (c) has been present in Mauritius in that income
            year and the 2 preceding income years for an aggregate period of 270
            days or more.&nbsp;&raquo;
          </p>
        </OfficialText>

        <Callout variant="amber" title="Commentaire de Didier Laroussinie">
          <p>
            Attention : cette définition est <strong>différente</strong> de la
            notion de résidence en droit français (article 4 B du CGI). A
            Maurice, la règle des 183 jours est limpide et sans interpretation
            administrative fluctuante. Pour un expatrié français, il faut
            combiner cette définition avec l&apos;article 4 de la Convention
            fiscale France-Maurice du 11 décembre 1980 (amendée en 2011) qui
            prévoit des critères de départage (tie-breaker rules) en cas de
            double résidence. Mon conseil : tenez un calendrier précis de vos
            jours de présence. C&apos;est votre meilleure protection en cas de
            contrôle fiscal français.
          </p>
        </Callout>

        <OfficialText reference="Income Tax Act 1995 — Section 73 (sociétés)">
          <p>
            &laquo;&nbsp;A company is resident in Mauritius if it is incorporated
            in Mauritius or has its central management and control in
            Mauritius.&nbsp;&raquo;
          </p>
        </OfficialText>

        <Callout variant="blue" title="Commentaire de Didier Laroussinie">
          <p>
            Le critère du &laquo;&nbsp;central management and control&nbsp;&raquo;
            est essentiel pour les GBC (Global Business Companies). Si votre GBC
            est gérée de fait depuis Paris, elle risque d&apos;être requalifiée
            comme société française par l&apos;administration fiscale française.
            C&apos;est exactement pour cela que les{" "}
            <Link
              href="/ressources/blog/substance-requirements-maurice"
              className="text-blue-600 underline hover:text-blue-800"
            >
              substance requirements
            </Link>{" "}
            sont non négociables : conseil d&apos;administration à Maurice,
            directeurs résidents, locaux effectifs.
          </p>
        </Callout>
      </Section>

      {/* ===== TAUX 15 % ===== */}
      <Section id="taux" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          3. Second Schedule — Taux d&apos;imposition à 15 %
        </h2>
        <p>
          Le Second Schedule de l&apos;ITA fixe les taux d&apos;imposition. Pour
          les particuliers comme pour les sociétés, le taux standard est de 15 %.
        </p>

        <OfficialText reference="Income Tax Act 1995 — Second Schedule, Part I">
          <p>
            &laquo;&nbsp;The rate of income tax for an individual shall be 15 per
            cent of his chargeable income.&nbsp;&raquo;
          </p>
          <p className="mt-2">
            &laquo;&nbsp;The rate of income tax for a company shall be 15 per
            cent of its chargeable income.&nbsp;&raquo;
          </p>
        </OfficialText>

        <Callout variant="green" title="Commentaire de Didier Laroussinie">
          <p>
            Un taux unique de 15 % pour tous — personnes physiques et sociétés.
            Comparez avec la France : jusqu&apos;à 45 % d&apos;IR plus 17,2 % de
            prélèvements sociaux sur les revenus du patrimoine. C&apos;est un
            différentiel de <strong>47 points</strong> au maximum. À noter :
            Maurice prévoit également des tranches d&apos;exonération pour les
            revenus les plus faibles (seuil de chargeable income non taxé). Pour
            un entrepreneur réalisant 100 000 EUR de bénéfices, l&apos;économie
            par rapport à la France est considérable et parfaitement légale.
          </p>
        </Callout>

        <Callout variant="amber" title="Précision importante">
          <p>
            Depuis le Finance Act 2023, une surtaxe additionnelle (Solidarity
            Levy) est applicable aux revenus des individus dépassant MUR 3
            millions par an. Le taux effectif peut ainsi dépasser 15 % pour les
            hauts revenus. Nous intégrons systématiquement cette donnée dans nos{" "}
            <Link
              href="/ressources/simulateur-fiscal"
              className="text-amber-700 underline hover:text-amber-900"
            >
              simulations fiscales personnalisées
            </Link>
            .
          </p>
        </Callout>
      </Section>

      {/* ===== SECTION 10 — DIVIDENDES ===== */}
      <Section id="section-10" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          4. Section 10 — Revenus exonérés et dividendes
        </h2>
        <p>
          La section 10 de l&apos;ITA liste les revenus qui sont totalement
          exemptés d&apos;impôt sur le revenu. Les dividendes y occupent une
          place centrale.
        </p>

        <OfficialText reference="Income Tax Act 1995 — Section 10(1)(a)">
          <p>
            &laquo;&nbsp;The following income shall be exempt from income tax —
            (a) a dividend paid by a company resident in
            Mauritius.&nbsp;&raquo;
          </p>
        </OfficialText>

        <Callout variant="green" title="Commentaire de Didier Laroussinie">
          <p>
            C&apos;est l&apos;un des piliers de l&apos;attractivité mauricienne.
            Les dividendes versés par une société mauricienne à un résident
            mauricien sont <strong>totalement exonérés d&apos;impôt</strong>. Pas
            de flat tax à 30 % comme en France, pas de prélèvement forfaitaire.
            Zéro. Pour un dirigeant qui se verse des dividendes depuis sa
            Domestic Company ou son GBC, c&apos;est un avantage structurel
            majeur.
          </p>
        </Callout>

        <OfficialText reference="Income Tax Act 1995 — Section 10 (dividendes de source étrangère)">
          <p>
            Les dividendes de source étrangère reçus par une société résidente
            sont en revanche soumis à l&apos;impôt au taux de 15 %, avec
            possibilité de bénéficier du Partial Exemption Regime (exonération de
            80 %) ou du crédit d&apos;impôt étranger.
          </p>
        </OfficialText>

        <Callout variant="blue" title="Commentaire de Didier Laroussinie">
          <p>
            Pour les dividendes de source étrangère, deux options s&apos;offrent
            au contribuable : (1) l&apos;exemption partielle de 80 % (le taux
            effectif tombe à 3 %) ou (2) le crédit d&apos;impôt étranger. Le
            choix entre les deux dépend de la retenue à la source pratiquée dans
            le pays d&apos;origine. C&apos;est un calcul que nous faisons au cas
            par cas lors de nos missions de{" "}
            <Link
              href="/services"
              className="text-blue-600 underline hover:text-blue-800"
            >
              structuration fiscale
            </Link>
            .
          </p>
        </Callout>
      </Section>

      {/* ===== PLUS-VALUES ===== */}
      <Section id="plus-values" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          5. Absence de taxation des plus-values
        </h2>
        <p>
          L&apos;Income Tax Act 1995 ne prévoit <strong>aucun impôt sur les
          plus-values</strong> (capital gains). Il n&apos;existe pas de section
          dédiée à la taxation des gains en capital.
        </p>

        <OfficialText reference="Income Tax Act 1995 — Constat législatif">
          <p>
            L&apos;ITA ne contient aucune disposition spécifique créant un impôt
            sur les plus-values mobilières ou immobilières. Les profits tirés de
            la cession de titres, de biens immobiliers ou d&apos;actifs
            incorporels ne sont pas soumis à l&apos;impôt sur le revenu dès lors
            qu&apos;ils ne constituent pas des revenus d&apos;activité
            (trading income).
          </p>
        </OfficialText>

        <Callout variant="green" title="Commentaire de Didier Laroussinie">
          <p>
            C&apos;est souvent le premier point qui surprend mes clients
            français. En France, la plus-value de cession de titres est taxée a
            30 % (PFU) ou au barème progressif + 17,2 % de prélèvements
            sociaux. À Maurice : zéro. La plus-value immobilière ? Zéro
            également (sous réserve que l&apos;activité ne soit pas requalifiée
            en activité de marchand de biens).
          </p>
          <p className="mt-2">
            Attention néanmoins à l&apos;
            <strong>exit tax française</strong> (article 167 bis du CGI) : si
            vous détenez un portefeuille de participations supérieur à 800 000
            EUR au moment de votre départ de France, les plus-values latentes
            sont mises en sursis d&apos;imposition. Ce sujet est traité en
            détail dans notre article sur la{" "}
            <Link
              href="/ressources/blog/succession-internationale-france-maurice"
              className="text-green-700 underline hover:text-green-900"
            >
              fiscalité internationale France-Maurice
            </Link>
            .
          </p>
        </Callout>
      </Section>

      {/* ===== PARTIAL EXEMPTION REGIME ===== */}
      <Section id="per" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          6. Sub-Part C, Second Schedule — Partial Exemption Regime (80 %)
        </h2>
        <p>
          Le Partial Exemption Regime (PER) est le mécanisme qui permet aux
          sociétés titulaires d&apos;une Global Business Licence de réduire leur
          taux effectif d&apos;imposition à 3 %.
        </p>

        <OfficialText reference="Income Tax Act 1995 — Second Schedule, Sub-Part C, Part II">
          <p>
            &laquo;&nbsp;A company holding a Global Business Licence under the
            Financial Services Act shall be entitled to a partial exemption of 80
            per cent on the following specified income: (a) foreign-source
            dividend; (b) interest income; (c) profit attributable to a
            permanent establishment of a resident company in a foreign country;
            (d) foreign-source income derived by a CIS manager, CIS
            administrator, investment adviser or asset manager licensed or
            approved by the Financial Services Commission; (e) income derived by
            companies engaged in ship and aircraft leasing; (f) reinsurance and
            reinsurance brokering activities; (g) leasing of international
            fibre optic capacity; (h) sale, financing arrangement and asset
            management of aircraft and its spare parts...&nbsp;&raquo;
          </p>
        </OfficialText>

        <Callout variant="blue" title="Commentaire de Didier Laroussinie">
          <p>
            Le PER est le régime qui a remplacé l&apos;ancien système du
            &laquo;&nbsp;deemed foreign tax credit&nbsp;&raquo; en 2019. Le
            principe est simple : 80 % d&apos;exonération sur le revenu
            éligible, d&apos;ou un taux effectif de 15 % x 20 % = 3 %.
            Mais — et c&apos;est un &laquo;&nbsp;mais&nbsp;&raquo; de taille —
            le bénéfice du PER est <strong>conditionné</strong> a la
            satisfaction des{" "}
            <Link
              href="/ressources/blog/substance-requirements-maurice"
              className="text-blue-600 underline hover:text-blue-800"
            >
              exigences de substance économique
            </Link>{" "}
            définies par la Financial Services Commission.
          </p>
        </Callout>

        <Callout variant="amber" title="Conditions de substance (rappel)">
          <p>
            Pour bénéficier du PER, la société doit démontrer qu&apos;elle
            exerce ses Core Income Generating Activities (CIGA) depuis Maurice :
            employés qualifiés sur place, decisions stratégiques prises a
            Maurice, dépenses operationnelles locales adéquates. Ces critères
            sont vérifiés annuellement par la FSC. Nous accompagnons nos clients
            GBC dans la mise en conformite permanente avec ces exigences.
          </p>
        </Callout>
      </Section>

      {/* ===== CSG ===== */}
      <Section id="csg" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          7. CSG — Contribution Sociale Généralisée
        </h2>
        <p>
          Depuis septembre 2020, la CSG (Contribution Sociale Généralisée) a
          remplacé le National Pensions Fund (NPF). Elle est régie par les
          regulations prises en vertu de l&apos;Income Tax Act.
        </p>

        <OfficialText reference="Income Tax (CSG) Regulations 2020 — En vertu de la section 161 de l'ITA">
          <p>
            &laquo;&nbsp;Every employer of a participant and every participant
            shall be liable to pay CSG in respect of each month at the rate
            specified in the Schedule.&nbsp;&raquo;
          </p>
          <p className="mt-2">
            Les taux varient selon la tranche de rémunération de base mensuelle :
            1,5 % pour l&apos;employe (3 % pour les revenus supérieurs a MUR
            50 000) et 3 % à 6 % pour l&apos;employeur.
          </p>
        </OfficialText>

        <Callout variant="blue" title="Commentaire de Didier Laroussinie">
          <p>
            Ne confondez pas la CSG mauricienne avec la CSG française. Ici, il
            s&apos;agit d&apos;une cotisation de sécurité sociale à taux
            modéré (1,5 % à 3 % côté salarié) qui finance le système de pension.
            En France, les prélèvements sociaux cumulés représentent environ
            22 % côté salarié. Pour les{" "}
            <strong>travailleurs indépendants</strong> (self-employed), la
            contribution CSG est fixée à un montant forfaitaire de MUR 150
            par mois, quel que soit le niveau de revenus — un régime
            particulièrement avantageux.
          </p>
        </Callout>

        <Callout variant="amber" title="Point de vigilance">
          <p>
            Les dirigeants de sociétés GBC qui se versent un salaire à Maurice
            sont concernés par la CSG. Il est indispensable de la prendre en
            compte dans le calcul du coût total de l&apos;emploi. Notre équipe{" "}
            <Link
              href="/services"
              className="text-amber-700 underline hover:text-amber-900"
            >
              comptabilité et paie
            </Link>{" "}
            gère ces déclarations mensuelles pour l&apos;ensemble de nos clients.
          </p>
        </Callout>
      </Section>

      {/* ===== SYNTHESE ===== */}
      <Section id="synthese" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          En résumé : les chiffres clés
        </h2>
        <div className="overflow-x-auto">
          <table className="mt-4 w-full text-sm">
            <thead>
              <tr className="border-b border-slate-300 text-left">
                <th className="pb-2 pr-4 font-semibold text-slate-700">
                  Élément fiscal
                </th>
                <th className="pb-2 pr-4 font-semibold text-slate-700">
                  Maurice (ITA 1995)
                </th>
                <th className="pb-2 font-semibold text-slate-700">
                  France (comparaison)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="py-2 pr-4 text-slate-600">Impôt sur le revenu</td>
                <td className="py-2 pr-4 font-medium text-slate-900">15 %</td>
                <td className="py-2 text-slate-600">0 % à 45 %</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-slate-600">Impôt sur les sociétés</td>
                <td className="py-2 pr-4 font-medium text-slate-900">15 % (3 % via PER)</td>
                <td className="py-2 text-slate-600">25 %</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-slate-600">Dividendes (source locale)</td>
                <td className="py-2 pr-4 font-medium text-slate-900">0 %</td>
                <td className="py-2 text-slate-600">30 % (PFU)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-slate-600">Plus-values</td>
                <td className="py-2 pr-4 font-medium text-slate-900">0 %</td>
                <td className="py-2 text-slate-600">30 % (PFU)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-slate-600">Prélèvements sociaux</td>
                <td className="py-2 pr-4 font-medium text-slate-900">CSG 1,5 %–3 %</td>
                <td className="py-2 text-slate-600">17,2 %</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout variant="blue" title="Commentaire de Didier Laroussinie">
          <p>
            Ces chiffres parlent d&apos;eux-mêmes. Mais la fiscalité ne se
            résume pas à un tableau comparatif. Chaque situation est unique :
            convention fiscale applicable, structuration juridique, type de
            revenus, présence de revenus fonciers français... C&apos;est
            pourquoi un accompagnement sur mesure reste indispensable.
          </p>
        </Callout>
      </Section>

      {/* ===== ARTICLES LIES ===== */}
      <section className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900">
            Articles complémentaires
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/ressources/blog/substance-requirements-maurice"
                className="text-blue-600 hover:underline"
              >
                Substance Requirements à Maurice — Ce que l&apos;EDB et la FSC
                attendent vraiment
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
                href="/ressources/blog/sources-officielles-fiscalite-maurice"
                className="text-blue-600 hover:underline"
              >
                Sources officielles de la fiscalité mauricienne
              </Link>
            </li>
            <li>
              <Link
                href="/ressources/blog/comparatif-maurice-maroc-portugal-dubai"
                className="text-blue-600 hover:underline"
              >
                Comparatif fiscal : Maurice vs Maroc vs Portugal vs Dubai
              </Link>
            </li>
            <li>
              <Link
                href="/ressources/analyse-vat-act"
                className="text-blue-600 hover:underline"
              >
                VAT Act 1998 — Ce que tout entrepreneur à Maurice doit savoir
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== SOURCE ===== */}
      <section className="border-t border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            Source officielle :{" "}
            <a
              href="https://www.mra.mu/download/ITAConsolidated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Income Tax Act 1995, consolidé jusqu&apos;au Finance Act 2025
            </a>{" "}
            — Mauritius Revenue Authority (MRA). Dernière consultation : mars
            2026.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            Besoin d&apos;une analyse personnalisée de votre situation fiscale ?
          </h2>
          <p className="mt-3 text-slate-300">
            Didier Laroussinie et son équipe étudient votre cas en toute
            confidentialité.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 px-10 hover:bg-blue-700"
              >
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
