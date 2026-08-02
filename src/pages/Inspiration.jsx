import React from 'react';
import './Inspiration.css';

const Inspiration = () => {
  const ideas = [
    { id: 1, title: 'The Emerald Lounge', desc: 'Deep greens mixed with gold accents create a moody, sophisticated living space.', img: '/hero.jpg' },
    { id: 2, title: 'Royal Slumber', desc: 'A master bedroom designed for royalty, featuring velvet textures and ambient lighting.', img: '/bedroom.jpg' },
    { id: 3, title: 'Minimalist Majesty', desc: 'Clean lines meet premium materials for a modern take on luxury.', img: '/sofa.jpg' },
  ];

  return (
    <div className="inspiration fade-in">
      <div className="page-header" style={{ backgroundImage: `url('/bedroom.jpg')` }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1 className="slide-up">Design <span className="text-gold">Inspiration</span></h1>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="ideas-grid">
            {ideas.map((idea, index) => (
              <div key={idea.id} className={`idea-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="idea-img-container glass-card">
                  <div className="idea-img" style={{ backgroundImage: `url(${idea.img})` }}></div>
                </div>
                <div className="idea-content">
                  <h2 className="text-gold">{idea.title}</h2>
                  <p>{idea.desc}</p>
                  <button className="btn btn-outline mt-3">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inspiration;
