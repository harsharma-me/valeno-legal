"use client";

// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { useState } from "react";

export default function DeleteAccountPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-red-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24">
          <div className="mb-7 flex items-center gap-2 text-sm font-medium text-[#DC2626]">
            <ShieldCheck size={17} />
            <span>VALENO / SHAKTISETU</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold tracking-[-0.04em] text-[#111827] md:text-7xl">
              Delete Your Account
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500 md:text-xl">
              Request deletion of your ShaktiSetu account and associated
              personal information.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">

          {/* IMPORTANT NOTICE */}
          <div className="mb-8 rounded-3xl border border-red-200 bg-red-50 p-6 md:p-8">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#DC2626] shadow-sm">
                <AlertTriangle size={22} />
              </div>

              <div>
                <h2 className="font-bold text-[#991B1B]">
                  Account deletion is permanent
                </h2>

                <p className="mt-2 text-sm leading-6 text-red-900">
                  Deleting your account may permanently remove your account
                  and associated personal information. Make sure you no longer
                  need the account before submitting a deletion request.
                </p>
              </div>
            </div>
          </div>

          {/* TWO COLUMN */}
          <div className="grid gap-8 lg:grid-cols-2">

            {/* IN-APP METHOD */}
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#DC2626]">
                <Trash2 size={21} />
              </div>

              <h2 className="mt-5 text-2xl font-bold tracking-tight">
                Delete from the app
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                The quickest way to request account deletion is through the
                ShaktiSetu Android application.
              </p>

              <div className="mt-7 space-y-4">
                <Step
                  number="01"
                  title="Open ShaktiSetu"
                  text="Launch the ShaktiSetu application on your Android device."
                />

                <Step
                  number="02"
                  title="Open Settings"
                  text="Go to the Settings section of the application."
                />

                <Step
                  number="03"
                  title="Open Account"
                  text="Navigate to your account settings."
                />

                <Step
                  number="04"
                  title="Select Delete Account"
                  text="Choose the Delete Account option."
                />

                <Step
                  number="05"
                  title="Confirm deletion"
                  text="Review the warning and confirm your request."
                />
              </div>
            </section>

            {/* DATA INFORMATION */}
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <ShieldCheck size={21} />
              </div>

              <h2 className="mt-5 text-2xl font-bold tracking-tight">
                What happens to your data?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Account deletion is intended to remove personal information
                associated with your account, subject to applicable legal,
                security and operational requirements.
              </p>

              <div className="mt-7 space-y-4">
                <DataItem text="Your ShaktiSetu account may be deleted." />

                <DataItem text="Personal profile information may be removed." />

                <DataItem text="Emergency-contact information associated with your account may be removed." />

                <DataItem text="Certain records may be retained where legally required or reasonably necessary for security, fraud prevention or legal obligations." />
              </div>
            </section>
          </div>

          {/* WEB REQUEST FORM */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <div className="max-w-2xl">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#DC2626]">
                <Mail size={21} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight">
                Request account deletion
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                If you cannot access the application, you can submit a
                deletion request using the form below.
              </p>
            </div>

            {!submitted ? (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
                className="mt-8 max-w-2xl space-y-6"
              >
                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#DC2626] focus:ring-4 focus:ring-red-50"
                  />
                </div>

                {/* PHONE / IDENTIFIER */}
                <div>
                  <label
                    htmlFor="identifier"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Phone number / account identifier
                  </label>

                  <input
                    id="identifier"
                    name="identifier"
                    type="text"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#DC2626] focus:ring-4 focus:ring-red-50"
                  />
                </div>

                {/* REASON */}
                <div>
                  <label
                    htmlFor="reason"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Reason
                    <span className="ml-1 font-normal text-slate-400">
                      (optional)
                    </span>
                  </label>

                  <textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    placeholder="Optional"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#DC2626] focus:ring-4 focus:ring-red-50"
                  />
                </div>

                {/* CONFIRMATION */}
                <label className="flex cursor-pointer gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-[#DC2626]"
                  />

                  <span className="text-sm leading-6 text-slate-600">
                    I understand that account deletion may permanently remove
                    my ShaktiSetu account and associated data.
                  </span>
                </label>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#DC2626] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#991B1B] sm:w-auto"
                >
                  Request Account Deletion
                  <ArrowRight size={17} />
                </button>

                <p className="text-xs leading-5 text-slate-400">
                  Your request will require verification before account
                  deletion is processed.
                </p>
              </form>
            ) : (
              <div className="mt-8 max-w-2xl rounded-2xl border border-green-200 bg-green-50 p-6">
                <div className="flex gap-4">
                  <CheckCircle2
                    size={24}
                    className="mt-0.5 shrink-0 text-green-600"
                  />

                  <div>
                    <h3 className="font-semibold text-green-900">
                      Request ready for submission
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-green-800">
                      This frontend form does not send or process requests yet.
                      To submit a deletion request, email our support team at
                      hello.valeno@gmail.com with your account details. Your
                      request will require verification before deletion is
                      processed.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* CONTACT */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-red-400">
                NEED HELP?
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Account deletion support
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                If you have questions about account deletion or cannot access
                your account, contact our support team.
              </p>

              <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm">
                <Mail size={17} className="text-red-400" />
                <span>hello.valeno@gmail.com</span>
              </div>
            </div>
          </section>

          {/* FOOTNOTE */}
          <p className="mt-8 text-center text-xs leading-5 text-slate-400">
            Account deletion requests are subject to identity verification and
            applicable legal or security retention requirements.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-xs font-bold text-[#DC2626]">
        {number}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
      </div>
    </div>
  );
}

function DataItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3">
      <CheckCircle2
        size={18}
        className="mt-1 shrink-0 text-[#DC2626]"
      />

      <p className="text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
