import React from "react";
import "../styles/Navbar.scss";


function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Left side: Brand */}
        <div className="navbar-brand">
          <span className="google">Google</span>
          <span className="chrome">Chrome</span>
        </div>

        {/* Right side: Nav Links */}
        <nav className="navbar-links">
          <a href="#">Features</a>
          <a href="#">Support</a>
          <a href="#">Download</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
