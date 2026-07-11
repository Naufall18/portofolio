import { GitHubIcon } from './icons';
import { useLang } from '../i18n.jsx';

// language-independent data; text (tag/status/tagline/desc) comes from the dict
const PROJECTS = [
  {
    id: 'gerai',
    name: 'Gerai Jasa',
    stack: ['Laravel', 'PostgreSQL', 'Redis', 'React + TS', 'Flutter', 'Riverpod'],
    links: [
      { kind: 'mobile', url: 'https://github.com/Naufall18/Gerai-Jasa-mobile' },
      { kind: 'web', url: 'https://github.com/Naufall18/Gerai-Jasa-web' },
      { kind: 'api', url: 'https://github.com/Naufall18/Gerai-Jasa-backend' },
    ],
  },
  {
    id: 'velvoria',
    name: 'Velvoria',
    stack: ['Flutter', 'Riverpod', 'Clean Architecture', 'Laravel', 'Go Router'],
    links: [
      { kind: 'mobile', url: 'https://github.com/Naufall18/velvoria-mobile' },
      { kind: 'web', url: 'https://github.com/Naufall18/velvoria-web' },
      { kind: 'api', url: 'https://github.com/Naufall18/velvoria-backend' },
    ],
  },
  {
    id: 'batik',
    name: 'Batik Heritage',
    stack: ['Flutter', 'Laravel', 'React', 'MySQL', 'Clean Architecture'],
    links: [
      { kind: 'mobile', url: 'https://github.com/Naufall18/Batik-Heritage-mobile' },
      { kind: 'web', url: 'https://github.com/Naufall18/Batik-Heritage-web' },
      { kind: 'api', url: 'https://github.com/Naufall18/Batik-Heritage-backend' },
    ],
  },
  {
    id: 'quizyfy',
    name: 'Quizyfy',
    stack: ['Flutter', 'GetX', 'Laravel', 'Sanctum', 'MySQL'],
    links: [
      { kind: 'mobile', url: 'https://github.com/Naufall18/Quizyfy' },
      { kind: 'api', url: 'https://github.com/Naufall18/Quizyfy-Backend' },
    ],
  },
];

export default function FeaturedProjects() {
  const { t } = useLang();
  const w = t.work;

  return (
    <section id="work">
      <div className="wrap">
        <div className="sh reveal">
          <div className="sh-eye">{w.eye}</div>
          <h2 className="sh-title">
            {w.titlePre}<span className="grad">{w.grad}</span>
          </h2>
          <p className="sh-sub">{w.sub}</p>
        </div>

        <div className="feat-grid">
          {PROJECTS.map((p, i) => {
            const tx = w.projects[p.id];
            return (
              <article key={p.id} className={`fp reveal d${i + 1}`}>
                <div className="fp-index">{String(i + 1).padStart(2, '0')}</div>
                <div className="fp-body">
                  <div className="fp-tags">
                    <span className="fp-tag">
                      <span className="dot" /> {tx.tag}
                    </span>
                    {tx.status && <span className="fp-status">{tx.status}</span>}
                  </div>
                  <h3 className="fp-name">{p.name}</h3>
                  <div className="fp-tagline">{tx.tagline}</div>
                  <p className="fp-desc">{tx.desc}</p>
                  <div className="fp-stack">
                    {p.stack.map((s) => (
                      <span key={s} className="fp-chip">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="fp-surfaces">
                  {p.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="fp-surface">
                      <span className="fp-surface-l">{w.kind[l.kind]}</span>
                      <span className="fp-surface-arr"><GitHubIcon size={11} /> →</span>
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
