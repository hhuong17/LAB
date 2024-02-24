import React, { useState, useEffect } from "react";

const QuizApp = () => {
  const [questions] = useState([
    {
      id: 1,
      questionText: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      id: 2,
      questionText: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter",
    },
    // Add more questions as needed
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const checkAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setCurrentQuestion((prevQuestion) => prevQuestion + 1);

    if (currentQuestion === questions.length - 1) {
      setQuizEnd(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizEnd(false);
  };

  useEffect(() => {
    // Additional effects or cleanup can be added here
    // For example, you can log the score to the console
    console.log("Score:", score);
  }, [score]);

  return (
    <div className="container">
      <h1>Quiz App</h1>
      {!quizEnd ? (
        <div>
          <h2>{questions[currentQuestion].questionText}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerSelection(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={checkAnswer}>Check Answer</button>
        </div>
      ) : (
        <div>
          <h1>Result</h1>
          <h2>Total Score: {score}</h2>
          <button onClick={resetQuiz}>Replay</button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
