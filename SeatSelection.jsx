import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const SeatSelection = () => {
    const [filter, setFilter] = useState('All');
    const [selectedSeats, setSelectedSeats] = useState([]);
    const location = useLocation();
    const event = location.state?.event;
  
    const bookedSeats = ['A1', 'A3', 'B2']; // Simulated booked seat IDs
    const rows = ['A', 'B', 'C'];
    const cols = [1, 2, 3, 4, 5];
  
    const toggleSeat = (seat) => {
      if (bookedSeats.includes(seat)) return; // Ignore booked
      setSelectedSeats((prev) =>
        prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
      );
    };
  
    const proceedToPayment = () => {
      alert(`Proceeding with seats: ${selectedSeats.join(', ')}`);
      // Navigate to payment page or show payment component
    };
  
    return (
      <div className="seat-selection-container">
        {/* Existing event and filter UI here */}
        <div style={{ marginTop: '30px' }}>
          <h3>Select Seats</h3>
          <div style={{ display: 'inline-block', marginTop: '10px' }}>
            {rows.map((row) => (
              <div key={row} style={{ display: 'flex', justifyContent: 'center' }}>
                {cols.map((col) => {
                  const seatId = `${row}${col}`;
                  const isBooked = bookedSeats.includes(seatId);
                  const isSelected = selectedSeats.includes(seatId);
                  return (
                    <div
                      key={seatId}
                      onClick={() => toggleSeat(seatId)}
                      style={{
                        width: '40px',
                        height: '40px',
                        margin: '5px',
                        backgroundColor: isBooked
                          ? 'red'
                          : isSelected
                          ? 'orange'
                          : 'lightgreen',
                        border: '1px solid black',
                        textAlign: 'center',
                        lineHeight: '40px',
                        cursor: isBooked ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {seatId}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          {selectedSeats.length > 0 && (
            <button
              onClick={proceedToPayment}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#007bff',
                color: 'black',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Proceed to Payment
            </button>
          )}
        </div>
      </div>
    );
  };
  

export default SeatSelection;
