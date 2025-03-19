// src/App.js
import React from 'react';
import ProductList from '../components/ProductList';

// import css
import './app.css';

const products = [
  { id: 1, name: 'Laptop', quantity: 10, price: 1200 },
  { id: 2, name: 'Smartphone', quantity: 15, price: 800 },
  { id: 3, name: 'Headphones', quantity: 20, price: 150 },
];

function App() {
  return (
    <div className="App">
      <h1>Ecommerce Store</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;