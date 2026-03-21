import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Connecté à vos banques",
    description: "AfrAsia, MCB, Stripe, PayPal — import automatique.",
    icon: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z",
  },
  {
    title: "Marketplaces & e-commerce",
    description: "Shopify, Amazon, WooCommerce, collecteurs de factures.",
    icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
  },
  {
    title: "Classification automatique",
    description: "Catégorisation intelligente de vos écritures comptables.",
    icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
  },
  {
    title: "Réconciliation automatique",
    description: "Rapprochement intelligent entre transactions et factures.",
    icon: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  },
];

export function OkeTeaser() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 py-20 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — Text */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-600/20 blur-3xl" />
            <p className="relative text-sm font-bold uppercase tracking-widest text-blue-400">
              Propuls&eacute; par BD Star Management Services
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Votre comptabilit&eacute; <br />
              <span className="text-blue-400">en temps r&eacute;el</span>
            </h2>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Le seul cabinet à Maurice qui vous offre une app connectée
              directement à vos banques, vos marketplaces, Stripe, PayPal
              et vos collecteurs de factures. Pilotez votre croissance au jour le jour.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="group flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 transition-colors group-hover:bg-blue-600/20 group-hover:border-blue-500/50">
                    <svg
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">{f.title}</p>
                    <p className="mt-1 text-xs text-slate-400 leading-normal">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-none shadow-lg shadow-blue-900/20">
                  Demander une d&eacute;mo
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                Voir les tarifs
              </Button>
            </div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="relative lg:ml-4">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-2xl" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
              {/* Browser Header */}
              <div className="flex h-10 items-center gap-2 border-b border-white/5 px-4 bg-slate-900/80">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 h-5 w-48 rounded bg-slate-800/50 flex items-center px-2">
                  <span className="text-[10px] text-slate-500 truncate">dashboard.oke.pro/maurice-company-ltd</span>
                </div>
              </div>
              
              {/* Dashboard Content Mockup */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-4 w-32 rounded bg-slate-800" />
                  <div className="h-8 w-24 rounded bg-blue-600/20 border border-blue-500/30" />
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 rounded-xl bg-slate-800/40 border border-white/5 p-4">
                      <div className="h-2 w-12 rounded bg-slate-700 mb-3" />
                      <div className="h-4 w-20 rounded bg-slate-600" />
                    </div>
                  ))}
                </div>

                <div className="h-32 rounded-xl bg-slate-800/40 border border-white/5 p-4 relative overflow-hidden">
                  <div className="flex h-full items-end gap-2">
                    {[40, 70, 45, 90, 65, 80, 50, 85, 95, 60, 75, 90].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <div className="flex-1 h-20 rounded-xl bg-slate-800/40 border border-white/5" />
                  <div className="flex-1 h-20 rounded-xl bg-slate-800/40 border border-white/5" />
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/30 px-3 py-1 text-[10px] font-bold text-green-400 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                LIVE SYNC: MCB BANK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
