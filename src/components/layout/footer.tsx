import Link from "next/link";
import Image from "next/image";
import { siteConfig, officialSources, founder } from "@/data/site";
import { CheckCircle2, ShieldCheck, Linkedin, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400">
      {/* Authority banner */}
      <div className="border-b border-white/5 bg-slate-900/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4 py-6 text-xs font-bold uppercase tracking-[0.2em] sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white">
            <CheckCircle2 className="h-4 w-4 text-blue-500" />
            <span>Fondé par {founder.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>Inscrit MIPA & Agréé FSC</span>
          </div>
          <div className="hidden sm:block h-1 w-1 rounded-full bg-slate-700" />
          <span>{founder.experience}+ ans d&apos;expertise</span>
          <span>Groupe intégré</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Groupe */}
          <div className="space-y-6">
            <Link href="/" className="group inline-block">
              <Image
                src="/images/logo-vanille-strategie.png"
                alt="Vanille Stratégie"
                width={150}
                height={50}
                className="h-10 w-auto brightness-0 invert transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-sm leading-relaxed font-light">
              Le groupe de référence pour l&apos;expatriation et l&apos;investissement à l&apos;Île Maurice. Expertise comptable, juridique et fiscale sans compromis.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.linkedinDidier} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-400 transition-all">
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-400 transition-all">
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-400 transition-all">
                <Twitter className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Solutions Expertise
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Création de société", href: "/services/creation-societe" },
                { label: "Permis de résidence", href: "/services/permis-residence" },
                { label: "Comptabilité & Fiscalité", href: "/services/comptabilite-fiscalite" },
                { label: "RH & Paie", href: "/services/rh-paie" },
                { label: "Immobilier", href: "/services/immobilier" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group">
                    <div className="h-1 w-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Ressources */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Centre de Ressources
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Guides Pratiques", href: "/ressources/guides" },
                { label: "Le Blog", href: "/ressources/blog" },
                { label: "Simulateur Visa", href: "/ressources/simulateur-visa" },
                { label: "Simulateur Fiscal", href: "/ressources/simulateur-fiscal" },
                { label: "FAQ", href: "/ressources/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group">
                    <div className="h-1 w-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Nos Bureaux
            </h3>
            <div className="space-y-6 text-sm">
              <div className="space-y-2">
                <p className="font-bold text-white">{siteConfig.addresses.grandBaie.label}</p>
                <p className="font-light leading-relaxed">{siteConfig.addresses.grandBaie.line1}, {siteConfig.addresses.grandBaie.city}</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-white">{siteConfig.addresses.ebene.label}</p>
                <p className="font-light leading-relaxed">{siteConfig.addresses.ebene.line1}, {siteConfig.addresses.ebene.city}</p>
              </div>
              <div className="pt-4 space-y-2">
                <a href={`tel:${siteConfig.phone}`} className="block text-lg font-bold text-white hover:text-blue-500 transition-colors">{siteConfig.phone}</a>
                <a href={`mailto:${siteConfig.email}`} className="block text-sm font-medium hover:text-blue-500 transition-colors">{siteConfig.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Official sources */}
        <div className="mt-20 border-t border-white/5 pt-10">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/30 text-center">
            Sources & Ressources Officielles
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest">
            {officialSources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-500 transition-colors"
              >
                {source.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social + Légal */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-8 border-t border-white/5 pt-10 text-xs font-bold uppercase tracking-widest text-slate-600">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name} — Excellence Mauricienne.</p>
          <div className="flex gap-8">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link href="/conditions" className="hover:text-white transition-colors">CGV</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
