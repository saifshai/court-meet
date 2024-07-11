// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import MeetupDetails from './components/MeetupDetails';
import CreateMeetup from './components/CreateMeetup';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Court Meet</h1>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/search">Find Meetups</Link> | 
          <Link to="/create">Create Meetup</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchResults} />
          <Route path="/details" component={MeetupDetails} />
          <Route path="/create" component={CreateMeetup} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;

