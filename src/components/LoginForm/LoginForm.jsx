import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`);
            const userData = response.data[0];
            
            if (userData) {
                // Token
                const token = `fake-token-${userData.id}`;
                // Token en localStorage
                localStorage.setItem('authToken', token);
                navigate('/bienvenido', { state: { user: userData } });
            } else {
                setError("Credenciales inválidas");
                setTimeout(() => {
                    setError("");
                }, 2100); // 2.1s
            }
        } catch (error) {
            setError("Error en el inicio de sesión");
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Iniciar sesión</h1>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Correo electrónico" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && (
                <div className="error-container">
                    <div className="error-box">
                        <p className="error">{error}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginForm;


