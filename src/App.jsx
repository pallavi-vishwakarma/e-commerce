import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import axios from 'axios';
import './index.css';

const App = () => {
  
  const [cart, setCart] = useState([]);// Cart state




  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear cart after checkout
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
       {/* Navbar */}
       <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/">My E-Commerce</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Categories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#electronics">Electronics</a>
                  <a className="dropdown-item" href="#fashion">Fashion</a>
                  <a className="dropdown-item" href="#home">Home Appliances</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cart">Cart ({cart.length})</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#checkout">Checkout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    {/* Main Content */}
    <div className="container mt-4">
        <h1>Welcome to My E-Commerce Site</h1>

    {/* <div className="container">
      <h1 className="text-center mt-4">E-Commerce</h1> */}

      <div className="row">
        <div className="col-md-8">
          {/* Product List with pagination and loader */}
          <ProductList addToCart={addToCart} />
        </div>

        <div className="col-md-4">
          {/* Cart Summary */}
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>

      
     {/* Checkout Section */}
     <section id="checkout" className="mt-4">
          <h2>Checkout</h2>
          <Checkout cart={cart} clearCart={clearCart} />
        </section>
        </div>
         {/* Footer */}
      <footer className="footer mt-4">
        <div className="container">
          <p>&copy; 2024 My E-Commerce. All Rights Reserved. <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </div>
      </footer>
        </div>
  );
};

export default App;
