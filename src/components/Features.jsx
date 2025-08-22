import React from 'react'
import './Features.css'

const Features = () => {
  const activities = [
    { icon: '💪', label: 'Workout' },
    { icon: '📚', label: 'Reading' },
    { icon: '🏃', label: 'Running' },
    { icon: '🧘', label: 'Meditation' },
    { icon: '💧', label: 'Water' },
    { icon: '🥗', label: 'Healthy Eating' },
    { icon: '😴', label: 'Sleep' },
    { icon: '📝', label: 'Journaling' }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">
            Track any habit with friends
          </h2>
          <p className="features-subtitle">
            Choose from popular activities or create your own custom goals
          </p>
        </div>
        
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-icon">{activity.icon}</div>
              <span className="activity-label">{activity.label}</span>
            </div>
          ))}
        </div>

        <div className="features-highlight">
          <div className="highlight-item">
            <div className="highlight-icon">📸</div>
            <div className="highlight-content">
              <h3>Dual-Camera Proof</h3>
              <p>Take a selfie + rear camera photo to show you really did it</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🏆</div>
            <div className="highlight-content">
              <h3>Compete with Friends</h3>
              <p>See who's winning on the weekly leaderboard</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🔥</div>
            <div className="highlight-content">
              <h3>Build Streaks</h3>
              <p>Maintain consistency and watch your streaks grow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features