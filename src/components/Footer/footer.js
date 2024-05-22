// Footer.jsx
import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <h3>Trademark</h3>
          <p>© 2024 Admin Dashboard. All rights reserved.</p>
        </div>
        <div className="footer-item">
          <h3>Contact Us</h3>
          <p><i class="fa-solid fa-map-location"></i>123 Main Street, Bengaluru, India</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="footer-item">
          <h3>Social Media</h3>
          <p>Follow us on:</p>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
