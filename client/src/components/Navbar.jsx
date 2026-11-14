import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 's' : ''}>
      <div className="w">
        <Link className="logo" to="/">
          <img src="/logo.png" alt="Cliento" width="140" height="35" />
        </Link>
        <ul className={mobileOpen ? 'open' : ''}>
          <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'on' : '')}>Home</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'on' : '')}>Services</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'on' : '')}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'on' : '')}>Contact</NavLink></li>
        </ul>
        <button
          className="mb"
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
        <Link className="btn" to="/contact">Book a walkthrough</Link>
      </div>
    </nav>
  );
}

