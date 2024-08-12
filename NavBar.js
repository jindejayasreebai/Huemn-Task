// src/NavBar.js
import React from "react";
import "./NavBar.css"; // Import CSS file for styling
import chromeLogo from "./chrome.png"; // Import Chrome logo image

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">AI Innovations</li>
        <li className="navbar-item">Features</li>
        <li className="navbar-item">Safety</li>
        <li className="navbar-item">By Google</li>
        <li className="navbar-item">Extensions</li>
        {/* Add more items if needed */}
      </ul>
      <div className="chrome-section">
        <img src={chromeLogo} alt="Chrome Logo" className="chrome-logo" />
        <h1 className="chrome-tagline">The Browser Built to Be Yours</h1>
      </div>
      <div className="clickable-features">
        <a href="#updates" className="feature-link">
          Updates
        </a>
        <a href="#ai" className="feature-link">
          AI
        </a>
        <a href="#yours" className="feature-link">
          Yours
        </a>
        <a href="#safe" className="feature-link">
          Safe
        </a>
        <a href="#fast" className="feature-link">
          Fast
        </a>
        <a href="#by-google" className="feature-link">
          By Google
        </a>
      </div>
      <div className="installer-prompt">
        <p>Need any Chrome installer? Download Chrome</p>
      </div>
    </nav>
  );
};

export default NavBar;
