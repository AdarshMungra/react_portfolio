import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import CursorBall from '../cursorBall/cursorBall'; // Import the CursorBall component

import './contacts.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '', // Add the company field
    position: '', // Add the position field
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., send the data to a server or display it.
    console.log(formData);
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>You can reach out to me through the following contact details:</p>
      <div className="contact-icons-holder">
        <div className="contact-icons">
          <a href="mailto:youremail@example.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="tel:---">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a href="https://www.linkedin.com/in/your-profile">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/your-username">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className="contact-form">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <CursorBall /> {/* Include the CursorBall component */}
    </div>
  );
}

export default Contact;
