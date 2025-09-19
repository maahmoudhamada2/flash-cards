import { useState } from "react";
import ProgressBar from "./ProgressBar";
import CardContent from "./CardContent";
import NavigationButtons from "./NavigationButtons";

const questions = [
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, interpreted programming language primarily used to add interactivity and dynamic behavior to web pages.",
  },
  {
    question: "What are JavaScript data types?",
    answer:
      "The main data types are: string, number, boolean, null, undefined, object, and symbol (ES6+).",
  },
  {
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped and can be redeclared, let is block-scoped and can be reassigned, const is block-scoped and cannot be reassigned.",
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that remembers the variables from its outer scope even after that scope has finished executing.",
  },
  {
    question: "What is the difference between == and ===?",
    answer:
      "== checks for value equality with type coercion, while === checks for both value and type equality (strict equality).",
  },
  {
    question: "What are arrow functions?",
    answer:
      "Arrow functions are a shorter syntax for writing functions, introduced in ES6. They do not have their own this binding.",
  },
  {
    question: "What is the difference between null and undefined?",
    answer:
      "null is an intentional assignment of no value, while undefined means a variable has been declared but not assigned a value.",
  },
  {
    question: "What is the use of the typeof operator?",
    answer: "typeof is used to check the type of a value in JavaScript.",
  },
  {
    question: "What is NaN in JavaScript?",
    answer:
      "NaN stands for 'Not-a-Number'. It represents a value that is not a valid number.",
  },
  {
    question:
      "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code is executed line by line, blocking execution until a task is done. Asynchronous code allows tasks to run in the background without blocking execution.",
  },
  {
    question: "What are JavaScript promises?",
    answer:
      "A promise is an object that represents the eventual completion (resolved) or failure (rejected) of an asynchronous operation.",
  },
  {
    question: "What is async/await?",
    answer:
      "async/await is a syntax introduced in ES8 that allows writing asynchronous code in a synchronous style using promises.",
  },
  {
    question: "What are template literals?",
    answer:
      "Template literals, introduced in ES6, allow embedding expressions inside strings using backticks (`) and ${expression}.",
  },
  {
    question: "What is the difference between forEach and map?",
    answer:
      "forEach iterates over elements without returning a new array, while map creates a new array with the results of applying a function to each element.",
  },
  {
    question: "What is an event loop in JavaScript?",
    answer:
      "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by handling asynchronous callbacks.",
  },
  {
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's behavior of moving function and variable declarations to the top of their scope during compilation.",
  },
  {
    question:
      "What is the difference between function declaration and function expression?",
    answer:
      "Function declarations are hoisted and can be used before definition, while function expressions are not hoisted.",
  },
  {
    question: "What is the difference between shallow copy and deep copy?",
    answer:
      "A shallow copy copies only references of nested objects, while a deep copy creates a full independent clone of all nested objects.",
  },
  {
    question: "What is an Immediately Invoked Function Expression (IIFE)?",
    answer:
      "An IIFE is a function that runs immediately after it is defined, often used to create a private scope.",
  },
  {
    question: "What are JavaScript modules?",
    answer:
      "Modules are reusable pieces of code that can be imported and exported between files using the ES6 import/export syntax.",
  },
];

export default function FlashCards() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article>
      <header>
        <h1>Flash Cards</h1>
        <ProgressBar questionIdx={questionIdx} />
      </header>
      <main>
        <CardContent qna={questions[questionIdx]} showAnswer={showAnswer} />
      </main>
      <footer>
        <NavigationButtons
          setQuestionIdx={setQuestionIdx}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
        />
      </footer>
    </article>
  );
}
