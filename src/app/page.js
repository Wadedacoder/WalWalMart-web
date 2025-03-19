// src/app/page.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchProducts } from '../services/api'; // Import the fetchProducts function
import ProductList from './components/ProductList';

export default function Home() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/login'); // Redirect to login if not logged in
    } else {
      // Fetch product data
      const getProducts = async () => {
        try {
          const data = await fetchProducts();
          setProducts(data); // Set the product data in state
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      getProducts();
    }
  }, [router]);

  return (
    <main>
      <h1>Welcome to the Ecommerce Store</h1>
      <ProductList products={products} />
    </main>
  );
}