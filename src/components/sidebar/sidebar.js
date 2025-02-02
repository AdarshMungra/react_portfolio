import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar" style={{ top: isOpen ? "0" : "-100px" }}>
      <div className="burger-menu" onClick={toggleSidebar}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>
      <ul className={isOpen ? "menu active" : "menu"}>
        <li
          className={
            location.pathname === "/home" || location.pathname === "/"
              ? "active"
              : ""
          }
        >
          <Link to="/home">Home</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === "/projects" ? "active" : ""}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={location.pathname === "/contacts" ? "active" : ""}>
          <Link to="/contacts">Contact</Link>
        </li>
        <li className={location.pathname === "/blogs" ? "active" : ""}>
          <Link to="/blogs">Blog</Link>
        </li>
        <li className={location.pathname === "/fun" ? "active" : ""}>
          <Link to="/fun">Fun</Link>
        </li>
        <li>
          <a
            href={`${process.env.PUBLIC_URL}/Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className={location.pathname === "/Resume.pdf" ? "active" : ""}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
