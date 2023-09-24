import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoute';

import Login from '../components/Login/Login';
import Home from '../pages/Home/Home';
import Pacientes from '../pages/Pacientes/PacientesIndex';
import PacienteCadastro from '../pages/Pacientes/Cadastro/PacienteCadastro';
import AtualizarPaciente from '../pages/Pacientes/UpdatePaciente/AtualizarPaciente';
import AtestadoCadastro from '../pages/Pacientes/Atestados/AtestadoCadastro';
import LaudoCadastro from '../pages/Pacientes/Laudos/LaudoCadastro';
import AtestadoAtualizar from '../pages/Pacientes/Atestados/AtestadoAtualizar';
import LaudoAtualizar from '../pages/Pacientes/Laudos/LaudoAtualizar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Routering = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route path="/paciente/">
          <Route
            index
            element={
              <ProtectedRoutes>
                <Pacientes />
              </ProtectedRoutes>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoutes>
                <PacienteCadastro />
              </ProtectedRoutes>
            }
          />
        </Route>

        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default Routering;
