const problemGroupEl = document.getElementById("problem_group");
const startBtnEl = document.getElementById("start_btn");

const questions = [
  {
    "question": "JavaScript is a dynamically typed language.",
    "answer": true
  },
  {
    "question": "Variables declared with `const` can be reassigned.",
    "answer": false
  },
  {
    "question": "The `==` operator performs strict equality comparison.",
    "answer": false
  },
  {
    "question": "Closures in JavaScript allow inner functions to access variables from their outer (enclosing) functions' scope.",
    "answer": true
  },
  {
    "question": "`undefined` and `null` are the same value in JavaScript.",
    "answer": false
  },
  {
    "question": "JavaScript is a purely object-oriented programming language.",
    "answer": false
  },
  {
    "question": "The `this` keyword in JavaScript always refers to the global object.",
    "answer": false
  },
  {
    "question": "Promises are used to handle asynchronous operations in a more structured way.",
    "answer": true
  },
  {
    "question": "Arrow functions have their own binding of the `this` keyword.",
    "answer": false
  },
  {
    "question": "JavaScript code is executed in a browser's rendering engine (like V8) and also can be executed on a server using Node.js.",
    "answer": true
  }
]
let problems = [];
const Problem = {
  question: "",
  answer: "",
  render: function() {

  },
  validate: function() {

  }
}

function startQuiz() {
  //Do some quiz stuff
  for(let i = 0; i < questions.length; i++) {
    Problem.question = questions[i].question;
    Problem.answer = questions[i].answer;
    problems.push({Problem.question, Problem.answer});                                                                                                                                                                                                                                                                                                                                                                                                                  
  }
}

document.addEventListener("click", (event) => {
  startQuiz();
})