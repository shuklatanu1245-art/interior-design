import React from 'react';
import { Award, Users, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about fade-in">
      <div className="page-header" style={{ backgroundImage: `url('/hero.jpg')` }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1 className="slide-up">About <span className="text-gold">Lumina</span></h1>
        </div>
      </div>

      <section className="section-padding">
        <div className="container about-content">
          <div className="about-text glass-card p-4">
            <h2>Crafting <span className="text-gold">Royal Standard</span> Living Spaces</h2>
            <p>
              Since 2010, Lumina has been at the forefront of luxury interior design. We believe that your home should be your sanctuary—a place that exudes elegance, comfort, and unparalleled prestige.
            </p>
            <p>
              Our team of master craftsmen, visionary architects, and elite interior designers work tirelessly to bring your grandest visions to life. From selecting the finest Italian marbles to custom-stitching emerald velvet sofas, every detail is perfected to the royal standard.
            </p>
          </div>
          <div className="about-image">
            <div className="img-frame glass-card">
              <div className="img-inner" style={{ backgroundImage: `url('/sofa.jpg')` }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-darker">
        <div className="container">
          <h2 className="section-title">Our <span>Values</span></h2>
          <div className="values-grid">
            <div className="glass-card value-card">
              <Award className="text-gold mb-2" size={40} />
              <h3>Excellence</h3>
              <p>Compromise is not in our vocabulary. We demand excellence in every stitch, polish, and placement.</p>
            </div>
            <div className="glass-card value-card">
              <Heart className="text-gold mb-2" size={40} />
              <h3>Passion</h3>
              <p>We are deeply passionate about design and the emotional impact of a beautifully curated space.</p>
            </div>
            <div className="glass-card value-card">
              <Users className="text-gold mb-2" size={40} />
              <h3>Collaboration</h3>
              <p>Your vision is our blueprint. We work closely with our clients to ensure their personality shines through.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
