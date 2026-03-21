"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, Phone, ArrowRight } from "lucide-react";

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
        "sticky top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "border-b border-slate-200/50 bg-white/80 backdrop-blur-xl py-3"
          : "bg-white border-b border-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <Image
            src="/images/logo-vanille-strategie.png"
            alt="Vanille Stratégie"
            width={180}
            height={60}
            priority
            className="h-12 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => (
            <div key={item.label} className="group relative">
              {"href" in item ? (
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all hover:bg-slate-100 hover:text-slate-950",
                    "text-slate-600"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all hover:bg-slate-100 hover:text-slate-950",
                    "text-slate-600 group-hover:text-slate-950 group-hover:bg-slate-50"
                  )}>
                    {item.label}
                    <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Glass Dropdown */}
                  <div className="invisible absolute left-0 top-full z-50 mt-2 min-w-[240px] translate-y-2 rounded-2xl border border-slate-200/50 bg-white/90 p-3 opacity-0 shadow-2xl backdrop-blur-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="grid gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group/item flex items-center justify-between rounded-xl px-4 py-2.5 text-xs font-bold text-slate-600 transition-all hover:bg-blue-600 hover:text-white"
                        >
                          {child.label}
                          <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-4">
          <div className="hidden flex-col items-end md:flex">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-xs font-bold text-slate-950 hover:text-blue-600 transition-colors"
            >
              <Phone className="h-3 w-3" />
              {siteConfig.phone}
            </a>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Disponible 7j/7</span>
          </div>
          
          <Link href="/contact" className="hidden sm:block">
            <Button className="h-11 rounded-full bg-slate-950 px-6 text-xs font-bold uppercase tracking-widest shadow-xl shadow-slate-200 transition-all hover:bg-slate-800 hover:shadow-slate-300 hover:-translate-y-0.5">
              Étude gratuite
            </Button>
          </Link>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-slate-100 lg:hidden"
            >
              <Menu className="h-6 w-6 text-slate-950" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto border-none bg-white/95 backdrop-blur-2xl">
              <nav className="mt-12 flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.label} className="border-b border-slate-100 pb-2">
                    {"href" in item ? (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-xl font-bold tracking-tighter text-slate-950"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <p className="px-4 pt-6 pb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                          {item.label}
                        </p>
                        <div className="grid gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
                <div className="mt-8 px-4">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <Button className="h-16 w-full rounded-2xl bg-slate-950 text-lg font-bold tracking-tight shadow-2xl">
                      Démarrer mon projet
                    </Button>
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
