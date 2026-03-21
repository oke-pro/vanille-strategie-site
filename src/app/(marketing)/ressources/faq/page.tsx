import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  HelpCircle, 
  Search, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes sur l'expatriation à Maurice",
  description: "Réponses aux questions les plus fréquentes sur la création de société, les permis de résidence, la fiscalité et l'installation à Maurice.",
};

const faqs = [
  { q: "Combien de temps faut-il pour créer une société à Maurice ?", a: "Une Domestic Company peut être constituée en 3 jours ouvrés via le CBRD. Pour une GBC (Global Business Company) nécessitant une licence FSC, comptez 2-4 semaines. Nous gérons l'ensemble de la procédure." },
  { q: "Quel est le taux d'imposition à Maurice ?", a: "Le taux standard est de 15% flat sur les bénéfices des sociétés et les revenus personnels. Pour les GBC éligibles au Partial Exemption Regime (80%), le taux effectif descend à 3-3,4%. Il n'y a aucun impôt sur les dividendes, les plus-values ni les successions." },
  { q: "Quel permis de résidence me correspond ?", a: "Cela dépend de votre profil : OP Investor (50 000 $ d'investissement), OP Self-Employed (50 000 $ + 3 lettres d'intention), OP Professional (salarié, min. 30 000 MUR/mois), OP Retired (50 ans+, 2 000 $/mois) ou Premium Visa (digital nomad, 1 500 $/mois, gratuit). Nous analysons votre situation pour vous recommandons le bon." },
  { q: "Combien de temps pour obtenir un Occupation Permit ?", a: "En moyenne 15-20 jours ouvrés pour le principe d'approbation après dépôt du dossier complet. Les dépendants (conjoint, enfants) sont traités en ~10 jours après le principal." },
  { q: "Faut-il résider à Maurice pour avoir une société ?", a: "Non. Une Domestic Company ou une GBC peut être détenue à 100% par des étrangers sans obligation de résidence. Cependant, si vous souhaitez travailler depuis Maurice, un permis est nécessaire. Pour une GBC, il faut au minimum 2 directeurs résidents mauriciens." },
  { q: "Quelle est la convention fiscale entre la France et Maurice ?", a: "La convention de non-double imposition a été signée le 11 décembre 1980 et amendée en 2011. Elle organise la répartition des compétences fiscales entre les deux pays et évite la double imposition. Vanille Stratégie est spécialiste de son interprétation." },
  { q: "Le Finance Act 2025 a-t-il changé les choses ?", a: "Oui, plusieurs changements : Fair Share Contribution (15% au-delà de 12M MUR de revenus), QDMTT pour les multinationales (750M€+ de CA), cadre formel de Transfer Pricing, et conditions renforcées pour le PER 80%. Pour 95% des entrepreneurs, le cadre fiscal reste très attractif." },
  { q: "Pouvez-vous gérer ma comptabilité ?", a: "Oui. BD Star Management Services, inscrit au MIPA, gère la comptabilité en normes françaises ET IFRS, la paie, les déclarations MRA, et vous offre un dashboard temps réel (OKE) connecté à vos banques mauriciennes." },
  { q: "Qu'est-ce que le dashboard OKE ?", a: "OKE est notre plateforme propriétaire de suivi comptable en temps réel. Il se connecte directement à AfrAsia et MCB, à 12 plateformes e-commerce (Shopify, Amazon...), et catégorise automatiquement vos transactions et effectuer la réconciliation bancaire." },
  { q: "Vous accompagnez aussi pour le logement et la vie quotidienne ?", a: "Absolument. Nous gérons la recherche de logement, l'inscription scolaire, le transfert des animaux de compagnie, l'organisation du déménagement, et toutes les formalités administratives de votre installation." },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative py-24 overflow-hidden flex items-center bg-slate-900">
        <div className="absolute inset-0 opacity-20 transition-transform duration-10000 group-hover:scale-110">
          <Image 
            src="/images/flamboyant-plage.jpg" 
            alt="FAQ Maurice" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-[fadeSlideUp_0.8s_ease-out]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-black uppercase tracking-widest mb-6 border border-blue-500/20 backdrop-blur-sm">
              <HelpCircle className="h-3 w-3" />
              <span>Centre d&apos;Aide & Ressources</span>
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              Questions <span className="text-blue-400">Fréquentes</span>
            </h1>
            <p className="mt-6 text-xl text-slate-400 leading-relaxed">
              Tout ce que vous devez savoir sur la création de société, la fiscalité et votre nouvelle vie à l&apos;Île Maurice.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`} 
                className="group rounded-2xl border border-slate-100 bg-white shadow-sm px-6 py-2 transition-all hover:shadow-md hover:border-blue-100 data-[state=open]:border-blue-200 data-[state=open]:shadow-lg animate-[fadeSlideUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-bold text-slate-900 hover:no-underline py-4 group-data-[state=open]:text-blue-600 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-slate-600 pb-6 border-t border-slate-50 mt-2 pt-4 italic">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Vous ne trouvez pas votre réponse ?</p>
                <p className="text-sm text-slate-500 font-medium">Nos experts sont là pour vous aider.</p>
              </div>
            </div>
            <Link href="/contact">
              <Button className="bg-slate-900 hover:bg-black text-white font-bold px-6">
                Poser une question
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Banner */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expertise Certifiée", desc: "Conseils validés par notre Expert-Comptable inscrit au MIPA.", icon: ShieldCheck },
              { title: "Mise à jour 2026", desc: "Contenu intégrant les dernières directives du Finance Act 2025.", icon: Zap },
              { title: "Réseau Local", desc: "Partenaires directs avec l'EDB, la MRA et le CBRD.", icon: Globe },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                <item.icon className="h-10 w-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-8 border border-blue-100">
            <MessageSquare className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Parlons de votre projet</h2>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Chaque situation est unique. Obtenez une réponse personnalisée et une étude de faisabilité gratuite sous 24h.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-blue-500/20 group">
                Contacter un expert <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
