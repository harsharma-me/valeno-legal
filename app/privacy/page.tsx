import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for ShaktiSetu by Valeno.",
};

const sections = [
  ["01", "Introduction", "introduction"],
  ["02", "Information We Collect", "information"],
  ["03", "How We Use Information", "usage"],
  ["04", "Permissions", "permissions"],
  ["05", "Location & Background Location", "location"],
  ["06", "Emergency Alerts", "emergency"],
  ["07", "Evidence Recording", "evidence"],
  ["08", "Third-Party Services", "third-party"],
  ["09", "Data Security", "security"],
  ["10", "Data Retention", "retention"],
  ["11", "Account & Data Deletion", "deletion"],
  ["12", "Your Privacy Rights", "rights"],
  ["13", "Children's Privacy", "children"],
  ["14", "Emergency Disclaimer", "disclaimer"],
  ["15", "Changes to This Policy", "changes"],
  ["16", "Contact & Grievances", "contact"],
];

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500 md:text-xl">
              Your privacy matters. This policy explains how ShaktiSetu
              collects, uses, protects and manages information when you use
              our safety platform.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                Effective: <span className="font-semibold text-slate-900">September 22, 2026</span>
              </div>

              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                Updated: <span className="font-semibold text-slate-900">September 22, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-6 md:grid-cols-3 md:divide-x md:divide-y-0">
          <TrustItem
            icon={<ShieldCheck size={20} />}
            title="Privacy-first"
            text="Clear information handling practices"
          />

          <TrustItem
            icon={<CheckCircle2 size={20} />}
            title="User control"
            text="Permissions remain under your control"
          />

          <TrustItem
            icon={<FileText size={20} />}
            title="Transparency"
            text="Clear policies and deletion options"
          />
        </div>
      </section>

      {/* CONTENT */}
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
                    className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-500 transition hover:bg-red-50 hover:text-[#DC2626]"
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

            <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#DC2626]">
                  <FileText size={20} />
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    About this policy
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Please read this policy carefully to understand how your
                    information is handled when using ShaktiSetu.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white px-7 py-10 shadow-sm md:px-12 md:py-14">

              <PolicySection
                id="introduction"
                number="01"
                title="Introduction"
              >
                <p>
                  ShaktiSetu is a women-safety and emergency-assistance
                  application developed and operated by Valeno (“Valeno”,
                  “we”, “us”, or “our”).
                </p>

                <p>
                  This Privacy Policy explains how ShaktiSetu collects, uses,
                  stores, protects and deletes personal information when you
                  use the application.
                </p>

                <p>
                  By using ShaktiSetu, you acknowledge the practices described
                  in this Privacy Policy.
                </p>
              </PolicySection>

              <PolicySection
                id="information"
                number="02"
                title="Information We Collect"
              >
                <p>
                  Depending on the features you use and the permissions you
                  grant, ShaktiSetu may process the following categories of
                  information.
                </p>

                <h3>Account Information</h3>

                <BulletList
                  items={[
                    "Name",
                    "Email address",
                    "Phone number",
                    "Authentication information",
                    "Information required to maintain your account",
                  ]}
                />

                <h3>Location Information</h3>

                <p>
                  With your permission, ShaktiSetu may access approximate or
                  precise location information. Location may be used for SOS
                  alerts, live location sharing and other location-based safety
                  functionality.
                </p>

                <h3>Emergency Contacts</h3>

                <p>
                  If you use emergency-contact functionality, ShaktiSetu may
                  process names, phone numbers and other information that you
                  provide for those contacts.
                </p>

                <h3>Camera and Media</h3>

                <p>
                  With your permission, ShaktiSetu may access the camera and
                  process photographs or videos when you intentionally use
                  evidence-recording functionality.
                </p>

                <h3>Microphone and Audio</h3>

                <p>
                  With your permission, ShaktiSetu may access the microphone
                  for voice-trigger functionality or audio evidence recording.
                </p>

                <h3>SMS and Calling</h3>

                <p>
                  Where supported by the device and permissions, ShaktiSetu
                  may use SMS or calling functionality to assist with emergency
                  communication.
                </p>
              </PolicySection>

              <PolicySection
                id="usage"
                number="03"
                title="How We Use Information"
              >
                <p>Information may be processed to:</p>

                <BulletList
                  items={[
                    "Create and manage your account",
                    "Authenticate users",
                    "Provide SOS and safety functionality",
                    "Share location with selected emergency contacts when applicable",
                    "Send emergency alerts",
                    "Support emergency calling and SMS functionality",
                    "Provide evidence-recording functionality",
                    "Provide voice-trigger functionality",
                    "Maintain application security and reliability",
                    "Prevent misuse and abuse",
                    "Respond to support requests",
                    "Comply with applicable legal requirements",
                  ]}
                />
              </PolicySection>

              <PolicySection
                id="permissions"
                number="04"
                title="Permissions"
              >
                <p>
                  ShaktiSetu requests permissions only when a feature requires
                  them.
                </p>

                <p>
                  Depending on the features enabled, these may include:
                </p>

                <BulletList
                  items={[
                    "Location",
                    "Background location",
                    "Camera",
                    "Microphone",
                    "SMS",
                    "Phone and calling",
                    "Notifications",
                  ]}
                />

                <p>
                  You can manage permissions through your Android device
                  settings. Disabling a permission may prevent the
                  corresponding feature from functioning.
                </p>
              </PolicySection>

              <PolicySection
                id="location"
                number="05"
                title="Location & Background Location"
              >
                <p>
                  Location is an important component of certain ShaktiSetu
                  safety features.
                </p>

                <p>
                  When you activate a feature requiring location, your
                  location may be collected and used to provide that feature.
                </p>

                <p>
                  If background location is enabled for a safety feature,
                  location may continue to be processed while the application
                  is running in the background as necessary for that
                  functionality.
                </p>

                <InfoBox title="Location control">
                  You can control location permissions through your Android
                  device settings. Some safety features may not work when
                  required location access is disabled.
                </InfoBox>
              </PolicySection>

              <PolicySection
                id="emergency"
                number="06"
                title="Emergency Alerts"
              >
                <p>
                  When you activate an SOS or emergency feature, ShaktiSetu
                  may use the information and permissions you have provided to
                  perform the requested emergency-assistance actions.
                </p>

                <BulletList
                  items={[
                    "Obtaining your location",
                    "Sharing location with selected contacts",
                    "Sending emergency SMS alerts",
                    "Assisting with emergency calls",
                    "Activating other safety features",
                  ]}
                />

                <p>
                  ShaktiSetu cannot guarantee successful delivery of an alert,
                  SMS, call or location update. These functions can depend on
                  network connectivity, device configuration, battery level,
                  GPS availability, permissions, mobile carrier services and
                  third-party services.
                </p>
              </PolicySection>

              <PolicySection
                id="evidence"
                number="07"
                title="Evidence Recording"
              >
                <p>
                  If you intentionally activate audio, photo or video evidence
                  functionality, the resulting content may be stored or
                  transmitted using the services configured for ShaktiSetu.
                </p>

                <p>
                  You are responsible for using recording functionality
                  lawfully and respectfully.
                </p>
              </PolicySection>

              <PolicySection
                id="third-party"
                number="08"
                title="Third-Party Services"
              >
                <p>
                  ShaktiSetu may use third-party infrastructure and services
                  necessary to provide its functionality, including
                  authentication, databases, cloud storage, mapping services,
                  messaging, analytics and crash reporting where applicable.
                </p>

                <p>
                  Third-party providers may process information on our behalf
                  according to the services they provide.
                </p>
              </PolicySection>

              <PolicySection
                id="security"
                number="09"
                title="Data Security"
              >
                <p>
                  We use reasonable technical and organisational measures
                  intended to protect personal information against unauthorized
                  access, alteration, disclosure, loss or misuse.
                </p>

                <BulletList
                  items={[
                    "Access controls",
                    "Authentication",
                    "Database security rules",
                    "Secure communications where supported",
                    "Restricted access to stored information",
                  ]}
                />

                <p>
                  No internet-connected system can be guaranteed to be
                  completely secure.
                </p>
              </PolicySection>

              <PolicySection
                id="retention"
                number="10"
                title="Data Retention"
              >
                <p>
                  We retain personal information only for as long as reasonably
                  necessary to provide the requested services, maintain
                  security, resolve disputes, comply with applicable law or
                  fulfil other legitimate requirements.
                </p>

                <p>
                  When information is no longer required, we intend to delete
                  or securely dispose of it, subject to applicable legal
                  requirements.
                </p>
              </PolicySection>

              <PolicySection
                id="deletion"
                number="11"
                title="Account & Data Deletion"
              >
                <p>
                  Users may request deletion of their ShaktiSetu account and
                  associated personal information.
                </p>

                <p>
                  Account deletion can be requested through the ShaktiSetu
                  application and through our public account-deletion page.
                </p>

                <p>
                  Certain information may need to be retained where required
                  or permitted by applicable law, security requirements or
                  fraud prevention purposes.
                </p>

                <a
                  href="/delete-account"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#DC2626] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#991B1B]"
                >
                  Account Deletion
                  <ArrowUpRight size={16} />
                </a>
              </PolicySection>

              <PolicySection
                id="rights"
                number="12"
                title="Your Privacy Rights"
              >
                <p>
                  Subject to applicable law, you may have rights relating to
                  your personal information, including rights concerning:
                </p>

                <BulletList
                  items={[
                    "Access to information about processing",
                    "Correction of inaccurate information",
                    "Withdrawal of consent where applicable",
                    "Deletion of personal information",
                    "Privacy-related grievances",
                  ]}
                />
              </PolicySection>

              <PolicySection
                id="children"
                number="13"
                title="Children's Privacy"
              >
                <p>
                  ShaktiSetu is not intentionally designed to collect personal
                  information from children in violation of applicable law.
                </p>

                <p>
                  If we become aware that personal information has been
                  collected in a manner that violates applicable requirements,
                  we will take appropriate steps to address it.
                </p>
              </PolicySection>

              <PolicySection
                id="disclaimer"
                number="14"
                title="Emergency Disclaimer"
              >
                <div className="my-5 rounded-2xl border border-red-200 bg-red-50 p-6">
                  <div className="flex gap-3">
                    <ShieldCheck
                      className="mt-0.5 shrink-0 text-[#DC2626]"
                      size={22}
                    />

                    <div>
                      <p className="!mt-0 font-semibold text-[#991B1B]">
                        Important safety notice
                      </p>

                      <p className="!mt-2 text-red-900">
                        ShaktiSetu is an assistance and safety application. It
                        is not a replacement for police, ambulance, medical
                        services, emergency responders or other official
                        emergency services.
                      </p>

                      <p className="!mb-0 text-red-900">
                        ShaktiSetu does not guarantee emergency response,
                        successful communication, accurate location
                        information, uninterrupted service or successful
                        delivery of alerts.
                      </p>
                    </div>
                  </div>
                </div>
              </PolicySection>

              <PolicySection
                id="changes"
                number="15"
                title="Changes to This Policy"
              >
                <p>
                  We may update this Privacy Policy when our services,
                  technology, legal requirements or data-processing practices
                  change.
                </p>

                <p>
                  The latest version will be made available through the
                  application or our website. The “Last Updated” date will
                  indicate when the policy was most recently changed.
                </p>
              </PolicySection>

              <PolicySection
                id="contact"
                number="16"
                title="Contact & Grievances"
              >
                <p>
                  For privacy questions, requests or complaints, contact:
                </p>

                <div className="mt-6 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm">
                  <ContactRow label="Developer / Company" value="Valeno" />
                  <ContactRow label="Application" value="ShaktiSetu" />
                  <ContactRow label="Legal Owner / Proprietor" value="Harsh" />
                  <ContactRow
                    label="Privacy Email"
                    value="hello.valeno@gmail.com"
                  />
                  {/* <ContactRow
                    label="Website"
                    value="[INSERT WEBSITE URL]"
                  /> */}
                  <ContactRow
                    label="Grievance Contact"
                    value="hello.valeno@gmail.com"
                  />
                </div>
              </PolicySection>

            </div>

            {/* Bottom navigation */}
            <div className="mt-8 flex justify-end">
              <a
                href="/terms"
                className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-red-200 hover:text-[#DC2626]"
              >
                Continue to Terms & Conditions
                <ChevronRight
                  size={17}
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

function PolicySection({
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
    <div className="my-6 rounded-2xl border border-red-100 bg-red-50/70 p-6">
      <p className="!mt-0 font-semibold text-[#991B1B]">{title}</p>
      <p className="!mb-0 text-red-900">{children}</p>
    </div>
  );
}

function TrustItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 px-6 py-6 md:py-7">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#DC2626]">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-0.5 text-sm text-slate-500">{text}</p>
      </div>
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