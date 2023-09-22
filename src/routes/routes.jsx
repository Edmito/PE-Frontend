import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login/Login';
import Home from '../pages/Home/Home';
import ProtectedRoutes from './ProtectedRoute';
import Pacientes from '../pages/Pacientes/PacientesIndex';
import PacienteCadastro from '../pages/Pacientes/PacienteCadastro';
import AtualizarPaciente from '../pages/Pacientes/AtualizarPaciente';
import AtestadoCadastro from '../pages/Pacientes/AtestadoCadastro';
import LaudoCadastro from '../pages/Pacientes/LaudoCadastro';
import AtestadoAtualizar from '../pages/Pacientes/AtestadoAtualizar';
import LaudoAtualizar from '../pages/Pacientes/LaudoAtualizar';
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
