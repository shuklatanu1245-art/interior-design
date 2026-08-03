import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Living Room', 'Bedroom', 'Dining'];
  
  const products = [
    { id: 1, name: 'Royal Navy Velvet Sofa', category: 'Living Room', price: '₹75,000', img: '/sofa.jpg' },
    { id: 2, name: 'Emerald Crown Armchair', category: 'Living Room', price: '₹35,000', img: '/chair.jpg' },
    { id: 3, name: 'Majestic King Bed', category: 'Bedroom', price: '₹95,000', img: '/bedroom.jpg' },
    { id: 4, name: 'Gold Accent Coffee Table', category: 'Living Room', price: '₹25,000', img: '/hero.jpg' },
  ];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="gallery fade-in">
      <div className="page-header" style={{ backgroundImage: `url('/chair.jpg')` }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1 className="slide-up">Premium <span className="text-gold">Furniture</span> Gallery</h1>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="filters">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="glass-card product-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="product-img" style={{ backgroundImage: `url(${product.img})` }}></div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="product-footer">
                    <p className="text-gold price">{product.price}</p>
                    <button className="btn btn-outline btn-sm">Details</button>
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

export default Gallery;
