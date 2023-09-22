// pages/Pacientes/PacienteCadastro.jsx
import React from 'react';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Footer from '../../../components/Footer/Footer';
import CadastrarCliente from '../../../components/CadastrarClientes/CadastrarCliente';
import './PacienteCadastro.css';

const PacienteCadastro = () => {
  return (
    <div className="conteiner-cadastro-paciente">
      <Header />
      <div className="content-cadastro">
      <Sidebar />
      <main>
        <CadastrarCliente />
      </main>
      </div>
      <Footer />
    </div>
  );
};

export default PacienteCadastro;
