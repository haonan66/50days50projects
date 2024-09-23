import React from "react";
import "./index.scss";
import QuestionCard from "./QuestionCard";

export default function FaqCollapse() {
  const questions = [
    {
      question: "What is the best way to learn React?",
      answer: "The best way to learn React is to build projects.",
    },
    {
      question: "What is the best way to learn React?",
      answer: "The best way to learn React is to build projects.",
    },
    {
      question: "What is the best way to learn React?",
      answer: "The best way to learn React is to build projects.",
    },
    {
      question: "What isthe best way to learn React?",
      answer: "The best way to learn React is to build projects.",
    },
    {
      question: "What isthe best way to learn React?",
      answer: "The best way to learn React is to build projects.",
    },
  ];

  return (
    <div className="container">
      <div className="questions-wrapper">
        <h1>Frequently Asked Questions</h1>
        {questions.map((question) => (
          <QuestionCard {...question} />
        ))}
      </div>
    </div>
  );
}
