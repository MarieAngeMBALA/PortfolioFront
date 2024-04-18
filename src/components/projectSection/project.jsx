import React, { useEffect, useState, useContext } from 'react';
import './project.css'; 
import axios from 'axios';
import ProjectCreateModal from './createProjectModal';
import ProjectEditModal from './editModal'; 
import { useAuth } from '../../context/authContext'; 
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Liste des Projets</h1>
      {isAdminLoggedIn && (
        <button onClick={() => setModalOpen(true)}>
          Créer Projet
        </button>
      )}

      {/*//projet*/}

      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h3>{project.title}</h3>
            <h5>{project.description}</h5>
            <p>{project.content}</p>
            <button onClick={() => handleViewProject(project._id)}>
                  View more
              </button>
            {isAdminLoggedIn && (
              <>
              <div>
                <button onClick={() => {
                  setCurrentProject(project);
                  setEditModalOpen(true);
                  }}>Modifier</button>
                <button onClick={() => handleDelete(project._id)}>Supprimer</button>
              </div>
              </> 
            )}
          </li>
        ))}
      </ul>
      <div>
        {isAdminLoggedIn && (
          <div>
            <button onClick={handleViewAnalytics}>
                View Analytics
            </button>
          </div>
        )}
      </div>
      <ProjectCreateModal isOpen={modalOpen} onClose={handleModalClose} />
      <ProjectEditModal isOpen={editModalOpen} onClose={handleModalClose} project={currentProject} />
    </div>
  );
};

export default Projects;