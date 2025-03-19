// src/app/components/ProductList.js
'use client'; // Mark this as a Client Component

import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;