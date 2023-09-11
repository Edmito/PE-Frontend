import React from 'react';
import LogoutButton from '../LogoutButton/LogoutBotton'; // Importe o componente de LogoutButton
import './Header.css'

const Header = ({ userName }) => {
  return (
    <header className="header">
      <div className="title">Prontuário Eletrônico</div>
      <h1>Bem vindo {userName}</h1>
      <LogoutButton /> {/* Renderize o componente de LogoutButton */}
    </header>
  );
};

export default Header;
