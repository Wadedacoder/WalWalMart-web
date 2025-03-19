// src/services/api.js
const API_BASE_URL = 'https://your-api-endpoint.com'; // Replace with your API base URL

// Function to handle user login
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data; // Return the response data (e.g., token, user info)
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Function to fetch product data
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return data; // Return the product data
  } catch (error) {
    console.error('Fetch products error:', error);
    throw error;
  }
};

// Function to fetch user data (if needed)
export const fetchUserData = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    return data; // Return the user data
  } catch (error) {
    console.error('Fetch user data error:', error);
    throw error;
  }
};