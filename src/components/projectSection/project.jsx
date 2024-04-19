import React, { useEffect, useState, useContext } from 'react';
import './project.css'; 
import axios from 'axios';
import ProjectCreateModal from './createProjectModal';
import ProjectEditModal from './editModal'; 
import { useAuth } from '../../context/authContext'; 
import { useNavigate } from 'react-router-dom';
import trade2 from '../../assets/trade2.png';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  //const { isAdminLoggedIn } = useContext(useAuth);  
  const { isAdminLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleModalClose = (refresh) => {
    setModalOpen(false);
    setEditModalOpen(false);
    if (refresh) fetchProjects(); // Recharger la liste des projets si un nouveau projet a été ajouté
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/projects/all');
      setProjects(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des projets', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/projects/delete/${id}`);
      fetchProjects();  // Rafraîchir la liste après la suppression
    } catch (error) {
      console.error('Erreur lors de la suppression du projet', error);
    }
  };

  const handleViewAnalytics = () => {
    navigate('/analytics'); 
  };

  const handleViewProject = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <>
    <h1>ACADEMICS PROJECT</h1>
    {isAdminLoggedIn && (
      <button className="create-project-btn" onClick={() => setModalOpen(true)}>
        Create a Project
      </button>
    )}
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project._id} className="project-item">
          <img 
            src={project.thumbnail || trade2} // Replace with your default thumbnail if none
            alt={project.title} 
            className="project-thumbnail"
          />
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <h5 className="project-description">{project.description}</h5>
            <p>{project.content}</p>
          </div>
          <div className="project-actions">
            <button onClick={() => handleViewProject(project._id)} className="project-button">
              View more
            </button>
            {isAdminLoggedIn && (
              <>
                <button onClick={() => {
                  setCurrentProject(project);
                  setEditModalOpen(true);
                }} className="project-button">Modifier</button>
                <button onClick={() => handleDelete(project._id)} className="project-button">Supprimer</button>
              </>
            )}
          </div>
        </div>
      ))}
      <ProjectCreateModal isOpen={modalOpen} onClose={handleModalClose} />
      <ProjectEditModal isOpen={editModalOpen} onClose={handleModalClose} project={currentProject} />
    </div>
    {isAdminLoggedIn && (
      <button className="view-analytics-btn" onClick={handleViewAnalytics}>
        View Analytics
      </button>
    )}
    <ProjectCreateModal isOpen={modalOpen} onClose={handleModalClose} />
    <ProjectEditModal isOpen={editModalOpen} onClose={handleModalClose} project={currentProject} />
    </>
  );
};

export default Projects;