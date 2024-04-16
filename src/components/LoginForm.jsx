import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import loginIcon from '../assets/loginIcon.png';
import SignUpModal from './SignupModal';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    
    try {
      console.log(`username: ${username}, password: ${password}`);
      const response = await axios.post('http://localhost:3000/api/users/login', {
        username,
        password
      });

      console.log("Well conected");
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        alert('Connexion réussie!');
        // Vous pourriez rediriger l'utilisateur ici ou faire d'autres opérations liées à l'authentification
      }
    } catch (error) {
      alert(error.response?.data?.message || "Erreur de connexion au serveur.");
    }
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="login-container">
      <h1 className='title'>WELCOME To My PORTFOLIO</h1>
      <p>Log-in to have more details about me</p>
      <form onSubmit={handleLoginSubmit}>
        <div className="login-box"> 
          <div className="login-title">
            <img src={loginIcon} alt="Login Icon" style={{ height: '140px' }} />
          </div>
          <input name="username" type="text" placeholder="User Name" value={username} onChange={e => setUsername(e.target.value)}/>
          <input name = "password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
          <div className="forgot-password">
            <a href="/reset-password" style={{ color: 'inherit' }}>Forgot password?</a>
          </div>
          <button type="submit">Login</button>
        </div>
        <div className="signup-link">To create a new account,
          <a href="#" onClick={handleOpenModal} style={{ color: 'inherit' }}>Click here!</a>
        </div>
      </form>
      <SignUpModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};

export default LoginForm;
