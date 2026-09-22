import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] md:py-14">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111827] text-white">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="text-sm font-extrabold tracking-[0.12em] text-[#111827]">VALENO</p>
              <p className="text-xs text-slate-500">ShaktiSetu — by Valeno</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">
            Official information for the ShaktiSetu safety platform.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Legal</h2>
          <nav className="mt-4 grid gap-3 text-sm font-medium" aria-label="Legal navigation">
            <Link href="/privacy" className="w-fit text-slate-600 transition hover:text-[#DC2626]">Privacy Policy</Link>
            <Link href="/terms" className="w-fit text-slate-600 transition hover:text-[#DC2626]">Terms & Conditions</Link>
            <Link href="/delete-account" className="w-fit text-slate-600 transition hover:text-[#DC2626]">Delete Account</Link>
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Contact</h2>
          <a href="mailto:hello.valeno@gmail.com" className="mt-4 flex w-fit items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-[#DC2626]">
            <Mail size={16} />
            hello.valeno@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-slate-400 sm:px-6">
          Copyright © 2026 Valeno. All rights reserved.
        </div>
      </div>
    </footer>
  );
}