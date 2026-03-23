import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { DepartmentColors } from "@/data/departments";
import type { ReactNode } from "react";

interface CtaLink {
  label: string;
  href: string;
}

interface DepartmentHeroProps {
  brand: string;
  title: ReactNode;
  description: string;
  heroImage: string;
  colors: DepartmentColors;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}

export function DepartmentHero({
  brand,
  title,
  description,
  heroImage,
  colors,
  primaryCta,
  secondaryCta,
}: DepartmentHeroProps) {
  return (
    <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={brand}
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

      {/* Decorative blurs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Department pill badge */}
          <p
            className={cn(
              "inline-block rounded-full px-4 py-1.5 text-sm font-medium uppercase tracking-widest backdrop-blur-sm",
              colors.badgeBg,
              colors.badgeText,
              colors.badgeBorder,
              "border"
            )}
          >
            {brand}
          </p>

          {/* Title */}
          <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-4xl font-bold text-white sm:text-5xl lg:text-7xl leading-[1.1]">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={primaryCta.href}>
              <Button
                size="lg"
                className={cn(
                  colors.buttonBg,
                  "px-8 h-14 text-lg font-bold shadow-lg"
                )}
              >
                {primaryCta.label}
              </Button>
            </Link>
            <Link href={secondaryCta.href}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 h-14 text-lg font-bold"
              >
                {secondaryCta.label}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
