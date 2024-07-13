// src/components/MeetupDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MeetupDetails.css';

const MeetupDetails = ({ meetups }) => {
  const { id } = useParams();
  const meetup = meetups.find(m => m.id === parseInt(id));
  const [reminder, setReminder] = useState('');

  const handleReminderChange = (e) => {
    setReminder(e.target.value);
  };

  const handleSetReminder = () => {
    alert(`Reminder set for ${reminder}`);
  };

  if (!meetup) {
    return <p>Meetup not found</p>;
  }

  return (
    <div className="meetup-details-container">
      <h1 className="meetup-title">{meetup.title}</h1>
      <div className="meetup-info">
        <p><strong>Location:</strong> {meetup.location}</p>
        <p><strong>Date:</strong> {meetup.date}</p>
        <p><strong>Skill Level:</strong> {meetup.skillLevel}</p>
        <p><strong>Participants:</strong> {meetup.participants}</p>
      </div>
      <div className="reminder-section">
        <label className="reminder-label">
          Set Reminder:
          <input 
            type="datetime-local" 
            value={reminder} 
            onChange={handleReminderChange} 
            className="reminder-input"
          />
        </label>
        <button onClick={handleSetReminder} className="reminder-button">Set Reminder</button>
      </div>
    </div>
  );
};

export default MeetupDetails;
