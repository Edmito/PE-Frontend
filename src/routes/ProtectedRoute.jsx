import React from 'react';
import { Navigate } from 'react-router-dom';
import UserServices from '../services/UserService';

const userService = new UserServices();

const ProtectedRoutes = ({ children }) => {
  const usuarioAutenticado = userService.usuarioAutenticado();
  console.log('usuarioAutenticado', usuarioAutenticado);

  if (usuarioAutenticado) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
