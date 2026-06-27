import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
          <li>
            <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="nav-cta">
              Let&apos;s talk
            </a>
          </li>
        </ul>
        <button className="menu-btn" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          ☰
        </button>
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
              Let&apos;s talk
            </a>
          </li>
        </ul>
      </div>

      <div className={`overlay ${drawerOpen ? 'show' : ''}`} onClick={() => setDrawerOpen(false)} />
    </>
  );
}
