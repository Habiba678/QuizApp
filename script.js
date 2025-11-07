let questions = [
  {
      "question": "Wer hat HTML erfunden?",
      "answer_1": "Robbie William",
      "answer_2": "Lady Gaga",
      "answer_3": "Tim Berners-Lee",
      "answer_4": "Justin Bieber",
      "right_answer": 3
  },
  {
      "question": "Was bedeutet das HTML Tag &lt;&gt;?",
      "answer_1": "Text Fett",
      "answer_2": "Container",
      "answer_3": "Ein Link",
      "answer_4": "Kursiv",
      "right_answer": 3
  },
  {
      "question": "Wofür steht die Abkürzung CSS?",
      "answer_1": "Computer Style Sheet",
      "answer_2": "Creative Style System",
      "answer_3": "Cascading Style Sheets",
      "answer_4": "Colorful Simple Styles",
      "right_answer": 3
  },
  {
      "question": "Welches HTML-Tag wird verwendet, um einen Link zu erstellen?",
      "answer_1": "<div>",
      "answer_2": "<a>",
      "answer_3": "<link>",
      "answer_4": "<href>",
      "right_answer": 2
  },
  {
      "question": "Was bedeutet das JavaScript-Kürzel 'DOM'?",
      "answer_1": "Document Object Model",
      "answer_2": "Data Order Management",
      "answer_3": "Dynamic Output Mode",
      "answer_4": "Digital Object Memory",
      "right_answer": 1
  },
  {
      "question": "Welche Firma hat den Browser Chrome entwickelt?",
      "answer_1": "Apple",
      "answer_2": "Microsoft",
      "answer_3": "Mozilla",
      "answer_4": "Google",
      "right_answer": 4
  },
  {
      "question": "Wie kommentiert man eine Zeile in JavaScript?",
      "answer_1": "// Kommentar",
      "answer_2": "<!-- Kommentar -->",
      "answer_3": "# Kommentar",
      "answer_4": "/* Kommentar */",
      "right_answer": 1
  }
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/failed.mp3');


//INIT ------
function init() {
  document.getElementById('all-questions').innerHTML = questions.length;
  showQuestion();
}


// SHOW QUESTION ----------
function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    renderQuestion();
  }
}


//GAME IS OVER -----
function gameIsOver() {
  return currentQuestion >= questions.length;
}


//UPDATE PROGRESS BAR ----------------
function updateProgressBar() {
  let percent = (currentQuestion / questions.length) * 100;
  percent = Math.round(percent);

  document.getElementById('progress-bar').innerHTML = `${percent} %`;
  document.getElementById('progress-bar').style = `width: ${percent}%`;
}

function init() {
  document.getElementById('all-questions').innerHTML = questions.length;
  showQuestion();
}
//RENDER QUESTION ----------------
function renderQuestion() {
  let question = questions[currentQuestion];

  document.getElementById('question-nummer').innerHTML = currentQuestion + 1;
  document.getElementById('questiontext').innerHTML = question['question'];
  document.getElementById('answer_1').innerText = question['answer_1'];
  document.getElementById('answer_2').innerText = question['answer_2'];
  document.getElementById('answer_3').innerText = question['answer_3'];
  document.getElementById('answer_4').innerText = question['answer_4'];
}


// ANSWER ----------------
function answer(selection) {
  let question = questions[currentQuestion];
  let selectedAnswerNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedAnswerNumber == question['right_answer']) {
      document.getElementById(selection).parentNode.classList.add('bg-success');
      AUDIO_SUCCESS.play();
      rightQuestions++;
  } else {
      document.getElementById(selection).parentNode.classList.add('bg-danger');
      document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
      AUDIO_FAIL.play();
  }

  document.getElementById('next-button').disabled = false;
}


// NEXT QUESTION ----------------
function nextQuestion() {
  currentQuestion++;
  document.getElementById('next-button').disabled = true;
  resetAnswerButtons();
  showQuestion();
}


//RESET ANSWER BUTTONS ----------------
function resetAnswerButtons() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger');
    document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success');
  }
}


// END SCREEN ----------------
function showEndScreen() {
  document.getElementById('endScreen').style = '';
  document.getElementById('questionBody').style = 'display: none';
  document.getElementById('count-of-questions').innerHTML = questions.length;
  document.getElementById('count-of-right-questions').innerHTML = rightQuestions;
  document.getElementById('header-image').src = 'img/trophy.png';

  document.getElementById('progress-bar').innerHTML = '100%';
  document.getElementById('progress-bar').style = 'width: 100%';
}


// RESTART GAME ----------------
function restartGame() {
  document.getElementById('header-image').src = 'img/Quizapp 2/brainbg.jpg';
  document.getElementById('questionBody').style = '';
  document.getElementById('endScreen').style = 'display: none';
  rightQuestions = 0;
  currentQuestion = 0;

  document.getElementById('progress-bar').innerHTML = '0 %';
  document.getElementById('progress-bar').style = 'width: 0%';

  init();
}