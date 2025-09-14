// src/components/Hero.jsx
import React from "react";
import chromeLogo from "../assets/chrome-logo.svg"; // make sure you have a Chrome logo SVG in assets

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Chrome Logo */}
        <img src={chromeLogo} alt="Chrome Logo" className="chrome-logo" />

        {/* Headline */}
        <h1 className="hero-title">The browser built to be yours</h1>

        {/* Subtext */}
        <p className="hero-subtext">
          Chrome brings you the best of Google with powerful features and security.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#" className="btn-primary">
            Download Chrome
          </a>
          <p className="hero-note">For Windows 11/10 64-bit</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
