import React from 'react';
import '../styling/header.css';
import { FaHome, FaInfoCircle, FaEnvelope, FaUser } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.jpg" alt="Logo" />
        <h1>SPORTS</h1>
      </div>
      <nav className="nav">
        <Link to="/"><FaHome /> Home</Link>
        <Link to="/about"><FaInfoCircle /> About</Link>
        <Link to="/contact"><FaEnvelope /> Contact Us</Link>

        
        <Link to="/login">Login/Register</Link>

        {isHome && <Link to="/profile"><FaUser /> Profile</Link>}
      </nav>
    </header>
  );
}

export default Header;
