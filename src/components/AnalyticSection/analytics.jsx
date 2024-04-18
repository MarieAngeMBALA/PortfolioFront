import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Analytics = () => {
    const [projectCount, setProjectCount] = useState(0);

    useEffect(() => {
        // Obtenir le nombre total de projets
        axios.get('http://localhost:3000/api/projects/numberofprojects')
            .then(response => {
                console.log("Réponse du serveur:", response.data); // Aide au débogage
                if (response.data.status === 'success' && response.data.data.count !== undefined) {
                    setProjectCount(response.data.data.count);  // Accès correct à la donnée
                } else {
                    console.log("Erreur dans la structure des données:", response.data);
                }
            })
            .catch(error => {
                console.error('Erreur lors de la récupération du nombre de projets', error);
            });
    }, []);

    return (
        <div>
            <h1>Analytics Dashboard</h1>
            {/* Ici, vous pouvez ajouter des graphiques, des tableaux, etc. */}
            <p>Des visualisations des données collectées ici.</p>
            <p>Nombre total de projets: {projectCount}</p>
        </div>
    );
};

export default Analytics;
