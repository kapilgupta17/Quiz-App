import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import Score from './Score';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
 
  
  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/questions/');
        const fetchedQuestions = response.data.results;
        updateQuestions(fetchedQuestions); 
      } catch (error) {
        console.error('There was an error fetching the questions!', error);
      } finally {
        setLoading(false); // Stop loading regardless of success or error
      }
    };

    fetchQuestions();
  }, []); 

  // Function to update questions state
  const updateQuestions = (newQuestions) => {
    if (Array.isArray(newQuestions) && newQuestions.length > 0) {
      setQuestions(newQuestions);
    }
  };

  

  if (loading) {
    return <div>Loading...</div>; // Show loading message
  }

  if (questions.length === 0) {
    return <div>No questions available</div>; // Handle empty questions
  }

  const handleAnswer = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1);
      
    }
  
    // Add a 2-second delay before moving to the next question
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        
      } else {
        setShowScore(true);
      }
    }, 2000); 
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <Score score={score} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
          
        />
      )}
    </div>
  );
};

export default Quiz;