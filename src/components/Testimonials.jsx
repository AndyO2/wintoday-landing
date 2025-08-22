import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This app has changed my life recently. Being able to track my goals and have people help keep me accountable has helped me to become a healthier person physically and mentally. Everyone should use this to improve themselves.",
      author: "Bruin S.",
      handle: "@bruinsalmon",
      avatar: "👨",
    },
    {
      quote: "With WinToday, I can win EVERY day!!!!!",
      author: "Lauren S.",
      handle: "@lamusique567",
      avatar: "👱‍♀️",
    },
    {
      quote:
        "I’ve recommended this app to my friends. A solid app to keep yourself and your friends accountable with maintaining a good habit. It’s a good tool to help achieve your personal goals.",
      author: "John C.",
      handle: "@J0HN2245",
      avatar: "👨",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What people are saying</h2>
          <p className="testimonials-subtitle">
            Real reviews from real users building better habits
          </p>
          <div className="social-proof">
            <div className="rating">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <span className="rating-text">5.0 stars on the App Store</span>
            </div>
          </div>
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
      </div>
    </section>
  );
};

export default Testimonials;
