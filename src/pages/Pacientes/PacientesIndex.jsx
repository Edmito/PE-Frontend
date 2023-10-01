import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import PacientesList from '../../components/UsersList/UserList';
import UserServices from '../../services/UserService';
import './PacientesIndex.css';

const Pacientes = () => {
  const userServices = new UserServices();

  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    userServices
      .listar()
      .then((response) => {
        // Verificando se a resposta da API contém a lista de pacientes
        if (response.data) {
          console.log(response.data);
          setPacientes(response.data);
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar lista de pacientes:', error);
      });
  }, []);

  return (
    <div className="container-pacientes">
      <Header />
      <div className="content-pacientes">
        <Sidebar />
        <main>
          <PacientesList pacientes={pacientes} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Pacientes;
