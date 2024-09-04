// src/app/components/ChatBot.js
import React, { useState } from 'react';
import './chatbot.css';

const questions = [
  { id: 1, text: 'What type of database do you want to use?', key: 'database' },
  { id: 2, text: 'Do you need an API Gateway?', key: 'apiGateway' },
  { id: 3, text: 'Do you want to include a Load Balancer?', key: 'loadBalancer' },
];

const ChatBot = ({ onAnswer }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});

  const handleAnswer = (e) => {
    e.preventDefault();
    const answer = e.target.elements.answer.value.trim();

    if (answer) {
      const currentQuestion = questions[currentQuestionIndex];
      const updatedResponses = {
        ...responses,
        [currentQuestion.key]: answer,
      };
      
      setResponses(updatedResponses);
      onAnswer(currentQuestion.key, answer); // Pass the answer to parent component
      
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
      }
      
      e.target.reset(); // Reset the input field
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="chatbot">
      <h3>System Design Chat</h3>
      <div className="chatbox">
        <p className="chat-question">{currentQuestion.text}</p>
        <form onSubmit={handleAnswer}>
          <input type="text" name="answer" placeholder="Enter your answer..." required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
