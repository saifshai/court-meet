import React, { useState } from 'react';

const CreateMeetup = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [skillLevel, setSkillLevel] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Meetup created with details:', { location, date, time, skillLevel });
    // You can add more logic here to handle the form data, such as sending it to a backend server
  };

  return (
    <div>
      <h1>Create a Meetup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          Skill Level:
          <input
            type="text"
            placeholder="Skill Level"
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Meetup</button>
      </form>
    </div>
  );
};

export default CreateMeetup;
