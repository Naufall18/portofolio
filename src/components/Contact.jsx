import { WhatsAppIcon, LinkedInIcon, GitHubIcon, InstagramIcon } from './icons';

export default function Contact() {
  return (
    <section id="contact" className="dark">
      <div className="wrap">
        <div className="contact-grid">
          <div className="reveal">
            <div className="sh-eye">Contact</div>
            <p className="cq">
              Have a project?<br />Let&apos;s <span>build it</span><br />together.
            </p>
            <p className="sh-sub">
              Open to freelance, part-time, and full-time opportunities. I respond fast —
              reach out anytime.
            </p>
          </div>
          <div className="clinks reveal rr">
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
    </section>
  );
}
