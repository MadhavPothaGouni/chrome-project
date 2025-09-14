import React from "react";
import "./index.scss";
import Navbar from "./components/Navbar";
import chromeLogo from "./assets/chrome-logo.svg";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src={chromeLogo} alt="Google Chrome Logo" className="hero-logo" />
          <h1 className="hero-title">The browser built to be yours</h1>
          <p className="hero-subtitle">
            Google Chrome is fast, secure, and free to download.
          </p>
          <div className="hero-buttons">
            <a href="#" className="download-btn">
              Download Chrome
            </a>
            <a href="#" className="learn-more">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
