import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title:
    "Vivre à Maurice — Qualité de vie, golfs, lifestyle et art de vivre business | Vanille Stratégie",
  description:
    "Découvrez pourquoi l'Île Maurice est la destination n°1 en Afrique pour la qualité de vie (Mercer 2024). Golfs de classe mondiale, gastronomie, plages, lifestyle premium et business décontracté.",
  keywords: [
    "qualité de vie Maurice",
    "vivre à Maurice",
    "golf Ile Maurice",
    "expatriation Maurice lifestyle",
    "Heritage Golf Club Maurice",
    "Anahita Golf Maurice",
    "restaurants gastronomiques Maurice",
    "plages Maurice",
    "expatriation famille Maurice",
    "retraite Ile Maurice",
    "immobilier Maurice",
    "communauté expatriés Maurice",
  ],
};

export default function QualiteDeVieMauricePage() {
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
              Lifestyle
            </span>
            <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300">
              Expatriation
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">&middot; 22 min</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Vivre &agrave; Maurice
            <br />
            <span className="text-emerald-400">
              Qualit&eacute; de vie, golfs, lifestyle
              <br className="hidden sm:block" />
              et art de vivre business
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            300&nbsp;jours de soleil par an. Des golfs
            sign&eacute;s Ernie Els et Bernhard Langer. Des business lunches
            face au lagon. Bienvenue &agrave; l&apos;&Icirc;le Maurice &mdash;
            l&agrave; o&ugrave; performance professionnelle et art de vivre ne
            font qu&apos;un.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 text-sm font-bold text-white">
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
            <p>
              Il y à des destinations o&ugrave; l&apos;on s&apos;expatrie pour
              payer moins d&apos;imp&ocirc;ts. Et il y à Maurice &mdash; o&ugrave;
              l&apos;on s&apos;installe pour{" "}
              <strong>vivre mieux, tout simplement</strong>.
            </p>
            <p>
              Bien s&ucirc;r, la fiscalit&eacute; est imbattable (15% IS flat,
              0% sur les dividendes et plus-values). Mais ce qui fait rester les
              expatri&eacute;s ann&eacute;e apr&egrave;s ann&eacute;e, c&apos;est
              autre chose : un climat id&eacute;al, des golfs de renomm&eacute;e
              mondiale, une gastronomie m&eacute;tiss&eacute;e, un business
              style d&eacute;contract&eacute; mais efficace, et cette
              sensation rare de vivre en vacances tout en restant
              ultra-productif.
            </p>
            <p>
              Cet article est une invitation au voyage. Une immersion dans la
              vie quotidienne &agrave; Maurice &mdash; pour ceux qui
              h&eacute;sitent encore &agrave; franchir le pas.
            </p>
          </div>

          {/* ── 1. N°1 Qualité de vie en Afrique ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2 className="!text-emerald-700">
              N&deg;1 qualit&eacute; de vie en Afrique &mdash; Classement Mercer
            </h2>
            <p>
              Dans le classement <strong>Mercer Quality of Living 2024</strong>,
              Port-Louis se classe <strong>88e mondiale</strong> et{" "}
              <strong>1re en Afrique</strong>. Loin devant Le Cap (94e),
              Johannesburg, Nairobi ou Casablanca.
            </p>
            <p>
              Ce classement n&apos;est pas un sondage d&apos;opinion. Mercer
              &eacute;value 39&nbsp;facteurs objectifs regroup&eacute;s en
              10&nbsp;cat&eacute;gories : environnement politique et social,
              environnement &eacute;conomique, &eacute;ducation,
              sant&eacute;, logement, loisirs, transports, biens de
              consommation, services publics et environnement naturel.
            </p>
            <p>
              En clair, Maurice offre le cadre de vie le plus
              &eacute;quilibr&eacute; du continent &mdash; et rivalise avec
              de nombreuses villes europ&eacute;ennes.
            </p>
          </div>

          {/* Callout : Full Democracy */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6">
            <h3 className="text-lg font-bold text-emerald-800">
              &laquo;&nbsp;Full Democracy&nbsp;&raquo; depuis 1968
            </h3>
            <p className="mt-2 text-sm text-emerald-700">
              Maurice est class&eacute;e &laquo;&nbsp;Full
              Democracy&nbsp;&raquo; par The Economist Intelligence Unit &mdash;
              la seule en Afrique. Ind&eacute;pendante depuis 1968,
              l&apos;&icirc;le n&apos;a jamais connu de coup
              d&apos;&Eacute;tat, de conflit arm&eacute; ni de tension
              g&eacute;opolitique. Alternances pacifiques,
              libert&eacute; de la presse, &Eacute;tat de droit : une
              stabilit&eacute; politique remarquable qui rassure investisseurs
              et familles.
            </p>
          </div>

          {/* ── 2. Le climat ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2 className="!text-emerald-700">
              Un climat de r&ecirc;ve &mdash; 300+ jours de soleil par an
            </h2>
            <p>
              Oubliez la grisaille. &Agrave; Maurice, le soleil brille plus de
              300&nbsp;jours par an. Les temp&eacute;ratures oscillent entre{" "}
              <strong>20&deg;C et 30&deg;C toute l&apos;ann&eacute;e</strong>,
              avec une brise oc&eacute;anique qui rend chaque journ&eacute;e
              agr&eacute;able.
            </p>
            <ul>
              <li>
                <strong>&Eacute;t&eacute; austral (novembre &agrave; avril)</strong> :
                chaud et lumineux, 25-30&deg;C. Id&eacute;al pour la plage,
                le kitesurf et les soir&eacute;es en terrasse.
              </li>
              <li>
                <strong>Hiver austral (mai &agrave; octobre)</strong> :
                doux et sec, 20-25&deg;C. Parfait pour le golf, la
                randonn&eacute;e et les activit&eacute;s outdoor.
              </li>
            </ul>
            <p>
              <strong>La meilleure p&eacute;riode pour s&apos;installer ?</strong>{" "}
              Mai &agrave; juillet. Le temps est id&eacute;al, les
              proc&eacute;dures administratives fonctionnent &agrave; plein
              r&eacute;gime, et vous profitez de l&apos;hiver mauricien &mdash;
              qui ressemble &agrave; un &eacute;t&eacute; m&eacute;diterran&eacute;en.
            </p>
          </div>

          {/* ── 3. Lifestyle premium ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2 className="!text-emerald-700">
              Lifestyle premium &mdash; Entre lagon et montagne
            </h2>

            <h3>Les plages iconiques</h3>
            <p>
              Maurice poss&egrave;de certaines des plus belles plages de
              l&apos;oc&eacute;an Indien &mdash; et vous y &ecirc;tes en
              10&nbsp;minutes, o&ugrave; que vous habitiez sur l&apos;&icirc;le.
            </p>
            <ul>
              <li>
                <strong>Trou aux Biches</strong> &mdash; Sable blanc immacul&eacute;,
                eaux cristallines, snorkeling exceptionnel. R&eacute;guli&egrave;rement
                class&eacute;e parmi les 10&nbsp;plus belles plages du monde.
              </li>
              <li>
                <strong>Belle Mare</strong> &mdash; Plage immense et
                pr&eacute;serv&eacute;e sur la c&ocirc;te Est. Tranquillit&eacute;
                absolue, lagon turquoise &agrave; perte de vue.
              </li>
              <li>
                <strong>Flic-en-Flac</strong> &mdash; L&apos;ambiance
                d&eacute;contract&eacute;e de la c&ocirc;te Ouest. Couchers
                de soleil spectaculaires, restaurants pieds dans le sable.
              </li>
              <li>
                <strong>Le Morne</strong> &mdash; Classs&eacute; au patrimoine
                mondial de l&apos;UNESCO, domin&eacute; par son embl&eacute;matique
                montagne. Spot l&eacute;gendaire de kitesurf.
              </li>
            </ul>

            <h3>Sports et aventure</h3>
            <ul>
              <li>
                <strong>Kitesurf</strong> &mdash; Le Morne et Bel Ombre sont
                des spots de r&eacute;putation mondiale, avec des conditions
                parfaites de mai &agrave; novembre.
              </li>
              <li>
                <strong>Snorkeling et plong&eacute;e</strong> &mdash; R&eacute;cifs
                coralliens intacts, tortues marines, dauphins. Des sites comme
                Blue Bay Marine Park offrent une biodiversit&eacute; exceptionnelle.
              </li>
              <li>
                <strong>P&ecirc;che au gros</strong> &mdash; Marlins, thons,
                dorades coryphenes. Maurice est l&apos;une des meilleures
                destinations au monde pour le big game fishing.
              </li>
              <li>
                <strong>Voile et catamaran</strong> &mdash; Croisi&egrave;res
                priv&eacute;es vers les &icirc;lots, sorties au coucher du
                soleil, r&eacute;gates.
              </li>
            </ul>

            <h3>Randonn&eacute;e et nature</h3>
            <ul>
              <li>
                <strong>Black River Gorges</strong> &mdash; Parc national de
                6&nbsp;574&nbsp;hectares. For&ecirc;ts tropicales, cascades,
                esp&egrave;ces end&eacute;miques. Un &eacute;crin de verdure
                spectaculaire.
              </li>
              <li>
                <strong>Le Morne Brabant</strong> &mdash; Ascension mythique
                (UNESCO). Vue &agrave; 360&deg; sur l&apos;oc&eacute;an depuis
                le sommet.
              </li>
              <li>
                <strong>Pieter Both</strong> &mdash; La montagne la plus
                embl&eacute;matique de Maurice, couronn&eacute;e d&apos;un
                rocher en &eacute;quilibre. Randonn&eacute;e sportive avec
                panorama &agrave; couper le souffle.
              </li>
            </ul>

            <h3>Bien-&ecirc;tre et wellness</h3>
            <p>
              Spas de classe mondiale dans les h&ocirc;tels 5&nbsp;&eacute;toiles,
              retraites yoga face &agrave; l&apos;oc&eacute;an, cours de
              m&eacute;ditation au lever du soleil. Maurice a
              d&eacute;velopp&eacute; une v&eacute;ritable{" "}
              <strong>culture du bien-&ecirc;tre</strong> qui irrigue le
              quotidien. Ici, prendre soin de soi n&apos;est pas un luxe
              &mdash; c&apos;est un mode de vie.
            </p>
          </div>

          {/* ── 4. Golfs de classe mondiale ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2 className="!text-emerald-700">
              Golfs de classe mondiale &mdash; 5 parcours d&apos;exception
            </h2>
            <p>
              Maurice est un paradis pour les golfeurs. Avec 5&nbsp;parcours
              championship de renomm&eacute;e internationale, des conditions
              de jeu parfaites 12&nbsp;mois sur&nbsp;12, et des green fees
              accessibles (100 &agrave; 250&euro; la partie), l&apos;&icirc;le
              attire une communaut&eacute; golfique internationale et
              passionn&eacute;e.
            </p>
          </div>

          {/* Golf cards */}
          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            {/* Heritage Golf Club */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md">
              <h3 className="text-lg font-bold text-slate-900">
                Heritage Golf Club &mdash; Le Ch&acirc;teau
              </h3>
              <p className="mt-1 text-sm text-emerald-600 font-semibold">
                Bel Ombre &middot; Par 72 &middot; 6&nbsp;498 m
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Con&ccedil;u par Peter Matkovich, ce parcours spectaculaire
                serpente entre montagne et lagon sur le domaine historique de
                Bel Ombre. Paysages dramatiques, entretien irr&eacute;prochable,
                clubhouse somptueux. Consid&eacute;r&eacute; comme le plus beau
                parcours de l&apos;oc&eacute;an Indien.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Green fee : environ 160&euro; (gratuit pour les clients Heritage
                Le Telfair et Awali)
              </p>
            </div>

            {/* Ile aux Cerfs */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md">
              <h3 className="text-lg font-bold text-slate-900">
                &Icirc;le aux Cerfs Golf Club
              </h3>
              <p className="mt-1 text-sm text-emerald-600 font-semibold">
                &Icirc;le priv&eacute;e &middot; Par 72 &middot; 6&nbsp;014 m
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Un parcours sign&eacute; <strong>Bernhard Langer</strong> sur
                une &icirc;le priv&eacute;e de 320&nbsp;hectares, accessible
                uniquement par bateau. Une exp&eacute;rience de golf unique au
                monde : fairways bord&eacute;s de cocotiers, vues sur le lagon
                &agrave; chaque trou, sensation de jouer au bout du monde.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Green fee : environ 195 &agrave; 227&euro; selon la saison
                (transfert bateau inclus)
              </p>
            </div>

            {/* Anahita */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md">
              <h3 className="text-lg font-bold text-slate-900">
                Anahita Golf Course
              </h3>
              <p className="mt-1 text-sm text-emerald-600 font-semibold">
                Beau Champ &middot; Par 72 &middot; 6&nbsp;500 m
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Dessin&eacute; par la l&eacute;gende <strong>Ernie Els</strong>,
                Anahita offre 18&nbsp;trous dont 7&nbsp;en bord de lagon.
                Le c&eacute;l&egrave;bre trou 15 avec son green flottant
                n&eacute;cessite un carry de 165&nbsp;m&egrave;tres au-dessus
                de l&apos;eau &mdash; un moment d&apos;anthologie.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Green fee : environ 110 &agrave; 150&euro; selon la saison
              </p>
            </div>

            {/* Tamarina */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md">
              <h3 className="text-lg font-bold text-slate-900">
                Tamarina Golf Club
              </h3>
              <p className="mt-1 text-sm text-emerald-600 font-semibold">
                Tamarin Bay &middot; Par 72 &middot; 6&nbsp;886 m
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Con&ccedil;u par Rodney Wright sur 206&nbsp;hectares, Tamarina
                est le parcours le plus &laquo;&nbsp;sauvage&nbsp;&raquo; de
                Maurice. Le Mont Rempart domine chaque trou, la
                rivi&egrave;re Rempart creuse des gorges spectaculaires
                &agrave; travers le terrain. Golf authentique, nature brute,
                5&nbsp;d&eacute;parts diff&eacute;rents pour tous les niveaux.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Le plus long parcours de l&apos;&icirc;le &mdash; Standards PGA
              </p>
            </div>

            {/* Avalon */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md">
              <h3 className="text-lg font-bold text-slate-900">
                Avalon Golf Estate
              </h3>
              <p className="mt-1 text-sm text-emerald-600 font-semibold">
                Terre Rouge &middot; Par 72
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Parcours moderne situ&eacute; dans l&apos;int&eacute;rieur de
                l&apos;&icirc;le, Avalon offre un cadre verdoyant et
                valloon&eacute; avec vues sur les montagnes. Un parcours
                technique appr&eacute;ci&eacute; des r&eacute;sidents
                &mdash; id&eacute;al pour les parties entre amis ou
                partenaires business.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Green fees parmi les plus accessibles de l&apos;&icirc;le
              </p>
            </div>
          </div>

          {/* Callout Golf */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6">
            <h3 className="text-lg font-bold text-emerald-800">
              Pourquoi les golfeurs choisissent Maurice
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-emerald-700">
              <li>
                <strong>Jouable toute l&apos;ann&eacute;e</strong> &mdash;
                Pas de saison morte, temp&eacute;ratures id&eacute;ales
                12&nbsp;mois sur&nbsp;12
              </li>
              <li>
                <strong>5 parcours championship</strong> en 45&nbsp;minutes
                de route maximum &mdash; une densit&eacute; exceptionnelle
              </li>
              <li>
                <strong>Memberships avantageux</strong> pour les
                r&eacute;sidents &mdash; golf quotidien &agrave;
                co&ucirc;t ma&icirc;tris&eacute;
              </li>
              <li>
                <strong>Tournaments r&eacute;guliers</strong> &mdash; AfrAsia
                Bank Mauritius Open (DP World Tour), MCB Tour Championship,
                &eacute;v&eacute;nements corporate
              </li>
              <li>
                <strong>Networking sur le green</strong> &mdash; Le golf est{" "}
                <em>le</em> sport business &agrave; Maurice
              </li>
            </ul>
          </div>

          {/* ── 5. Gastronomie & Art de vivre ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2 className="!text-emerald-700">
              Gastronomie &amp; art de vivre &mdash; Une cuisine sans
              fronti&egrave;res
            </h2>
            <p>
              La cuisine mauricienne est unique au monde. N&eacute;e de la
              rencontre entre quatre civilisations &mdash; fran&ccedil;aise,
              indienne, chinoise et cr&eacute;ole &mdash; elle produit une{" "}
              <strong>gastronomie fusion</strong> d&apos;une richesse
              incomparable. Chaque repas est une aventure.
            </p>

            <h3>Les grandes tables</h3>
            <ul>
              <li>
                <strong>La Table du Ch&acirc;teau</strong> (Ch&acirc;teau de
                Labourdonnais) &mdash; Cuisine gastronomique contemporaine par le
                Chef Fabio de Poli. Produits du terroir, innovation,
                &eacute;l&eacute;gance coloniale.
              </li>
              <li>
                <strong>La Clef des Champs</strong> (Jacqueline Dalais) &mdash;
                La grande dame de la gastronomie mauricienne. Cuisine
                franco-mauricienne dans un cadre bucolique enchanteur.
              </li>
              <li>
                <strong>The Plantation Club</strong> &mdash; Fusion raffin&eacute;e
                dans un cadre somptueux. L&apos;une des meilleures tables
                de l&apos;&icirc;le.
              </li>
              <li>
                <strong>Gin&apos;ja</strong> &mdash; Maison de style plantation
                class&eacute;e Monument Historique. Produits du domaine
                cultiv&eacute;s en &eacute;co-responsable, cuisine
                cr&eacute;ative et engag&eacute;e.
              </li>
            </ul>

            <h3>Les rhums mauriciens &mdash; Un patrimoine liquide</h3>
            <p>
              Maurice produit des rhums d&apos;exception, reconnus
              internationalement :
            </p>
            <ul>
              <li>
                <strong>Chamarel</strong> &mdash; Rhums premium
                vieillis en f&ucirc;ts de ch&ecirc;ne. La distillerie, nich&eacute;e
                dans les montagnes du sud, est aussi une &eacute;tape
                gastronomique incontournable.
              </li>
              <li>
                <strong>Saint-Aubin</strong> &mdash; Domaine historique, rhums
                arrang&eacute;s l&eacute;gendaires (vanille, caf&eacute;, coco).
                Visite du domaine colonial d&apos;une beaut&eacute; rare.
              </li>
              <li>
                <strong>New Grove</strong> &mdash; Le rhum moderne de Maurice.
                Gamme premium export&eacute;e dans 30+ pays.
              </li>
            </ul>

            <h3>March&eacute;s et vie locale</h3>
            <p>
              Le <strong>Central Market de Port-Louis</strong> est un festival
              de couleurs, d&apos;odeurs et de saveurs. &Eacute;pices,
              fruits tropicaux, street food, artisanat &mdash; l&apos;&acirc;me
              de Maurice se trouve ici. Le march&eacute; de{" "}
              <strong>Grand Baie</strong>, plus touristique, offre une ambiance
              d&eacute;contract&eacute;e face au port de plaisance.
            </p>

            <h3>La culture du &laquo;&nbsp;sundowner&nbsp;&raquo;</h3>
            <p>
              Chaque soir, c&apos;est le m&ecirc;me rituel : un cocktail face
              au coucher de soleil. Sur la c&ocirc;te Ouest, le spectacle est
              grandiose &mdash; le ciel s&apos;embrase de rose, d&apos;orange
              et de violet pendant que vous savourez un{" "}
              <em>ti&apos;punch</em> au rhum Chamarel. C&apos;est ce que les
              Mauriciens appellent le <strong>sundowner</strong> &mdash; et
              c&apos;est sacr&eacute;.
            </p>
          </div>

          {/* ── 6. Business style ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2 className="!text-emerald-700">
              Business style &agrave; Maurice &mdash; &laquo;&nbsp;Work hard,
              live well&nbsp;&raquo;
            </h2>
            <p>
              Oubliez le costume-cravate &eacute;touffant. &Agrave; Maurice,
              le dress code professionnel est{" "}
              <strong>smart casual</strong> : chemise en lin, chinos, mocassins.
              D&eacute;contract&eacute; mais professionnel. On signe des
              contrats en terrasse, un jus de mangue &agrave; la main.
            </p>

            <h3>Le rythme mauricien</h3>
            <ul>
              <li>
                <strong>Matin</strong> &mdash; Ultra-productif. La journ&eacute;e
                commence t&ocirc;t (7h-8h), l&apos;air est frais, la
                concentration maximale. C&apos;est l&agrave; que se font les
                d&eacute;cisions.
              </li>
              <li>
                <strong>D&eacute;jeuner</strong> &mdash; Le business lunch
                mauricien est une institution. Face &agrave; la mer, pieds
                dans le sable ou sur une terrasse avec vue, on discute
                strat&eacute;gie entre le carpaccio de thon et le espresso.
              </li>
              <li>
                <strong>Apr&egrave;s-midi</strong> &mdash; Plus flexible. Calls
                avec l&apos;Europe (fuseau GMT+4, +2h vs Paris), suivi client,
                ou&hellip; 9&nbsp;trous au golf. L&apos;&eacute;quilibre est la
                norme, pas l&apos;exception.
              </li>
            </ul>

            <h3>Networking &agrave; la mauricienne</h3>
            <ul>
              <li>
                <strong>MCCI</strong> (Mauritius Chamber of Commerce &amp;
                Industry) &mdash; La plus ancienne chambre de commerce de
                l&apos;h&eacute;misph&egrave;re sud
              </li>
              <li>
                <strong>CCIFM</strong> (Chambre de Commerce et d&apos;Industrie
                France Maurice) &mdash; R&eacute;seau francophone actif,
                &eacute;v&eacute;nements mensuels
              </li>
              <li>
                <strong>Clubs d&apos;affaires</strong> &mdash; Rotary, Lions,
                Business Mauritius &mdash; le tissu associatif est dense et
                accessible
              </li>
              <li>
                <strong>After-work face au lagon</strong> &mdash; Le networking
                informel qui cr&eacute;e les vraies connexions
              </li>
            </ul>
          </div>

          {/* Callout Business */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-blue-800">
              L&apos;ADN mauricien : productivit&eacute; + art de vivre
            </h3>
            <p className="mt-2 text-sm text-blue-700">
              &Agrave; Maurice, &ecirc;tre performant dans son business
              <em> et </em> profiter de la vie n&apos;est pas
              contradictoire &mdash; c&apos;est la norme. Le fuseau horaire
              (GMT+4) permet de travailler avec l&apos;Europe le matin,
              l&apos;Asie l&apos;apr&egrave;s-midi, et de profiter du coucher
              de soleil &agrave; 18h. Tous les jours de l&apos;ann&eacute;e.
            </p>
          </div>

          {/* ── 7. Immobilier & cadre de vie ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2 className="!text-emerald-700">
              Immobilier &amp; cadre de vie &mdash; Le luxe accessible
            </h2>
            <p>
              &Agrave; Maurice, le r&ecirc;ve immobilier est &agrave;
              port&eacute;e de main. Villas avec piscine priv&eacute;e et vue
              mer, appartements modernes dans des r&eacute;sidences
              s&eacute;curis&eacute;es, penthouses avec terrasse panoramique
              &mdash; le choix est vaste et les prix d&eacute;fient toute
              concurrence.
            </p>

            <h3>Types de biens</h3>
            <ul>
              <li>
                <strong>PDS (Property Development Scheme)</strong> &mdash;
                Villas de luxe dans des domaines r&eacute;sidentiels haut de
                gamme, souvent avec golf, spa, marina. Le PDS donne droit au
                permis de r&eacute;sidence (&agrave; partir de 375&nbsp;000 USD).
              </li>
              <li>
                <strong>Smart Cities</strong> &mdash; Nouvelle
                g&eacute;n&eacute;ration d&apos;ensembles urbains : bureaux,
                r&eacute;sidences, commerces, espaces verts. Moka Smart City
                (ENL) est le plus avanc&eacute;.
              </li>
              <li>
                <strong>Appartements modernes</strong> &mdash; Grand Baie,
                Tamarin, P&eacute;r&eacute;ybere : des r&eacute;sidences
                contemporaines &agrave; quelques minutes de la plage.
              </li>
            </ul>

            <h3>Co&ucirc;t de la vie compar&eacute;</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>D&eacute;pense</th>
                    <th>Maurice</th>
                    <th>Paris</th>
                    <th>Nice</th>
                    <th>Duba&iuml;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Loyer villa 3ch piscine</td>
                    <td>1&nbsp;500-3&nbsp;000&euro;</td>
                    <td>N/A</td>
                    <td>4&nbsp;000-8&nbsp;000&euro;</td>
                    <td>5&nbsp;000-12&nbsp;000&euro;</td>
                  </tr>
                  <tr>
                    <td>D&icirc;ner gastronomique (2 pers.)</td>
                    <td>80-150&euro;</td>
                    <td>200-400&euro;</td>
                    <td>150-300&euro;</td>
                    <td>200-500&euro;</td>
                  </tr>
                  <tr>
                    <td>Personnel de maison (mois)</td>
                    <td>250-400&euro;</td>
                    <td>2&nbsp;500&euro;+</td>
                    <td>2&nbsp;000&euro;+</td>
                    <td>800-1&nbsp;200&euro;</td>
                  </tr>
                  <tr>
                    <td>Green fee 18 trous</td>
                    <td>100-230&euro;</td>
                    <td>80-200&euro;</td>
                    <td>100-250&euro;</td>
                    <td>200-500&euro;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Ajoutez &agrave; cela un <strong>personnel de maison
              disponible et abordable</strong> &mdash; employ&eacute;e de
              maison, jardinier, gardien &mdash; et vous comprenez pourquoi
              tant d&apos;expatri&eacute;s parlent d&apos;un
              &laquo;&nbsp;upgrade de vie&nbsp;&raquo; en arrivant &agrave;
              Maurice.
            </p>
          </div>

          {/* ── 8. Vie sociale & communauté ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2 className="!text-emerald-700">
              Vie sociale &amp; communaut&eacute; &mdash; L&apos;&icirc;le
              de la diversit&eacute;
            </h2>
            <p>
              Maurice est un miracle de cohabitation. Hindous, musulmans,
              chr&eacute;tiens, bouddhistes, cr&eacute;oles, Sino-Mauriciens,
              Franco-Mauriciens &mdash; toutes les communaut&eacute;s vivent
              ensemble dans un respect mutuel qui force l&apos;admiration.
              C&apos;est l&apos;ADN de l&apos;&icirc;le depuis toujours.
            </p>

            <h3>La communaut&eacute; fran&ccedil;aise</h3>
            <p>
              Avec <strong>plus de 12&nbsp;000 Fran&ccedil;ais
              enregistr&eacute;s</strong> (et probablement le double en
              r&eacute;alit&eacute;), Maurice abrite l&apos;une des
              communaut&eacute;s fran&ccedil;aises les plus dynamiques
              d&apos;Afrique. Associations, &eacute;v&eacute;nements
              culturels, soir&eacute;es networking, groupes WhatsApp d&apos;entraide
              &mdash; vous ne serez jamais isol&eacute;.
            </p>

            <h3>Multi-culturalisme au quotidien</h3>
            <ul>
              <li>
                <strong>F&ecirc;tes</strong> &mdash; Divali, Cavadee, Nouvel An
                chinois, No&euml;l, A&iuml;d : &agrave; Maurice, on
                c&eacute;l&egrave;bre toutes les f&ecirc;tes. Chaque semaine
                ou presque apporte une c&eacute;l&eacute;bration.
              </li>
              <li>
                <strong>Langues</strong> &mdash; Fran&ccedil;ais, anglais,
                cr&eacute;ole mauricien, hindi, bhojpuri, mandarin. La
                majorit&eacute; des Mauriciens parlent couramment 2 &agrave; 3
                langues.
              </li>
              <li>
                <strong>Convivialit&eacute;</strong> &mdash; La
                l&eacute;gendaire hospitalit&eacute; mauricienne n&apos;est
                pas un mythe. Sourires, entraide, chaleur humaine : on se
                sent chez soi d&egrave;s les premi&egrave;res semaines.
              </li>
            </ul>
          </div>

          {/* ── 9. Pour les familles ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2 className="!text-emerald-700">
              Pour les familles &mdash; Une enfance au grand air
            </h2>
            <p>
              S&apos;expatrier en famille &agrave; Maurice, c&apos;est offrir
              &agrave; ses enfants un cadre exceptionnel : s&eacute;curit&eacute;,
              nature, &eacute;ducation de qualit&eacute; et ouverture sur le
              monde.
            </p>

            <h3>S&eacute;curit&eacute;</h3>
            <p>
              Maurice est l&apos;un des <strong>pays les plus
              s&ucirc;rs d&apos;Afrique</strong>. Criminalit&eacute; tr&egrave;s
              faible, pas de tensions ethniques, stabilit&eacute; politique
              totale. Les enfants jouent dehors, se d&eacute;placent en
              s&eacute;curit&eacute;, grandissent dans un environnement serein.
            </p>

            <h3>&Eacute;coles internationales francophones</h3>
            <ul>
              <li>
                <strong>Lyc&eacute;e La Bourdonnais</strong> &mdash;
                &Eacute;tablissement de r&eacute;f&eacute;rence,
                homologu&eacute; &Eacute;ducation Nationale fran&ccedil;aise.
                Du primaire au baccalaur&eacute;at.
              </li>
              <li>
                <strong>Lyc&eacute;e des Mascareignes</strong> &mdash;
                Programme fran&ccedil;ais, 750+ &eacute;l&egrave;ves,
                environnement bilingue et international. Pr&eacute;paration
                au Bac g&eacute;n&eacute;ral.
              </li>
              <li>
                <strong>&Eacute;cole du Nord</strong> &mdash; 50+ ans
                d&apos;existence, enseignement fran&ccedil;ais avec dominante
                anglophone. De la maternelle au coll&egrave;ge.
              </li>
              <li>
                <strong>Le Bocage International School</strong> &mdash;
                Cursus anglophone IGCSE et International Baccalaureate pour
                les familles visant les universit&eacute;s anglo-saxonnes.
              </li>
            </ul>

            <h3>Activit&eacute;s enfants</h3>
            <p>
              Baignade dans le lagon, randonn&eacute;es en famille, parcs
              naturels, sorties en catamaran, initiation au surf et au
              snorkeling, visite des parcs animaliers (Casela, La Vanille)
              &mdash; &agrave; Maurice, les enfants vivent dehors, au
              contact de la nature. Chaque week-end est une aventure.
            </p>
          </div>

          {/* ── 10. Pour les retraités ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2 className="!text-emerald-700">
              Pour les retrait&eacute;s &mdash; Le golf tous les jours, la
              plage &agrave; 10&nbsp;minutes
            </h2>
            <p>
              Maurice est devenue la destination de choix des retrait&eacute;s
              francophones qui cherchent &agrave; conjuguer{" "}
              <strong>qualit&eacute; de vie, co&ucirc;t
              ma&icirc;tris&eacute; et douceur de vivre</strong>.
            </p>
            <ul>
              <li>
                <strong>Golf quotidien</strong> &mdash; Avec des memberships
                r&eacute;sidents avantageux, jouer tous les jours devient
                accessible. 5&nbsp;parcours &agrave; moins de 45&nbsp;min.
              </li>
              <li>
                <strong>Sant&eacute; de qualit&eacute;</strong> &mdash;
                Cliniques priv&eacute;es modernes (C-Care, Wellkin Hospital),
                m&eacute;decins francophones, co&ucirc;ts 3 &agrave; 5 fois
                inf&eacute;rieurs &agrave; la France.
              </li>
              <li>
                <strong>Co&ucirc;t de la vie</strong> &mdash; -30 &agrave; -40%
                par rapport &agrave; la France. Votre pension de retraite vous
                offre un niveau de vie bien sup&eacute;rieur.
              </li>
              <li>
                <strong>Communaut&eacute; francophone</strong> &mdash;
                Activit&eacute;s, associations, sorties organis&eacute;es.
                Aucun risque d&apos;isolement.
              </li>
              <li>
                <strong>Fiscalit&eacute;</strong> &mdash; Les pensions de
                retraite sont imposables &agrave; Maurice au taux maximum de
                15%. Selon la convention fiscale franco-mauricienne, certaines
                pensions peuvent b&eacute;n&eacute;ficier d&apos;un traitement
                avantageux.
              </li>
            </ul>
          </div>

          {/* Callout Retraités */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <h3 className="text-lg font-bold text-amber-800">
              Le r&ecirc;ve, concr&egrave;tement
            </h3>
            <p className="mt-2 text-sm text-amber-700">
              Imaginez : r&eacute;veil &agrave; 6h30, caf&eacute; face &agrave;
              l&apos;oc&eacute;an. 9&nbsp;trous de golf avant 10h.
              D&eacute;jeuner l&eacute;ger en terrasse. Apr&egrave;s-midi
              lecture au bord de la piscine. 17h, baignade dans le lagon.
              18h, sundowner sur la plage de Flic-en-Flac. D&icirc;ner de
              poisson frais &agrave; la maison. Tous les jours. 300&nbsp;jours
              de soleil par an. Et une fiscalit&eacute; qui pr&eacute;serve
              votre patrimoine.
            </p>
          </div>

          {/* ── Conclusion ── */}
          <div className="prose prose-slate prose-lg mx-auto mt-16 max-w-3xl">
            <h2 className="!text-emerald-700">
              Maurice &mdash; L&agrave; o&ugrave; la vie est un art
            </h2>
            <p>
              Il y à des &icirc;les o&ugrave; l&apos;on passe des vacances. Et
              il y à Maurice &mdash; o&ugrave; l&apos;on <em>vit</em>.
              V&eacute;ritablement.
            </p>
            <p>
              Un climat parfait. Des golfs de l&eacute;gende. Une gastronomie
              exceptionnelle. Un business environment d&eacute;contract&eacute;
              et efficace. Une s&eacute;curit&eacute; totale. Un co&ucirc;t de
              la vie raisonnable. Et cette chaleur humaine, cette
              convivialit&eacute; mauricienne qui transforme chaque
              journ&eacute;e en petit bonheur.
            </p>
            <p>
              <strong>
                Maurice n&apos;est pas une destination d&apos;expatriation.
                C&apos;est un choix de vie. Le meilleur que vous puissiez
                faire.
              </strong>
            </p>
          </div>
        </div>
      </article>

      {/* ── Disclaimer ── */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            Cet article est fourni &agrave; titre informatif et refl&egrave;te
            l&apos;exp&eacute;rience de vie &agrave; Maurice en mars 2026.
            Les prix et tarifs mentionn&eacute;s sont indicatifs et peuvent
            varier. Pour toute question fiscale li&eacute;e &agrave; votre
            expatriation, contactez nos experts.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Pr&ecirc;t &agrave; vivre le r&ecirc;ve mauricien ?
          </h2>
          <p className="mt-3 text-slate-400">
            Consultation gratuite et confidentielle avec{" "}
            {founder.name}, {founder.title}.
          </p>
          <p className="mt-1 text-sm text-slate-500">
            40+ ans d&apos;exp&eacute;rience &middot; Bas&eacute; &agrave;
            Maurice depuis 2015 &middot; Accompagnement complet de votre
            expatriation
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-emerald-600 px-10 hover:bg-emerald-700"
              >
                Parlons de votre projet
              </Button>
            </Link>
            <Link href="/ressources/simulateur-fiscal">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                Simuler ma fiscalit&eacute;
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
