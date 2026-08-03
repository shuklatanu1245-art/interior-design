import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Gem, Clock, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home fade-in">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url('/hero.jpg')` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="slide-up" style={{animationDelay: '0.2s'}}>
            Redefining <span className="text-gold">Luxury</span> Living
          </h1>
          <p className="slide-up" style={{animationDelay: '0.4s'}}>
            Experience the royal standard of interior design. We craft spaces that reflect your prestige and elegance.
          </p>
          <div className="hero-cta slide-up" style={{animationDelay: '0.6s'}}>
            <Link to="/gallery" className="btn btn-primary">Explore Furniture</Link>
            <Link to="/contact" className="btn btn-outline">Book Consultation</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding why-choose-us">
        <div className="container">
          <h2 className="section-title">Why <span>Choose Us</span></h2>
          <div className="features-grid">
            <div className="glass-card feature-card">
              <Gem className="feature-icon text-gold" size={40} />
              <h3>Premium Quality</h3>
              <p>We source only the finest materials, from Italian marble to deep emerald velvet, ensuring long-lasting luxury.</p>
            </div>
            <div className="glass-card feature-card">
              <Shield className="feature-icon text-gold" size={40} />
              <h3>Royal Standard</h3>
              <p>Our designs are inspired by palatial elegance, offering a majestic feel to every corner of your home.</p>
            </div>
            <div className="glass-card feature-card">
              <Clock className="feature-icon text-gold" size={40} />
              <h3>Timeless Elegance</h3>
              <p>Trends fade, but true luxury is forever. We build interiors that remain breathtaking for generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Furniture Preview */}
      <section className="section-padding featured-preview">
        <div className="container">
          <div className="preview-header">
            <h2 className="section-title" style={{marginBottom: 0, textAlign: 'left'}}>Featured <span>Pieces</span></h2>
            <Link to="/gallery" className="btn btn-outline">View All</Link>
          </div>
          <div className="preview-grid">
            <div className="glass-card product-card">
              <div className="product-img" style={{ backgroundImage: `url('/sofa.jpg')` }}></div>
              <div className="product-info">
                <h3>Royal Navy Velvet Sofa</h3>
                <p className="text-gold">₹75,000</p>
              </div>
            </div>
            <div className="glass-card product-card">
              <div className="product-img" style={{ backgroundImage: `url('/chair.jpg')` }}></div>
              <div className="product-info">
                <h3>Emerald Crown Armchair</h3>
                <p className="text-gold">₹35,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-padding reviews">
        <div className="container">
          <h2 className="section-title">Client <span>Testimonials</span></h2>
          <div className="reviews-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass-card review-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--color-accent)" color="var(--color-accent)" />
                  ))}
                </div>
                <p className="review-text">
                  "Absolutely breathtaking work. Lumina transformed our living room into a royal palace. The attention to detail and premium materials are unmatched."
                </p>
                <div className="review-author">
                  <div className="author-avatar"></div>
                  <div>
                    <h4>Eleanor Rigby</h4>
                    <span className="text-gold">Beverly Hills, CA</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
