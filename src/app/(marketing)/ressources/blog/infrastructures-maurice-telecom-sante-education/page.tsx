import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Infrastructures Maurice 2026 — Telecom, routes, sant\u00e9, \u00e9ducation : un pays moderne | Vanille Strat\u00e9gie",
  description:
    "Fibre optique, Metro Express, h\u00f4pitaux priv\u00e9s, \u00e9coles internationales, banques : tour d\u2019horizon complet des infrastructures mauriciennes pour les expatri\u00e9s et investisseurs en 2026.",
  keywords: [
    "infrastructures Maurice",
    "t\u00e9l\u00e9com Maurice fibre optique",
    "Metro Express Maurice",
    "h\u00f4pitaux Maurice",
    "\u00e9coles internationales Maurice",
    "banques Maurice expatri\u00e9",
    "5G Maurice",
    "s\u00e9curit\u00e9 Maurice",
    "\u00e9nergie renouvelable Maurice",
    "qualit\u00e9 de vie Maurice 2026",
  ],
  alternates: {
    canonical: "https://vanillestrategie.fr/ressources/blog/infrastructures-maurice-telecom-sante-education",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title: "Infrastructures Maurice 2026 — Telecom, routes, sant\u00e9, \u00e9ducation : un pays moderne | Vanille Strat\u00e9gie",
    description:
      "Fibre optique, Metro Express, h\u00f4pitaux priv\u00e9s, \u00e9coles internationales, banques : tour d\u2019horizon complet des infrastructures mauriciennes pour les expatri\u00e9s et investisseurs en 2026.",
    siteName: "Vanille Stratégie",
    images: [{ url: "https://vanillestrategie.fr/images/hero-paradise.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infrastructures Maurice 2026 — Telecom, routes, sant\u00e9, \u00e9ducation : un pays moderne | Vanille Strat\u00e9gie",
    description:
      "Fibre optique, Metro Express, h\u00f4pitaux priv\u00e9s, \u00e9coles internationales, banques : tour d\u2019horizon complet des infrastructures mauriciennes pour les expatri\u00e9s et investisseurs en 2026.",
    images: ["https://vanillestrategie.fr/images/hero-paradise.jpg"],
  },
};

export default function InfrastructuresMauricePage() {
  return (
    <>
      <BlogPostingJsonLd
        title="Infrastructures Maurice 2026 — Telecom, routes, sant\u00e9, \u00e9ducation : un pays moderne | Vanille Strat\u00e9gie"
        description="Fibre optique, Metro Express, h\u00f4pitaux priv\u00e9s, \u00e9coles internationales, banques : tour d\u2019horizon complet des infrastructures mauriciennes pour les expatri\u00e9s et investisseurs en 2026."
        slug="infrastructures-maurice-telecom-sante-education"
        datePublished="2026-03-13"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          { name: "Infrastructures Maurice 2026 — Telecom, routes, sant\u00e9, \u00e9ducation : un pays moderne | Vanille Strat\u00e9gie", url: "/ressources/blog/infrastructures-maurice-telecom-sante-education" },
        ]}
      />
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
              Infrastructures
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">&middot; 20 min</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Infrastructures &agrave; Maurice
            <br />
            <span className="text-emerald-400">
              T&eacute;l&eacute;com, routes, sant&eacute;, &eacute;ducation : un
              pays moderne
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Fibre optique &agrave; 1&nbsp;Gbps, Metro Express flambant neuf,
            cliniques priv&eacute;es aux standards internationaux, &eacute;coles
            francophones et anglophones : Maurice offre un niveau
            d&apos;infrastructure qui surprend la plupart des nouveaux
            expatri&eacute;s. Tour d&apos;horizon complet et chiffr&eacute;.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 text-sm font-bold text-white">
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
            <h2>
              Pourquoi les infrastructures sont un crit&egrave;re
              d&eacute;cisif&nbsp;?
            </h2>
            <p>
              Quand un entrepreneur ou un investisseur envisage une
              expatriation, la fiscalit&eacute; attire l&apos;attention en
              premier. Mais c&apos;est la qualit&eacute; des infrastructures
              qui d&eacute;termine le confort quotidien &mdash; et la
              p&eacute;rennit&eacute; de l&apos;installation.
            </p>
            <p>
              Maurice investit chaque ann&eacute;e entre 4 et 5% de son PIB
              dans les infrastructures publiques. R&eacute;sultat : l&apos;
              &icirc;le se classe r&eacute;guli&egrave;rement dans le top 3
              africain pour la qualit&eacute; des infrastructures (rapport
              Global Competitiveness du World Economic Forum). Et sur plusieurs
              indicateurs, elle rivalise avec des pays europ&eacute;ens.
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              1. TÉLÉCOM & INTERNET
              ═══════════════════════════════════════════════════════════ */}
          <div className="prose prose-slate prose-lg mx-auto mt-20 max-w-3xl">
            <h2 className="!text-emerald-700">
              1. T&eacute;l&eacute;com &amp; Internet &mdash; une connectivit&eacute;
              de premier plan
            </h2>

            <h3>Fibre optique : couverture et d&eacute;bits</h3>
            <p>
              Maurice dispose d&apos;un r&eacute;seau fibre optique (FTTH)
              couvrant plus de 95% du territoire habit&eacute;. Trois
              op&eacute;rateurs principaux se partagent le march&eacute; :
            </p>
            <ul>
              <li>
                <strong>Mauritius Telecom (my.t)</strong> &mdash;
                op&eacute;rateur historique, offres fibre jusqu&apos;&agrave;
                1&nbsp;Gbps sym&eacute;trique. Couverture la plus large du
                pays.
              </li>
              <li>
                <strong>Emtel</strong> &mdash; filiale du groupe MC&eacute;l
                (Currimjee), offres fibre et mobile 4G/5G.
              </li>
              <li>
                <strong>MTML (Mahanagar Telephone Mauritius Ltd)</strong>{" "}
                &mdash; troisi&egrave;me op&eacute;rateur, offres
                comp&eacute;titives sur la fibre.
              </li>
            </ul>

            <p>
              Les tarifs sont comp&eacute;titifs : un abonnement fibre
              100&nbsp;Mbps co&ucirc;te environ 30&nbsp;EUR/mois (contre 30-40
              EUR en France). L&apos;offre 1&nbsp;Gbps de Mauritius Telecom
              est propos&eacute;e autour de 60&nbsp;EUR/mois.
            </p>
          </div>

          {/* Callout câbles sous-marins */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-lg font-bold text-emerald-900">
              4 c&acirc;bles sous-marins pour une r&eacute;silience
              maximale
            </h3>
            <p className="mt-2 text-slate-700">
              Maurice est connect&eacute;e au r&eacute;seau mondial par
              4&nbsp;c&acirc;bles sous-marins ind&eacute;pendants, garantissant
              une redondance rare pour une &icirc;le de cette taille :
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              <li>
                <strong>SAFE</strong> (South Africa &ndash; Far East) &mdash;
                relie l&apos;Afrique du Sud &agrave; la Malaisie via Maurice.
                Capacit&eacute; : 3,84&nbsp;Tbps.
              </li>
              <li>
                <strong>LION</strong> (Lower Indian Ocean Network) &mdash;
                connecte Maurice &agrave; La R&eacute;union, Madagascar et le
                Kenya.
              </li>
              <li>
                <strong>MARS</strong> (Mauritius And Rodrigues Submarine) &mdash;
                liaison d&eacute;di&eacute;e entre Maurice et Rodrigues.
              </li>
              <li>
                <strong>T3</strong> (entrer en service 2025-2026) &mdash;
                c&acirc;ble de nouvelle g&eacute;n&eacute;ration reliant
                l&apos;Afrique du Sud &agrave; l&apos;Inde et
                l&apos;Asie-Pacifique, avec un point d&apos;atterrage &agrave;
                Maurice.
              </li>
            </ul>
            <p className="mt-3 text-sm text-slate-600">
              Cette infrastructure place Maurice au niveau de redondance de pays
              comme Singapour ou les &Eacute;mirats &mdash; un atout
              strat&eacute;gique pour les entreprises technologiques.
            </p>
          </div>

          <div className="prose prose-slate prose-lg mx-auto mt-10 max-w-3xl">
            <h3>Cybercity Eb&egrave;ne : le hub tech de l&apos;oc&eacute;an Indien</h3>
            <p>
              La <strong>Cybercity d&apos;Eb&egrave;ne</strong>, situ&eacute;e
              &agrave; 15 minutes de Port-Louis, concentre data centers,
              soci&eacute;t&eacute;s tech, cabinets de conseil et institutions
              financi&egrave;res. Elle abrite plusieurs data centers certifi&eacute;s
              Tier&nbsp;III, op&eacute;r&eacute;s par Mauritius Telecom et des
              acteurs priv&eacute;s.
            </p>
            <p>
              Pour les entreprises SaaS, fintech ou e-commerce, c&apos;est un
              &eacute;cosyst&egrave;me complet : connectivit&eacute; haut
              d&eacute;bit, proximit&eacute; des services bancaires offshore,
              et acc&egrave;s &agrave; un vivier de talents tech qualifi&eacute;s.
            </p>

            <h3>5G : &eacute;tat du d&eacute;ploiement</h3>
            <p>
              Mauritius Telecom a lanc&eacute; son r&eacute;seau 5G en 2023,
              faisant de Maurice l&apos;un des premiers pays d&apos;Afrique
              &agrave; d&eacute;ployer cette technologie. La couverture 5G
              s&apos;&eacute;tend d&eacute;sormais sur les principales zones
              urbaines (Port-Louis, Eb&egrave;ne, Quatre-Bornes, Curepipe,
              Moka) et les zones touristiques c&ocirc;ti&egrave;res (Grand
              Baie, Flic-en-Flac). D&eacute;bits constat&eacute;s : entre 500
              Mbps et 1,2 Gbps en conditions r&eacute;elles.
            </p>
          </div>

          {/* Comparatif télécom */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-blue-900">
              Comparatif connectivit&eacute; : Maurice vs France vs Duba&iuml;
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-blue-200 text-blue-900">
                    <th className="px-3 py-2">Crit&egrave;re</th>
                    <th className="px-3 py-2">Maurice</th>
                    <th className="px-3 py-2">France</th>
                    <th className="px-3 py-2">Duba&iuml;</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-blue-100">
                    <td className="px-3 py-2 font-medium">Fibre FTTH</td>
                    <td className="px-3 py-2">95%+ couverture</td>
                    <td className="px-3 py-2">82% couverture</td>
                    <td className="px-3 py-2">95%+ couverture</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="px-3 py-2 font-medium">D&eacute;bit max fibre</td>
                    <td className="px-3 py-2">1 Gbps</td>
                    <td className="px-3 py-2">8 Gbps</td>
                    <td className="px-3 py-2">2 Gbps</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="px-3 py-2 font-medium">
                      Co&ucirc;t 100&nbsp;Mbps/mois
                    </td>
                    <td className="px-3 py-2">~30 EUR</td>
                    <td className="px-3 py-2">~30-40 EUR</td>
                    <td className="px-3 py-2">~55 EUR</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="px-3 py-2 font-medium">5G</td>
                    <td className="px-3 py-2">Zones urbaines</td>
                    <td className="px-3 py-2">Grandes villes</td>
                    <td className="px-3 py-2">Couverture large</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium">
                      C&acirc;bles sous-marins
                    </td>
                    <td className="px-3 py-2">4</td>
                    <td className="px-3 py-2">15+</td>
                    <td className="px-3 py-2">8+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              2. RÉSEAU ROUTIER & TRANSPORTS
              ═══════════════════════════════════════════════════════════ */}
          <div className="prose prose-slate prose-lg mx-auto mt-20 max-w-3xl">
            <h2 className="!text-emerald-700">
              2. R&eacute;seau routier &amp; transports &mdash; une &icirc;le
              bien desservie
            </h2>

            <h3>Autoroute M1 et r&eacute;seau routier</h3>
            <p>
              L&apos;autoroute <strong>M1</strong> constitue l&apos;axe
              nord-sud principal, reliant Port-Louis &agrave;
              l&apos;a&eacute;roport en environ 45 minutes. Le r&eacute;seau
              routier totalise pr&egrave;s de 2&nbsp;400&nbsp;km de routes
              goudronn&eacute;es, g&eacute;n&eacute;ralement en bon
              &eacute;tat. La conduite se fait &agrave; gauche (h&eacute;ritage
              britannique).
            </p>
            <p>
              Des projets r&eacute;cents ont consid&eacute;rablement
              am&eacute;lior&eacute; le r&eacute;seau : le pont de Soreze,
              l&apos;&eacute;changeur de Jumbo-Phoenix et la route c&ocirc;ti&egrave;re
              Terre-Rouge &ndash; Verdun. Le temps de trajet moyen entre les
              principales villes a &eacute;t&eacute; r&eacute;duit de 20 &agrave;
              30% en dix ans.
            </p>

            <h3>Metro Express &mdash; le tramway moderne</h3>
            <p>
              Inaugur&eacute; en 2019, le <strong>Metro Express</strong> est le
              premier syst&egrave;me de transport en commun l&eacute;ger
              d&apos;Afrique subsaharienne. La ligne relie Curepipe &agrave;
              Port-Louis (26&nbsp;km, 19&nbsp;stations), traversant
              Eb&egrave;ne, Quatre-Bornes et Rose-Hill. Le trajet complet dure
              environ 40 minutes.
            </p>
            <p>
              Le Metro Express transporte plus de 60&nbsp;000 passagers par
              jour. Les rames, fabriqu&eacute;es par Alstom en Espagne, sont
              climatis&eacute;es, ponctuelles et connectent les principaux
              p&ocirc;les &eacute;conomiques de l&apos;&icirc;le. Une
              extension vers R&eacute;duit et C&ocirc;te-d&apos;Or est en
              cours.
            </p>
          </div>

          {/* Callout aéroport */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="text-lg font-bold text-amber-900">
              A&eacute;roport SSR International &mdash; porte d&apos;entr&eacute;e
              sur le monde
            </h3>
            <p className="mt-2 text-slate-700">
              L&apos;a&eacute;roport Sir Seewoosagur Ramgoolam (MRU), situ&eacute;
              au sud-est de l&apos;&icirc;le, accueille plus de 4&nbsp;millions
              de passagers par an. Liaisons directes principales :
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              <li>
                <strong>Paris CDG</strong> &mdash; Air Mauritius &amp; Air France,
                vol direct ~11h
              </li>
              <li>
                <strong>Londres Heathrow/Gatwick</strong> &mdash; Air Mauritius
                &amp; British Airways, ~12h
              </li>
              <li>
                <strong>Duba&iuml;</strong> &mdash; Emirates, ~6h30
              </li>
              <li>
                <strong>La R&eacute;union</strong> &mdash; Air Austral &amp; Air
                Mauritius, ~45 min
              </li>
              <li>
                <strong>Johannesburg</strong> &mdash; Air Mauritius &amp; South
                African Airways, ~4h
              </li>
              <li>
                <strong>Mumbai / Delhi</strong> &mdash; Air Mauritius, ~6-7h
              </li>
              <li>
                <strong>Singapour</strong> &mdash; via Kuala Lumpur ou escale,
                ~10h
              </li>
            </ul>
            <p className="mt-3 text-sm text-slate-600">
              Le terminal a &eacute;t&eacute; r&eacute;nov&eacute; en 2013 et
              offre un confort moderne : Wi-Fi gratuit, salons business, duty
              free. L&apos;a&eacute;roport dispose &eacute;galement d&apos;un
              terminal cargo important pour le commerce international.
            </p>
          </div>

          <div className="prose prose-slate prose-lg mx-auto mt-10 max-w-3xl">
            <h3>Port-Louis : port commercial et Freeport</h3>
            <p>
              Le <strong>port de Port-Louis</strong> est le principal port
              commercial de l&apos;oc&eacute;an Indien occidental. Il
              traite environ 400&nbsp;000 conteneurs EVP par an et
              sert de hub de transbordement entre l&apos;Asie,
              l&apos;Afrique et l&apos;Europe.
            </p>
            <p>
              La <strong>zone Freeport</strong>, cr&eacute;&eacute;e en 1992,
              offre un r&eacute;gime fiscal avantageux pour les entreprises de
              commerce international, logistique et transformation :
              exon&eacute;ration d&apos;imp&ocirc;t sur les b&eacute;n&eacute;fices
              pour les activit&eacute;s d&apos;exportation, pas de droits de
              douane sur les importations de mati&egrave;res premi&egrave;res,
              et libre rapatriement des profits. Plus de 800 entreprises
              op&egrave;rent depuis la Freeport.
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              3. SANTÉ
              ═══════════════════════════════════════════════════════════ */}
          <div className="prose prose-slate prose-lg mx-auto mt-20 max-w-3xl">
            <h2 className="!text-emerald-700">
              3. Sant&eacute; &mdash; un syst&egrave;me dual public/priv&eacute;
              performant
            </h2>

            <h3>Secteur public : gratuit et universel</h3>
            <p>
              Maurice offre un syst&egrave;me de sant&eacute; public
              <strong> gratuit pour tous les r&eacute;sidents</strong>,
              financ&eacute; par l&apos;imp&ocirc;t. L&apos;&icirc;le compte
              5&nbsp;h&ocirc;pitaux r&eacute;gionaux publics, dont le
              principal est le SSRN Hospital &agrave; Pamplemousses. Le
              syst&egrave;me public couvre les urgences, la chirurgie, la
              maternit&eacute;, la cardiologie et l&apos;oncologie.
            </p>
            <p>
              La qualit&eacute; des soins publics est honourable mais les
              temps d&apos;attente peuvent &ecirc;tre longs. La plupart des
              expatri&eacute;s privil&eacute;gient le secteur priv&eacute;.
            </p>

            <h3>Secteur priv&eacute; : standards internationaux</h3>
            <p>
              Le secteur priv&eacute; mauricien offre des soins de qualit&eacute;
              comparable aux standards europ&eacute;ens, &agrave; des tarifs
              nettement inf&eacute;rieurs. Les principales cliniques :
            </p>
            <ul>
              <li>
                <strong>Fortis Clinique Darn&eacute;</strong> (Curepipe) &mdash;
                groupe Fortis Healthcare (Inde), standard JCI.
                Cardiologie, orthop&eacute;die, neurochirurgie. R&eacute;f&eacute;rence
                pour les expatri&eacute;s.
              </li>
              <li>
                <strong>Wellkin Hospital</strong> (Moka) &mdash; h&ocirc;pital
                de derni&egrave;re g&eacute;n&eacute;ration ouvert en 2019.
                Bloc op&eacute;ratoire robotis&eacute;, IRM 3 Tesla,
                canc&eacute;rologie. Partenariat avec l&apos;AP-HP (Paris).
              </li>
              <li>
                <strong>City Clinic</strong> (Port-Louis) &mdash; clinique
                multidisciplinaire, urgences 24/7, maternit&eacute;.
              </li>
              <li>
                <strong>Clinique du Nord</strong> (Baie du Tombeau) &mdash;
                chirurgie g&eacute;n&eacute;rale, gyn&eacute;cologie,
                p&eacute;diatrie.
              </li>
            </ul>

            <h3>Praticiens francophones</h3>
            <p>
              L&apos;immense majorit&eacute; des m&eacute;decins mauriciens
              parlent fran&ccedil;ais couramment. Beaucoup ont &eacute;t&eacute;
              form&eacute;s en France (Bordeaux, Montpellier, Paris) ou &agrave;
              La R&eacute;union. Aucune barri&egrave;re linguistique pour les
              patients francophones &mdash; un avantage consid&eacute;rable par
              rapport &agrave; Duba&iuml; ou Singapour.
            </p>

            <h3>Pharmacies et urgences</h3>
            <p>
              Les pharmacies sont nombreuses et bien approvisionn&eacute;es. Les
              m&eacute;dicaments courants (parac&eacute;tamol, antibiotiques,
              traitements chroniques) sont disponibles sans d&eacute;lai. Les
              urgences des cliniques priv&eacute;es fonctionnent 24h/24, 7j/7,
              avec des temps d&apos;attente g&eacute;n&eacute;ralement
              inf&eacute;rieurs &agrave; 30 minutes.
            </p>
          </div>

          {/* Callout assurance santé */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-rose-200 bg-rose-50 p-6">
            <h3 className="text-lg font-bold text-rose-900">
              Assurance sant&eacute; priv&eacute;e : des co&ucirc;ts
              ma&icirc;tris&eacute;s
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-rose-200 text-rose-900">
                    <th className="px-3 py-2">Poste</th>
                    <th className="px-3 py-2">Maurice (priv&eacute;)</th>
                    <th className="px-3 py-2">France</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-rose-100">
                    <td className="px-3 py-2 font-medium">
                      Consultation g&eacute;n&eacute;raliste
                    </td>
                    <td className="px-3 py-2">15-25 EUR</td>
                    <td className="px-3 py-2">25-50 EUR</td>
                  </tr>
                  <tr className="border-b border-rose-100">
                    <td className="px-3 py-2 font-medium">
                      Consultation sp&eacute;cialiste
                    </td>
                    <td className="px-3 py-2">30-60 EUR</td>
                    <td className="px-3 py-2">50-150 EUR</td>
                  </tr>
                  <tr className="border-b border-rose-100">
                    <td className="px-3 py-2 font-medium">
                      Assurance compl&egrave;te (famille, /an)
                    </td>
                    <td className="px-3 py-2">2 000-4 000 EUR</td>
                    <td className="px-3 py-2">4 000-8 000 EUR</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium">
                      Accouchement (clinique priv&eacute;e)
                    </td>
                    <td className="px-3 py-2">1 500-3 000 EUR</td>
                    <td className="px-3 py-2">2 500-6 000 EUR</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Principaux assureurs : Swan General, Mauritius Union, MUA, et les
              assureurs internationaux (Allianz, Cigna, Henner). Un contrat
              familial couvrant hospitalisation, dentaire et optique
              co&ucirc;te en moyenne 2&nbsp;500&nbsp;EUR/an &mdash; soit deux
              &agrave; trois fois moins qu&apos;en France pour des prestations
              &eacute;quivalentes.
            </p>
          </div>

          <div className="prose prose-slate prose-lg mx-auto mt-10 max-w-3xl">
            <h3>La R&eacute;union : un CHU &agrave; 45 minutes de vol</h3>
            <p>
              Pour les pathologies lourdes n&eacute;cessitant un plateau
              technique de pointe (greffes, neurochirurgie complexe,
              traitement de cancers rares), le <strong>CHU de La
              R&eacute;union</strong> (h&ocirc;pital F&eacute;lix Guyon &agrave;
              Saint-Denis) est accessible en 45 minutes de vol. C&apos;est un
              h&ocirc;pital fran&ccedil;ais de plein exercice, avec un service
              d&apos;&eacute;vacuation sanitaire (EVASAN) op&eacute;rationnel
              24h/24. Cette proximit&eacute; est un filet de
              s&eacute;curit&eacute; unique, qu&apos;aucune autre destination
              d&apos;expatriation &laquo;&nbsp;exotique&nbsp;&raquo; ne peut
              offrir.
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              4. ÉDUCATION
              ═══════════════════════════════════════════════════════════ */}
          <div className="prose prose-slate prose-lg mx-auto mt-20 max-w-3xl">
            <h2 className="!text-emerald-700">
              4. &Eacute;ducation &mdash; un choix large entre syst&egrave;mes
              fran&ccedil;ais, britannique et international
            </h2>

            <h3>Le syst&egrave;me &eacute;ducatif mauricien</h3>
            <p>
              Le syst&egrave;me public mauricien est d&apos;inspiration
              britannique : Primary School Certificate (PSC) en fin de
              primaire, School Certificate (O-Level) et Higher School
              Certificate (A-Level) au secondaire. L&apos;enseignement public
              est gratuit, y compris &agrave; l&apos;universit&eacute;.
              L&apos;anglais est la langue officielle d&apos;enseignement, le
              fran&ccedil;ais &eacute;tant enseign&eacute; comme mati&egrave;re
              obligatoire.
            </p>

            <h3>&Eacute;coles internationales</h3>
            <p>
              Pour les familles d&apos;expatri&eacute;s, Maurice propose
              un large &eacute;ventail d&apos;&eacute;coles internationales
              dispensant les programmes fran&ccedil;ais, britannique ou
              IB (International Baccalaureate) :
            </p>
            <ul>
              <li>
                <strong>Lyc&eacute;e La Bourdonnais</strong> (Curepipe) &mdash;
                &eacute;tablissement conventionn&eacute; AEFE, programme
                fran&ccedil;ais de la maternelle au baccalaur&eacute;at. Plus
                de 2&nbsp;000 &eacute;l&egrave;ves, taux de r&eacute;ussite
                au bac sup&eacute;rieur &agrave; 95%.
              </li>
              <li>
                <strong>Lyc&eacute;e des Mascareignes</strong> (Moka) &mdash;
                &eacute;galement AEFE, programme fran&ccedil;ais complet.
              </li>
              <li>
                <strong>Northfields International High School</strong> (Mapou)
                &mdash; programme britannique (IGCSE / A-Level), campus
                moderne, forte communaut&eacute; internationale.
              </li>
              <li>
                <strong>Le Bocage International School</strong> (Moka) &mdash;
                programme International Baccalaureate (IB), de la maternelle
                au dipl&ocirc;me IB.
              </li>
              <li>
                <strong>Clavis International Primary School</strong> (Moka)
                &mdash; programme Cambridge, focus sur le bilinguisme
                anglais-fran&ccedil;ais.
              </li>
            </ul>
          </div>

          {/* Callout frais de scolarité */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-violet-200 bg-violet-50 p-6">
            <h3 className="text-lg font-bold text-violet-900">
              Frais de scolarit&eacute; comparatifs (par an)
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-violet-200 text-violet-900">
                    <th className="px-3 py-2">&Eacute;tablissement</th>
                    <th className="px-3 py-2">Maternelle</th>
                    <th className="px-3 py-2">Primaire</th>
                    <th className="px-3 py-2">Secondaire</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-violet-100">
                    <td className="px-3 py-2 font-medium">
                      Lyc&eacute;e La Bourdonnais
                    </td>
                    <td className="px-3 py-2">2 500-3 000 EUR</td>
                    <td className="px-3 py-2">3 000-4 000 EUR</td>
                    <td className="px-3 py-2">4 000-5 500 EUR</td>
                  </tr>
                  <tr className="border-b border-violet-100">
                    <td className="px-3 py-2 font-medium">
                      Northfields International
                    </td>
                    <td className="px-3 py-2">3 000-4 000 EUR</td>
                    <td className="px-3 py-2">5 000-7 000 EUR</td>
                    <td className="px-3 py-2">7 000-10 000 EUR</td>
                  </tr>
                  <tr className="border-b border-violet-100">
                    <td className="px-3 py-2 font-medium">Le Bocage (IB)</td>
                    <td className="px-3 py-2">3 500-4 500 EUR</td>
                    <td className="px-3 py-2">5 500-7 500 EUR</td>
                    <td className="px-3 py-2">8 000-11 000 EUR</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium">
                      &Eacute;cole priv&eacute;e Paris (r&eacute;f.)
                    </td>
                    <td className="px-3 py-2">5 000-8 000 EUR</td>
                    <td className="px-3 py-2">6 000-12 000 EUR</td>
                    <td className="px-3 py-2">8 000-18 000 EUR</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Les frais de scolarit&eacute; &agrave; Maurice sont en moyenne 40
              &agrave; 60% inf&eacute;rieurs &agrave; ceux d&apos;une
              &eacute;cole internationale &eacute;quivalente &agrave; Paris,
              Duba&iuml; ou Singapour. Le Lyc&eacute;e La Bourdonnais, en tant
              qu&apos;&eacute;tablissement AEFE, b&eacute;n&eacute;ficie de
              subventions fran&ccedil;aises, ce qui le rend particuli&egrave;rement
              comp&eacute;titif.
            </p>
          </div>

          <div className="prose prose-slate prose-lg mx-auto mt-10 max-w-3xl">
            <h3>Universit&eacute;s</h3>
            <p>
              Maurice compte plusieurs universit&eacute;s reconnues :
            </p>
            <ul>
              <li>
                <strong>Universit&eacute; de Maurice (UoM)</strong> &mdash;
                universit&eacute; publique principale, fond&eacute;e en 1965.
                Programmes en ing&eacute;nierie, droit, management, sciences.
              </li>
              <li>
                <strong>Universit&eacute; de Technologie de Maurice (UTM)</strong>{" "}
                &mdash; sp&eacute;cialis&eacute;e en technologies,
                informatique et design.
              </li>
              <li>
                <strong>Charles Telfair Campus</strong> (affili&eacute; &agrave;
                Curtin University, Australie) &mdash; programmes en business,
                IT et sciences sociales, dipl&ocirc;mes reconnus
                internationalement.
              </li>
              <li>
                <strong>Middlesex University Mauritius</strong> &mdash; campus
                d&eacute;localis&eacute; de l&apos;universit&eacute; de
                Londres.
              </li>
            </ul>
            <p>
              Le gouvernement ambitionne de faire de Maurice un hub
              &eacute;ducatif r&eacute;gional, avec l&apos;objectif
              d&apos;accueillir 100&nbsp;000 &eacute;tudiants internationaux
              &agrave; horizon 2030.
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              5. ÉNERGIE & EAU
              ═══════════════════════════════════════════════════════════ */}
          <div className="prose prose-slate prose-lg mx-auto mt-20 max-w-3xl">
            <h2 className="!text-emerald-700">
              5. &Eacute;nergie &amp; eau &mdash; la transition en marche
            </h2>

            <h3>
              CEB (Central Electricity Board) &mdash; une alimentation fiable
            </h3>
            <p>
              La <strong>CEB</strong> assure la production, le transport et la
              distribution d&apos;&eacute;lectricit&eacute; sur l&apos;ensemble
              du territoire. Le taux d&apos;&eacute;lectrification est de
              100% &mdash; chaque foyer mauricien a acc&egrave;s au
              r&eacute;seau. Les coupures de courant sont rares en zone urbaine
              (moins de 5 heures par an en moyenne, comparable aux standards
              europ&eacute;ens).
            </p>
            <p>
              Le mix &eacute;nerg&eacute;tique repose encore en partie sur les
              &eacute;nergies fossiles (fuel lourd, charbon), mais la
              transition est en cours : photovolta&iuml;que, &eacute;olien et
              biomasse (bagasse de canne &agrave; sucre) repr&eacute;sentent
              d&eacute;j&agrave; environ 25% de la production.
            </p>
          </div>

          {/* Callout renouvelable */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-green-200 bg-green-50 p-6">
            <h3 className="text-lg font-bold text-green-900">
              Objectif 60% d&apos;&eacute;nergie renouvelable en 2030
            </h3>
            <p className="mt-2 text-slate-700">
              Le gouvernement mauricien s&apos;est fix&eacute; un objectif
              ambitieux : atteindre 60% d&apos;&eacute;nergie renouvelable dans
              le mix &eacute;lectrique d&apos;ici 2030. Les leviers : fermes
              solaires (plusieurs projets de 20-50 MW en cours), biomasse
              (bagasse issue de l&apos;industrie sucri&egrave;re), &eacute;olien
              offshore et stockage par batterie. Des incitations fiscales
              encouragent l&apos;installation de panneaux solaires pour les
              particuliers et les entreprises.
            </p>
          </div>

          <div className="prose prose-slate prose-lg mx-auto mt-10 max-w-3xl">
            <h3>Distribution d&apos;eau (CWA)</h3>
            <p>
              La <strong>Central Water Authority (CWA)</strong> g&egrave;re la
              distribution d&apos;eau potable. L&apos;acc&egrave;s &agrave;
              l&apos;eau est quasi universel (99,6% de la population). Le
              r&eacute;seau conna&icirc;t toutefois des coupures
              programm&eacute;es dans certaines zones pendant la saison
              s&egrave;che (octobre-d&eacute;cembre), en raison de la
              d&eacute;pendance aux r&eacute;servoirs pluviaux.
            </p>
            <p>
              Pour les expatri&eacute;s vivant dans des r&eacute;sidences haut de
              gamme ou des Smart Cities, la gestion de l&apos;eau est
              g&eacute;n&eacute;ralement assur&eacute;e par des r&eacute;servoirs
              priv&eacute;s et des syst&egrave;mes de pompage, &eacute;liminant
              tout inconv&eacute;nient li&eacute; aux coupures.
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              6. SÉCURITÉ
              ═══════════════════════════════════════════════════════════ */}
          <div className="prose prose-slate prose-lg mx-auto mt-20 max-w-3xl">
            <h2 className="!text-emerald-700">
              6. S&eacute;curit&eacute; &mdash; un des pays les plus s&ucirc;rs
              d&apos;Afrique
            </h2>
            <p>
              Maurice se classe r&eacute;guli&egrave;rement{" "}
              <strong>premier en Afrique</strong> dans le Global Peace Index.
              Le taux d&apos;homicide est de 1,5 pour 100&nbsp;000 habitants
              &mdash; comparable &agrave; celui de la France (1,3) et tr&egrave;s
              inf&eacute;rieur &agrave; la moyenne mondiale (6,1).
            </p>
            <p>
              Le pays ne dispose <strong>pas d&apos;arm&eacute;e</strong>. La
              s&eacute;curit&eacute; est assur&eacute;e par la{" "}
              <strong>Mauritius Police Force</strong> (environ 13&nbsp;000
              agents) et des unit&eacute;s sp&eacute;ciales (SMF &mdash;
              Special Mobile Force, National Coast Guard). Il n&apos;y a aucune
              menace terroriste identifi&eacute;e et la stabilit&eacute;
              politique est constante depuis l&apos;ind&eacute;pendance en 1968.
            </p>
            <p>
              La petite d&eacute;linquance existe mais reste limit&eacute;e et
              concentr&eacute;e dans certaines zones urbaines. Les quartiers
              r&eacute;sidentiels et les zones c&ocirc;ti&egrave;res
              fr&eacute;quent&eacute;es par les expatri&eacute;s sont
              g&eacute;n&eacute;ralement tr&egrave;s s&ucirc;rs. Les
              r&eacute;sidences dans les Smart Cities et IRS/RES/PDS
              b&eacute;n&eacute;ficient de gardiennage 24/7.
            </p>
          </div>

          {/* Callout sécurité */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-sky-200 bg-sky-50 p-6">
            <h3 className="text-lg font-bold text-sky-900">
              Chiffres cl&eacute;s s&eacute;curit&eacute;
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>
                <strong>Global Peace Index 2025</strong> : 1er en Afrique, 28e
                mondial
              </li>
              <li>
                <strong>Taux d&apos;homicide</strong> : 1,5 / 100 000 hab.
                (France : 1,3 ; Afrique du Sud : 42 ; Br&eacute;sil : 22)
              </li>
              <li>
                <strong>Risque terroriste</strong> : quasi nul (aucun attentat
                recens&eacute;)
              </li>
              <li>
                <strong>Stabilit&eacute; politique</strong> : d&eacute;mocratie
                parlementaire ininterrompue depuis 1968
              </li>
              <li>
                <strong>Arm&eacute;e</strong> : inexistante &mdash; aucun
                conflit arm&eacute; dans l&apos;histoire du pays
              </li>
            </ul>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              7. SYSTÈME BANCAIRE
              ═══════════════════════════════════════════════════════════ */}
          <div className="prose prose-slate prose-lg mx-auto mt-20 max-w-3xl">
            <h2 className="!text-emerald-700">
              7. Syst&egrave;me bancaire &mdash; robuste, international et
              accessible
            </h2>
            <p>
              Maurice est un centre financier international reconnu, avec un
              secteur bancaire supervis&eacute; par la{" "}
              <strong>Bank of Mauritius</strong> (banque centrale) et la{" "}
              <strong>Financial Services Commission (FSC)</strong>. Le pays
              respecte les standards internationaux (FATF, OECD, Common
              Reporting Standard).
            </p>

            <h3>Banques locales de premier plan</h3>
            <ul>
              <li>
                <strong>MCB (Mauritius Commercial Bank)</strong> &mdash;
                premi&egrave;re banque de l&apos;oc&eacute;an Indien par les
                actifs. Pr&eacute;sente dans 10&nbsp;pays. Services premium
                pour les expatri&eacute;s (MCB Private Banking). Banque en
                ligne performante (app MCB Juice).
              </li>
              <li>
                <strong>SBM (State Bank of Mauritius)</strong> &mdash; banque
                publique, r&eacute;seau dense, tarifs comp&eacute;titifs.
                Pr&eacute;sente en Inde, Madagascar et au Kenya.
              </li>
              <li>
                <strong>AfrAsia Bank</strong> &mdash; banque
                sp&eacute;cialis&eacute;e dans le wealth management et les
                clients internationaux. Ouverture de compte possible pour
                les non-r&eacute;sidents. Multi-devises (USD, EUR, GBP, MUR).
              </li>
              <li>
                <strong>ABSA (ex-Barclays)</strong> &mdash; filiale du groupe
                sud-africain ABSA, réseau international.
              </li>
            </ul>

            <h3>Services bancaires pour les expatri&eacute;s</h3>
            <p>
              L&apos;ouverture d&apos;un compte bancaire &agrave; Maurice est
              relativement simple pour les d&eacute;tenteurs d&apos;un permis
              de r&eacute;sidence ou d&apos;un Occupation Permit. Les documents
              requis : passeport, justificatif de domicile, preuve de revenus
              ou contrat de travail, et lettre de r&eacute;f&eacute;rence
              bancaire.
            </p>
            <p>
              Toutes les grandes banques proposent des{" "}
              <strong>cartes Visa/Mastercard internationales</strong> (y compris
              Platinum et Infinite), des services de banque en ligne complets,
              des virements SWIFT sans restriction et des comptes
              multi-devises. Les transferts internationaux sont ex&eacute;cut&eacute;s
              en 1 &agrave; 3 jours ouvrables.
            </p>
          </div>

          {/* Callout bancaire */}
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-indigo-200 bg-indigo-50 p-6">
            <h3 className="text-lg font-bold text-indigo-900">
              Points forts du syst&egrave;me bancaire mauricien
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>
                <strong>Libre circulation des capitaux</strong> &mdash; aucune
                restriction sur le rapatriement des fonds, dividendes ou
                plus-values
              </li>
              <li>
                <strong>Multi-devises</strong> &mdash; comptes en MUR, USD, EUR,
                GBP, ZAR, INR, AUD
              </li>
              <li>
                <strong>Secret bancaire</strong> &mdash; conforme aux standards
                OCDE (CRS), mais respect de la confidentialit&eacute; des
                donn&eacute;es
              </li>
              <li>
                <strong>Fintech</strong> &mdash; paiement mobile (MCB Juice,
                my.t money), QR code, Apple Pay support&eacute;
              </li>
              <li>
                <strong>Accessibilit&eacute;</strong> &mdash; ouverture de
                compte possible &agrave; distance pour certaines banques
                (AfrAsia, MCB)
              </li>
            </ul>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              CONCLUSION
              ═══════════════════════════════════════════════════════════ */}
          <div className="prose prose-slate prose-lg mx-auto mt-20 max-w-3xl">
            <h2>
              Conclusion &mdash; Maurice, bien plus qu&apos;une destination
              fiscale
            </h2>
            <p>
              L&apos;&icirc;le Maurice n&apos;est pas seulement une
              juridiction &agrave; 15% d&apos;IS. C&apos;est un pays moderne,
              dot&eacute; d&apos;infrastructures solides qui permettent de
              vivre et travailler dans des conditions comparables &agrave;
              celles de l&apos;Europe, voire sup&eacute;rieures sur certains
              crit&egrave;res.
            </p>
            <p>
              Fibre optique &agrave; 1&nbsp;Gbps, 4 c&acirc;bles sous-marins,
              5G op&eacute;rationnelle, tramway moderne, a&eacute;roport
              international avec vols directs vers Paris, cliniques priv&eacute;es
              aux standards JCI, &eacute;coles AEFE et IB, banques de classe
              mondiale &mdash; tout est r&eacute;uni pour une installation
              sereine.
            </p>
            <p>
              Et quand on ajoute la s&eacute;curit&eacute; (1er en Afrique),
              la francophonie et la proximit&eacute; du CHU de La R&eacute;union
              pour les urgences m&eacute;dicales, Maurice devient un choix
              rationnel pour tout entrepreneur ou investisseur qui cherche
              l&apos;&eacute;quilibre entre optimisation fiscale et qualit&eacute;
              de vie.
            </p>
          </div>
        </div>
      </article>

      {/* ── Disclaimer ── */}
      <section className="bg-slate-100 py-10">
        <div className="mx-auto max-w-3xl px-4 text-center text-sm text-slate-500">
          <p>
            Les donn&eacute;es pr&eacute;sent&eacute;es dans cet article sont
            issues de sources publiques (ICTA, Statistics Mauritius, CEB, CWA,
            Bank of Mauritius, sites officiels des &eacute;tablissements
            cit&eacute;s) et refl&egrave;tent la situation en mars 2026. Les
            tarifs et chiffres sont indicatifs et peuvent varier. Cet article ne
            constitue pas un conseil professionnel personnalis&eacute;.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Pr&ecirc;t &agrave; vous installer &agrave; Maurice&nbsp;?
          </h2>
          <p className="mt-3 text-slate-400">
            &Eacute;tude de faisabilit&eacute; gratuite et confidentielle par{" "}
            {founder.name}, {founder.title}.
          </p>
          <p className="mt-1 text-sm text-slate-500">
            40+ ans d&apos;exp&eacute;rience &middot; 30-50 dossiers
            d&apos;expatriation par an &middot; Bas&eacute; &agrave; Maurice
            depuis 2015
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-emerald-600 px-10 hover:bg-emerald-700"
              >
                Demander mon &eacute;tude gratuite
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
