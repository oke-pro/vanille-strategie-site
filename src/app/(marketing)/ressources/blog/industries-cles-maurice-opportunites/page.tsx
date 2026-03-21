import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title:
    "Les industries cl\u00e9s de Maurice \u2014 Tourisme, finance, BPO, textile et nouvelles opportunit\u00e9s | Vanille Strat\u00e9gie",
  description:
    "Guide complet des secteurs porteurs \u00e0 l\u2019\u00cele Maurice en 2026 : tourisme, services financiers, BPO, textile, ICT, \u00e9conomie bleue, \u00e9nergies renouvelables. Accords commerciaux COMESA, SADC, AfCFTA, FTA Chine, CECPA Inde. Donn\u00e9es EDB et chiffres cl\u00e9s.",
  keywords: [
    "industries Maurice",
    "secteurs porteurs Maurice",
    "tourisme Maurice",
    "BPO Maurice",
    "services financiers Maurice",
    "textile Maurice",
    "investir Maurice",
    "COMESA",
    "SADC",
    "AfCFTA",
    "\u00e9conomie bleue Maurice",
    "Freeport Maurice",
    "FTA Chine Maurice",
    "CECPA Inde Maurice",
    "Vanille Strat\u00e9gie",
  ],
  openGraph: {
    title:
      "Les industries cl\u00e9s de Maurice \u2014 Tourisme, finance, BPO, textile et nouvelles opportunit\u00e9s",
    description:
      "Panorama complet des piliers \u00e9conomiques et des nouveaux secteurs de croissance \u00e0 Maurice. Accords commerciaux, chiffres 2025-2026, opportunit\u00e9s d\u2019investissement.",
    type: "article",
    locale: "fr_FR",
  },
};

export default function IndustriesClesMauricePage() {
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
            <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-300">
              Secteurs &amp; Investissement
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">&middot; 22 min</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Les industries cl&eacute;s de Maurice
            <br />
            <span className="text-amber-400">
              Tourisme, finance, BPO, textile et nouvelles opportunit&eacute;s
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Du sucre au digital, Maurice a b&acirc;ti en 60&nbsp;ans une
            &eacute;conomie diversifi&eacute;e qui p&egrave;se
            15,7&nbsp;milliards USD de PIB. Tour d&apos;horizon des piliers
            historiques et des secteurs &eacute;mergents qui font de
            l&apos;&icirc;le un hub d&apos;investissement unique entre
            l&apos;Asie et l&apos;Afrique.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-400 text-sm font-bold text-white">
              DL
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{founder.name}</p>
              <p className="text-xs text-slate-400">{founder.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 1. L'ECONOMIE MAURICIENNE EN 2026                            */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>
              1. L&apos;&eacute;conomie mauricienne en 2026 : les piliers
              historiques et les nouveaux secteurs
            </h2>
            <p>
              Depuis son ind&eacute;pendance en 1968, Maurice a
              op&eacute;r&eacute; une transformation &eacute;conomique
              remarquable. D&apos;une mono-&eacute;conomie sucri&egrave;re,
              l&apos;&icirc;le s&apos;est successivement tourn&eacute;e vers le{" "}
              <strong>textile</strong> (ann&eacute;es 1980), les{" "}
              <strong>services financiers</strong> (ann&eacute;es 1990), le{" "}
              <strong>tourisme haut de gamme</strong> (ann&eacute;es 2000), puis
              les <strong>technologies de l&apos;information</strong> et
              l&apos;<strong>&eacute;conomie bleue</strong> (ann&eacute;es
              2010-2020).
            </p>
            <p>
              En 2025, le PIB nominal atteint{" "}
              <strong>15,7&nbsp;milliards USD</strong> (FMI), avec une
              croissance r&eacute;elle de <strong>3,2&nbsp;%</strong>, projet&eacute;e
              &agrave; <strong>3,4&nbsp;%</strong> en 2026. L&apos;inflation
              redescend &agrave; <strong>3,5&nbsp;%</strong> fin 2025,
              soutenue par la baisse des prix &eacute;nerg&eacute;tiques
              mondiaux et des conditions financi&egrave;res plus strictes.
            </p>
          </div>

          {/* Chiffres clés macro */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { stat: "15,7 Md$", label: "PIB nominal 2025" },
              { stat: "3,4 %", label: "Croissance pr\u00e9vue 2026" },
              { stat: "3,5 %", label: "Inflation fin 2025" },
              { stat: "55 Md$", label: "Actifs financiers" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center"
              >
                <p className="text-2xl font-bold text-slate-900">
                  {item.stat}
                </p>
                <p className="mt-1 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-slate prose-lg mx-auto mt-10 max-w-3xl">
            <p>
              Cette diversification a &eacute;t&eacute; pilot&eacute;e par
              l&apos;<strong>Economic Development Board</strong> (EDB) et
              soutenue par un cadre fiscal attractif &mdash; 15&nbsp;%
              d&apos;IS flat, 0&nbsp;% sur les dividendes, 0&nbsp;% sur les
              plus-values &mdash; qui a attir&eacute; des investisseurs
              internationaux de tous horizons.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 2. TOURISME & HOTELLERIE                                     */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>2. Tourisme &amp; h&ocirc;tellerie</h2>
            <p>
              Le tourisme reste le <strong>1er secteur employeur</strong> de
              Maurice et contribue &agrave; environ{" "}
              <strong>13-14&nbsp;% du PIB</strong>. En 2023, le secteur a
              g&eacute;n&eacute;r&eacute; <strong>88,7&nbsp;milliards MUR</strong>{" "}
              (1,89&nbsp;Md$) de recettes. Les pr&eacute;visions pour 2025-2026
              tablent sur plus de <strong>2&nbsp;milliards USD</strong> de revenus
              touristiques annuels, port&eacute;s par la hausse de 15&nbsp;% des
              r&eacute;servations h&ocirc;teli&egrave;res.
            </p>
          </div>

          {/* Callout amber */}
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <h3 className="text-lg font-bold text-amber-900">
              Invest Hotel Scheme (IHS) &mdash; investir dans
              l&apos;h&ocirc;tellerie
            </h3>
            <p className="mt-2 text-sm text-amber-800">
              Le programme gouvernemental IHS permet aux investisseurs
              d&apos;acqu&eacute;rir des unit&eacute;s (villas, suites, chambres)
              au sein de projets h&ocirc;teliers. Investissement minimum&nbsp;:{" "}
              <strong>375&nbsp;000 USD</strong> pour obtenir un permis de
              r&eacute;sidence permanente (500&nbsp;000 USD pour les villas
              ind&eacute;pendantes). Le propri&eacute;taire peut occuper son
              bien jusqu&apos;&agrave; <strong>45&nbsp;jours/an</strong> et
              percevoir des revenus locatifs le reste du temps.
            </p>
          </div>

          <div className="prose prose-slate prose-lg mx-auto mt-8 max-w-3xl">
            <h3>&Eacute;cotourisme et tourisme m&eacute;dical</h3>
            <p>
              Maurice d&eacute;veloppe activement l&apos;&eacute;cotourisme
              (parcs marins, r&eacute;serves naturelles, tourisme durable) et
              le <strong>tourisme m&eacute;dical</strong> &mdash; chirurgie
              esth&eacute;tique, soins dentaires, m&eacute;decine de
              bien-&ecirc;tre &mdash; avec des co&ucirc;ts 40 &agrave;
              60&nbsp;% inf&eacute;rieurs &agrave; l&apos;Europe pour une
              qualit&eacute; de soins aux standards internationaux.
            </p>
            <h3>Redirection des flux touristiques</h3>
            <p>
              Les tensions g&eacute;opolitiques au Moyen-Orient ont
              acc&eacute;l&eacute;r&eacute; la <strong>redirection des
              flux touristiques</strong> vers l&apos;oc&eacute;an Indien. Maurice
              en b&eacute;n&eacute;ficie directement, avec une hausse
              sensible des arriv&eacute;es depuis l&apos;Europe et le
              Moyen-Orient &mdash; des voyageurs qui, auparavant, privil&eacute;giaient
              Duba&iuml; ou les destinations de la p&eacute;ninsule arabique.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 3. SERVICES FINANCIERS                                       */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>3. Services financiers &mdash; International Financial Centre</h2>
            <p>
              Maurice s&apos;est impos&eacute;e comme un{" "}
              <strong>International Financial Centre (IFC)</strong> de premier
              plan, r&eacute;gul&eacute; par la{" "}
              <strong>Financial Services Commission (FSC)</strong> et la{" "}
              <strong>Bank of Mauritius (BoM)</strong>. Le secteur repr&eacute;sente{" "}
              <strong>13,4&nbsp;% du PIB</strong>, emploie plus de{" "}
              <strong>9&nbsp;000&nbsp;professionnels</strong> et affiche des
              actifs totaux sup&eacute;rieurs &agrave;{" "}
              <strong>55&nbsp;milliards USD</strong> (juin 2024).
            </p>
          </div>

          {/* Callout blue */}
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-blue-900">
              Global Business Companies (GBC)
            </h3>
            <p className="mt-2 text-sm text-blue-800">
              Maurice accueille des milliers de{" "}
              <strong>Global Business Companies</strong> (GBC) &mdash;
              structures r&eacute;gul&eacute;es par la FSC, utilis&eacute;es
              comme holdings, v&eacute;hicules d&apos;investissement et
              plateformes de trading international. Taux effectif d&apos;IS de{" "}
              <strong>3&nbsp;%</strong> gr&acirc;ce &agrave; la Partial
              Exemption de 80&nbsp;%, avec acc&egrave;s aux{" "}
              <strong>37&nbsp;trait&eacute;s de non-double imposition</strong>.
            </p>
          </div>

          <div className="prose prose-slate prose-lg mx-auto mt-8 max-w-3xl">
            <h3>Les banques de la place</h3>
            <p>
              L&apos;&icirc;le compte <strong>19&nbsp;banques</strong>{" "}
              commerciales offrant un spectre complet de services : retail,
              corporate, trade finance, private banking, wealth management et
              digital banking. Les principaux acteurs sont :
            </p>
            <ul>
              <li>
                <strong>MCB (Mauritius Commercial Bank)</strong> &mdash; 1re
                banque d&apos;Afrique de l&apos;Est par la capitalisation
              </li>
              <li>
                <strong>SBM (State Bank of Mauritius)</strong> &mdash;
                pr&eacute;sence en Inde, &agrave; Madagascar et au Kenya
              </li>
              <li>
                <strong>AfrAsia Bank</strong> &mdash; sp&eacute;cialiste du
                private banking et du global business
              </li>
              <li>
                <strong>HSBC, Standard Bank (ex-Barclays/Absa), Investec, ABC
                Banking</strong>
              </li>
            </ul>

            <h3>Assurances, fonds et fintech</h3>
            <p>
              Le march&eacute; de l&apos;assurance, les fonds
              d&apos;investissement (CIS, private equity, venture capital) et
              les fintechs compl&egrave;tent l&apos;&eacute;cosyst&egrave;me. Le
              ratio d&apos;ad&eacute;quation des fonds propres (CAR) atteint{" "}
              <strong>21,9&nbsp;%</strong>, bien au-dessus des exigences de
              B&acirc;le III, t&eacute;moignant de la solidit&eacute; du
              syst&egrave;me.
            </p>

            <h3>Licence VASP &mdash; actifs virtuels</h3>
            <p>
              Depuis le <strong>VAITOS Act 2021</strong>, la FSC
              r&eacute;glemente les Virtual Asset Service Providers (VASP) avec{" "}
              <strong>5&nbsp;classes de licence</strong> : Broker-Dealer (M),
              Wallet Services (O), Custodian (R), Advisory (I) et Marketplace
              (S). Le processus de screening est fix&eacute; &agrave;{" "}
              <strong>30&nbsp;jours maximum</strong>. Depuis mars 2025, les
              obligations AML/CFT renforc&eacute;es incluent le monitoring en
              temps r&eacute;el des transactions transfrontali&egrave;res.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 4. BPO / CALL CENTERS / OUTSOURCING                         */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>4. BPO, call centers &amp; outsourcing</h2>
            <p>
              Maurice s&apos;est positionn&eacute;e comme un{" "}
              <strong>hub BPO francophone et anglophone</strong> de
              r&eacute;f&eacute;rence. Le secteur ICT-BPO repr&eacute;sente{" "}
              <strong>5,6&nbsp;% du PIB</strong> (2024), regroupe environ{" "}
              <strong>975&nbsp;entreprises</strong> et emploie plus de{" "}
              <strong>33&nbsp;000&nbsp;personnes</strong>.
            </p>
          </div>

          {/* Callout green */}
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border-l-4 border-green-500 bg-green-50 p-6">
            <h3 className="text-lg font-bold text-green-900">
              Pourquoi Maurice pour le BPO ?
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-green-800">
              <li>
                &bull; Main-d&apos;&oelig;uvre <strong>bilingue
                fran&ccedil;ais/anglais</strong> (+ cr&eacute;ole, hindi,
                mandarin)
              </li>
              <li>
                &bull; Fuseau <strong>GMT+4</strong> : couverture
                horaire Europe (matin) + Asie (apr&egrave;s-midi)
              </li>
              <li>
                &bull; Co&ucirc;ts salariaux <strong>60 &agrave; 70&nbsp;%
                inf&eacute;rieurs</strong> &agrave; la France
              </li>
              <li>
                &bull; Infrastructure fibre optique via c&acirc;bles
                sous-marins (SAFE, LION, MARS)
              </li>
              <li>
                &bull; Stabilit&eacute; politique et juridique (common law)
              </li>
            </ul>
          </div>

          <div className="prose prose-slate prose-lg mx-auto mt-8 max-w-3xl">
            <h3>Entreprises majeures install&eacute;es</h3>
            <p>
              Parmi les acteurs internationaux op&eacute;rant depuis
              Maurice :
            </p>
            <ul>
              <li>
                <strong>Accenture</strong> &mdash; pr&eacute;sent depuis 2002,
                plus de 3&nbsp;500&nbsp;employ&eacute;s, 1er employeur du
                secteur ICT-BPO
              </li>
              <li>
                <strong>Ceridian (Dayforce)</strong> &mdash; centre de
                d&eacute;veloppement logiciel et services RH
              </li>
              <li>
                <strong>Convergys, Orange Business Services, Huawei,
                Allianz</strong>
              </li>
              <li>
                Acteurs locaux : <strong>Rogers Call Centre, Leal
                Communications</strong>
              </li>
            </ul>
            <p>
              Le secteur ICT devrait g&eacute;n&eacute;rer{" "}
              <strong>156&nbsp;millions USD</strong> de revenus en 2025,
              avec une projection &agrave;{" "}
              <strong>204&nbsp;millions USD</strong> d&apos;ici 2030
              (croissance annuelle de 5,4&nbsp;%).
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 5. TEXTILE & MANUFACTURING                                   */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>5. Textile &amp; manufacturing</h2>
            <p>
              N&eacute; dans les ann&eacute;es 1980 avec la cr&eacute;ation
              des <strong>zones franches d&apos;exportation (EPZ)</strong>,
              le secteur textile reste un pilier &eacute;conomique majeur. En
              2024, les exportations textile &amp; habillement ont atteint{" "}
              <strong>20&nbsp;milliards MUR</strong>. Le secteur manufacturier
              dans son ensemble contribue &agrave;{" "}
              <strong>12,8&nbsp;% du PIB</strong>, exporte 1&nbsp;500
              lignes de produits vers <strong>115&nbsp;pays</strong> et
              emploie pr&egrave;s de <strong>60&nbsp;000&nbsp;personnes</strong>.
            </p>

            <h3>Mont&eacute;e en gamme</h3>
            <p>
              Maurice a op&eacute;r&eacute; une mont&eacute;e en gamme
              spectaculaire : du t-shirt basique au{" "}
              <strong>pr&ecirc;t-&agrave;-porter haut de gamme</strong>. Des
              marques internationales (Hugo Boss, Ralph Lauren, Calvin Klein,
              Woolworths) font produire leurs collections &agrave; Maurice.
              L&apos;entreprise locale <strong>CMT (Compagnie Mauricienne de
              Textile)</strong> est devenue un leader r&eacute;gional de la
              confection haut de gamme. La gamme de produits couvre les
              costumes, denim, sportswear, lingerie, childrenswear et
              uniformes.
            </p>

            <h3>Freeport &mdash; logistique et r&eacute;exportation</h3>
            <p>
              Le <strong>Mauritius Freeport</strong>, class&eacute;{" "}
              <strong>1er en Afrique et 7e mondial</strong> (FDI Global Free
              Zones of the Year Awards 2023), offre un espace
              d&eacute;velopp&eacute; de plus de{" "}
              <strong>545&nbsp;000&nbsp;m&sup2;</strong> avec un volume
              commercial de 262&nbsp;474&nbsp;tonnes m&eacute;triques. Il compte{" "}
              <strong>215+&nbsp;op&eacute;rateurs</strong> et g&eacute;n&egrave;re
              plus de 4&nbsp;500&nbsp;emplois.
            </p>
          </div>

          {/* Callout blue */}
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-blue-900">
              Avantages Freeport pour les investisseurs
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-blue-800">
              <li>
                &bull; Taux d&apos;IS de <strong>3&nbsp;%</strong>
              </li>
              <li>
                &bull; <strong>8&nbsp;ans d&apos;exon&eacute;ration
                fiscale</strong> pour les nouveaux op&eacute;rateurs
                investissant 50&nbsp;M+ MUR
              </li>
              <li>
                &bull; Exemption de droits de douane et de TVA sur les
                importations de biens et d&apos;&eacute;quipements
              </li>
              <li>
                &bull; Maurice b&eacute;n&eacute;ficie d&apos;un{" "}
                <strong>acc&egrave;s pr&eacute;f&eacute;rentiel &agrave; plus de
                70&nbsp;%</strong> des march&eacute;s mondiaux pour le
                textile, avec des marges pr&eacute;f&eacute;rentielles de 25
                &agrave; 44,1&nbsp;%
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 6. ICT & TECH                                                */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>6. ICT &amp; tech &mdash; Cybercity &amp; transformation digitale</h2>
            <p>
              Le hub technologique de Maurice est ancr&eacute; &agrave;{" "}
              <strong>Cybercity Eb&egrave;ne</strong>, complexe de bureaux
              accueillant des data centers, des entreprises tech et le si&egrave;ge
              de BD&nbsp;Star Management Services (le p&ocirc;le comptable du
              groupe Vanille Strat&eacute;gie). Cybercity concentre l&apos;essentiel
              de l&apos;&eacute;cosyst&egrave;me ICT mauricien.
            </p>
            <p>
              Le gouvernement a lanc&eacute; un{" "}
              <strong>plan de transformation digitale 2025-2029</strong>{" "}
              visant &agrave; faire de Maurice un{" "}
              <strong>Digital Island</strong> : d&eacute;ploiement de la 5G,
              digitalisation des services publics, d&eacute;veloppement de
              comp&eacute;tences tech, et attraction de startups
              internationales.
            </p>
            <p>
              Pour une analyse d&eacute;taill&eacute;e de l&apos;&eacute;cosyst&egrave;me
              tech mauricien, consultez notre article d&eacute;di&eacute; :{" "}
              <Link
                href="/ressources/blog/ecosysteme-tech-startups-maurice"
                className="text-blue-600 hover:underline"
              >
                L&apos;&eacute;cosyst&egrave;me tech &amp; startups &agrave;
                Maurice &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 7. ECONOMIE BLEUE                                            */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>7. &Eacute;conomie bleue (Blue Economy)</h2>
            <p>
              Maurice dispose d&apos;une{" "}
              <strong>
                Zone &Eacute;conomique Exclusive (ZEE) d&apos;environ
                2,3&nbsp;millions de km&sup2;
              </strong>{" "}
              (dont environ 1,3&nbsp;million de km&sup2; incontest&eacute;s),
              soit pr&egrave;s de <strong>1&nbsp;000&nbsp;fois</strong> sa
              superficie terrestre (2&nbsp;040&nbsp;km&sup2;). Cette immensit&eacute;
              maritime fait de l&apos;&eacute;conomie bleue un{" "}
              <strong>secteur prioritaire de l&apos;EDB</strong>.
            </p>
          </div>

          {/* Callout green */}
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border-l-4 border-green-500 bg-green-50 p-6">
            <h3 className="text-lg font-bold text-green-900">
              Secteurs de l&apos;&eacute;conomie bleue
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-green-800">
              <li>
                &bull; <strong>Aquaculture</strong> &mdash; &eacute;levage de
                poissons, crevettes, concombres de mer
              </li>
              <li>
                &bull; <strong>P&ecirc;che durable</strong> &mdash;
                valorisation des ressources halieutiques
              </li>
              <li>
                &bull; <strong>Oc&eacute;anographie</strong> &mdash;
                recherche marine, biotechnologies
              </li>
              <li>
                &bull; <strong>&Eacute;nergies marines</strong> &mdash;
                &eacute;nergie thermique des mers (OTEC), &eacute;olien offshore
              </li>
              <li>
                &bull; <strong>Tourisme nautique</strong> &mdash;
                plong&eacute;e, croissi&egrave;res, sports aquatiques
              </li>
            </ul>
          </div>

          <div className="prose prose-slate prose-lg mx-auto mt-8 max-w-3xl">
            <p>
              Maurice co-g&egrave;re &eacute;galement une zone de plateau
              continental &eacute;tendu d&apos;environ{" "}
              <strong>400&nbsp;000&nbsp;km&sup2;</strong> avec les Seychelles,
              suite &agrave; une soumission conjointe aux Nations Unies en
              2011. Ce potentiel maritime, encore largement
              inexploit&eacute;, repr&eacute;sente une opportunit&eacute;
              majeure pour les investisseurs pionniers.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 8. ENERGIES RENOUVELABLES                                    */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>8. &Eacute;nergies renouvelables</h2>
            <p>
              Maurice a revu &agrave; la hausse son objectif&nbsp;:{" "}
              <strong>60&nbsp;% d&apos;&eacute;nergies renouvelables</strong>{" "}
              dans le mix &eacute;lectrique d&apos;ici 2030 (contre 35&nbsp;%
              initialement), accompagn&eacute; de l&apos;abandon progressif du
              charbon. Le pays part d&apos;un niveau de 24&nbsp;% de
              renouvelables actuellement.
            </p>

            <h3>Les chantiers en cours</h3>
            <ul>
              <li>
                <strong>300&nbsp;000&nbsp;syst&egrave;mes solaires</strong> sur
                toitures d&apos;ici 2027
              </li>
              <li>
                <strong>150&nbsp;MW</strong> de centrales solaires
                agro-industrielles d&apos;ici 2028
              </li>
              <li>
                3&nbsp;sites pilotes de <strong>solaire flottant</strong>{" "}
                d&apos;ici 2028
              </li>
              <li>
                30&nbsp;syst&egrave;mes hybrides <strong>PV-BESS</strong>{" "}
                (photovolta&iuml;que + stockage) d&apos;ici 2029
              </li>
              <li>
                3&nbsp;projets pilotes <strong>agri-photovolta&iuml;ques</strong>{" "}
                d&apos;ici 2027
              </li>
              <li>
                5&nbsp;unit&eacute;s de <strong>dessalement solaire</strong>{" "}
                d&apos;ici 2030
              </li>
            </ul>
          </div>

          {/* Callout amber */}
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <h3 className="text-lg font-bold text-amber-900">
              Opportunit&eacute;s d&apos;investissement EnR
            </h3>
            <p className="mt-2 text-sm text-amber-800">
              Le gouvernement via la <strong>MARENA</strong> (Mauritius
              Renewable Energy Agency) propose des incitations
              fiscales pour les investisseurs dans le solaire, l&apos;&eacute;olien
              et la biomasse. Les entreprises locales et &eacute;trang&egrave;res
              peuvent participer aux appels d&apos;offres pour la
              production d&apos;&eacute;nergie ind&eacute;pendante (IPP). Un
              march&eacute; &agrave; fort potentiel pour les
              investisseurs europ&eacute;ens disposant d&apos;un savoir-faire
              en &eacute;nergies propres.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 9. MAURICE — PORTE D'ENTREE VERS L'AFRIQUE                  */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>9. Maurice &mdash; porte d&apos;entr&eacute;e vers l&apos;Afrique</h2>
            <p>
              La position strat&eacute;gique de Maurice, entre l&apos;Asie et
              l&apos;Afrique, est renforc&eacute;e par son appartenance &agrave;
              trois blocs r&eacute;gionaux majeurs :
            </p>
          </div>

          {/* 3 blocs */}
          <div className="mx-auto mt-8 max-w-3xl grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-lg font-bold text-slate-900">COMESA</p>
              <p className="mt-1 text-sm text-slate-600">
                March&eacute; commun de l&apos;Afrique orientale et australe.{" "}
                <strong>21&nbsp;pays membres</strong>,{" "}
                <strong>500&nbsp;M+ de consommateurs</strong>. Tarifs
                pr&eacute;f&eacute;rentiels, libre circulation des biens.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-lg font-bold text-slate-900">SADC</p>
              <p className="mt-1 text-sm text-slate-600">
                Southern African Development Community.{" "}
                <strong>16&nbsp;pays membres</strong> dont l&apos;Afrique du
                Sud, le Mozambique, la Tanzanie. Int&eacute;gration
                &eacute;conomique r&eacute;gionale.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-lg font-bold text-slate-900">AfCFTA</p>
              <p className="mt-1 text-sm text-slate-600">
                Zone de libre-&eacute;change continentale africaine. Entr&eacute;e
                en vigueur en 2021.{" "}
                <strong>1,4&nbsp;milliard de consommateurs</strong>,{" "}
                march&eacute; int&eacute;gr&eacute; de 3&nbsp;400&nbsp;Md$.
              </p>
            </div>
          </div>

          <div className="prose prose-slate prose-lg mx-auto mt-8 max-w-3xl">
            <p>
              Cette triple appartenance permet aux entreprises
              &eacute;tablies &agrave; Maurice de b&eacute;n&eacute;ficier de
              <strong>
                {" "}tarifs pr&eacute;f&eacute;rentiels ou nuls
              </strong>{" "}
              sur une grande partie du continent africain, tout en
              profitant d&apos;un cadre juridique et fiscal stable.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 10. COMMERCE AVEC L'AFRIQUE DU SUD                          */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>10. Commerce avec l&apos;Afrique du Sud</h2>
            <p>
              Les relations commerciales entre Maurice et l&apos;Afrique du Sud
              sont historiques et strat&eacute;giques. Les deux pays sont
              membres de la SADC et li&eacute;s par une{" "}
              <strong>
                convention de non-double imposition bilat&eacute;rale
              </strong>{" "}
              qui &eacute;limine la double taxation sur les revenus
              transfrontaliers.
            </p>

            <h3>Maurice comme plateforme d&apos;investissement</h3>
            <p>
              De nombreux groupes internationaux utilisent Maurice comme{" "}
              <strong>plateforme d&apos;investissement vers l&apos;Afrique du
              Sud</strong> &mdash; et r&eacute;ciproquement. Les GBC
              mauriciennes permettent de structurer des investissements en
              Afrique du Sud avec un taux effectif d&apos;IS de 3&nbsp;%,
              tout en b&eacute;n&eacute;ficiant du trait&eacute; fiscal
              bilat&eacute;ral.
            </p>

            <h3>Secteurs d&apos;&eacute;change</h3>
            <ul>
              <li>
                <strong>Services financiers</strong> &mdash; flux
                d&apos;investissement via les GBC
              </li>
              <li>
                <strong>Tourisme</strong> &mdash; l&apos;Afrique du Sud est un
                march&eacute; source majeur pour Maurice
              </li>
              <li>
                <strong>Textile</strong> &mdash; exportations mauriciennes
                vers le march&eacute; sud-africain (pr&eacute;f&eacute;rences
                SADC)
              </li>
              <li>
                <strong>IT &amp; BPO</strong> &mdash; sous-traitance
                r&eacute;ciproque, d&eacute;veloppement logiciel
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 11. AUTRES ACCORDS COMMERCIAUX PRIVILEGIES                   */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>11. Accords commerciaux privil&eacute;gi&eacute;s</h2>
            <p>
              Au-del&agrave; des blocs r&eacute;gionaux, Maurice a
              n&eacute;goci&eacute; des accords bilat&eacute;raux
              strat&eacute;giques qui lui conf&egrave;rent un{" "}
              <strong>
                acc&egrave;s pr&eacute;f&eacute;rentiel &agrave; environ 68&nbsp;%
                de la population mondiale
              </strong>{" "}
              (source&nbsp;: EDB).
            </p>
          </div>

          {/* Tableau accords */}
          <div className="mx-auto mt-8 max-w-3xl overflow-x-auto rounded-xl border border-slate-200 shadow-lg">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Accord</th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Partenaire
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Entr&eacute;e en vigueur
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Avantage cl&eacute;
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-slate-700">
                    FTA Chine-Maurice
                  </td>
                  <td className="px-4 py-3 text-slate-600">Chine</td>
                  <td className="px-4 py-3 text-slate-600">Janvier 2021</td>
                  <td className="px-4 py-3 text-slate-600">
                    Acc&egrave;s duty-free sur{" "}
                    <strong>7&nbsp;504&nbsp;lignes tarifaires</strong>.
                    1er FTA Chine-Afrique.
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-700">
                    CECPA Inde-Maurice
                  </td>
                  <td className="px-4 py-3 text-slate-600">Inde</td>
                  <td className="px-4 py-3 text-slate-600">Avril 2021</td>
                  <td className="px-4 py-3 text-slate-600">
                    Acc&egrave;s pr&eacute;f&eacute;rentiel sur{" "}
                    <strong>615&nbsp;produits</strong> dont 376 en duty-free.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-slate-700">
                    EPA Union europ&eacute;enne
                  </td>
                  <td className="px-4 py-3 text-slate-600">UE (27 pays)</td>
                  <td className="px-4 py-3 text-slate-600">En vigueur</td>
                  <td className="px-4 py-3 text-slate-600">
                    Acc&egrave;s pr&eacute;f&eacute;rentiel au march&eacute;
                    europ&eacute;en. Marges de 25 &agrave; 44&nbsp;% sur le
                    textile.
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-700">
                    AGOA
                  </td>
                  <td className="px-4 py-3 text-slate-600">&Eacute;tats-Unis</td>
                  <td className="px-4 py-3 text-slate-600">En vigueur</td>
                  <td className="px-4 py-3 text-slate-600">
                    Acc&egrave;s pr&eacute;f&eacute;rentiel au march&eacute;
                    am&eacute;ricain pour les produits manufactur&eacute;s.
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-slate-700">
                    Accords bilat&eacute;raux
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Japon, Turquie, Pakistan&hellip;
                  </td>
                  <td className="px-4 py-3 text-slate-600">Divers</td>
                  <td className="px-4 py-3 text-slate-600">
                    Trait&eacute;s d&apos;investissement et de non-double
                    imposition.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Callout amber */}
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <h3 className="text-lg font-bold text-amber-900">
              Le chiffre cl&eacute;
            </h3>
            <p className="mt-2 text-sm text-amber-800">
              Gr&acirc;ce &agrave; ses accords r&eacute;gionaux (COMESA, SADC,
              AfCFTA) et bilat&eacute;raux (Chine, Inde, UE, &Eacute;tats-Unis),
              Maurice offre un{" "}
              <strong>
                acc&egrave;s pr&eacute;f&eacute;rentiel &agrave; environ
                68&nbsp;% de la population mondiale
              </strong>
              . Aucune autre juridiction de cette taille ne peut en dire autant.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 12. COMMENT VS ACCOMPAGNE LES ENTREPRISES                   */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl">
            <h2>
              12. Comment Vanille Strat&eacute;gie accompagne les entreprises
            </h2>
            <p>
              Quel que soit votre secteur cible, notre &eacute;quipe vous
              guide de la strat&eacute;gie &agrave; l&apos;op&eacute;rationnel :
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-lg font-bold text-slate-900">
                Cr&eacute;ation de soci&eacute;t&eacute;
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Domestic Company, GBC ou Authorised Company &mdash; nous
                identifions la structure optimale en fonction de votre secteur
                d&apos;activit&eacute; et de vos march&eacute;s cibles.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-lg font-bold text-slate-900">
                Conseil accords commerciaux
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Nous identifions les accords (COMESA, FTA Chine, CECPA Inde,
                EPA UE) les plus pertinents pour maximiser vos avantages
                tarifaires et fiscaux.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-lg font-bold text-slate-900">
                Comptabilit&eacute; multi-juridictions
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Via <strong>BD&nbsp;Star Management Services</strong>, nous
                g&eacute;rons votre comptabilit&eacute; en normes IFRS et
                fran&ccedil;aises, avec reporting en temps r&eacute;el
                adapt&eacute; aux op&eacute;rations multi-pays.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-lg font-bold text-slate-900">
                Mise en relation institutionnelle
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Nous facilitons vos d&eacute;marches aupr&egrave;s de
                l&apos;<strong>EDB</strong>, de la <strong>FSC</strong>, de la{" "}
                <strong>MCCI</strong> (Chambre de Commerce) et des
                autorit&eacute;s sectorielles concern&eacute;es.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* SOURCES                                                      */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900">Sources</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>
              <a
                href="https://edbmauritius.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                EDB Mauritius
              </a>{" "}
              &mdash; Economic Development Board (secteurs, Market Access,
              Blue Economy, Renewable Energy, Manufacturing, ICT)
            </li>
            <li>
              <a
                href="https://www.fscmauritius.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                FSC Mauritius
              </a>{" "}
              &mdash; Financial Services Commission (GBC, VASP, licences)
            </li>
            <li>
              <a
                href="https://www.imf.org/en/countries/mus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                FMI &mdash; Mauritius
              </a>{" "}
              &mdash; PIB, croissance, inflation (donn&eacute;es 2025-2026)
            </li>
            <li>
              <a
                href="https://www.trade.gov/country-commercial-guides/mauritius-trade-agreements"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                U.S. Department of Commerce
              </a>{" "}
              &mdash; Accords commerciaux de Maurice
            </li>
            <li>
              <a
                href="https://www.bom.mu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Bank of Mauritius
              </a>{" "}
              &mdash; Donn&eacute;es bancaires, CAR, taux directeur
            </li>
            <li>
              <a
                href="https://tourism.govmu.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Ministry of Tourism, Mauritius
              </a>{" "}
              &mdash; Statistiques touristiques
            </li>
            <li>
              <a
                href="https://blueconomy.govmu.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Ministry of Blue Economy, Mauritius
              </a>{" "}
              &mdash; Ressources marines, ZEE
            </li>
            <li>
              <a
                href="https://www.mauritiustrade.mu/en/trade-agreements/afcfta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Mauritius Trade Easy
              </a>{" "}
              &mdash; AfCFTA, accords r&eacute;gionaux
            </li>
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* CTA FINAL                                                    */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Vous souhaitez investir &agrave; Maurice ?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Quel que soit votre secteur &mdash; tourisme, finance, BPO,
            textile, tech, &eacute;conomie bleue ou &eacute;nergies
            renouvelables &mdash; notre &eacute;quipe vous accompagne de la
            strat&eacute;gie &agrave; l&apos;op&eacute;rationnel. Cr&eacute;ation
            de soci&eacute;t&eacute;, permis de r&eacute;sidence,
            comptabilit&eacute;, fiscalit&eacute; : tout est pris en charge.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-amber-600 px-10 hover:bg-amber-700"
              >
                Demander une &eacute;tude gratuite &rarr;
              </Button>
            </Link>
            <Link href="/ressources/blog/edb-mauritius-role-programmes">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                D&eacute;couvrir le r&ocirc;le de l&apos;EDB &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
