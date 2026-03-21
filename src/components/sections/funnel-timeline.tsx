import Link from "next/link";
import { Button } from "@/components/ui/button";
import { funnelSteps } from "@/data/site";

export function FunnelTimeline() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 -z-10 bg-[url('/images/cocotiers-plage.jpg')] bg-cover bg-center"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Un accompagnement de A &agrave; Z
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            De votre premier appel &agrave; votre bilan annuel &mdash; chaque
            &eacute;tape est pilot&eacute;e par notre &eacute;quipe d'experts.
          </p>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {funnelSteps.map((s) => (
            <div key={s.step} className="group relative">
              {/* Connector line (hidden on last and mobile) */}
              {s.step < funnelSteps.length && (
                <div 
                  className="absolute right-0 top-12 hidden h-0.5 w-full bg-blue-100 lg:block translate-x-1/2 z-0" 
                  aria-hidden="true"
                />
              )}
              
              <div className="relative z-10 flex h-full flex-col rounded-2xl border border-white/50 bg-white/40 p-8 shadow-sm backdrop-blur-sm transition-all hover:bg-white/60 hover:shadow-md hover:-translate-y-1">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  {s.step}
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  {s.label}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact">
            <Button size="lg" className="px-8 py-6 text-lg rounded-full shadow-xl shadow-blue-100 transition-all hover:shadow-2xl hover:scale-105">
              D&eacute;marrer mon projet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
