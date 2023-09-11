import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Prontuário Eletrônico</p>
        <p>Seu texto de direitos autorais ou informações adicionais aqui.</p>
      </div>
    </footer>
  );
};

export default Footer;
