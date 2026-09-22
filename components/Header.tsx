"use client";

import Link from "next/link";
import { Menu, ShieldCheck, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/delete-account", label: "Delete Account" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DC2626] text-white shadow-[0_8px_20px_rgba(220,38,38,0.18)]">
            <ShieldCheck size={21} strokeWidth={2.5} />
          </div>

          <div>
            <div className="text-[17px] font-extrabold tracking-[0.08em] text-[#111827]">
              VALENO
            </div>
            <div className="text-[11px] font-medium tracking-wide text-slate-500">
              ShaktiSetu — by Valeno
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 text-sm font-semibold md:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-4 py-2.5 transition ${
                  active
                    ? "bg-red-50 text-[#991B1B]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#DC2626]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-red-200 hover:text-[#DC2626] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-100 md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-5 py-3 shadow-lg md:hidden" aria-label="Mobile navigation">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between border-b border-slate-100 px-2 py-3.5 text-sm font-semibold last:border-0 ${
                  active ? "text-[#DC2626]" : "text-slate-700"
                }`}
              >
                {item.label}
                {active && <span className="h-1.5 w-1.5 rounded-full bg-[#DC2626]" />}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}