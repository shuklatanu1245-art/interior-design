import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const defaultProducts = [
  { id: 1, name: 'Royal Navy Velvet Sofa', category: 'Living Room', price: '₹75,000', img: '/sofa.jpg' },
  { id: 2, name: 'Emerald Crown Armchair', category: 'Living Room', price: '₹35,000', img: '/chair.jpg' },
  { id: 3, name: 'Majestic King Bed', category: 'Bedroom', price: '₹95,000', img: '/bedroom.jpg' },
  { id: 4, name: 'Gold Accent Coffee Table', category: 'Living Room', price: '₹25,000', img: '/hero.jpg' },
  { id: 5, name: 'Oak Wood Dining Table', category: 'Dining', price: '₹65,000', img: '/dining_table.jpg' },
  { id: 6, name: 'Modern Minimalist Chandelier', category: 'Living Room', price: '₹18,000', img: '/chandelier.jpg' },
  { id: 7, name: 'Luxury Tufted Bench', category: 'Bedroom', price: '₹12,000', img: '/tufted_bench.jpg' },
  { id: 8, name: 'Velvet Dining Chair', category: 'Dining', price: '₹8,500', img: '/dining_chair.jpg' },
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('interior_products');
    if (saved) {
      return JSON.parse(saved);
    }
    return defaultProducts;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('admin_auth') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('interior_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('admin_auth', isAuthenticated);
  }, [isAuthenticated]);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const login = (password) => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, isAuthenticated, login, logout }}>
      {children}
    </ProductContext.Provider>
  );
};
