import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import WelcomePage from './components/WelcomePage/WelcomePage';
import UserPage from './components/UserPage/UserPage';
import PrivateRoute from './components/LoginForm/PrivateRoute';
import Logout from './components/LoginForm/Logout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route element={<PrivateRoute />}>
          <Route path="/bienvenido" element={<WelcomePage />} />
          <Route path="/perfil" element={<UserPage />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;


