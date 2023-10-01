import React from 'react';
import LogoutButton from '../LogoutButton/LogoutBotton';
import './Header.css';

const Header = ({ userName, showWelcomeMessage = false }) => {
  return (
    <header className="header">
      <div className="title">Premaap</div>
      {showWelcomeMessage && <h2>Bem vindo {userName}</h2>}
      <LogoutButton />
    </header>
  );
};

export default Header;
