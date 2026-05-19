import { Footer } from "./Sections";

export function DeleteAccount() {
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
        <div className="container" style={{ maxWidth: 680 }}>
          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <h1
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "var(--fg-1)",
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              Delete Your Account
            </h1>
            <p style={{ color: "var(--fg-2)", fontSize: 16, lineHeight: 1.7 }}>
              You can delete your 24ApnaKaam account directly from the app.
              Follow the steps below.
            </p>
          </div>

          {/* Warning box */}
          <div
            style={{
              background: "#FFF7ED",
              border: "1px solid #FED7AA",
              borderRadius: "var(--radius-md)",
              padding: "16px 20px",
              marginBottom: 48,
            }}
          >
            <p
              style={{
                fontWeight: 600,
                color: "#C2410C",
                marginBottom: 6,
                fontSize: 15,
              }}
            >
              Before you proceed
            </p>
            <p style={{ color: "#92400E", fontSize: 14, lineHeight: 1.7 }}>
              Deleting your account will permanently remove your profile,
              bookings history, and all associated data. This action cannot be
              undone once processed.
            </p>
          </div>

          {/* Steps */}
          <div style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "var(--fg-1)",
                marginBottom: 24,
                paddingBottom: 8,
                borderBottom: "1px solid var(--border-1)",
              }}
            >
              How to delete your account
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              {[
                {
                  step: 1,
                  title: "Open the app",
                  desc: "Launch the 24ApnaKaam app on your phone.",
                },
                {
                  step: 2,
                  title: "Go to Profile",
                  desc: 'Tap the Profile icon at the bottom of the screen to open your profile page.',
                },
                {
                  step: 3,
                  title: 'Tap "Delete Profile"',
                  desc: 'Scroll to the bottom of your profile and tap the "Delete Profile" option.',
                },
                {
                  step: 4,
                  title: "Select a reason",
                  desc: "Choose the reason you want to delete your account from the list provided.",
                },
                {
                  step: 5,
                  title: "Submit your request",
                  desc: "Confirm your selection and submit the deletion request.",
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "var(--brand-saffron-500)",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 15,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    {step}
                  </div>
                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        color: "var(--fg-1)",
                        fontSize: 15,
                        marginBottom: 4,
                      }}
                    >
                      {title}
                    </p>
                    <p style={{ color: "var(--fg-2)", fontSize: 14, lineHeight: 1.6 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div
            style={{
              background: "var(--bg-alt)",
              border: "1px solid var(--border-1)",
              borderRadius: "var(--radius-md)",
              padding: "20px 24px",
              marginBottom: 48,
            }}
          >
            <p
              style={{
                fontWeight: 600,
                color: "var(--fg-1)",
                marginBottom: 6,
                fontSize: 15,
              }}
            >
              Processing time
            </p>
            <p style={{ color: "var(--fg-2)", fontSize: 14, lineHeight: 1.7 }}>
              After you submit your request, your account will be reviewed and
              permanently deleted within <strong>5 working days</strong>. You
              will receive a confirmation once the deletion is complete.
            </p>
          </div>

          {/* Contact */}
          <div
            style={{ borderTop: "1px solid var(--border-1)", paddingTop: 32 }}
          >
            <p style={{ color: "var(--fg-2)", fontSize: 14, lineHeight: 1.7 }}>
              Need help or unable to access the app?{" "}
              <a
                href="mailto:24apnakaam@gmail.com"
                style={{
                  color: "var(--brand-saffron-600)",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                Contact support
              </a>{" "}
              and we'll process your request manually.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
