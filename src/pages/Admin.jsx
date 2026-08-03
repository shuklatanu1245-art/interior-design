import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import './Admin.css';

const Admin = () => {
  const { isAuthenticated, logout, addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    category: 'Living Room',
    price: '',
    img: ''
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Format price if user didn't put ₹ symbol
    let formattedPrice = formData.price;
    if (!formattedPrice.startsWith('₹')) {
      formattedPrice = '₹' + formattedPrice;
    }
    
    addProduct({
      ...formData,
      price: formattedPrice
    });
    
    alert('Product added successfully!');
    setFormData({ name: '', category: 'Living Room', price: '', img: '' });
  };

  if (!isAuthenticated) return null;

  return (
    <div className="admin-page fade-in section-padding">
      <div className="container">
        <div className="admin-header">
          <h2 className="section-title" style={{marginBottom: 0}}>Admin <span>Dashboard</span></h2>
          <button onClick={logout} className="btn btn-outline">Logout</button>
        </div>

        <div className="glass-card admin-card">
          <h3>Add New Product</h3>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-group">
              <label>Product Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
                placeholder="e.g. Royal Gold Sofa"
              />
            </div>
            
            <div className="form-group">
              <label>Category</label>
              <select name="category" value={formData.category} onChange={handleInputChange}>
                <option value="Living Room">Living Room</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Dining">Dining</option>
              </select>
            </div>

            <div className="form-group">
              <label>Price (INR)</label>
              <input 
                type="text" 
                name="price" 
                value={formData.price} 
                onChange={handleInputChange} 
                required 
                placeholder="e.g. 75,000"
              />
            </div>

            <div className="form-group">
              <label>Product Image</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                required 
              />
              {formData.img && (
                <div className="img-preview" style={{ backgroundImage: `url(${formData.img})` }}></div>
              )}
            </div>

            <button type="submit" className="btn btn-primary">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
