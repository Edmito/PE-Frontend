import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login/Login';
import Home from '../pages/Home/Home';
import ProtectedRoutes from './ProtectedRoute';

const Routering = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoutes>
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </ProtectedRoutes>
        }
      />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Routering;
