import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "../../../styles/contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false); // To handle potential errors

  // Hover effect state for the button
  const [hovered, setHovered] = useState(false);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle email submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Define your EmailJS service ID, template ID, and public key here
    const serviceId = "service_jumnf9j";
    const templateId = "template_coetqwe";
    const publicKey = "V3-BBNkII6FVx8e6W";

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error("Failed to send email. Error:", err);
        setError(true);
      });
  };

  // Hover effect handlers
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setHovered(true);
    setGradientPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  // Render message after submission
  if (submitted) {
    return <h3>Thank you for getting in touch! I'll get back to you soon.</h3>;
  }

  // Render error message if submission fails
  if (error) {
    return (
      <h3>There was an error sending your message. Please try again later.</h3>
    );
  }

  return (
    <div className="contact-container" id="contact">
      <div className="contact-headings">
        <h2>get in touch</h2>
        <h2 className="contact-heading2">my socials</h2>
      </div>
      <div className="contact-wrapper">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">message</label>
              <textarea
                className="custom-textarea"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="submit-button"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                background: hovered
                  ? `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(233,254,255,1) 0%, rgba(255,169,171,1) 51%)`
                  : "transparent",
                color: hovered ? "#232020" : "#FFA9AB",
                transition: "background 0.5s ease, color 0.3s ease",
                padding: "10px",
                width: "100%",
                height: "50px",
                border: "none",
                cursor: "pointer",
              }}
            >
              send message
            </button>
          </form>
        </div>
        <div className="contact-description">
          <div className="contact-description-links">
            <a href="https://linkedin.com/in/savanna-davis1" target="_blank">LinkedIn</a>
            <a href="https://github.com/chdrchz" target="_blank">GitHub</a>
          </div>
          <div className="contact-description-info">
            <p>saavannaa.rose@gmail.com</p>
            <p>Tulsa, OK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
