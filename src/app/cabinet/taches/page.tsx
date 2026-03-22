"use client";

import { useEffect, useState } from "react";
import { portalGet, portalPatch, portalPost, portalDelete } from "@/lib/api-portal";

interface TaskItem {
  id: string;
  dossier_id: string;
  dossier_title: string | null;
  client_name: string | null;
  assigned_to_name: string | null;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  due_date: string | null;
  completed_at: string | null;
  created_at: string;
}

interface TaskList {
  items: TaskItem[];
  total: number;
}

interface Dossier {
  id: string;
  title: string;
  client_id: string;
}

const PRIORITY_BADGE: Record<string, string> = {
  urgent: "bg-red-100 text-red-700",
  high: "bg-orange-100 text-orange-700",
  normal: "bg-slate-100 text-slate-600",
  low: "bg-slate-50 text-slate-400",
};

const STATUS_LABEL: Record<string, string> = {
  todo: "A faire",
  in_progress: "En cours",
  done: "Termine",
};

export default function TachesPage() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [filterPriority, setFilterPriority] = useState<string>("");
  const [showNewTask, setShowNewTask] = useState(false);
  const [dossiers, setDossiers] = useState<Dossier[]>([]);

  // Form state
  const [newTask, setNewTask] = useState({
    dossier_id: "",
    title: "",
    description: "",
    priority: "normal",
    due_date: "",
  });
  const [submitting, setSubmitting] = useState(false);

  async function fetchTasks() {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filterStatus) params.set("status", filterStatus);
      if (filterPriority) params.set("priority", filterPriority);
      const qs = params.toString();
      const data = await portalGet<TaskList>(`/api/v1/tasks${qs ? `?${qs}` : ""}`);
      setTasks(data.items);
      setTotal(data.total);
    } catch (err) {
      console.error("Erreur chargement taches:", err);
    }
    setLoading(false);
  }

  async function fetchDossiers() {
    try {
      const data = await portalGet<Dossier[]>("/api/v1/dossiers");
      setDossiers(data);
    } catch {
      setDossiers([]);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [filterStatus, filterPriority]);

  async function handleComplete(taskId: string) {
    try {
      await portalPatch(`/api/v1/tasks/${taskId}/complete`, {});
      fetchTasks();
    } catch (err) {
      console.error("Erreur completion:", err);
    }
  }

  async function handleDelete(taskId: string) {
    if (!confirm("Supprimer cette tache ?")) return;
    try {
      await portalDelete(`/api/v1/tasks/${taskId}`);
      fetchTasks();
    } catch (err) {
      console.error("Erreur suppression:", err);
    }
  }

  async function handleCreateTask() {
    if (!newTask.dossier_id || !newTask.title) return;
    setSubmitting(true);
    try {
      await portalPost("/api/v1/tasks", {
        dossier_id: newTask.dossier_id,
        title: newTask.title,
        description: newTask.description || null,
        priority: newTask.priority,
        due_date: newTask.due_date || null,
      });
      setNewTask({ dossier_id: "", title: "", description: "", priority: "normal", due_date: "" });
      setShowNewTask(false);
      fetchTasks();
    } catch (err) {
      console.error("Erreur création:", err);
    }
    setSubmitting(false);
  }

  async function handleChangePriority(taskId: string, priority: string) {
    try {
      await portalPatch(`/api/v1/tasks/${taskId}`, { priority });
      fetchTasks();
    } catch (err) {
      console.error("Erreur priorite:", err);
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-2xl font-semibold text-slate-900">Taches</h1>
        <button
          onClick={() => {
            setShowNewTask(true);
            fetchDossiers();
          }}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition"
        >
          + Nouvelle tache
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Tous les statuts</option>
          <option value="todo">A faire</option>
          <option value="in_progress">En cours</option>
          <option value="done">Termine</option>
        </select>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Toutes priorites</option>
          <option value="urgent">Urgent</option>
          <option value="high">Haute</option>
          <option value="normal">Normale</option>
          <option value="low">Basse</option>
        </select>
      </div>

      {/* New task modal */}
      {showNewTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setShowNewTask(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Nouvelle tache</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-slate-600 block mb-1">Dossier</label>
                <select
                  value={newTask.dossier_id}
                  onChange={(e) => setNewTask({ ...newTask, dossier_id: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Selectionner un dossier</option>
                  {dossiers.map((d) => (
                    <option key={d.id} value={d.id}>{d.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-600 block mb-1">Titre</label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Titre de la tache"
                />
              </div>
              <div>
                <label className="text-sm text-slate-600 block mb-1">Description</label>
                <textarea
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  rows={3}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Description (optionnel)"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-slate-600 block mb-1">Priorite</label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="low">Basse</option>
                    <option value="normal">Normale</option>
                    <option value="high">Haute</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-slate-600 block mb-1">Echeance</label>
                  <input
                    type="date"
                    value={newTask.due_date}
                    onChange={(e) => setNewTask({ ...newTask, due_date: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={handleCreateTask}
                  disabled={submitting || !newTask.dossier_id || !newTask.title}
                  className="flex-1 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 disabled:opacity-50 transition"
                >
                  {submitting ? "Création..." : "Créer"}
                </button>
                <button
                  onClick={() => setShowNewTask(false)}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tasks table */}
      {loading ? (
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900" />
        </div>
      ) : tasks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-500">Aucune tache trouvee</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-4 py-3 text-left font-medium text-slate-600 w-8"></th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Titre</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Dossier</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Client</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Assigne</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Priorite</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Statut</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Echeance</th>
                <th className="px-4 py-3 text-left font-medium text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tasks.map((task) => (
                <tr key={task.id} className={`hover:bg-slate-50 ${task.status === "done" ? "opacity-50" : ""}`}>
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={task.status === "done"}
                      onChange={() => {
                        if (task.status !== "done") handleComplete(task.id);
                      }}
                      className="rounded border-slate-300"
                      disabled={task.status === "done"}
                    />
                  </td>
                  <td className="px-4 py-3">
                    <p className={`font-medium text-slate-900 ${task.status === "done" ? "line-through" : ""}`}>
                      {task.title}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-slate-500">{task.dossier_title || "-"}</td>
                  <td className="px-4 py-3 text-slate-500">{task.client_name || "-"}</td>
                  <td className="px-4 py-3 text-slate-500">{task.assigned_to_name || "-"}</td>
                  <td className="px-4 py-3">
                    <select
                      value={task.priority}
                      onChange={(e) => handleChangePriority(task.id, e.target.value)}
                      className={`px-2 py-0.5 rounded text-xs font-medium border-0 cursor-pointer ${PRIORITY_BADGE[task.priority] || PRIORITY_BADGE.normal}`}
                    >
                      <option value="low">Basse</option>
                      <option value="normal">Normale</option>
                      <option value="high">Haute</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      task.status === "done"
                        ? "bg-emerald-100 text-emerald-700"
                        : task.status === "in_progress"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-100 text-slate-600"
                    }`}>
                      {STATUS_LABEL[task.status] || task.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-500">
                    {task.due_date
                      ? new Date(task.due_date).toLocaleDateString("fr-FR")
                      : "-"}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-xs text-red-500 hover:text-red-700"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-4 py-3 border-t border-slate-200 text-xs text-slate-500">
            {total} tache{total > 1 ? "s" : ""}
          </div>
        </div>
      )}
    </div>
  );
}
