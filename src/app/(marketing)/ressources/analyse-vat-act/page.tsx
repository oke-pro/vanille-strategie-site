import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title:
    "VAT Act 1998 — Ce que tout entrepreneur à Maurice doit savoir | Vanille Stratégie",
  description:
    "Analyse commentée par Didier Laroussinie du VAT Act 1998 de Maurice : taux 15 %, seuil d'assujettissement abaissé a 3M MUR, exemption services exportés, obligations déclaratives.",
  keywords: [
    "VAT Act 1998 Maurice",
    "TVA Maurice 15%",
    "seuil assujettissement TVA Maurice",
    "3 millions MUR VAT",
    "services exportés Maurice exemption",
    "zero-rated supplies Maurice",
    "obligations déclaratives TVA Maurice",
    "digital nomad TVA Maurice",
    "e-commerce Maurice TVA",
    "Vanille Stratégie",
  ],
  openGraph: {
    title:
      "VAT Act 1998 — Ce que tout entrepreneur à Maurice doit savoir",
    description:
      "Lecture commentée du VAT Act 1998 par un Expert-Comptable Fiscaliste installé à Maurice depuis 2015. Taux, seuils, exemptions, obligations.",
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
  référence,
  children,
}: {
  référence: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-slate-50 p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
        {référence}
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

export default function AnalyseVatActPage() {
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
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-300">
              Analyse de texte officiel
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">&middot; 16 min</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            VAT Act 1998 — Ce que tout entrepreneur à Maurice doit savoir
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            La TVA mauricienne (Value Added Tax) est régie par le VAT Act 1998.
            Avec l&apos;abaissement du seuil d&apos;assujettissement a 3
            millions MUR depuis octobre 2025, de nombreuses PME et freelances
            sont désormais concernés. Voici les dispositions essentielles,
            commentees article par article.
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
              <a href="#taux" className="hover:underline">
                Section 8 — Taux de TVA (15 %)
              </a>
            </li>
            <li>
              <a href="#seuil" className="hover:underline">
                Section 15 — Seuil d&apos;assujettissement (3 millions MUR)
              </a>
            </li>
            <li>
              <a href="#zero-rated" className="hover:underline">
                Fifth Schedule — Fournitures à taux zéro (services exportés)
              </a>
            </li>
            <li>
              <a href="#exempt" className="hover:underline">
                First Schedule — Fournitures exonérées
              </a>
            </li>
            <li>
              <a href="#obligations" className="hover:underline">
                Sections 20-22 — Obligations déclaratives
              </a>
            </li>
            <li>
              <a href="#digital" className="hover:underline">
                Budget 2025-2026 — TVA sur les services numériques
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* ===== TAUX 15 % ===== */}
      <Section id="taux" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          1. Section 8 — Taux de TVA à 15 %
        </h2>
        <p>
          La section 8 du VAT Act 1998 fixe le taux standard de la TVA
          applicable à Maurice.
        </p>

        <OfficialText référence="VAT Act 1998 — Section 8(1)">
          <p>
            &laquo;&nbsp;Subject to subsection (2), every taxable person making
            a taxable supply shall charge VAT on the supply at the rate of 15
            per cent of the value of the supply.&nbsp;&raquo;
          </p>
        </OfficialText>

        <Callout variant="blue" title="Commentaire de Didier Laroussinie">
          <p>
            Le taux de 15 % est identique à celui de l&apos;impôt sur le revenu
            — une simplicite appréciable du système mauricien. Comparez avec la
            France ou le taux normal de TVA est de 20 %, avec des taux réduits a
            10 %, 5,5 % et 2,1 %. À Maurice, c&apos;est 15 % ou zéro (taux
            zéro et exonérations). Pas de taux intermédiaire. Cela simplifie
            considérablement la gestion comptable de nos clients entrepreneurs.
          </p>
        </Callout>
      </Section>

      {/* ===== SEUIL D'ASSUJETTISSEMENT ===== */}
      <Section id="seuil" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          2. Section 15 — Seuil d&apos;assujettissement
        </h2>
        <p>
          La section 15 définit les conditions dans lesquelles une personne est
          tenue de s&apos;enregistrer à la TVA.
        </p>

        <OfficialText référence="VAT Act 1998 — Section 15 (tel qu'amendé par le Finance Act 2025)">
          <p>
            &laquo;&nbsp;A person who carries on a taxable activity shall apply
            for registration as a taxable person where the total value of his
            taxable supplies has exceeded, or is likely to exceed, the
            registration threshold during a period of 12 consecutive
            months.&nbsp;&raquo;
          </p>
          <p className="mt-2">
            Le seuil (registration threshold) est fixe à MUR 3 000 000 depuis
            le 1er octobre 2025 (contre MUR 6 000 000 antérieurement).
          </p>
        </OfficialText>

        <Callout variant="red" title="Commentaire de Didier Laroussinie">
          <p>
            C&apos;est <strong>le changement majeur du Budget 2025-2026</strong>.
            L&apos;abaissement du seuil de 6 a 3 millions MUR (environ 60 000
            EUR) signifie que des milliers de petites entreprises et de
            freelances à Maurice sont désormais dans l&apos;obligation de
            s&apos;enregistrer à la TVA. Si vous êtes un{" "}
            <Link
              href="/digital-nomad"
              className="text-red-700 underline hover:text-red-900"
            >
              digital nomad
            </Link>{" "}
            ou un consultant indépendant facturant plus de 250 000 MUR par mois
            (environ 5 000 EUR), vous êtes potentiellement concerné.
          </p>
        </Callout>

        <Callout variant="amber" title="Calendrier à retenir">
          <p>
            Le nouveau seuil est effectif depuis le 1er octobre 2025. Si votre
            chiffre d&apos;affaires de fournitures taxables a dépassé 3 millions
            MUR au cours des 12 derniers mois glissants, vous avez{" "}
            <strong>28 jours</strong> pour déposer votre demande
            d&apos;enregistrement auprès de la MRA. Le défaut
            d&apos;enregistrement expose à des pénalités significatives.
          </p>
        </Callout>
      </Section>

      {/* ===== ZERO-RATED — SERVICES EXPORTES ===== */}
      <Section id="zero-rated" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          3. Fifth Schedule — Fournitures à taux zéro (services exportés)
        </h2>
        <p>
          Le Fifth Schedule du VAT Act liste les fournitures soumises au taux
          zéro. C&apos;est la disposition la plus importante pour les
          prestataires de services à l&apos;international.
        </p>

        <OfficialText référence="VAT Act 1998 — Fifth Schedule (extraits)">
          <p>
            &laquo;&nbsp;The following supplies of goods and services shall be
            zero-rated — [...] services supplied to a person who is not résident
            in Mauritius and who is outside Mauritius at the time of the
            performance of the service, where such services are for use outside
            Mauritius.&nbsp;&raquo;
          </p>
        </OfficialText>

        <Callout variant="green" title="Commentaire de Didier Laroussinie">
          <p>
            C&apos;est la disposition <strong>stratégique</strong> pour tous mes
            clients e-commerçants, consultants et prestataires de services
            numériques basés à Maurice mais servant une clientèle internationale.
            Si vous fournissez des services de développement web, de conseil, de
            marketing digital ou tout autre service à des clients situés hors de
            Maurice et que ces services sont utilisés hors de Maurice, votre
            prestation est soumise au taux zéro — pas 15 %, zéro.
          </p>
          <p className="mt-2">
            Concrètement, cela signifie que vous ne facturez pas de TVA a vos
            clients étrangers, mais vous conservez le droit de récupérer la TVA
            sur vos achats locaux (input tax). C&apos;est un avantage de
            trésorerie considérable.
          </p>
        </Callout>

        <Callout variant="amber" title="Condition clé : utilisation hors de Maurice">
          <p>
            Attention à la condition &laquo;&nbsp;for use outside
            Mauritius&nbsp;&raquo;. Si un client étranger commande un service
            qui sera <em>consommé</em> à Maurice (par exemple l&apos;organisation
            d&apos;un événement à Maurice), le taux zéro ne s&apos;applique pas.
            La MRA examine la destination réelle du service, pas seulement
            l&apos;adresse du client. Nous vérifions systématiquement ce point
            lors de la mise en place des procédures TVA de nos clients.
          </p>
        </Callout>
      </Section>

      {/* ===== FOURNITURES EXONEREES ===== */}
      <Section id="exempt" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          4. First Schedule — Fournitures exonérées
        </h2>
        <p>
          Le First Schedule liste les biens et services totalement exonérés de
          TVA. À la différence du taux zéro, l&apos;exonération ne donne pas
          droit à la récupération de la TVA en amont.
        </p>

        <OfficialText référence="VAT Act 1998 — First Schedule (extraits)">
          <p>
            Sont exonérées de TVA notamment : les services financiers (sauf
            certains services spécifiques), les services d&apos;éducation, les
            services de sante, la location de biens immobiliers a usage
            d&apos;habitation, le transport public de passagers, certains
            produits alimentaires de base.
          </p>
        </OfficialText>

        <Callout variant="blue" title="Commentaire de Didier Laroussinie">
          <p>
            La distinction entre &laquo;&nbsp;exempt&nbsp;&raquo; et
            &laquo;&nbsp;zero-rated&nbsp;&raquo; est cruciale et source
            fréquente de confusion. Dans les deux cas, vous ne facturez pas de
            TVA. Mais si votre activité est <em>exonérée</em>, vous ne pouvez
            pas récupérer la TVA sur vos achats. Si elle est a{" "}
            <em>taux zero</em>, vous recuperez la TVA en amont. Pour un
            prestataire de services financiers, cela signifie que la TVA payee
            sur les fournitures (loyer, équipement, etc.) constitué un coût
            définitif. Ce point doit être intégré dans le business plan des le
            départ.
          </p>
        </Callout>
      </Section>

      {/* ===== OBLIGATIONS DECLARATIVES ===== */}
      <Section id="obligations" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          5. Sections 20-22 — Obligations déclaratives
        </h2>
        <p>
          Les sections 20 a 22 du VAT Act définissent les obligations de tenue
          de registres, de facturation et de déclaration périodique.
        </p>

        <OfficialText référence="VAT Act 1998 — Section 20 (Records)">
          <p>
            &laquo;&nbsp;Every taxable person shall keep and maintain proper
            records and books of account of his business transactions in
            sufficient detail to enable the Director-General to readily ascertain
            the taxable person&apos;s liability to tax.&nbsp;&raquo;
          </p>
        </OfficialText>

        <OfficialText référence="VAT Act 1998 — Section 22 (Returns)">
          <p>
            &laquo;&nbsp;Every taxable person shall, within 30 days from the end
            of every taxable period, furnish to the Director-General a return in
            the prescribed form together with the amount of tax payable for that
            taxable period.&nbsp;&raquo;
          </p>
        </OfficialText>

        <Callout variant="blue" title="Commentaire de Didier Laroussinie">
          <p>
            La déclaration TVA (formulaire VAT 3) est trimestrielle pour la
            plupart des entreprises. Elle doit être déposée dans les 30 jours
            suivant la fin du trimestre, accompagnée du paiement de la TVA nette
            due. La MRA est de plus en plus stricte sur les délais : les
            pénalités de retard s&apos;élèvent à 2 % du montant du par mois de
            retard, plus des intérêts.
          </p>
        </Callout>

        <Callout variant="amber" title="Conseil pratique">
          <p>
            Tenez un journal de TVA rigoureux des le premier jour. La MRA peut
            procéder à des contrôles inopinés et remonter jusqu&apos;à 5 ans en
            arriere. Chaque facture émise et reçue doit comporter le numéro VAT,
            la description du service, le montant hors taxe et le montant de TVA
            séparés. Notre cabinet gère l&apos;intégralité des{" "}
            <Link
              href="/services"
              className="text-amber-700 underline hover:text-amber-900"
            >
              obligations déclaratives TVA
            </Link>{" "}
            pour nos clients, de la tenue des registres au dépôt de la
            déclaration.
          </p>
        </Callout>
      </Section>

      {/* ===== TVA SERVICES NUMERIQUES ===== */}
      <Section id="digital" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          6. Budget 2025-2026 — TVA sur les services numériques
        </h2>
        <p>
          Le Finance Act 2025 a introduit une nouvelle obligation de TVA pour
          les fournisseurs étrangers de services numériques a destination de
          consommateurs mauriciens.
        </p>

        <OfficialText référence="Finance Act 2025 — Amendement au VAT Act, Section 8A (services numériques)">
          <p>
            A compter du 1er janvier 2026, les fournisseurs étrangers de
            services numériques ou électroniques (streaming, SaaS, applications,
            publicité en ligne, etc.) à des consommateurs à Maurice sont tenus de
            s&apos;enregistrer à la TVA et de collecter la TVA à 15 % sur ces
            prestations.
          </p>
        </OfficialText>

        <Callout variant="blue" title="Commentaire de Didier Laroussinie">
          <p>
            Cette mesure aligne Maurice sur la tendance mondiale (cf. règles de
            l&apos;OCDE sur la TVA numérique). Pour les entrepreneurs
            <strong> basés à Maurice</strong> qui vendent des services
            numériques, deux scénarios :
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>
              <strong>Clients hors de Maurice</strong> : vos services restent a
              taux zéro (Fifth Schedule) — rien ne change.
            </li>
            <li>
              <strong>Clients à Maurice</strong> : TVA à 15 % applicable comme
              pour tout service local.
            </li>
          </ul>
          <p className="mt-2">
            En revanche, si vous êtes un fournisseur étranger (Netflix, Google,
            etc.) vendant à des particuliers mauriciens, c&apos;est vous qui
            devez désormais vous enregistrer et collecter la TVA. Cette mesure ne
            concerné pas directement nos clients entrepreneurs, mais elle est
            à surveiller.
          </p>
        </Callout>
      </Section>

      {/* ===== SYNTHESE ===== */}
      <Section id="synthese" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          En resume : les chiffres clés de la TVA à Maurice
        </h2>
        <div className="overflow-x-auto">
          <table className="mt-4 w-full text-sm">
            <thead>
              <tr className="border-b border-slate-300 text-left">
                <th className="pb-2 pr-4 font-semibold text-slate-700">
                  Élément
                </th>
                <th className="pb-2 font-semibold text-slate-700">
                  Valeur / Règle
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="py-2 pr-4 text-slate-600">Taux standard</td>
                <td className="py-2 font-medium text-slate-900">15 %</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-slate-600">Seuil d&apos;enregistrement</td>
                <td className="py-2 font-medium text-slate-900">
                  MUR 3 000 000 / an (depuis oct. 2025)
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-slate-600">Services exportés</td>
                <td className="py-2 font-medium text-slate-900">
                  Taux zéro (Fifth Schedule)
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-slate-600">Périodicité des déclarations</td>
                <td className="py-2 font-medium text-slate-900">
                  Trimestrielle (formulaire VAT 3)
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-slate-600">Délai de dépôt</td>
                <td className="py-2 font-medium text-slate-900">
                  30 jours après la fin du trimestre
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-slate-600">Pénalité de retard</td>
                <td className="py-2 font-medium text-slate-900">
                  2 % par mois + intérêts
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout variant="green" title="Commentaire de Didier Laroussinie">
          <p>
            Pour un entrepreneur français qui s&apos;installé à Maurice et sert
            une clientèle internationale, la TVA n&apos;est souvent pas un
            problème — ses services sont à taux zéro. Mais il faut néanmoins
            s&apos;enregistrer des que le seuil est atteint, ne serait-ce que
            pour bénéficier de la récupération de la TVA sur les achats locaux.
            C&apos;est une démarche que nous intégrons systématiquement dans le
            parcours d&apos;
            <Link
              href="/entrepreneur"
              className="text-green-700 underline hover:text-green-900"
            >
              accompagnement entrepreneur
            </Link>
            .
          </p>
        </Callout>
      </Section>

      {/* ===== ARTICLES LIES ===== */}
      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900">
            Articles complémentaires
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/ressources/analyse-income-tax-act"
                className="text-blue-600 hover:underline"
              >
                Income Tax Act 1995 — Analyse commentée des dispositions clés
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
                href="/ressources/blog/crypto-vasp-licence-maurice"
                className="text-blue-600 hover:underline"
              >
                Crypto et licence VASP à Maurice
              </Link>
            </li>
            <li>
              <Link
                href="/ressources/blog/ecosysteme-tech-startups-maurice"
                className="text-blue-600 hover:underline"
              >
                Écosystème tech et startups à Maurice
              </Link>
            </li>
            <li>
              <Link
                href="/ressources/blog/paiements-en-ligne-maurice-stripe-alternatives"
                className="text-blue-600 hover:underline"
              >
                Paiements en ligne à Maurice : Stripe et alternatives
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== SOURCE ===== */}
      <section className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            Sources officielles :{" "}
            <a
              href="https://lawsofmauritius.govmu.org/portal/viewlegislationdocument/web/?doctitle=VmFsdWUgQWRkZWQgVGF4IEFjdA%3D%3D&docnumber=&doctype=act"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Value Added Tax Act 1998 — Laws of Mauritius
            </a>{" "}
            |{" "}
            <a
              href="https://www.mra.mu/download/VATFAQs.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              MRA — VAT FAQs (septembre 2025)
            </a>
            . Dernière consultation : mars 2026.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            Besoin d&apos;aide pour vos obligations TVA à Maurice ?
          </h2>
          <p className="mt-3 text-slate-300">
            Enregistrement, déclarations, récupération de TVA — notre équipe
            gère tout.
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
