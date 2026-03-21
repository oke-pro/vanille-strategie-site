import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes sur l'expatriation à Maurice",
  description: "Réponses aux questions les plus fréquentes sur la création de société, les permis de résidence, la fiscalité et l'installation à Maurice.",
};

const faqs = [
  { q: "Combien de temps faut-il pour créer une société à Maurice ?", a: "Une Domestic Company peut être constituée en 3 jours ouvrés via le CBRD. Pour une GBC (Global Business Company) nécessitant une licence FSC, comptez 2-4 semaines. Nous gérons l'ensemble de la procédure." },
  { q: "Quel est le taux d'imposition à Maurice ?", a: "Le taux standard est de 15% flat sur les bénéfices des sociétés et les revenus personnels. Pour les GBC éligibles au Partial Exemption Regime (80%), le taux effectif descend à 3-3,4%. Il n'y a aucun impôt sur les dividendes, les plus-values ni les successions." },
  { q: "Quel permis de résidence me correspond ?", a: "Cela dépend de votre profil : OP Investor (50 000 $ d'investissement), OP Self-Employed (50 000 $ + 3 lettres d'intention), OP Professional (salarié, min. 30 000 MUR/mois), OP Retired (50 ans+, 2 000 $/mois) ou Premium Visa (digital nomad, 1 500 $/mois, gratuit). Nous analysons votre situation pour vous recommander le bon." },
  { q: "Combien de temps pour obtenir un Occupation Permit ?", a: "En moyenne 15-20 jours ouvrés pour le principe d'approbation après dépôt du dossier complet. Les dépendants (conjoint, enfants) sont traités en ~10 jours après le principal." },
  { q: "Faut-il résider à Maurice pour avoir une société ?", a: "Non. Une Domestic Company ou une GBC peut être détenue à 100% par des étrangers sans obligation de résidence. Cependant, si vous souhaitez travailler depuis Maurice, un permis est nécessaire. Pour une GBC, il faut au minimum 2 directeurs résidents mauriciens." },
  { q: "Quelle est la convention fiscale entre la France et Maurice ?", a: "La convention de non-double imposition a été signée le 11 décembre 1980 et amendée en 2011. Elle organise la répartition des compétences fiscales entre les deux pays et évite la double imposition. Vanille Stratégie est spécialiste de son interprétation." },
  { q: "Le Finance Act 2025 a-t-il changé les choses ?", a: "Oui, plusieurs changements : Fair Share Contribution (15% au-delà de 12M MUR de revenus), QDMTT pour les multinationales (750M€+ de CA), cadre formel de Transfer Pricing, et conditions renforcées pour le PER 80%. Pour 95% des entrepreneurs, le cadre fiscal reste très attractif." },
  { q: "Pouvez-vous gérer ma comptabilité ?", a: "Oui. BD Star Management Services, inscrit au MIPA, gère la comptabilité en normes françaises ET IFRS, la paie, les déclarations MRA, et vous offre un dashboard temps réel (OKE) connecté à vos banques mauriciennes." },
  { q: "Qu'est-ce que le dashboard OKE ?", a: "OKE est notre plateforme propriétaire de suivi comptable en temps réel. Il se connecte directement à AfrAsia et MCB, à 12 plateformes e-commerce (Shopify, Amazon...), et utilise l'IA pour catégoriser automatiquement vos transactions et effectuer la réconciliation bancaire." },
  { q: "Vous accompagnez aussi pour le logement et la vie quotidienne ?", a: "Absolument. Nous gérons la recherche de logement, l'inscription scolaire, le transfert des animaux de compagnie, l'organisation du déménagement, et toutes les formalités administratives de votre installation." },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Questions fréquentes</h1>
          <p className="mt-4 text-lg text-slate-300">Tout ce que vous devez savoir sur l&apos;expatriation à Maurice.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion className="space-y-2">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="rounded-xl border px-6">
                <AccordionTrigger className="text-left text-base font-semibold text-slate-900 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Vous avez d&apos;autres questions ?</h2>
          <p className="mt-3 text-slate-600">Notre équipe vous répond sous 24h.</p>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Nous contacter</Button></Link></div>
        </div>
      </section>
    </>
  );
}
