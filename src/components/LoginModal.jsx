import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import './LoginModal.css';
import loginIcon from '../assets/loginIcon.png';
import CloseIcon from '@mui/icons-material/Close'; 

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setMessage(''); 

    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        username,
        password
      });
      if (response.data.accessToken) {
        login(response.data.accessToken);
        //setMessage('Connexion réussie!');
        navigate('/about');
        onRequestClose(); // Close modal
      } else {
        setMessage("Invalid user or password");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Invalid user or password - Also verify the server");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-container" onClick={onRequestClose}>
      <div className="login-box" onClick={e => e.stopPropagation()}>
      <CloseIcon onClick={onRequestClose} style={{ cursor: 'pointer', color: 'black', position: 'absolute', top: '10px', right: '10px' }} />
      <h1 className="login-intro">Log-in to Admin mode</h1>
        <div className="login-header">
          <img src={loginIcon} alt="Login Icon" style={{ height: '200px', cursor: 'pointer' }} />
        </div>
        <form onSubmit={handleLoginSubmit}>
          <input className='input' name="username" type="text" placeholder="User Name" value={username} onChange={e => setUsername(e.target.value)} />
          <input className='input' name="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" className='button'>Login</button>
        </form>
        {message && <div className="login-message">{message}</div>}
      </div>
    </div>
  );
};

export default LoginModal;
