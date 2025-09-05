'use client';

import { useMemo, useState } from 'react';

export type FaqItem = {
  id: string;
  q: string;
  a: React.ReactNode;
  category?: string;
  tags?: string[];
};

export default function FaqList({ items }: { items: FaqItem[] }) {
  const categories = Array.from(
    new Set(items.map((i) => i.category).filter(Boolean))
  ) as string[];
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState<string | 'All'>('All');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return items.filter((i) => {
      const inCat = cat === 'All' || i.category === cat;
      const inText =
        !q ||
        i.q.toLowerCase().includes(q) ||
        (typeof i.a === 'string' ? i.a.toLowerCase().includes(q) : false);
      return inCat && inText;
    });
  }, [items, query, cat]);

  return (
    <div className="space-y-4">
      {/* controls */}
      <div className="flex flex-wrap items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions…"
          className="w-full sm:w-80 rounded-lg border border-graphite-600 bg-graphite-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCat('All')}
            className={`rounded-full px-3 py-1 text-sm border ${cat === 'All' ? 'bg-brand-500 text-black border-brand-500' : 'border-white/15 hover:bg-white/10'}`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-3 py-1 text-sm border ${cat === c ? 'bg-brand-500 text-black border-brand-500' : 'border-white/15 hover:bg-white/10'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* list */}
      <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
        {filtered.map((i) => (
          <details
            key={i.id}
            id={i.id}
            className="group p-4 open:bg-white/[0.06]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <h3 className="text-lg font-semibold">{i.q}</h3>
              <span className="ml-4 text-white/60 group-open:hidden">+</span>
              <span className="ml-4 text-white/60 hidden group-open:inline">
                –
              </span>
            </summary>
            <div className="mt-3 text-white/85 space-y-3">{i.a}</div>
            {i.category && (
              <div className="mt-3 text-xs text-white/50">
                Category: {i.category}
              </div>
            )}
          </details>
        ))}
        {!filtered.length && (
          <div className="p-4 text-white/70">
            No results. Try a different search.
          </div>
        )}
      </div>
    </div>
  );
}
