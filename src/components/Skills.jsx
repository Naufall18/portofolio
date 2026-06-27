import { useRef } from 'react';
import useSkillBars from '../hooks/useSkillBars';

const SKILL_ITEMS = [
  { icon: '📱', name: 'Flutter & Dart', pills: ['Widgets', 'Animations', 'Custom Painter', 'Platform Channels', 'Responsive UI'], delay: 'd1' },
  { icon: '🗂️', name: 'State Management', pills: ['GetX', 'Riverpod', 'Provider', 'BLoC'], delay: 'd2' },
  { icon: '⚙️', name: 'Laravel Backend', pills: ['REST API', 'Eloquent ORM', 'Sanctum Auth', 'MySQL'], delay: 'd3' },
  { icon: '🌐', name: 'Web Frontend', pills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'], delay: 'd4' },
  { icon: '☁️', name: 'Cloud & Tools', pills: ['Firebase', 'Supabase', 'Git', 'Postman', 'Figma', 'VS Code'], delay: 'd5' },
];

const SKILL_BARS = [
  { name: 'Flutter / Dart', pct: 90 },
  { name: 'Mobile UI Implementation', pct: 88 },
  { name: 'State Management (GetX / Riverpod)', pct: 82 },
  { name: 'Laravel / REST API', pct: 75 },
  { name: 'React / TypeScript', pct: 72 },
  { name: 'Firebase / Supabase', pct: 70 },
  { name: 'Clean Architecture', pct: 78 },
];

export default function Skills() {
  const barsRef = useRef(null);
  useSkillBars(barsRef);

  return (
    <section id="skills">
      <div className="wrap">
        <div className="sh reveal">
          <div className="sh-eye">Tech Stack</div>
          <h2 className="sh-title">What I work with</h2>
          <p className="sh-sub">
            A focused stack built around shipping mobile experiences that feel native and
            backends that scale.
          </p>
        </div>
        <div className="skills-grid">
          <div className="skill-items">
            {SKILL_ITEMS.map((skill) => (
              <div key={skill.name} className={`ski reveal ${skill.delay}`}>
                <div className="ski-top">
                  <span className="ski-ico">{skill.icon}</span>
                  <span className="ski-name">{skill.name}</span>
                </div>
                <div className="ski-pills">
                  {skill.pills.map((pill) => (
                    <span key={pill} className="ski-pill">{pill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skill-bars reveal rr" id="skillBars" ref={barsRef}>
            {SKILL_BARS.map((bar) => (
              <div key={bar.name} className="sb">
                <div className="sb-top">
                  <span className="sb-name">{bar.name}</span>
                  <span className="sb-pct">{bar.pct}%</span>
                </div>
                <div className="sb-track">
                  <div className="sb-fill" data-w={bar.pct} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
