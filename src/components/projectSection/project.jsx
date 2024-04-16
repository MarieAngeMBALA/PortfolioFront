import React from 'react';
import './project.css'; 
import { useAuth } from '../../context/authContext'; 

const ProjectSection = () => {

  return (
    <div className="projects-container">
      <h2>Random facts</h2>
      <div className="projects">
        <div className="project-item">
          <img src="/src/assets/robotique.png" alt="I drink a lot of tea" />
          <span>Coupe de Robotique de france 2023</span>
        </div>
        <div className="project-item">
          <img src="path_to_design_image.jpg" alt="I'm into interior design" />
          <span>I'm into interior design</span>
        </div>
        {/* Répétez pour chaque projet... */}
      </div>
</div>

  );
};

export default ProjectSection;