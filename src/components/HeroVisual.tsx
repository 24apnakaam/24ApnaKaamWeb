export function HeroVisual() {
  return (
    <div className="hv-wrap">
      <svg viewBox="0 0 560 560" className="hv-svg" aria-hidden="true">
        <defs>
          <radialGradient id="hvBg" cx="50%" cy="40%" r="60%">
            <stop offset="0%"   stopColor="#FFEDD5" stopOpacity="0.9" />
            <stop offset="60%"  stopColor="#FFF7ED" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFBF3" stopOpacity="0" />
          </radialGradient>
          <filter id="hvShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#14130F" floodOpacity="0.10" />
          </filter>
          <filter id="hvShadowSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#14130F" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Soft saffron wash */}
        <circle cx="280" cy="240" r="260" fill="url(#hvBg)" />

        {/* Dotted orbit rings */}
        <circle cx="280" cy="280" r="200" fill="none" stroke="#F97316" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="2 8" className="hv-orbit hv-orbit-1" />
        <circle cx="280" cy="280" r="155" fill="none" stroke="#16A34A" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="2 8" className="hv-orbit hv-orbit-2" />

        {/* Connection line */}
        <path d="M 130 200 Q 280 100 430 360" stroke="#F97316" strokeWidth="2.5" strokeDasharray="4 6" fill="none" strokeLinecap="round" className="hv-link" />

        {/* HOUSEHOLD card (top-left) — Consumer */}
        <g transform="translate(60 130)" filter="url(#hvShadow)">
          <rect width="180" height="120" rx="22" fill="white" stroke="#E8E5DC" />
          <rect x="0" y="0" width="6" height="120" rx="3" fill="#16A34A" />
          <g transform="translate(20 20)">
            <rect width="44" height="44" rx="12" fill="#DCFCE7" />
            <path d="M 12 24 L 22 14 L 32 24 L 32 34 L 26 34 L 26 27 L 18 27 L 18 34 L 12 34 Z" fill="#16A34A" />
          </g>
          <text x="76" y="36" fill="#14130F" fontSize="14" fontWeight="700" fontFamily="Inter">Priya · Customer</text>
          <text x="76" y="56" fill="#56524A" fontSize="12" fontFamily="Inter">Posted: Fix kitchen sink</text>
          <g transform="translate(20 80)">
            <rect width="74" height="22" rx="11" fill="#F0FDF4" stroke="#BBF7D0" />
            <circle cx="12" cy="11" r="3" fill="#16A34A" />
            <text x="22" y="15" fill="#15803D" fontSize="11" fontWeight="600" fontFamily="Inter">Posted</text>
          </g>
          <text x="100" y="95" fill="#78736A" fontSize="11" fontFamily="Inter">2 min ago</text>
        </g>

        {/* WORKER card (bottom-right) */}
        <g transform="translate(330 320)" filter="url(#hvShadow)">
          <rect width="180" height="120" rx="22" fill="white" stroke="#E8E5DC" />
          <rect x="0" y="0" width="6" height="120" rx="3" fill="#F97316" />
          <g transform="translate(20 20)">
            <rect width="44" height="44" rx="12" fill="#FFEDD5" />
            <path d="M 30 12 a 8 8 0 1 0 -7 13 l -10 10 a 3 3 0 0 0 4 4 l 10 -10 a 8 8 0 0 0 11 -7 l -5 5 l -4 -1 l -1 -4 z" fill="#F97316" />
          </g>
          <text x="76" y="36" fill="#14130F" fontSize="14" fontWeight="700" fontFamily="Inter">Ramesh · Plumber</text>
          <text x="76" y="56" fill="#56524A" fontSize="12" fontFamily="Inter">⭐ 4.8 · 124 jobs</text>
          <g transform="translate(20 80)">
            <rect width="80" height="22" rx="11" fill="#FFF7ED" stroke="#FED7AA" />
            <circle cx="12" cy="11" r="3" fill="#F97316" />
            <text x="22" y="15" fill="#C2410C" fontSize="11" fontWeight="600" fontFamily="Inter">Accepted</text>
          </g>
          <text x="106" y="95" fill="#78736A" fontSize="11" fontFamily="Inter">just now</text>
        </g>

        {/* Center logo mark */}
        <g transform="translate(220 220)" filter="url(#hvShadowSoft)">
          <circle cx="60" cy="60" r="60" fill="white" stroke="#E8E5DC" />
          <image href="/app-icon.jpeg" x="6" y="6" width="108" height="108" clipPath="circle(54px at 54px 54px)" preserveAspectRatio="xMidYMid slice" />
        </g>

        {/* Floating chips */}
        <g className="hv-chip hv-chip-1" filter="url(#hvShadowSoft)">
          <rect x="380" y="160" width="120" height="40" rx="20" fill="white" stroke="#E8E5DC" />
          <circle cx="402" cy="180" r="10" fill="#FFEDD5" />
          <path d="M 398 180 l 3 3 l 6 -6" stroke="#F97316" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="420" y="184" fill="#14130F" fontSize="13" fontWeight="600" fontFamily="Inter">Verified ID</text>
        </g>

        <g className="hv-chip hv-chip-2" filter="url(#hvShadowSoft)">
          <rect x="60" y="300" width="135" height="40" rx="20" fill="white" stroke="#E8E5DC" />
          <text x="74" y="324" fill="#F59E0B" fontSize="13" fontWeight="700" fontFamily="Inter">⭐ ⭐ ⭐ ⭐ ⭐</text>
        </g>

        <g className="hv-chip hv-chip-3" filter="url(#hvShadowSoft)">
          <rect x="200" y="445" width="170" height="40" rx="20" fill="white" stroke="#E8E5DC" />
          <circle cx="222" cy="465" r="9" fill="#DCFCE7" />
          <path d="M 217 465 l 4 4 l 7 -8" stroke="#16A34A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="240" y="469" fill="#14130F" fontSize="13" fontWeight="600" fontFamily="Inter">Booking confirmed</text>
        </g>

        {/* Notification ping */}
        <g transform="translate(280 280)" className="hv-ping-wrap">
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              r="0"
              fill="none"
              stroke="#F97316"
              strokeOpacity="0.4"
              strokeWidth="2"
              className="hv-ping"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
