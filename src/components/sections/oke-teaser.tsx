import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Zap,
  Globe,
  CreditCard,
  Layers,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    title: "Connecté à vos banques",
    description: "AfrAsia, MCB, Stripe, PayPal — import automatique 24/7.",
    icon: CreditCard,
  },
  {
    title: "Marketplaces & e-commerce",
    description: "Shopify, Amazon, WooCommerce — réconciliation instantanée.",
    icon: ShoppingCart,
  },
  {
    title: "Classification automatique",
    description: "Catégorisation intelligente de vos écritures comptables.",
    icon: Zap,
  },
  {
    title: "Pilotage Temps Réel",
    description: "Rapprochement intelligent entre transactions et factures.",
    icon: Layers,
  },
];

export function OkeTeaser() {
  return (
    <section className="relative bg-slate-950 py-24 text-white sm:py-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left — Text content */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
              Innovation Fintech Maurice
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl leading-[1.1]">
              Votre comptabilit&eacute; <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">en temps r&eacute;el</span>
            </h2>
            <p className="mt-8 text-lg text-slate-400 font-light leading-relaxed lg:text-xl">
              Le seul cabinet &agrave; Maurice qui vous offre une plateforme technologique exclusive. Pilotez votre croissance avec des donn&eacute;es synchronis&eacute;es en direct avec vos flux bancaires et e-commerce.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 transition-all group-hover:bg-blue-600 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                        <Icon className="h-5 w-5 text-blue-400 group-hover:text-white" />
                      </div>
                      <p className="font-bold text-slate-100">{f.title}</p>
                    </div>
                    <p className="text-sm text-slate-500 font-light leading-relaxed group-hover:text-slate-400 transition-colors">
                      {f.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-xl shadow-blue-900/20 border-none transition-all hover:-translate-y-1">
                  Demander une d&eacute;mo
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-slate-800 bg-transparent text-slate-300 hover:bg-slate-900 hover:border-slate-700 font-bold transition-all">
                Voir les fonctionnalités
              </Button>
            </div>
          </div>

          {/* Right — Realistic Dashboard Mockup */}
          <div className="relative lg:ml-4 animate-[fadeSlideUp_1s_ease-out]">
            {/* Background Glow for Mockup */}
            <div className="absolute -inset-10 bg-blue-600/20 rounded-full blur-[80px]" />
            
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_40px_100px_-10px_rgba(0,0,0,0.8)]">
              {/* Browser Header */}
              <div className="flex h-12 items-center justify-between border-b border-white/5 px-6 bg-slate-900/80 backdrop-blur-md">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-slate-700" />
                  <div className="h-3 w-3 rounded-full bg-slate-700" />
                  <div className="h-3 w-3 rounded-full bg-slate-700" />
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-slate-950 px-3 py-1.5 border border-white/5">
                  <Globe className="h-3 w-3 text-slate-500" />
                  <span className="text-xs text-slate-400 font-medium">dashboard.oke.pro/maurice-ltd</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-blue-600/20 border border-blue-500/20 flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">DL</div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h4 className="text-xl font-bold">Vue d&apos;ensemble</h4>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-black">Mis à jour il y a 2 min</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold">Période: Mars 2024</div>
                    <div className="px-3 py-1.5 rounded-lg bg-blue-600 text-xs font-bold">Export PDF</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { label: "Cash Flow", value: "€ 142,500", trend: "+12%" },
                    { label: "Ventes", value: "€ 284,000", trend: "+24%" },
                    { label: "TVA à payer", value: "€ 42,100", trend: "-2%" }
                  ].map((stat, i) => (
                    <div key={i} className="rounded-2xl bg-slate-950/50 border border-white/5 p-5 transition-transform hover:scale-105">
                      <p className="text-xs text-slate-500 font-black uppercase tracking-widest">{stat.label}</p>
                      <div className="flex items-end justify-between mt-2">
                        <p className="text-xl font-black">{stat.value}</p>
                        <p className={`text-xs font-black ${stat.trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {stat.trend}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Graph Area */}
                <div className="h-44 rounded-2xl bg-slate-950/50 border border-white/5 p-6 relative">
                  <div className="flex h-full items-end gap-3">
                    {[30, 50, 40, 70, 45, 90, 65, 80, 50, 85, 95, 100].map((h, i) => (
                      <div key={i} className="group/bar relative flex-1">
                        <div 
                          className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-md transition-all duration-500 group-hover/bar:from-blue-500 group-hover/bar:to-cyan-300"
                          style={{ height: `${h}%` }}
                        />
                        {/* Tooltip on hover */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-white text-slate-950 text-xs font-black px-2 py-1 rounded shadow-xl">
                          {h}k
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Grid lines */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="border-t border-white" />
                    <div className="border-t border-white" />
                    <div className="border-t border-white" />
                  </div>
                </div>

                {/* Recent Transactions List */}
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="rounded-xl bg-slate-950/30 border border-white/5 p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <ShoppingCart className="h-4 w-4 text-slate-500" />
                      <p className="text-xs font-bold uppercase tracking-widest">Dernières ventes</p>
                    </div>
                    <div className="space-y-3">
                      {[1, 2].map(i => (
                        <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-white/5" />
                            <p className="text-xs text-slate-300 font-medium">Shopify Order #129{i}</p>
                          </div>
                          <p className="text-xs font-black text-emerald-400">+ €450.00</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-950/30 border border-white/5 p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="h-4 w-4 text-slate-500" />
                      <p className="text-xs font-bold uppercase tracking-widest">Banque Sync</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <p className="text-xs text-slate-300 font-medium">MCB Business Account</p>
                      </div>
                      <span className="text-[8px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-black uppercase">En direct</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
