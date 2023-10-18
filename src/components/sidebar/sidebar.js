import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/home">
              Home
          </Link>
        </li>
        <li>
          <Link to="/about">
             About
          </Link>
        </li>
        <li>
          <Link to="/skills">
              Skills
          </Link>
        </li>
        <li>
          <Link to="/contacts">
              Contact
          </Link>
        </li>
        <li>
          <Link to="/prjects">
              Projects
          </Link>
        </li>
        <li>
          <Link to="/blogs">
                Blogs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
