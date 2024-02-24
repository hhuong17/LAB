import React, { useState } from 'react';
import './Question.css';

const Question = ({ question, onCheckAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerSelection = (option) => {
        setSelectedAnswer(option);
    };

    return (
        <div>
            <div>
                <h2>{question.questionText}</h2>
                <ul>
                    {question.options.map((option, index) => (
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
                <button onClick={() => onCheckAnswer(selectedAnswer)}>Check Answer</button>
            </div>
        </div>
    );
};

export default Question;
