/* This is an example JavaScript file, feel free to remove/edit it anytime 
console.log(
  "%cProject by BigDevSoon",
  'font-size: 40px; font-weight: bold; color: #8A2BE2; font-family: "Comic Sans MS", cursive, sans-serif;'
);
console.log("Check out more projects at https://bigdevsoon.me");*/

// array of questions
const questionsArr = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Paris", "London", "Rio"],
    correctAnswer: "Paris"
  },
  {
    question: "What is the capital of England?",
    answers: ["Berlin", "Paris", "London", "Rio"],
    correctAnswer: "Paris"
  }
]

function startQuiz() {
  const welcomeDisplay = document.getElementById("welcome");
  const exam = document.querySelector(".exam");
  const nextQuestion = document.querySelector(".next")
  welcomeDisplay.style.display = "none"
  exam.style.display = "block";
  nextQ()
}

function displayQuestion(y) {
  const question = document.getElementById("question");
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const option3 = document.getElementById("option3"); 
  const option4 = document.getElementById("option4");
  //displaying
  question.innerHTML = questionsArr[y].question;
  option1.innerHTML = questionsArr[y].answers[0];
  option2.innerHTML = questionsArr[y].answers[1];
  option3.innerHTML = questionsArr[y].answers[2];
  option4.innerHTML = questionsArr[y].answers[3];
}

let x = 0;
function nextQ() {
  if (questionsArr.length == x) {
    document.querySelector("main").innerHTML = "Thank you"
  } else {
    displayQuestion(x)
    x += 1
  }
}

function checkAnswer() {
    if (document.getElementById("option2").innerHTML == questionsArr[0].correctAnswer)  
    document.querySelector("#option2").style.backgroundColor = "green"
  }

checkAnswer()
