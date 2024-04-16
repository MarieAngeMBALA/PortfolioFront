import React from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Ici, vous pouvez ajouter votre logique de vérification de connexion si nécessaire
    navigate('/portfolio'); // Redirige vers la page Portfolio
  };
  return (
    //<LoginForm onLoginClick={handleLoginClick} />
    <LoginForm  />
  );
};

export default Login;