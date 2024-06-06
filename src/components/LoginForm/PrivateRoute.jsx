import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const authToken = localStorage.getItem('authToken');
    
    return authToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
