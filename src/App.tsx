import { useEffect, useState } from 'react';
import { DownloadSimple, ShieldCheck, MapPin, Translate } from '@phosphor-icons/react';
import { HeroVisual } from './components/HeroVisual';
import {
  StatsSection, HowItWorks, WhyApnaKaam,
  TradesSection, CTABanner, Footer,
  PlayStoreButton, AppStoreButton,
} from './components/Sections';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hero items reveal on first load
  useEffect(() => {
    const ids = ['hero-eyebrow', 'hero-title', 'hero-sub', 'hero-ctas', 'hero-meta'];
    ids.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.classList.add('in'), 120 + i * 110);
    });
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#" aria-label="ApnaKaam home" className="brand-lockup">
            <img className="brand-icon" src="/app-icon.jpeg" alt="ApnaKaam" />
            <span className="brand-word">
              <span className="brand-word-hi">अपना काम</span>
              <span className="brand-word-en">APNAKAAM</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#why">Why us</a>
            <a href="#trades">Trades</a>
            <a href="#download">Get the app</a>
          </div>
          <a href="#download" className="nav-cta">
            <DownloadSimple size={16} weight="bold" />
            Download app
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <div id="hero-eyebrow" className="reveal">
              <span className="eyebrow">
                <span className="dot" />
                Now live in Bengaluru
              </span>
            </div>
            <h1 id="hero-title" className="reveal">
              Hire a verified worker,{' '}
              <br />
              <span className="accent">in your area</span>, today.
            </h1>
            <p id="hero-sub" className="hero-sub reveal">
              ApnaKaam connects Bengaluru households with trusted local workers — plumbers, electricians, carpenters, painters and more. Post a job and get matched in minutes.
            </p>
            <div id="hero-ctas" className="hero-ctas reveal">
              <PlayStoreButton />
              <AppStoreButton />
            </div>
            <div id="hero-meta" className="hero-meta reveal">
              <div className="row">
                <ShieldCheck size={18} weight="bold" color="var(--brand-green-600)" />
                Every worker ID-verified
              </div>
              <div className="row">
                <MapPin size={18} weight="bold" color="var(--brand-saffron-600)" />
                Serving Bengaluru
              </div>
              <div className="row">
                <Translate size={18} weight="bold" color="var(--brand-saffron-600)" />
                हिन्दी + English
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <HeroVisual />
          </div>
        </div>
      </header>

      <div id="promise"><StatsSection /></div>
      <HowItWorks />
      <WhyApnaKaam />
      <TradesSection />
      <CTABanner />
      <Footer />
    </>
  );
}

export default App;
