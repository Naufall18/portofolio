import { GitHubIcon, LinkedInIcon, InstagramIcon, WhatsAppIcon } from './icons';

export default function About() {
  return (
    <section id="about" className="light">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <div className="sh reveal">
              <div className="sh-eye">About me</div>
              <h2 className="sh-title">Building apps people love using</h2>
            </div>
            <div className="about-body">
              <p className="reveal d1">
                Hi, I'm <strong>Naufal Dwi Arifianto</strong> — a Mobile Developer from
                Indonesia with hands-on experience building cross-platform applications using{' '}
                <strong>Flutter &amp; Dart</strong>.
              </p>
              <p className="reveal d2">
                My stack centers on <strong>Flutter for mobile frontend</strong> — smooth
                animations, custom widgets, pixel-perfect UIs — paired with{' '}
                <strong>Laravel on the backend</strong>, and sometimes{' '}
                <strong>Firebase or Supabase</strong> depending on the project's needs.
              </p>
              <p className="reveal d3">
                I previously interned at <strong>PT Humma Teknologi Indonesia</strong> as a
                Mobile Developer, shipping real production apps in a professional agile team.
                That experience sharpened my sense for clean code, code reviews, and delivering
                quality features on time.
              </p>
            </div>
            <div className="about-socials reveal d4">
              <a href="https://github.com/Naufall18" target="_blank" rel="noreferrer" className="soc">
                <GitHubIcon /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/naufal-dwi-arifianto-3a12a1388/" target="_blank" rel="noreferrer" className="soc">
                <LinkedInIcon /> LinkedIn
              </a>
              <a href="https://www.instagram.com/pallarfnt_/" target="_blank" rel="noreferrer" className="soc">
                <InstagramIcon /> Instagram
              </a>
              <a href="https://wa.me/6282244089648" target="_blank" rel="noreferrer" className="soc soc-wa">
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </div>

          <div className="info-list reveal rr">
            <div className="ii"><div className="ii-ico">📍</div><div><div className="ii-l">Location</div><div className="ii-v">Indonesia</div></div></div>
            <div className="ii"><div className="ii-ico">💼</div><div><div className="ii-l">Status</div><div className="ii-v"><span className="ii-badge">🟢 Open to work</span></div></div></div>
            <div className="ii"><div className="ii-ico">🏢</div><div><div className="ii-l">Previous</div><div className="ii-v">PT Humma Teknologi Indonesia</div></div></div>
            <div className="ii"><div className="ii-ico">📱</div><div><div className="ii-l">Mobile Frontend</div><div className="ii-v">Flutter · Dart</div></div></div>
            <div className="ii"><div className="ii-ico">🔧</div><div><div className="ii-l">Backend</div><div className="ii-v">Laravel · Firebase · Supabase</div></div></div>
            <div className="ii"><div className="ii-ico">📞</div><div><div className="ii-l">WhatsApp</div><div className="ii-v"><a href="https://wa.me/6282244089648">+62 822-4408-9648</a></div></div></div>
            <div className="ii"><div className="ii-ico">📸</div><div><div className="ii-l">Instagram</div><div className="ii-v"><a href="https://www.instagram.com/pallarfnt_/" target="_blank" rel="noreferrer">@pallarfnt_</a></div></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
