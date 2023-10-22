import React from 'react';
import './projects.css';
import CursorBall from '../cursorBall/cursorBall'; // Import the CursorBall component

const Projects = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'Description of Project 1',
      link: 'Link to Project 1',
      image: '/assets/logo/projects_tumbs/project1.jpg', // Replace with your image path
    },
    {
      name: 'Project 2',
      description: 'Description of Project 2',
      link: 'Link to Project 2',
      image: '/assets/logo/projects_tumbs/project2.jpg', // Replace with your image path
    },
    // You can add more project objects as needed
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card" key={project.name}>
            <img src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </div>
      <CursorBall /> {/* Include the CursorBall component */}
    </div>
  );
};

export default Projects;
