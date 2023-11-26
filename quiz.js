const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true},
            {text: "London", correct: false},
            {text: "Tokyo", correct: false}
        ]
    },
    {
        question: "What is the largest mammal on Earth?",
        answers: [
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Anaconda", correct: false}
        ]
    },
    {
        question: "The is a ...",
        answers: [
            {text: "planet", correct: false},
            {text: "star", correct: true},
            {text: "moon", correct: false},
            {text: "meteor", correct: false}
        ]
    },
    {
        question: "How many days dowe have in a week?",
        answers: [
            {text: 355, correct: false},
            {text: 450, correct: false},
            {text: 365, correct: true},
            {text: 364, correct: false}
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
    //console.log(event)
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    }else {
        showScore();
    }

}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startQuiz();
    }
})

startQuiz()