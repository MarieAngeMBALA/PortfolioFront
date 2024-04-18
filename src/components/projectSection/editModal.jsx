// ProjectEditModal.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectEditModal = ({ isOpen, onClose, project }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (project) {
            setTitle(project.title);
            setDescription(project.description);
            setContent(project.content);
        }
    }, [project]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/projects/update/${project._id}`, {
                title,
                description,
                content
            });
            onClose(true); // fermer le modal et signaler un succès
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
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} required maxLength={1000}/>
                    <label>Contenu:</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} required />
                    <button type="submit">Modifier Projet</button>
                </form>
            </div>
        </div>
    );
};

export default ProjectEditModal;
