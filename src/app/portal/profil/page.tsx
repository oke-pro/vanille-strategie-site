"use client";

import { useAuth } from "@/lib/auth-context";

export default function PortalProfil() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Mon profil</h1>
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Mon profil</h1>
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">Utilisateur non connecte.</div>
      </div>
    );
  }

  const fields = [
    { label: "Prenom", value: user.first_name },
    { label: "Nom", value: user.last_name },
    { label: "Email", value: user.email },
    { label: "Telephone", value: user.phone || "Non renseigne" },
    { label: "Role", value: user.role === "client" ? "Client" : "Collaborateur" },
    {
      label: "Derniere connexion",
      value: user.last_login
        ? new Date(user.last_login).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })
        : "Premiere connexion",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Mon profil</h1>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-lg font-semibold text-slate-600">
            {user.first_name[0]}{user.last_name[0]}
          </div>
          <div>
            <p className="text-lg font-medium text-slate-900">
              {user.first_name} {user.last_name}
            </p>
            <p className="text-sm text-slate-500">{user.email}</p>
          </div>
        </div>

        <dl className="divide-y divide-slate-100">
          {fields.map((field) => (
            <div key={field.label} className="px-6 py-4 flex items-center justify-between">
              <dt className="text-sm font-medium text-slate-500">{field.label}</dt>
              <dd className="text-sm text-slate-900">{field.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
