const API_URL = 'https://moodtracker-2q4o.onrender.com';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({
      error: 'An unknown error occurred'
    }));
    throw new Error(error.error || 'Request failed');
  }
  return response.json();
};

// Common headers for all requests
const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
});

export async function register(data) {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: getHeaders(),
      credentials: 'include',
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Register error:', error);
    throw error;
  }
}

export async function login(data) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: getHeaders(),
      credentials: 'include',
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

export async function logout() {
  try {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      headers: getHeaders(),
      credentials: 'include',
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
}

export async function getProfile() {
  try {
    const response = await fetch(`${API_URL}/auth/profile`, {
      method: 'GET',
      headers: getHeaders(),
      credentials: 'include',
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Get profile error:', error);
    throw error;
  }
}

export async function createMoodEntry(data) {
  try {
    const response = await fetch(`${API_URL}/moods`, {
      method: 'POST',
      headers: getHeaders(),
      credentials: 'include',
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Create mood entry error:', error);
    throw error;
  }
}

export async function getMoodEntries() {
  try {
    const response = await fetch(`${API_URL}/moods`, {
      method: 'GET',
      headers: getHeaders(),
      credentials: 'include',
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Get mood entries error:', error);
    throw error;
  }
}