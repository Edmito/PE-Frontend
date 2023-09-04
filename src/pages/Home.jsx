import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Home.css'; // Certifique-se de importar o useAuth

const Home = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth(); // Use o contexto

  const handleLogout = () => {
    setIsLoggedIn(false); // Marque o usuário como deslogado
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="title">Prontuário Eletrônico</div>
        <button className="logout-button" onClick={handleLogout}>
          Sair
        </button>
      </header>
      <div className="content">
        <div className="sidebar">
          <nav>
            <ul className="nav-list">
              <li>
                <a href="/pacientes">Pacientes</a>
              </li>
              <li>
                <a href="/consultas">Consultas</a>
              </li>
              <li>
                <a href="/medicamentos">Medicamentos</a>
              </li>
              <li>
                <a href="/configuracoes">Configurações</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="home">
          <h2>Bem-vindo ao Prontuário Eletrônico</h2>
          <p>
            O Prontuário Eletrônico é uma ferramenta poderosa para gerenciar
            informações de pacientes de forma eficaz e segura.
          </p>

          <h3>Recursos Principais:</h3>
          <ul>
            <li>Registro de informações de pacientes</li>
            <li>Histórico médico detalhado</li>
            <li>Prescrição de medicamentos</li>
            <li>Agendamento de consultas</li>
          </ul>

          <p>
            Use a navegação lateral para acessar as diferentes seções do
            prontuário eletrônico e gerenciar as informações dos pacientes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
