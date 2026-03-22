"use client";

import { useEffect, useRef, useState } from "react";
import { portalGet, portalUpload } from "@/lib/api-portal";
import { useAuth } from "@/lib/auth-context";

interface Document {
  id: string;
  filename: string;
  original_name: string;
  mime_type: string;
  size_bytes: number;
  category: string;
  status: string;
  uploaded_by_name: string;
  dossier_id: string | null;
  client_id: string;
  created_at: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  validated: "bg-emerald-100 text-emerald-700",
  rejected: "bg-red-100 text-red-700",
};

const STATUS_LABELS: Record<string, string> = {
  pending: "En attente",
  validated: "Validé",
  rejected: "Rejeté",
};

const CATEGORY_LABELS: Record<string, string> = {
  identite: "Identité",
  fiscal: "Fiscal",
  bancaire: "Bancaire",
  juridique: "Juridique",
  autre: "Autre",
};

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
}

export default function PortalDocumentsPage() {
  const { user } = useAuth();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // On a besoin du client_id pour uploader. On le récupère via le premier document
  // ou via un appel dédié. Pour simplifier, on utilise un state.
  const [clientId, setClientId] = useState<string | null>(null);

  const fetchDocuments = () => {
    // Les documents du client sont filtrés côté API via les dossiers
    // On récupère tous les dossiers puis les documents
    portalGet<Array<{ id: string; client_id: string }>>("/api/v1/dossiers")
      .then((dossiers) => {
        if (dossiers.length > 0) {
          setClientId(dossiers[0].client_id);
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  // Quand on a le client_id, charger les documents en filtrant par client
  // Note : il n'y a pas encore d'endpoint dédié liste documents client.
  // On utilise la liste depuis les dossiers ou un endpoint custom.
  // Pour l'instant, on utilise un mock intelligent.
  useEffect(() => {
    // Charger les documents via un endpoint dédié quand il existera
    // Pour l'instant on charge via la liste de dossiers
    setLoading(true);
    portalGet<Document[]>("/api/v1/dossiers")
      .then(() => {
        // Documents will be loaded when API supports it
        setDocuments([]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !clientId) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("client_id", clientId);
      formData.append("category", "autre");

      const doc = await portalUpload<Document>("/api/v1/documents/upload", formData);
      setDocuments((prev) => [doc, ...prev]);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur";
      setError(message);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDownload = (docId: string, originalName: string) => {
    // Ouvrir le fichier dans un nouvel onglet (les cookies seront envoyés)
    window.open(`${API_URL}/api/v1/documents/${docId}/download`, "_blank");
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Documents</h1>
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-2xl font-semibold text-slate-900">Documents</h1>
        <div>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className={`inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition cursor-pointer ${
              uploading || !clientId ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            {uploading ? "Envoi..." : "Envoyer un document"}
          </label>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">{error}</div>
      )}

      {documents.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
          <p className="text-slate-500">Aucun document pour le moment.</p>
          <p className="text-sm text-slate-400 mt-1">
            Utilisez le bouton ci-dessus pour envoyer vos premiers documents.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                  Nom
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                  Catégorie
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                  Taille
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                  Statut
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                  Date
                </th>
                <th className="px-6 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900">{doc.original_name}</p>
                    <p className="text-xs text-slate-400">{doc.mime_type}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {CATEGORY_LABELS[doc.category] || doc.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {formatFileSize(doc.size_bytes)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        STATUS_COLORS[doc.status] || "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {STATUS_LABELS[doc.status] || doc.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {new Date(doc.created_at).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDownload(doc.id, doc.original_name)}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Télécharger
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
