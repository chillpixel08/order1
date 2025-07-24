// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} OrderTrack. All rights reserved.</p>
        <p>Made with ❤️ by Akash Kumar</p>
      </div>
    </footer>
  );
};

export default Footer;
