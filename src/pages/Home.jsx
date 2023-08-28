import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Home.css' // Certifique-se de importar o useAuth

const Home = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth(); // Use o contexto

  const handleLogout = () => {
    setIsLoggedIn(false); // Marque o usuário como deslogado
  };

  return (
    <div>
        <div>
          <h2>Bem-vindo à Página Home</h2>
          <button onClick={handleLogout}>Sair</button> {/* Botão de sair */}
        </div>
    </div>
  );
};

export default Home;
