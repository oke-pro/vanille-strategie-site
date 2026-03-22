import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Succession internationale France-Maurice — 0% de droits, mais attention aux pièges",
  description:
    "Maurice ne taxe pas les successions, mais la convention fiscale France-Maurice ne couvre pas les droits de mutation. Risques de double imposition, assurance-vie, trusts, donations — guide complet par Didier Laroussinie.",
  alternates: {
    canonical: "https://vanillestrategie.fr/ressources/blog/succession-internationale-france-maurice",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title: "Succession internationale France-Maurice — 0% de droits, mais attention aux pièges",
    description:
      "Maurice ne taxe pas les successions, mais la convention fiscale France-Maurice ne couvre pas les droits de mutation. Risques de double imposition, assurance-vie, trusts, donations — guide complet par Didier Laroussinie.",
    siteName: "Vanille Stratégie",
    images: [{ url: "https://vanillestrategie.fr/images/hero-paradise.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Succession internationale France-Maurice — 0% de droits, mais attention aux pièges",
    description:
      "Maurice ne taxe pas les successions, mais la convention fiscale France-Maurice ne couvre pas les droits de mutation. Risques de double imposition, assurance-vie, trusts, donations — guide complet par Didier Laroussinie.",
    images: ["https://vanillestrategie.fr/images/hero-paradise.jpg"],
  },
};

export default function SuccessionInternationalePage() {
  return (
    <>
      <BlogPostingJsonLd
        title="Succession internationale France-Maurice — 0% de droits, mais attention aux pièges"
        description="Maurice ne taxe pas les successions, mais la convention fiscale France-Maurice ne couvre pas les droits de mutation. Risques de double imposition, assurance-vie, trusts, donations — guide complet par Didier Laroussinie."
        slug="succession-internationale-france-maurice"
        datePublished="2026-03-17"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          { name: "Succession internationale France-Maurice — 0% de droits, mais attention aux pièges", url: "/ressources/blog/succession-internationale-france-maurice" },
        ]}
      />
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
            <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-medium text-orange-300">
              Fiscalité
            </span>
            <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-300">
              Succession
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">· 22 min</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Succession internationale France-Maurice — 0% de droits, mais
            attention aux pièges
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Maurice ne prélève aucun droit de succession. Mais cette promesse
            fiscale cache des pièges redoutables pour les expatriés français.
            Convention fiscale incomplète, biens immobiliers en France, règle des
            6 ans, assurance-vie : ce guide décortique chaque risque et chaque
            solution.
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
      {/* Section 1 — L'avantage massif */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            1. L&apos;avantage massif : 0% de droits de succession à Maurice
          </h2>
          <p>
            Maurice ne prélève aucun droit de succession, aucun droit de
            donation, aucun impôt sur les héritages. C&apos;est un fait. Il
            n&apos;existe tout simplement pas de législation mauricienne imposant
            un prélèvement au moment de la transmission d&apos;un patrimoine —
            que ce soit entre époux, en ligne directe ou entre tiers.
          </p>
          <p>
            Pour un Français habitué au barème progressif des droits de
            succession (qui peut atteindre 45% en ligne directe et 60% entre
            non-parents), cette absence totale de taxation successorale
            représente un avantage considérable. Sur un patrimoine de 2 millions
            d&apos;euros transmis à deux enfants, l&apos;économie peut dépasser
            400 000 euros par rapport à la France.
          </p>
          <p>
            Cette fiscalité zéro sur les successions s&apos;inscrit dans la
            philosophie fiscale globale de Maurice : attirer les talents, les
            entrepreneurs et les capitaux internationaux en proposant un cadre
            fiscal simple, compétitif et stable. À cela s&apos;ajoutent l&apos;absence
            d&apos;impôt sur les plus-values, l&apos;absence d&apos;impôt sur
            les dividendes et un taux d&apos;IS plafonné à 15%.
          </p>
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 not-prose">
            <p className="text-sm font-semibold text-green-800">
              Bonne nouvelle
            </p>
            <p className="mt-1 text-sm text-green-700">
              Ce 0% s&apos;applique à tous les résidents fiscaux mauriciens, quelle
              que soit leur nationalité. Un Français installé à Maurice qui
              transmet son patrimoine mauricien à ses enfants (eux aussi
              résidents à Maurice) ne paiera strictement aucun droit de
              succession. C&apos;est l&apos;un des atouts les plus puissants de
              la juridiction.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 2 — La convention fiscale ne couvre PAS les successions */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            2. Le piège majeur : la convention fiscale France-Maurice ne couvre
            PAS les successions
          </h2>
          <p>
            C&apos;est le point le plus important de cet article, et celui que
            trop d&apos;expatriés ignorent. La convention fiscale entre la
            France et Maurice, signée le 11 décembre 1980, est une{" "}
            <strong>
              convention en matière d&apos;impôts sur le revenu
            </strong>
            . Elle couvre l&apos;impôt sur le revenu, l&apos;impôt sur les
            sociétés et — dans une certaine mesure — l&apos;impôt sur la
            fortune. Mais elle ne couvre{" "}
            <strong>ni les droits de succession, ni les droits de donation</strong>.
          </p>
          <p>
            Il n&apos;existe aucune convention bilatérale entre la France et
            Maurice en matière de droits de mutation à titre gratuit. Aucune.
            Cela signifie que les mécanismes d&apos;élimination de la double
            imposition prévus par les conventions (crédit d&apos;impôt, exemption)
            ne s&apos;appliquent tout simplement pas aux successions.
          </p>
          <p>
            En pratique, chaque pays applique sa propre législation successorale
            de manière unilatérale, sans coordination avec l&apos;autre. Et
            comme Maurice ne taxe pas les successions, c&apos;est la France —
            avec son barème très lourd — qui devient le risque principal.
          </p>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 not-prose">
            <p className="text-sm font-semibold text-red-800">
              Danger
            </p>
            <p className="mt-1 text-sm text-red-700">
              L&apos;absence de convention successorale est le piège numéro un.
              Beaucoup d&apos;expatriés raisonnent ainsi : &ldquo;Je vis à
              Maurice, donc je suis couvert par la convention fiscale, donc la
              France ne peut pas me taxer.&rdquo; C&apos;est faux. La convention
              ne protège que les revenus. Pour les successions, vous êtes en
              terrain découvert. Chaque pays applique ses propres règles, sans
              aucun mécanisme de coordination.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 3 — Risque de double imposition successorale */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            3. Risque de double imposition successorale si patrimoine en France
          </h2>
          <p>
            Le Code général des impôts français (articles 750 ter et suivants)
            définit des règles de territorialité très larges en matière de droits
            de succession. La France s&apos;estime compétente pour taxer une
            succession dans trois cas :
          </p>
          <ul>
            <li>
              <strong>Le défunt était domicilié fiscalement en France</strong>{" "}
              au moment du décès : la totalité du patrimoine mondial est taxable
              en France, quelle que soit la localisation des biens.
            </li>
            <li>
              <strong>
                L&apos;héritier est domicilié fiscalement en France
              </strong>{" "}
              et l&apos;a été pendant au moins six ans au cours des dix dernières
              années : la totalité du patrimoine mondial transmis à cet héritier
              est taxable en France (article 750 ter, 2° du CGI).
            </li>
            <li>
              <strong>Les biens transmis sont situés en France</strong>{" "}
              (immobilier, comptes bancaires français, parts de sociétés
              françaises) : ces biens sont taxables en France, quelle que soit la
              résidence du défunt ou des héritiers.
            </li>
          </ul>
          <p>
            Le scénario le plus dangereux est le suivant : un Français installé
            à Maurice depuis 3 ans décédé en laissant un patrimoine
            immobilier en France et des comptes bancaires à Maurice. La France
            taxera l&apos;intégralité du patrimoine (car les héritiers, restés
            en France, y sont domiciliés), tandis que Maurice ne taxera rien.
            Il n&apos;y a pas de double imposition au sens strict — mais la
            facture française reste entière, malgré la résidence mauricienne du
            défunt.
          </p>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose">
            <p className="text-sm font-semibold text-amber-800">
              Point d&apos;attention
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Le vrai risque n&apos;est pas la double imposition (puisque Maurice
              ne taxe rien), mais la taxation française intégrale malgré
              l&apos;expatriation. Vous pouvez vivre à Maurice depuis 10 ans et
              voir la totalité de votre patrimoine mondial soumis aux droits de
              succession français si vos héritiers résident en France.
              L&apos;expatriation du défunt ne suffit pas : c&apos;est aussi le
              domicile fiscal des héritiers qui compte.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 4 — Règle des 6 ans */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            4. La règle des 6 ans : quand les héritiers résidents en France
            restent imposables
          </h2>
          <p>
            L&apos;article 750 ter, 2° du Code général des impôts prévoit que
            lorsque l&apos;héritier (ou le légataire, ou le donataire) a été
            domicilié fiscalement en France pendant{" "}
            <strong>au moins six années au cours des dix années</strong>{" "}
            précédant la transmission, la France se considère compétente pour
            taxer l&apos;ensemble des biens reçus, quelle que soit leur
            localisation.
          </p>
          <p>
            Concrètement, si vos enfants vivent en France (ce qui est le cas
            dans la majorité des situations d&apos;expatriation à Maurice), ils
            remplissent quasi systématiquement cette condition. Et dans ce cas,
            la totalité de ce qu&apos;ils reçoivent — y compris les comptes
            bancaires à Maurice, les parts de sociétés mauriciennes, les biens
            immobiliers à Maurice — est soumise aux droits de succession
            français.
          </p>
          <p>
            Cette règle à un corollaire important : même si le défunt a quitté
            la France depuis longtemps et est devenu résident fiscal mauricien,
            la France reste compétente du fait du domicile fiscal des héritiers.
            L&apos;expatriation du défunt est neutralisée par la résidence des
            bénéficiaires.
          </p>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 not-prose">
            <p className="text-sm font-semibold text-red-800">
              Danger
            </p>
            <p className="mt-1 text-sm text-red-700">
              C&apos;est le piège le plus fréquent dans les familles
              franco-mauriciennes. Le parent s&apos;installé à Maurice pour
              bénéficier de la fiscalité avantageuse, mais les enfants restent en
              France (études, emploi, vie de famille). Au décès, la France taxe
              la totalité de la transmission aux taux français. Le 0% mauricien
              ne sert à rien si les héritiers sont en France.
            </p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose mt-4">
            <p className="text-sm font-semibold text-blue-800">
              Conseil de Didier Laroussinie
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Si la planification successorale est l&apos;un des motifs de votre
              expatriation, il faut penser la situation de manière globale :
              résidence du défunt, résidence des héritiers, localisation des
              biens. Ces trois paramètres doivent être alignés. L&apos;expatriation
              du seul parent ne suffit généralement pas à échapper à la
              compétence fiscale française.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 5 — Domicile fiscal au moment du décès */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            5. L&apos;importance du domicile fiscal au moment du décès
          </h2>
          <p>
            En matière de succession, c&apos;est le domicile fiscal du défunt{" "}
            <strong>au jour du décès</strong> qui détermine la compétence
            fiscale de l&apos;État de résidence. À Maurice, il n&apos;y a pas de
            conséquence puisque le pays ne taxe pas les successions. Mais en
            France, l&apos;enjeu est considérable.
          </p>
          <p>
            Si le défunt est considéré comme domicilié fiscal en France au jour
            de son décès (au sens de l&apos;article 4 B du CGI : foyer, lieu
            de séjour principal, activité professionnelle principale, centre des
            intérêts économiques), la France taxe la totalité du patrimoine
            mondial, y compris les biens situés à Maurice.
          </p>
          <p>
            Il est donc essentiel de pouvoir prouver, de manière irréfutable,
            que le défunt était bien résident fiscal mauricien au moment du
            décès. Cela passe par :
          </p>
          <ul>
            <li>
              Un permis de résidence mauricien en cours de validité (Occupation
              Permit, Permanent Résidence Permit, ou Retired Non-Citizen)
            </li>
            <li>
              Un certificat de résidence fiscale délivré par la Mauritius Revenue
              Authority (MRA)
            </li>
            <li>
              Une présence physique effective à Maurice (plus de 183 jours par an)
            </li>
            <li>
              Le centre des intérêts économiques et familiaux à Maurice
              (logement principal, compte bancaire principal, activité
              professionnelle)
            </li>
            <li>
              La désinscription du fichier des résidents fiscaux français et la
              régularisation auprès du service des impôts des non-résidents
            </li>
          </ul>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose">
            <p className="text-sm font-semibold text-amber-800">
              Point d&apos;attention
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Un scénario malheureusement courant : un expatrié partage son temps
              entre Maurice et la France, conserve un logement en France, des
              comptes bancaires actifs en France, un véhicule immatriculé en
              France. En cas de décès, l&apos;administration fiscale française
              pourra argumenter que le défunt avait conservé son domicile fiscal
              en France — malgré son permis de résidence mauricien. La charge de
              la preuve est sur les héritiers.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 6 — Biens immobiliers en France */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            6. Biens immobiliers en France : toujours imposables, sans exception
          </h2>
          <p>
            Quelle que soit la résidence fiscale du défunt, quelle que soit la
            résidence fiscale des héritiers, les biens immobiliers situés en
            France sont <strong>toujours</strong> soumis aux droits de succession
            français. C&apos;est le principe de la lex rei sitae — la loi du
            lieu de situation du bien.
          </p>
          <p>
            Cela vaut pour les biens détenus en direct, mais aussi pour les biens
            détenus via une SCI (Société Civile Immobilière) française. Les parts
            de SCI detenant de l&apos;immobilier français sont assimilées à des
            biens immobiliers français pour les besoins des droits de succession.
          </p>
          <p>
            Plus subtil : les parts de sociétés étrangères (y compris
            mauriciennes) dont l&apos;actif est constitué majoritairement de
            biens immobiliers en France peuvent également être requalifiées comme
            des actifs immobiliers français par l&apos;administration fiscale.
            Créer une société mauricienne pour détenir un appartement à Paris ne
            vous protège pas.
          </p>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 not-prose">
            <p className="text-sm font-semibold text-red-800">
              Danger
            </p>
            <p className="mt-1 text-sm text-red-700">
              Beaucoup d&apos;expatriés pensent qu&apos;en plaçant leur
              immobilier français dans une structure étrangère, ils échappent aux
              droits de succession français. C&apos;est une erreur grave.
              L&apos;article 750 ter du CGI et la doctrine administrative visent
              explicitement les montages interposant des sociétés étrangères pour
              détenir de l&apos;immobilier français. Le risque n&apos;est pas
              seulement fiscal — il est pénal (abus de droit, fraude fiscale).
            </p>
          </div>
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 not-prose mt-4">
            <p className="text-sm font-semibold text-green-800">
              Bonne pratique
            </p>
            <p className="mt-1 text-sm text-green-700">
              Si vous conservez de l&apos;immobilier en France après votre
              expatriation à Maurice, intégrez-le explicitement dans votre
              planification successorale. Il sera taxé en France, c&apos;est
              inévitable. Mais les abattements légaux (100 000 euros par enfant
              en ligne directe), le démembrement de propriété et les donations
              anticipées permettent de réduire considérablement la facture. La
              clé est d&apos;anticiper.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 7 — Assurance-vie */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            7. Assurance-vie : traitement France vs Maurice
          </h2>
          <p>
            L&apos;assurance-vie est le placement préféré des Français — et pour
            cause : en France, elle bénéficie d&apos;un régime fiscal
            successoral très favorable. Les capitaux versés avant 70 ans
            bénéficient d&apos;un abattement de 152 500 euros par bénéficiaire
            (article 990 I du CGI), et ceux versés après 70 ans d&apos;un
            abattement global de 30 500 euros (article 757 B du CGI).
          </p>
          <p>
            Mais attention : ces règles s&apos;appliquent aux contrats français,
            et la question de leur application dans un contexte international est
            complexe. Plusieurs situations doivent être distinguées :
          </p>
          <ul>
            <li>
              <strong>
                Contrat d&apos;assurance-vie français, bénéficiaires résidents
                en France
              </strong>{" "}
              : les articles 990 I et 757 B s&apos;appliquent normalement,
              quelle que soit la résidence du souscripteur. Les abattements
              sont disponibles. C&apos;est le scénario le plus simple.
            </li>
            <li>
              <strong>
                Contrat d&apos;assurance-vie français, bénéficiaires non
                résidents
              </strong>{" "}
              : une exonération est possible si le bénéficiaire n&apos;a pas été
              domicilié en France pendant au moins six ans au cours des dix
              dernières années (condition similaire à la règle des successions).
              C&apos;est un avantage majeur pour les bénéficiaires installés à
              Maurice depuis longtemps.
            </li>
            <li>
              <strong>
                Contrat d&apos;assurance-vie souscrit à Maurice
              </strong>{" "}
              : aucune taxation à Maurice (0% de droits de succession). Mais si
              les bénéficiaires sont résidents fiscaux français, la France peut
              réclamer des droits de succession sur ces capitaux en vertu de la
              règle des 6 ans.
            </li>
          </ul>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose">
            <p className="text-sm font-semibold text-amber-800">
              Point d&apos;attention
            </p>
            <p className="mt-1 text-sm text-amber-700">
              L&apos;assurance-vie est souvent présentée comme l&apos;outil
              miracle de la planification successorale franco-mauricienne. La
              réalité est plus nuancée. Le bénéfice fiscal dépend entièrement du
              profil du bénéficiaire (résident ou non résident, depuis combien de
              temps) et de la localisation du contrat (France ou Maurice). Une
              analyse au cas par cas est indispensable.
            </p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose mt-4">
            <p className="text-sm font-semibold text-blue-800">
              Conseil de Didier Laroussinie
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Pour un expatrié français à Maurice dont les enfants restent en
              France, le contrat d&apos;assurance-vie français reste un outil
              puissant : il permet de transmettre jusqu&apos;à 152 500 euros par
              enfant en franchise de droits (primes versées avant 70 ans). Ce
              n&apos;est pas du 0%, mais c&apos;est infiniment mieux que le
              régime de droit commun des successions. Conservez vos contrats
              français et optimisez les versements.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 8 — Trusts mauriciens */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            8. Trusts mauriciens (Trusts Act 2001) comme outil de planification
            successorale
          </h2>
          <p>
            Maurice dispose d&apos;une législation moderne sur les trusts,
            codifiée dans le <strong>Trusts Act 2001</strong>. Cette loi permet
            la création de trusts révocables ou irrévocables, à durée déterminée
            ou perpétuelle, avec une grande flexibilité dans la désignation des
            bénéficiaires et la gestion des actifs.
          </p>
          <p>
            Le trust mauricien peut être un outil puissant de planification
            successorale : les actifs placés dans un trust irrévocable sortent
            du patrimoine du constituant (settlor) et ne font donc plus partie
            de sa succession. Au décès du settlor, les actifs du trust sont
            transmis aux bénéficiaires selon les termes de l&apos;acte de trust,
            sans passer par la dévolution successorale classique.
          </p>
          <p>
            En droit mauricien, cette transmission ne génère aucune imposition.
            Pas de droits de succession, pas de droits de donation, pas de taxe
            sur les distributions du trust.
          </p>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 not-prose">
            <p className="text-sm font-semibold text-red-800">
              Danger
            </p>
            <p className="mt-1 text-sm text-red-700">
              La France à une relation très hostile avec les trusts. Depuis la
              loi du 29 juillet 2011 et les articles 792-0 bis et 990 J du CGI,
              les biens placés dans un trust sont considérés comme faisant
              partie du patrimoine du constituant pour les besoins des droits de
              succession français. Un trust mauricien détenant des actifs au
              bénéfice d&apos;héritiers résidents en France ne vous protège pas
              de la taxation française — il peut même aggraver votre situation
              (taxe spéciale de 20% a 45 %, voire sanctions pour dissimulation).
            </p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose mt-4">
            <p className="text-sm font-semibold text-amber-800">
              Point d&apos;attention
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Le trust mauricien est un outil pertinent uniquement lorsque le
              constituant, les bénéficiaires ET les actifs sont tous en dehors
              du champ fiscal français. Si l&apos;un de ces trois éléments a un
              lien avec la France, le trust doit être analysé avec la plus grande
              prudence. Des obligations déclaratives lourdes existent en France
              pour les trusts étrangers (déclaration annuelle 2181-TRUST).
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 9 — Donation vs succession */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            9. Donation vs succession : stratégies d&apos;anticipation
          </h2>
          <p>
            En droit fiscal français, les abattements sur les droits de donation
            se reconstituent tous les 15 ans. Cela signifie qu&apos;un parent
            peut donner 100 000 euros à chaque enfant en franchise de droits, et
            renouveler cette donation 15 ans plus tard. Sur 30 ans, c&apos;est
            donc 300 000 euros par enfant qui peuvent être transmis sans droits,
            en plus de ce qui sera transmis au décès.
          </p>
          <p>
            Cette stratégie de donations successives prend tout son sens dans un
            contexte d&apos;expatriation à Maurice. Voici pourquoi :
          </p>
          <ul>
            <li>
              <strong>
                Si le donateur est résident fiscal mauricien ET le donataire
                n&apos;est pas résident fiscal en France
              </strong>{" "}
              (ou l&apos;est depuis moins de 6 ans sur les 10 dernières années) :
              les dons portant sur des biens situés hors de France échappent
              totalement aux droits de donation français. C&apos;est le scénario
              idéal.
            </li>
            <li>
              <strong>
                Si le donateur est résident fiscal mauricien MAIS le donataire
                est résident fiscal en France
              </strong>{" "}
              (depuis plus de 6 ans) : les dons portant sur des biens situés hors
              de France sont soumis aux droits de donation français. L&apos;abattement
              de 100 000 euros s&apos;applique, mais au-delà, le barème
              progressif (jusqu&apos;à 45%) s&apos;applique.
            </li>
            <li>
              <strong>
                Les dons portant sur des biens situés en France
              </strong>{" "}
              (immobilier, parts de sociétés françaises) : toujours soumis aux
              droits de donation français, quelle que soit la résidence du
              donateur et du donataire.
            </li>
          </ul>
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 not-prose">
            <p className="text-sm font-semibold text-green-800">
              Bonne pratique
            </p>
            <p className="mt-1 text-sm text-green-700">
              Anticipez par des donations de votre vivant. Même si vos enfants
              sont en France, l&apos;abattement de 100 000 euros par enfant tous
              les 15 ans reste disponible. Sur un patrimoine de 500 000 euros à
              transmettre à deux enfants, trois rounds de donations sur 30 ans
              permettent de transmettre la totalité en franchise de droits (hors
              biens immobiliers français). C&apos;est beaucoup plus efficace que
              de laisser la succession se régler au décès.
            </p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose mt-4">
            <p className="text-sm font-semibold text-blue-800">
              Stratégie avancée : le démembrement
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Le démembrement de propriété (donation de la nue-propriété avec
              réserve d&apos;usufruit) est une technique particulièrement
              efficace dans un contexte France-Maurice. Le donateur conserve
              l&apos;usufruit (et donc les revenus) du bien, tandis que les
              enfants reçoivent la nue-propriété avec un abattement lié à
              l&apos;age. Au décès du donateur, les enfants deviennent pleins
              propriétaires sans droits supplémentaires. Cette technique
              s&apos;applique aussi bien à l&apos;immobilier qu&apos;aux parts
              de sociétés ou aux contrats d&apos;assurance-vie.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 10 — Le rôle de l'expert-comptable */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            10. Le rôle de l&apos;expert-comptable fiscaliste dans la
            planification successorale internationale
          </h2>
          <p>
            La planification successorale dans un contexte France-Maurice est
            un exercice multidisciplinaire qui fait intervenir le droit fiscal
            français, le droit fiscal mauricien, le droit civil (régimes
            matrimoniaux, dévolution successorale), le droit des sociétés et
            parfois le droit des assurances. Aucune de ces disciplines ne peut
            être appréhendée isolément.
          </p>
          <p>
            C&apos;est précisément là où un expert-comptable fiscaliste
            spécialisé en fiscalité internationale apporte une valeur
            décisive. Chez Vanille Stratégie, {founder.name} intervient
            personnellement sur chaque dossier de planification successorale,
            avec 40 ans d&apos;expérience en fiscalité internationale et une
            connaissance approfondie des deux législations.
          </p>
          <p>
            Concrètement, notre accompagnement couvre :
          </p>

          <div className="space-y-4 not-prose mt-6">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                Diagnostic patrimonial complet
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Cartographie de l&apos;ensemble du patrimoine (France, Maurice,
                autres juridictions), identification des actifs soumis aux droits
                de succession français, analyse de la situation fiscale de
                chaque héritier potentiel. Ce diagnostic est le préalable
                indispensable à toute stratégie.
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                Stratégie de transmission optimisée
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Calendrier de donations, choix entre donation simple et
                démembrement, arbitrage entre assurance-vie française et
                mauricienne, structuration sociétaire adaptée, utilisation
                éventuelle d&apos;un trust mauricien (lorsque les conditions le
                permettent).
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                Coordination avec les conseils français
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Nous travaillons en étroite coordination avec votre notaire
                français, votre avocat fiscaliste et votre conseiller en gestion
                de patrimoine. La planification successorale France-Maurice
                exige une équipe pluridisciplinaire, et nous assurons la
                cohérence d&apos;ensemble du dispositif.
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                Suivi dans la durée
              </p>
              <p className="mt-1 text-sm text-blue-700">
                La législation évolue (en France comme à Maurice), les
                situations familiales changent (mariage, divorce, naissance),
                les patrimoines se transforment. Nous assurons un suivi annuel
                de votre stratégie successorale pour l&apos;adapter aux
                évolutions législatives et personnelles.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose mt-6">
            <p className="text-sm font-semibold text-amber-800">
              Le mot de Didier Laroussinie
            </p>
            <p className="mt-1 text-sm text-amber-700">
              &ldquo;En 40 ans de carrière, j&apos;ai vu des familles
              perdre des centaines de milliers d&apos;euros en droits de
              succession parce qu&apos;elles n&apos;avaient pas anticipé.
              L&apos;expatriation à Maurice ne suffit pas à elle seule à
              protéger le patrimoine familial. Il faut une stratégie globale,
              mise en place AVANT le départ — pas après. Chaque année de retard
              est une année d&apos;abattement perdue, une donation non faite, une
              structuration non mise en place. La planification successorale,
              c&apos;est du temps long. Plus on s&apos;y prend tôt, plus
              l&apos;économie est importante.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 11 — Recommandations */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            11. Recommandations : consulter AVANT de partir, structurer en amont
          </h2>
          <p>
            À la lumière de tout ce qui précède, voici les recommandations clés
            que nous formulons systématiquement à nos clients qui envisagent
            une expatriation à Maurice ou qui y sont déjà installés :
          </p>

          <div className="space-y-4 not-prose mt-6">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                1. Faites un audit successoral AVANT votre départ
              </p>
              <p className="mt-1 text-sm text-green-700">
                Cartographiez votre patrimoine, identifiez les actifs à risque
                (immobilier français, parts de SCI, contrats d&apos;assurance-vie),
                analysez la situation fiscale de vos héritiers. Cet audit doit
                être réalisé 12 à 18 mois avant le départ pour laisser le temps
                de mettre en place les solutions.
              </p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                2. Commencez les donations le plus tôt possible
              </p>
              <p className="mt-1 text-sm text-green-700">
                Les abattements se reconstituent tous les 15 ans. Plus vous
                commencez tôt, plus vous pouvez transmettre en franchise de
                droits. La première donation devrait idéalement intervenir avant
                le départ de France, pour bénéficier pleinement du calendrier
                fiscal.
              </p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                3. Sécurisez votre domicile fiscal mauricien
              </p>
              <p className="mt-1 text-sm text-green-700">
                Obtenez votre certificat de résidence fiscale MRA, maintenez une
                présence physique supérieure à 183 jours par an, et assurez-vous
                que votre centre de vie est incontestablement à Maurice. Évitez
                de conserver des indices de domiciliation en France (logement,
                véhicule, comptes bancaires actifs).
              </p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                4. Arbitrez votre patrimoine immobilier français
              </p>
              <p className="mt-1 text-sm text-green-700">
                Si la transmission successorale est un objectif prioritaire,
                envisagez de cédér vos biens immobiliers français (en
                bénéficiant de l&apos;exonération progressive des plus-values
                après 22 ans de détention) et de réinvestir le produit dans des
                actifs mauriciens, hors du champ fiscal français.
              </p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                5. Ne négligez pas l&apos;assurance-vie
              </p>
              <p className="mt-1 text-sm text-green-700">
                Conservez vos contrats d&apos;assurance-vie français et
                optimisez les versements avant 70 ans pour bénéficier de
                l&apos;abattement de 152 500 euros par bénéficiaire. Envisagez
                également un contrat mauricien pour la part de patrimoine
                qui peut échapper au champ fiscal français.
              </p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                6. Entourez-vous d&apos;une équipe pluridisciplinaire
              </p>
              <p className="mt-1 text-sm text-green-700">
                Expert-comptable fiscaliste (Vanille Stratégie), notaire français,
                avocat fiscaliste, conseiller en gestion de patrimoine. La
                planification successorale France-Maurice est trop complexe pour
                être gérée par un seul professionnel. Chaque conseil doit
                intervenir dans son domaine de compétence, sous la coordination
                d&apos;un pilote qui maîtrise les deux législations.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-red-200 bg-red-50 p-4 not-prose mt-6">
            <p className="text-sm font-semibold text-red-800">
              Erreur fatale à éviter
            </p>
            <p className="mt-1 text-sm text-red-700">
              Ne partez jamais à Maurice en pensant que le 0% de droits de
              succession rèsout tout. C&apos;est une condition nécessaire mais
              pas suffisante. Sans planification, sans anticipation des
              implications françaises, sans structuration en amont, vous risquez
              de laisser à vos héritiers une facture fiscale que vous pensiez
              avoir évitée. Le coût d&apos;un accompagnement en planification
              successorale est une fraction de l&apos;économie réalisée — et une
              fraction encore plus infime du coût d&apos;une succession mal
              anticipée.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Sources */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-slate-700">
            Sources et références
          </h3>
          <ul className="mt-3 space-y-1 text-xs text-slate-500">
            <li>
              Code général des impôts, articles 750 ter et suivants — Droits de
              mutation à titre gratuit —{" "}
              <a
                href="https://www.legifrance.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                legifrance.gouv.fr
              </a>
            </li>
            <li>
              Convention fiscale France-Maurice du 11 décembre 1980 (revenus
              uniquement) —{" "}
              <a
                href="https://www.impots.gouv.fr/sites/default/files/media/10_conventions/ile-maurice/ile-maurice_convention.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                impots.gouv.fr
              </a>
            </li>
            <li>
              Trusts Act 2001 — Laws of Mauritius —{" "}
              <a
                href="https://www.fscmauritius.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                fscmauritius.org
              </a>
            </li>
            <li>
              Articles 990 I et 757 B du CGI — Régime fiscal de
              l&apos;assurance-vie en cas de décès
            </li>
            <li>
              Articles 792-0 bis et 990 J du CGI — Régime fiscal des trusts
              étrangers
            </li>
            {officialSources.slice(0, 3).map((s) => (
              <li key={s.url}>
                {s.name} ({s.description}) —{" "}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {s.url}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-400">
            Cet article est fourni à titre informatif et ne constitué pas un
            conseil fiscal ou juridique personnalisé. La planification
            successorale internationale est un domaine complexe qui dépend
            étroitement de votre situation personnelle. Contactez nos experts
            pour une analyse adaptée à votre cas.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA Final */}
      {/* ============================================================ */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            Planification successorale France-Maurice : anticipez maintenant
          </h2>
          <p className="mt-3 text-slate-400">
            Diagnostic patrimonial gratuit par {founder.name},{" "}
            {founder.title} — 40 ans d&apos;expérience en fiscalité
            internationale. Chaque situation est unique : nous analysons la
            votre et construisons une stratégie sur mesure.
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
