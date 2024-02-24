import React, { useState, useEffect } from "react";
import Question from "./Question";
import Score from "./Score";

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
        if (quizEnd) {

        }
    }, [quizEnd]);

    return (
        <div className="container">
            <h1>Quiz Page</h1>
            {!quizEnd ? (
                <Question
                    question={questions[currentQuestion]}
                    selectedAnswer={selectedAnswer}
                    onAnswerSelection={handleAnswerSelection}
                    onCheckAnswer={checkAnswer}
                />
            ) : (
                <Score core={score} onReplay={resetQuiz} />
            )}
        </div>
    );
};

export default QuizApp;
