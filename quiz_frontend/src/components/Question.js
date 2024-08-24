import React from 'react';

const Question = ({ question, handleAnswer }) => {
  const answers = [...question.incorrect_answers, question.correct_answer].sort();

  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      <div className="answer-buttons">
        {answers.map((answer, index) => {
          

          return (
            <button
              key={index}
              value={answer}
              className='answer-button'
              onClick={() => handleAnswer(answer === question.correct_answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Question;
