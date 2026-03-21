import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title: "Comptabilité & Fiscalité Maurice — BD Star Management Services (MIPA)",
  description: "Comptabilité bistandard FR/IFRS, déclarations MRA, Transfer Pricing, autopilote fiscal. Dashboard OKE temps réel avec connecteurs AfrAsia/MCB.",
};

export default function ComptaFiscalitePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">Services — BD Star Management Services</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Comptabilité & Fiscalité</h1>
            <p className="mt-4 text-lg text-slate-300">
              Cabinet inscrit MIPA, supervisé par un Expert-Comptable diplômé avec 40+ ans d&apos;expérience. Comptabilité bistandard, Transfer Pricing, dashboard temps réel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Comptabilité courante", items: ["Saisie comptable FR + IFRS", "Lettrage et rapprochement", "Déclarations TVA", "États financiers annuels"] },
              { title: "Fiscalité", items: ["Déclarations MRA (self-assessment)", "Analyse convention FR-MU", "Transfer Pricing (Finance Act 2025)", "Optimisation fiscale légale"] },
              { title: "Dashboard OKE", items: ["Connecteurs AfrAsia & MCB", "12 plateformes e-commerce", "IA classification (85%+)", "Réconciliation bancaire ML"] },
              { title: "Conseil fiscal", items: ["Exit Tax française", "Structuration holding", "Prix de transfert", "Mobilité internationale"] },
              { title: "Audit & conformité", items: ["Audit annuel", "Due diligence financière", "Conformité CBRD/MRA", "Piste d'audit inaltérable"] },
              { title: "Supervision", items: [`Par ${founder.name}`, "Expert-Comptable DEC", "Ex-Deloitte", "40+ ans d'expérience"] },
            ].map((s) => (
              <div key={s.title} className="rounded-xl border p-6">
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <ul className="mt-3 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Demander un devis comptabilité</h2>
          <p className="mt-3 text-slate-400">Tarifs transparents, adaptés à votre structure.</p>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Obtenir un devis</Button></Link></div>
        </div>
      </section>
    </>
  );
}
