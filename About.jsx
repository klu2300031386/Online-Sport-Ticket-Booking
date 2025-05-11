import React from 'react';
import '../styling/about.css';
import MinimalHeader from './MinimalHeader'; // import

function About() {
  return (
    <div className="about-page">
      <MinimalHeader /> {/* show minimal header */}
      <div className="about-content">
        <h2>About SPORTMARK</h2>
        <p>
          Welcome to SPORTMARK, your go-to destination for booking tickets to the most thrilling sports events.
          We connect fans with the action, bringing the stadium experience closer than ever.
        </p>
        <p>
          Our mission is to make ticket booking seamless and exciting, while promoting the true spirit of sportsmanship.
        </p>
      </div>
    </div>
  );
}

export default About;
