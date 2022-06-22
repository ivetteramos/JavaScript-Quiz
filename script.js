var highScoreButton = document.querySelector(".high-score-button")
var Time = document.querySelector(".Timer")
var startQuiz = document.querySelector("#start-quiz-button")
var startBox = document.querySelector("#intro-screen")
var questionBox = document.getElementById('question-screen')
var questionIndex = 0;
var secondsLeft = 60;
var timer = document.querySelector("#timerid");
var questions = [
   {
    // questions[0]
    prompt: "What is the method used in JavaScript to select HTML element?",
    answer: "Both 1 and 3",
    potentinalAnswers: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"]
   },
   {
    // questions[1]
    prompt: "What are the properties in JavaScript refferred to?",
    answer: "key-value pairs",
    potentinalAnswers: [ "key-value pairs", "dot walking", "undefined","nested properties" ],
   },
   {
    // questions[3]
    prompt: "What can arrays in JavaScript used for?",
    answer: "all of above",
    potentinalAnswers: ["booleans", "numbers & strings", "undefined", "all of above"],
   }
]
console.log(questions)

function beginQuiz() {
    startBox.classList.add("hide")
    questionBox.style.display = 'block'
    populateQuestions();
    // setTimer()

}

function populateQuestions() {
    document.getElementById('question-title').textContent = questions[questionIndex].prompt
    document.getElementById('answer1').textContent = questions[questionIndex].potentinalAnswers[0]
    document.getElementById('answer2').textContent = questions[questionIndex].potentinalAnswers[1]
    document.getElementById('answer3').textContent = questions[questionIndex].potentinalAnswers[2]
    document.getElementById('answer4').textContent = questions[questionIndex].potentinalAnswers[3]

   
}

function checkingAnswer() {
// evaluate the user answer
    questionIndex += 1
    populateQuestions()

}

// need an end game function

// need a timer running in the background
// function setTimer(){
//     timerInterval = setInterval(function(){
//         secondsLeft--;
//         timer.textcontent = secondsLeft;

        
    
//     }, 1000);
// }


startQuiz.addEventListener("click", beginQuiz);
document.getElementById('answer1').addEventListener('click', checkingAnswer)
document.getElementById('answer2').addEventListener('click', checkingAnswer)
document.getElementById('answer3').addEventListener('click', checkingAnswer)
document.getElementById('answer4').addEventListener('click', checkingAnswer)