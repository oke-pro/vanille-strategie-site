import Link from "next/link";
import { cn } from "@/lib/utils";
import type { DepartmentColors, DepartmentService } from "@/data/departments";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  Building2,
  Calculator,
  Scale,
  BadgeCheck,
  Home,
  Building,
  PieChart,
  BarChart3,
  Wallet,
  Key,
  IdCard,
  Plane,
  MapPin,
  Users,
  Sun,
  Laptop,
  Monitor,
  UserCog,
  FolderOpen,
  Receipt,
  ClipboardCheck,
  Settings,
  Briefcase,
  TrendingUp,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Map icon names used in department data to actual Lucide components */
const iconMap: Record<string, LucideIcon> = {
  FileText,
  ShieldCheck,
  Building2,
  Calculator,
  Scale,
  BadgeCheck,
  Home,
  Building,
  PieChart,
  BarChart3,
  Wallet,
  Key,
  IdCard,
  Plane,
  MapPin,
  Users,
  Sun,
  Laptop,
  Monitor,
  UserCog,
  FolderOpen,
  Receipt,
  ClipboardCheck,
  Settings,
  Briefcase,
  TrendingUp,
  Globe,
};

interface DepartmentServicesProps {
  title: string;
  subtitle: string;
  services: DepartmentService[];
  colors: DepartmentColors;
}

export function DepartmentServices({
  title,
  subtitle,
  services,
  colors,
}: DepartmentServicesProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] ?? Briefcase;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300/50 overflow-hidden"
              >
                {/* Decorative corner */}
                <div
                  className={cn(
                    "absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity",
                    colors.lightBg
                  )}
                />

                {/* Icon */}
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl mb-6 transition-colors",
                    colors.lightBg,
                    colors.lightText
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3
                  className={cn(
                    "text-xl font-bold text-slate-900 leading-tight group-hover:transition-colors",
                    `group-hover:${colors.lightText}`
                  )}
                >
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow link */}
                <div
                  className={cn(
                    "mt-6 flex items-center gap-1 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity",
                    colors.lightText
                  )}
                >
                  En savoir plus{" "}
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
