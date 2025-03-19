// src/app/checkout/page.js
'use client';

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useRouter } from 'next/navigation'
import styles from './checkout.module.css'; // Import the CSS module

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const router = useRouter();

  const handleBuy = () => {
    alert('Thank you for your purchase!');
    clearCart(); // Clear the cart after purchase
    router.push('/'); // Redirect to the home page
    
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className={styles.checkoutPage}>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cart.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <p className={styles.totalPrice}>Total: ${totalPrice}</p>
          <button className={styles.buyButton} onClick={handleBuy}>
            Buy Now
          </button>
        </>
      )}
    </main>
  );
}