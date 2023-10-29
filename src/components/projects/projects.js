import React, { useState } from 'react';
import './projects.css';
import CursorBall from '../cursorBall/cursorBall';

const Projects = () => {
  const projects = [
    {
      name: 'Mauclo',
      description: 'Online e-commerce store',
      link: 'Link to Project 1',
      thumbnail: '/assets/logo/projects_tumbs/maucloHome.png',
      image: '/assets/logo/projects_tumbs/maucloHome.png',
    },
    {
      name: 'techanalytics',
      description: 'business interface webapp',
      link: '',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },
    {
      name: 'GYM Intensity tracker',
      description: 'app',
      link: 'Link to Project 2',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },
    {
      name: 'Grocery items Object detection and classifications',
      description: 'Machine learning',
      link: 'Link to Project 2',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },
    {
      name: 'ChatBOX for Legal advice',
      description: 'Ai chatBOX',
      link: 'Link to Project 2',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },
    {
      name: 'Hundred',
      description: 'Startup - app for getting informed ',
      link: 'Link to Project 2',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },

    // Add more projects as needed
    {
      name: 'New release episode tracker',
      description: 'library of favourite movies and tv shows',
      link: 'Link to Project 2',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },
    // Add more projects as needed
    {
      name: 'Spotify album art image map ',
      description: 'Image of your most listen artist and album ',
      link: 'Link to Project 2',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },
    // Add more projects as needed
    {
      name: 'Spotify wrapped',
      description: 'get your spotify wrapped at any time you want  ',
      link: 'Link to Project 2',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },
    // Add more projects as needed
    {
      name: 'React native app',
      description: 'basic to do list react native app ',
      link: 'Link to Project 2',
      thumbnail: '/assets/logo/projects_thumbs/project2_thumb.jpg',
      image: '/assets/logo/projects/project2.jpg',
    },


    
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-card-container">
        {projects.map((project, index) => (
          <div className="project-card" key={project.name}>
            <img src={project.thumbnail} alt={project.name} />
            <h2 className="project-h2">{project.name}</h2>
            <p className="project-p">{project.description}</p>
            <p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-a">
                Learn More
              </a>
            </p>
          </div>
        ))}
      </div>    
      <CursorBall />
    </div>
  );
};


export default Projects;
