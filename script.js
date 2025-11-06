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
let Audio_FAIL = new Audio('audio/failed.mp3');

function init() {
  document.getElementById('all-questions').innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById('question-nummer').innerHTML = currentQuestion + 1;
  document.getElementById('questiontext').innerHTML = question['question'];
  document.getElementById('answer_1').innerText = question['answer_1'];
  document.getElementById('answer_2').innerText = question['answer_2'];
  document.getElementById('answer_3').innerText = question['answer_3'];
  document.getElementById('answer_4').innerText = question['answer_4'];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNummber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNummber == question['right_answer']) { // richtige Antwort
      document.getElementById(selection).parentNode.classList.add('bg-success');
      AUDIO_SUCCESS.play();
      rightQuestions++;
  } else {
      document.getElementById(selection).parentNode.classList.add('bg-danger');
      document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
      Audio_FAIL.play();
  }

  // Button "Nächste Frage" aktivieren
  document.getElementById('next-button').disabled = false;
}

function nextQuestion() {

  if (currentQuestion >= questions.length -1){
    // Endscreen anzeigen
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('count-of-questions').innerHTML = questions.length;
    document.getElementById('count-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'img/trophy.png';
  }else;
  
  
let percent = (currentQuestion + 1)/ questions.length;
percent = Math.round (percent * 100);

document.getElementById('progress-bar').innerHTML = `${percent} %`;
document.getElementById('progress-bar').style = `width: ${percent}%`;

console.log('Fortschritt:', percent);


  document.getElementById('next-button').disabled = false;
  currentQuestion++;
  document.getElementById('next-button').disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){
  document.getElementById('header-image').src = 'img/pencil.jpg';
  document.getElementById('questionBody').style = ''; // question wieder anzeigen
  document.getElementById('endScreen').style = 'display: none'; //Endscreen ausblenden
  rightQuestions = 0;
  currentQuestion = 0;
  init();
}