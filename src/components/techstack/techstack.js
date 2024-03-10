import React from "react";
import "./techstack.css";

const TechStack = () => {
  return (
    <div className="tech">
      <section className="tech-header">
        <h1>TechStack</h1>
      </section>
      <div className="tech-rows-container">
        {/* <section className="tech-categories-container">
          <div className="tech-category">
            <div className="tech-card">
              <h4>FrontEnd</h4>
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>JavaScript</h3>
              <h3>React</h3>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-card">
              <h4>BackEnd</h4>
              <h3>Node.js</h3>
              <h3>MySQL</h3>
              <h3>MongoDB</h3>
            </div>
          </div>
          <div className="tech-category">
            <div className="tech-card">
              <h4>App Dev</h4>
              <h3>React Native</h3>
              <h3>Flutter</h3>
            </div>
          </div>
        </section> */}
        <section class="tech-categories-container">
          <div class="tech-category">
            <div class="tech-card">
              <h4>Front-End</h4>
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>JavaScript (ES6+)</h3> <h3>React (or Vue.js/Svelte)</h3>{" "}
            </div>
          </div>
          <div class="tech-category">
            <div class="tech-card">
              <h4>Back-End</h4>
              <h3>Node.js (with Express)</h3>{" "}
              <h3>SQL Databases (MySQL or PostgreSQL)</h3>{" "}
              <h3>NoSQL Databases (MongoDB)</h3>
              <h3>Cloud Platforms (AWS/Azure/GCP)</h3>{" "}
            </div>
          </div>
          <div class="tech-category">
            <div class="tech-card">
              <h4>App Dev</h4>
              <h3>React Native</h3>
              <h3>Flutter</h3>
              <h3>Progressive Web Apps (PWAs)</h3>{" "}
            </div>
          </div>
          <div class="tech-category">
            <div class="tech-card">
              <h4>DevOps</h4> <h3>Git & GitHub (Version Control)</h3>
              <h3>APIs & RESTful Services</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechStack;
