import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import "./contacts.css";

const openLink = (url) => {
  window.open(url, "_blank");
};

const openMailTo = (email) => {
  window.open(`mailto:${email}?subject=Subject%20Here`, "_blank");
};

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Let's get in touch !!!</h1>
      </section>

      <div className="contact-container">
        <div className="contact-icons">
          <div className="contact-icons-holder">
            <div
              className="icons"
              onClick={() => openMailTo("adarshmungra1@gmail.com")}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div
              className="icons"
              onClick={() =>
                openLink("https://www.linkedin.com/in/adarshmungra/")
              }
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div
              className="icons"
              onClick={() => openLink("https://github.com/AdarshMungra")}
            >
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div
              className="icons"
              onClick={() => openLink("https://medium.com/@adarshmungra1")}
            >
              <FontAwesomeIcon icon={faMedium} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
