import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { trustStats, founder } from "@/data/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="group relative min-h-[95vh] overflow-hidden flex items-center">
      {/* Background image with parallax-like effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-paradise.jpg"
          alt="Île Maurice — Le Morne Brabant"
          fill
          priority
          className="object-cover"
          quality={85}
        />
      </div>
      
      {/* Lighter gradients — let Maurice shine through */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 animate-[fadeSlideUp_0.8s_ease-out]">
            {/* Premium Eyebrow */}
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
                L&apos;Excellence à Maurice depuis 2012
              </p>
            </div>

            {/* Massive Headline */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tighter text-white sm:text-7xl lg:text-8xl">
              L&apos;Île Maurice
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                sans compromis.
              </span>
            </h1>

            {/* Refined Sub-headline */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300/90 sm:text-xl lg:text-2xl font-light">
              De votre expatriation à la gestion de vos actifs — bénéficiez de l&apos;expertise d&apos;un cabinet <span className="text-white font-medium">multi-disciplinaire</span> unique. Zéro sous-traitance, 100% de sérénité.
            </p>

            {/* Premium CTAs */}
            <div className="mt-12 flex flex-wrap gap-5">
              <Link href="/contact" className="animate-[fadeSlideUp_0.8s_ease-out_0.4s_both]">
                <Button
                  size="lg"
                  className="h-16 rounded-full bg-blue-600 px-10 text-lg font-bold shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all hover:bg-blue-700 hover:shadow-[0_20px_50px_rgba(37,99,235,0.5)] hover:-translate-y-1"
                >
                  Étude de faisabilité gratuite
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/ressources/simulateur-visa" className="animate-[fadeSlideUp_0.8s_ease-out_0.5s_both]">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 rounded-full border-white/20 bg-white/5 px-10 text-lg font-bold text-white backdrop-blur-xl transition-all hover:bg-white/15 hover:border-white/40 hover:-translate-y-1"
                >
                  Quel visa pour moi ?
                </Button>
              </Link>
            </div>

            {/* Founder Authority Glass Card */}
            <div className="mt-16 inline-flex items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-2xl transition-all hover:bg-white/10 group/card">
              <div className="relative">
                <Image
                  src="/images/didier-bureau.jpg"
                  alt={founder.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 flex-shrink-0 rounded-2xl object-cover ring-4 ring-white/10 transition-transform group-hover/card:scale-105"
                />
                <div className="absolute -bottom-2 -right-2 rounded-full bg-blue-600 p-1.5 shadow-lg">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
              </div>
              <div>
                <p className="text-xl font-bold text-white leading-tight">{founder.name}</p>
                <p className="text-sm font-semibold tracking-wide text-blue-400 uppercase mt-0.5">{founder.title}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                  <span className="flex items-center gap-1">Ex-Deloitte</span>
                  <span className="h-1 w-1 rounded-full bg-slate-600" />
                  <span className="flex items-center gap-1">{founder.experience}+ ans d&apos;expertise</span>
                  <span className="h-1 w-1 rounded-full bg-slate-600" />
                  <span className="flex items-center gap-1 text-slate-300 font-medium">Zéro sous-traitance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra-Premium Trust Stats Bar */}
        <div className="mt-24 animate-[fadeSlideUp_1s_ease-out_0.6s_both] rounded-[2.5rem] border border-white/10 bg-slate-950/40 p-12 backdrop-blur-3xl shadow-2xl">
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 lg:gap-20">
            {trustStats.map((stat) => (
              <div key={stat.label} className="group relative text-center sm:text-left">
                <p className="text-4xl font-black text-white sm:text-5xl lg:text-6xl tracking-tight">
                  {stat.value}
                  <span className="text-blue-500">
                    {stat.suffix}
                  </span>
                </p>
                <div className="mt-4 space-y-1">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400/80">
                    {stat.label}
                  </p>
                  <p className="text-sm font-medium text-slate-400 leading-tight">
                    {stat.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
