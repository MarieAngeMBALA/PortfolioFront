import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import './LoginModal.css';
import loginIcon from '../assets/loginIcon.png';

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        username,
        password
      });
      console.log("Réponse du serveur:", response.data);

      if (response.data.accessToken) {
        login(response.data.accessToken); 
        alert('Connexion réussie!');
        onRequestClose(); 
        navigate('/'); 
      } else {
        alert("Nom d'utilisateur ou mot de passe incorrect");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Erreur de connexion au serveur.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-container" onClick={(e) => e.stopPropagation()}>
      <div className="login-box" onClick={(e) => e.stopPropagation()}>
        <div className="login-title" onClick={(e) => e.stopPropagation()}>
          <img src={loginIcon} alt="Login Icon" style={{ height: '140px', cursor: 'pointer' }} />
        </div>
        <form onSubmit={handleLoginSubmit} onClick={(e) => e.stopPropagation()}>
          <input name="username" type="text" placeholder="User Name" value={username} onChange={e => setUsername(e.target.value)} />
          <input name="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
