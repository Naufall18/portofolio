import { GitHubIcon, LinkedInIcon, InstagramIcon, WhatsAppIcon } from './icons';
import { useLang } from '../i18n.jsx';

export default function About() {
  const { t } = useLang();
  const a = t.about;
  const info = a.info;
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <div className="sh reveal">
              <div className="sh-eye">{a.eye}</div>
              <h2 className="sh-title">
                {a.titlePre}<span className="grad">{a.grad}</span>
              </h2>
            </div>
            <div className="about-body">
              <p className="reveal d1">{a.p1}</p>
              <p className="reveal d2">{a.p2}</p>
              <p className="reveal d3">{a.p3}</p>
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
            <div className="ii"><div className="ii-ico">📍</div><div><div className="ii-l">{info.location[0]}</div><div className="ii-v">{info.location[1]}</div></div></div>
            <div className="ii"><div className="ii-ico">💼</div><div><div className="ii-l">{info.status[0]}</div><div className="ii-v"><span className="ii-badge">{info.status[1]}</span></div></div></div>
            <div className="ii"><div className="ii-ico">🎓</div><div><div className="ii-l">{info.education[0]}</div><div className="ii-v">{info.education[1]}</div></div></div>
            <div className="ii"><div className="ii-ico">📱</div><div><div className="ii-l">{info.mobile[0]}</div><div className="ii-v">{info.mobile[1]}</div></div></div>
            <div className="ii"><div className="ii-ico">🔧</div><div><div className="ii-l">{info.backend[0]}</div><div className="ii-v">{info.backend[1]}</div></div></div>
            <div className="ii"><div className="ii-ico">📞</div><div><div className="ii-l">{info.whatsapp[0]}</div><div className="ii-v"><a href="https://wa.me/6282244089648">{info.whatsapp[1]}</a></div></div></div>
            <div className="ii"><div className="ii-ico">📸</div><div><div className="ii-l">{info.instagram[0]}</div><div className="ii-v"><a href="https://www.instagram.com/pallarfnt_/" target="_blank" rel="noreferrer">{info.instagram[1]}</a></div></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
