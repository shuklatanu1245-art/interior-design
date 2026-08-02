import React from 'react';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <Crown className="text-gold" size={32} />
            <span className="brand-name">Lumina</span>
          </Link>
          <p className="footer-desc">
            Elevating spaces with royal elegance and modern luxury. Your dream home awaits.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Furniture Gallery</Link></li>
            <li><Link to="/inspiration">Inspiration</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>123 Luxury Avenue, Beverly Hills, CA</p>
          <p>Email: royal@lumina.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          
          <div className="social-links">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">X</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lumina Royal Interiors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
