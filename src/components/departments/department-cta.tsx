import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { DepartmentColors } from "@/data/departments";
import type { ReactNode } from "react";
import {
  Briefcase,
  TrendingUp,
  Globe,
  Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const accentIconMap: Record<string, LucideIcon> = {
  Briefcase,
  TrendingUp,
  Globe,
  Settings,
};

interface CtaLink {
  label: string;
  href: string;
}

interface DepartmentCtaProps {
  brand: string;
  title: ReactNode;
  description: string;
  colors: DepartmentColors;
  iconName?: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}

export function DepartmentCta({
  brand,
  title,
  description,
  colors,
  iconName,
  primaryCta,
  secondaryCta,
}: DepartmentCtaProps) {
  const Icon = accentIconMap[iconName ?? "Briefcase"] ?? Briefcase;

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Top accent line */}
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent",
          colors.lightText,
          "opacity-50"
        )}
      />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
        {/* Accent icon */}
        <div
          className={cn(
            "inline-flex h-20 w-20 items-center justify-center rounded-full mb-8 border",
            colors.badgeBg,
            colors.lightText,
            colors.badgeBorder
          )}
        >
          <Icon className="h-10 w-10" />
        </div>

        {/* Heading */}
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href={primaryCta.href}>
            <Button
              size="lg"
              className={cn(
                colors.buttonBg,
                "px-12 h-16 text-lg font-bold shadow-2xl transition-all duration-300"
              )}
            >
              {primaryCta.label}
            </Button>
          </Link>
          <Link href={secondaryCta.href}>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm px-12 h-16 text-lg font-bold transition-all duration-300"
            >
              {secondaryCta.label}
            </Button>
          </Link>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
          Réponse sous 24h ouvrées · Confidentialité Totale
        </p>
      </div>
    </section>
  );
}
