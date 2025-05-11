// BookingPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/bookingPage.css';

const BookingPage = () => {
  const [selectedSection, setSelectedSection] = useState('plans');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const EventCard = ({ title, venue, date, city, img }) => {
    const handleBooking = () => {
      const eventId = title.toLowerCase().replace(/\s+/g, '-');
      navigate(`/book/${eventId}`);
    };

    return (
      <div className="event-card">
        <img src={img} alt={title} />
        <div className="event-info">
          <strong>{title}</strong>
          <p>Venue: {venue}</p>
          <p>Date & Time: {date}</p>
          <p>City: {city}</p>
          <button className="book-button" onClick={handleBooking}>
            🎟️ Book Ticket
          </button>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'plans':
        return <p>Your planned bookings will appear here.</p>;

      case 'sports':
        return (
          <>
            <h3>🏟️ Sports Events</h3>
            <div className="event-grid">
              <EventCard
                title="FIFA World Cup Final"
                venue="Lusail Stadium"
                date="July 15, 2026 - 18:00"
                city="Doha, Qatar"
                img="/event1.jpg"
              />
              <EventCard
                title="Super Bowl LVIII"
                venue="Allegiant Stadium"
                date="Feb 11, 2026 - 17:30"
                city="Las Vegas, USA"
                img="/event2.jpg"
              />
              <EventCard
                title="NBA Finals Game 7"
                venue="Crypto.com Arena"
                date="June 20, 2025 - 19:00"
                city="Los Angeles, USA"
                img="/event3.jpg"
              />
              <EventCard
                title="Winter Olympics Hockey Final"
                venue="Beijing National Indoor Stadium"
                date="Feb 25, 2026 - 20:00"
                city="Beijing, China"
                img="/event6.jpg"
              />
            </div>
          </>
        );

      case 'concerts':
        return (
          <>
            <h3>🎤 Concerts</h3>
            <div className="event-grid">
              <EventCard
                title="Coldplay World Tour"
                venue="Wembley Stadium"
                date="Sept 10, 2025"
                city="London, UK"
                img="/concert1.jpg"
              />
              <EventCard
                title="Arijit Singh Live"
                venue="NSCI Dome"
                date="Oct 3, 2025"
                city="Mumbai, India"
                img="/concert2.jpg"
              />
              <EventCard
                title="Taylor Swift Eras Tour"
                venue="MetLife Stadium"
                date="Aug 22, 2025"
                city="New York, USA"
                img="/concert3.jpg"
              />
            </div>
          </>
        );

      case 'hotels':
        return (
          <>
            <h3>🏨 Nearby Hotels</h3>
            <ul>
              <li>🏨 Grand Park Hotel</li>
              <li>🏨 Elite Stay Inn</li>
              <li>🏨 Comfort Residency</li>
            </ul>
            <div className="map-container">
              <iframe
                title="Hotel Map"
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="booking-page">
      <div className="main-content">
        <div className="left-sidebar">
          <div onClick={() => setSelectedSection('plans')}>📅 My Plans</div>
          <div onClick={() => setSelectedSection('sports')}>🏟️ Sports Events</div>
          <div onClick={() => setSelectedSection('concerts')}>🎤 Concerts</div>
          <div onClick={() => setSelectedSection('hotels')}>🏨 Near Hotels</div>
        </div>

        <div className="middle-line">
          <div className="line"></div>
        </div>

        <div className="right-section">
          <div className="top-right-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="content-section">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
