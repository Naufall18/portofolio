import { WhatsAppIcon, LinkedInIcon, GitHubIcon, InstagramIcon } from './icons';
import { useLang } from '../i18n.jsx';

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-card reveal">
          <div className="contact-grid">
            <div>
              <div className="sh-eye">{c.eye}</div>
              <p className="cq">{c.cq}</p>
              <p className="sh-sub">{c.sub}</p>
            </div>
            <div className="clinks">
              <a href="https://wa.me/6282244089648" target="_blank" rel="noreferrer" className="cl">
                <div className="cl-ico"><WhatsAppIcon size={20} /></div>
                <div><div className="cl-l">WhatsApp</div><div className="cl-v">+62 822-4408-9648</div></div>
                <span className="cl-arr">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/naufal-dwi-arifianto-3a12a1388/" target="_blank" rel="noreferrer" className="cl">
                <div className="cl-ico"><LinkedInIcon size={20} /></div>
                <div><div className="cl-l">LinkedIn</div><div className="cl-v">Naufal Dwi Arifianto</div></div>
                <span className="cl-arr">↗</span>
              </a>
              <a href="https://github.com/Naufall18" target="_blank" rel="noreferrer" className="cl">
                <div className="cl-ico"><GitHubIcon size={20} /></div>
                <div><div className="cl-l">GitHub</div><div className="cl-v">@Naufall18</div></div>
                <span className="cl-arr">↗</span>
              </a>
              <a href="https://www.instagram.com/pallarfnt_/" target="_blank" rel="noreferrer" className="cl">
                <div className="cl-ico"><InstagramIcon size={20} /></div>
                <div><div className="cl-l">Instagram</div><div className="cl-v">@pallarfnt_</div></div>
                <span className="cl-arr">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
