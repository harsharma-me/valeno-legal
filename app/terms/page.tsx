import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  FileText,
  ShieldAlert,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for ShaktiSetu by Valeno.",
};

const sections = [
  ["01", "Introduction", "introduction"],
  ["02", "Acceptance of Terms", "acceptance"],
  ["03", "About ShaktiSetu", "about"],
  ["04", "Eligibility & Accounts", "eligibility"],
  ["05", "Lawful Use", "lawful-use"],
  ["06", "Prohibited Activities", "prohibited"],
  ["07", "SOS & Emergency Features", "sos"],
  ["08", "Emergency Contacts", "contacts"],
  ["09", "Location Sharing", "location"],
  ["10", "Evidence Recording", "evidence"],
  ["11", "Third-Party Services", "third-party"],
  ["12", "Service Availability", "availability"],
  ["13", "Account Suspension", "suspension"],
  ["14", "Intellectual Property", "intellectual"],
  ["15", "User Content", "content"],
  ["16", "Privacy", "privacy"],
  ["17", "Disclaimer", "disclaimer"],
  ["18", "Limitation of Liability", "liability"],
  ["19", "Changes to Terms", "changes"],
  ["20", "Governing Law", "law"],
  ["21", "Contact", "contact"],
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-red-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24">
          <div className="mb-7 flex items-center gap-2 text-sm font-medium text-[#DC2626]">
            <Scale size={17} />
            <span>VALENO / SHAKTISETU</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold tracking-[-0.04em] text-[#111827] md:text-7xl">
              Terms & Conditions
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500 md:text-xl">
              The terms that govern your access to and use of the ShaktiSetu
              safety platform.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                Effective:{" "}
                <span className="font-semibold text-slate-900">
                  September 22, 2026
                </span>
              </div>

              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                Updated:{" "}
                <span className="font-semibold text-slate-900">
                  September 22, 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTICE STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-start gap-4 rounded-2xl border border-red-100 bg-red-50 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#DC2626] shadow-sm">
              <ShieldAlert size={20} />
            </div>

            <div>
              <p className="font-semibold text-[#991B1B]">
                Important emergency-service notice
              </p>

              <p className="mt-1 text-sm leading-6 text-red-900">
                ShaktiSetu is a technology-based assistance tool and does not
                replace official emergency services or guarantee emergency
                response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-20">
        <div className="mb-8 lg:hidden">
          <TableOfContents sections={sections} />
        </div>
        <div className="grid gap-10 lg:grid-cols-[250px_minmax(0,1fr)]">

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="mb-4 px-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                On this page
              </div>

              <nav className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                {sections.map(([number, title, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="group flex items-start gap-3 rounded-xl px-3 py-2 text-sm text-slate-500 transition hover:bg-red-50 hover:text-[#DC2626]"
                  >
                    <span className="min-w-[22px] text-xs font-bold text-slate-300 group-hover:text-[#DC2626]">
                      {number}
                    </span>

                    <span className="leading-5">{title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* DOCUMENT */}
          <article className="min-w-0">

            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <InfoCard
                icon={<FileText size={20} />}
                title="Please read carefully"
                text="These terms define the rules and limitations that apply when using ShaktiSetu."
              />

              <InfoCard
                icon={<ShieldAlert size={20} />}
                title="Safety first"
                text="Always contact appropriate official emergency services when necessary."
              />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white px-7 py-10 shadow-sm md:px-12 md:py-14">

              <TermsSection
                id="introduction"
                number="01"
                title="Introduction"
              >
                <p>
                  These Terms & Conditions (“Terms”) govern your use of the
                  ShaktiSetu application operated by Valeno (“Valeno”, “we”,
                  “us”, or “our”).
                </p>

                <p>
                  By installing, accessing or using ShaktiSetu, you agree to
                  these Terms. If you do not agree with these Terms, you should
                  not use the application.
                </p>
              </TermsSection>

              <TermsSection
                id="acceptance"
                number="02"
                title="Acceptance of Terms"
              >
                <p>
                  Your access to and use of ShaktiSetu is subject to these
                  Terms and our Privacy Policy.
                </p>

                <p>
                  By continuing to use the application after the Terms are
                  updated, you acknowledge the revised Terms where permitted
                  by applicable law.
                </p>
              </TermsSection>

              <TermsSection
                id="about"
                number="03"
                title="About ShaktiSetu"
              >
                <p>
                  ShaktiSetu is a technology-based women-safety and
                  emergency-assistance application.
                </p>

                <p>
                  Depending on the version of the application and enabled
                  features, ShaktiSetu may provide:
                </p>

                <BulletList
                  items={[
                    "SOS alerts",
                    "Live location sharing",
                    "Emergency contacts",
                    "Emergency SMS and calling assistance",
                    "Fake call functionality",
                    "Alarm and siren functionality",
                    "Voice-trigger functionality",
                    "Offline SMS fallback",
                    "Danger-zone alerts",
                    "Audio, photo and video evidence recording",
                    "PIN-protected SOS dismissal",
                  ]}
                />
              </TermsSection>

              <TermsSection
                id="eligibility"
                number="04"
                title="Eligibility & Accounts"
              >
                <p>
                  You must provide accurate information when creating or using
                  a ShaktiSetu account.
                </p>

                <p>
                  You are responsible for maintaining the security of your
                  account and for activity performed through your account.
                </p>

                <p>
                  You must not intentionally provide false information or use
                  another person’s account without authorization.
                </p>
              </TermsSection>

              <TermsSection
                id="lawful-use"
                number="05"
                title="Lawful Use"
              >
                <p>
                  You agree to use ShaktiSetu only for lawful purposes and in
                  accordance with applicable laws.
                </p>

                <p>
                  Safety features must be used responsibly and for their
                  intended purpose.
                </p>
              </TermsSection>

              <TermsSection
                id="prohibited"
                number="06"
                title="Prohibited Activities"
              >
                <p>You must not:</p>

                <BulletList
                  items={[
                    "Intentionally misuse SOS or emergency features",
                    "Submit false emergency reports for malicious purposes",
                    "Attempt to access another user's account",
                    "Attempt to bypass security controls",
                    "Disrupt or interfere with the service",
                    "Upload unlawful or harmful content",
                    "Use the application to harass or threaten another person",
                    "Violate another person's privacy or legal rights",
                    "Use the application for fraudulent or abusive purposes",
                  ]}
                />
              </TermsSection>

              <TermsSection
                id="sos"
                number="07"
                title="SOS & Emergency Features"
              >
                <p>
                  SOS and related features are intended to assist users during
                  potentially unsafe situations.
                </p>

                <p>
                  Depending on the feature activated, ShaktiSetu may attempt
                  to:
                </p>

                <BulletList
                  items={[
                    "Share location",
                    "Send emergency messages",
                    "Assist with calls",
                    "Activate an alarm",
                    "Record evidence",
                  ]}
                />

                <InfoBox title="No guaranteed emergency response">
                  The successful operation of an SOS feature can depend on
                  network connectivity, GPS availability, battery level,
                  device settings, permissions, operating-system restrictions,
                  mobile carrier services and third-party systems.
                </InfoBox>
              </TermsSection>

              <TermsSection
                id="contacts"
                number="08"
                title="Emergency Contacts"
              >
                <p>
                  You are responsible for ensuring that the emergency contacts
                  you add are accurate and appropriate.
                </p>

                <p>
                  You should inform your emergency contacts that they may
                  receive alerts or communications from ShaktiSetu.
                </p>

                <p>
                  Valeno is not responsible for the actions, availability or
                  response of emergency contacts.
                </p>
              </TermsSection>

              <TermsSection
                id="location"
                number="09"
                title="Location Sharing"
              >
                <p>
                  Location sharing occurs as part of applicable features and
                  permissions that you enable.
                </p>

                <p>
                  Location information may not always be accurate or available.
                  You should not rely solely on ShaktiSetu&apos;s location
                  information during an emergency.
                </p>
              </TermsSection>

              <TermsSection
                id="evidence"
                number="10"
                title="Evidence Recording"
              >
                <p>
                  If you use audio, video or photo recording features, you are
                  responsible for using them in accordance with applicable
                  laws.
                </p>

                <p>
                  You must not use ShaktiSetu to unlawfully record, distribute,
                  threaten, harass or violate the privacy or rights of another
                  person.
                </p>
              </TermsSection>

              <TermsSection
                id="third-party"
                number="11"
                title="Third-Party Services"
              >
                <p>
                  ShaktiSetu may depend on third-party services such as
                  authentication providers, cloud infrastructure, mapping
                  services, mobile networks, SMS services and device
                  operating-system functionality.
                </p>

                <p>
                  Third-party services may experience outages, limitations,
                  changes or failures outside our control.
                </p>
              </TermsSection>

              <TermsSection
                id="availability"
                number="12"
                title="Service Availability"
              >
                <p>
                  We aim to keep ShaktiSetu available and reliable, but we do
                  not guarantee uninterrupted or error-free operation.
                </p>

                <p>
                  The application may become temporarily unavailable because
                  of maintenance, technical failures, network issues, security
                  incidents, third-party outages or circumstances outside our
                  reasonable control.
                </p>
              </TermsSection>

              <TermsSection
                id="suspension"
                number="13"
                title="Account Suspension & Termination"
              >
                <p>
                  We may suspend or terminate an account where reasonably
                  necessary to address:
                </p>

                <BulletList
                  items={[
                    "Abuse",
                    "Fraud",
                    "Security threats",
                    "Violation of these Terms",
                    "Illegal activity",
                    "Misuse of emergency features",
                  ]}
                />

                <p>
                  Users may request account deletion through the ShaktiSetu
                  account-deletion process.
                </p>
              </TermsSection>

              <TermsSection
                id="intellectual"
                number="14"
                title="Intellectual Property"
              >
                <p>
                  The ShaktiSetu application, branding, logos, designs,
                  software, text, graphics and other original materials are
                  owned by or licensed to Valeno unless otherwise stated.
                </p>

                <p>
                  You may not copy, modify, distribute, sell, reverse engineer
                  or commercially exploit these materials except where
                  permitted by applicable law or with appropriate
                  authorization.
                </p>
              </TermsSection>

              <TermsSection
                id="content"
                number="15"
                title="User Content"
              >
                <p>
                  You retain rights you may have in content you provide
                  through the application.
                </p>

                <p>
                  You grant Valeno the limited permissions necessary to
                  process, store, transmit and display that content solely for
                  providing the functionality you requested and operating the
                  service.
                </p>
              </TermsSection>

              <TermsSection
                id="privacy"
                number="16"
                title="Privacy"
              >
                <p>
                  Your use of ShaktiSetu is also governed by our Privacy
                  Policy, which explains how personal information is processed,
                  stored, protected and deleted.
                </p>

                <a
                  href="/privacy"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:text-[#DC2626]"
                >
                  Read Privacy Policy
                  <ArrowUpRight size={16} />
                </a>
              </TermsSection>

              <TermsSection
                id="disclaimer"
                number="17"
                title="Disclaimer"
              >
                <div className="my-5 rounded-2xl border border-red-200 bg-red-50 p-6">
                  <div className="flex gap-3">
                    <ShieldAlert
                      className="mt-0.5 shrink-0 text-[#DC2626]"
                      size={22}
                    />

                    <div>
                      <p className="!mt-0 font-semibold text-[#991B1B]">
                        Important
                      </p>

                      <p className="text-red-900">
                        ShaktiSetu is a technology-based assistance service.
                        It is not a replacement for police, ambulance,
                        medical services, emergency responders or official
                        emergency services.
                      </p>

                      <p className="!mb-0 text-red-900">
                        We do not guarantee emergency response, successful
                        communication, exact location information,
                        uninterrupted availability or successful delivery of
                        alerts.
                      </p>
                    </div>
                  </div>
                </div>
              </TermsSection>

              <TermsSection
                id="liability"
                number="18"
                title="Limitation of Liability"
              >
                <p>
                  To the maximum extent permitted by applicable law, Valeno
                  will not be responsible for failures caused by circumstances
                  outside its reasonable control.
                </p>

                <p>
                  These circumstances may include network outages, GPS
                  limitations, device failures, carrier failures, battery
                  depletion, operating-system restrictions and third-party
                  service failures.
                </p>

                <p>
                  Nothing in these Terms is intended to exclude liability that
                  cannot legally be excluded.
                </p>
              </TermsSection>

              <TermsSection
                id="changes"
                number="19"
                title="Changes to Terms"
              >
                <p>
                  We may update these Terms from time to time when our
                  services, technology, legal requirements or business
                  practices change.
                </p>

                <p>
                  The latest version will be made available through the
                  application or our website.
                </p>
              </TermsSection>

              <TermsSection
                id="law"
                number="20"
                title="Governing Law"
              >
                <p>
                  These Terms shall be governed by the laws applicable in
                  India, subject to applicable consumer-protection and other
                  mandatory legal rights.
                </p>
              </TermsSection>

              <TermsSection
                id="contact"
                number="21"
                title="Contact"
              >
                <p>
                  If you have questions regarding these Terms, contact:
                </p>

                <div className="mt-6 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm">
                  <ContactRow label="Developer / Company" value="Valeno" />
                  <ContactRow label="Product" value="ShaktiSetu" />
                  <ContactRow label="Legal Owner / Proprietor" value="Harsh" />
                  <ContactRow
                    label="Contact Email"
                    value="hello.valeno@gmail.com"
                  />
                  </div>
              </TermsSection>

            </div>

            {/* BOTTOM NAV */}
            <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row">
              <a
                href="/privacy"
                className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-red-200 hover:text-[#DC2626]"
              >
                <ChevronLeft
                  size={17}
                  className="transition group-hover:-translate-x-0.5"
                />
                Privacy Policy
              </a>

              <a
                href="/delete-account"
                className="group flex items-center gap-2 rounded-xl bg-[#DC2626] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#991B1B]"
              >
                Account Deletion
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#DC2626]">
        {icon}
      </div>

      <h2 className="mt-4 font-semibold text-slate-900">{title}</h2>

      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}

function TermsSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-slate-100 pb-12 pt-12 first:pt-0 last:border-0"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-bold tracking-[0.2em] text-[#DC2626]">
          {number}
        </span>

        <span className="h-px w-8 bg-red-200" />
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-[#111827] md:text-3xl">
        {title}
      </h2>

      <div className="legal-content mt-6 text-[15px] leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CheckCircle2
            size={18}
            className="mt-1 shrink-0 text-[#DC2626]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#DC2626]">
        <FileText size={20} />
      </div>

      <h2 className="mt-4 font-semibold text-slate-900">{title}</h2>

      <p className="mt-2 text-sm leading-6 text-slate-500">{children}</p>
    </div>
  );
}

function ContactRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-slate-200 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between">
      <span className="font-medium text-slate-500">{label}</span>
      <span className="font-semibold text-slate-900">{value}</span>
    </div>
  );
}