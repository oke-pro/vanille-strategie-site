import Image from "next/image";
import Link from "next/link";
import { mauritiusAdvantages } from "@/data/site";

export function MauriceStats() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background image de Maurice */}
      <Image
        src="/images/chamarel.jpg"
        alt="Lagon turquoise de Maurice"
        fill
        className="object-cover"
        quality={80}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-teal-900/50 to-slate-900/70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-300">
            Classements internationaux vérifiés · 2025
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pourquoi Maurice ?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-blue-100/80">
            &laquo;&nbsp;Star and Key of the Indian Ocean&nbsp;&raquo; — N°1 en Afrique
            pour la liberté économique, la gouvernance et la qualité de vie.
            Démocratie pleine depuis 1968.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {mauritiusAdvantages.map((a, idx) => (
            <div
              key={a.label}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              style={{
                animation: `fadeSlideUp 0.5s ease-out ${0.1 + idx * 0.08}s both`,
              }}
            >
              <p className="text-4xl font-bold text-white lg:text-5xl">
                {a.stat}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-blue-200">
                {a.label}
              </p>
              <p className="mt-1 text-xs text-blue-300/60">{a.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/maurice"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition-colors hover:text-white"
          >
            Découvrir tous les classements internationaux
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
