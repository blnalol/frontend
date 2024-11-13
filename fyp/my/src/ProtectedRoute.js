// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem('token'); // Check for token or authentication state
    return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
