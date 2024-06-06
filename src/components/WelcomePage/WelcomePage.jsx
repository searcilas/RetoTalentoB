import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state?.user;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
  };

  const handleProfile = () => {
    navigate('/perfil', { state: { user: userData } });
  };

  return (
    <div className="wrapper">
      <h1>¡Bienvenido!</h1>
      <div className="user-info">
        {userData ? (
          <>
            <p><strong>Tu nombre es:</strong> {userData.name}</p>
            <p><strong>Tu correo electrónico es:</strong> {userData.email}</p>
            <p><strong>Tu nombre de usuario es:</strong> {userData.username}</p>
            <p><strong>Tu ciudad es:</strong> {userData.address.city}</p>
            <p><strong>Tu teléfono es:</strong> {userData.phone}</p>
          </>
        ) : (
          <p>No se han proporcionado datos de usuario.</p>
        )}
      </div>
      <div className="button-container">
        <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
        <button onClick={handleProfile} className="profile-button">Perfil de Usuario</button>
      </div>
    </div>
  );
};

export default WelcomePage;



