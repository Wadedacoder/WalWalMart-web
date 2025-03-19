// src/app/login/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../services/api'; // Import the login function
import styles from './login.module.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Call the login API
      const data = await login(username, password);

      // Save the token or user data to localStorage (or context)
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('token', data.token); // Assuming the API returns a token

      // Redirect to the home page after successful login
      router.push('/');
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
}