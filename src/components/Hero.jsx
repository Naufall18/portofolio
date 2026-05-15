import { GitHubIcon, WhatsAppIcon, GridIcon } from './icons';

export default function Hero({ user }) {
  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-inner">
          <div>
            <div className="badge-row">
              <span className="badge b-avail">Open to work</span>
              <span className="badge b-stack">Flutter · Laravel · Firebase</span>
            </div>
            <h1 className="hero-name">
              Naufal<span className="dim">Dwi Arifianto</span>
            </h1>
            <p className="hero-sub">
              Mobile Developer &amp; <strong>Full-Stack Builder</strong>
            </p>
            <p className="hero-desc">
              I build <em>cross-platform mobile apps</em> with Flutter and power them with{' '}
              <em>Laravel backends</em>. Based in Indonesia — crafting experiences that feel
              native, fast, and polished.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn-dark">
                <GridIcon /> See My Work
              </a>
              <a href="https://wa.me/6282244089648" target="_blank" rel="noreferrer" className="btn-dark btn-wa">
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
              <div className="avatar">NDA</div>
              <div className="card-name">Naufal Dwi Arifianto</div>
              <div className="card-role">Mobile Dev · Flutter · Laravel · Indonesia</div>
              <div className="status-box">
                <div className="st-top">
                  <div className="st-dot" />
                  <div className="st-label">Currently working on</div>
                </div>
                <div className="st-text">
                  {user?.bio ? (
                    <strong>{user.bio}</strong>
                  ) : (
                    <>Building mobile apps with <strong>Flutter</strong> &amp; <strong>Laravel</strong>.</>
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
                  <div className="cs-n">2+</div>
                  <div className="cs-l">Yrs Exp</div>
                </div>
              </div>
              <div className="ctags">
                <span className="ct ct-blue">Flutter</span>
                <span className="ct ct-blue">Dart</span>
                <span className="ct ct-blue">Laravel</span>
                <span className="ct ct-gray">Firebase</span>
                <span className="ct ct-gray">Supabase</span>
                <span className="ct ct-gray">GetX</span>
                <span className="ct ct-gray">REST API</span>
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
