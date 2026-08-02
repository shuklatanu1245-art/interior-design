import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Inspiration', path: '/inspiration' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'glass' : 'transparent'}`}>
      <div className="container nav-container">
        <Link to="/" className="brand">
          <Crown className="brand-icon text-gold" size={32} />
          <span className="brand-name">Lumina</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
