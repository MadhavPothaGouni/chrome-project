import React from "react";
import "./Navbar.scss";
import chromeLogo from "../assets/chrome-logo.svg"; // add Chrome SVG

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <img src={chromeLogo} alt="Chrome" className="brand-logo" />
          <span className="brand-text">chrome</span>
        </div>
        <nav className="nav-links">
          <a href="#">Safety</a>
          <a href="#">By Google</a>
          <a href="#">Extensions ↗</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
