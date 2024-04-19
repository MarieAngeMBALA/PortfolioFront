import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProjectEditModal from './editModal'; 
import { useAuth } from '../../context/authContext';

const ProjectTemplate = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const navigate = useNavigate();
    const { isAdminLoggedIn } = useAuth();
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const fetchProject = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/projects/${projectId}`);
            setProject(response.data.data.project);
        } catch (error) {
            console.error('Erreur lors de la récupération du projet', error);
        }
    };
    
    useEffect(() => {
        fetchProject();
    }, [projectId]);
    

    const goBackToProjects = () => {
        navigate('/projects'); 
    };

    const handleModalClose = (refresh) => {
        setModalOpen(false);
        setEditModalOpen(false);
        if (refresh) fetchProject(); // Recharger la liste des projets si un nouveau projet a été ajouté
      };

    // Vérifiez si le projet est chargé avant de tenter de rendre ses détails
    if (!project) return <div>Chargement...</div>;

    return (
        <div className="project-template-container">
            <button onClick={goBackToProjects}>Back to Project List</button>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div>{project.content}</div>
            <h4>WELCOME AAA</h4>
            {isAdminLoggedIn && (
                <div>
                    <button onClick={() => {
                        setCurrentProject(project);
                        setEditModalOpen(true);
                    }}>
                        Modify
                    </button>
                </div>
            )}
            <ProjectEditModal isOpen={editModalOpen} onClose={handleModalClose} project={currentProject} />
        </div>
    );
};

export default ProjectTemplate;