import { GitHubIcon, WhatsAppIcon, GridIcon } from './icons';
import { useLang } from '../i18n.jsx';

export default function Hero({ user }) {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-inner">
          <div>
            <div className="badge-row">
              <span className="badge b-avail">{h.avail}</span>
              <span className="badge b-stack">{h.stack}</span>
            </div>
            <h1 className="hero-name">
              Naufal<span className="dim">Dwi Arifianto</span>
            </h1>
            <p className="hero-sub">
              Fullstack &amp; <strong>{h.subRole}</strong>
            </p>
            <p className="hero-desc">{h.desc}</p>
            <div className="hero-btns">
              <a href="#work" className="btn-primary">
                <GridIcon /> {h.btnWork}
              </a>
              <a href="https://wa.me/6282244089648" target="_blank" rel="noreferrer" className="btn-primary btn-wa">
                <WhatsAppIcon size={13} /> WhatsApp
              </a>
              <a href="https://github.com/Naufall18" target="_blank" rel="noreferrer" className="btn-outline">
                <GitHubIcon size={13} /> GitHub
              </a>
            </div>
          </div>

          {/* Profile card */}
          <div className="hero-card">
            <div className="card-main">
              <img
                src={`${import.meta.env.BASE_URL}avatar.jpg`}
                alt="Naufal Dwi Arifianto"
                className="avatar"
                loading="lazy"
              />
              <div className="card-name">Naufal Dwi Arifianto</div>
              <div className="card-role">Fullstack · Flutter · Laravel · Indonesia</div>
              <div className="status-box">
                <div className="st-top">
                  <div className="st-dot" />
                  <div className="st-label">{h.nowLabel}</div>
                </div>
                <div className="st-text">{h.nowText}</div>
              </div>
              <div className="cdivider" />
              <div className="cstats">
                <div className="cs">
                  <div className="cs-n">{user?.public_repos ?? '—'}</div>
                  <div className="cs-l">{h.repos}</div>
                </div>
                <div className="cs">
                  <div className="cs-n">{user?.followers ?? '—'}</div>
                  <div className="cs-l">{h.followers}</div>
                </div>
                <div className="cs">
                  <div className="cs-n">3+</div>
                  <div className="cs-l">{h.yrs}</div>
                </div>
              </div>
              <div className="ctags">
                <span className="ct ct-on">Flutter</span>
                <span className="ct ct-on">Dart</span>
                <span className="ct ct-on">Laravel</span>
                <span className="ct ct-on">React</span>
                <span className="ct ct-off">Firebase</span>
                <span className="ct ct-off">Supabase</span>
                <span className="ct ct-off">REST API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
