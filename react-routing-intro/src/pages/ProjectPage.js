import React from 'react'
import { useParams } from 'react-router-dom'

import projectsData from '../projects-data.json';

const ProjectPage = () => {


    const { projectId } = useParams()


    const foundedProject = projectsData.find(project => project._id === projectId)

    return (

        <div>
            <h1>Project Details</h1>

            {foundedProject ? <>
                <h2>{foundedProject.name}</h2>
                <h2>Technologies:</h2>
                <ul>
                    {foundedProject.technologies.split(',').map((technology, index) => {
                        return (
                            <li key={index} >{technology}</li>
                        )
                    })}
                </ul>
                <h2>year: {foundedProject.year}</h2>
                <h2>Description:</h2>
                <p>{foundedProject.description}</p>
            </> :
                <h1>Project Not Found</h1>}
        </div>
    )
}

export default ProjectPage