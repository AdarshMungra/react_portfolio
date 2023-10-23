import React, { useState } from 'react';
import './projects.css';
import CursorBall from '../cursorBall/cursorBall';

const Projects = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'Description of Project 1',
      link: 'Link to Project 1',
      thumbnail: '/assets/logo/projects_thumbs/project1_thumb.jpg',
      image: '/assets/logo/projects/project1.jpg',
    },
    {
      name: 'Project 2',
      description: 'Description of Project 2',
      link: 'Link to Project 2',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },
    {
      name: 'Project 2',
      description: 'Description of Project 2',
      link: 'Link to Project 2',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },
    {
      name: 'Project 2',
      description: 'Description of Project 2',
      link: 'Link to Project 2',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },
    {
      name: 'Project 2',
      description: 'Description of Project 2',
      link: 'Link to Project 2',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },
    {
      name: 'Project 2',
      description: 'Description of Project 2',
      link: 'Link to Project 2',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },

    // Add more projects as needed
  ];



  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-card-container">
        {projects.map((project, index) => (
          <div className="project-card" key={project.name}>
            <img src={project.thumbnail} alt={project.name} /> {/* Display the thumbnail image */}
            <h2 className="project-h2">{project.name}</h2>
            <p className="project-p">{project.description}</p>
            <p href={project.link} target="_blank" rel="noopener noreferrer" className="project-a">
              Learn More
            </p>
          </div>
        ))}
      </div>
      <CursorBall />
    </div>
  );
};

export default Projects;
