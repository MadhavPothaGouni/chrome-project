import React from "react";
import "./Hero.scss";
import chromeLogo from "../assets/chrome-logo.svg";

const Hero = () => {
  return (
    <section className="hero">
      <img src={chromeLogo} alt="Chrome logo" className="hero-logo" />
      <h1>The browser built to be yours</h1>
      <a href="#" className="btn-primary">
        ⬇ Download Chrome
      </a>
      <a href="#" className="link-secondary">I want to update Chrome</a>
      <p className="system-info">For Windows 11/10 64-bit</p>
      <p className="small-text">
        Help make Google Chrome better by automatically sending usage statistics
        and crash reports to Google. <a href="#">Learn more</a>
      </p>
      <p className="small-text">
        By downloading Chrome, you agree to the <a href="#">Google Terms of Service</a> and
        <a href="#"> Chrome and ChromeOS Additional Terms of Service</a>
      </p>
    </section>
  );
};

export default Hero;
