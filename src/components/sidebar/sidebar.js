// Sidebar.js
import React from "react";
import { useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul>
        <li
          className={
            location.pathname === "/home" || location.pathname === "/"
              ? "active"
              : ""
          }
        >
          <a href="/home">Home</a>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <a href="/about">About</a>
        </li>
        <li className={location.pathname === "/projects" ? "active" : ""}>
          <a href="/projects">Projects</a>
        </li>
        <li className={location.pathname === "/contacts" ? "active" : ""}>
          <a href="/contacts">Contact</a>
        </li>
        <li className={location.pathname === "/blogs" ? "active" : ""}>
          <a href="/blogs">Blog</a>
        </li>
        <li className={location.pathname === "/fun" ? "active" : ""}>
          <a href="/fun">Fun</a>
        </li>
        <li>
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className={location.pathname === "/resume.pdf" ? "active" : ""}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
