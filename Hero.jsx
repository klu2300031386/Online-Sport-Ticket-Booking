import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/hero.css';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <img src="/spo.jpg" alt="Stadium" className="hero-image" />
      <div className="quote">
        <b>“When passion meets teamwork, every match becomes a victory.”</b>
      </div>
      <div className="button-container">
        <button className="book-ticket-btn" onClick={() => navigate('/book')}>
          Book a Ticket
        </button>
      </div>
    </div>
  );
}

export default Hero;
