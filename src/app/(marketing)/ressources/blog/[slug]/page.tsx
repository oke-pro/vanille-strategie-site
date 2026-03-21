import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";
import { notFound } from "next/navigation";

const articles: Record<string, { title: string; category: string; date: string; content: string[] }> = {
  "structures-juridiques-maurice-2026": {
    title: "Domestic Company, GBC ou Authorised Company : quel statut choisir en 2026 ?",
    category: "Guide",
    date: "Mars 2026",
    content: [
      "Maurice propose trois types de structures juridiques pour les entreprises. Le choix dépend de votre activité, de votre résidence fiscale souhaitée et de vos objectifs internationaux.",
      "La Domestic Company est l'équivalent d'une SARL française. Taxée à 15% flat, elle peut être détenue à 100% par des étrangers, sans capital minimum. La création prend 3 jours ouvrés via le CBRD. C'est le choix idéal pour une activité locale ou un e-commerce depuis Maurice.",
      "La Global Business Company (GBC) est conçue pour les activités internationales. Avec le Partial Exemption Regime (80%), le taux effectif descend à 3-3,4%. Elle donne accès aux 37 traités de non-double imposition. Attention : depuis le Finance Act 2025, les substance requirements sont renforcés — c'est l'activité générant le revenu qui doit satisfaire les conditions, pas juste la société.",
      "L'Authorised Company (AC) n'est pas résidente fiscale à Maurice. Elle paie 0% d'IS sur ses revenus étrangers mais n'a pas accès aux traités fiscaux. Idéale pour du holding pur ou de l'IP.",
      "Le Finance Act 2025 a aussi introduit la Fair Share Contribution (15% au-delà de 12M MUR de revenus), le QDMTT pour les multinationales (750M€+ de CA), et un cadre formel de Transfer Pricing.",
      "Notre recommandation : faites analyser votre situation par un Expert-Comptable Fiscaliste International avant de choisir. Les implications fiscales peuvent différer considérablement selon votre profil.",
    ],
  },
  "fiscalite-maurice-2026": {
    title: "Fiscalité Maurice 2026 : ce qui a vraiment changé",
    category: "Fiscalité",
    date: "Mars 2026",
    content: [
      "Le Finance Act 2025, publié le 9 août 2025, a introduit plusieurs réformes fiscales. Mais contrairement à ce que certains titres alarmistes laissent entendre, Maurice reste extrêmement attractive pour 95% des entrepreneurs.",
      "Ce qui n'a PAS changé : le taux d'IS reste à 15% flat, les dividendes restent à 0%, les plus-values restent à 0%, les droits de succession n'existent toujours pas, et l'ISF non plus.",
      "La Fair Share Contribution (FSC) est une surtaxe temporaire (3 ans, jusqu'en juin 2028) de 15% sur les revenus nets dépassant 12 millions de roupies par an (~240 000€). Pour les sociétés à 15% d'IS, c'est 5% additionnel. Cela ne concerne que les très hauts revenus.",
      "Le QDMTT (Qualified Domestic Minimum Top-up Tax) applique un taux plancher de 15% aux multinationales avec un CA consolidé supérieur à 750 millions d'euros. Cela ne concerne que les très grandes entreprises.",
      "Le Transfer Pricing a maintenant un cadre documentaire formel. Les sociétés en transactions avec des parties liées doivent maintenir des records prescrits. C'est une mise en conformité OCDE, pas un durcissement fiscal.",
      "L'Alternative Minimum Tax de 10% touche certains secteurs (hôtels, assurance, immobilier, télécoms) si leur impôt calculé normalement est inférieur à ce seuil.",
      "En résumé : si vous êtes un entrepreneur classique avec moins de 240 000€ de revenus annuels, strictement rien n'a changé pour vous. Maurice reste un paradis fiscal légal.",
    ],
  },
  "permis-residence-maurice-guide-2026": {
    title: "Permis de résidence à Maurice en 2026 : le guide complet post-réforme",
    category: "Permis",
    date: "Mars 2026",
    content: [
      "Les guidelines EDB du 19 août 2025 ont modifié plusieurs conditions des Occupation Permits. Voici le guide complet actualisé.",
      "L'OP Investor existe en deux options : Option 1 (50 000 $ d'investissement, turnover 1,5M MUR en année 1, cumulatif 20M MUR à 5 ans) et Option 2 (100 000 $, turnover 1M MUR en année 1, cumulatif 15M MUR à 5 ans). Nouveauté 2025 : un mid-term review à l'année 5 par l'EDB.",
      "L'OP Self-Employed nécessite 50 000 $ sur le compte de votre société mauricienne, 3 lettres d'intention (dont 2 de clients locaux), et un turnover cumulé de 6M MUR sur 5 ans.",
      "L'OP Professional a été scindé en deux : le ProPass (salaire min. 30 000 MUR/mois) pour les spécialistes, et le nouveau Expert Pass (250 000 MUR/mois) pour les cadres dirigeants et consultants seniors.",
      "L'OP Retired (50 ans+) exige maintenant un transfert de 2 000 $/mois (ou 24 000 $/an) avec un premier versement dans les 60 jours. Nouveau : 180 jours de présence minimum par an.",
      "Le Premium Visa est gratuit, traité en 48h, valable 1 an renouvelable. Revenu minimum 1 500 $/mois. Idéal pour tester Maurice avant de s'engager sur un OP.",
      "La résidence permanente est durcie : il faut maintenant 5 ans de permis (au lieu de 3) et des seuils de revenus/investissement plus élevés.",
      "Délai moyen : 15-20 jours ouvrés pour le principe d'approbation. Nous avons déposé 30 à 50 dossiers par an depuis 2012 — nous connaissons les attentes de l'EDB.",
    ],
  },
  "convention-fiscale-france-maurice": {
    title: "Convention fiscale France-Maurice : comment ça marche vraiment",
    category: "Fiscalité",
    date: "Mars 2026",
    content: [
      "La convention de non-double imposition entre la France et Maurice a été signée le 11 décembre 1980 à Port-Louis, puis amendée le 23 juin 2011 (entrée en vigueur le 1er mai 2012).",
      "Son objectif : éviter qu'un même revenu soit imposé deux fois, une fois en France et une fois à Maurice. Elle organise la répartition des compétences fiscales entre les deux pays.",
      "Pour les dividendes : la convention limite la retenue à la source. Pour les intérêts et royalties : des taux réduits s'appliquent. Pour les plus-values : Maurice ne les taxe pas, et la convention précise les cas où la France peut les imposer.",
      "L'Exit Tax française s'applique aux résidents fiscaux français qui transfèrent leur domicile hors de France et détiennent des participations significatives. Un sursis de paiement est possible sous conditions. La planification de votre départ doit être minutieuse.",
      "L'amendement de 2011 a renforcé l'échange d'informations entre les administrations fiscales (article 27), en conformité avec les standards internationaux de lutte contre la fraude.",
      "Vanille Stratégie est spécialiste de l'interprétation de cette convention. Chaque situation est unique — nous analysons la vôtre pour optimiser légalement votre position fiscale.",
    ],
  },
  "quitter-dubai-pourquoi-maurice": {
    title: "Quitter Dubaï : pourquoi Maurice est la meilleure alternative",
    category: "Actualité",
    date: "Mars 2026",
    content: [
      "Depuis le 28 février 2026, la guerre USA/Israël-Iran a frappé Dubaï. Drones sur l'aéroport, 37 000 vols annulés, Goldman Sachs et Citi ont évacué leur staff. Bloomberg parle d'un \"exodus à la Hong Kong\".",
      "9 800 millionnaires s'étaient installés à Dubaï en 2025, apportant ~63 milliards de dollars. Ce flux est en train de se retourner.",
      "Beaucoup partent au Maroc : proximité (2-3h de Paris), coût de vie bas, communauté francophone. Mais fiscalement, Maurice est meilleur : 15% IS flat vs 17,5% au Maroc, 0% dividendes vs retenue à la source, 0% plus-values vs imposables.",
      "Et surtout : Maurice est à 8 000 km du premier conflit. Zéro risque géopolitique. Le même fuseau horaire que Dubaï (GMT+4). Les mêmes avantages fiscaux. Sans les missiles.",
      "Maurice est aussi un hub vers l'Afrique (COMESA, 500M+ de consommateurs) et l'Asie, grâce au FTA Chine-Maurice signé en 2019.",
      "Notre groupe (Vanille Stratégie + BD Star) offre ce qu'aucun concurrent ne peut : conseil en implantation + expertise comptable MIPA + dashboard SaaS connecté aux banques mauriciennes. Un seul interlocuteur, zéro sous-traitance.",
    ],
  },
  "ecommerce-depuis-maurice": {
    title: "E-commerce depuis Maurice : fiscalité et logistique pour les digital entrepreneurs",
    category: "Digital",
    date: "Mars 2026",
    content: [
      "Maurice est devenu un hub pour les entrepreneurs digitaux : e-commerçants, infopreneurs, freelances. La fiscalité est imbattable et le cadre de vie exceptionnel.",
      "Le Premium Visa est le point d'entrée idéal : gratuit, traité en 48h, 1 an renouvelable. Revenu minimum 1 500 $/mois. Vous ne pouvez pas travailler pour un employeur local, mais vous pouvez piloter votre business international.",
      "Si vous décidez de rester, l'OP Self-Employed (50 000 $) ou Investor vous donnent un permis de 10 ans avec résidence fiscale mauricienne : 15% IS, 0% dividendes, 0% plus-values.",
      "Avantage massif pour le e-commerce : les services exportés vers l'UE ne sont pas soumis à la TVA mauricienne. Si vos clients sont en Europe, vous facturez sans TVA depuis Maurice.",
      "Notre dashboard OKE se connecte à 12 plateformes e-commerce : Shopify, Amazon, WooCommerce, PrestaShop, eBay, Cdiscount, Rakuten, ManoMano, Back Market, Zalando, Magento et Mirakl. Chaque vente génère automatiquement une écriture comptable.",
      "Avec les connecteurs bancaires AfrAsia et MCB, la réconciliation est automatique. Vos transactions sont classées automatiquement avec 85%+ de précision. Votre comptabilité tourne en autopilote.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article non trouvé" };
  return {
    title: article.title,
    description: article.content[0],
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/ressources/blog" className="text-sm text-blue-400 hover:underline">&larr; Tous les articles</Link>
          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300">{article.category}</span>
            <span className="text-xs text-slate-500">{article.date}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{article.title}</h1>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">DL</div>
            <div>
              <p className="text-sm font-semibold text-white">{founder.name}</p>
              <p className="text-xs text-slate-400">{founder.title}</p>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            Sources : {officialSources.slice(0, 4).map((s, i) => (
              <span key={s.url}>
                {i > 0 && " · "}
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{s.name}</a>
              </span>
            ))}
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Cet article est fourni à titre informatif. Contactez nos experts pour une analyse personnalisée de votre situation.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Besoin d&apos;un accompagnement personnalisé ?</h2>
          <p className="mt-3 text-slate-400">Étude de faisabilité gratuite par {founder.name}.</p>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Nous contacter</Button></Link></div>
        </div>
      </section>
    </>
  );
}
