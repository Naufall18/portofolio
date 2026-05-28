import { useEffect, useState } from 'react';

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
      setDrawerOpen(false); // Close drawer after navigation
    }
  };

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <nav id="nav">
        <a className="nav-logo" href="#hero" onClick={(e) => smoothScroll(e, '#hero')}>
          Naufall
        </a>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => smoothScroll(e, '#about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => smoothScroll(e, '#skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => smoothScroll(e, '#projects')}>Projects</a></li>
          <li><a href="#experience" onClick={(e) => smoothScroll(e, '#experience')}>Experience</a></li>
          <li><a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="nav-cta">Contact</a></li>
        </ul>
        <button className="menu-btn" onClick={toggleDrawer} aria-label="Open menu">
          ☰
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-logo">Naufall</div>
          <button className="close-btn" onClick={closeDrawer} aria-label="Close menu">
            ✕
          </button>
        </div>
        <ul className="drawer-links">
          <li><a href="#about" onClick={(e) => smoothScroll(e, '#about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => smoothScroll(e, '#skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => smoothScroll(e, '#projects')}>Projects</a></li>
          <li><a href="#experience" onClick={(e) => smoothScroll(e, '#experience')}>Experience</a></li>
          <li><a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="nav-cta">Contact</a></li>
        </ul>
      </div>

      {/* Overlay */}
      <div className={`overlay ${drawerOpen ? 'show' : ''}`} onClick={closeDrawer} />
    </>
  );
}
