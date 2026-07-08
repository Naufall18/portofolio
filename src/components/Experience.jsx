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
                <div className="ei-date">2025 — Present</div>
                <div className="ei-role">Informatics Student</div>
                <div className="ei-company">UPN &quot;Veteran&quot; Jawa Timur <span className="ei-badge">1st Year</span></div>
                <div className="ei-body">Started my Informatics degree after graduating from SMKN 1 Pasuruan. Deepening data structures, algorithms, and software engineering foundations while continuing to ship real Flutter &amp; Laravel projects.</div>
              </div>
            </div>
            <div className="ei reveal d1">
              <div className="ei-track"><div className="ei-dot" /><div className="ei-line" /></div>
              <div>
                <div className="ei-date">2024 — Present</div>
                <div className="ei-role">Fullstack &amp; Mobile Developer</div>
                <div className="ei-company">Freelance / Personal Projects <span className="ei-badge">Active</span></div>
                <div className="ei-body">Shipping complete products end-to-end — Flutter apps, React dashboards, and Laravel APIs. Recently delivered Gerai Jasa (a full multi-vendor booking platform) and Velvoria, focusing on clean architecture and polished UX across every layer.</div>
              </div>
            </div>
            <div className="ei reveal d2">
              <div className="ei-track"><div className="ei-dot" /><div className="ei-line" /></div>
              <div>
                <div className="ei-date">2023</div>
                <div className="ei-role">Mobile Developer Intern</div>
                <div className="ei-company">PT Humma Teknologi Indonesia <span className="ei-badge">Internship</span></div>
                <div className="ei-body">Contributed to real production mobile apps using Flutter in a professional agile team. Gained industry experience in code reviews, feature delivery, and collaborative development workflows.</div>
              </div>
            </div>
            <div className="ei reveal d3">
              <div className="ei-track"><div className="ei-dot" /><div className="ei-line" /></div>
              <div>
                <div className="ei-date">2022 — 2025</div>
                <div className="ei-role">SMKN 1 Pasuruan</div>
                <div className="ei-company">Software Engineering (RPL)</div>
                <div className="ei-body">Vocational high school in Software Engineering. Learned programming fundamentals, taught myself Flutter &amp; Dart, and built CRUD apps with REST APIs, Firebase, and clean architecture principles.</div>
              </div>
            </div>
          </div>

          {/* Education Cards */}
          <div className="edu-cards reveal rr">
            <div className="ec">
              <div className="ec-top"><span className="ec-ico">🎓</span><div><div className="ec-name">UPN &quot;Veteran&quot; Jawa Timur</div><div className="ec-meta">Informatics · 1st Year · 2025</div></div></div>
              <div className="ec-tag">Current Education</div>
            </div>
            <div className="ec">
              <div className="ec-top"><span className="ec-ico">🏫</span><div><div className="ec-name">SMKN 1 Pasuruan</div><div className="ec-meta">Software Engineering (RPL) · 2025</div></div></div>
              <div className="ec-tag">Graduated</div>
            </div>
            <div className="ec">
              <div className="ec-top"><span className="ec-ico">🏢</span><div><div className="ec-name">PT Humma Teknologi Indonesia</div><div className="ec-meta">Mobile Developer Intern · 2023</div></div></div>
              <div className="ec-tag">Industry Experience</div>
            </div>
            <div className="ec">
              <div className="ec-top"><span className="ec-ico">📱</span><div><div className="ec-name">Mobile &amp; Backend</div><div className="ec-meta">Flutter · Dart · Laravel · REST API</div></div></div>
              <div className="ec-tag">Core Stack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
