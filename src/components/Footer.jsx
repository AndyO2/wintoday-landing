import React from "react";
import logo from "../WinToday-logo.png";
import "./Footer.css";

const Footer = ({ onShowPrivacy }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="WinToday" className="footer-logo-image" />
              <span className="footer-logo-text">WinToday.</span>
            </div>
            <p className="footer-tagline">Building good habits, together.</p>
          </div>
          <div className="footer-nav">
            {/* <a href="#features" className="footer-link">
              Features
            </a> */}
            <a href="#testimonials" className="footer-link">
              Testimonials
            </a>
            
            {/* <a href="#how-it-works" className="footer-link">
              How it Works
            </a> */}
            <a
              href="https://apps.apple.com/us/app/wintoday/id6738370856?platform=iphone"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              App Store
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} WinToday.
          </p>
          <div className="footer-legal">
            <button onClick={onShowPrivacy} className="footer-legal-link">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
