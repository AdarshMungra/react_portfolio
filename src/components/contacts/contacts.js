import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import "./contacts.css";

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Let's get in touch</h1>
      </section>

      <div className="contact-container">
        <div className="contact-icons">
          <div className="contact-icons-holder">
            <a href="adarshmungra1@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://www.linkedin.com/in/adarshmungra/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/AdarshMungra">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://medium.com/@adarshmungra1">
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
