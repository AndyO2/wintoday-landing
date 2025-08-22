import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Set Your Goal",
      description: "Choose a habit you want to build or create a custom goal that matters to you.",
      icon: "🎯"
    },
    {
      step: "2", 
      title: "Find an Accountability Partner",
      description: "Connect with a friend who shares your commitment to building better habits.",
      icon: "🤝"
    },
    {
      step: "3",
      title: "Check-In with Proof",
      description: "Use dual-camera to show both your face and your completed activity. No faking allowed!",
      icon: "📸"
    },
    {
      step: "4",
      title: "Build Streaks & Compete",
      description: "Watch your consistency grow and compete with friends on the weekly leaderboard.",
      icon: "🏆"
    }
  ]

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">
            How it works
          </h2>
          <p className="how-it-works-subtitle">
            Building better habits is simple when you have real accountability
          </p>
        </div>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-icon-container">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h3 className="cta-title">Ready to start winning today?</h3>
          <a 
            href="https://apps.apple.com/us/app/wintoday/id6738370856?platform=iphone"
            className="cta-button-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on the App Store"
              className="app-store-badge-large"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks