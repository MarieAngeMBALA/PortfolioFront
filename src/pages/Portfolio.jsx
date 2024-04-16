import React from 'react';
import Navbar from '../components/navbar/navbar';
import AboutSection from '../components/aboutSection/about';
import ProjectSection from '../components/projectSection/project';
import ContactSection from '../components/contactSection/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const PortfolioPage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/" element={<ProjectSection />} />
      </Routes>
      // contenu 
    </div>
  );
};

export default PortfolioPage;
