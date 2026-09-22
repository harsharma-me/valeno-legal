"use client";

import { List, ChevronDown } from "lucide-react";
import { useState } from "react";

type Section = readonly string[];

export default function TableOfContents({ sections }: { sections: Section[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-800"
      >
        <span className="flex items-center gap-2.5"><List size={17} className="text-[#DC2626]" /> On this page</span>
        <ChevronDown size={18} className={`text-slate-400 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <nav className="grid gap-1 border-t border-slate-100 px-3 py-3" aria-label="Table of contents">
          {sections.map(([number, title, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-red-50 hover:text-[#DC2626]"
            >
              <span className="min-w-[22px] text-xs font-bold text-slate-400">{number}</span>
              <span>{title}</span>
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}