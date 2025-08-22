import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Finally an accountability app that actually works. No more fake check-ins!",
      author: "Sarah M.",
      handle: "@sarahfitness",
      avatar: "👩"
    },
    {
      quote: "The dual camera feature is genius. My workout partner can't fake progress anymore 😂",
      author: "Mike R.",
      handle: "@mikelifts",
      avatar: "👨"
    },
    {
      quote: "Love competing with friends on the leaderboard. It's made me so much more consistent.",
      author: "Jessica L.",
      handle: "@jessruns",
      avatar: "👱‍♀️"
    }
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            What people are saying
          </h2>
          <p className="testimonials-subtitle">
            Real reviews from real users building better habits
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-handle">{testimonial.handle}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="social-proof">
          <div className="rating">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <span className="rating-text">5.0 stars on the App Store</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials