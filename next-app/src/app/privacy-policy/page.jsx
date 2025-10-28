"use client";
import React from "react";
import { useLocale } from "@lib/locale";

export default function PrivacyPolicy() {
  const locale = useLocale();
  const isEN = locale === "en";

  if (isEN) {
    // =========================
    // ENGLISH TRANSLATION VIEW
    // =========================
    return (
      <main className="min-h-screen bg-white text-gray-900">
        <section className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Privacy Policy &amp; Terms of Use</h1>
            <p className="text-sm text-gray-600">Last updated: 12 September 2025</p>
          </header>

          {/* In-page navigation */}
          <nav className="mb-10">
            <p className="font-semibold mb-2">Contents</p>
            <ul className="list-disc list-inside space-y-1">
              <li><a className="text-teal-700 hover:underline" href="#privacy">Privacy Policy &amp; Cookies</a></li>
              <li><a className="text-teal-700 hover:underline" href="#terms">Terms &amp; Conditions of Use</a></li>
              <li><a className="text-teal-700 hover:underline" href="#datamap">Annex: Data Map</a></li>
            </ul>
          </nav>

          {/* PRIVACY POLICY */}
          <article id="privacy" className="space-y-8">
            <h2 className="text-2xl font-bold">Privacy Policy &amp; Cookies</h2>

            <section>
              <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
              <p>
                This Policy describes how <strong>Tonia Kaparelioti</strong> (“we”, “the Company”) processes the personal
                data of visitors and users of the website and application <strong>tonia-kaparelioti.gr</strong>
                (hereinafter, the “Website” and the “App”). We are committed to privacy protection in accordance with
                the <strong>GDPR (2016/679)</strong> and Greek law.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">2. Controller &amp; Contact</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Controller:</strong> Tonia Kaparelioti</li>
                <li>
                  <strong>Privacy email (GDPR requests):</strong>{" "}
                  <a className="text-teal-700 hover:underline" href="mailto:t.believeinyourself@gmail.com">
                    t.believeinyourself@gmail.com
                  </a>
                </li>
                <li><strong>Address:</strong> Elaion 25 &amp; Remvis, Kifisia 145 64</li>
                <li><strong>Contact form:</strong> available on the Website</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">3. Services &amp; Data Sources</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Map:</strong> Embedded <em>Google Maps</em> (iframe). Google may set cookies/collect technical
                  data (see Cookies section).
                </li>
                <li>
                  <strong>Contact Form (Netlify Forms):</strong> We collect <em>First Name</em> (required),
                  <em> Last Name</em> (required), <em>Phone</em> (required), <em>Message</em> (optional), and a
                  “contacting to book an appointment” option (optional). <strong>Acceptance of the Privacy Policy is
                  required</strong> to submit.
                </li>
                <li>
                  <strong>App with authentication:</strong> User accounts are initially created by an Administrator and
                  information is stored to provide the service (see §4).
                </li>
                <li>
                  <strong>Data storage:</strong> <strong>Files/documents</strong> (Diets, Measurements, Progress photos)
                  are hosted purely for <strong>file storage</strong> in <strong>Backblaze B2</strong> (S3-compatible) in a
                  <strong> private bucket</strong> within the <strong>EU</strong>. The <strong>database</strong> (personal
                  information, account settings, etc.) is hosted on <strong>Supabase</strong> (managed PostgreSQL) in
                  <strong> AWS eu-central-1</strong>.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">4. Categories of Data We Process</h3>
              <p className="mb-2"><strong>A. Account details (clients/admins):</strong></p>
              <ul className="list-disc list-inside mb-4">
                <li>First name, Last name, Email, Phone</li>
                <li>Password (stored <strong>encrypted/hashed</strong>)</li>
                <li>Date &amp; time of last modification</li>
              </ul>

              <p className="mb-2"><strong>B. Client file content (special categories):</strong></p>
              <ul className="list-disc list-inside mb-4">
                <li>Diets, Measurements, Progress photos — <strong>health data</strong> per GDPR Art. 9</li>
              </ul>

              <p className="mb-2"><strong>C. Contact form data (Netlify):</strong></p>
              <ul className="list-disc list-inside mb-4">
                <li>Name, Surname, Phone, Message, appointment option</li>
                <li>Possibly IP/technical metadata by the hosting platform</li>
              </ul>

              <p className="mb-2"><strong>D. Technical/operational data:</strong></p>
              <ul className="list-disc list-inside mb-4">
                <li>IP address, User-Agent (browser/version/OS), logs (date/time, endpoint, status), technical session IDs, JWT tokens, temporary signed URLs for access.</li>
              </ul>

              <p className="mb-2"><strong>E. Images/icons policy:</strong></p>
              <p>
                Some materials are our property. Other assets come from <em>Pexels</em>, <em>Unsplash</em>,
                <em> Flaticon</em>, <em>Freepik</em> under free licenses which may require attribution. Attributions are
                listed on this page only (see §13).
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">5. Purposes &amp; Legal Bases (GDPR Art. 6 &amp; 9)</h3>
              <div className="overflow-x-auto border rounded-md">
                <table className="min-w-full text-sm">
                  <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="p-3 font-semibold">Action</th>
                    <th className="p-3 font-semibold">Data</th>
                    <th className="p-3 font-semibold">Purpose</th>
                    <th className="p-3 font-semibold">Legal Basis</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="border-t">
                    <td className="p-3">Account management (create/login)</td>
                    <td className="p-3">Name, email, phone, password hash</td>
                    <td className="p-3">Provide access to the App</td>
                    <td className="p-3"><strong>Contract</strong> (Art. 6(1)(b))</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Maintaining/showing client file</td>
                    <td className="p-3">Diets, Measurements, Photos</td>
                    <td className="p-3">Provision of nutrition services</td>
                    <td className="p-3">
                      <strong>Explicit consent</strong> for special data (Art. 9(2)(a)) + Contract (6(1)(b))
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Handling requests</td>
                    <td className="p-3">Form details</td>
                    <td className="p-3">Respond to request / appointment</td>
                    <td className="p-3">Contract/pre-contract (6(1)(b)) or Consent</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Service notifications</td>
                    <td className="p-3">Email/phone</td>
                    <td className="p-3">Inform about new files/updates</td>
                    <td className="p-3"><strong>Contract</strong> (operational notices)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Security &amp; logs</td>
                    <td className="p-3">IP address</td>
                    <td className="p-3">User-Agent</td>
                    <td className="p-3">Technical data</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Google Maps</td>
                    <td className="p-3">Third-party cookies/technical</td>
                    <td className="p-3">Display location</td>
                    <td className="p-3"><strong>Cookie consent</strong> (where required)</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                We do not send promotional (marketing) communications without prior consent. File upload/change
                notifications are operational.
              </p>
            </section>

            {/* Special-category explicit consent */}
            <section>
              <h3 className="text-xl font-semibold mb-2">6. Explicit Consent for Special Categories (Health Data)</h3>
              <p className="mb-2">
                By creating/using an account and accepting these Terms/Policy at login, the user expressly
                <strong> provides free, specific, informed and unambiguous consent</strong> for processing their health
                data (indicatively: diet plans, measurements, progress photos) solely to deliver the services. Consent
                may be <strong>withdrawn at any time</strong> without retroactive effect by emailing{" "}
                <a className="text-teal-700 hover:underline" href="mailto:t.believeinyourself@gmail.com">
                  t.believeinyourself@gmail.com
                </a>.
              </p>
              <p className="text-sm text-gray-700">
                Acceptance of the Terms & Privacy Policy is a prerequisite for login. Acceptance is used only to
                complete login and is not permanently stored beyond any security log records. If you do not accept, you
                cannot use the App.
              </p>
            </section>

            {/* Consent mechanism */}
            <section>
              <h3 className="text-xl font-semibold mb-2">7. Consent Mechanism at Login</h3>
              <p>
                On each login, a clear statement/checkbox is displayed to accept the Terms & Privacy Policy, including
                explicit reference to health-data processing as above. Without acceptance, login is not completed.
                Acceptance is not stored permanently beyond security logs.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">8. Roles &amp; Access</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>CLIENT:</strong> Access only to their own data/files. Clients do not upload/edit content;
                  Admin performs these actions on their instruction.
                </li>
                <li>
                  <strong>ADMIN</strong> (e.g., Tonia Kaparelioti, Maria Kokore, system admin): Access to all client
                  data strictly for service/support/security purposes. Guided by data minimisation and confidentiality.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">9. Storage &amp; Locations</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Database:</strong> Supabase (managed PostgreSQL) in <strong>AWS eu-central-1</strong>.</li>
                <li>
                  <strong>Files/documents:</strong> Backblaze B2 (S3-compatible) in a <strong>private bucket</strong>{" "}
                  within the <strong>EU</strong> (file storage only).
                </li>
                <li>All network communication via <strong>TLS</strong>. Data are encrypted at-rest per provider practices.</li>
                <li>Access via backend/temporary signed URLs and least-privilege controls (with logging).</li>
              </ul>
              <p className="text-sm text-gray-700 mt-2">
                For security reasons, <strong>we do not publish database details</strong> (e.g., exact table schemas) or
                API endpoints. We provide only the information necessary for transparency/compliance.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">10. JWT Authentication &amp; Logout</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Use of <strong>JSON Web Tokens (JWT)</strong> for authentication/authorization.</li>
                <li>
                  Practice: <strong>access token</strong> in an <strong>HttpOnly, Secure, SameSite=Strict</strong>{" "}
                  cookie. The JWT carries an exp and the cookie is set with the same Max-Age (currently 4 hours) so
                  expiry aligns. No refresh token mechanism is used.
                </li>
                <li>Each request verifies JWT signature and permissions (roles/claims).</li>
                <li>
                  <strong>Logout:</strong> session cookie deletion/invalidation (and any server refresh-token/blacklist).
                  Signed URLs expire per their duration.
                </li>
                <li>Additional measures: rate limiting, strict token expiry, re-issue on password/role change, anomaly detection.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">11. Breach Notification</h3>
              <p>
                In case of a personal-data breach likely to risk individuals’ rights/freedoms, we assess and, where
                required, <strong>notify the Hellenic DPA within 72 hours</strong> of awareness (Art. 33 GDPR) and{" "}
                <strong>inform</strong> data subjects without undue delay (Art. 34 GDPR). We keep incident and
                remediation records.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">12. Processors &amp; International Transfers</h3>
              <p className="mb-2">
                We conclude <strong>Data Processing Agreements (DPAs)</strong> with all processors we use (indicatively:
                Supabase for DB in AWS eu-central-1, Backblaze B2 for EU file storage, Netlify for forms/hosting).
                Where transfers outside the EEA are required, we implement <strong>Standard Contractual Clauses
                (SCCs)</strong> and appropriate technical/organisational measures.
              </p>
              <p className="text-sm text-gray-700">
                The database is in AWS <strong>eu-central-1</strong>, files in Backblaze B2 within the <strong>EU</strong>.
                Google Maps embedding is activated only upon consent.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">13. Cookies &amp; Similar Technologies</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Strictly necessary:</strong> authentication session cookie (JWT in HttpOnly, Secure,
                  SameSite=Strict cookie). Duration: 4 hours (aligned with JWT exp). Not used for marketing/profiling.
                </li>
                <li><strong>Functionality/Preferences:</strong> e.g., remembering settings.</li>
                <li>
                  <strong>Third party (Google Maps):</strong> cookies may be set to display/use the map.
                  Embedding activates only after consent.
                </li>
              </ul>
              <p>
                We also use temporary sessionStorage to show login/expiry messages; its contents are deleted immediately
                after showing the message or session end.
              </p>
              <p>
                IP and User-Agent are logged on the server strictly for security/debug purposes only, not for
                marketing/profiling, and retained for a limited period.
              </p>

              {/* NEW: Language preference cookie (EN) */}
              <div className="mt-4 p-4 rounded-md border bg-gray-50">
                <h4 className="font-semibold mb-1">Language preference cookie</h4>
                <p className="text-sm">
                  Because the site is now bilingual, we set a small preference cookie <code>locale</code> (e.g., <code>el</code> / <code>en</code>) to remember your language across visits.
                  It is a functional cookie only (no tracking), typically set with <strong>SameSite=Lax</strong>,
                  and a limited expiration (e.g., 6–12 months). You can change language at any time; the cookie updates
                  accordingly.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">14. Copyright – Attributions</h3>
              <p>Our property: texts, logos, some photos/icons.</p>
              <p className="mt-2">Third-party assets (licensed/attributed):</p>
              <ul className="list-disc list-inside">
                <li>Pexels — <span className="text-gray-600">[contributors to be added later]</span></li>
                <li>Unsplash — <span className="text-gray-600">[contributors to be added later]</span></li>
                <li>Flaticon — <span className="text-gray-600">[contributors to be added later]</span></li>
                <li>Freepik — <span className="text-gray-600">[contributors to be added later]</span></li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">15. Security</h3>
              <p>
                We implement technical (encryption, TLS, password hashing, least-privilege access, role-based controls,
                logging) and organisational measures (policies, admin confidentiality, training). For security
                reasons, <strong>we do not publish full DB schemas or API endpoints</strong>. No method guarantees
                absolute security; we take all reasonable steps to minimise risk.
              </p>
              <p>
                Logs are accessible only to authorised personnel, contain the minimum necessary (e.g., IP, User-Agent),
                and are retained for a limited time according to the minimisation principle.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">16. Data Subject Rights</h3>
              <p>
                You have the rights of access, rectification, erasure, restriction, portability, objection, and consent
                withdrawal (where applicable) without retroactive effect. Requests:{" "}
                <a className="text-teal-700 hover:underline" href="mailto:t.believeinyourself@gmail.com">
                  t.believeinyourself@gmail.com
                </a>. We respond within one month (extendable where permitted).
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">17. Minors</h3>
              <p>
                The service is not directed to persons under 16. If we discover collection without proper parental
                consent, we delete such data immediately.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">18. Changes to this Policy</h3>
              <p>
                We may update this Policy. The “Last updated” date will change and, where required, we will request
                consent again.
              </p>
            </section>
          </article>

          {/* TERMS */}
          <article id="terms" className="space-y-8 mt-14">
            <h2 className="text-2xl font-bold">Terms &amp; Conditions of Use</h2>

            <section>
              <h3 className="text-xl font-semibold mb-2">1. Acceptance of Terms &amp; Consent Statement</h3>
              <p>
                By accessing/using the Website/App you agree to be bound by these Terms and the Privacy Policy.
                At login, a statement appears including explicit reference to health-data processing; by selecting
                “I Accept” you provide <strong>explicit consent</strong> to process such data solely to deliver the
                services. Consent can be withdrawn at any time without retroactive effect.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">2. Service Description</h3>
              <p>
                We provide an online platform for supporting/organising nutrition services. <strong>CLIENT</strong> users
                view their personal file (Diets/Measurements/Photos). <strong>Only Admins</strong> upload/edit content on
                the client’s instruction.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">3. Accounts &amp; Security</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Accounts are created by an Administrator; email is the unique identifier.</li>
                <li>On first login you set a personal password (stored <strong>encrypted/hashed</strong>).</li>
                <li>If you forget your password, inform the Admin to reset (old hash deletion and new setup).</li>
                <li>You are responsible for credential secrecy and immediate notice of unauthorised use.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">4. Locations &amp; Data Storage</h3>
              <p>
                By using the service you accept that your data are stored/processed by the providers listed in the
                Privacy Policy, specifically: <strong>Supabase</strong> (database on AWS <strong>eu-central-1</strong>)
                and <strong>Backblaze B2</strong> (file storage in a <strong>private EU bucket</strong>), and{" "}
                <strong>Netlify</strong> for forms/hosting. Where required, DPAs/SCCs and technical/organisational
                security measures apply.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">5. Acceptable Use</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>No unauthorised access/bypass, vulnerability scanning, or malicious use.</li>
                <li>No copying/redistribution of third-party content without permission.</li>
                <li>No illegal/harmful actions or DoS.</li>
                <li>No attempt to extract/decrypt code/security logic.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">6. Content &amp; Rights</h3>
              <p>
                The client file is provided for personal use. Publication/sharing without permission is prohibited.
                Copyright for texts/logos/part of media belongs to us. Third-party materials are used under the
                relevant licenses/attributions (see Policy §14).
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">7. Third-Party Services</h3>
              <p>
                Use of Google Maps, Netlify, Supabase and Backblaze B2 is additionally governed by the respective
                providers’ terms/policies.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">8. Medical Disclaimer</h3>
              <p>
                Provided information/materials do not constitute medical diagnosis or treatment and do not replace
                medical advice. Consult your physician before major changes, especially if you have a medical history.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">9. Service Availability</h3>
              <p>
                We use reasonable efforts for uninterrupted operation, without guaranteeing continuous availability.
                We reserve the right to modify/suspend functions for maintenance/security.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">10. Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential
                damages from use/inability to use. Nothing limits liability that cannot be limited by law.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">11. Indemnification</h3>
              <p>
                You agree to indemnify the Company for claims/damages/expenses (incl. reasonable legal fees) arising
                from breach of the Terms or misuse of the service.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">12. Termination</h3>
              <p>
                We may suspend/terminate access immediately for Terms breaches, security risks, or legal requirements.
                You may request account deletion at any time.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">13. Changes to the Terms</h3>
              <p>
                We may update the Terms. Continued use after posting a new version constitutes acceptance thereof.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">14. Governing Law &amp; Jurisdiction</h3>
              <p>
                The Terms are governed by Greek law. Courts of Athens have jurisdiction, unless mandatory law provides otherwise.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">15. Contact</h3>
              <p>
                For questions about the Terms or privacy matters:{" "}
                <a className="text-teal-700 hover:underline" href="mailto:t.believeinyourself@gmail.com">
                  t.believeinyourself@gmail.com
                </a>.
              </p>
            </section>
          </article>

          {/* DATA MAP */}
          <article id="datamap" className="space-y-6 mt-14">
            <h2 className="text-2xl font-bold">Annex: Data Mapping Table (Data Map)</h2>
            <div className="overflow-x-auto border rounded-md">
              <table className="min-w-full text-sm">
                <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-3 font-semibold">Category</th>
                  <th className="p-3 font-semibold">Example content</th>
                  <th className="p-3 font-semibold">Purpose</th>
                  <th className="p-3 font-semibold">Retention</th>
                  <th className="p-3 font-semibold">Recipients</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-t">
                  <td className="p-3">Account</td>
                  <td className="p-3">Name, email, phone, encrypted password</td>
                  <td className="p-3">Authentication &amp; access</td>
                  <td className="p-3">Relationship duration + up to 5 years</td>
                  <td className="p-3">Supabase (DB hosting), Internal (Admins), IT support</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Client file</td>
                  <td className="p-3">Diets, Measurements, Progress photos</td>
                  <td className="p-3">Service delivery</td>
                  <td className="p-3">Relationship duration + up to 5 years</td>
                  <td className="p-3">Backblaze B2 (file storage – EU), Internal</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Form</td>
                  <td className="p-3">Name, phone, message, IP/metadata</td>
                  <td className="p-3">Respond to request/appointment</td>
                  <td className="p-3">Up to 12 months</td>
                  <td className="p-3">Netlify (processor), Internal</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Technical</td>
                  <td className="p-3">IP/User-Agent, JWT/cookies, logs, signed URLs</td>
                  <td className="p-3">Security/operation</td>
                  <td className="p-3">Up to 12 months</td>
                  <td className="p-3">Internal, hosting/security providers</td>
                </tr>
                </tbody>
              </table>
            </div>

            <section className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Security note</h3>
              <p className="text-sm text-gray-700">
                To protect the system and data subjects, we do not publish <strong>exact database schemas</strong> (table/field names) or
                <strong> explicit API endpoints</strong>. The above is sufficient for transparency, compliance, and exercising rights without compromising security.
              </p>
            </section>
          </article>
        </section>
      </main>
    );
  }

  // =========================
  // ORIGINAL GREEK VIEW (UNCHANGED) + locale cookie note appended
  // =========================
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Πολιτική Απορρήτου &amp; Όροι Χρήσης</h1>
          <p className="text-sm text-gray-600">Τελευταία ενημέρωση: 12 Σεπτεμβρίου 2025</p>
        </header>

        {/* In-page navigation */}
        <nav className="mb-10">
          <p className="font-semibold mb-2">Περιεχόμενα</p>
          <ul className="list-disc list-inside space-y-1">
            <li><a className="text-teal-700 hover:underline" href="#privacy">Πολιτική Απορρήτου &amp; Cookies</a></li>
            <li><a className="text-teal-700 hover:underline" href="#terms">Όροι &amp; Προϋποθέσεις Χρήσης</a></li>
            <li><a className="text-teal-700 hover:underline" href="#datamap">Παράρτημα: Data Map</a></li>
          </ul>
        </nav>

        {/* PRIVACY POLICY (UNCHANGED TEXT) */}
        <article id="privacy" className="space-y-8">
          <h2 className="text-2xl font-bold">Πολιτική Απορρήτου &amp; Cookies</h2>

          {/* ——— The entire Greek content below is EXACTLY as you provided ——— */}
          <section>
            <h3 className="text-xl font-semibold mb-2">1. Εισαγωγή</h3>
            <p>
              Η παρούσα Πολιτική περιγράφει πώς η <strong>Τόνια Καπαρελιώτη</strong> («εμείς», «η Εταιρεία») επεξεργάζεται τα προσωπικά δεδομένα των επισκεπτών και χρηστών της ιστοσελίδας και εφαρμογής<strong> tonia-kaparelioti.gr</strong> (εφεξής «Ιστότοπος» και «Εφαρμογή»). Δεσμευόμαστε στην προστασία της ιδιωτικότητας σύμφωνα με τον <strong>GDPR (2016/679)</strong> και την ελληνική νομοθεσία.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">2. Υπεύθυνος Επεξεργασίας &amp; Επικοινωνία</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Υπεύθυνος Επεξεργασίας:</strong> Τόνια Καπαρελιώτη</li>
              <li>
                <strong>Email για θέματα απορρήτου (αιτήματα GDPR):</strong>{" "}
                <a className="text-teal-700 hover:underline" href="mailto:t.believeinyourself@gmail.com">
                  t.believeinyourself@gmail.com
                </a>
              </li>
              <li><strong>Διεύθυνση έδρας/γραφείου:</strong> Ελαιών 25 και Ρέμβης, Κηφισιά 145 64</li>
              <li><strong>Φόρμα επικοινωνίας:</strong> διαθέσιμη στον Ιστότοπο</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">3. Περιγραφή υπηρεσιών &amp; προέλευση δεδομένων</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Χάρτης:</strong> Ενσωματωμένος (iframe) <em>Google Maps</em>. Ενδέχεται να τοποθετούνται cookies/να
                συλλέγονται τεχνικά στοιχεία από την Google (βλ. ενότητα Cookies).
              </li>
              <li>
                <strong>Φόρμα Επικοινωνίας (Netlify Forms):</strong> Συλλογή <em>Ονόματος</em> (υποχρεωτικό), <em>Επωνύμου</em> (υποχρεωτικό),
                <em> Τηλεφώνου</em> (υποχρεωτικό), <em>Μηνύματος</em> (προαιρετικό) και επιλογής «επικοινωνώ για να κλείσω ραντεβού»
                (προαιρετικό). <strong>Η αποδοχή της Πολιτικής Απορρήτου είναι υποχρεωτική</strong> για υποβολή.
              </li>
              <li>
                <strong>Εφαρμογή με αυθεντικοποίηση:</strong> Λογαριασμοί χρηστών δημιουργούνται αρχικά από Διαχειριστή και
                αποθηκεύονται στοιχεία για παροχή υπηρεσίας (βλ. §4).
              </li>
              <li>
                <strong>Αποθήκευση δεδομένων:</strong> Τα <strong>αρχεία/έγγραφα</strong> (Δίαιτες, Μετρήσεις, Φωτογραφίες προόδου)
                φιλοξενούνται αποκλειστικά για <strong>file storage</strong> σε <strong>Backblaze B2</strong> (S3-compatible) σε
                <strong> ιδιωτικό (private) bucket</strong> εντός <strong>ΕΕ</strong>. Η <strong>βάση δεδομένων</strong> (προσωπικά στοιχεία,
                ρυθμίσεις λογαριασμού κ.λπ.) φιλοξενείται στο <strong>Supabase</strong> (managed PostgreSQL) σε <strong>AWS eu-central-1</strong>.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">4. Κατηγορίες δεδομένων που επεξεργαζόμαστε</h3>
            <p className="mb-2"><strong>A. Στοιχεία λογαριασμού (clients/admins):</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Όνομα, Επώνυμο, Email, Τηλέφωνο</li>
              <li>Κωδικός πρόσβασης (αποθηκεύεται <strong>κρυπτογραφημένος</strong>)</li>
              <li>Ημερομηνία &amp; ώρα τελευταίας τροποποίησης</li>
            </ul>

            <p className="mb-2"><strong>Β. Περιεχόμενο φακέλου πελάτη (ειδικές κατηγορίες):</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Δίαιτες, Μετρήσεις, Φωτογραφίες προόδου — <strong>δεδομένα υγείας</strong> κατά GDPR άρθ. 9</li>
            </ul>

            <p className="mb-2"><strong>Γ. Δεδομένα επικοινωνίας μέσω φόρμας (Netlify):</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Όνομα, Επώνυμο, Τηλέφωνο, Μήνυμα, επιλογή ραντεβού</li>
              <li>Ενδεχομένως IP/τεχνικά μεταδεδομένα από την πλατφόρμα υποδοχής</li>
            </ul>

            <p className="mb-2"><strong>Δ. Τεχνικά/λειτουργικά δεδομένα:</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>IP διεύθυνση, User-Agent (π.χ. πρόγραμμα περιήγησης/έκδοση/λειτουργικό), log αρχεία (ημερομηνία/ώρα, endpoint, status), τεχνικά IDs συνεδρίας, JWT tokens, προσωρινοί υπογεγραμμένοι σύνδεσμοι πρόσβασης (signed URLs).</li>
            </ul>

            <p className="mb-2"><strong>Ε. Πολιτική εικόνων/εικονιδίων:</strong></p>
            <p>Μέρος του υλικού είναι ιδιοκτησία μας. Άλλο υλικό έχει ληφθεί από <em>Pexels</em>, <em>Unsplash</em>, <em>Flaticon</em>, <em>Freepik</em> με δωρεάν άδειες που συχνά απαιτούν απόδοση. Οι αποδόσεις παρατίθενται μόνο στη σελίδα αυτή (βλ. §13).</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">5. Σκοποί &amp; Νομικές Βάσεις (GDPR art. 6 &amp; 9)</h3>
            <div className="overflow-x-auto border rounded-md">
              <table className="min-w-full text-sm">
                <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-3 font-semibold">Ενέργεια</th>
                  <th className="p-3 font-semibold">Δεδομένα</th>
                  <th className="p-3 font-semibold">Σκοπός</th>
                  <th className="p-3 font-semibold">Νομική Βάση</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-t">
                  <td className="p-3">Διαχείριση λογαριασμού (create/login)</td>
                  <td className="p-3">Ονοματεπώνυμο, email, τηλέφωνο, hash κωδικού</td>
                  <td className="p-3">Παροχή πρόσβασης στην Εφαρμογή</td>
                  <td className="p-3"><strong>Σύμβαση</strong> (άρθ. 6(1)(β))</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Τήρηση/προβολή φακέλου</td>
                  <td className="p-3">Δίαιτες, Μετρήσεις, Φωτογραφίες</td>
                  <td className="p-3">Παροχή διατροφικών υπηρεσιών</td>
                  <td className="p-3"><strong>Ρητή συγκατάθεση</strong> για ευαίσθητα (άρθ. 9(2)(α)) + Σύμβαση (6(1)(β))</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Επικοινωνία αιτημάτων</td>
                  <td className="p-3">Στοιχεία φόρμας</td>
                  <td className="p-3">Απάντηση σε αίτημα / ραντεβού</td>
                  <td className="p-3">Σύμβαση/προ-συμβατικά (6(1)(β)) ή Συγκατάθεση</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Ειδοποιήσεις υπηρεσίας</td>
                  <td className="p-3">Email/τηλέφωνο</td>
                  <td className="p-3">Ενημέρωση για νέα αρχεία/ενημερώσεις</td>
                  <td className="p-3"><strong>Σύμβαση</strong> (λειτουργικές ενημερώσεις)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Ασφάλεια &amp; logs</td>
                  <td className="p-3">IP διεύθυνση</td>
                  <td className="p-3">User-Agent</td>
                  <td className="p-3">Τεχνικά δεδομένα</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Google Maps</td>
                  <td className="p-3">Cookies/τεχνικά τρίτου</td>
                  <td className="p-3">Προβολή τοποθεσίας</td>
                  <td className="p-3"><strong>Συγκατάθεση cookies</strong> (όπου απαιτείται)</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-700">
              Δεν αποστέλλουμε προωθητικές επικοινωνίες (marketing) χωρίς προηγούμενη συγκατάθεση. Οι ενημερώσεις για ανεβάσματα/αλλαγές φακέλων είναι λειτουργικές.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">6. Ρητή συγκατάθεση για ειδικές κατηγορίες (δεδομένα υγείας)</h3>
            <p className="mb-2">
              Με τη δημιουργία/χρήση λογαριασμού και την αποδοχή των παρόντων Όρων/Πολιτικής κατά τη σύνδεση, ο χρήστης δηλώνει ρητά ότι <strong>παρέχει ελεύθερη, συγκεκριμένη, ενημερωμένη και σαφή συγκατάθεση </strong>για την επεξεργασία των δεδομένων υγείας του (ενδεικτικά: διαιτολόγια, μετρήσεις, φωτογραφίες προόδου) αποκλειστικά για σκοπούς παροχής των υπηρεσιών. Η συγκατάθεση μπορεί να <strong>ανακληθεί οποτεδήποτε </strong>χωρίς αναδρομική ισχύ, με αίτημα στο{" "}
              <a className="text-teal-700 hover:underline" href="mailto:t.believeinyourself@gmail.com">
                t.believeinyourself@gmail.com
              </a>.
            </p>
            <p className="text-sm text-gray-700">
              Η αποδοχή των Όρων & της Πολιτικής Απορρήτου αποτελεί προϋπόθεση για τη σύνδεση. Η αποδοχή χρησιμοποιείται μόνο για την ολοκλήρωση της σύνδεσης και δεν αποθηκεύεται μόνιμα πέραν τυχόν τεχνικών αρχείων καταγραφής ασφαλείας. Η μη αποδοχή συνεπάγεται αδυναμία χρήσης της Εφαρμογής.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">7. Μηχανισμός συγκατάθεσης κατά τη σύνδεση</h3>
            <p>
              Κατά κάθε σύνδεση εμφανίζεται σαφής δήλωση/checkbox αποδοχής των Όρων & της Πολιτικής Απορρήτου, η οποία περιλαμβάνει ρητή αναφορά στην επεξεργασία δεδομένων υγείας όπως ανωτέρω. Χωρίς την αποδοχή, η σύνδεση δεν ολοκληρώνεται. Η αποδοχή δεν αποθηκεύεται μόνιμα πέραν τυχόν τεχνικών logs ασφαλείας.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">8. Ρόλοι &amp; Πρόσβαση</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>CLIENT:</strong> Πρόσβαση αποκλειστικά στα δικά του στοιχεία/αρχεία. Δεν ανεβάζει/επεξεργάζεται περιεχόμενο· το κάνει ο Διαχειριστής κατ’ εντολή του.
              </li>
              <li>
                <strong>ADMIN</strong> (π.χ. Τόνια Καπαρελιώτη, Μαρία Κοκορέ, Διαχειριστής συστήματος): Πρόσβαση σε δεδομένα όλων των πελατών, αποκλειστικά για σκοπούς παροχής υπηρεσίας/υποστήριξης/ασφάλειας. Διέπεται από αρχή ελαχιστοποίησης και ρήτρες εμπιστευτικότητας.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">9. Αποθήκευση &amp; Τοποθεσίες</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Βάση δεδομένων:</strong> Supabase (managed PostgreSQL) σε <strong>AWS eu-central-1</strong>.</li>
              <li><strong>Αρχεία/έγγραφα:</strong> Backblaze B2 (S3-compatible) σε <strong>ιδιωτικό (private) bucket</strong> εντός <strong>ΕΕ</strong> (μόνο file storage).</li>
              <li>Όλη η δικτυακή επικοινωνία πραγματοποιείται μέσω <strong>TLS</strong>. Τα δεδομένα αποθηκεύονται κρυπτογραφημένα at-rest βάσει πρακτικών των παρόχων.</li>
              <li>Πρόσβαση μέσω backend/προσωρινών signed URLs και ελέγχων δικαιωμάτων (least-privilege, logging).</li>
            </ul>
            <p className="text-sm text-gray-700 mt-2">
              Για λόγους ασφάλειας, <strong>δεν δημοσιεύουμε λεπτομέρειες βάσης (π.χ. ακριβή σχήματα πινάκων) ή API endpoints</strong>. Παρέχουμε μόνο τις αναγκαίες πληροφορίες διαφάνειας/συμμόρφωσης.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">10. Αυθεντικοποίηση με JWT &amp; Logout</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Χρήση <strong>JSON Web Tokens (JWT)</strong> για ταυτοποίηση/εξουσιοδότηση.</li>
              <li>Πρακτική: <strong>access token</strong> σε <strong>HttpOnly, Secure, SameSite=Strict</strong> cookie. Το JWT φέρει exp και το cookie ορίζεται με ίδιο Max-Age (επί του παρόντος 4 ώρες), ώστε η λήξη να είναι ταυτόχρονη. Δεν χρησιμοποιούμε μηχανισμό refresh token.</li>
              <li>Σε κάθε αίτημα επαληθεύεται υπογραφή JWT και δικαιώματα (ρόλοι/claims).</li>
              <li><strong>Logout:</strong> διαγραφή/ακύρωση session cookie (και τυχόν refresh token στον server/blacklist). Οι signed URLs λήγουν με τη διάρκειά τους.</li>
              <li>Πρόσθετα μέτρα: rate limiting, αυστηρό token expiry, επανέκδοση σε αλλαγή κωδικού/ρόλου, ανίχνευση ασυνήθιστης δραστηριότητας.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">11. Γνωστοποίηση περιστατικών παραβίασης</h3>
            <p>
              Σε περίπτωση περιστατικού παραβίασης προσωπικών δεδομένων που ενδέχεται να επιφέρει κίνδυνο για τα δικαιώματα/ελευθερίες φυσικών προσώπων, διενεργούμε αξιολόγηση και, όπου απαιτείται, <strong>γνωστοποιούμε στην ΑΠΔΠΧ εντός 72 ωρών</strong> από τη διαπίστωση (άρθ. 33 GDPR) και <strong>ενημερώνουμε</strong> χωρίς αδικαιολόγητη καθυστέρηση τα υποκείμενα (άρθ. 34 GDPR). Τηρούμε αρχεία περιστατικών και διορθωτικών ενεργειών.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">12. Εκτελούντες την επεξεργασία &amp; διεθνείς διαβιβάσεις</h3>
            <p className="mb-2">
              Συνάπτουμε <strong>Συμφωνίες Επεξεργασίας Δεδομένων (DPAs)</strong> με όλους τους εκτελούντες που χρησιμοποιούμε (ενδεικτικά: Supabase για DB σε AWS eu-central-1, Backblaze B2 για file storage σε ΕΕ, Netlify για φόρμες/hosting). Όπου απαιτούνται διαβιβάσεις εκτός ΕΟΧ, εφαρμόζονται <strong>Τυποποιημένες Συμβατικές Ρήτρες (SCCs)</strong> και κατάλληλα τεχνικά/οργανωτικά μέτρα.
            </p>
            <p className="text-sm text-gray-700">
              Η βάση βρίσκεται σε AWS <strong>eu-central-1</strong>, ενώ τα αρχεία σε Backblaze B2 εντός <strong>ΕΕ</strong>. Η ενσωμάτωση Google Maps ενεργοποιείται μόνο κατόπιν συγκατάθεσης.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">13. Cookies &amp; παρόμοιες τεχνολογίες</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Απολύτως απαραίτητα:</strong> cookie συνεδρίας για αυθεντικοποίηση (JWT σε HttpOnly, Secure, SameSite=Strict cookie). Διάρκεια: 4 ώρες (ευθυγραμμισμένη με το exp του JWT). Δεν χρησιμοποιείται για marketing/προφίλ.</li>
              <li><strong>Λειτουργικότητας/Προτιμήσεων:</strong> π.χ. απομνημόνευση ρυθμίσεων.</li>
              <li><strong>Τρίτων (Google Maps):</strong> ενδέχεται να τοποθετούνται cookies για προβολή/χρήση χάρτη. Η ενσωμάτωση ενεργοποιείται μόνο μετά από συγκατάθεση.</li>
            </ul>
            <p>
              Χρησιμοποιούμε επίσης προσωρινό sessionStorage για την εμφάνιση μηνυμάτων σύνδεσης/λήξης συνεδρίας· το περιεχόμενό του διαγράφεται αμέσως μετά την εμφάνιση του μηνύματος ή τη λήξη της συνεδρίας.
            </p>
            <p>
              Η καταγραφή IP και User-Agent γίνεται στα server logs αποκλειστικά για λόγους ασφάλειας/αποσφαλμάτωσης, δεν χρησιμοποιείται για marketing/προφίλ και διατηρείται για περιορισμένο διάστημα.
            </p>

            {/* ΝΕΟ: Cookie γλωσσικής προτίμησης */}
            <div className="mt-4 p-4 rounded-md border bg-gray-50">
              <h4 className="font-semibold mb-1">Cookie γλωσσικής προτίμησης</h4>
              <p className="text-sm">
                Επειδή ο ιστότοπος είναι πλέον δίγλωσσος, ορίζουμε ένα μικρό cookie προτίμησης <code>locale</code> (π.χ. <code>el</code> / <code>en</code>)
                ώστε να θυμόμαστε τη γλώσσα σας μεταξύ επισκέψεων. Πρόκειται για λειτουργικό cookie (χωρίς tracking),
                συνήθως με <strong>SameSite=Lax</strong> και περιορισμένη διάρκεια (π.χ. 6–12 μήνες). Μπορείτε να αλλάξετε γλώσσα
                οποτεδήποτε· το cookie ενημερώνεται ανάλογα.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">14. Πνευματικά δικαιώματα – Αποδόσεις</h3>
            <p>Ιδιοκτησία μας: κείμενα, λογότυπα, μέρος φωτογραφιών/εικονιδίων.</p>
            <p className="mt-2">Υλικό τρίτων (με άδειες/αποδόσεις):</p>
            <ul className="list-disc list-inside">
              <li>Pexels — <span className="text-gray-600">[συντελεστές προς προσθήκη σε μεταγενέστερο στάδιο]</span></li>
              <li>Unsplash — <span className="text-gray-600">[συντελεστές προς προσθήκη σε μεταγενέστερο στάδιο]</span></li>
              <li>Flaticon — <span className="text-gray-600">[συντελεστές προς προσθήκη σε μεταγενέστερο στάδιο]</span></li>
              <li>Freepik — <span className="text-gray-600">[συντελεστές προς προσθήκη σε μεταγενέστερο στάδιο]</span></li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">15. Ασφάλεια</h3>
            <p>
              Εφαρμόζουμε τεχνικά (κρυπτογράφηση, TLS, hashing κωδικών, least-privilege access, role-based controls, logging) και οργανωτικά μέτρα (πολιτικές, εμπιστευτικότητα διαχειριστών, εκπαίδευση). Για λόγους ασφάλειας,<strong> δεν δημοσιεύουμε πλήρη τεχνικά σχήματα βάσης ή API endpoints</strong>. Καμία μέθοδος δεν εγγυάται απόλυτη ασφάλεια· καταβάλουμε κάθε εύλογη προσπάθεια ελαχιστοποίησης κινδύνου.
            </p>
            <p>
              Τα αρχεία καταγραφής (logs) είναι προσβάσιμα μόνο από εξουσιοδοτημένο προσωπικό, περιέχουν ελάχιστα αναγκαία στοιχεία (π.χ. IP, User-Agent) και τηρούνται για περιορισμένο χρόνο σύμφωνα με την αρχή ελαχιστοποίησης.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">16. Δικαιώματα υποκειμένων</h3>
            <p>
              Έχεις δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού, φορητότητας, εναντίωσης και ανάκλησης συγκατάθεσης (όπου εφαρμόζεται) χωρίς αναδρομική ισχύ. Αιτήματα στο{" "}
              <a className="text-teal-700 hover:underline" href="mailto:t.believeinyourself@gmail.com">
                t.believeinyourself@gmail.com
              </a>. Απαντούμε εντός ενός μήνα (με δυνατότητα παράτασης όπου επιτρέπεται).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">17. Ανηλίκοι</h3>
            <p>Η υπηρεσία δεν απευθύνεται σε άτομα κάτω των 16 ετών. Αν διαπιστωθεί συλλογή δεδομένων χωρίς κατάλληλη γονική συναίνεση, τα διαγράφουμε άμεσα.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">18. Αλλαγές στην Πολιτική</h3>
            <p>Ενδέχεται να ενημερώνουμε την Πολιτική. Η ημερομηνία «Τελευταία ενημέρωση» αναθεωρείται και, όπου απαιτείται, ζητούμε εκ νέου συγκατάθεση.</p>
          </section>
        </article>

        {/* TERMS (unchanged Greek) */}
        <article id="terms" className="space-y-8 mt-14">
          <h2 className="text-2xl font-bold">Όροι &amp; Προϋποθέσεις Χρήσης</h2>

          <section>
            <h3 className="text-xl font-semibold mb-2">1. Αποδοχή Όρων &amp; Δήλωση Συγκατάθεσης</h3>
            <p>
              Με την πρόσβαση/χρήση του Ιστότοπου/Εφαρμογής συμφωνείς να δεσμεύεσαι από τους παρόντες Όρους και την Πολιτική Απορρήτου. Κατά τη σύνδεση εμφανίζεται δήλωση αποδοχής που περιλαμβάνει ρητή αναφορά στην επεξεργασία δεδομένων υγείας· με την επιλογή «Αποδέχομαι» <strong>δηλώνεις ρητή συγκατάθεση</strong> για την επεξεργασία αυτών, αποκλειστικά για σκοπούς παροχής υπηρεσιών. Η συγκατάθεση μπορεί να ανακληθεί οποτεδήποτε χωρίς αναδρομική ισχύ.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">2. Περιγραφή Υπηρεσίας</h3>
            <p>
              Παρέχουμε διαδικτυακή πλατφόρμα υποστήριξης/οργάνωσης διατροφικών υπηρεσιών. Οι χρήστες <strong>CLIENT</strong> βλέπουν τον προσωπικό τους φάκελο (Δίαιτες/Μετρήσεις/Φωτογραφίες). <strong>Μόνο Admins</strong> ανεβάζουν/τροποποιούν περιεχόμενο κατ’ εντολή πελάτη.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">3. Λογαριασμοί &amp; Ασφάλεια</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Ο λογαριασμός δημιουργείται από Διαχειριστή, με email ως μοναδικό αναγνωριστικό.</li>
              <li>Στην πρώτη είσοδο ορίζεις προσωπικό κωδικό (αποθήκευση <strong>κρυπτογραφημένη</strong>).</li>
              <li>Αν ξεχάσεις κωδικό, ενημερώνεις Διαχειριστή για επαναφορά (διαγραφή παλιού hash και ρύθμιση νέου).</li>
              <li>Είσαι υπεύθυνος για τη μυστικότητα των διαπιστευτηρίων και την άμεση ειδοποίηση για μη εξουσιοδοτημένη χρήση.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">4. Τοποθεσίες &amp; Αποθήκευση δεδομένων</h3>
            <p>
              Με τη χρήση της υπηρεσίας αποδέχεσαι ότι τα δεδομένα σου αποθηκεύονται/επεξεργάζονται από τους παρόχους που αναφέρονται στην Πολιτική Απορρήτου, συγκεκριμένα: <strong>Supabase</strong> (βάση δεδομένων σε AWS <strong>eu-central-1</strong>) και <strong>Backblaze B2</strong> (file storage σε <strong>ιδιωτικό bucket εντός ΕΕ</strong>), καθώς και <strong>Netlify</strong> για φόρμες/hosting. Όπου απαιτείται, εφαρμόζονται DPAs/SCCs και τεχνικά/οργανωτικά μέτρα ασφάλειας.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">5. Αποδεκτή Χρήση</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Απαγορεύεται μη εξουσιοδοτημένη πρόσβαση/παράκαμψη ελέγχων, σάρωση ευπαθειών, κακόβουλη χρήση.</li>
              <li>Απαγορεύεται αντιγραφή/αναδιανομή περιεχομένου τρίτων χωρίς άδεια.</li>
              <li>Απαγορεύεται χρήση για παράνομες/βλαπτικές ενέργειες ή DoS.</li>
              <li>Απαγορεύεται προσπάθεια εξαγωγής/αποκρυπτογράφησης κώδικα/λογικής ασφαλείας.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">6. Περιεχόμενο &amp; Δικαιώματα</h3>
            <p>
              Ο φάκελος πελάτη παρέχεται για προσωπική χρήση. Δεν επιτρέπεται δημοσίευση/διαμοιρασμός χωρίς άδεια. Πνευματικά δικαιώματα για κείμενα/λογότυπα/μέρος πολυμέσων ανήκουν σε εμάς. Υλικό τρίτων χρησιμοποιείται με τις σχετικές άδειες/αποδόσεις (βλ. Πολιτική §14).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">7. Υπηρεσίες τρίτων</h3>
            <p>Η χρήση Google Maps, Netlify, Supabase και Backblaze B2 διέπεται επιπλέον από τους όρους/πολιτικές των αντίστοιχων παρόχων.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">8. Ιατρική αποποίηση ευθύνης</h3>
            <p>Οι παρεχόμενες πληροφορίες/υλικό δεν αποτελούν ιατρική διάγνωση ή θεραπεία και δεν υποκαθιστούν ιατρική γνωμάτευση. Συμβουλεύσου τον θεράποντα ιατρό πριν από ουσιώδεις αλλαγές, ειδικά αν υφίσταται ιατρικό ιστορικό.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">9. Διαθεσιμότητα υπηρεσίας</h3>
            <p>Καταβάλλουμε εύλογες προσπάθειες για απρόσκοπτη λειτουργία, χωρίς εγγύηση αδιάλειπτης διαθεσιμότητας. Διατηρούμε δικαίωμα τροποποίησης/αναστολής λειτουργιών για συντήρηση/ασφάλεια.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">10. Περιορισμός ευθύνης</h3>
            <p>Στο μέγιστο επιτρεπτό από τον νόμο βαθμό, δεν ευθυνόμαστε για έμμεσες, παρεπόμενες ή αποθετικές ζημίες από χρήση/αδυναμία χρήσης. Τίποτε δεν περιορίζει ευθύνη που δεν μπορεί να περιοριστεί από τον νόμο.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">11. Αποζημίωση</h3>
            <p>Συμφωνείς να αποζημιώσεις την Εταιρεία για αξιώσεις/ζημίες/δαπάνες (συμπερ. εύλογων νομικών αμοιβών) από παραβίαση των Όρων ή κατάχρηση της υπηρεσίας.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">12. Τερματισμός</h3>
            <p>Διατηρούμε δικαίωμα άμεσης αναστολής/διακοπής πρόσβασης για παραβίαση Όρων, κινδύνους ασφάλειας ή κατά νόμο απαίτηση. Μπορείς να ζητήσεις διαγραφή λογαριασμού ανά πάσα στιγμή.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">13. Τροποποιήσεις Όρων</h3>
            <p>Μπορούμε να ενημερώνουμε τους Όρους. Η συνέχιση χρήσης μετά την ανάρτηση νέας έκδοσης συνιστά αποδοχή αυτής.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">14. Εφαρμοστέο δίκαιο &amp; δικαιοδοσία</h3>
            <p>Οι Όροι διέπονται από το ελληνικό δίκαιο. Αρμόδια τα Δικαστήρια Αθηνών, εκτός αν ορίζεται διαφορετικά από αναγκαστικό δίκαιο.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">15. Επικοινωνία</h3>
            <p>
              Για ερωτήσεις επί των Όρων ή θεμάτων απορρήτου:{" "}
              <a className="text-teal-700 hover:underline" href="mailto:t.believeinyourself@gmail.com">
                t.believeinyourself@gmail.com
              </a>.
            </p>
          </section>
        </article>

        {/* DATA MAP (unchanged Greek) */}
        <article id="datamap" className="space-y-6 mt-14">
          <h2 className="text-2xl font-bold">Παράρτημα: Πίνακας Αντιστοίχισης Δεδομένων (Data Map)</h2>
          <div className="overflow-x-auto border rounded-md">
            <table className="min-w-full text-sm">
              <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-3 font-semibold">Κατηγορία</th>
                <th className="p-3 font-semibold">Παράδειγμα περιεχομένου</th>
                <th className="p-3 font-semibold">Σκοπός</th>
                <th className="p-3 font-semibold">Διατήρηση</th>
                <th className="p-3 font-semibold">Παραλήπτες</th>
              </tr>
              </thead>
              <tbody>
              <tr className="border-t">
                <td className="p-3">Λογαριασμός</td>
                <td className="p-3">Ονοματεπώνυμο, email, τηλέφωνο, κρυπτογραφημένος κωδικός</td>
                <td className="p-3">Ταυτοποίηση &amp; πρόσβαση</td>
                <td className="p-3">Διάρκεια σχέσης + έως 5 έτη</td>
                <td className="p-3">Supabase (DB hosting), Εσωτερικά (Admins), IT support</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Φάκελος πελάτη</td>
                <td className="p-3">Δίαιτες, Μετρήσεις, Φωτογραφίες προόδου</td>
                <td className="p-3">Παροχή υπηρεσίας</td>
                <td className="p-3">Διάρκεια σχέσης + έως 5 έτη</td>
                <td className="p-3">Backblaze B2 (file storage – ΕΕ), Εσωτερικά</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Φόρμα</td>
                <td className="p-3">Ονοματεπώνυμο, τηλέφωνο, μήνυμα, IP/μεταδεδομένα</td>
                <td className="p-3">Απάντηση αιτήματος/ραντεβού</td>
                <td className="p-3">Έως 12 μήνες</td>
                <td className="p-3">Netlify (processor), Εσωτερικά</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Τεχνικά</td>
                <td className="p-3">IP/User-Agent, JWT/cookies, logs, signed URLs</td>
                <td className="p-3">Ασφάλεια/λειτουργία</td>
                <td className="p-3">Έως 12 μήνες</td>
                <td className="p-3">Εσωτερικά, πάροχοι hosting/ασφάλειας</td>
              </tr>
              </tbody>
            </table>
          </div>

          <section className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Σημείωση ασφαλείας</h3>
            <p className="text-sm text-gray-700">
              Για την προστασία του συστήματος και των υποκειμένων, δεν δημοσιεύονται <strong>ακριβή τεχνικά σχήματα βάσης</strong>(ονόματα πινάκων/πεδίων) ή <strong>ρητά API endpoints</strong>. Οι παρούσες πληροφορίες επαρκούν για διαφάνεια, συμμόρφωση και άσκηση δικαιωμάτων χωρίς να θίγεται η ασφάλεια.
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
