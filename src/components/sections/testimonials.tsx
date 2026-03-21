import Image from "next/image";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background sunset */}
      <Image
        src="/images/sunset-ponton.jpg"
        alt="Coucher de soleil tropical"
        fill
        className="object-cover"
        quality={80}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ils nous font confiance
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Entrepreneurs, grandes écoles, retraités — depuis 2012, des
            centaines de projets réussis.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Card
              key={t.name}
              className="group flex flex-col justify-between border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              style={{
                animation: `fadeSlideUp 0.6s ease-out ${0.2 + idx * 0.15}s both`,
              }}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <svg
                  className="h-8 w-8 text-blue-400/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed text-slate-200">
                {t.quote}
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">
                    {t.role}
                    {t.company && ` — ${t.company}`}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
