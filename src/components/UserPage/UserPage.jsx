import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './UserPage.css';

const UserPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state?.user;
  const [editable, setEditable] = useState(false);
  const [editedUserData, setEditedUserData] = useState(userData);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    // Datos al cerrar la sesión
    setEditedUserData(null);
    navigate('/');
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    console.log('Datos editados:', editedUserData);
    setEditable(false);
    // Actualizar datos solo visualmente porque la API externa que se está usando no es modificable
    location.state.user = { ...editedUserData };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'city') {
      setEditedUserData({
        ...editedUserData,
        address: {
          ...editedUserData.address,
          city: value
        }
      });
    } else {
      setEditedUserData({
        ...editedUserData,
        [name]: value
      });
    }
  };

  return (
    <div className="wrapper">
      <h1>Perfil de Usuario</h1>
      {editable ? (
        <div>
          <div className="input-box">
            <input 
              type="text" 
              name="name" 
              value={editedUserData.name} 
              onChange={handleChange} 
              placeholder="Nombre"
            />
          </div>
          <div className="input-box">
            <input 
              type="text" 
              name="username" 
              value={editedUserData.username} 
              onChange={handleChange} 
              placeholder="Nombre de usuario"
            />
          </div>
          <div className="input-box">
            <input 
              type="text" 
              name="city" 
              value={editedUserData.address.city} 
              onChange={handleChange} 
              placeholder="Ciudad"
            />
          </div>
          <div className="input-box">
            <input 
              type="text" 
              name="phone" 
              value={editedUserData.phone} 
              onChange={handleChange} 
              placeholder="Teléfono"
            />
          </div>
          <button onClick={handleSave} className="save-button">Guardar</button>
          <button onClick={() => setEditable(false)} className="cancel-button">Cancelar</button>
        </div>
      ) : (
        <div className="user-info">
          <p><strong>Nombre:</strong> {userData.name}</p>
          <p><strong>Correo electrónico:</strong> {userData.email}</p>
          <p><strong>Nombre de usuario:</strong> {userData.username}</p>
          <p><strong>Ciudad:</strong> {userData.address.city}</p>
          <p><strong>Teléfono:</strong> {userData.phone}</p>
          <div className="edit-button">
            <button onClick={handleEdit} className="edit-button">Editar</button>
          </div>
          <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
        </div>
      )}
      
    </div>
  );
};

export default UserPage;
















