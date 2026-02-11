import { Container } from "@/components/Container";
import { H1, H2, P } from "@/components/ui";

export default function PrivacyEN() {
  return (
    <main className="py-20 md:py-28">
      <Container>
        <div className="max-w-[80ch]">
          <H1>Privacy Policy (GDPR)</H1>

          <P muted className="mt-3">
            Last updated: 2026-02-10
          </P>

          <div className="mt-10 grid gap-10">
            <section>
              <H2>1. Data Controller</H2>
              <P muted className="mt-4">
                The data controller for the processing of personal data under this Privacy Policy is:
              </P>
              <P className="mt-4">
                <strong>BareCRM (Martin Kylberg AB)</strong>
                <br />
                Company reg. no: 559487-9453
                <br />
                Address: Vävnadsvägen 13, 178 37 Ekerö, Sweden
                <br />
                Email: martin@barecrm.se
              </P>
              <P muted className="mt-4">
                BareCRM is responsible for ensuring that personal data is processed in accordance with the EU General Data Protection Regulation (GDPR).
              </P>
            </section>

            <section>
              <H2>2. Scope of this Policy</H2>
              <P muted className="mt-4">
                This Privacy Policy applies to the processing of personal data related to:
              </P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• users of the BareCRM service</li>
                <li>• customer representatives whose data is entered into the system</li>
                <li>• visitors to BareCRM websites and services</li>
              </ul>
              <P muted className="mt-4">
                BareCRM processes personal data only to the extent necessary to provide and operate the service.
              </P>
            </section>

            <section>
              <H2>3. Categories of Personal Data</H2>
              <P className="mt-4">
                BareCRM may process the following categories of personal data:
              </P>

              <div className="mt-6">
                <P className="font-semibold">3.1 Account and Identity Data</P>
                <ul className="mt-3 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                  <li>• Name</li>
                  <li>• Email address</li>
                  <li>• User ID</li>
                  <li>• Role and access level</li>
                  <li>• Organization affiliation</li>
                </ul>
              </div>

              <div className="mt-6">
                <P className="font-semibold">3.2 Customer Data (entered by users)</P>
                <ul className="mt-3 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                  <li>• Contact names</li>
                  <li>• Email addresses</li>
                  <li>• Phone numbers</li>
                  <li>• Job titles</li>
                  <li>• Notes, activities, meeting records and sales-related information</li>
                </ul>
                <P muted className="mt-3">
                  BareCRM processes such data solely on behalf of the customer.
                </P>
              </div>

              <div className="mt-6">
                <P className="font-semibold">3.3 Technical and Usage Data</P>
                <ul className="mt-3 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                  <li>• Login events</li>
                  <li>• Timestamps</li>
                  <li>• Audit logs</li>
                  <li>• Security-related metadata</li>
                  <li>• IP address (to the extent required for security and fraud prevention)</li>
                </ul>
              </div>
            </section>

            <section>
              <H2>4. Purposes and Legal Basis for Processing</H2>
              <P className="mt-4">Personal data is processed for the following purposes:</P>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-left text-sm" style={{ color: "var(--graphite-700)" }}>
                  <thead>
                    <tr>
                      <th className="py-2 pr-4 font-semibold" style={{ color: "var(--graphite-900)" }}>
                        Purpose
                      </th>
                      <th className="py-2 font-semibold" style={{ color: "var(--graphite-900)" }}>
                        Legal basis (GDPR Art. 6)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t" style={{ borderColor: "var(--divider)" }}>
                      <td className="py-2 pr-4">Provision and operation of the service</td>
                      <td className="py-2">Performance of contract</td>
                    </tr>
                    <tr className="border-t" style={{ borderColor: "var(--divider)" }}>
                      <td className="py-2 pr-4">User authentication and access control</td>
                      <td className="py-2">Performance of contract</td>
                    </tr>
                    <tr className="border-t" style={{ borderColor: "var(--divider)" }}>
                      <td className="py-2 pr-4">Security, logging and audit trails</td>
                      <td className="py-2">Legitimate interest</td>
                    </tr>
                    <tr className="border-t" style={{ borderColor: "var(--divider)" }}>
                      <td className="py-2 pr-4">Compliance with legal obligations</td>
                      <td className="py-2">Legal obligation</td>
                    </tr>
                    <tr className="border-t" style={{ borderColor: "var(--divider)" }}>
                      <td className="py-2 pr-4">Service improvement and stability</td>
                      <td className="py-2">Legitimate interest</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <P muted className="mt-4">
                BareCRM does not use personal data for profiling or automated decision-making.
              </P>
            </section>

            <section>
              <H2>5. Customer Data &amp; Processor Role</H2>
              <P muted className="mt-4">
                For customer data entered into the system (e.g. CRM contacts and notes):
              </P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• The customer is the Data Controller</li>
                <li>• BareCRM acts as Data Processor under Article 28 GDPR</li>
                <li>• Processing is governed by a Data Processing Agreement (DPA)</li>
                <li>• BareCRM processes customer data only according to documented instructions from the customer</li>
              </ul>
            </section>

            <section>
              <H2>6. Data Retention</H2>
              <P muted className="mt-4">
                Personal data is retained only for as long as necessary to fulfill its purpose.
              </P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• Account data is retained for the duration of the customer relationship</li>
                <li>• Customer data is deleted or returned upon termination, in accordance with the DPA</li>
                <li>• Legal retention requirements override deletion where applicable</li>
              </ul>
            </section>

            <section>
              <H2>7. Data Security</H2>
              <P muted className="mt-4">
                BareCRM implements appropriate technical and organizational measures to protect personal data, including:
              </P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• Role-based access control</li>
                <li>• Tenant isolation</li>
                <li>• Encryption in transit</li>
                <li>• Audit logging</li>
                <li>• Principle of least privilege</li>
              </ul>
              <P muted className="mt-4">Security measures are reviewed continuously.</P>
            </section>

            <section>
              <H2>8. Data Sharing and Subprocessors</H2>
              <P muted className="mt-4">BareCRM does not sell personal data.</P>
              <P muted className="mt-4">
                Personal data may be shared with approved subprocessors strictly necessary to deliver the service (e.g. infrastructure and hosting providers).
              </P>
              <P muted className="mt-4">All subprocessors are subject to:</P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• GDPR-compliant data processing agreements</li>
                <li>• Appropriate safeguards under Chapter V GDPR where applicable</li>
              </ul>
              <P muted className="mt-4">
                A current list of subprocessors is available upon request.
              </P>
            </section>

            <section>
              <H2>9. International Data Transfers</H2>
              <P muted className="mt-4">
                Personal data is processed within the EU/EEA or transferred under appropriate safeguards such as:
              </P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• Standard Contractual Clauses (SCCs)</li>
                <li>• Adequacy decisions by the European Commission</li>
              </ul>
            </section>

            <section>
              <H2>10. Data Subject Rights</H2>
              <P muted className="mt-4">Data subjects have the following rights under GDPR:</P>
              <ul className="mt-4 grid gap-2 text-base" style={{ color: "var(--graphite-700)" }}>
                <li>• Right of access (Art. 15)</li>
                <li>• Right to rectification (Art. 16)</li>
                <li>• Right to erasure (Art. 17)</li>
                <li>• Right to restriction of processing (Art. 18)</li>
                <li>• Right to data portability (Art. 20)</li>
                <li>• Right to object (Art. 21)</li>
              </ul>
              <P className="mt-4">
                Requests can be submitted to:{" "}
                <a className="underline hover:opacity-80" href="mailto:privacy@barecrm.com">
                  privacy@barecrm.com
                </a>
              </P>
            </section>

            <section>
              <H2>11. Complaints</H2>
              <P muted className="mt-4">
                Data subjects have the right to lodge a complaint with a supervisory authority, including:
              </P>
              <P className="mt-4">
                IMY (Integritetsskyddsmyndigheten) in Sweden{" "}
                <a
                  className="underline hover:opacity-80"
                  href="https://www.imy.se"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.imy.se
                </a>
              </P>
            </section>

            <section>
              <H2>12. Changes to this Policy</H2>
              <P muted className="mt-4">
                This Privacy Policy may be updated to reflect changes in legal requirements or service functionality.
                The latest version is always available on this page.
              </P>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
