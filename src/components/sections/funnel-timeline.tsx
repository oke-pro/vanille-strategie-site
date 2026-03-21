import Link from "next/link";
import { Button } from "@/components/ui/button";
import { funnelSteps } from "@/data/site";
import { PhoneCall, FileSearch, Rocket, BarChart3, ArrowRight } from "lucide-react";

const stepIcons = [PhoneCall, FileSearch, Rocket, BarChart3];

export function FunnelTimeline() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-blue-600">
            Méthodologie Vanille
          </div>
          <h2 className="text-4xl font-extrabold tracking-tighter text-slate-950 sm:text-5xl lg:text-6xl">
            Un accompagnement de A &agrave; Z
          </h2>
          <p className="mt-8 text-lg text-slate-600 font-light lg:text-xl leading-relaxed">
            De votre premier appel &agrave; votre bilan annuel &mdash; chaque
            &eacute;tape est pilot&eacute;e par notre &eacute;quipe d&apos;experts. Pas de sous-traitance, un seul interlocuteur.
          </p>
        </div>

        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {funnelSteps.map((s, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div key={s.step} className="group relative">
                {/* Horizontal Connector (Desktop) */}
                {s.step < funnelSteps.length && (
                  <div 
                    className="absolute right-0 top-16 hidden h-[2px] w-full bg-gradient-to-r from-blue-200 to-transparent lg:block translate-x-1/2 z-0" 
                    aria-hidden="true"
                  />
                )}
                
                <div className="relative z-10 flex h-full flex-col rounded-[2.5rem] border border-white bg-white/60 p-10 shadow-xl shadow-slate-200/50 backdrop-blur-2xl transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white shadow-lg transition-transform group-hover:scale-110">
                    0{s.step}
                  </div>

                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-blue-300">
                    <Icon className="h-8 w-8" />
                  </div>

                  <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600 mb-2">
                    {s.label}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                    {s.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 font-light">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center animate-[fadeSlideUp_0.8s_ease-out_0.4s_both]">
          <Link href="/contact">
            <Button size="lg" className="h-16 px-10 rounded-full bg-slate-950 text-white text-lg font-bold shadow-2xl transition-all hover:bg-slate-900 hover:shadow-slate-300 hover:-translate-y-1 group">
              D&eacute;marrer mon projet
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <p className="mt-6 text-sm font-medium text-slate-500 italic">
            Réponse garantie sous 24h par Didier Laroussinie.
          </p>
        </div>
      </div>
    </section>
  );
}
