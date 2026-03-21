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

        {/* Legal */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-slate-300">Mentions légales</Link>
            <Link href="/conditions" className="hover:text-slate-300">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
