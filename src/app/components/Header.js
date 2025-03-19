// src/app/components/Header.js
'use client'; // Mark this as a Client Component

import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <h1>Ecommerce Store</h1>
      <div className="cart-icon-container">
        <FaShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="cart-badge">{cart.length}</span>
        )}
      </div>
    </header>
  );
};

export default Header;