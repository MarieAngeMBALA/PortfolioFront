import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; 
// Importez une icône de votre choix, ici un exemple avec Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/authContext';
import LoginModal from '../LoginModal';

const Navbar = () => {
  const { isAdminLoggedIn, logout } = useAuth();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleAuthClick = () => {
    if (isAdminLoggedIn) {
      logout();
    } else {
      setLoginModalOpen(true); // Ouvre le modal si l'utilisateur n'est pas connecté
    }
  };
  useEffect(() => {}, [isAdminLoggedIn]);

  return (
    <>
      <nav className="navbar">
      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        <div className="navbar-login-icon" onClick={handleAuthClick}>
          {isAdminLoggedIn ? <FontAwesomeIcon icon={faSignOutAlt} /> : <FontAwesomeIcon icon={faSignInAlt} />}
        </div>
      </nav>
      <LoginModal isOpen={isLoginModalOpen} onRequestClose={() => setLoginModalOpen(false)} />
    </>
  );
};

export default Navbar;
