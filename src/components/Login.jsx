import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Importe o useAuth
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth(); // Use o contexto

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');

    if (!isValidEmail(email)) {
      setEmailError('Email inválido!');
    }

    if (password.length < 6) {
      setPasswordError('A senha deve conter pelo menos 6 caracteres!');
    }

    if (isValidEmail(email) && password.length >= 6) {
      // Simulação de autenticação
      if (email === 'user@example.com' && password === 'senha123') {
        setIsLoggedIn(true); // Atualize o estado de login usando o contexto
        navigate('/home');
      } else {
        setEmailError('Credenciais inválidas');
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <h2>Entrar no Sistema</h2>
      <input
        type="email"
        placeholder="exemplo@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <p className="error-message">{emailError}</p>}
      <input
        type="password"
        placeholder="Sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      {passwordError && <p className="error-message">{passwordError}</p>}
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
