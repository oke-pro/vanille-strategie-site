"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

export function AnnuaireSearch({ defaultValue = "" }: { defaultValue?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed.length >= 2) {
      const qs = new URLSearchParams({ search: trimmed });
      router.push(`/annuaire?${qs.toString()}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm focus-within:border-purple-400/50 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all">
        <Search className="ml-5 h-5 w-5 text-slate-400 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une entreprise, un service..."
          className="flex-1 bg-transparent px-4 py-4 text-white placeholder:text-slate-500 outline-none text-base"
        />
        <button
          type="submit"
          className="mr-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-6 py-2.5 text-sm font-bold text-white transition-colors"
        >
          Rechercher
        </button>
      </div>
    </form>
  );
}
