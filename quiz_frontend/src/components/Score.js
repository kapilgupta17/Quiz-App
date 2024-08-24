import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Score = ({ score }) => {
  const navigate = useNavigate();

  const submitScore = () => {
    axios.post('http://localhost:8000/api/save-score/', {
      username: 'Player1',
      score: score
    }).then(() => {
      alert('Score Submitted!');
      navigate('/');
    }).catch(error => {
      console.error('Error submitting score:', error);
      alert('Failed to submit score.');
    });
  };

  return (
    <div className="score-container">
      <h1>Your score: {score}</h1>
      <button onClick={submitScore}>Submit Score</button><br/>
    </div>
  );
};

export default Score;
