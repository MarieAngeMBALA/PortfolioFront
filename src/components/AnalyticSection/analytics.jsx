import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import './analytics.css'

const Analytics = () => {
    const [skillsData, setSkillsData] = useState([]);
    const [totalProjects, setTotalProjects] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Récupération des pourcentages de compétences
                const skillsResponse = await axios.get('http://localhost:3000/api/projects/analyze-skills');
                if (skillsResponse.data.status === 'success') {
                    const formattedData = Object.entries(skillsResponse.data.data.skillsPercentage).map(([key, value]) => ({
                        name: key,
                        percentage: parseFloat(value.replace('%', ''))
                    }));
                    setSkillsData(formattedData);
                } else {
                    console.log("Erreur lors de la récupération des pourcentages de compétences", skillsResponse.data);
                }

                // Récupération du nombre total de projets
                const projectsResponse = await axios.get('http://localhost:3000/api/projects/numberofprojects');
                if (projectsResponse.data.status === 'success' && projectsResponse.data.data.count !== undefined) {
                    setTotalProjects(projectsResponse.data.data.count);
                } else {
                    console.log("Erreur dans la structure des données:", projectsResponse.data);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="analytics-container">
            <div className="analytics-text">
            <h1>Analytics Dashboard</h1>
            <p>Nombre total de projets: {totalProjects}</p>
            
            </div>
            
            <div className="chart-container">
            <h2>Skills Percentage</h2>
            <BarChart width={700} height={600} data={skillsData}>
                <CartesianGrid  />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="percentage" fill="#8884d8" name="Percentage" />
            </BarChart>
            </div>
            <div className="legend-container">
                <h2 className="legend-title">Legend</h2>
                <p className="legend-text">Some explanatory text about the graph...</p>
                {/* ... plus de texte ou des éléments si nécessaire */}
            </div>
        </div>
    );
};

export default Analytics;
