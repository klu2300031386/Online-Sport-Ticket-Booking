import React, { useState } from 'react';
import '../styling/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-top">
        <div className="contact-image">
          <img src="/contact.jpg" alt="Contact Illustration" />
        </div>

        <div className="contact-info-box">
          <h2>Need Help? Contact Us!</h2>
          <p>Helpline: +1 234 567 890</p>
          <p>Email us at: <a href="mailto:support@sportmark.com">support@sportmark.com</a></p>

          <div className="chat-box">
            <h3>Live Chat</h3>
            <p>Ask us anything! We’re here to help.</p>
          </div>

          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <h3>Find Us Here:</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.338614226118!2d106.82503021405973!3d10.880736462099236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d62b91b8a0d%3A0x9e9a2dbb052548d7!2sViettel%20Store!5e0!3m2!1sen!2s!4v1631868133181!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
