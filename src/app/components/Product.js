// src/components/Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;