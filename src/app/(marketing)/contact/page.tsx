import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { siteConfig, founder } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Étude de faisabilité gratuite",
  description: "Contactez Vanille Stratégie pour une étude de faisabilité gratuite sur votre projet d'implantation à Maurice. Réponse sous 24h.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Formulaire */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Parlons de votre projet
              </h1>
              <p className="mt-3 text-lg text-slate-600">
                Bénéficiez d&apos;une étude de faisabilité gratuite. Nous vous répondons sous 24h.
              </p>

              <form className="mt-10 space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input id="prenom" placeholder="Votre prénom" className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="nom">Nom *</Label>
                    <Input id="nom" placeholder="Votre nom" className="mt-1" required />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="vous@email.com" className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input id="telephone" type="tel" placeholder="+33 6 ..." className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="profil">Je suis *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Sélectionnez votre profil" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entrepreneur">Entrepreneur — créer/délocaliser ma société</SelectItem>
                      <SelectItem value="digital-nomad">Digital Nomad / E-commerçant</SelectItem>
                      <SelectItem value="retraite">Retraité — m&apos;installer à Maurice</SelectItem>
                      <SelectItem value="entreprise">Entreprise — implanter une filiale</SelectItem>
                      <SelectItem value="investisseur">Investisseur immobilier</SelectItem>
                      <SelectItem value="achat-affaire">Acheter / vendre une entreprise</SelectItem>
                      <SelectItem value="comptabilite">Comptabilité / fiscalité existante</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="objet">Objet *</Label>
                  <Input id="objet" placeholder="Résumez votre projet en une phrase" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="message">Votre message</Label>
                  <Textarea id="message" placeholder="Décrivez votre projet, votre situation actuelle, vos questions..." className="mt-1" rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-blue-600 text-base hover:bg-blue-700">
                  Envoyer ma demande
                </Button>
                <p className="text-xs text-slate-500">
                  En soumettant ce formulaire, vous acceptez d&apos;être contacté par Vanille Stratégie. Vos données sont confidentielles.
                </p>
              </form>
            </div>

            {/* Sidebar contact */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-8">
                {/* Didier card */}
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-xl font-bold text-white">DL</div>
                    <div>
                      <p className="font-bold text-slate-900">{founder.name}</p>
                      <p className="text-xs text-blue-600">{founder.title}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">
                    Votre interlocuteur principal. {founder.experience}+ ans d&apos;expérience, ex-Deloitte.
                  </p>
                </div>

                {/* Coordonnées */}
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900">Coordonnées</h3>
                  <div className="mt-4 space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-slate-700">Téléphone / WhatsApp</p>
                      <a href={`tel:${siteConfig.phone}`} className="text-blue-600 hover:underline">{siteConfig.phone}</a>
                    </div>
                    <div>
                      <p className="font-medium text-slate-700">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a>
                    </div>
                  </div>
                </div>

                {/* Bureaux */}
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900">Nos bureaux</h3>
                  <div className="mt-4 space-y-4 text-sm">
                    <div>
                      <p className="font-medium text-blue-600">Vanille Stratégie</p>
                      <p className="text-slate-600">{siteConfig.addresses.grandBaie.line1}</p>
                      <p className="text-slate-600">{siteConfig.addresses.grandBaie.city}, {siteConfig.addresses.grandBaie.country}</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-600">BD Star Management Services</p>
                      <p className="text-slate-600">{siteConfig.addresses.ebene.line1}</p>
                      <p className="text-slate-600">{siteConfig.addresses.ebene.line2}</p>
                      <p className="text-slate-600">{siteConfig.addresses.ebene.city}, {siteConfig.addresses.ebene.country}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
