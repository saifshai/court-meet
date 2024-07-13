import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css'; // Ensure the CSS file is imported

const SearchResults = () => {
  const sampleMeetups = [
    {
      id: 1,
      title: 'Downtown Pickup Game',
      location: 'Downtown Court',
      date: '2024-07-15',
      skillLevel: 'Intermediate',
      participants: 10,
    },
    {
      id: 2,
      title: 'Weekend Tournament',
      location: 'Central Park',
      date: '2024-07-16',
      skillLevel: 'Advanced',
      participants: 8,
    },
    {
      id: 3,
      title: 'Casual Sunday Game',
      location: 'Community Center',
      date: '2024-07-17',
      skillLevel: 'Beginner',
      participants: 12,
    },
  ];

  const [filters, setFilters] = useState({
    date: '',
    location: '',
    skillLevel: '',
    gameType: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredMeetups = sampleMeetups.filter((meetup) => {
    return (
      (!filters.date || meetup.date === filters.date) &&
      (!filters.location || meetup.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.skillLevel || meetup.skillLevel.toLowerCase().includes(filters.skillLevel.toLowerCase())) &&
      (!filters.gameType || meetup.title.toLowerCase().includes(filters.gameType.toLowerCase()))
    );
  });

  return (
    <div>
      <h1>Search Results</h1>
      <div className="filters">
        <label>
          Date:
          <input type="date" name="date" value={filters.date} onChange={handleFilterChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" placeholder="Location" value={filters.location} onChange={handleFilterChange} />
        </label>
        <label>
          Skill Level:
          <input type="text" name="skillLevel" placeholder="Skill Level" value={filters.skillLevel} onChange={handleFilterChange} />
        </label>
        <label>
          Game Type:
          <input type="text" name="gameType" placeholder="Game Type" value={filters.gameType} onChange={handleFilterChange} />
        </label>
      </div>
      <div className="meetups-list">
        {filteredMeetups.map((meetup) => (
          <Link to={`/details/${meetup.id}`} key={meetup.id} className="meetup-link">
            <div className="meetup">
              <h2>{meetup.title}</h2>
              <div className="meetup-details">
                <p>Location: {meetup.location}</p>
                <p>Date: {meetup.date}</p>
                <p>Skill Level: {meetup.skillLevel}</p>
                <p>Participants: {meetup.participants}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
