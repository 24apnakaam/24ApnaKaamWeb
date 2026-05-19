import { useEffect, useRef } from "react";
import {
  MapPin,
  ShieldCheck,
  CurrencyInr,
  Translate,
  PencilSimpleLine,
  UsersThree,
  Handshake,
  CheckCircle,
  ClockCountdown,
  ChatCircleDots,
  ImageSquare,
  Receipt,
  Wrench,
  Lightning,
  Hammer,
  PaintBrush,
  Wall,
  Car,
  Broom,
  Package,
  Plant,
  CookingPot,
  DownloadSimple,
} from "@phosphor-icons/react";

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Each element gets its own observer entry so stagger delays fire
    // independently as the user scrolls, not all at once.
    // rootMargin triggers the animation just before the element enters
    // the viewport so the motion is visible from the start.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [ref]);
}

/* ---- Store buttons ---- */
export function PlayStoreButton() {
  return (
    <a
      href="#"
      className="store-btn"
      aria-label="Get 2424ApnaKaam on Google Play"
    >
      <svg className="glyph" viewBox="0 0 24 24" fill="none">
        <path
          d="M3.6 2.4 14.5 12 3.6 21.6c-.4-.3-.6-.7-.6-1.2V3.6c0-.5.2-.9.6-1.2z"
          fill="#34D399"
        />
        <path
          d="M14.5 12 17.7 8.7 5.4 1.7c-.5-.3-1-.3-1.5-.1L14.5 12z"
          fill="#FBBF24"
        />
        <path
          d="M14.5 12 3.9 22.4c.5.2 1 .2 1.5-.1l12.3-7L14.5 12z"
          fill="#EF4444"
        />
        <path
          d="M20.7 10.3 17.7 8.7 14.5 12l3.2 3.3 3-1.6c1-.6 1-2.2 0-2.8z"
          fill="#3B82F6"
        />
      </svg>
      <span className="lines">
        <span className="small">GET IT ON</span>
        <span className="big">Google Play</span>
      </span>
    </a>
  );
}

export function AppStoreButton() {
  return (
    <a
      href="#"
      className="store-btn"
      aria-label="Download 2424ApnaKaam on the App Store"
    >
      <svg className="glyph" viewBox="0 0 24 24" fill="white">
        <path d="M16.4 12.6c0-2.7 2.2-4 2.3-4-1.2-1.8-3.2-2-3.9-2-1.6-.2-3.2.9-4 .9-.8 0-2.2-.9-3.6-.9-1.8 0-3.5 1.1-4.5 2.7-1.9 3.3-.5 8.2 1.4 10.9 1 1.3 2.1 2.8 3.5 2.7 1.4-.1 2-.9 3.7-.9 1.7 0 2.3.9 3.7.9 1.5 0 2.5-1.3 3.4-2.7 1.1-1.5 1.5-3 1.5-3.1-.1 0-2.9-1.1-2.9-4.4zm-2.7-8C14.5 3.7 15 2.5 14.9 1.4c-1 0-2.2.7-2.9 1.5-.6.7-1.3 2-1.1 3.1 1.1.1 2.3-.5 2.8-1.4z" />
      </svg>
      <span className="lines">
        <span className="small">Download on the</span>
        <span className="big">App Store</span>
      </span>
    </a>
  );
}

/* ---- Promise strip ---- */
export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const items = [
    {
      Icon: MapPin,
      title: "Serving Delhi",
      desc: "One city, done right. We'll expand only when our workers and customers are happy.",
    },
    {
      Icon: ShieldCheck,
      title: "Every worker verified",
      desc: "ID, address, and skill checks before any worker is listed on 2424ApnaKaam.",
    },
    {
      Icon: CurrencyInr,
      title: "No commission, ever",
      desc: "Workers keep what they earn. You pay only for the work.",
    },
    {
      Icon: Translate,
      title: "Hindi + English",
      desc: "Built Hindi-first, with full English support. Use the app the way you actually speak.",
    },
  ];

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {items.map((item, i) => (
            <div
              className="promise reveal"
              key={i}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="promise-ic">
                <item.Icon size={22} weight="bold" />
              </div>
              <div className="promise-title">{item.title}</div>
              <div className="promise-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- How it works ---- */
export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const steps = [
    {
      Icon: PencilSimpleLine,
      title: "Post your job",
      desc: "Pick the trade, describe the work, set your budget. Takes under 60 seconds.",
    },
    {
      Icon: UsersThree,
      title: "Workers apply",
      desc: "Verified workers near you apply within minutes. See ratings, jobs done, and portfolio.",
    },
    {
      Icon: Handshake,
      title: "Pick & confirm",
      desc: "Compare profiles, see their work, and accept the worker who fits best.",
    },
    {
      Icon: CheckCircle,
      title: "Get it done",
      desc: "Track the booking live. Pay only after the job is complete and reviewed.",
    },
  ];

  return (
    <section className="section" id="how" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">How it works</span>
          <h2>Find the right worker in four simple steps.</h2>
          <p className="lead">
            24ApnaKaam takes the guesswork out of hiring. Post once, get matched
            with verified workers from your neighbourhood.
          </p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div
              className="step reveal"
              key={i}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="step-num">{i + 1}</div>
              <div className="step-icon">
                <s.Icon size={28} weight="bold" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Why ApnaKaam ---- */
export function WhyApnaKaam() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const features = [
    {
      Icon: ShieldCheck,
      tint: "green",
      title: "Verified workers",
      desc: "Every worker is ID-verified. View ratings, reviews, and complete job history before you book.",
    },
    {
      Icon: ClockCountdown,
      tint: "saffron",
      title: "Real-time matching",
      desc: "Workers near you get notified the moment a job is posted. No waiting around for callbacks.",
    },
    {
      Icon: ChatCircleDots,
      tint: "blue",
      title: "Work in your language",
      desc: "Hindi-first app with English support. Talk to workers comfortably, the way you actually speak.",
    },
    {
      Icon: ImageSquare,
      tint: "saffron",
      title: "See real work",
      desc: "Workers upload photos and short videos of past jobs. Judge by their actual craft, not just words.",
    },
    {
      Icon: MapPin,
      tint: "green",
      title: "Right in your area",
      desc: "Match with workers from your locality. Faster arrival, fairer prices, and a familiar face.",
    },
    {
      Icon: Receipt,
      tint: "blue",
      title: "Transparent pricing",
      desc: "Daily and per-job rates shown upfront. No commissions stacked on the worker, no surprise charges.",
    },
  ];

  const tints: Record<string, { bg: string; fg: string }> = {
    saffron: { bg: "#FFEDD5", fg: "#C2410C" },
    green: { bg: "#DCFCE7", fg: "#15803D" },
    blue: { bg: "#DBEAFE", fg: "#1E40AF" },
  };

  return (
    <section className="section alt" id="why" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">Why 24ApnaKaam</span>
          <h2>Built for trust. Made for India.</h2>
          <p className="lead">
            Hiring a worker shouldn't feel like a gamble. We're designing every
            part of 24ApnaKaam — from verification to pricing — so the choice is
            easy and the outcome is predictable.
          </p>
        </div>
        <div className="features">
          {features.map((f, i) => (
            <div
              className="feature reveal"
              key={i}
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div
                className="ic"
                style={{
                  background: tints[f.tint].bg,
                  color: tints[f.tint].fg,
                }}
              >
                <f.Icon size={24} weight="bold" />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Trades grid ---- */
export function TradesSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const trades = [
    { Icon: Wrench, name: "Plumber", hi: "प्लंबर" },
    { Icon: Lightning, name: "Electrician", hi: "इलेक्ट्रिशियन" },
    { Icon: Hammer, name: "Carpenter", hi: "बढ़ई" },
    { Icon: PaintBrush, name: "Painter", hi: "पेंटर" },
    { Icon: Wall, name: "Mason", hi: "राजमिस्त्री" },
    { Icon: Car, name: "Driver", hi: "ड्राइवर" },
    { Icon: Broom, name: "House help", hi: "घरेलू सहायक" },
    { Icon: Package, name: "Helper", hi: "मज़दूर" },
    { Icon: Plant, name: "Gardener", hi: "माली" },
    { Icon: CookingPot, name: "Cook", hi: "रसोइया" },
  ];

  return (
    <section className="section" id="trades" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-eyebrow">The trades we cover</span>
          <h2>From a leaky tap to a full home renovation.</h2>
          <p className="lead">
            We have the right person for the job. Tell us what's you need and
            we'll find the right workers in your area.
          </p>
        </div>
        <div className="trades">
          {trades.map((t, i) => (
            <div
              className="trade reveal"
              key={i}
              style={{ transitionDelay: `${(i % 5) * 60}ms` }}
            >
              <div className="ic">
                <t.Icon size={36} weight="duotone" />
              </div>
              <div className="name">{t.name}</div>
              <div className="name-hi">{t.hi}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- QR placeholder ---- */
function QRPlaceholder() {
  const cells: { x: number; y: number }[] = [];
  const seed = 17;
  for (let y = 0; y < 21; y++) {
    for (let x = 0; x < 21; x++) {
      const v = (Math.sin((x * 31 + y * 17) * seed) + 1) * 0.5;
      if (v > 0.55) cells.push({ x, y });
    }
  }
  const finder = (cx: number, cy: number) => (
    <g key={`f${cx}${cy}`}>
      <rect x={cx} y={cy} width="7" height="7" fill="#14130F" />
      <rect x={cx + 1} y={cy + 1} width="5" height="5" fill="white" />
      <rect x={cx + 2} y={cy + 2} width="3" height="3" fill="#14130F" />
    </g>
  );
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 21 21"
      shapeRendering="crispEdges"
    >
      <rect width="21" height="21" fill="white" />
      {cells.map((c, i) => {
        if (
          (c.x < 8 && c.y < 8) ||
          (c.x > 12 && c.y < 8) ||
          (c.x < 8 && c.y > 12)
        )
          return null;
        return (
          <rect key={i} x={c.x} y={c.y} width="1" height="1" fill="#14130F" />
        );
      })}
      {finder(0, 0)}
      {finder(14, 0)}
      {finder(0, 14)}
      <rect x="8" y="8" width="5" height="5" rx="1" fill="#F97316" />
    </svg>
  );
}

/* ---- CTA Banner ---- */
export function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return null;

  return (
    <section className="section" id="download" ref={ref}>
      <div className="container">
        <div className="cta-banner reveal">
          <div className="cta-banner-grid">
            <div>
              <h2>Get the app. Get the help. Today.</h2>
              <p>
                Download 24ApnaKaam free on Android and iOS. Post your first job
                in under a minute and meet a verified worker the same day.
              </p>
              <div className="hero-ctas" style={{ marginTop: 32 }}>
                <PlayStoreButton />
                <AppStoreButton />
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="qr">
                <QRPlaceholder />
                <div className="lbl">Scan to download</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Footer ---- */
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a
              href="#"
              className="brand-lockup"
              style={{ marginBottom: 16, display: "inline-flex" }}
            >
              <img
                className="brand-icon"
                src="/app-icon.jpeg"
                alt="24ApnaKaam"
              />
              <span className="brand-word">
                <span className="brand-word-hi">अपना काम</span>
                <span className="brand-word-en">24ApnaKaam</span>
              </span>
            </a>
            <p
              style={{
                color: "var(--fg-3)",
                fontSize: 14,
                maxWidth: 320,
                marginTop: 12,
              }}
            >
              The marketplace that connects households with verified daily-wage
              workers across India.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#how">How it works</a>
              </li>
              <li>
                <a href="#why">Why 24ApnaKaam</a>
              </li>
              <li>
                <a href="#trades">Trades</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Help centre</a>
              </li>
              <li>
                <a href="#">Worker support</a>
              </li>
              <li>
                <a href="#">Trust & safety</a>
              </li>
              <li>
                <a href="/privacy">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>हिन्दी · English</span>
        </div>
      </div>
    </footer>
  );
}

/* ---- Nav CTA download icon ---- */
export { DownloadSimple };
