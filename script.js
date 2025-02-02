const problemGroupEl = document.getElementById("problem_group");
const minutesDisplayEl = document.getElementById("minutes");
const secondsDisplayEl = document.getElementById("seconds");
const scoreEl = document.getElementById("scoreVal");
const startBtnEl = document.getElementById("startBtn");
const questionEl = document.getElementById("question"); //get current question element
const answerEl = document.getElementById("answer"); // get value of submitted form
const submitBtn = document.getElementById("submitBtn");

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

let index;
let time = 1;
let totalSeconds=0;
let secondsElapsed=0;

const problem = {
  question: "",
  answer: "",
  render: function() {
    this.question = problems[i].question;
    questionEl.textContent = ""; //questionEl.textContent will equal the current question in our array
  },
  validate: function() {
    //validate the users answer to the corresponding answer in the question array

  }
}

const score = {
  scoreVal: 0,
  update: function() {
    this.scoreVal++
  },
  render: function() {
    scoreEl.textContent = this.scoreVal;
  }
}

function calculateTime(min) {
  totalSeconds = min*60;
}

function renderTime(min,sec) {
  if(min<10) {
    min = `0${min}`;
  }
  if(sec<10) {
    sec = `0${sec}`
  }
  minutesDisplayEl.textContent = min;
  secondsDisplayEl.textContent = sec;
}

function renderProblem(index) {
  let questionTotal = questions.length;

}

function startQuiz() {
  //Do some quiz stuff
  if(localStorage.getItem("sk_score")) {
    scoreVal = localStorage.getItem("sk_score");
    scoreEl.textContent = scoreVal;
  }
  //begin timeinterval and include functions here. 
  calculateTime(time);
  secondsElapsed++;
  let minutes;
  let seconds;
  // console.trace(timer.secondsElapsed)
  // console.trace(timer.totalSeconds)
  console.trace("totalSeconds: ", totalSeconds)
  renderProblem();
  interval = setInterval(function() {
    minutes = Math.floor((totalSeconds-secondsElapsed)/60)
    seconds = Math.floor((totalSeconds-secondsElapsed)%60);
    console.log("Minutes: " + minutes + "|| Seconds: " + seconds);
    renderTime(minutes,seconds);
    if(secondsElapsed >= totalSeconds) {
      clearInterval(interval)
    }
    secondsElapsed++;

  }, 1000)
}

startBtnEl.addEventListener("click", (event) => {
  startQuiz();
  startBtnEl.setAttribute("disabled", '');
})
submitBtn.addEventListener("click", (event) => {
  document.preventDefault();
  problems.validate();
  renderProblem(i);
})

//WHEN startQuiz clicked
  // THEN begin countdown
  // THEN render question
// WHEN question submitted
  // THEN validate user answer against known answer
// WHEN user answer==known answer\
  //THEN  increment scoreVal
// WHEN user completes all questions OR timer reaches 0
  // THEN render score
// update score in localStorage
// pull value from localStorage on page load
 
