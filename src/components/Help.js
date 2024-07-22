// src/components/Help.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Help.css';

const Help = () => {
  const { t } = useTranslation();
  return (
    <div className="help-container">
      <header className="help-header">
        <h1>helpsup</h1>
        <p>findgetintouch</p>
      </header>
      <section className="faqs">
        <h2>freqquest</h2>
        <div className="faq">
          <h3>howfind</h3>
          <p>tofind<strong>findMeetups</strong> pagefiltdown</p>
        </div>
        <div className="faq">
          <h3>howicreate</h3>
          <p>tocreate <strong>createMeetup</strong> pagedets</p>
        </div>
        <div className="faq">
          <h3>howconsu</h3>
          <p>iffurther</p>
        </div>
      </section>
      <section className="contact-form">
        <h2>contactUs</h2>
        <form>
          <label>
            name
            <input type="text" placeholder="yourName" />
          </label>
          <label>
            email
            <input type="email" placeholder="yourEmail" />
          </label>
          <label>
            Message
            <textarea placeholder="yourMessage"></textarea>
          </label>
          <button type="submit">sendMessage</button>
        </form>
      </section>
    </div>
  );
};

export default Help;
