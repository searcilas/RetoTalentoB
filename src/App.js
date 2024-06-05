// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import WelcomePage from './components/WelcomePage/WelcomePage';
import UserPage from './components/UserPage/UserPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/bienvenido" element={<WelcomePage />} />
        <Route path="/perfil" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;


