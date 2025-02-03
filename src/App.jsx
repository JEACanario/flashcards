import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  return (
    <ul className="flashcards">
      {questions.map((q) => (
        <FlashCard {...q} key={q.id} />
      ))}
    </ul>
  );
}

function FlashCard(q) {
  const [cardContent, setcardContent] = useState(q.question);

  function handleClick(e) {
    if (cardContent === q.question) {
      e.target.className = "selected";
      setcardContent(q.answer);
    } else {
      setcardContent(q.question);
      e.target.className = "";
    }
  }
  return <li onClick={handleClick}>{cardContent}</li>;
}
