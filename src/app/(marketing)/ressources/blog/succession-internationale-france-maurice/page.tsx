import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Succession internationale France-Maurice — 0% de droits, mais attention aux pieges",
  description:
    "Maurice ne taxe pas les successions, mais la convention fiscale France-Maurice ne couvre pas les droits de mutation. Risques de double imposition, assurance-vie, trusts, donations — guide complet par Didier Laroussinie.",
  alternates: {
    canonical: "https://vanillestrategie.fr/ressources/blog/succession-internationale-france-maurice",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title: "Succession internationale France-Maurice — 0% de droits, mais attention aux pieges",
    description:
      "Maurice ne taxe pas les successions, mais la convention fiscale France-Maurice ne couvre pas les droits de mutation. Risques de double imposition, assurance-vie, trusts, donations — guide complet par Didier Laroussinie.",
    siteName: "Vanille Stratégie",
    images: [{ url: "https://vanillestrategie.fr/images/hero-paradise.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Succession internationale France-Maurice — 0% de droits, mais attention aux pieges",
    description:
      "Maurice ne taxe pas les successions, mais la convention fiscale France-Maurice ne couvre pas les droits de mutation. Risques de double imposition, assurance-vie, trusts, donations — guide complet par Didier Laroussinie.",
    images: ["https://vanillestrategie.fr/images/hero-paradise.jpg"],
  },
};

export default function SuccessionInternationalePage() {
  return (
    <>
      <BlogPostingJsonLd
        title="Succession internationale France-Maurice — 0% de droits, mais attention aux pieges"
        description="Maurice ne taxe pas les successions, mais la convention fiscale France-Maurice ne couvre pas les droits de mutation. Risques de double imposition, assurance-vie, trusts, donations — guide complet par Didier Laroussinie."
        slug="succession-internationale-france-maurice"
        datePublished="2026-03-17"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          { name: "Succession internationale France-Maurice — 0% de droits, mais attention aux pieges", url: "/ressources/blog/succession-internationale-france-maurice" },
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
              Fiscalite
            </span>
            <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-300">
              Succession
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">· 22 min</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Succession internationale France-Maurice — 0% de droits, mais
            attention aux pieges
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Maurice ne preleve aucun droit de succession. Mais cette promesse
            fiscale cache des pieges redoutables pour les expatries français.
            Convention fiscale incomplète, biens immobiliers en France, règle des
            6 ans, assurance-vie : ce guide decortique chaque risque et chaque
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
            Maurice ne preleve aucun droit de succession, aucun droit de
            donation, aucun impôt sur les heritages. C&apos;est un fait. Il
            n&apos;existe tout simplement pas de legislation mauricienne imposant
            un prelevement au moment de la transmission d&apos;un patrimoine —
            que ce soit entre epoux, en ligne directe ou entre tiers.
          </p>
          <p>
            Pour un Francais habitue au bareme progressif des droits de
            succession (qui peut atteindre 45% en ligne directe et 60% entre
            non-parents), cette absence totale de taxation successorale
            represente un avantage considerable. Sur un patrimoine de 2 millions
            d&apos;euros transmis a deux enfants, l&apos;economie peut depasser
            400 000 euros par rapport à la France.
          </p>
          <p>
            Cette fiscalité zero sur les successions s&apos;inscrit dans la
            philosophie fiscale globale de Maurice : attirer les talents, les
            entrepreneurs et les capitaux internationaux en proposant un cadre
            fiscal simple, competitif et stable. A cela s&apos;ajoutent l&apos;absence
            d&apos;impôt sur les plus-values, l&apos;absence d&apos;impôt sur
            les dividendes et un taux d&apos;IS plafonné a 15%.
          </p>
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 not-prose">
            <p className="text-sm font-semibold text-green-800">
              Bonne nouvelle
            </p>
            <p className="mt-1 text-sm text-green-700">
              Ce 0% s&apos;applique a tous les résidents fiscaux mauriciens, quelle
              que soit leur nationalite. Un Francais installe à Maurice qui
              transmet son patrimoine mauricien a ses enfants (eux aussi
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
            2. Le piege majeur : la convention fiscale France-Maurice ne couvre
            PAS les successions
          </h2>
          <p>
            C&apos;est le point le plus important de cet article, et celui que
            trop d&apos;expatries ignorent. La convention fiscale entre la
            France et Maurice, signee le 11 decembre 1980, est une{" "}
            <strong>
              convention en matière d&apos;impots sur le revenu
            </strong>
            . Elle couvre l&apos;impôt sur le revenu, l&apos;impôt sur les
            sociétés et — dans une certaine mesure — l&apos;impôt sur la
            fortune. Mais elle ne couvre{" "}
            <strong>ni les droits de succession, ni les droits de donation</strong>.
          </p>
          <p>
            Il n&apos;existe aucune convention bilaterale entre la France et
            Maurice en matière de droits de mutation a titre gratuit. Aucune.
            Cela signifie que les mecanismes d&apos;elimination de la double
            imposition prevus par les conventions (credit d&apos;impot, exemption)
            ne s&apos;appliquent tout simplement pas aux successions.
          </p>
          <p>
            En pratique, chaque pays applique sa propre legislation successorale
            de manière unilaterale, sans coordination avec l&apos;autre. Et
            comme Maurice ne taxe pas les successions, c&apos;est la France —
            avec son bareme tres lourd — qui devient le risque principal.
          </p>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 not-prose">
            <p className="text-sm font-semibold text-red-800">
              Danger
            </p>
            <p className="mt-1 text-sm text-red-700">
              L&apos;absence de convention successorale est le piege numero un.
              Beaucoup d&apos;expatries raisonnent ainsi : &ldquo;Je vis a
              Maurice, donc je suis couvert par la convention fiscale, donc la
              France ne peut pas me taxer.&rdquo; C&apos;est faux. La convention
              ne protege que les revenus. Pour les successions, vous êtes en
              terrain decouvert. Chaque pays applique ses propres regles, sans
              aucun mecanisme de coordination.
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
            Le Code general des impots français (articles 750 ter et suivants)
            definit des règles de territorialite tres larges en matière de droits
            de succession. La France s&apos;estime competente pour taxer une
            succession dans trois cas :
          </p>
          <ul>
            <li>
              <strong>Le defunt etait domicilie fiscalement en France</strong>{" "}
              au moment du deces : la totalite du patrimoine mondial est taxable
              en France, quelle que soit la localisation des biens.
            </li>
            <li>
              <strong>
                L&apos;heritier est domicilie fiscalement en France
              </strong>{" "}
              et l&apos;a ete pendant au moins six ans au cours des dix dernières
              annees : la totalite du patrimoine mondial transmis a cet heritier
              est taxable en France (article 750 ter, 2° du CGI).
            </li>
            <li>
              <strong>Les biens transmis sont situes en France</strong>{" "}
              (immobilier, comptes bancaires français, parts de sociétés
              françaises) : ces biens sont taxables en France, quelle que soit la
              residence du defunt ou des heritiers.
            </li>
          </ul>
          <p>
            Le scenario le plus dangereux est le suivant : un Francais installe
            à Maurice depuis 3 ans decede en laissant un patrimoine
            immobilier en France et des comptes bancaires à Maurice. La France
            taxera l&apos;integralite du patrimoine (car les heritiers, restes
            en France, y sont domicilies), tandis que Maurice ne taxera rien.
            Il n&apos;y a pas de double imposition au sens strict — mais la
            facture française reste entière, malgre la residence mauricienne du
            defunt.
          </p>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose">
            <p className="text-sm font-semibold text-amber-800">
              Point d&apos;attention
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Le vrai risque n&apos;est pas la double imposition (puisque Maurice
              ne taxe rien), mais la taxation française integrale malgre
              l&apos;expatriation. Vous pouvez vivre à Maurice depuis 10 ans et
              voir la totalite de votre patrimoine mondial soumis aux droits de
              succession français si vos heritiers resident en France.
              L&apos;expatriation du defunt ne suffit pas : c&apos;est aussi le
              domicile fiscal des heritiers qui compte.
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
            4. La règle des 6 ans : quand les heritiers résidents en France
            restent imposables
          </h2>
          <p>
            L&apos;article 750 ter, 2° du Code general des impots prevoit que
            lorsque l&apos;heritier (ou le legataire, ou le donataire) a ete
            domicilie fiscalement en France pendant{" "}
            <strong>au moins six annees au cours des dix annees</strong>{" "}
            precedant la transmission, la France se considere competente pour
            taxer l&apos;ensemble des biens recus, quelle que soit leur
            localisation.
          </p>
          <p>
            Concretement, si vos enfants vivent en France (ce qui est le cas
            dans la majorite des situations d&apos;expatriation à Maurice), ils
            remplissent quasi systematiquement cette condition. Et dans ce cas,
            la totalite de ce qu&apos;ils reçoivent — y compris les comptes
            bancaires à Maurice, les parts de sociétés mauriciennes, les biens
            immobiliers à Maurice — est soumise aux droits de succession
            français.
          </p>
          <p>
            Cette règle à un corollaire important : même si le defunt a quitte
            la France depuis longtemps et est devenu resident fiscal mauricien,
            la France reste competente du fait du domicile fiscal des heritiers.
            L&apos;expatriation du defunt est neutralisee par la residence des
            beneficiaires.
          </p>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 not-prose">
            <p className="text-sm font-semibold text-red-800">
              Danger
            </p>
            <p className="mt-1 text-sm text-red-700">
              C&apos;est le piege le plus frequent dans les familles
              franco-mauriciennes. Le parent s&apos;installe à Maurice pour
              beneficier de la fiscalité avantageuse, mais les enfants restent en
              France (etudes, emploi, vie de famille). Au deces, la France taxe
              la totalite de la transmission aux taux français. Le 0% mauricien
              ne sert a rien si les heritiers sont en France.
            </p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose mt-4">
            <p className="text-sm font-semibold text-blue-800">
              Conseil de Didier Laroussinie
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Si la planification successorale est l&apos;un des motifs de votre
              expatriation, il faut penser la situation de manière globale :
              residence du defunt, residence des heritiers, localisation des
              biens. Ces trois parametres doivent être alignes. L&apos;expatriation
              du seul parent ne suffit generalement pas a echapper a la
              competence fiscale française.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 5 — Domicile fiscal au moment du deces */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            5. L&apos;importance du domicile fiscal au moment du deces
          </h2>
          <p>
            En matière de succession, c&apos;est le domicile fiscal du defunt{" "}
            <strong>au jour du deces</strong> qui determine la competence
            fiscale de l&apos;Etat de residence. A Maurice, il n&apos;y a pas de
            consequence puisque le pays ne taxe pas les successions. Mais en
            France, l&apos;enjeu est considerable.
          </p>
          <p>
            Si le defunt est considere comme domicilie fiscal en France au jour
            de son deces (au sens de l&apos;article 4 B du CGI : foyer, lieu
            de sejour principal, activité professionnelle principale, centre des
            interets economiques), la France taxe la totalite du patrimoine
            mondial, y compris les biens situes à Maurice.
          </p>
          <p>
            Il est donc essentiel de pouvoir prouver, de manière irrefutable,
            que le defunt etait bien resident fiscal mauricien au moment du
            deces. Cela passe par :
          </p>
          <ul>
            <li>
              Un permis de residence mauricien en cours de validite (Occupation
              Permit, Permanent Residence Permit, ou Retired Non-Citizen)
            </li>
            <li>
              Un certificat de residence fiscale delivre par la Mauritius Revenue
              Authority (MRA)
            </li>
            <li>
              Une presence physique effective à Maurice (plus de 183 jours par an)
            </li>
            <li>
              Le centre des interets economiques et familiaux à Maurice
              (logement principal, compte bancaire principal, activité
              professionnelle)
            </li>
            <li>
              La desinscription du fichier des résidents fiscaux français et la
              regularisation aupres du service des impots des non-residents
            </li>
          </ul>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose">
            <p className="text-sm font-semibold text-amber-800">
              Point d&apos;attention
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Un scenario malheureusement courant : un expatrie partage son temps
              entre Maurice et la France, conserve un logement en France, des
              comptes bancaires actifs en France, un vehicule immatricule en
              France. En cas de deces, l&apos;administration fiscale française
              pourra argumenter que le defunt avait conserve son domicile fiscal
              en France — malgre son permis de residence mauricien. La charge de
              la preuve est sur les heritiers.
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
            Quelle que soit la residence fiscale du defunt, quelle que soit la
            residence fiscale des heritiers, les biens immobiliers situes en
            France sont <strong>toujours</strong> soumis aux droits de succession
            français. C&apos;est le principe de la lex rei sitae — la loi du
            lieu de situation du bien.
          </p>
          <p>
            Cela vaut pour les biens detenus en direct, mais aussi pour les biens
            detenus via une SCI (Societe Civile Immobiliere) française. Les parts
            de SCI detenant de l&apos;immobilier français sont assimilees a des
            biens immobiliers français pour les besoins des droits de succession.
          </p>
          <p>
            Plus subtil : les parts de sociétés etrangeres (y compris
            mauriciennes) dont l&apos;actif est constitue majoritairement de
            biens immobiliers en France peuvent egalement être requalifiees comme
            des actifs immobiliers français par l&apos;administration fiscale.
            Creer une société mauricienne pour detenir un appartement a Paris ne
            vous protege pas.
          </p>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 not-prose">
            <p className="text-sm font-semibold text-red-800">
              Danger
            </p>
            <p className="mt-1 text-sm text-red-700">
              Beaucoup d&apos;expatries pensent qu&apos;en placant leur
              immobilier français dans une structure etrangere, ils echappent aux
              droits de succession français. C&apos;est une erreur grave.
              L&apos;article 750 ter du CGI et la doctrine administrative visent
              explicitement les montages interposant des sociétés etrangeres pour
              detenir de l&apos;immobilier français. Le risque n&apos;est pas
              seulement fiscal — il est penal (abus de droit, fraude fiscale).
            </p>
          </div>
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 not-prose mt-4">
            <p className="text-sm font-semibold text-green-800">
              Bonne pratique
            </p>
            <p className="mt-1 text-sm text-green-700">
              Si vous conservez de l&apos;immobilier en France apres votre
              expatriation à Maurice, integrez-le explicitement dans votre
              planification successorale. Il sera taxe en France, c&apos;est
              inevitable. Mais les abattements legaux (100 000 euros par enfant
              en ligne directe), le demembrement de propriété et les donations
              anticipees permettent de reduire considerablement la facture. La
              cle est d&apos;anticiper.
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
            L&apos;assurance-vie est le placement prefere des Francais — et pour
            cause : en France, elle beneficie d&apos;un regime fiscal
            successoral tres favorable. Les capitaux verses avant 70 ans
            bénéficient d&apos;un abattement de 152 500 euros par beneficiaire
            (article 990 I du CGI), et ceux verses apres 70 ans d&apos;un
            abattement global de 30 500 euros (article 757 B du CGI).
          </p>
          <p>
            Mais attention : ces règles s&apos;appliquent aux contrats français,
            et la question de leur application dans un contexte international est
            complexe. Plusieurs situations doivent être distinguees :
          </p>
          <ul>
            <li>
              <strong>
                Contrat d&apos;assurance-vie français, beneficiaires residents
                en France
              </strong>{" "}
              : les articles 990 I et 757 B s&apos;appliquent normalement,
              quelle que soit la residence du souscripteur. Les abattements
              sont disponibles. C&apos;est le scenario le plus simple.
            </li>
            <li>
              <strong>
                Contrat d&apos;assurance-vie français, beneficiaires non
                residents
              </strong>{" "}
              : une exoneration est possible si le beneficiaire n&apos;a pas ete
              domicilie en France pendant au moins six ans au cours des dix
              dernières annees (condition similaire à la règle des successions).
              C&apos;est un avantage majeur pour les beneficiaires installes a
              Maurice depuis longtemps.
            </li>
            <li>
              <strong>
                Contrat d&apos;assurance-vie souscrit à Maurice
              </strong>{" "}
              : aucune taxation à Maurice (0% de droits de succession). Mais si
              les beneficiaires sont résidents fiscaux français, la France peut
              reclamer des droits de succession sur ces capitaux en vertu de la
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
              réalité est plus nuancee. Le bénéfice fiscal depend entièrement du
              profil du beneficiaire (resident ou non resident, depuis combien de
              temps) et de la localisation du contrat (France ou Maurice). Une
              analyse au cas par cas est indispensable.
            </p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose mt-4">
            <p className="text-sm font-semibold text-blue-800">
              Conseil de Didier Laroussinie
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Pour un expatrie français à Maurice dont les enfants restent en
              France, le contrat d&apos;assurance-vie français reste un outil
              puissant : il permet de transmettre jusqu&apos;a 152 500 euros par
              enfant en franchise de droits (primes versees avant 70 ans). Ce
              n&apos;est pas du 0%, mais c&apos;est infiniment mieux que le
              regime de droit commun des successions. Conservez vos contrats
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
            Maurice dispose d&apos;une legislation moderne sur les trusts,
            codifiee dans le <strong>Trusts Act 2001</strong>. Cette loi permet
            la creation de trusts revocables ou irrevocables, a duree determinee
            ou perpetuelle, avec une grande flexibilite dans la designation des
            beneficiaires et la gestion des actifs.
          </p>
          <p>
            Le trust mauricien peut être un outil puissant de planification
            successorale : les actifs places dans un trust irrevocable sortent
            du patrimoine du constituant (settlor) et ne font donc plus partie
            de sa succession. Au deces du settlor, les actifs du trust sont
            transmis aux beneficiaires selon les termes de l&apos;acte de trust,
            sans passer par la devolution successorale classique.
          </p>
          <p>
            En droit mauricien, cette transmission ne genere aucune imposition.
            Pas de droits de succession, pas de droits de donation, pas de taxe
            sur les distributions du trust.
          </p>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 not-prose">
            <p className="text-sm font-semibold text-red-800">
              Danger
            </p>
            <p className="mt-1 text-sm text-red-700">
              La France à une relation tres hostile avec les trusts. Depuis la
              loi du 29 juillet 2011 et les articles 792-0 bis et 990 J du CGI,
              les biens places dans un trust sont consideres comme faisant
              partie du patrimoine du constituant pour les besoins des droits de
              succession français. Un trust mauricien detenant des actifs au
              bénéfice d&apos;heritiers résidents en France ne vous protege pas
              de la taxation française — il peut même aggraver votre situation
              (taxe speciale de 20% a 45%, voire sanctions pour dissimulation).
            </p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose mt-4">
            <p className="text-sm font-semibold text-amber-800">
              Point d&apos;attention
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Le trust mauricien est un outil pertinent uniquement lorsque le
              constituant, les beneficiaires ET les actifs sont tous en dehors
              du champ fiscal français. Si l&apos;un de ces trois elements a un
              lien avec la France, le trust doit être analyse avec la plus grande
              prudence. Des obligations declaratives lourdes existent en France
              pour les trusts etrangers (declaration annuelle 2181-TRUST).
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
            9. Donation vs succession : strategies d&apos;anticipation
          </h2>
          <p>
            En droit fiscal français, les abattements sur les droits de donation
            se reconstituent tous les 15 ans. Cela signifie qu&apos;un parent
            peut donner 100 000 euros a chaque enfant en franchise de droits, et
            renouveler cette donation 15 ans plus tard. Sur 30 ans, c&apos;est
            donc 300 000 euros par enfant qui peuvent être transmis sans droits,
            en plus de ce qui sera transmis au deces.
          </p>
          <p>
            Cette strategie de donations successives prend tout son sens dans un
            contexte d&apos;expatriation à Maurice. Voici pourquoi :
          </p>
          <ul>
            <li>
              <strong>
                Si le donateur est resident fiscal mauricien ET le donataire
                n&apos;est pas resident fiscal en France
              </strong>{" "}
              (ou l&apos;est depuis moins de 6 ans sur les 10 dernières annees) :
              les dons portant sur des biens situes hors de France echappent
              totalement aux droits de donation français. C&apos;est le scenario
              ideal.
            </li>
            <li>
              <strong>
                Si le donateur est resident fiscal mauricien MAIS le donataire
                est resident fiscal en France
              </strong>{" "}
              (depuis plus de 6 ans) : les dons portant sur des biens situes hors
              de France sont soumis aux droits de donation français. L&apos;abattement
              de 100 000 euros s&apos;applique, mais au-dela, le bareme
              progressif (jusqu&apos;a 45%) s&apos;applique.
            </li>
            <li>
              <strong>
                Les dons portant sur des biens situes en France
              </strong>{" "}
              (immobilier, parts de sociétés françaises) : toujours soumis aux
              droits de donation français, quelle que soit la residence du
              donateur et du donataire.
            </li>
          </ul>
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 not-prose">
            <p className="text-sm font-semibold text-green-800">
              Bonne pratique
            </p>
            <p className="mt-1 text-sm text-green-700">
              Anticipez par des donations de votre vivant. Meme si vos enfants
              sont en France, l&apos;abattement de 100 000 euros par enfant tous
              les 15 ans reste disponible. Sur un patrimoine de 500 000 euros a
              transmettre a deux enfants, trois rounds de donations sur 30 ans
              permettent de transmettre la totalite en franchise de droits (hors
              biens immobiliers français). C&apos;est beaucoup plus efficace que
              de laisser la succession se regler au deces.
            </p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose mt-4">
            <p className="text-sm font-semibold text-blue-800">
              Strategie avancee : le demembrement
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Le demembrement de propriété (donation de la nue-propriété avec
              reserve d&apos;usufruit) est une technique particulierement
              efficace dans un contexte France-Maurice. Le donateur conserve
              l&apos;usufruit (et donc les revenus) du bien, tandis que les
              enfants reçoivent la nue-propriété avec un abattement lie a
              l&apos;age. Au deces du donateur, les enfants deviennent pleins
              proprietaires sans droits supplementaires. Cette technique
              s&apos;applique aussi bien a l&apos;immobilier qu&apos;aux parts
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
            français, le droit fiscal mauricien, le droit civil (regimes
            matrimoniaux, devolution successorale), le droit des sociétés et
            parfois le droit des assurances. Aucune de ces disciplines ne peut
            être apprehendee isolement.
          </p>
          <p>
            C&apos;est precisement la ou un expert-comptable fiscaliste
            specialise en fiscalité internationale apporte une valeur
            decisive. Chez Vanille Strategie, {founder.name} intervient
            personnellement sur chaque dossier de planification successorale,
            avec 40 ans d&apos;expérience en fiscalité internationale et une
            connaissance approfondie des deux legislations.
          </p>
          <p>
            Concretement, notre accompagnement couvre :
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
                chaque heritier potentiel. Ce diagnostic est le prealable
                indispensable à toute strategie.
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                Strategie de transmission optimisee
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Calendrier de donations, choix entre donation simple et
                demembrement, arbitrage entre assurance-vie française et
                mauricienne, structuration societaire adaptee, utilisation
                eventuelle d&apos;un trust mauricien (lorsque les conditions le
                permettent).
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                Coordination avec les conseils français
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Nous travaillons en etroite coordination avec votre notaire
                français, votre avocat fiscaliste et votre conseiller en gestion
                de patrimoine. La planification successorale France-Maurice
                exige une equipe pluridisciplinaire, et nous assurons la
                coherence d&apos;ensemble du dispositif.
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                Suivi dans la duree
              </p>
              <p className="mt-1 text-sm text-blue-700">
                La legislation evolue (en France comme à Maurice), les
                situations familiales changent (mariage, divorce, naissance),
                les patrimoines se transforment. Nous assurons un suivi annuel
                de votre strategie successorale pour l&apos;adapter aux
                evolutions legislatives et personnelles.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose mt-6">
            <p className="text-sm font-semibold text-amber-800">
              Le mot de Didier Laroussinie
            </p>
            <p className="mt-1 text-sm text-amber-700">
              &ldquo;En 40 ans de carriere, j&apos;ai vu des familles
              perdre des centaines de milliers d&apos;euros en droits de
              succession parce qu&apos;elles n&apos;avaient pas anticipe.
              L&apos;expatriation à Maurice ne suffit pas a elle seule a
              proteger le patrimoine familial. Il faut une strategie globale,
              mise en place AVANT le depart — pas apres. Chaque annee de retard
              est une annee d&apos;abattement perdue, une donation non faite, une
              structuration non mise en place. La planification successorale,
              c&apos;est du temps long. Plus on s&apos;y prend tot, plus
              l&apos;economie est importante.&rdquo;
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
            A la lumiere de tout ce qui precede, voici les recommandations clés
            que nous formulons systematiquement a nos clients qui envisagent
            une expatriation à Maurice ou qui y sont deja installes :
          </p>

          <div className="space-y-4 not-prose mt-6">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                1. Faites un audit successoral AVANT votre depart
              </p>
              <p className="mt-1 text-sm text-green-700">
                Cartographiez votre patrimoine, identifiez les actifs a risque
                (immobilier français, parts de SCI, contrats d&apos;assurance-vie),
                analysez la situation fiscale de vos heritiers. Cet audit doit
                être réalise 12 a 18 mois avant le depart pour laisser le temps
                de mettre en place les solutions.
              </p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                2. Commencez les donations le plus tot possible
              </p>
              <p className="mt-1 text-sm text-green-700">
                Les abattements se reconstituent tous les 15 ans. Plus vous
                commencez tot, plus vous pouvez transmettre en franchise de
                droits. La première donation devrait idealement intervenir avant
                le depart de France, pour beneficier pleinement du calendrier
                fiscal.
              </p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                3. Securisez votre domicile fiscal mauricien
              </p>
              <p className="mt-1 text-sm text-green-700">
                Obtenez votre certificat de residence fiscale MRA, maintenez une
                presence physique superieure a 183 jours par an, et assurez-vous
                que votre centre de vie est incontestablement à Maurice. Evitez
                de conserver des indices de domiciliation en France (logement,
                vehicule, comptes bancaires actifs).
              </p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                4. Arbitrez votre patrimoine immobilier français
              </p>
              <p className="mt-1 text-sm text-green-700">
                Si la transmission successorale est un objectif prioritaire,
                envisagez de ceder vos biens immobiliers français (en
                beneficiant de l&apos;exoneration progressive des plus-values
                apres 22 ans de detention) et de reinvestir le produit dans des
                actifs mauriciens, hors du champ fiscal français.
              </p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                5. Ne negligez pas l&apos;assurance-vie
              </p>
              <p className="mt-1 text-sm text-green-700">
                Conservez vos contrats d&apos;assurance-vie français et
                optimisez les versements avant 70 ans pour beneficier de
                l&apos;abattement de 152 500 euros par beneficiaire. Envisagez
                egalement un contrat mauricien pour la part de patrimoine
                qui peut echapper au champ fiscal français.
              </p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                6. Entourez-vous d&apos;une equipe pluridisciplinaire
              </p>
              <p className="mt-1 text-sm text-green-700">
                Expert-comptable fiscaliste (Vanille Strategie), notaire français,
                avocat fiscaliste, conseiller en gestion de patrimoine. La
                planification successorale France-Maurice est trop complexe pour
                être geree par un seul professionnel. Chaque conseil doit
                intervenir dans son domaine de competence, sous la coordination
                d&apos;un pilote qui maitrise les deux legislations.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-red-200 bg-red-50 p-4 not-prose mt-6">
            <p className="text-sm font-semibold text-red-800">
              Erreur fatale a éviter
            </p>
            <p className="mt-1 text-sm text-red-700">
              Ne partez jamais à Maurice en pensant que le 0% de droits de
              succession rèsout tout. C&apos;est une condition necessaire mais
              pas suffisante. Sans planification, sans anticipation des
              implications françaises, sans structuration en amont, vous risquez
              de laisser à vos heritiers une facture fiscale que vous pensiez
              avoir evitee. Le cout d&apos;un accompagnement en planification
              successorale est une fraction de l&apos;economie réalisée — et une
              fraction encore plus infime du cout d&apos;une succession mal
              anticipee.
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
            Sources et references
          </h3>
          <ul className="mt-3 space-y-1 text-xs text-slate-500">
            <li>
              Code general des impots, articles 750 ter et suivants — Droits de
              mutation a titre gratuit —{" "}
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
              Convention fiscale France-Maurice du 11 decembre 1980 (revenus
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
              Articles 990 I et 757 B du CGI — Regime fiscal de
              l&apos;assurance-vie en cas de deces
            </li>
            <li>
              Articles 792-0 bis et 990 J du CGI — Regime fiscal des trusts
              etrangers
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
            Cet article est fourni a titre informatif et ne constitue pas un
            conseil fiscal ou juridique personnalise. La planification
            successorale internationale est un domaine complexe qui depend
            etroitement de votre situation personnelle. Contactez nos experts
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
            votre et construisons une strategie sur mesure.
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
