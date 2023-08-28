import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './components/Login';
import Home from './pages/Home';
import { AuthProvider, useAuth } from './contexts/AuthContext'; // Certifique-se de importar o useAuth
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default App;
