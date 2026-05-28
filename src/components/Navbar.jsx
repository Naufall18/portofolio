import { useEffect, useState } from 'react';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      document.getElementById('nav')?.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

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
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {darkMode ? '☀️' : '🌙'}
        </button>
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
        <button className="drawer-theme-toggle" onClick={toggleTheme}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Overlay */}
      <div className={`overlay ${drawerOpen ? 'show' : ''}`} onClick={closeDrawer} />
    </>
  );
}
