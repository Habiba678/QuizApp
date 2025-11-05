let questions = [
    {
        "question": "Wer hat HTML erfunden",
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
        "right": 3
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

let currentQuestion = 0;



function init(){
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}


function showQuestion(){
    let question = questions[currentQuestion];
    
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function answer(selection){
    let question = questions[currentQuestion];
    console.log('selected answer is', selection)
    let selectedQuestionNummber = selection.slice(-1);
    console.log('selectedQuestionNummer is', selectedQuestionNummber );
    console.log('current question is', question['right_answer']);

    if(selectedQuestionNummber == question['right_answer']){
        console.log('Richtige Anwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        
      
    } else {
      document.getElementById(selection).parentNode.classList.add('bg-danger');
      
        
        
    }
      
    }
