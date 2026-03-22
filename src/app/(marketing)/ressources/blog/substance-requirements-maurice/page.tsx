import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Substance Requirements à Maurice — Ce que l'EDB et la FSC attendent vraiment | Vanille Stratégie",
  description:
    "Guide complet sur les exigences de substance économique à Maurice : CIGA, directeurs résidents, Partial Exemption Regime, Finance Act 2025. Par Didier Laroussinie, Expert-Comptable Fiscaliste.",
  keywords: [
    "substance requirements Maurice",
    "substance économique GBC",
    "CIGA Maurice",
    "Partial Exemption Regime",
    "Finance Act 2025 Maurice",
    "EDB Maurice",
    "FSC Maurice",
    "GBC substance",
    "directeurs résidents Maurice",
    "BEPS Maurice",
  ],
  openGraph: {
    title:
      "Substance Requirements à Maurice — Ce que l'EDB et la FSC attendent vraiment",
    description:
      "Guide complet sur les exigences de substance économique à Maurice. CIGA, directeurs résidents, PER, Finance Act 2025.",
    type: "article",
    locale: "fr_FR",
    siteName: "Vanille Stratégie",
    images: [{ url: "https://vanillestrategie.fr/images/hero-paradise.jpg" }],
  },
  alternates: {
    canonical: "https://vanillestrategie.fr/ressources/blog/substance-requirements-maurice",
  },
  twitter: {
    card: "summary_large_image",
    title: "Substance Requirements à Maurice — Ce que l'EDB et la FSC attendent vraiment | Vanille Stratégie",
    description:
      "Guide complet sur les exigences de substance économique à Maurice : CIGA, directeurs résidents, Partial Exemption Regime, Finance Act 2025. Par Didier Laroussinie, Expert-Comptable Fiscaliste.",
    images: ["https://vanillestrategie.fr/images/hero-paradise.jpg"],
  },
};

/* ------------------------------------------------------------------ */
/*  Callout component                                                  */
/* ------------------------------------------------------------------ */

type CalloutVariant = "amber" | "blue" | "red" | "green";

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
  red: {
    wrapper: "border-red-300 bg-red-50",
    icon: "\uD83D\uDED1",
    title: "text-red-800",
  },
  green: {
    wrapper: "border-green-300 bg-green-50",
    icon: "\u2705",
    title: "text-green-800",
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
/*  Section wrapper                                                    */
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

export default function SubstanceRequirementsPage() {
  return (
    <>
      <BlogPostingJsonLd
        title="Substance Requirements à Maurice — Ce que l&apos;EDB et la FSC attendent vraiment | Vanille Stratégie"
        description="Guide complet sur les exigences de substance économique à Maurice : CIGA, directeurs résidents, Partial Exemption Regime, Finance Act 2025. Par Didier Laroussinie, Expert-Comptable Fiscaliste."
        slug="substance-requirements-maurice"
        datePublished="2026-03-06"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          { name: "Substance Requirements à Maurice — Ce que l&apos;EDB et la FSC attendent vraiment | Vanille Stratégie", url: "/ressources/blog/substance-requirements-maurice" },
        ]}
      />
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ressources/blog"
            className="text-sm text-blue-400 hover:underline"
          >
            &larr; Tous les articles
          </Link>

          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-medium text-orange-300">
              Fiscalite
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">&middot; 18 min</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Substance Requirements à Maurice — Ce que l&apos;EDB et la FSC
            attendent vraiment
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            En 2026, la substance économique n&apos;est plus une formalite
            administrative. C&apos;est la condition sine qua non pour acceder au
            Partial Exemption Regime et à la credibilite internationale de votre
            GBC. Voici ce que les regulateurs attendent concrètement.
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

      {/* ===== TABLE DES MATIERES ===== */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Sommaire
          </p>
          <ol className="mt-3 list-inside list-decimal space-y-1 text-sm text-blue-700">
            <li>
              <a href="#definition" className="hover:underline">
                Qu&apos;est-ce que la substance économique ?
              </a>
            </li>
            <li>
              <a href="#beps" className="hover:underline">
                Contexte BEPS et pression internationale
              </a>
            </li>
            <li>
              <a href="#ciga" className="hover:underline">
                Core Income Generating Activities (CIGA)
              </a>
            </li>
            <li>
              <a href="#exigences-gbc" className="hover:underline">
                Les 5 exigences concretes pour les GBC
              </a>
            </li>
            <li>
              <a href="#finance-act-2025" className="hover:underline">
                Le changement du Finance Act 2025
              </a>
            </li>
            <li>
              <a href="#per" className="hover:underline">
                Impact sur le Partial Exemption Regime
              </a>
            </li>
            <li>
              <a href="#erreurs" className="hover:underline">
                Les erreurs courantes
              </a>
            </li>
            <li>
              <a href="#bd-star" className="hover:underline">
                Comment BD Star assure la substance
              </a>
            </li>
            <li>
              <a href="#recommandations" className="hover:underline">
                Recommandations pratiques
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* ===== 1. DEFINITION ===== */}
      <Section id="definition" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          1. Qu&apos;est-ce que la substance économique ?
        </h2>
        <p>
          La substance économique designe l&apos;ensemble des elements concrets
          prouvant qu&apos;une société exerce une activité réelle et
          significative dans la juridiction ou elle est enregistree. Ce
          n&apos;est pas un concept abstrait : il s&apos;agit de démontrer que
          la société dispose de locaux, de personnel qualifie, de processus
          decisionnels effectifs et de dépenses operationnelles reelles a
          Maurice.
        </p>
        <p>
          Pour une Global Business Company (GBC), la substance est ce qui
          distingue une société legitime d&apos;une coquille vide. C&apos;est la
          pierre angulaire de la credibilite fiscale de Maurice sur la scene
          internationale.
        </p>

        <Callout variant="blue" title="A retenir">
          <p>
            La substance n&apos;est pas une option. C&apos;est une obligation
            légale imposee par la Financial Services Commission (FSC) et
            verifiee par l&apos;Economic Development Board (EDB). Sans
            substance, pas d&apos;avantages fiscaux.
          </p>
        </Callout>

        <p>
          Concrètement, les regulateurs veulent voir que les decisions
          stratégiques sont prises à Maurice, que les comptes sont tenus
          localement, que des employés qualifiés travaillent sur place et que la
          société génère une activité économique réelle sur le territoire.
        </p>
      </Section>

      {/* ===== 2. BEPS ===== */}
      <Section id="beps" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          2. Contexte BEPS et pression internationale
        </h2>
        <p>
          Le projet BEPS (Base Erosion and Profit Shifting) de l&apos;OCDE,
          lance en 2013 et renforcé par le Cadre Inclusif, vise à empecher les
          multinationales de deplacer artificiellement leurs bénéfices vers des
          juridictions a fiscalité réduite. Maurice, en tant que centre
          financier international, est directement concernee.
        </p>
        <p>
          Les actions BEPS 5 (pratiques fiscales dommageables) et 6 (abus de
          conventions fiscales) ont pousse Maurice a reformer en profondeur son
          cadre réglementaire. L&apos;ancien régime du Category 1 Global
          Business Licence a été remplacé en 2018-2019 par le système actuel des
          GBC, avec des exigences de substance considérablement renforcées.
        </p>

        <Callout variant="amber" title="Pression continue">
          <p>
            Maurice figure regulierement dans les evaluations du Forum mondial
            sur la transparence et l&apos;echange de renseignements. Chaque
            revue par les pairs examine la réalité de la substance des entites
            enregistrees. Une mauvaise evaluation aurait des consequences
            desastreuses sur l&apos;attractivité de la juridiction.
          </p>
        </Callout>

        <p>
          L&apos;Union europeenne a également exerce une pression significative.
          Maurice a figure sur la liste grise de l&apos;UE avant d&apos;en etre
          retiree, precisement grâce au renforcement de ses exigences de
          substance. Aujourd&apos;hui, maintenir cette conformité est vital pour
          le pays et pour chaque société qui y est enregistree.
        </p>
        <p>
          Le message est clair : les juridictions qui ne font pas respecter la
          substance risquent la liste noire, la perte de conventions fiscales et
          l&apos;imposition de retenues à la source penalisantes par les pays
          partenaires.
        </p>
      </Section>

      {/* ===== 3. CIGA ===== */}
      <Section id="ciga" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          3. Les Core Income Generating Activities (CIGA)
        </h2>
        <p>
          Les CIGA sont les activités essentielles qui génèrent les revenus de
          la société. La FSC exige que ces activités soient effectuees à Maurice
          — pas dans un autre pays, pas sous-traitees à l&apos;étranger sans
          supervision locale réelle.
        </p>
        <p>
          La nature des CIGA varie selon le type d&apos;activité de la GBC :
        </p>

        <div className="my-6 overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  Type d&apos;activité
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  Exemples de CIGA
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 font-medium">Holding</td>
                <td className="px-4 py-3">
                  Decisions d&apos;investissement et de desinvestissement,
                  gestion du portefeuille, analyse des risques
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Trading</td>
                <td className="px-4 py-3">
                  Negociation des contrats, gestion de la chaine
                  d&apos;approvisionnement, facturation, logistique
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  Services financiers
                </td>
                <td className="px-4 py-3">
                  Evaluation des risques, octroi de credits, gestion de fonds,
                  compliance
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">
                  Propriete intellectuelle
                </td>
                <td className="px-4 py-3">
                  Recherche et développement, gestion des licences,
                  commercialisation
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Shipping</td>
                <td className="px-4 py-3">
                  Gestion de flotte, logistique maritime, négociation des
                  affretements
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout variant="blue" title="Conseil pratique">
          <p>
            Documentez vos CIGA. La FSC peut demander à tout moment la preuve
            que les activités generatrices de revenus sont reellement conduites
            depuis Maurice. Les proces-verbaux de conseil d&apos;administration,
            les emails, les contrats signes localement et les rapports
            d&apos;analyse sont autant de preuves tangibles.
          </p>
        </Callout>
      </Section>

      {/* ===== 4. EXIGENCES GBC ===== */}
      <Section id="exigences-gbc" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          4. Les 5 exigences concretes pour les GBC
        </h2>
        <p>
          La FSC impose un ensemble d&apos;exigences structurelles que chaque
          GBC doit respecter pour maintenir sa licence. Voici les cinq piliers
          fondamentaux :
        </p>

        {/* 4.1 */}
        <h3 className="mt-8 text-xl font-bold text-slate-800">
          4.1. Minimum 2 directeurs résidents mauriciens de calibre suffisant
        </h3>
        <p>
          Chaque GBC doit avoir au minimum deux directeurs résidents à Maurice.
          Mais attention : il ne s&apos;agit pas de simples preteurs de noms. La
          FSC attend des directeurs qui ont les competences, l&apos;expérience
          et le temps necessaires pour exercer un rôle reel dans la gouvernance
          de la société.
        </p>

        <Callout variant="red" title="Piege a éviter">
          <p>
            Les directeurs nominees passifs — ceux qui signent sans lire, sans
            participer aux reunions, sans comprendre l&apos;activité — sont un
            signal d&apos;alarme majeur pour la FSC. Si vos directeurs ne
            peuvent pas expliquer le modele économique de la société lors
            d&apos;un contrôle, vous avez un problème.
          </p>
        </Callout>

        {/* 4.2 */}
        <h3 className="mt-8 text-xl font-bold text-slate-800">
          4.2. Compte bancaire principal à Maurice
        </h3>
        <p>
          Le principal bank account de la GBC doit être tenu à Maurice, auprès
          d&apos;une banque locale agressee par la Bank of Mauritius. Les flux
          financiers doivent transiter de manière significative par ce compte.
          Avoir un compte chez AfrAsia, MCB ou SBI Maurice ne suffit pas : il
          faut que ce compte soit le centre nevralgique des operations
          financieres.
        </p>

        <Callout variant="green" title="Bonne pratique">
          <p>
            Centralisez le maximum de flux sur votre compte mauricien : paiement
            des fournisseurs, reception des revenus, versement des salaires.
            Plus les transactions passent par Maurice, plus la substance est
            evidente.
          </p>
        </Callout>

        {/* 4.3 */}
        <h3 className="mt-8 text-xl font-bold text-slate-800">
          4.3. Comptabilite tenue à Maurice
        </h3>
        <p>
          Les livres comptables et les registres de la société doivent etre
          conserves au registered office à Maurice. La tenue comptable doit etre
          effectuee par un professionnel comptable qualifie, idealement inscrit
          au MIPA (Mauritius Institute of Professional Accountants).
        </p>
        <p>
          Cela signifie que votre comptable parisien ou votre expert-comptable a
          Dubai ne peut pas gérer la comptabilité de votre GBC a distance. La
          comptabilité doit être réalisée physiquement et professionnellement
          depuis Maurice.
        </p>

        {/* 4.4 */}
        <h3 className="mt-8 text-xl font-bold text-slate-800">
          4.4. Etats financiers audites à Maurice
        </h3>
        <p>
          Les etats financiers annuels de la GBC doivent être audites par un
          cabinet d&apos;audit agréé à Maurice. L&apos;audit doit être realise
          conformement aux normes internationales (ISA) et déposé auprès de la
          FSC dans les délais prescrits.
        </p>

        <Callout variant="amber" title="Attention aux délais">
          <p>
            Le depet tardif des etats financiers audites est une cause fréquente
            de sanctions par la FSC. Les pénalités peuvent aller de
            l&apos;amendé à la suspension de la licence GBC. Anticipez :
            planifiez votre audit au moins 3 mois avant la date limite.
          </p>
        </Callout>

        {/* 4.5 */}
        <h3 className="mt-8 text-xl font-bold text-slate-800">
          4.5. Board meetings tenus à Maurice
        </h3>
        <p>
          Les reunions du conseil d&apos;administration doivent se tenir a
          Maurice — physiquement ou avec une majorite de directeurs presents sur
          le territoire. Les proces-verbaux doivent refleter des discussions
          substantielles et des decisions reelles, pas de simples approbations
          formelles.
        </p>

        <Callout variant="green" title="Bonne pratique">
          <p>
            Tenez au minimum 4 board meetings par an à Maurice. Conservez des
            PV detailles qui montrent que les decisions stratégiques
            (investissements, contrats majeurs, politique de dividendes) sont
            effectivement prises sur place. Gardez les preuves : convocations,
            listes de présence, ordre du jour, presentations.
          </p>
        </Callout>
      </Section>

      {/* ===== 5. FINANCE ACT 2025 ===== */}
      <Section id="finance-act-2025" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          5. Le changement majeur du Finance Act 2025
        </h2>
        <p>
          Le Finance Act 2025 (Act No. 18 of 2025, publie le 9 aout 2025) a
          introduit un changement subtil mais fondamental dans l&apos;approche
          des substance requirements.
        </p>

        <div className="my-8 rounded-xl border-2 border-red-200 bg-red-50 p-6">
          <p className="text-lg font-bold text-red-800">
            Le changement cle
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Avant le Finance Act 2025, c&apos;était <strong>la société</strong>{" "}
            qui devait satisfaire les conditions de substance. Desormais,
            c&apos;est{" "}
            <strong>l&apos;activité generant le revenu</strong> qui doit les
            satisfaire. La nuance est considérable.
          </p>
        </div>

        <p>
          Concrètement, cela signifie que si votre GBC a plusieurs lignes
          d&apos;activité, chaque activité generatrice de revenus doit
          individuellement démontrer une substance suffisante à Maurice. Il ne
          suffit plus d&apos;avoir un bureau et deux directeurs pour couvrir
          l&apos;ensemble des activités — chaque source de revenus est examinee
          separement.
        </p>

        <Callout variant="red" title="Consequence directe">
          <p>
            Une GBC qui fait du trading international ET du conseil en
            investissement doit démontrer une substance distincte pour chacune de
            ces deux activités. Les CIGA du trading (négociation, logistique)
            doivent être conduites à Maurice, ET les CIGA du conseil (analyse,
            recommandations) doivent également l&apos;etre.
          </p>
        </Callout>

        <p>
          Ce changement s&apos;inscrit dans la logique BEPS : les avantages
          fiscaux doivent être lies à une creation de valeur réelle dans la
          juridiction. L&apos;OCDE et l&apos;UE scrutent désormais non pas
          l&apos;entite juridique, mais le flux de revenus.
        </p>

        <Callout variant="blue" title="Impact en pratique">
          <p>
            Pour les entrepreneurs qui ont une seule activité claire (e-commerce,
            consulting, holding), le changement est mineur : demontrez la
            substance pour cette activité, et vous êtes conforme. Pour les
            structures multi-activités, il faut repenser l&apos;organisation
            interne.
          </p>
        </Callout>
      </Section>

      {/* ===== 6. PER ===== */}
      <Section id="per" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          6. Impact sur le Partial Exemption Regime (80%)
        </h2>
        <p>
          Le Partial Exemption Regime (PER) est l&apos;avantage fiscal phare de
          la GBC : il permet une exemption de 80% sur certains revenus
          (dividendes étrangers, bénéfices de source étrangère, intérêts,
          royalties), ramenant le taux effectif d&apos;imposition de 15% a
          environ 3%.
        </p>

        <div className="my-8 overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  Situation
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  Taux effectif d&apos;IS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 font-medium text-green-700">
                  GBC avec substance + PER approuve
                </td>
                <td className="px-4 py-3 font-bold text-green-700">
                  ~3% (15% x 20%)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-red-700">
                  GBC sans substance suffisante = pas de PER
                </td>
                <td className="px-4 py-3 font-bold text-red-700">
                  15% (taux plein)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout variant="red" title="L'enjeu financier est colossal">
          <p>
            Sur un bénéfice de 500 000 EUR, la différence entre 3% et 15%
            represente 60 000 EUR d&apos;impet supplémentaire par an. Sur 5 ans,
            c&apos;est 300 000 EUR. La substance n&apos;est pas un coût :
            c&apos;est un investissement qui rapporte 5 a 10 fois sa mise.
          </p>
        </Callout>

        <p>
          La MRA (Mauritius Revenue Authority) verifie de plus en plus
          rigoureusement que les conditions de substance sont remplies avant
          d&apos;accorder le bénéfice du PER. Les contreles se sont intensifies
          depuis 2024, avec des demandes de justificatifs detailles :
        </p>
        <ul>
          <li>Preuves de présence physique des directeurs</li>
          <li>
            Releves bancaires montrant les flux transitant par Maurice
          </li>
          <li>Contrats de travail des employés locaux</li>
          <li>Baux commerciaux pour les locaux</li>
          <li>PV de board meetings avec ordres du jour detailles</li>
        </ul>
      </Section>

      {/* ===== 7. ERREURS COURANTES ===== */}
      <Section id="erreurs" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          7. Les erreurs courantes qui coutent cher
        </h2>
        <p>
          En 14 ans d&apos;activité à Maurice, nous avons vu des dizaines de
          structures echouer a satisfaire les exigences de substance. Voici les
          erreurs les plus frequentes — et les plus couteuses :
        </p>

        <Callout variant="red" title="Erreur n 1 : la shell company deguisee">
          <p>
            Creer une GBC avec un registered office chez un agent, deux
            directeurs nominees qui ne connaissent pas l&apos;activité, pas
            d&apos;employe, pas de bureau reel. Cette configuration est
            transparente pour la FSC. Resultat : perte du PER, redressement
            fiscal, et potentiellement perte de la licence.
          </p>
        </Callout>

        <Callout variant="red" title="Erreur n 2 : les directeurs nominees passifs">
          <p>
            Des directeurs qui se contentent de signer des documents pre-rediges
            sans participer aux decisions. La FSC attend des directeurs qui
            comprennent le business, qui challengent les propositions, qui
            prennent des decisions informees. Un directeur qui ne peut pas
            répondre à des questions basiques sur l&apos;activité de la société
            lors d&apos;un audit est un risque majeur.
          </p>
        </Callout>

        <Callout variant="red" title="Erreur n 3 : pas de bureau reel">
          <p>
            Utiliser une simple adresse postale comme registered office sans
            aucune présence physique. La FSC peut effectuer des visites inopinees.
            Si personne ne travaille à l&apos;adresse declaree, c&apos;est un
            red flag immediat.
          </p>
        </Callout>

        <Callout variant="amber" title="Erreur n 4 : comptabilité offshore">
          <p>
            Faire tenir la comptabilité par un cabinet a Paris, Dubai ou
            Singapour. Meme si les ecritures sont justes, le fait que la
            comptabilité ne soit pas tenue physiquement à Maurice affaiblit
            considérablement la demonstration de substance.
          </p>
        </Callout>

        <Callout variant="amber" title="Erreur n 5 : board meetings fictifs">
          <p>
            Des PV de reunions qui n&apos;ont jamais eu lieu, ou des reunions
            tenues exclusivement par visioconference sans jamais de présence
            physique à Maurice. La FSC attend une majorite de reunions en
            presentiel sur le territoire.
          </p>
        </Callout>
      </Section>

      {/* ===== 8. BD STAR ===== */}
      <Section id="bd-star" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          8. Comment BD Star assure la substance de votre GBC
        </h2>
        <p>
          BD Star Management Services, la branche comptabilité et services du
          groupe Vanille Stratégie, a été conçue pour répondre exactement aux
          exigences de substance de la FSC et de l&apos;EDB. Voici comment :
        </p>

        <h3 className="mt-6 text-xl font-bold text-slate-800">
          Bureaux a Ebene Cybercity
        </h3>
        <p>
          Nos locaux se situent au 12e etage de The Core, 62 ICT Avenue,
          Cybercity, Ebene 72201. C&apos;est le coeur du district financier de
          Maurice — le même immeuble qui abrite des cabinets internationaux, des
          banques et des sociétés de gestion. Votre GBC dispose d&apos;une
          adresse physique réelle dans un environnement professionnel reconnu par
          les regulateurs.
        </p>

        <h3 className="mt-6 text-xl font-bold text-slate-800">
          Comptabilite locale par des professionnels qualifiés
        </h3>
        <p>
          BD Star est inscrit au MIPA. La comptabilité de votre GBC est tenue a
          Maurice, par une équipe locale, en normes IFRS. Les registres sont
          conserves physiquement au registered office. Chaque ecriture est
          tracable, chaque document est archivable et accessible pour un audit.
        </p>

        <h3 className="mt-6 text-xl font-bold text-slate-800">
          Directeurs qualifiés et impliques
        </h3>
        <p>
          Nos directeurs résidents ne sont pas des preteurs de noms. Ils
          comprennent votre activité, participent activement aux board meetings,
          et sont capables de répondre aux questions de la FSC lors d&apos;un
          contrôle. C&apos;est une différence fondamentale avec les management
          companies qui proposent des directeurs à la chaine sans aucune
          implication réelle.
        </p>

        <Callout variant="green" title="Notre approche">
          <p>
            Chaque GBC gérée par BD Star dispose d&apos;un dossier de substance
            complet : bail commercial, contrats de travail, PV de board meetings
            detailles, preuves de présence physique, relevees bancaires, etats
            financiers audites. Ce dossier est mis à jour en continu et
            disponible en cas de contrôle.
          </p>
        </Callout>
      </Section>

      {/* ===== 9. RECOMMANDATIONS ===== */}
      <Section id="recommandations" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          9. Recommandations pratiques pour maintenir la substance
        </h2>
        <p>
          Voici nos recommandations concretes, issues de 14 ans
          d&apos;accompagnement de GBC à Maurice :
        </p>

        <Callout variant="green" title="Locaux et présence physique">
          <p>
            Disposez d&apos;un bureau reel à Maurice — pas une simple boite
            postale. Idealement, un espace dans une zone reconnue comme Ebene
            Cybercity, Port Louis CBD ou Moka Smart City. Assurez-vous que du
            personnel y travaille effectivement.
          </p>
        </Callout>

        <Callout variant="green" title="Gouvernance active">
          <p>
            Tenez au minimum 4 board meetings par an en presentiel à Maurice.
            Redigez des PV qui refletent des discussions reelles et des decisions
            argumentees. Invitez vos directeurs a challenger les propositions, a
            poser des questions, a demander des clarifications.
          </p>
        </Callout>

        <Callout variant="green" title="Flux financiers centralises">
          <p>
            Faites transiter la majorite de vos flux par votre compte bancaire
            mauricien. Payez vos fournisseurs, recevez vos paiements clients et
            versez les salaires depuis Maurice. Les releves bancaires sont une
            preuve de substance puissante.
          </p>
        </Callout>

        <Callout variant="green" title="Documentation permanente">
          <p>
            Constituez et maintenez un dossier de substance à jour : bail,
            contrats de travail, fiches de paie, factures de prestataires
            locaux, PV de reunions, emails decisionnels, rapports d&apos;analyse
            produits localement. Ce dossier doit être pret à tout moment pour un
            contrôle FSC ou MRA.
          </p>
        </Callout>

        <Callout variant="green" title="Comptabilite et audit locaux">
          <p>
            Confiez votre comptabilité à un cabinet inscrit au MIPA et base a
            Maurice. Planifiez votre audit annuel au moins 3 mois avant
            l&apos;echeance. Ne laissez jamais un retard de dépôt compromettre
            votre licence.
          </p>
        </Callout>

        <Callout variant="green" title="Revue annuelle de conformité">
          <p>
            Faites realiser une revue annuelle de votre substance par un
            professionnel. Les exigences evoluent (comme le Finance Act 2025
            l&apos;a montre). Ce qui etait suffisant l&apos;annee dernière peut
            ne plus l&apos;etre aujourd&apos;hui.
          </p>
        </Callout>

        <Callout variant="amber" title="Anticipez les controles">
          <p>
            La FSC et la MRA ont renforcé leurs moyens de contrôle depuis 2024.
            Les visites inopinees, les demandes de documentation et les
            entretiens avec les directeurs sont de plus en plus frequents.
            N&apos;attendez pas un contrôle pour mettre votre substance en
            ordre.
          </p>
        </Callout>
      </Section>

      {/* ===== SOURCES ===== */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-600">Sources :</p>
          <p className="mt-1 text-xs text-slate-500">
            {officialSources
              .filter((s) =>
                ["FSC Mauritius", "EDB Mauritius", "MRA", "MIPA"].includes(
                  s.name
                )
              )
              .map((s, i) => (
                <span key={s.url}>
                  {i > 0 && " · "}
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {s.name}
                  </a>{" "}
                  ({s.description})
                </span>
              ))}
            {" · "}
            <span>
              Finance Act 2025 (Act No. 18 of 2025) — National Assembly of
              Mauritius
            </span>
            {" · "}
            <span>OECD BEPS Inclusive Framework — Action 5</span>
          </p>
          <p className="mt-3 text-xs text-slate-400">
            Cet article est fourni à titre informatif et ne constitue pas un
            conseil juridique ou fiscal. Chaque situation est unique — contactez
            nos experts pour une analyse personnalisée.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Votre GBC respecte-t-elle les substance requirements ?
          </h2>
          <p className="mt-4 text-slate-400">
            Ne prenez pas le risque de perdre le Partial Exemption Regime.
            Demandez un audit de substance gratuit par {founder.name},{" "}
            {founder.title}.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 px-10 hover:bg-blue-700"
              >
                Demander un audit de substance
              </Button>
            </Link>
            <Link href="/ressources/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                Voir nos autres articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
