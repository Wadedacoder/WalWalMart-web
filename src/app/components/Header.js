// src/app/components/Header.js
'use client';

import { useContext, useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { useRouter } from 'next/navigation';
import Cart from './Cart';

const Header = () => {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const router = useRouter();


  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(isLoggedIn);
    if (!isLoggedIn) {
      router.push('/login'); // Redirect to login if not logged in
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear authentication state
    router.push('/login'); // Redirect to login page
  };

  return (
    <header className="header">
      <h1>Walwalmart</h1>
      <div className="header-right">
        <div className="cart-icon-container" onClick={() => setShowCart(!showCart)}>
          <FaShoppingCart size={24} />
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </div>
        {showCart && <Cart />}
        <div>
        {isLoggedIn && ( // Only show logout button if logged in
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
        </div>
      </div>
    </header>
  );
};

export default Header;