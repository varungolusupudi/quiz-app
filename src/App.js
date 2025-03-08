import './App.css';
import React from "react";
import { useState } from 'react';

function App() {
    const quizQuestions = [
        {
            questionNo: 0,
            question: "What is the capital of France?",
            options: [
                "Berlin",
                "Madrid",
                "Paris",
                "Rome"
            ],
            answer: "Paris"
        },
        {
            questionNo: 1,
            question: "Which planet is known as the Red Planet?",
            options: [
                "Mars",
                "Venus",
                "Jupiter",
                "Saturn"
            ],
            answer: "Mars"
        },
        {
            questionNo: 2,
            question: 'Who wrote "Romeo and Juliet"?',
            options: [
                "Charles Dickens",
                "William Shakespeare",
                "Jane Austen",
                "Mark Twain"
            ],
            answer: "William Shakespeare"
        }
    ]
    const [score, setScore] = useState(0);

    const [questionIndex, setQuestionIndex] = useState(0);

    const handleClick = (option) => {
        if (questionIndex < quizQuestions.length) {
            setQuestionIndex(questionIndex + 1);
            if (currentQuestion.answer === option) {
                setScore(prevScore => prevScore + 1);
            }
        }
        console.log(score);
    }

    const currentQuestion = quizQuestions[questionIndex];

    return (
        <div className="bg-neutral-100 flex flex-col justify-center items-center min-h-screen">
            <div className="rounded-lg shadow-xl bg-white p-8">
                {questionIndex === quizQuestions.length
                    ?
                    <h1 className="text-green-500 font-bold p-4">Quiz completed! You scored {score} out of 3.</h1>
                    :
                    <div key={currentQuestion.questionNo}>
                        <h1 className="font-bold text-xl tracking-wide my-2">{currentQuestion.question}</h1>
                        {currentQuestion.options.map((option) => (
                            <button onClick={() => handleClick(option)} className="buttony">{option}</button>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
}

export default App;
