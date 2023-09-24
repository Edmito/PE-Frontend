import React from 'react';
import { Link } from 'react-router-dom';
import './UserList.css';

const PacientesList = ({ pacientes }) => {
  return (
    <div className="pacientes-list">
      <div className="titleTable">
        <h1>Lista de Pacientes</h1>
        <Link to="/paciente/new" className="link">
          Adicionar Novo Paciente
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>CPF</th>
            <th>Data Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{paciente.firstName}</td>
              <td>{paciente.lastName}</td>
              <td>{paciente.cpf}</td>
              <td>{paciente.dataNascimento}</td>
              <td>
                {/* Adicione botões de ação aqui, como editar e excluir */}
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PacientesList;
