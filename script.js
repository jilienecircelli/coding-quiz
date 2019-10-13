// Global Variables //
var scoreTracker = 0;
var score = 0;
var timer = 75;
var highscore = 0;
var timerEl = document.querySelector("#timer")
var startQuizBtn = document.querySelector(".start-quiz")
var questionTitleEl = document.getElementById("question-title");
var title = document.getElementById("title");



// List of Questions //
var questions = [{
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above", ],
        answer: "all of the above",
    },
    {
        title: "String values must be enclosed within _________ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is.",
        choices: ["JavaScript", "Terminal", "For Loops", "console.log"],
        answer: "console.log",
    }
]

// Functions //

// Move from index.html to quiz.html // 
startQuizBtn.addEventListener("click", function() {
    window.location.href = "quiz.html";
    return;
})

var secondsLeft = 15;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        if (secondsLeft === 0 || startQuizBtn) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1500);
}

function nextQuestion() {
    timerEl.textContent = " ";
    var questionEl = document.createElement("h1");
    gameEl.appendChild(questionEl);
}
setTime();

// ====================

// var timerInterval = setInterval(() => {
//     timer--;
//     timerEl.textContent = " ";
//     if (timer === 0) {
//         clearInterval(timerInterval);
//         getNewQuestion();
//     }
// }, 15000);


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});