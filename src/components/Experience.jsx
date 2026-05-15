export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sh reveal">
          <div className="sh-eye">Career</div>
          <h2 className="sh-title">Experience &amp;<br />Education</h2>
        </div>
        <div className="exp-grid">
          {/* Timeline */}
          <div className="exp-tl">
            <div className="ei reveal">
              <div className="ei-track"><div className="ei-dot" /><div className="ei-line" /></div>
              <div>
                <div className="ei-date">2023 — Present</div>
                <div className="ei-role">Mobile Developer</div>
                <div className="ei-company">Freelance / Personal Projects <span className="ei-badge">Active</span></div>
                <div className="ei-body">Building production Flutter apps end-to-end — from UI to Laravel API integration. Focusing on clean architecture, GetX state management, and smooth mobile experiences.</div>
              </div>
            </div>
            <div className="ei reveal d1">
              <div className="ei-track"><div className="ei-dot" /><div className="ei-line" /></div>
              <div>
                <div className="ei-date">2023</div>
                <div className="ei-role">Mobile Developer Intern</div>
                <div className="ei-company">PT Humma Teknologi Indonesia <span className="ei-badge">Internship</span></div>
                <div className="ei-body">Contributed to real production mobile apps using Flutter in a professional agile team. Gained industry experience in code reviews, feature delivery, and collaborative development workflows.</div>
              </div>
            </div>
            <div className="ei reveal d2">
              <div className="ei-track">
                <div className="ei-dot" style={{ background: 'var(--violet)', boxShadow: '0 0 0 3px rgba(124,58,237,.15)' }} />
                <div className="ei-line" />
              </div>
              <div>
                <div className="ei-date">2021 — 2022</div>
                <div className="ei-role">Started Flutter Journey</div>
                <div className="ei-company" style={{ color: 'var(--violet)' }}>Self-taught</div>
                <div className="ei-body">Dived into Flutter and Dart from scratch. Built CRUD apps, integrated public REST APIs, explored Firebase, and began understanding clean architecture principles.</div>
              </div>
            </div>
          </div>

          {/* Education Cards */}
          <div className="edu-cards reveal rr">
            <div className="ec">
              <div className="ec-top"><span className="ec-ico">📱</span><div><div className="ec-name">Mobile Development</div><div className="ec-meta">Flutter · Dart · Cross-platform</div></div></div>
              <div className="ec-tag">Core Expertise</div>
            </div>
            <div className="ec">
              <div className="ec-top"><span className="ec-ico">🏢</span><div><div className="ec-name">PT Humma Teknologi Indonesia</div><div className="ec-meta">Mobile Developer Intern · 2023</div></div></div>
              <div className="ec-tag">Industry Experience</div>
            </div>
            <div className="ec">
              <div className="ec-top"><span className="ec-ico">⚙️</span><div><div className="ec-name">Backend Development</div><div className="ec-meta">Laravel · Firebase · Supabase · REST API</div></div></div>
              <div className="ec-tag">Supporting Stack</div>
            </div>
            <div className="ec">
              <div className="ec-top"><span className="ec-ico">🏗️</span><div><div className="ec-name">Clean Architecture</div><div className="ec-meta">MVC · MVVM · GetX · BLoC · DI patterns</div></div></div>
              <div className="ec-tag">Patterns &amp; Principles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
