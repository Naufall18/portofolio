import { useEffect } from 'react';

export default function Navbar() {
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
    }
  };

  return (
    <nav id="nav">
      <a className="nav-logo" href="#hero" onClick={(e) => smoothScroll(e, '#hero')}>
        N<em>.</em>Dwi
      </a>
      <ul className="nav-links">
        <li><a href="#about" onClick={(e) => smoothScroll(e, '#about')}>About</a></li>
        <li><a href="#skills" onClick={(e) => smoothScroll(e, '#skills')}>Skills</a></li>
        <li><a href="#projects" onClick={(e) => smoothScroll(e, '#projects')}>Projects</a></li>
        <li><a href="#experience" onClick={(e) => smoothScroll(e, '#experience')}>Experience</a></li>
        <li><a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="nav-cta">Contact</a></li>
      </ul>
    </nav>
  );
}
