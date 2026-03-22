"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { portalGet } from "@/lib/api-portal";

interface Conversation {
  client_id: string;
  client_name: string;
  last_message: string;
  unread_count: number;
  updated_at: string;
}

export default function CabinetMessagesPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    portalGet<Conversation[]>("/api/v1/messages/conversations")
      .then(setConversations)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = conversations.filter((c) =>
    c.client_name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Messages</h1>
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Messages</h1>
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Messages</h1>

      {/* Barre de recherche */}
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un client..."
          className="w-full max-w-sm rounded-lg border border-slate-300 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
          <p className="text-slate-500">
            {search ? "Aucun résultat pour cette recherche." : "Aucune conversation pour le moment."}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm divide-y divide-slate-100">
          {filtered.map((conv) => (
            <Link
              key={conv.client_id}
              href={`/cabinet/messages/${conv.client_id}`}
              className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600 flex-shrink-0">
                  {conv.client_name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-slate-900">
                      {conv.client_name}
                    </p>
                    {conv.unread_count > 0 && (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold">
                        {conv.unread_count}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 truncate mt-0.5">
                    {conv.last_message}
                  </p>
                </div>
              </div>
              <span className="text-xs text-slate-400 flex-shrink-0 ml-4">
                {new Date(conv.updated_at).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "short",
                })}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
