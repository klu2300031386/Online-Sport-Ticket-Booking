import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';  {/* Add SignUp import */}
import Verify from './components/Verify';
import MinimalHeader from './components/MinimalHeader';
import Profile from './components/Profile';
import BookingPage from './components/BookingPage';
import StadiumBooking from './components/StadiumBooking';
import './app.css';

function LayoutRoutes() {
  const location = useLocation();
  const path = location.pathname;
  const isHomePage = path === '/';
  const showFooter = isHomePage;
  const showHeader = isHomePage ? <Header /> : <MinimalHeader />;
  
  return (
    <>
      {showHeader}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Add SignUp route */}
        <Route path="/verify" element={<Verify />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/book/:eventId" element={<StadiumBooking />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutRoutes />
    </Router>
  );
}

export default App;
