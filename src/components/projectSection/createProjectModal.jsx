// ProjectCreateModal.js
import React, { useState } from 'react';
import axios from 'axios';
import './createProjectModal.css'

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
          <div className="modal-header">Formulaire de création de projet</div>
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-group">
              <label className="label">Titre du Projet:</label>
              <input
                type="text"
                className="input-text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="label">Description:</label>
              <textarea
                className="textarea"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="label">Contenu du Projet:</label>
              <textarea
                className="textarea"
                value={content}
                onChange={e => setContent(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Créer Projet</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ProjectCreateModal;