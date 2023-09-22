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
          path="/*"
          element={
            <ProtectedRoutes>
              <Routes>
                <Route path="/home/*" element={<Home />} />

                <Route
                  path="/paciente/*"
                  element={
                    <Routes>
                      <Route index element={<Pacientes />} />
                      <Route path="cadastrar" element={<PacienteCadastro />} />
                      <Route
                        path="update/:pacienteId"
                        element={<AtualizarPaciente />}
                      />
                      <Route path="atestados">
                        <Route index element={<AtestadoCadastro />} />
                        <Route
                          path="update/:atestadoId"
                          element={<AtestadoAtualizar />}
                        />
                      </Route>
                      <Route path="laudos">
                        <Route index element={<LaudoCadastro />} />
                        <Route
                          path="update/:laudoId"
                          element={<LaudoAtualizar />}
                        />
                      </Route>
                    </Routes>
                  }
                />
              </Routes>
            </ProtectedRoutes>
          }
        />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default Routering;
