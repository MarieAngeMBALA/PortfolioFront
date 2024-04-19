import React from 'react';
import Navbar from '../components/navbar/navbar';
import AboutSection from '../components/aboutSection/about';
import ProjectSection from '../components/projectSection/project';
import ContactSection from '../components/contactSection/contact';
import ProjectTemplate from '../components/projectSection/projectTemplate';
import Analytics from '../components/AnalyticSection/analytics';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const PortfolioPage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/projects/:projectId" element={<ProjectTemplate />} />
        <Route path="/" element={<ProjectSection />} />
      </Routes>
    </div>
  );
};

export default PortfolioPage;
