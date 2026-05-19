import { Footer } from "./Sections";
import "../index.css";

export function PrivacyPolicy() {
  return (
    <>
      <nav className="nav scrolled">
        <div className="container nav-inner">
          <a href="/" aria-label="ApnaKaam home" className="brand-lockup">
            <img className="brand-icon" src="/app-icon.jpeg" alt="ApnaKaam" />
            <span className="brand-word">
              <span className="brand-word-hi">अपना काम</span>
              <span className="brand-word-en">24APNAKAAM</span>
            </span>
          </a>
        </div>
      </nav>

      <main style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ color: "var(--fg-3)", fontSize: 14, marginBottom: 8 }}>
              Last updated: 19 May 2026
            </p>
            <h1
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "var(--fg-1)",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Privacy Policy
            </h1>
            <p style={{ color: "var(--fg-2)", fontSize: 16, lineHeight: 1.7 }}>
              This Privacy Policy describes how <strong>24ApnaKaam</strong>{" "}
              ("we", "our", "us") collects, uses, and protects information when
              you use our platform and mobile application.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
              color: "var(--fg-2)",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            <Section title="1. About 24ApnaKaam">
              <p>
                24ApnaKaam is an online marketplace platform that connects
                consumers (households, individuals, and businesses) with
                independent daily-wage workers such as plumbers, electricians,
                carpenters, painters, and other skilled trades.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>We are a platform, not an employer.</strong> 24ApnaKaam
                facilitates the connection between consumers and workers but
                does not employ, supervise, or control the workers listed on the
                platform. Workers are independent service providers.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <ul
                style={{
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <li>
                  <strong>Phone number</strong> — used for OTP-based
                  authentication and to identify your account.
                </li>
                <li>
                  <strong>Profile information</strong> — name, address, and
                  other details you provide voluntarily.
                </li>
                <li>
                  <strong>Job postings & bookings</strong> — details of services
                  you request or offer.
                </li>
                <li>
                  <strong>Device & usage data</strong> — app version, device
                  type, and interaction logs for improving the service.
                </li>
                <li>
                  <strong>Location</strong> — approximate location to match
                  workers nearby (only when permission is granted).
                </li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <ul
                style={{
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <li>To verify identity and create your account.</li>
                <li>To match consumers with nearby available workers.</li>
                <li>
                  To facilitate bookings and communication between parties.
                </li>
                <li>
                  To send transactional notifications (booking status, OTPs).
                </li>
                <li>To improve platform safety, reliability, and features.</li>
                <li>To comply with applicable laws and regulations.</li>
              </ul>
            </Section>

            <Section title="4. Limitation of Liability">
              <div
                style={{
                  background: "var(--bg-alt)",
                  border: "1px solid var(--border-1)",
                  borderRadius: "var(--radius-md)",
                  padding: "16px 20px",
                  marginBottom: 12,
                }}
              >
                <p
                  style={{
                    fontWeight: 600,
                    color: "var(--fg-1)",
                    marginBottom: 8,
                  }}
                >
                  Important Notice
                </p>
                <p>
                  <strong>
                    24ApnaKaam is not responsible for any damage, loss, injury,
                    or dispute arising from the services performed by workers
                    found through our platform.
                  </strong>
                </p>
              </div>
              <p>
                Workers on 24ApnaKaam are independent contractors. We perform
                basic identity verification, but we do not guarantee the
                quality, safety, legality, or outcome of any work performed. Any
                agreement for services is solely between the consumer and the
                worker. 24ApnaKaam is not a party to that agreement.
              </p>
              <p style={{ marginTop: 12 }}>
                You agree to use 24ApnaKaam at your own risk and exercise
                reasonable judgment before hiring any worker.
              </p>
            </Section>

            <Section title="5. Data Sharing">
              <p>
                We do not sell your personal data. We may share information:
              </p>
              <ul
                style={{
                  paddingLeft: 20,
                  marginTop: 12,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <li>
                  <strong>Between consumers and workers</strong> — limited
                  contact details are shared to facilitate a booking.
                </li>
                <li>
                  <strong>With service providers</strong> — third-party vendors
                  (e.g., SMS/OTP providers, cloud infrastructure) that help us
                  operate the platform.
                </li>
                <li>
                  <strong>With law enforcement</strong> — when required by
                  applicable law, court order, or to protect safety.
                </li>
              </ul>
            </Section>

            <Section title="6. Data Security">
              <p>
                We use industry-standard security measures including encrypted
                connections (HTTPS/TLS) and secure cloud storage (Supabase) to
                protect your data. However, no system is completely secure, and
                we cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="7. Data Retention">
              <p>
                We retain your data as long as your account is active or as
                required to provide our services. You may request deletion of
                your account and associated data by contacting us.
              </p>
            </Section>

            <Section title="8. Your Rights">
              <ul
                style={{
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your account and data.</li>
                <li>
                  Withdraw consent for location or notification permissions at
                  any time via your device settings.
                </li>
              </ul>
            </Section>

            <Section title="9. Children's Privacy">
              <p>
                24ApnaKaam is not intended for users under the age of 18. We do
                not knowingly collect personal information from minors.
              </p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>
                We may update this policy from time to time. The revised date
                will be noted at the top of this page. Continued use of the
                platform after changes constitutes acceptance of the updated
                policy.
              </p>
            </Section>

            <Section title="11. Contact Us">
              <p>
                For any privacy-related queries or requests, please contact us
                at:
              </p>
              <div
                style={{
                  marginTop: 12,
                  padding: "12px 16px",
                  background: "var(--bg-alt)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-1)",
                  fontSize: 14,
                }}
              >
                <p>
                  <strong>24ApnaKaam</strong>
                </p>
                <p style={{ marginTop: 4, color: "var(--fg-3)" }}>
                  Email: 24apnakaam@gmail.com
                </p>
              </div>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: "var(--fg-1)",
          marginBottom: 12,
          paddingBottom: 8,
          borderBottom: "1px solid var(--border-1)",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
