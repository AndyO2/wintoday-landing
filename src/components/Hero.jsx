import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Building good habits, together.
            </h1>
            <p className="hero-description">
              Show proof, not promises. WinToday uses dual-camera check-ins to create 
              real accountability between you and your friends. No more fake progress updates.
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
            <div className="phone-cluster">
              <div className="phone-mockup primary">
                <div className="phone-screen">
                  <div className="app-content">
                    <div className="header-bar">
                      <span className="app-title">WinToday</span>
                    </div>
                    <div className="goal-card">
                      <div className="goal-icon">💪</div>
                      <div className="goal-title">Daily Workout</div>
                      <div className="streak">🔥 7 day streak</div>
                      <div className="check-in-btn">Check In Now</div>
                    </div>
                    <div className="friend-activity">
                      <div className="activity-item">
                        <div className="avatar">👤</div>
                        <span>Sarah completed her run!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="phone-mockup secondary">
                <div className="phone-screen">
                  <div className="app-content">
                    <div className="leaderboard">
                      <h3>Weekly Leaderboard</h3>
                      <div className="leader-item">
                        <span>1. You - 6 wins</span>
                      </div>
                      <div className="leader-item">
                        <span>2. Alex - 5 wins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
