import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/Frame3.png",
    "/Frame11.png",
    "/Frame7.png",
    "/Frame15.png",
    "/Frame2.png",
    "/Frame9.png",
    "/Frame14.png",
    "/Frame5.png",
    "/Frame18.png",
    "/Frame1.png",
    "/Frame13.png",
    "/Frame6.png",
    "/Frame10.png",
    "/Frame4.png",
    "/Frame17.png",
    "/Frame8.png",
    "/Frame16.png",
    "/Frame19.png",
    "/Frame20.png",
    "/Frame21.png",
    "/Frame22.png",
    "/Frame23.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Building good habits, together.</h1>
            <p className="hero-description">
              Show proof, not promises. WinToday uses dual-camera check-ins to
              create real accountability between you and your friends.
            </p>
            <div className="hero-cta">
              <a
                href="https://apps.apple.com/us/app/wintoday/id6738370856?platform=iphone"
                className="download-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="app-store-badge"
                />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="screenshot-container">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`WinToday App Screenshot ${index + 1}`}
                  className={`app-screenshot ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
