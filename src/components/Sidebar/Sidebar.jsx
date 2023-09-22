import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  FaHome,
  FaUser,
  FaCalendar,
  FaFile,
  FaUsersCog,
  FaCog,
} from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
  const [minimized, setMinimized] = useState(true);

  const toggleSidebar = () => {
    setMinimized(!minimized);
  };

  return (
    <div
      className={`sidebar ${minimized ? 'minimized' : ''}`}
      onMouseEnter={toggleSidebar}
      onMouseLeave={toggleSidebar}
    >
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/home">
              <FaHome /> {minimized ? null : 'Home'}
            </Link>
          </li>
          <li>
            <Link to="/paciente">
              <FaUser /> {minimized ? null : 'Pacientes'}
            </Link>
          </li>
          <li>
            <Link to="/consultas">
              <FaCalendar /> {minimized ? null : 'Consultas'}
            </Link>
          </li>
          <li>
            <Link to="/relatorios">
              <FaFile /> {minimized ? null : 'Relatórios'}
            </Link>
          </li>
          <li>
            <Link to="/colaboradores">
              <FaUsersCog /> {minimized ? null : 'Colaboradores'}
            </Link>
          </li>
          <li>
            <Link to="/configuracoes">
              <FaCog /> {minimized ? null : 'Configurações'}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
