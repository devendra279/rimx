import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    const response = await fetch('https://apirmix.vercel.app/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      setUser(data.user);
      
      // Redirect based on role
      switch(data.user.role) {
        case 'admin': navigate('../pages/AdminPanel'); break;
        case 'project_manager': navigate('../pages/ManagerPanel'); break;
        case 'employee': navigate('../pages/EmployeePanel'); break;
        default: navigate('/');
      }
    } else {
      throw new Error(data.error || 'Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);