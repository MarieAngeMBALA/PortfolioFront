import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; 
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FaceIcon from '@mui/icons-material/Face';
import { useAuth } from '../../context/authContext';
import LoginModal from '../LoginModal';

const Navbar = () => {
  const { isAdminLoggedIn, logout } = useAuth();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleAuthClick = () => {
    if (isAdminLoggedIn) {
      setLogoutDialogOpen(true); // Open logout confirmation dialog
    } else {
      setLoginModalOpen(true); // Open login modal
    }
  };

  const handleLogout = () => {
    logout();
    setLogoutDialogOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <h1 className='name'>Marie-Ange MBALA</h1>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About me</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>My Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact-me</NavLink>
        <div className="navbar-login-icon" onClick={handleAuthClick}>
          {isAdminLoggedIn ? 
            <div className="icon-container">
              <FaceIcon style={{ fontSize: 30 }} />
              <div className="icon-label">ADMIN</div>
            </div> :
            <div className="icon-container">
              <AccountCircleIcon style={{ fontSize: 30 }} />
              <div className="icon-label">Log-in</div>
            </div>
          }
        </div>
      </nav>
      <LoginModal isOpen={isLoginModalOpen} onRequestClose={() => setLoginModalOpen(false)} />

      {/* Logout Confirmation Dialog */}
      <Dialog open={isLogoutDialogOpen} onClose={() => setLogoutDialogOpen(false)}>
        <DialogTitle>Logout Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>Do you really want to log out?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogoutDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleLogout} color="primary" autoFocus>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbar;
