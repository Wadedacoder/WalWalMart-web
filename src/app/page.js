// src/app/page.js
import ProductList from './components/ProductList';

const products = [
  { id: 1, name: 'Laptop', quantity: 10, price: 1200 },
  { id: 2, name: 'Smartphone', quantity: 15, price: 800 },
  { id: 3, name: 'Headphones', quantity: 20, price: 150 },
];

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Ecommerce Store</h1>
      <ProductList products={products} />
    </main>
  );
}