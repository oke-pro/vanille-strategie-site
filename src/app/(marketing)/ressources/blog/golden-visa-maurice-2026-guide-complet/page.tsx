import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Golden Visa Maurice 2026 : guide complet du nouveau programme pour investisseurs | Vanille Stratégie",
  description:
    "Le Conseil des ministres lance un Golden Visa Scheme pour attirer les HNWI à Maurice. Conditions, avantages fiscaux, procédures EDB, comparatif international. Par Didier Laroussinie, Expert-Comptable.",
  keywords: [
    "golden visa Maurice",
    "golden visa Maurice 2026",
    "visa doré Maurice",
    "golden visa scheme Mauritius",
    "investir Maurice",
    "HNWI Maurice",
    "résidence Maurice investisseur",
    "EDB Mauritius golden visa",
    "fiscalité Maurice 0%",
    "relocalisation Moyen-Orient Maurice",
    "permis résidence Maurice",
    "IRS RES PDS Maurice",
  ],
  alternates: {
    canonical:
      "https://vanillestrategie.fr/ressources/blog/golden-visa-maurice-2026-guide-complet",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title:
      "Golden Visa Maurice 2026 : guide complet du nouveau programme pour investisseurs | Vanille Stratégie",
    description:
      "Le Conseil des ministres lance un Golden Visa Scheme pour attirer les HNWI à Maurice. Conditions, avantages fiscaux, procédures EDB, comparatif international.",
    siteName: "Vanille Stratégie",
    images: [
      { url: "https://vanillestrategie.fr/images/hero-paradise.jpg" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Golden Visa Maurice 2026 : guide complet du nouveau programme pour investisseurs",
    description:
      "Le Conseil des ministres lance un Golden Visa Scheme pour attirer les HNWI à Maurice. Conditions, avantages fiscaux, procédures EDB, comparatif international.",
    images: ["https://vanillestrategie.fr/images/hero-paradise.jpg"],
  },
};

export default function GoldenVisaMaurice2026Page() {
  return (
    <>
      <BlogPostingJsonLd
        title="Golden Visa Maurice 2026 : guide complet du nouveau programme pour investisseurs"
        description="Le Conseil des ministres lance un Golden Visa Scheme pour attirer les HNWI à Maurice. Conditions, avantages fiscaux, procédures EDB, comparatif international."
        slug="golden-visa-maurice-2026-guide-complet"
        datePublished="2026-04-13"
        wordCount={4200}
        articleSection="Actualité"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          {
            name: "Golden Visa Maurice 2026",
            url: "/ressources/blog/golden-visa-maurice-2026-guide-complet",
          },
        ]}
      />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-amber-950 via-slate-900 to-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ressources/blog"
            className="text-sm text-amber-300 hover:underline"
          >
            &larr; Tous les articles
          </Link>

          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-amber-600/30 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-amber-300">
              Actualité — Avril 2026
            </span>
            <span className="text-xs text-slate-400">· 14 min de lecture</span>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Golden Visa Maurice 2026
            <br />
            <span className="text-amber-400">
              Le guide complet du nouveau programme
              <br className="hidden sm:block" />
              {" "}pour investisseurs
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Le 10 avril 2026, le Conseil des ministres mauricien adopte une mesure
            historique : un <strong>Golden Visa Scheme</strong> pour attirer
            immédiatement les investisseurs et grandes fortunes. Contexte
            géopolitique, avantages fiscaux, procédures EDB, comparatif
            international — tout ce qu&apos;il faut savoir.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-sm font-bold text-white">
              DL
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{founder.name}</p>
              <p className="text-xs text-slate-400">{founder.title}</p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Étude de faisabilité gratuite →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Chiffres clés ── */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {[
            { value: "0 %", label: "Plus-values, dividendes, succession" },
            { value: "15 %", label: "IS maximum (effectif 3 %)" },
            { value: "375k $", label: "Seuil résidence immobilière" },
            { value: "2 ans", label: "Vers citoyenneté (500k $)" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-amber-600 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Article ── */}
      <article className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* ══ 1. CONTEXTE ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              1. Contexte : la guerre au Moyen-Orient accélère tout
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Le conflit au Moyen-Orient a des répercussions directes sur Maurice, pays fortement dépendant des importations. Le 8 avril 2026, le Premier ministre <strong>Dr Navin Ramgoolam</strong> préside une réunion de crise. Le même jour, l&apos;Iran et les États-Unis signent un cessez-le-feu conditionnel de deux semaines — jugé fragile par les autorités. Le détroit d&apos;Hormuz est temporairement rouvert au trafic maritime.
              </p>
              <p>
                Deux jours plus tard, le <strong>Conseil des ministres du 10 avril 2026</strong> adopte un plan d&apos;urgence global articulé autour de six piliers. Le Golden Visa Scheme en est la mesure phare, ciblant les investisseurs et grandes fortunes pour une <strong>relocalisation immédiate</strong> à Maurice.
              </p>
            </div>

            {/* Callout contexte */}
            <div className="mt-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-amber-800">
                Plan d&apos;urgence — 6 piliers
              </p>
              <ul className="mt-3 space-y-2 text-sm text-amber-900">
                <li>• <strong>Sécurité énergétique</strong> — Stock stratégique 30-45 jours, +15 % tarifs électricité au 1er mai, 405 MW renouvelable</li>
                <li>• <strong>Sécurité alimentaire</strong> — Diversification imports (Madagascar, Namibie, Kenya)</li>
                <li>• <strong>Tourisme</strong> — 9 vols hebdo supplémentaires, réorientation marchés</li>
                <li>• <strong>PME</strong> — SME Resilience Scheme, moratoires bancaires</li>
                <li>• <strong>Groupes vulnérables</strong> — Crisis Solidarity Fund</li>
                <li>• <strong>Opportunités économiques</strong> — Golden Visa Scheme (ci-dessous)</li>
              </ul>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 2. LE GOLDEN VISA ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              2. Le Golden Visa Scheme : ce que l&apos;on sait
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Le programme est conçu pour permettre une <strong>relocalisation immédiate</strong> des investisseurs et grandes fortunes vers Maurice. Il se distingue des schémas existants (IRS, RES, PDS) par sa vocation d&apos;urgence et son positionnement explicite comme alternative pour les investisseurs impactés par l&apos;instabilité au Moyen-Orient.
              </p>
              <p>
                En parallèle, le gouvernement a créé un <strong>Fast-Track Concierge Service</strong> au sein de l&apos;Economic Development Board (EDB), spécifiquement dédié aux HNWI entrants. Ce guichet accéléré couvre l&apos;ensemble des démarches : permis de résidence, ouverture de comptes bancaires, immatriculation d&apos;entreprises, inscription scolaire des enfants.
              </p>
            </div>

            {/* 6 mesures en grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Golden Visa Scheme",
                  desc: "Nouveau programme de résidence accélérée pour investisseurs et HNWI",
                  icon: "🎫",
                },
                {
                  title: "Fast-Track Concierge EDB",
                  desc: "Guichet unique et prioritaire pour toutes les démarches administratives",
                  icon: "⚡",
                },
                {
                  title: "Licences financières accélérées",
                  desc: "FSC + Registrar of Companies : délais réduits sans compromis sur la due diligence",
                  icon: "🏦",
                },
                {
                  title: "Accès Freeport immédiat",
                  desc: "Opérateurs du Moyen-Orient : pas de nouvelle demande pour opérer en zone franche",
                  icon: "🚢",
                },
                {
                  title: "Extension TVA/MICE",
                  desc: "Événements sportifs internationaux et remises de prix TV/cinéma inclus",
                  icon: "🎬",
                },
                {
                  title: "Comptes VOSTRO Inde",
                  desc: "Accélération des transactions commerciales en monnaies locales",
                  icon: "🇮🇳",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-2xl">{item.icon}</p>
                  <h3 className="mt-2 text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 3. SCHÉMAS EXISTANTS ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              3. Schémas de résidence existants : où se situe le Golden Visa ?
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Maurice proposait déjà plusieurs voies d&apos;accès à la résidence pour les investisseurs étrangers, toutes gérées par l&apos;EDB. Le Golden Visa se positionne au-dessus, avec des délais de traitement sans précédent.
            </p>

            {/* Tableau comparatif */}
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300 bg-slate-100">
                    <th className="px-4 py-3 font-semibold text-slate-900">Schéma</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Investissement min.</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Durée</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Citoyenneté</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-amber-50 font-semibold">
                    <td className="px-4 py-3 text-amber-800">Golden Visa (nouveau)</td>
                    <td className="px-4 py-3 text-amber-800">À confirmer</td>
                    <td className="px-4 py-3 text-amber-800">À confirmer</td>
                    <td className="px-4 py-3 text-amber-800">Accélérée</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">IRS / RES / PDS</td>
                    <td className="px-4 py-3">375 000 USD</td>
                    <td className="px-4 py-3">20 ans renouvelable</td>
                    <td className="px-4 py-3">7 ans (2 ans si 500k $)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">G+2 (appartements)</td>
                    <td className="px-4 py-3">6M MUR (~135k USD)</td>
                    <td className="px-4 py-3">Durée de propriété</td>
                    <td className="px-4 py-3">Résidence si ≥ 375k $</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Occupation Permit</td>
                    <td className="px-4 py-3">50 000 USD</td>
                    <td className="px-4 py-3">10 ans renouvelable</td>
                    <td className="px-4 py-3">7 ans de résidence</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Premium Visa</td>
                    <td className="px-4 py-3">Revenus extérieurs</td>
                    <td className="px-4 py-3">1 an renouvelable</td>
                    <td className="px-4 py-3">Non applicable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 4. AVANTAGES FISCAUX ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              4. Pourquoi Maurice ? L&apos;avantage fiscal décisif
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                C&apos;est ce qui rend le Golden Visa particulièrement attractif. En tant que praticiens sur le terrain, nous le constatons quotidiennement : Maurice offre une <strong>continuité fiscale avantageuse</strong> pour un investisseur quittant Dubaï ou une autre place du Moyen-Orient, tout en proposant un cadre juridique bilingue (français et anglais) hérité du droit civil français et de la common law britannique.
              </p>
            </div>

            {/* Grid avantages fiscaux */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Impôt sociétés", value: "15 %", sub: "Effectif 3 % pour GBC" },
                { title: "Plus-values", value: "0 %", sub: "Aucun impôt" },
                { title: "Dividendes", value: "0 %", sub: "Aucune retenue à la source" },
                { title: "Succession", value: "0 %", sub: "Aucun droit" },
                { title: "Fortune / Patrimoine", value: "0 %", sub: "Aucune taxe" },
                { title: "Conventions fiscales", value: "40+", sub: "France, UK, Inde, Chine, EAU" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 text-center"
                >
                  <p className="text-3xl font-bold text-amber-600">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.sub}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 5. COMPARATIF INTERNATIONAL ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              5. Comparatif international : Maurice face aux Golden Visas du monde
            </h2>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300 bg-slate-100">
                    <th className="px-4 py-3 font-semibold text-slate-900">Pays</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Investissement min.</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Plus-values</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Citoyenneté</th>
                    <th className="px-4 py-3 font-semibold text-slate-900">Langue FR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-amber-50 font-semibold">
                    <td className="px-4 py-3 text-amber-800">Maurice</td>
                    <td className="px-4 py-3 text-amber-800">375k USD</td>
                    <td className="px-4 py-3 text-amber-800">0 %</td>
                    <td className="px-4 py-3 text-amber-800">2-7 ans</td>
                    <td className="px-4 py-3 text-amber-800">Oui</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Émirats (EAU)</td>
                    <td className="px-4 py-3">545k USD</td>
                    <td className="px-4 py-3">0 %</td>
                    <td className="px-4 py-3">Impossible</td>
                    <td className="px-4 py-3">Non</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Portugal</td>
                    <td className="px-4 py-3">250k EUR</td>
                    <td className="px-4 py-3">28 %</td>
                    <td className="px-4 py-3">5 ans</td>
                    <td className="px-4 py-3">Non</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Grèce</td>
                    <td className="px-4 py-3">250k EUR</td>
                    <td className="px-4 py-3">15 %</td>
                    <td className="px-4 py-3">7 ans</td>
                    <td className="px-4 py-3">Non</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Maurice est le <strong>seul programme</strong> qui combine fiscalité zéro sur les plus-values, cadre juridique bilingue français-anglais, chemin vers la citoyenneté, et accès privilégié aux marchés africains via le CECPA avec l&apos;Inde et les accords commerciaux régionaux.
            </p>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 6. MESURES COMPLÉMENTAIRES ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              6. Mesures complémentaires pour les professionnels de la finance
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                La <strong>Financial Services Commission</strong> (FSC) et le Registrar of Companies ont reçu instruction d&apos;accélérer l&apos;octroi des licences financières, sans compromettre les exigences de due diligence. Les prestataires de services financiers souhaitant se relocaliser à Maurice bénéficieront de délais réduits — un point crucial pour les fonds d&apos;investissement, les family offices et les sociétés de gestion de patrimoine.
              </p>
              <p>
                Les opérateurs de zone franche déjà établis au Moyen-Orient pourront opérer dans la <strong>Freeport mauricienne sans passer par une nouvelle procédure</strong> de demande. Cette mesure d&apos;<em>accelerated clearance</em> élimine un obstacle administratif majeur et permet une transition quasi immédiate des activités.
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 7. QUALITÉ DE VIE ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              7. Bien plus qu&apos;un avantage fiscal : la qualité de vie
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Pour les entrepreneurs francophones, Maurice offre un cadre de vie exceptionnel : cinq golfs de classe mondiale, un système de santé en amélioration constante, des écoles internationales (Le Bocage, Clavis, Northfields), une communauté francophone importante, et un décalage horaire de seulement +2h avec Paris en été.
              </p>
              <p>
                Le coût de la vie reste sensiblement inférieur à celui de Dubaï ou de Singapour, notamment pour le logement et l&apos;éducation. L&apos;écosystème entrepreneurial se structure rapidement avec des incubateurs comme Turbine et La Plage Factory. Les liaisons aériennes directes avec Paris (Air Mauritius, Air France), Dubaï (Emirates) et les principales capitales africaines assurent une connectivité internationale satisfaisante.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "25 °C", label: "Moyenne annuelle" },
                { value: "GMT+4", label: "+2h Paris en été" },
                { value: "#1", label: "Qualité de vie en Afrique" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-slate-50 p-5 text-center">
                  <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 8. CE QUI RESTE À VENIR ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              8. Ce qui reste à confirmer
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Le communiqué du Conseil des ministres précise que les ministères et organismes publics définiront les modalités de mise en œuvre en consultation avec les parties prenantes. Nous anticipons :
              </p>
            </div>

            <div className="mt-6 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-800">
                Modalités attendues
              </p>
              <ul className="mt-3 space-y-2 text-sm text-blue-900">
                <li>• Seuil d&apos;investissement (probablement supérieur aux 375k $ actuels)</li>
                <li>• Délais de traitement accélérés (quelques jours vs plusieurs semaines)</li>
                <li>• Avantages regroupement familial et accès bancaire</li>
                <li>• Date de lancement effective du programme</li>
                <li>• Conditions d&apos;éligibilité détaillées</li>
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-bold text-amber-800">
                Notre recommandation
              </p>
              <p className="mt-2 text-sm leading-relaxed text-amber-900">
                N&apos;attendez pas la publication des modalités finales. Les premières étapes — étude de faisabilité, structuration patrimoniale, choix du véhicule juridique — peuvent être lancées immédiatement. Préparez votre dossier : attestation de patrimoine, business plan, documents d&apos;identité apostillés, preuves de revenus. Les premières demandes bénéficient généralement d&apos;un traitement plus fluide.
              </p>
            </div>
          </section>

          <hr className="mx-auto my-16 max-w-3xl border-slate-200" />

          {/* ══ 9. NOTRE ACCOMPAGNEMENT ══ */}
          <section className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              9. Notre accompagnement
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Notre cabinet accompagne depuis plus de 14 ans les entrepreneurs francophones dans leur installation à Maurice. Cette annonce du Golden Visa est, à notre sens, un tournant : Maurice passe d&apos;une stratégie d&apos;attraction passive à une démarche proactive de captation des talents et capitaux.
              </p>
              <p>
                Nous suivrons de très près la publication des modalités réglementaires et mettrons à jour ce guide dès que les conditions précises seront connues. Notre cabinet est à votre disposition pour un accompagnement complet, de l&apos;étude initiale jusqu&apos;à l&apos;obtention effective du visa.
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* ── Sources ── */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-3">Sources</p>
          <ul className="space-y-1 text-xs text-slate-600">
            <li>• <a href="https://edbmauritius.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Economic Development Board (EDB)</a></li>
            <li>• <a href="https://defimedia.info/repercussions-economiques-de-la-guerre-au-moyen-orient-introduction-dun-schema-de-visa-dore-pour" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Defi Media — Visa doré Maurice, 10 avril 2026</a></li>
            <li>• <a href="https://lexpress.mu/s/maurice-deploie-un-plan-durgence-pour-proteger-son-economie-556596" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">L&apos;Express Maurice — Plan d&apos;urgence</a></li>
            <li>• <a href="https://fr.allafrica.com/stories/202604100661.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AllAfrica — Plan d&apos;urgence Maurice</a></li>
            <li>• <a href="https://maurice-info.mu/2026/04/10/decision-du-conseil-des-ministres-du-10-avril-2026.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Maurice Info — Conseil des Ministres 10 avril 2026</a></li>
          </ul>
          <p className="mt-4 text-xs text-slate-400">
            Cet article est fourni à titre informatif et sera mis à jour dès publication des modalités réglementaires. Contactez nos experts pour une analyse personnalisée.
          </p>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Intéressé par le Golden Visa Maurice ?
          </h2>
          <p className="mt-3 text-slate-400">
            Étude de faisabilité gratuite par {founder.name}.
            <br />
            Préparez votre dossier dès maintenant.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 px-10 hover:bg-amber-700">
                Nous contacter →
              </Button>
            </Link>
            <Link href="/ressources/simulateur-visa">
              <Button size="lg" variant="outline" className="border-slate-600 px-10 text-slate-300 hover:bg-slate-800">
                Simulateur Visa
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
