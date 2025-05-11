import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css'; // Importing the CSS file

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedSeats = location.state?.selectedSeats || [];

  const handlePayment = () => {
    alert(`Payment successful for seats: ${selectedSeats.join(', ')}`);
    // Navigate to a confirmation page or back to home
    navigate('/confirmation', { state: { seats: selectedSeats } });
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>

      <div className="payment-info">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Card Number</label>
        <input type="text" placeholder="1234 5678 9012 3456" maxLength="19" />

        <label>Expiration Date</label>
        <input type="text" placeholder="MM/YY" maxLength="5" />

        <label>CVV</label>
        <input type="password" placeholder="123" maxLength="3" />
      </div>

      <div className="selected-seats">
        <h4>Seats Selected: {selectedSeats.join(', ')}</h4>
      </div>

      <button className="pay-button" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
