"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// Native select for dark form (avoids base-ui typing issues)
import { siteConfig } from "@/data/site";
import { submitQuickLead } from "@/lib/api";

export function LeadCaptureSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [profil, setProfil] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    try {
      await submitQuickLead({
        prenom: form.get("prenom") as string,
        email: form.get("email") as string,
        telephone: (form.get("telephone") as string) || null,
        profil,
      });
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <section className="bg-slate-900 py-16 sm:py-24" id="contact-rapide">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-10">
            <p className="text-4xl">✓</p>
            <h2 className="mt-4 text-2xl font-bold text-white">Merci !</h2>
            <p className="mt-2 text-slate-300">
              Nous avons bien reçu votre demande. Didier Laroussinie vous
              répondra personnellement sous 24h.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-900 py-16 sm:py-24" id="contact-rapide">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Prêt à franchir le pas ?
        </h2>
        <p className="mt-3 text-lg text-slate-300">
          Bénéficiez d&apos;une étude de faisabilité gratuite sur votre projet.
          Nous vous répondons sous 24h.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          <div>
            <Label htmlFor="prenom" className="text-slate-300">Prénom</Label>
            <Input name="prenom" id="prenom" placeholder="Votre prénom" className="mt-1 bg-slate-800 text-white border-slate-700" required />
          </div>
          <div>
            <Label htmlFor="email" className="text-slate-300">Email</Label>
            <Input name="email" id="email" type="email" placeholder="vous@email.com" className="mt-1 bg-slate-800 text-white border-slate-700" required />
          </div>
          <div>
            <Label htmlFor="telephone" className="text-slate-300">Téléphone</Label>
            <Input name="telephone" id="telephone" type="tel" placeholder="+33 6 ..." className="mt-1 bg-slate-800 text-white border-slate-700" />
          </div>
          <div>
            <Label htmlFor="profil" className="text-slate-300">Je suis</Label>
            <select
              name="profil"
              value={profil}
              onChange={(e) => setProfil(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white"
            >
              <option value="">Sélectionnez votre profil</option>
              <option value="entrepreneur">Entrepreneur</option>
              <option value="digital-nomad">Digital Nomad / E-commerçant</option>
              <option value="retraite">Retraité</option>
              <option value="entreprise">Entreprise / Filiale</option>
              <option value="investisseur">Investisseur immobilier</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <Button type="submit" size="lg" className="w-full bg-blue-600 text-base hover:bg-blue-700" disabled={loading}>
              {loading ? "Envoi en cours..." : "Obtenir mon analyse gratuite"}
            </Button>
          </div>
          {error && (
            <p className="sm:col-span-2 text-sm text-red-400">{error}</p>
          )}
        </form>

        <p className="mt-6 text-sm text-slate-500">
          Ou appelez-nous directement :{" "}
          <a href={`tel:${siteConfig.phone}`} className="text-blue-400 hover:underline">
            {siteConfig.phone}
          </a>{" "}
          · WhatsApp disponible
        </p>
      </div>
    </section>
  );
}
