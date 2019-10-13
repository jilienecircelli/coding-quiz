var startQuizBtn = document.querySelector(".start-quiz")
var viewHighscores = document.querySelector(".view-highscores")
var viewHighscores2 = document.querySelector("#view-highscores")

startQuizBtn.addEventListener("click", function() {
    window.location.href = "quiz.html";
    return;
})

viewHighscores.addEventListener("click", function() {
    window.location.href = "highscore.html";
    return;
})

viewHighscores2.addEventListener("click", function() {
    window.location.href = "highscore.html";
    return;
})