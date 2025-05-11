
import React from "react";
import "../styling/footer.css"; 

function Footer() {
  return (
    <footer className="footer-container bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        <div>
          <h2 className="font-semibold mb-2">Contact Us</h2>
          <p>Email: support@sportmark.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Stadium Road, City, Country</p>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Legal</h2>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4 text-sm">
        © 2025 SPORTMARK. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
