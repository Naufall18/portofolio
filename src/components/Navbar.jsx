import { useEffect, useState } from 'react';
import { useLang } from '../i18n.jsx';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t, lang, setLang } = useLang();

  const LINKS = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#work', label: t.nav.work },
    { href: '#experience', label: t.nav.experience },
  ];

  useEffect(() => {
    const onScroll = () => {
      document.getElementById('nav')?.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const smoothScroll = (e, href) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setDrawerOpen(false);
    }
  };

  const LangToggle = () => (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        className={lang === 'id' ? 'lt-on' : ''}
        onClick={() => setLang('id')}
        aria-pressed={lang === 'id'}
      >
        ID
      </button>
      <button
        className={lang === 'en' ? 'lt-on' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );

  return (
    <>
      <nav id="nav">
        <a className="nav-logo" href="#hero" onClick={(e) => smoothScroll(e, '#hero')}>
          Naufal<em>.</em>
        </a>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => smoothScroll(e, l.href)}>{l.label}</a>
            </li>
          ))}
          <li><LangToggle /></li>
          <li>
            <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="nav-cta">
              {t.nav.cta}
            </a>
          </li>
        </ul>
        <div className="nav-mobile">
          <LangToggle />
          <button className="menu-btn" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            ☰
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-logo">Naufal<em>.</em></div>
          <button className="close-btn" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            ✕
          </button>
        </div>
        <ul className="drawer-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => smoothScroll(e, l.href)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="nav-cta">
              {t.nav.cta}
            </a>
          </li>
        </ul>
      </div>

      <div className={`overlay ${drawerOpen ? 'show' : ''}`} onClick={() => setDrawerOpen(false)} />
    </>
  );
}
