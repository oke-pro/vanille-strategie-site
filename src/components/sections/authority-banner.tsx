import Image from "next/image";
import { founder } from "@/data/site";

export function AuthorityBanner() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background nature Maurice */}
      <Image
        src="/images/nature-paradis.jpg"
        alt="Nature luxuriante de Maurice"
        fill
        className="object-cover"
        quality={80}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          {/* Left — Didier bio (3 cols) */}
          <div className="lg:col-span-3">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">
              Votre expert à Maurice
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {founder.name}
            </h2>
            <p className="mt-1 text-lg font-medium text-blue-300">
              {founder.title}
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
              {founder.bio}
            </p>

            {/* Parcours highlights */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Deloitte", "LBO & M&A", "IFRS cotées", "60-200 pers.", "Afrique francophone"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right — Credentials cards (2 cols) */}
          <div className="grid grid-cols-2 gap-3 lg:col-span-2">
            {founder.credentials.map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10"
              >
                <p className="text-2xl font-bold text-white">{c.label}</p>
                <p className="mt-1 text-xs leading-tight text-slate-400">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
