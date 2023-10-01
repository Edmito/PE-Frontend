import React from 'react';
import { Link } from 'react-router-dom';
import './UserList.css';

const PacientesList = ({ pacientes }) => {
  const formatarDataNascimento = (dataNascimentoString) => {
    const dataNascimento = new Date(dataNascimentoString);
    const dia = dataNascimento.getDate().toString().padStart(2, '0');
    const mes = (dataNascimento.getMonth() + 1).toString().padStart(2, '0'); // Meses começam do zero
    const ano = dataNascimento.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const capitalizarTexto = (texto) => {
    // Converte a primeira letra para maiúscula e o restante para minúscula
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  };

  return (
    <div className="pacientes-list">
      <div className="titleTable">
        <h1>Lista de Pacientes</h1>
        <Link to="/paciente/new" className="link">
          Adicionar Novo Paciente
        </Link>
      </div>
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>SOBRENOME</th>
            <th>CPF</th>
            <th>DATA NASC.</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{capitalizarTexto(paciente.firstName)}</td>
              <td>{capitalizarTexto(paciente.lastName)}</td>
              <td>{paciente.cpf}</td>
              <td>{formatarDataNascimento(paciente.dataNascimento)}</td>
              <td>
                <button className="btn-edit">Editar</button>
                <button className="btn-delete">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default PacientesList;
