import React, { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How does the dual-camera feature work?",
      answer: "When you check in, WinToday uses both your front and rear cameras simultaneously. This shows both your face and the activity you're completing, making it impossible to fake your progress."
    },
    {
      question: "Is WinToday free to use?",
      answer: "Yes! WinToday is completely free to download and use. There are no hidden fees or premium subscriptions required."
    },
    {
      question: "What devices does WinToday support?",
      answer: "WinToday is currently available for iOS devices running iOS 14.0 or later. We're working on an Android version coming soon!"
    },
    {
      question: "How do I find accountability partners?",
      answer: "You can invite friends directly through the app using their phone number or email. You can also connect with people in your area who share similar goals through our community features."
    },
    {
      question: "What happens if I miss a check-in?",
      answer: "Missing a check-in will break your streak, but you can always start again the next day. The key is consistency over perfection - building the habit is more important than maintaining a perfect streak."
    },
    {
      question: "Can I track multiple habits at once?",
      answer: "Absolutely! You can create and track multiple goals simultaneously. Each goal can have its own accountability partner and streak tracking."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about WinToday
          </p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ