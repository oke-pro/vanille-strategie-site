"use client";

// Données mockées — connexion à l'API en Phase 2
const MOCK_STATS = [
  { label: "Dossiers en cours", value: 2, color: "bg-blue-50 text-blue-700 border-blue-200" },
  { label: "Documents à fournir", value: 3, color: "bg-amber-50 text-amber-700 border-amber-200" },
  { label: "Messages non lus", value: 1, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
];

const MOCK_EVENTS = [
  {
    id: 1,
    date: "20 mars 2026",
    title: "Réservation du nom validée",
    dossier: "Création Dupont Consulting Ltd",
    type: "task_completed",
  },
  {
    id: 2,
    date: "18 mars 2026",
    title: "Dossier passé en cours de traitement",
    dossier: "Création Dupont Consulting Ltd",
    type: "status_change",
  },
  {
    id: 3,
    date: "15 mars 2026",
    title: "Nouveau dossier créé",
    dossier: "Occupation Permit — Jean Dupont",
    type: "status_change",
  },
];

export default function PortalDashboard() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">
        Tableau de bord
      </h1>

      {/* Cartes de statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
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

      {/* Derniers événements */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="font-medium text-slate-900">Activité récente</h2>
        </div>
        <ul className="divide-y divide-slate-100">
          {MOCK_EVENTS.map((event) => (
            <li key={event.id} className="px-6 py-4 flex items-start gap-4">
              <div
                className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                  event.type === "task_completed" ? "bg-emerald-500" : "bg-blue-500"
                }`}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900">{event.title}</p>
                <p className="text-sm text-slate-500 mt-0.5">{event.dossier}</p>
              </div>
              <span className="text-xs text-slate-400 flex-shrink-0">{event.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
