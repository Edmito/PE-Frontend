import React from 'react';
import UserServices from '../../services/UserService';
import { useNavigate } from 'react-router-dom';
import './LogoutBotton.css'

const LogoutButton = () => {
  const userService = new UserServices();
  const navigate = useNavigate();

  const handleLogout = () => {
    userService.logout();
    navigate('/login');
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Sair
    </button>
  );
};

export default LogoutButton;
