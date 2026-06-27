import { GitHubIcon, LinkedInIcon, InstagramIcon, WhatsAppIcon } from './icons';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <div className="sh reveal">
              <div className="sh-eye">About me</div>
              <h2 className="sh-title">
                Building apps people <span className="grad">love using</span>
              </h2>
            </div>
            <div className="about-body">
              <p className="reveal d1">
                Hi, I'm <strong>Naufal Dwi Arifianto</strong> — a Fullstack &amp; Mobile Developer
                from Indonesia who builds complete products, from the{' '}
                <strong>Flutter app in your hand</strong> to the{' '}
                <strong>Laravel API and React dashboard</strong> behind it.
              </p>
              <p className="reveal d2">
                My core is <strong>Flutter &amp; Dart</strong> — smooth animations, custom widgets,
                pixel-perfect UIs and clean architecture. On the backend I work with{' '}
                <strong>Laravel</strong>, <strong>REST APIs</strong>, and{' '}
                <strong>Firebase / Supabase</strong> depending on what the project needs.
              </p>
              <p className="reveal d3">
                I previously interned at <strong>PT Humma Teknologi Indonesia</strong> as a Mobile
                Developer, shipping real production apps in a professional agile team — sharpening
                my sense for clean code, reviews, and delivering quality on time.
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
            <div className="ii"><div className="ii-ico">📱</div><div><div className="ii-l">Mobile</div><div className="ii-v">Flutter · Dart</div></div></div>
            <div className="ii"><div className="ii-ico">🔧</div><div><div className="ii-l">Backend &amp; Web</div><div className="ii-v">Laravel · React · Supabase</div></div></div>
            <div className="ii"><div className="ii-ico">📞</div><div><div className="ii-l">WhatsApp</div><div className="ii-v"><a href="https://wa.me/6282244089648">+62 822-4408-9648</a></div></div></div>
            <div className="ii"><div className="ii-ico">📸</div><div><div className="ii-l">Instagram</div><div className="ii-v"><a href="https://www.instagram.com/pallarfnt_/" target="_blank" rel="noreferrer">@pallarfnt_</a></div></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
