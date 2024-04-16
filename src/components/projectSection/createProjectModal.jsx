// ProjectCreateModal.js
import React, { useState } from 'react';
import axios from 'axios';

const ProjectCreateModal = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/projects/create', {
                title,
                description,
                content
            });
            onClose(true); // fermer le modal et signaler un succès
        } catch (error) {
            alert('Erreur lors de la création du projet : ' + error.message);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => onClose()}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label>Titre du Projet:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                    <label>Contenu du Projet:</label>
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        required
                    />
                    <button type="submit">Créer Projet</button>
                </form>
            </div>
        </div>
    );
};

export default ProjectCreateModal;
