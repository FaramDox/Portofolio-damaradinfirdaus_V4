import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">DA<span>MAR</span></a>
      <ul className={`nav-links ${isMobileOpen ? 'open' : ''}`} id="navLinks">
        <li><a href="#about" onClick={() => setIsMobileOpen(false)}>Tentang</a></li>
        <li><a href="#skills" onClick={() => setIsMobileOpen(false)}>Skill</a></li>
        <li><a href="#projects" onClick={() => setIsMobileOpen(false)}>Project</a></li>
        <li><a href="#experience" onClick={() => setIsMobileOpen(false)}>Pengalaman</a></li>
        <li><a href="#contact" onClick={() => setIsMobileOpen(false)}>Kontak</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Hire Me</a>
      <div className={`hamburger ${isMobileOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMobile}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
}

export default Navbar;
