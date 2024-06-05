import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UserPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state?.user;
  const [editable, setEditable] = useState(false);
  const [editedUserData, setEditedUserData] = useState(userData);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    // Aquí puedes enviar los datos editados a la API si es necesario
    console.log('Datos editados:', editedUserData);
    setEditable(false);
    // Actualizar userData con los datos editados solo visualmente
    location.state.user = { ...editedUserData };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({
      ...editedUserData,
      [name]: value
    });
  };

  return (
    <div>
      <div style={{ padding: '20px', backgroundColor: '#f2f2f2', borderRadius: '10px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>¡Bienvenido!</h1>
        {editable ? (
          <div style={{ marginBottom: '20px' }}>
            <p style={{ marginBottom: '10px' }}>Nombre: <input type="text" name="name" value={editedUserData.name} onChange={handleChange} /></p>
            <p style={{ marginBottom: '10px' }}>Nombre de usuario: <input type="text" name="username" value={editedUserData.username} onChange={handleChange} /></p>
            <p style={{ marginBottom: '10px' }}>Ciudad: <input type="text" name="city" value={editedUserData.address.city} onChange={handleChange} /></p>
            <p style={{ marginBottom: '40px' }}>Teléfono: <input type="text" name="phone" value={editedUserData.phone} onChange={handleChange} /></p>
            <button onClick={handleSave} style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginRight: '10px' }}>Guardar</button>
            <button onClick={() => setEditable(false)} style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Cancelar</button>
          </div>
        ) : (
          <div style={{ marginBottom: '20px' }}>
            <p style={{ marginBottom: '10px' }}>Nombre: <strong>{userData.name}</strong></p>
            <p style={{ marginBottom: '10px' }}>Correo electrónico: <strong>{userData.email}</strong></p>
            <p style={{ marginBottom: '10px' }}>Nombre de usuario: <strong>{userData.username}</strong></p>
            <p style={{ marginBottom: '10px' }}>Ciudad: <strong>{userData.address.city}</strong></p>
            <p style={{ marginBottom: '40px' }}>Teléfono: <strong>{userData.phone}</strong></p>
            <button onClick={handleEdit} style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginRight: '10px' }}>Editar</button>
          </div>
        )}
        <button onClick={handleLogout} style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default UserPage;












