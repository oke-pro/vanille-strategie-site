"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { use } from "react";
import Link from "next/link";
import { portalGet, portalPost } from "@/lib/api-portal";
import { useAuth } from "@/lib/auth-context";

interface Message {
  id: string;
  dossier_id: string | null;
  client_id: string;
  sender: { name: string; role: string };
  content: string;
  is_read: boolean;
  attachments: string[] | null;
  created_at: string;
}

export default function PortalMessageThreadPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = use(params);
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fetchMessages = useCallback(() => {
    portalGet<Message[]>(`/api/v1/messages?client_id=${clientId}`)
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [clientId]);

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 10000);
    return () => clearInterval(interval);
  }, [fetchMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setSending(true);
    try {
      await portalPost("/api/v1/messages", {
        content: newMessage.trim(),
        client_id: clientId,
      });
      setNewMessage("");
      fetchMessages();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur d'envoi";
      setError(message);
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto flex flex-col" style={{ height: "calc(100vh - 10rem)" }}>
      {/* Header */}
      <div className="mb-4">
        <Link href="/portal/messages" className="text-sm text-slate-500 hover:text-slate-700">
          &larr; Retour aux messages
        </Link>
        <h1 className="font-heading text-xl font-semibold text-slate-900 mt-2">
          Conversation avec le cabinet
        </h1>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm mb-4">{error}</div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-3">
        {messages.length === 0 ? (
          <div className="text-center text-slate-500 text-sm py-8">
            Aucun message. Envoyez le premier message au cabinet.
          </div>
        ) : (
          messages.map((msg) => {
            const isMe = msg.sender.role === "client";
            return (
              <div
                key={msg.id}
                className={`flex ${isMe ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                    isMe
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-900"
                  }`}
                >
                  {!isMe && (
                    <p className={`text-xs font-medium mb-1 ${isMe ? "text-blue-200" : "text-slate-500"}`}>
                      {msg.sender.name}
                    </p>
                  )}
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  <p
                    className={`text-[10px] mt-1 ${
                      isMe ? "text-blue-200" : "text-slate-400"
                    }`}
                  >
                    {new Date(msg.created_at).toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="mt-3 flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Ecrivez votre message..."
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        <button
          type="submit"
          disabled={sending || !newMessage.trim()}
          className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {sending ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
}
