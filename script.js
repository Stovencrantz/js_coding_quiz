const problemGroupEl = document.getElementById("problem_group");
const minutesDisplayEl = document.getElementById("minutes");
const secondsDisplayEl = document.getElementById("seconds");
const scoreValEl = document.getElementById("scoreVal");
const startBtnEl = document.getElementById("startBtn");
const formEl = document.querySelector("form[name='submission']");
const questionEl = document.getElementById("question"); //get current question element
const answerEl = document.getElementById("answer"); // get value of submitted form
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

const questionsObj = [
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

let index = 0;
let time = 2;
let totalSeconds=0;
let secondsElapsed=0;
let scoreVal=0;
let currentProblem = {
  question: "",
  answer: ""
};


function populateQuestion() {
  // render one question on load
  // all other questions rendered after user clicks submit.
  // Render question -> Submit Answer -> validate answer -> update score -> render score -> render question
  console.log(`Question #${index}`);
  questionEl.textContent = questionsObj[index].question;
}

function validateAnswer() {
  currentProblem.question = questionEl.textContent;
  currentProblem.answer = document.querySelector(`[name='answer']:checked`).value;

  console.assert(currentProblem.question = questionsObj[index].question, "Questions do not match");
  if(currentProblem.question = questionsObj[index].question) { // comparing string to boolean
    console.log("questions match");

    if(currentProblem.answer = questionsObj[index].answer) { //comparing string to boolean
      // if userAnswer = answer sheet answer, increment score
      console.assert(currentProblem.answer = questionsObj[index].answer, "Answers do not match");
      updateScore();
    } else {
      console.log(`Answers do not match: ${typeof(currentProblem.answer)} vs ${typeof(questionsObj[index].answer)}`);
    }
  } else {
    console.log("Question Mismatch");
  }
  index++;
  populateQuestion();
}

function updateScore() {
  // iterate on the score
  // render new score value to screen
  scoreVal++;
  scoreValEl.textContent = scoreVal;
  console.log("updatingScore: ", scoreVal);
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

function startQuiz() {
  //Do some quiz stuff
  if(localStorage.getItem("sk_score")) {
    scoreVal = localStorage.getItem("sk_score");
    scoreEl.textContent = scoreVal;
  }
  index = 0; //reset index start at bottom of quesiton list

  //begin timeinterval and include functions here. 
  calculateTime(time);
  submitBtn.removeAttribute("disabled", "");
  secondsElapsed++;
  let minutes;
  let seconds;
  // console.trace(timer.secondsElapsed)
  // console.trace(timer.totalSeconds)
  console.trace("totalSeconds: ", totalSeconds)
  interval = setInterval(function() {
    minutes = Math.floor((totalSeconds-secondsElapsed)/60)
    seconds = Math.floor((totalSeconds-secondsElapsed)%60);
    //console.log("Minutes: " + minutes + "|| Seconds: " + seconds);
    renderTime(minutes,seconds);
    if(secondsElapsed >= totalSeconds) {
      clearInterval(interval)
    }
    secondsElapsed++;
  }, 1000)
  populateQuestion();
}

function endQuiz() {
  localStorage.setItem("scoreVal", scoreVal);
}

function clearScore() {
  localStorage.deleteItem("scoreVal")
  scoreVal = 0;
}

// initialize initial score values 
function init() {
  if(localStorage.getItem("scoreVal")) {
    scoreVal = localStorage.getItem("scoreVal");
  }
  scoreValEl.textContent = scoreVal;
  console.log("initializing")
}

startBtnEl.addEventListener("click", (event) => {
  startQuiz();
  startBtnEl.setAttribute("disabled", '');
})
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // Render question -> Submit Answer -> validate answer -> update score -> render score -> render question
  validateAnswer();
  if (index >= questionsObj.length) {
    submitBtn.setAttribute("disabled", '');
    alert("You are done!")
  }
})
resetBtn.addEventListener("click", (event) => {
  resetScore();
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
init();
 
