import React, { useState } from 'react';
import { FaHome, FaUser, FaCalendar, FaFile, FaMedkit, FaCog } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
  const [minimized, setMinimized] = useState(true);

  const toggleSidebar = () => {
    setMinimized(!minimized);
  };

  return (
    <div className={`sidebar ${minimized ? 'minimized' : ''}`} onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
      <nav>
        <ul className="nav-list">
        <li>
            <a href="/home"><FaHome/> {minimized ? null : 'Home'}</a>
          </li>
          <li>
            <a href="/pacientes"><FaUser /> {minimized ? null : 'Pacientes'}</a>
          </li>
          <li>
            <a href="/consultas"><FaCalendar /> {minimized ? null : 'Consultas'}</a>
          </li>
          <li>
            <a href="/relatorios"><FaFile /> {minimized ? null : 'Relatórios'}</a>
          </li>
          <li>
            <a href="/medicamentos"><FaMedkit /> {minimized ? null : 'Medicamentos'}</a>
          </li>
          <li>
            <a href="/configuracoes"><FaCog /> {minimized ? null : 'Configurações'}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
