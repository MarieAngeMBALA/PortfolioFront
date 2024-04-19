import React from 'react';
import './footer.css'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        {/* Replace # with your actual links */}
        <a href="https://www.facebook.com/douce.yarris" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa fa-facebook"><FacebookIcon /></i></a>
        <a href="https://www.linkedin.com/in/marie-ange-mbala-374b48222/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa fa-instagram"><LinkedInIcon/></i></a>
        <a href="https://github.com/MarieAngeMBALA/PortfolioFront" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fa fa-twitter"><GitHubIcon/></i></a>
        {/* Add more social icons as needed */}
      </div>
      <div className="footer-info">
        <p>Copyright &copy;2024; Designed by Marie-Ange MBALA</p>
      </div>
    </footer>
  );
};

export default FooterSection;