import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import CursorBall from '../cursorBall/cursorBall';
import './contacts.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Valid email is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real application, send the data to a server for processing
      // and handle success or error responses.
      console.log('Form data submitted:', formData);

      // Clear the form
      setFormData({
        name: '',
        email: '',
        company: '',
        position: '',
        message: '',
      });
    }
  };

  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Let's get in touch</h1>
      </section>

      <div className="contact-container">
      <div className='contact-all'>
        <div className="contact-icons">
          <div className="contact-icons-holder">
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
              {formErrors.name && <div className="error-message">{formErrors.name}</div>}
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
              {formErrors.email && <div className="error-message">{formErrors.email}</div>}
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
      </div>
      <div className="side-section">
      {/* Content or components for the side section */}
      <h3>Current based in Mauritius</h3>
      <h3>local time:</h3>
       </div>
       <div className="side-section2">
      {/* Content or components for the side section */}
      <h3>This is the side section content.</h3>
       </div>
      </div>

      <CursorBall />
    </div>
  );
}

export default Contact;
