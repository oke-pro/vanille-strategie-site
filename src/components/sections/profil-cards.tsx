import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { parcours } from "@/data/site";

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
    <section className="bg-slate-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="animate-[fadeSlideUp_0.6s_ease-out] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Quel est votre projet ?
          </h2>
          <p className="mt-4 animate-[fadeSlideUp_0.7s_ease-out] text-lg leading-relaxed text-slate-600">
            Chaque parcours est unique. Sélectionnez votre profil pour
            découvrir la solution adaptée à votre situation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {parcours.map((p, idx) => (
            <Link 
              key={p.slug} 
              href={`/${p.slug}`}
              className="group relative h-[450px] overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ 
                animation: `fadeSlideUp 0.6s ease-out ${0.2 + idx * 0.1}s both` 
              }}
            >
              {/* Background Image */}
              <Image
                src={imageMap[p.slug] || "/images/hero-maurice.jpg"}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              
              <div className="relative flex h-full flex-col justify-end p-8 text-white">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md border border-white/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={iconMap[p.icon]}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-blue-300">
                  {p.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-200 line-clamp-3">
                  {p.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                  <span>Découvrir mon parcours</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
