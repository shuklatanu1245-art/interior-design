import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact fade-in">
      <div className="page-header" style={{ backgroundImage: `url('/hero.jpg')` }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1 className="slide-up">Get In <span className="text-gold">Touch</span></h1>
        </div>
      </div>

      <section className="section-padding">
        <div className="container contact-container">
          <div className="contact-info">
            <h2 className="mb-4">Contact <span className="text-gold">Information</span></h2>
            <p className="mb-4 text-muted">Ready to elevate your living space? Our experts are here to help you begin your journey to royal standard interior design.</p>
            
            <div className="info-item">
              <div className="icon-box glass-card">
                <MapPin className="text-gold" size={24} />
              </div>
              <div>
                <h3>Visit Our Showroom</h3>
                <p>123 Luxury Avenue, Beverly Hills, CA 90210</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-box glass-card">
                <Phone className="text-gold" size={24} />
              </div>
              <div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-box glass-card">
                <Mail className="text-gold" size={24} />
              </div>
              <div>
                <h3>Email Us</h3>
                <p>royal@lumina.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-card">
            <h2 className="mb-4">Send a <span className="text-gold">Message</span></h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Interior Design Consultation" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message <Send size={18} style={{marginLeft: '8px'}} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
