"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { useConversion } from "./conversion-context";
import { sendChatMessage, getChatHistory } from "@/lib/api";
import { trackEvent } from "@/components/analytics/google-analytics";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE =
  "Bonjour ! Je suis l'assistant de Vanille Stratégie, cabinet de Didier Laroussinie à Maurice. Comment puis-je vous aider dans votre projet d'expatriation ou d'investissement ?";

const VISITOR_ID_KEY = "vs_chat_visitor_id";

function generateVisitorId(): string {
  return `v_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function getVisitorId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = generateVisitorId();
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

export function ChatWidget() {
  const { chatOpen, setChatOpen } = useConversion();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load history on mount
  useEffect(() => {
    if (historyLoaded) return;
    const visitorId = getVisitorId();
    if (!visitorId) return;

    getChatHistory(visitorId).then((data) => {
      if (data.messages && data.messages.length > 0) {
        setMessages(
          data.messages.map((m) => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          }))
        );
      } else {
        // Show welcome message badge
        setHasNewMessage(true);
      }
      setHistoryLoaded(true);
    }).catch(() => {
      setHasNewMessage(true);
      setHistoryLoaded(true);
    });
  }, [historyLoaded]);

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when chat opens
  useEffect(() => {
    if (chatOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setHasNewMessage(false);
    }
  }, [chatOpen]);

  const handleOpen = useCallback(() => {
    setChatOpen(true);
    trackEvent("chat_open", "chatbot");
    // Add welcome message if no history
    if (messages.length === 0) {
      setMessages([{ role: "assistant", content: WELCOME_MESSAGE }]);
    }
  }, [setChatOpen, messages.length]);

  const handleClose = useCallback(() => {
    setChatOpen(false);
  }, [setChatOpen]);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const visitorId = getVisitorId();
    const pageUrl = typeof window !== "undefined" ? window.location.pathname : undefined;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    try {
      const response = await sendChatMessage({
        message: text,
        visitor_id: visitorId,
        page_url: pageUrl,
      });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.message },
      ]);
      trackEvent("chat_message", "chatbot");
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Je suis désolé, une erreur est survenue. N'hésitez pas à nous contacter directement par WhatsApp au +230 59 43 74 83.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  // Closed state: floating bubble
  if (!chatOpen) {
    return (
      <button
        onClick={handleOpen}
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:scale-110 hover:bg-blue-700 lg:bottom-6"
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="h-7 w-7" />
        {hasNewMessage && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
            1
          </span>
        )}
      </button>
    );
  }

  // Open state: chat panel
  return (
    <div className="fixed bottom-0 right-0 z-[60] flex h-full w-full flex-col bg-white shadow-2xl sm:bottom-6 sm:right-6 sm:h-[500px] sm:w-96 sm:rounded-2xl sm:border sm:border-slate-200">
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-none bg-blue-600 px-4 py-3 text-white sm:rounded-t-2xl">
        <div>
          <h3 className="text-sm font-bold">Vanille Stratégie</h3>
          <p className="text-xs text-blue-100">
            Expert en expatriation Maurice
          </p>
        </div>
        <button
          onClick={handleClose}
          className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-blue-500"
          aria-label="Fermer le chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <div className="space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "rounded-br-md bg-blue-600 text-white"
                    : "rounded-bl-md bg-slate-100 text-slate-800"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md bg-slate-100 px-4 py-2.5 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "0ms" }} />
                  <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "150ms" }} />
                  <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "300ms" }} />
                  <span className="ml-2">En train d&apos;écrire...</span>
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-slate-200 px-4 py-3">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Votre question..."
            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-300 focus:bg-white"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition-all hover:bg-blue-700 disabled:opacity-40 disabled:hover:bg-blue-600"
            aria-label="Envoyer"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
