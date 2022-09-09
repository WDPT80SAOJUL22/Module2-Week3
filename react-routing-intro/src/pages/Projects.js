import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import projectsData from '../projects-data.json'

const Projects = ({ isLoggedIn }) => {
    const [projects, setProjects] = useState([]);
 
    useEffect(() => {
      setProjects(projectsData);
    }, []);
   

    if (!isLoggedIn) {
        return <Navigate to='/'/>
    }
    
    return (
      <div>
        <h2>Projects</h2>
        {projects.map((project) => {
          return (
            <div key={project._id} className="project">
              <Link to={`/project/${project._id}`}><h3>{project.name}</h3></Link>
              <p>{project.technologies}</p>
            </div>
          );
        })}
      </div>
    );
}

export default Projects