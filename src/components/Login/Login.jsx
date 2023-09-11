import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserServices from '../../services/UserService';
import './Login.css';

const userServices = new UserServices();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');

    if (!isValidEmail(email)) {
      setEmailError('Email inválido!');
    }

    if (password.length < 6) {
      setPasswordError('A senha deve conter pelo menos 6 caracteres!');
    }

    // Simulação de autenticação
    if (isValidEmail(email) && password.length >= 6) {
      try {
        const res = await userServices.login({ email, password });
        console.log('response do Login', res);

        if (res) {
          navigate('/home');
        } else {
          setEmailError('Credenciais inválidas');
        }
      } catch (error) {
        console.error('Erro de autenticação:', error);
        if (error.response) {
          setEmailError(error.response.data.error);
        } else {
          setEmailError('Erro Interno');
        }
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <img
          className="icon-medical"
          src={'./src/images/icon/icon-doctor.png'}
          alt="Prontuario Eletronico"
        />
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
    </div>
  );
};

export default Login;
