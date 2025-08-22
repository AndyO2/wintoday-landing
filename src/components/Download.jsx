import React from 'react'
import './Download.css'

const Download = () => {
  return (
    <section className="download">
      <div className="container">
        <div className="download-content">
          <div className="download-text">
            <h2 className="download-title">
              Ready to Win Today?
            </h2>
            <p className="download-description">
              Join thousands of people who are turning their goals into reality 
              with proof-based accountability. Available free on iOS.
            </p>
            <div className="download-stats">
              <div className="stat">
                <div className="stat-number">5.0</div>
                <div className="stat-label">App Store Rating</div>
              </div>
              <div className="stat">
                <div className="stat-number">Free</div>
                <div className="stat-label">No Hidden Costs</div>
              </div>
              <div className="stat">
                <div className="stat-number">iOS 14+</div>
                <div className="stat-label">Compatible</div>
              </div>
            </div>
            <div className="download-cta">
              <a 
                href="https://apps.apple.com/us/app/wintoday/id6738370856" 
                className="download-btn primary"
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
          <div className="download-visual">
            <div className="testimonial-card">
              <div className="quote">
                "Finally, an accountability app that actually works. 
                No more fake check-ins or excuses!"
              </div>
              <div className="author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <div className="author-name">App Store Review</div>
                  <div className="author-rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download