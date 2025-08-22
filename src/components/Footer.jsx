import React from 'react'
import logo from '../WinToday-logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="WinToday" className="footer-logo-image" />
            <p className="footer-tagline">Track with friends, Build better habits</p>
          </div>
          <div className="footer-nav">
            <a href="#features" className="footer-link">Features</a>
            <a href="#testimonials" className="footer-link">Testimonials</a>
            <a href="#how-it-works" className="footer-link">How it Works</a>
            <a 
              href="https://apps.apple.com/us/app/wintoday/id6738370856" 
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
            © {new Date().getFullYear()} WinToday. Built by Andrew Okamoto.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer