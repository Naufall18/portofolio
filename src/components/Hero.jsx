import { GitHubIcon, WhatsAppIcon, GridIcon } from './icons';

export default function Hero({ user }) {
  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-inner">
          <div>
            <div className="badge-row">
              <span className="badge b-avail">Open to work</span>
              <span className="badge b-stack">Flutter · Laravel · React</span>
            </div>
            <h1 className="hero-name">
              Naufal<span className="dim">Dwi Arifianto</span>
            </h1>
            <p className="hero-sub">
              Fullstack &amp; <strong>Mobile Developer</strong>
            </p>
            <p className="hero-desc">
              I build <em>cross-platform mobile apps</em> with Flutter and ship the{' '}
              <em>web dashboards &amp; Laravel APIs</em> behind them. Based in Indonesia — crafting
              complete products that feel native, fast, and polished end to end.
            </p>
            <div className="hero-btns">
              <a href="#work" className="btn-primary">
                <GridIcon /> See my work
              </a>
              <a href="https://wa.me/6282244089648" target="_blank" rel="noreferrer" className="btn-primary btn-wa">
                <WhatsAppIcon size={13} /> WhatsApp
              </a>
              <a href="https://github.com/Naufall18" target="_blank" rel="noreferrer" className="btn-outline">
                <GitHubIcon size={13} /> GitHub
              </a>
            </div>
          </div>

          {/* Hero Card */}
          <div className="hero-card">
            <div className="card-main">
              <img
                src="https://github.com/Naufall18.png"
                alt="Naufal Dwi Arifianto"
                className="avatar"
                loading="lazy"
              />
              <div className="card-name">Naufal Dwi Arifianto</div>
              <div className="card-role">Fullstack · Flutter · Laravel · Indonesia</div>
              <div className="status-box">
                <div className="st-top">
                  <div className="st-dot" />
                  <div className="st-label">Currently building</div>
                </div>
                <div className="st-text">
                  {user?.bio ? (
                    <strong>{user.bio}</strong>
                  ) : (
                    <><strong>Bookly</strong> — a multi-vendor booking platform across mobile, web &amp; API.</>
                  )}
                </div>
              </div>
              <div className="cdivider" />
              <div className="cstats">
                <div className="cs">
                  <div className="cs-n">{user?.public_repos ?? '—'}</div>
                  <div className="cs-l">Repos</div>
                </div>
                <div className="cs">
                  <div className="cs-n">{user?.followers ?? '—'}</div>
                  <div className="cs-l">Followers</div>
                </div>
                <div className="cs">
                  <div className="cs-n">3+</div>
                  <div className="cs-l">Yrs Coding</div>
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
            <div className="float-card fc1">
              <div className="fc-ico">📱</div>
              <div>
                <div className="fc-t">Mobile First</div>
                <div className="fc-s">Flutter &amp; Dart</div>
              </div>
            </div>
            <div className="float-card fc2">
              <div className="fc-ico">⚡</div>
              <div>
                <div className="fc-t">Ex-PT Humma</div>
                <div className="fc-s">Mobile Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
