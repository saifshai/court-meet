// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Court Meet</h1>
        <p>Your ultimate platform to find and join local basketball games, or create your own meetup!</p>
        <div className="cta-buttons">
          <Link to="/search" className="cta-button">Find Meetups</Link>
          <Link to="/create" className="cta-button">Create Meetup</Link>
        </div>
      </header>
      <section className="featured-meetups">
        <h2>Featured Meetups</h2>
        <div className="meetups-list">
          <div className="meetup">
            <h3>Downtown Pickup Game</h3>
            <p>Location: Downtown Court</p>
            <p>Date: 2024-07-15</p>
            <p>Skill Level: Intermediate</p>
            <Link to="/details/1" className="details-link">View Details</Link>
          </div>
          <div className="meetup">
            <h3>Weekend Tournament</h3>
            <p>Location: Central Park</p>
            <p>Date: 2024-07-16</p>
            <p>Skill Level: Advanced</p>
            <Link to="/details/2" className="details-link">View Details</Link>
          </div>
          <div className="meetup">
            <h3>Casual Sunday Game</h3>
            <p>Location: Community Center</p>
            <p>Date: 2024-07-17</p>
            <p>Skill Level: Beginner</p>
            <Link to="/details/3" className="details-link">View Details</Link>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"Court Meet has completely changed the way I find basketball games. It's so easy to use!"</p>
          <p>- Jordan Matthews</p>
        </div>
        <div className="testimonial">
          <p>"I love organizing meetups through Court Meet. It's a fantastic platform!"</p>
          <p>- Alex Johnson</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

