import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import MeetupDetails from './components/MeetupDetails';
import CreateMeetup from './components/CreateMeetup';
import UserProfile from './components/UserProfile';
import Help from './components/Help';
import LanguageSwitcher from './components/LanguageSwitcher';
import './App.css';

const sampleUser = {
  name: 'Jordan Matthews',
  bio: 'Basketball enthusiast and organizer.'
};

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

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Court Meet</h1>
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/search">Find Meetups</Link> | 
            <Link to="/create">Create Meetup</Link> | 
            <Link to="/help">Help</Link>
          </nav>
          <LanguageSwitcher />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/details/:id" element={<MeetupDetails meetups={sampleMeetups} />} />
            <Route path="/create" element={<CreateMeetup />} />
            <Route path="/profile/:id" element={<UserProfile user={sampleUser} />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        <footer>
          <p>© 2024 Court Meet. All rights reserved.</p>
          <p>
            <a href="https://twitter.com">Twitter</a> | <a href="https://facebook.com">Facebook</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
