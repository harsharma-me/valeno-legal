import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Mail,
  ShieldCheck,
  Trash2,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-100/60 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-[#991B1B]">
              <ShieldCheck size={17} />
              Official Legal & Privacy Portal
            </div>

            <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl md:text-6xl">
              ShaktiSetu
              <span className="block text-[#DC2626]">by Valeno</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Official information about privacy, terms of use, account
              deletion, and data practices for the ShaktiSetu application.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#DC2626] px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-[#991B1B]"
              >
                Privacy Policy
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/terms"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-red-200 hover:text-[#DC2626]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <LegalCard
            icon={<ShieldCheck size={22} />}
            title="Privacy Policy"
            description="Learn how ShaktiSetu handles personal information, permissions, location data, and other user data."
            href="/privacy"
            linkText="Read Privacy Policy"
          />

          <LegalCard
            icon={<FileText size={22} />}
            title="Terms & Conditions"
            description="Review the terms governing the use of ShaktiSetu and the responsibilities of users."
            href="/terms"
            linkText="Read Terms"
          />

          <LegalCard
            icon={<Trash2 size={22} />}
            title="Delete Account"
            description="Find information about permanently deleting your ShaktiSetu account and associated data."
            href="/delete-account"
            linkText="Delete Account"
          />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-8 md:grid-cols-3">
            <InfoItem
              title="Product"
              value="ShaktiSetu"
            />

            <InfoItem
              title="Brand"
              value="Valeno"
            />

            <InfoItem
              title="Contact"
              value="hello.valeno@gmail.com"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#DC2626]">
                  <Mail size={21} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    Need help?
                  </h2>

                  <p className="text-sm text-slate-500">
                    For privacy, legal, or account deletion queries.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="mailto:hello.valeno@gmail.com"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-red-200 hover:text-[#DC2626]"
            >
              hello.valeno@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">
          <p className="text-sm text-slate-500">
            Effective Date: September 22, 2026
          </p>

          <p className="mt-2 text-sm text-slate-400">
            © 2026 Valeno. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}

function LegalCard({
  icon,
  title,
  description,
  href,
  linkText,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  linkText: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#DC2626]">
        {icon}
      </div>

      <h2 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#DC2626]">
        {linkText}
        <ArrowRight
          size={16}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

function InfoItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border-l-2 border-red-100 pl-5">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <p className="mt-2 font-semibold text-slate-800">
        {value}
      </p>
    </div>
  );
}