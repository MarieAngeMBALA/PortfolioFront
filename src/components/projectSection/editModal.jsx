// ProjectEditModal.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Refresh } from '@icon-park/react';

const ProjectEditModal = ({ isOpen, onClose, project }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [keywords, setKeywords] = useState('');

    useEffect(() => {
        if (project) {
            setTitle(project.title);
            setDescription(project.description);
            setKeywords(project.keywords);
        }
    }, [project]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Sending these keywords:', keywords); 
        try {
            const response = await axios.put(`http://localhost:3000/api/projects/update/${project._id}`, {
                title,
                description,
                keywords
            });
            console.log('Update response:', response); 
            onClose(true); // fermer le modal et signaler un succès
            Refresh
        } catch (error) {
            alert('Erreur lors de la modification du projet : ' + error.message);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => onClose()}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label>Titre:</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
                    <label>Description:</label>
                    <textarea type="text" value={description} onChange={e => setDescription(e.target.value)} required maxLength={80}/>
                    <label>Your project keywords:</label>
                    <input
  type="text"
  value={keywords}
  onChange={e => setKeywords(e.target.value)}
/>
                    <button type="submit">Modifier Projet</button>
                </form>
            </div>
        </div>
    );
};

export default ProjectEditModal;
