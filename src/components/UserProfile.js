// src/components/UserProfile.js
import React, { useState } from 'react';

const UserProfile = ({ user }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleAddReview = () => {
    setReviews([...reviews, newReview]);
    setNewReview('');
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
      <textarea value={newReview} onChange={handleReviewChange} />
      <button onClick={handleAddReview}>Add Review</button>
    </div>
  );
};

export default UserProfile;
