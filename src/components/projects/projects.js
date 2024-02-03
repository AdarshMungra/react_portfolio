import React from "react";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Mauclo",
      description: "Online e-commerce store",
      link: "Link to Project 1",
      thumbnail: "/assets/logo/projects_tumbs/maucloHome.png",
      color: "#3498db", // Set color for the first project
      imageBackground: "./assets/logo/projects_tumbs/maucloHome.png", // Set background image for the first project
    },
    {
      name: "Techanalytics",
      description: "business interface webapp",
      link: "",
      thumbnail: "/assets/logo/projects_thumbs/project2_thumb.jpg",
      color: "#2ecc71", // Set color for the second project
      imageBackground: "/assets/images/techanalytics_background.jpg", // Set background image for the second project
    },
    {
      name: "ChatBOX",
      description: "Ai chatbox",
      link: "Link to Project 2",
      thumbnail: "/assets/logo/projects_thumbs/project2_thumb.jpg",
      color: "#e74c3c", // Set color for the third project
      imageBackground: "/assets/images/chatbox_background.jpg", // Set background image for the third project
    },
    {
      name: "FleetingChat",
      description: "temporary chat",
      link: "Link to Project 2",
      thumbnail: "/assets/logo/projects_thumbs/project2_thumb.jpg",
      color: "#ffc5bb", // Set color for the fourth project
      imageBackground: "/assets/images/gyming_background.jpg", // Set background image for the fourth project
    },
    {
      name: "UI/UX case study",
      description: "react native app ",
      link: "Link to Project 2",
      thumbnail: "/assets/logo/projects_thumbs/project2_thumb.jpg",
      color: "#737hsd", // Set color for the fourth project
      imageBackground: "/assets/images/gyming_background.jpg", // Set background image for the fourth project
    },
  ];

  return (
    <div>
      <h1 className="title ">My Projects </h1>
      <div className="projects-container">
        <div className="project-card-container">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={project.name}
              style={{
                backgroundColor: project.color,
                backgroundImage: `url(${project.imageBackground})`,
              }}
            >
              <img src={project.thumbnail} alt={project.name} />
              <h2 className="project-h2">{project.name}</h2>
              <p className="project-p">{project.description}</p>
              <p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-a"
                >
                  Learn More
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
