// src/app/components/Header.js
'use client';

import { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import Cart from './Cart';

const Header = () => {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="header">
      <h1>Ecommerce Store</h1>
      <div className="cart-icon-container" onClick={() => setShowCart(!showCart)}>
        <FaShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="cart-badge">{cart.length}</span>
        )}
      </div>
      {showCart && <Cart />}
    </header>
  );
};

export default Header;