import React, { useState } from 'react';
import './projects.css';
import SwipeableCard from './SwipeableCard'; // Import the SwipeableCard component

const Projects = () => {
  const [projects, setProjects] = useState([
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
  ]);

  const handleSwipe = (direction) => {
    // Handle swipe direction (e.g., like or dislike) and update the list of projects
    if (direction === 'right') {
      // Handle a right swipe (like)
      // Update the state or perform any other action
    } else if (direction === 'left') {
      // Handle a left swipe (dislike)
      // Update the state or perform any other action
    }
  };

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="swipe-container">
        {projects.map((project, index) => (
          <SwipeableCard
            key={project.name}
            project={project}
            onSwipe={handleSwipe}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
