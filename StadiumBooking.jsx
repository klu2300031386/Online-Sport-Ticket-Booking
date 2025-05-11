// StadiumBooking.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import '../styling/stadiumBooking.css';

const StadiumBooking = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState('stadium'); // stadium → seats → payment
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [filter, setFilter] = useState('All');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });

  // This would come from your API in a real application
  const eventDetails = {
    'fifa-world-cup-final': {
      title: 'FIFA World Cup Final',
      venue: 'Lusail Stadium',
      date: 'July 15, 2026 - 18:00',
      city: 'Doha, Qatar',
      img: '/event1.jpg'
    },
    'super-bowl-lviii': {
      title: 'Super Bowl LVIII',
      venue: 'Allegiant Stadium',
      date: 'Feb 11, 2026 - 17:30',
      city: 'Las Vegas, USA',
      img: '/event2.jpg'
    },
    'nba-finals-game-7': {
      title: 'NBA Finals Game 7',
      venue: 'Crypto.com Arena',
      date: 'June 20, 2025 - 19:00',
      city: 'Los Angeles, USA',
      img: '/event3.jpg'
    },
  
    'coldplay-world-tour': {
      title: 'Coldplay World Tour',
      venue: 'Wembley Stadium',
      date: 'Sept 10, 2025',
      city: 'London, UK',
      img: '/concert1.jpg'
    },
    'arijit-singh-live': {
      title: 'Arijit Singh Live',
      venue: 'NSCI Dome',
      date: 'Oct 3, 2025',
      city: 'Mumbai, India',
      img: '/concert2.jpg'
    },
    'taylor-swift-eras-tour': {
      title: 'Taylor Swift Eras Tour',
      venue: 'MetLife Stadium',
      date: 'Aug 22, 2025',
      city: 'New York, USA',
      img: '/concert3.jpg'
    }
  };

  const event = eventDetails[eventId] || {
    title: 'Unknown Event',
    venue: 'Venue',
    date: 'Date TBD',
    city: 'City',
    img: '/placeholder.jpg'
  };

  // Stadium sections with prices
  const stadiumSections = [
    { id: 'premium', name: 'Premium', color: '#FF5252', price: 300 },
    { id: 'vip', name: 'VIP', color: '#FFAB40', price: 200 },
    { id: 'standard', name: 'Standard', color: '#66BB6A', price: 100 },
    { id: 'economy', name: 'Economy', color: '#42A5F5', price: 50 }
  ];

  // Fixed array of bookedSeats
  const bookedSeats = {
    premium: ['A1', 'A3', 'B2'],
    vip: ['C2', 'D1', 'D5'],
    standard: ['E3', 'F4', 'G1'],
    economy: ['H2', 'I5', 'J3']
  };

  // Price filters
  const priceFilters = [
    { name: 'All', range: [0, 1000] },
    { name: 'Under $100', range: [0, 100] },
    { name: '$100 - $200', range: [100, 200] },
    { name: 'Over $200', range: [200, 1000] }
  ];

  // Filter sections based on price
  const filteredSections = stadiumSections.filter(section => {
    if (filter === 'All') return true;
    const selectedFilter = priceFilters.find(f => f.name === filter);
    return section.price >= selectedFilter.range[0] && section.price <= selectedFilter.range[1];
  });

  // Generate rows and columns for seats
  const getSeatingGrid = (section) => {
    const rows = ['A', 'B', 'C', 'D', 'E'];
    const cols = [1, 2, 3, 4, 5];
    return { rows, cols };
  };

  // Handle section selection
  const handleSectionSelect = (sectionId) => {
    setSelectedSection(sectionId);
    setCurrentStep('seats');
    setSelectedSeats([]);
  };

  // Toggle seat selection
  const toggleSeat = (seatId) => {
    if (bookedSeats[selectedSection]?.includes(seatId)) return; // Ignore booked seats
    
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(s => s !== seatId) 
        : [...prev, seatId]
    );
  };

  // Calculate total cost
  const calculateTotal = () => {
    if (!selectedSection) return 0;
    const sectionPrice = stadiumSections.find(s => s.id === selectedSection)?.price || 0;
    return selectedSeats.length * sectionPrice;
  };

  // Process payment
  const processPayment = () => {
    // In a real app, you would integrate with a payment gateway here
    alert(`Payment processed successfully for ${selectedSeats.length} seats in ${selectedSection} section!`);
    setShowFeedback(true);
  };

  // Handle input change for payment form
  const handlePaymentInput = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({ ...prev, [name]: value }));
  };

  // Render stadium map
  const renderStadiumMap = () => {
    return (
      <div className="stadium-container">
        <h2>{event.title} - Select Section</h2>
        <div className="event-details">
          <div className="event-image">
            <img src={event.img} alt={event.title} />
          </div>
          <div className="event-info">
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Date & Time:</strong> {event.date}</p>
            <p><strong>City:</strong> {event.city}</p>
          </div>
        </div>

        <div className="price-filter">
          <label>Filter by Price: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            {priceFilters.map(filter => (
              <option key={filter.name} value={filter.name}>{filter.name}</option>
            ))}
          </select>
        </div>

        <div className="stadium-map">
          <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
            {/* Field */}
            <rect x="150" y="100" width="200" height="140" fill="#90EE90" stroke="#333" />
            
            {/* Stadium sections */}
            {filteredSections.map((section, index) => {
              // Position sections around the field
              let path;
              switch(index) {
                case 0: // Top (Premium)
                  path = "M150,80 L350,80 L350,100 L150,100 Z";
                  break;
                case 1: // Right (VIP)
                  path = "M350,100 L380,100 L380,240 L350,240 Z";
                  break;
                case 2: // Bottom (Standard)
                  path = "M150,240 L350,240 L350,260 L150,260 Z";
                  break;
                case 3: // Left (Economy)
                  path = "M120,100 L150,100 L150,240 L120,240 Z";
                  break;
                default:
                  path = "";
              }
              
              return (
                <g key={section.id} onClick={() => handleSectionSelect(section.id)} style={{cursor: 'pointer'}}>
                  <path d={path} fill={section.color} stroke="#333" />
                  <text 
                    x={index === 0 ? 250 : index === 1 ? 365 : index === 2 ? 250 : 135} 
                    y={index === 0 ? 95 : index === 1 ? 170 : index === 2 ? 255 : 170} 
                    textAnchor="middle" 
                    fill="#000" 
                    fontSize="12"
                  >
                    {section.name} (${section.price})
                  </text>
                </g>
              );
            })}
            
            {/* Stage/Center */}
            <ellipse cx="250" cy="170" rx="40" ry="20" fill="#DDD" stroke="#333" />
            <text x="250" y="175" textAnchor="middle" fill="#000" fontSize="10">Stage</text>
          </svg>
        </div>

        <div className="legend">
          <h4>Price Legend:</h4>
          <div className="legend-items">
            {stadiumSections.map(section => (
              <div key={section.id} className="legend-item">
                <span className="color-box" style={{ backgroundColor: section.color }}></span>
                <span>{section.name}: ${section.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState({
    rating: 0,
    answers: {}
  });
  
  // Feedback questions
  const feedbackQuestions = [
    "How satisfied are you with the booking process?",
    "Was the seat selection interface easy to use?",
    "How likely are you to recommend our service to others?",
    "Did you find all the information you needed about the event?",
    "How would you rate the overall experience?"
  ];
  const handleFeedbackChange = (questionIndex, value) => {
    setFeedback(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionIndex]: value
      }
    }));
  };
  
  const submitFeedback = () => {
    alert('Thank you for your feedback!');
    navigate('/book'); // Navigate back to booking page after feedback
  };
  
  // Add this new render function
  const renderFeedback = () => {
    return (
      <div className="feedback-container">
        <h2>Thank You for Your Booking!</h2>
        <p>We'd appreciate your feedback to help us improve our service.</p>
        
        <div className="feedback-form">
          {feedbackQuestions.map((question, index) => (
            <div key={index} className="feedback-question">
              <p>{question}</p>
              <div className="rating-scale">
                {[1, 2, 3, 4, 5].map((num) => (
                  <label key={num}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={num}
                      onChange={() => handleFeedbackChange(index, num)}
                      checked={feedback.answers[index] === num}
                    />
                    <span>{num}</span>
                  </label>
                ))}
              </div>
              <div className="scale-labels">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>
          ))}
          
          <div className="feedback-comment">
            <label>Additional comments (optional):</label>
            <textarea 
              rows="4"
              placeholder="Your suggestions or comments..."
            />
          </div>
          
          <button 
            className="submit-feedback"
            onClick={submitFeedback}
            disabled={Object.keys(feedback.answers).length < feedbackQuestions.length}
          >
            Submit Feedback
          </button>
        </div>
      </div>
    );
  };
  // Render seat selection
  const renderSeatSelection = () => {
    if (!selectedSection) return null;
    
    const section = stadiumSections.find(s => s.id === selectedSection);
    const { rows, cols } = getSeatingGrid();
    
    return (
      <div className="seat-selection">
        <button className="back-button" onClick={() => setCurrentStep('stadium')}>
          &larr; Back to Stadium Map
        </button>
        
        <h2>Select Seats - {section.name} Section</h2>
        <p className="section-info">Price per seat: ${section.price}</p>
        
        <div className="seating-grid">
          <div className="stage">STAGE</div>
          {rows.map(row => (
            <div key={row} className="seat-row">
              <div className="row-label">{row}</div>
              {cols.map(col => {
                const seatId = `${row}${col}`;
                const isBooked = bookedSeats[selectedSection]?.includes(seatId);
                const isSelected = selectedSeats.includes(seatId);
                
                return (
                  <div 
                    key={seatId}
                    className={`seat ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleSeat(seatId)}
                    title={isBooked ? 'Already Booked' : `Seat ${seatId}`}
                  >
                    {seatId}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        
        <div className="seat-legend">
          <div className="legend-item">
            <div className="seat sample"></div>
            <span>Available</span>
          </div>
          <div className="legend-item">
            <div className="seat sample selected"></div>
            <span>Selected</span>
          </div>
          <div className="legend-item">
            <div className="seat sample booked"></div>
            <span>Booked</span>
          </div>
        </div>
        
        <div className="summary">
          <h3>Booking Summary</h3>
          <p><strong>Section:</strong> {section.name}</p>
          <p><strong>Seats:</strong> {selectedSeats.join(', ') || 'None selected'}</p>
          <p><strong>Price per seat:</strong> ${section.price}</p>
          <p><strong>Total:</strong> ${calculateTotal()}</p>
        </div>
        
        {selectedSeats.length > 0 && (
          <button 
            className="proceed-button"
            onClick={() => setCurrentStep('payment')}
          >
            Proceed to Payment
          </button>
        )}
      </div>
    );
  };

  // Render payment form
  const renderPaymentForm = () => {
    const section = stadiumSections.find(s => s.id === selectedSection);
    
    return (
      <div className="payment-container">
        <button className="back-button" onClick={() => setCurrentStep('seats')}>
          &larr; Back to Seat Selection
        </button>
        
        <h2>Payment</h2>
        
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p><strong>Event:</strong> {event.title}</p>
          <p><strong>Venue:</strong> {event.venue}</p>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Section:</strong> {section.name}</p>
          <p><strong>Seats:</strong> {selectedSeats.join(', ')}</p>
          <p><strong>Total Amount:</strong> ${calculateTotal()}</p>
        </div>
        
        <div className="payment-methods">
          <h3>Select Payment Method</h3>
          <div className="payment-options">
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="credit" 
                checked={paymentMethod === 'credit'} 
                onChange={() => setPaymentMethod('credit')} 
              />
              Credit Card
            </label>
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="debit" 
                checked={paymentMethod === 'debit'} 
                onChange={() => setPaymentMethod('debit')} 
              />
              Debit Card
            </label>
            <label>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="wallet" 
                checked={paymentMethod === 'wallet'} 
                onChange={() => setPaymentMethod('wallet')} 
              />
              Digital Wallet
            </label>
          </div>
        </div>
        
        {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
          <div className="card-details">
            <h3>Card Details</h3>
            <div className="form-group">
              <label>Card Number</label>
              <input 
                type="text" 
                name="cardNumber" 
                placeholder="1234 5678 9012 3456" 
                value={paymentDetails.cardNumber} 
                onChange={handlePaymentInput} 
              />
            </div>
            <div className="form-group">
              <label>Cardholder Name</label>
              <input 
                type="text" 
                name="cardName" 
                placeholder="John Doe" 
                value={paymentDetails.cardName} 
                onChange={handlePaymentInput} 
              />
            </div>
            <div className="form-row">
              <div className="form-group half">
                <label>Expiry Date</label>
                <input 
                  type="text" 
                  name="expiry" 
                  placeholder="MM/YY" 
                  value={paymentDetails.expiry} 
                  onChange={handlePaymentInput} 
                />
              </div>
              <div className="form-group half">
                <label>CVV</label>
                <input 
                  type="text" 
                  name="cvv" 
                  placeholder="123" 
                  maxLength="3" 
                  value={paymentDetails.cvv} 
                  onChange={handlePaymentInput} 
                />
              </div>
            </div>
          </div>
        )}
        
        {paymentMethod === 'wallet' && (
          <div className="wallet-options">
            <h3>Select Wallet</h3>
            <div className="wallet-buttons">
              <button className="wallet-button">PayPal</button>
              <button className="wallet-button">Apple Pay</button>
              <button className="wallet-button">Google Pay</button>
            </div>
          </div>
        )}
        
        <button 
          className="payment-button"
          onClick={processPayment}
          disabled={
            (paymentMethod === 'credit' || paymentMethod === 'debit') && 
            (!paymentDetails.cardNumber || !paymentDetails.cardName || !paymentDetails.expiry || !paymentDetails.cvv)
          }
        >
          Pay ${calculateTotal()}
        </button>
      </div>
    );
  };

  // Render current step
  const renderCurrentStep = () => {
    if (showFeedback) return renderFeedback();
    
    switch (currentStep) {
      case 'stadium':
        return renderStadiumMap();
      case 'seats':
        return renderSeatSelection();
      case 'payment':
        return renderPaymentForm();
      default:
        return renderStadiumMap();
    }
  };

  return (
    <div className="stadium-booking">
      <div className="booking-progress">
        <div className={`progress-step ${currentStep === 'stadium' ? 'active' : ''}`}>
          1. Select Section
        </div>
        <div className={`progress-step ${currentStep === 'seats' ? 'active' : ''}`}>
          2. Choose Seats
        </div>
        <div className={`progress-step ${currentStep === 'payment' ? 'active' : ''}`}>
          3. Payment
        </div>
      </div>
      
      {renderCurrentStep()}
    </div>
  );
};

export default StadiumBooking;