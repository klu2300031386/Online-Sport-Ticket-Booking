import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/login.css';

function Verify() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="login-container">
      <div className="verify-card">
        <div className="nav-icons">
          <span onClick={() => navigate(-1)} className="back-arrow">⬅️</span>
       
        </div>
        <h2>VERIFYING NUMBER</h2>
        <div className="otp-inputs">
          {otp.map((val, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              maxLength="1"
              value={val}
              onChange={(e) => handleChange(i, e.target.value)}
            />
          ))}
        </div>
        <div className="otp-actions">
          <span className="resend">Resend it</span>
          <span className="change-number" onClick={() => navigate('/login')}>CHANGE NUMBER</span>
        </div>
      </div>
    </div>
  );
}

export default Verify;
