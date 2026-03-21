"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const navigation = [
  {
    label: "Votre profil",
    children: [
      { label: "Entrepreneur", href: "/entrepreneur" },
      { label: "Digital Nomad", href: "/digital-nomad" },
      { label: "Retraité", href: "/retraite" },
      { label: "Entreprise / Filiale", href: "/entreprise" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Création de société", href: "/services/creation-societe" },
      { label: "Permis de résidence", href: "/services/permis-residence" },
      { label: "Comptabilité & Fiscalité", href: "/services/comptabilite-fiscalite" },
      { label: "RH & Paie", href: "/services/rh-paie" },
      { label: "Immobilier", href: "/services/immobilier" },
      { label: "Achat / Vente d'entreprise", href: "/services/achat-vente-entreprise" },
    ],
  },
  {
    label: "Maurice",
    href: "/maurice",
  },
  {
    label: "Ressources",
    children: [
      { label: "Guides", href: "/ressources/guides" },
      { label: "Blog", href: "/ressources/blog" },
      { label: "Simulateur Visa", href: "/ressources/simulateur-visa" },
      { label: "Simulateur Fiscal", href: "/ressources/simulateur-fiscal" },
      { label: "FAQ", href: "/ressources/faq" },
    ],
  },
  {
    label: "À propos",
    children: [
      { label: "Le Groupe", href: "/a-propos" },
      { label: "Didier Laroussinie", href: "/didier-laroussinie" },
      { label: "Avis clients", href: "/avis-clients" },
      { label: "Médias", href: "/medias" },
    ],
  },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white border-b border-slate-100"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className={cn(
            "text-xl font-bold tracking-tight transition-colors",
            "text-slate-900"
          )}>
            Vanille Stratégie
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <div key={item.label} className="group relative">
              {"href" in item ? (
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-slate-100/50 hover:text-slate-900",
                    "text-slate-700 hover:text-slate-900"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-slate-100/50 hover:text-slate-900",
                    "text-slate-700 hover:text-slate-900"
                  )}>
                    {item.label}
                    <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[220px] rounded-lg border bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden sm:block">
            <Button variant="default" size="sm">
              Étude gratuite
            </Button>
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 md:block"
          >
            {siteConfig.phone}
          </a>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <nav className="mt-8 flex flex-col gap-1">
                {navigation.map((item) => (
                  <div key={item.label}>
                    {"href" in item ? (
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-slate-900"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <p className="px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                          {item.label}
                        </p>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                ))}
                <div className="mt-6 border-t pt-4">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full">Étude gratuite</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
