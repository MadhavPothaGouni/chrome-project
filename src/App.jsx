import React from "react";
import "./index.scss";
import Navbar from "./components/Navbar";
import chromeLogo from "./assets/chrome-logo.svg";
import Features from "./components/Features";


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
          
          {/* Primary download button */}
          <a href="#" className="download-btn">
            ⬇ Download Chrome
          </a>

          {/* Secondary link */}
          <a href="#" className="secondary-link">
            I want to update Chrome
          </a>

          {/* System info */}
          <p className="system-info">For Windows 11/10 64-bit</p>

          {/* Legal disclaimers */}
          <p className="small-text">
            Help make Google Chrome better by automatically sending usage statistics
            and crash reports to Google. <a href="#">Learn more</a>
          </p>
          <p className="small-text">
            By downloading Chrome, you agree to the{" "}
            <a href="#">Google Terms of Service</a> and{" "}
            <a href="#">Chrome and ChromeOS Additional Terms of Service</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
