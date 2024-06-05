// WelcomePage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
    <div>
      <div style={{ padding: '20px', backgroundColor: '#f2f2f2', borderRadius: '10px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>¡Bienvenido!</h1>
        {userData ? (
          <div style={{ marginBottom: '20px' }}>
            <p style={{ marginBottom: '10px' }}>Tu nombre es: <strong>{userData.name}</strong></p>
            <p style={{ marginBottom: '10px' }}>Tu correo electrónico es: <strong>{userData.email}</strong></p>
            <p style={{ marginBottom: '10px' }}>Tu nombre de usuario es: <strong>{userData.username}</strong></p>
            <p style={{ marginBottom: '10px' }}>Tu ciudad es: <strong>{userData.address.city}</strong></p>
            <p style={{ marginBottom: '40px' }}>Tu teléfono es: <strong>{userData.phone}</strong></p>
          </div>
        ) : (
          <p>No se han proporcionado datos de usuario.</p>
        )}

        <div>
          <button onClick={handleLogout} style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', marginRight: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Cerrar sesión</button>
          <button onClick={handleProfile} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Perfil de Usuario</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;



