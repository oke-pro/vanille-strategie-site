import Link from "next/link";
import { siteConfig, officialSources, founder } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-300">
      {/* Authority banner */}
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-4 text-xs text-slate-400 sm:px-6 lg:px-8">
          <span>Fondé par <strong className="text-white">{founder.name}</strong></span>
          <span>{founder.title}</span>
          <span>{founder.experience}+ ans d&apos;expérience</span>
          <span>BD Star inscrit MIPA</span>
          <span>Partenaires agréés FSC</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Groupe */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Le Groupe
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/a-propos" className="hover:text-white">À propos</Link></li>
              <li><Link href="/didier-laroussinie" className="hover:text-white">Didier Laroussinie</Link></li>
              <li><Link href="/avis-clients" className="hover:text-white">Avis clients</Link></li>
              <li><Link href="/medias" className="hover:text-white">Médias</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/creation-societe" className="hover:text-white">Création de société</Link></li>
              <li><Link href="/services/permis-residence" className="hover:text-white">Permis de résidence</Link></li>
              <li><Link href="/services/comptabilite-fiscalite" className="hover:text-white">Comptabilité & Fiscalité</Link></li>
              <li><Link href="/services/rh-paie" className="hover:text-white">RH & Paie</Link></li>
              <li><Link href="/services/immobilier" className="hover:text-white">Immobilier</Link></li>
            </ul>
          </div>

          {/* Col 3 — Ressources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Ressources
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ressources/guides" className="hover:text-white">Guides</Link></li>
              <li><Link href="/ressources/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/ressources/simulateur-visa" className="hover:text-white">Simulateur Visa</Link></li>
              <li><Link href="/ressources/simulateur-fiscal" className="hover:text-white">Simulateur Fiscal</Link></li>
              <li><Link href="/ressources/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <address className="space-y-3 text-sm not-italic">
              <div>
                <p className="font-medium text-white">{siteConfig.addresses.grandBaie.label}</p>
                <p>{siteConfig.addresses.grandBaie.line1}</p>
                <p>{siteConfig.addresses.grandBaie.city}, {siteConfig.addresses.grandBaie.country}</p>
              </div>
              <div>
                <p className="font-medium text-white">{siteConfig.addresses.ebene.label}</p>
                <p>{siteConfig.addresses.ebene.line1}</p>
                <p>{siteConfig.addresses.ebene.city}, {siteConfig.addresses.ebene.country}</p>
              </div>
              <p>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">{siteConfig.phone}</a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
              </p>
            </address>
          </div>
        </div>

        {/* Official sources */}
        <div className="mt-10 border-t border-slate-800 pt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Ressources officielles
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
            {officialSources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-300"
              >
                {source.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social + Legal */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            {/* Réseaux sociaux */}
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Facebook">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href={siteConfig.social.linkedinDidier} target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="X (Twitter)">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-slate-300">Mentions légales</Link>
            <Link href="/conditions" className="hover:text-slate-300">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
