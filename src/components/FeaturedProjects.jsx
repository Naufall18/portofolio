import { GitHubIcon } from './icons';

const FEATURED = [
  {
    emoji: '🗓️',
    tag: 'Flagship',
    status: 'Completed',
    name: 'Gerai Jasa',
    tagline: 'Multi-Vendor Booking Platform',
    desc:
      'A complete, production-ready ecosystem for service booking — customers discover & book vendors, vendors manage their storefront, and admins oversee everything. Three connected products on one Laravel API, with a real booking engine: slot locking, a booking state machine, and Midtrans/Xendit payments.',
    stack: ['Laravel', 'PostgreSQL', 'Redis', 'React + TS', 'Flutter', 'Riverpod'],
    accent: 'linear-gradient(90deg,#818CF8,#A78BFA)',
    solid: '#A78BFA',
    glow: 'rgba(167,139,250,.24)',
    links: [
      { label: 'Mobile App', url: 'https://github.com/Naufall18/Gerai-Jasa-mobile' },
      { label: 'Web Dashboard', url: 'https://github.com/Naufall18/Gerai-Jasa-web' },
      { label: 'Backend API', url: 'https://github.com/Naufall18/Gerai-Jasa-backend' },
    ],
  },
  {
    emoji: '🛍️',
    tag: 'Marketplace · 2026',
    name: 'Velvoria',
    tagline: 'Premium Luxury Marketplace',
    desc:
      'A premium multi-vendor luxury marketplace with 20+ polished screens, clean architecture and Riverpod state management — covering live shopping, AR try-on concepts, and a full admin dashboard.',
    stack: ['Flutter', 'Riverpod', 'Clean Architecture', 'Laravel', 'Go Router'],
    accent: 'linear-gradient(90deg,#F472B6,#A78BFA)',
    solid: '#F472B6',
    glow: 'rgba(244,114,182,.22)',
    links: [
      { label: 'Mobile App', url: 'https://github.com/Naufall18/velvoria-mobile' },
      { label: 'Web App', url: 'https://github.com/Naufall18/velvoria-web' },
      { label: 'Backend', url: 'https://github.com/Naufall18/velvoria-backend' },
    ],
  },
  {
    emoji: '🧠',
    tag: 'EdTech · 2026',
    name: 'Quizyfy',
    tagline: 'Online Examination Platform',
    desc:
      'An online exam platform with real-time scoring, question-bank management, an analytics dashboard and role-based access control — Flutter on the front, Laravel powering the grading engine.',
    stack: ['Flutter', 'GetX', 'Laravel', 'Sanctum', 'MySQL'],
    accent: 'linear-gradient(90deg,#60A5FA,#22D3EE)',
    solid: '#60A5FA',
    glow: 'rgba(96,165,250,.22)',
    links: [
      { label: 'Mobile App', url: 'https://github.com/Naufall18/Quizyfy' },
      { label: 'Backend API', url: 'https://github.com/Naufall18/Quizyfy-Backend' },
    ],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sh reveal">
          <div className="sh-eye">Selected Work</div>
          <h2 className="sh-title">
            Projects I'm <span className="grad">proud of</span>
          </h2>
          <p className="sh-sub">
            End-to-end products I designed and shipped — each spanning mobile, web, and backend.
            Real codebases, not mockups.
          </p>
        </div>

        <div className="feat-grid">
          {FEATURED.map((p, i) => (
            <article
              key={p.name}
              className={`fp reveal d${i + 1}`}
              style={{
                '--accent': p.accent,
                '--accent-solid': p.solid,
                '--accent-glow': p.glow,
              }}
            >
              <div className="fp-body">
                <div className="fp-tags">
                  <span className="fp-tag">
                    <span className="dot" /> {p.tag}
                  </span>
                  {p.status && <span className="fp-status">✓ {p.status}</span>}
                </div>
                <h3 className="fp-name">{p.name}</h3>
                <div className="fp-tagline">{p.tagline}</div>
                <p className="fp-desc">{p.desc}</p>
                <div className="fp-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="fp-chip">{s}</span>
                  ))}
                </div>
                <div className="fp-links">
                  {p.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="fp-link">
                      <GitHubIcon size={13} /> {l.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="fp-visual">
                <div className="fp-orbits"><span /><span /><span /></div>
                <div className="fp-emoji">{p.emoji}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
