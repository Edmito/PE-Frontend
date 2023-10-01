import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header
        userName={localStorage.getItem('name')}
        showWelcomeMessage={true}
      />
      <div className="content">
        <Sidebar />
        <div className="home">
          <h2>Bem-vindo ao Prontuário Eletrônico</h2>
          <p>
            Use a navegação lateral para acessar as diferentes seções do
            prontuário eletrônico e gerenciar as informações dos pacientes.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
