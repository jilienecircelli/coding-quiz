const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
var timer = 75;
var timerEl = document.querySelector("#timer")
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        if (secondsLeft === 0 || startQuizBtn) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}
var questions = [{
        question: "Commonly used data types don't include ______?",
        choice1: "Strings",
        choice2: "Booleans",
        choice3: "Alerts",
        choice4: "Numbers",
        answer: 3
    },
    {
        question: "The condition in an if / else statement is enclosed within ____?",
        choice1: "Quotes",
        choice2: "Curly brackets",
        choice3: "Square brackets",
        choice4: "Parentheses",
        answer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store____?",
        choice1: "Numbers and strings",
        choice2: "Other arrays",
        choice3: "Booleans",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "String values must be enclosed within ____ being assigned to variables.",
        choice1: "Commas",
        choice2: "Curly brackets",
        choice3: "Quotes",
        choice4: "Parentheses",
        answer: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        choice1: "JavaScript",
        choice2: "Terminal/bash",
        choice3: "For loops",
        choice4: "console.log",
        answer: 1
    }
];


//CONSTANTS
const totalQuestions = 5;
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= totalQuestions) {
        //go to the end page
        return window.location.href = "highscore.html"
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
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



setTime();
startGame();