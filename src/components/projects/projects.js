import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import projectT1 from "/home/adarsh/portfolio_website/react_portfolio/src/components/projects/ProjectPages/dumpy/dumpyImages/projectT1-removebg-preview.png"; // Replace with the path to your image
import projectT2 from "/home/adarsh/portfolio_website/react_portfolio/src/components/projects/ProjectPages/dumpy/dumpyImages/projectT2-removebg-preview.png";

const Projects = () => {
  const projects = [
    {
      name: "Dumpy",
      description: "React Native app",
      link: "/projects/dumpy", // Link to the Dumpy project page
      thumbnail: "/assets/logo/projects_thumbs/project2_thumb.jpg",
      color: "#FAA0A0",
      imageBackground: projectT1,
    },
    {
      name: "Gym log",
      description: "React Native app",
      link: "/projects/dumpy", // Link to the Dumpy project page
      thumbnail: "/assets/logo/projects_thumbs/project2_thumb.jpg",
      color: "#FDFD96",
      imageBackground: "",
    },
    {
      name: "AI ChatBox",
      description: "LLM",
      link: "/projects/dumpy", // Link to the Dumpy project page
      thumbnail: "/assets/logo/projects_thumbs/project2_thumb.jpg",
      color: "#77dd77",
      imageBackground: "",
    },
    {
      name: "Tech Analytics",
      description: "React | Django",
      link: "/projects/dumpy", // Link to the Dumpy project page
      thumbnail: "/assets/logo/projects_thumbs/project2_thumb.jpg",
      color: "#FFBE98",
      imageBackground: "",
    },
    {
      name: "Game",
      description: "",
      link: "/projects/dumpy", // Link to the Dumpy project page
      thumbnail: "/assets/logo/projects_thumbs/project2_thumb.jpg",
      color: "#8E7AB5",
      imageBackground: "",
    },
    {
      name: "React webapp",
      description: "Interactive React webapp | mongoDB",
      link: "/projects/dumpy", // Link to the Dumpy project page
      thumbnail: "/assets/logo/projects_thumbs/project2_thumb.jpg",
      color: "#94B49F",
      imageBackground: "",
    },
    {
      name: "Mauclo",
      description: "E-commerce store",
      link: "/projects/mauclo", // Link to the Mauclo project page
      thumbnail: "/assets/logo/projects_tumbs/maucloHome.png",
      color: "#A7C7E7",
      imageBackground: projectT2,
    },
    {
      name: "UI | UX case study",
      description: "",
      link: "/projects/mauclo", // Link to the Mauclo project page
      thumbnail: "/assets/logo/projects_tumbs/maucloHome.png",
      color: "#A7a7c7",
      imageBackground: "",
    },
  ];

  return (
    <div>
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        <div className="project-card-container">
          {projects.map((project) => (
            <Link to={project.link} key={project.name}>
              <div
                className="project-card"
                style={{
                  backgroundColor: project.color,
                  backgroundImage: `url(${project.imageBackground})`,
                }}
              >
                {/* <img src={project.thumbnail} alt={project.name} /> */}
                <h2 className="project-h2">{project.name}</h2>
                <p className="project-p">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <button className="more-projects">🔎</button>
      </div>
    </div>
  );
};

export default Projects;
