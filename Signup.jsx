import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styling/signup.css';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Store user credentials in localStorage
    const user = {
      username: formData.username,
      phone: formData.phone,
      password: formData.password,
    };
    localStorage.setItem('user', JSON.stringify(user));

    alert("Signup successful! Redirecting to login page...");
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create an Account</h2>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>

         <p className="signup-link">
  Don't have an account? <Link to="/signup">Sign up</Link>
</p>
<p><Link to="/">Back to Home</Link></p>

        </form>

        <div className="signup-image">
          <img src="/signup.jpg" alt="Sign up" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
