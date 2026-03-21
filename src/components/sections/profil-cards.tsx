import Link from "next/link";
import Image from "next/image";
import { parcours } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

const imageMap: Record<string, string> = {
  entrepreneur: "/images/entrepreneur-maurice.jpg",
  "digital-nomad": "/images/digital-nomad-maurice.jpg",
  retraite: "/images/retraite-maurice.jpg",
  entreprise: "/images/entreprise-filiale.jpg",
};

const iconMap: Record<string, string> = {
  rocket: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.841m2.699-10.9 4.243 4.244",
  laptop: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25",
  palmtree: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z",
  building2: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
};

export function ProfilCards() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Votre Projet, Votre Parcours
          </div>
          <h2 className="animate-[fadeSlideUp_0.6s_ease-out] text-4xl font-extrabold tracking-tighter text-slate-950 sm:text-5xl lg:text-6xl">
            Comment souhaitez-vous vivre à Maurice ?
          </h2>
          <p className="mt-8 animate-[fadeSlideUp_0.7s_ease-out] text-lg leading-relaxed text-slate-600 font-light lg:text-xl">
            Chaque expatriation est une aventure singulière. Notre cabinet a conçu des écosystèmes dédiés pour chaque profil, de l&apos;entrepreneur tech au retraité en quête de sérénité.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {parcours.map((p, idx) => (
            <Link 
              key={p.slug} 
              href={`/${p.slug}`}
              className="group relative h-[520px] overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)]"
              style={{ 
                animation: `fadeSlideUp 0.6s ease-out ${0.2 + idx * 0.1}s both` 
              }}
            >
              {/* Background Image with Zoom effect */}
              <Image
                src={imageMap[p.slug] || "/images/hero-maurice.jpg"}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Sophisticated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 bg-blue-900/10 opacity-0 transition-opacity group-hover:opacity-30 mix-blend-overlay" />
              
              <div className="relative flex h-full flex-col justify-end p-10 text-white">
                {/* Glass Icon */}
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl transition-all duration-500 group-hover:bg-blue-600/30 group-hover:border-blue-400/50 group-hover:scale-110 group-hover:rotate-3">
                  <svg
                    className="h-8 w-8 text-white transition-transform duration-500 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={iconMap[p.icon]}
                    />
                  </svg>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                    {p.subtitle}
                  </p>
                  <h3 className="text-3xl font-bold tracking-tight">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300 font-light line-clamp-3 transition-opacity duration-300 group-hover:text-white">
                    {p.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 text-sm font-bold text-white/80 group-hover:text-white transition-all">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/20 transition-all group-hover:bg-blue-600 group-hover:border-blue-400">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <span className="tracking-wide uppercase text-xs font-bold">Explorer la solution</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
