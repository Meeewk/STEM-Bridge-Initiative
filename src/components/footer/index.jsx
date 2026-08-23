import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>STEM Bridge Initiative</h4>
          <p>
            Bridging the digital divide by building computer labs and providing STEM education.
          </p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <a href="mailto:stembridgeinitiativeyan@gmail.com">stembridgeinitiativeyan@gmail.com</a>
          <a href="tel:+14254039029">+1-425-403-9029</a>
        </div>

        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/stembridgeinitiative/" target="_blank" rel="noopener noreferrer">Instagram (English)</a>
            <a href="https://www.instagram.com/armstembridgeinitiative/" target="_blank" rel="noopener noreferrer">Instagram (Armenian)</a>
            <a href="https://www.facebook.com/STEMBridgeInitiative" target="_blank" rel="noopener noreferrer">Facebook (English)</a>
            <a href="https://www.facebook.com/profile.php?id=61577021821704" target="_blank" rel="noopener noreferrer">Facebook (Armenian)</a>
            <a href="https://www.tiktok.com/@stembridgeinitiative" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 STEM Bridge Initiative. All rights reserved.</p>
      </div>
    </footer>
  );
}
