import  { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../lib/api';
import PropTypes from 'prop-types';



const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   api.getProfile()
  //     .then(data => setUser(data.user))
  //     .catch(() => setUser(null))
  //     .finally(() => setLoading(false));
  // }, []);


  useEffect(() => {
    let mounted = true;
  
    const getProfile = async () => {
      try {
        setLoading(true);
        const data = await api.getProfile();
        if (mounted) {
          setUser(data.user);
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        if (mounted) {
          setUser(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };
  
    getProfile();
  
    return () => {
      mounted = false;
    };
  }, []);


  
  const login = async (email, password) => {
    const data = await api.login({ email, password });
    setUser(data.user);
    navigate('/');
  };

  const register = async (name, email, password) => {
    const data = await api.register({ name, email, password });
    setUser(data.user);
    navigate('/');
  };

  const logout = async () => {
    await api.logout();
    setUser(null);
    navigate('/Dashboard');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  