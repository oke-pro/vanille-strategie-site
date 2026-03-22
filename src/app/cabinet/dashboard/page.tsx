"use client";

// Données mockées — connexion à l'API en Phase 2
const MOCK_STATS = [
  { label: "Leads ce mois", value: 14, color: "bg-blue-50 text-blue-700 border-blue-200" },
  { label: "Taux de conversion", value: "32 %", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { label: "CA mensuel", value: "24 500 EUR", color: "bg-amber-50 text-amber-700 border-amber-200" },
  { label: "Tâches urgentes", value: 5, color: "bg-red-50 text-red-700 border-red-200" },
];

const MOCK_PIPELINE = [
  { id: 1, client: "Jean Dupont", dossier: "Création Dupont Consulting Ltd", status: "En cours", priority: "Haute" },
  { id: 2, client: "Marie Martin", dossier: "GBC — Martin Trading Ltd", status: "En attente", priority: "Normale" },
  { id: 3, client: "Pierre Durand", dossier: "Occupation Permit — P. Durand", status: "Brouillon", priority: "Normale" },
];

const MOCK_TASKS = [
  { id: 1, title: "Envoyer les statuts à Jean Dupont", due: "22 mars 2026", urgent: true },
  { id: 2, title: "Relancer Marie Martin — documents manquants", due: "23 mars 2026", urgent: true },
  { id: 3, title: "Préparer la facture #VS-2026-014", due: "25 mars 2026", urgent: false },
];

export default function CabinetDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">
        Tableau de bord CRM
      </h1>

      {/* Cartes de statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {MOCK_STATS.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-xl border p-5 ${stat.color}`}
          >
            <p className="text-sm font-medium opacity-80">{stat.label}</p>
            <p className="text-3xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pipeline récent */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-medium text-slate-900">Pipeline récent</h2>
          </div>
          <ul className="divide-y divide-slate-100">
            {MOCK_PIPELINE.map((item) => (
              <li key={item.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{item.dossier}</p>
                    <p className="text-sm text-slate-500">{item.client}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.priority === "Haute" && (
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">
                        {item.priority}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                      {item.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Tâches à venir */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-medium text-slate-900">Tâches à venir</h2>
          </div>
          <ul className="divide-y divide-slate-100">
            {MOCK_TASKS.map((task) => (
              <li key={task.id} className="px-6 py-4 flex items-start gap-3">
                <div
                  className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                    task.urgent ? "bg-red-500" : "bg-slate-300"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{task.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Échéance : {task.due}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
