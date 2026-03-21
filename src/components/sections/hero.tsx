import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { trustStats, founder } from "@/data/site";

export function HeroSection() {
  return (
    <section className="group relative min-h-[90vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 transition-transform duration-10000 group-hover:scale-110">
        <Image
          src="/images/hero-paradise.jpg"
          alt="Île Maurice — Le Morne Brabant"
          fill
          priority
          className="object-cover"
          quality={85}
        />
      </div>
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl animate-[fadeSlideUp_0.8s_ease-out]">
          {/* Eyebrow */}
          <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
            Depuis 2012 — Le groupe de référence à Maurice
          </p>

          {/* Main headline */}
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Votre nouvelle vie
            <br />à Maurice{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              commence ici.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            De votre premier appel à votre bilan annuel — un seul groupe, zéro
            sous-traitance. Création de société, permis de résidence,
            comptabilité, RH et pilotage temps réel.
          </p>

          {/* Founder authority card */}
          <div className="mt-8 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors hover:bg-white/10">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-xl font-bold text-white">
              DL
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{founder.name}</p>
              <p className="text-xs font-medium text-blue-300">{founder.title}</p>
              <p className="text-xs text-slate-400">
                {founder.experience}+ ans d&apos;expérience · Ex-Deloitte · LBO
                · IFRS sociétés cotées · Afrique francophone
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="animate-[fadeSlideUp_0.8s_ease-out_0.4s_both]">
              <Button
                size="lg"
                className="bg-blue-600 px-8 text-base font-semibold shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Étude de faisabilité gratuite
              </Button>
            </Link>
            <Link href="/ressources/simulateur-visa" className="animate-[fadeSlideUp_0.8s_ease-out_0.5s_both]">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/20"
              >
                Quel visa pour moi ?
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust stats bar */}
        <div className="mt-16 animate-[fadeSlideUp_1s_ease-out_0.6s_both] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
            {trustStats.map((stat, idx) => (
              <div key={stat.label} className="group relative text-center">
                <div className="absolute -inset-2 rounded-xl bg-white/0 transition-colors group-hover:bg-white/5" />
                <p className="relative text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {stat.value}
                  <span className="text-blue-400">
                    {stat.suffix}
                  </span>
                </p>
                <p className="relative mt-2 text-sm font-semibold uppercase tracking-wider text-slate-200">
                  {stat.label}
                </p>
                <p className="relative mt-1 text-xs text-slate-400">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
