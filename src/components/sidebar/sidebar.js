// Sidebar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul>
        <li className={location.pathname === "/home" ? "active" : ""}>
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
      </ul>
    </div>
  );
};

export default Sidebar;
