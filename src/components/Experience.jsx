import { useLang } from '../i18n.jsx';

export default function Experience() {
  const { t } = useLang();
  const e = t.experience;

  return (
    <section id="experience">
      <div className="wrap">
        <div className="sh reveal">
          <div className="sh-eye">{e.eye}</div>
          <h2 className="sh-title">{e.title}</h2>
        </div>
        <div className="exp-grid">
          {/* Timeline */}
          <div className="exp-tl">
            {e.timeline.map((item, i) => (
              <div key={i} className={`ei reveal${i ? ` d${i}` : ''}`}>
                <div className="ei-track"><div className="ei-dot" /><div className="ei-line" /></div>
                <div>
                  <div className="ei-date">{item.date}</div>
                  <div className="ei-role">{item.role}</div>
                  <div className="ei-company">
                    {item.company} <span className="ei-badge">{item.badge}</span>
                  </div>
                  <div className="ei-body">{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Cards */}
          <div className="edu-cards reveal rr">
            {e.edu.map((c, i) => (
              <div key={i} className="ec">
                <div className="ec-top">
                  <span className="ec-ico">{c.ico}</span>
                  <div>
                    <div className="ec-name">{c.name}</div>
                    <div className="ec-meta">{c.meta}</div>
                  </div>
                </div>
                <div className="ec-tag">{c.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
