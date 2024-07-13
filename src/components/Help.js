// src/components/Help.js
import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-container">
      <header className="help-header">
        <h1>Help & Support</h1>
        <p>Find answers to your questions or get in touch with us.</p>
      </header>
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>How do I find a meetup?</h3>
          <p>To find a meetup, go to the <strong>Find Meetups</strong> page and use the filters to narrow down your search.</p>
        </div>
        <div className="faq">
          <h3>How do I create a meetup?</h3>
          <p>To create a meetup, go to the <strong>Create Meetup</strong> page and fill out the form with the necessary details.</p>
        </div>
        <div className="faq">
          <h3>How do I contact support?</h3>
          <p>If you need further assistance, you can contact our support team by filling out the form below or emailing us at support@courtmeet.com.</p>
        </div>
      </section>
      <section className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label>
            Name:
            <input type="text" placeholder="Your Name" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Your Email" />
          </label>
          <label>
            Message:
            <textarea placeholder="Your Message"></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Help;
