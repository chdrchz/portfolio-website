import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false); // To handle potential errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Define your EmailJS service ID, template ID, and public key here
    const serviceId = 'service_jumnf9j';
    const templateId = 'template_coetqwe';
    const publicKey = 'V3-BBNkII6FVx8e6W';

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
        setError(true);
      });
  };

  if (submitted) {
    return <h3>Thank you for getting in touch! I'll get back to you soon.</h3>;
  }

  if (error) {
    return <h3>There was an error sending your message. Please try again later.</h3>;
  }

  return (
    <div className="contact-form">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
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
          <label htmlFor="email">Email</label>
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
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;