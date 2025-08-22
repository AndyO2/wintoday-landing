import React from "react";
import logo from "../WinToday-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="WinToday" className="logo-image" />
            <span className="logo-text">WinToday.</span>
          </div>
          <nav className="nav">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>
            <a href="#how-it-works" className="nav-link">
              How it Works
            </a>
          </nav>
          <a
            href="https://apps.apple.com/us/app/wintoday/id6738370856?platform=iphone"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try for free
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
