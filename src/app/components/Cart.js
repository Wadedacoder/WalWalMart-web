// src/app/components/Cart.js
'use client';

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Link from 'next/link';

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-dropdown">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice}</p>
          <Link href="/checkout" className="checkout-button">
            Go to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;