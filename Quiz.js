var currentQuestion = 0;
var score =0;
var totQuestions = questions.length;

var container = document.getElementById('Quiz-container');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextQuest');
var resultCont = document.getElementById('result');

function loadQuestion (questionindex){
    var a = questions[questionindex];
    questionEl.textContent = (questionindex + 1) + '. ' + a.question;
    opt1.textContent = a.option1;
    opt2.textContent = a.option2;
    opt3.textContent = a.option3;
    opt4.textContent = a.option4;
}

function loadnextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please Select Your Answere');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 1;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1) {
        nextButton.textContent = 'finish';
    }
    if(currentQuestion == totQuestions){
        if (score == 10){
      	window.location.href = "win.html"
      }
      if (score < 10) {
      	window.location.href = "lose.html"
}
    }



    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);