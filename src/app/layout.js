// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Walwalmart',
  description: 'A simple eCommerce store built with Next.js',
  icon: '/favicon.ico',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}