import React, { useEffect, useState, useContext } from 'react';
import './project.css'; 
import axios from 'axios';
import { useAuth } from '../../context/authContext'; 

const Projects = () => {
  const [projects, setProjects] = useState([]);
  //const { isAdminLoggedIn } = useContext(useAuth);  
  const { isAdminLoggedIn } = useAuth();

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

  return (
    <div>
      <h1>Liste des Projets</h1>
      {isAdminLoggedIn && (
        <button onClick={() => {/* implémentez la navigation vers le formulaire de création */}}>
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
            {isAdminLoggedIn && (
              <div>
                <button onClick={() => {/* implémentez la navigation vers le formulaire de modification */}}>Modifier</button>
                <button onClick={() => handleDelete(project._id)}>Supprimer</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;