import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Optional context hook

const ProtectedRoute = () => {
  const { currentUser } = useAuth(); // Replace with your auth logic

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
