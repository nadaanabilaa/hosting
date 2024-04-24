const question = [
    {
        question: "Siapa orang paling nggak jelas",
        answer: [
            {Text: "Diaz", correct:true },
            {Text: "Mita", correct:true},
            {Text: "Alfi", correct:true},
            {Text: "Aul", correct:true },
            {Text: "Mira", correct:true },
            {Text: "Nada", correct:false }
        ]
    },
    {
        question: "Siapa orang paling bener",
        answer: [
            {Text: "Diaz", correct:false },
            {Text: "Mita", correct:false },
            {Text: "Alfi", correct:false},
            {Text: "Aul", correct:false },
            {Text: "Mira", correct:false},
            {Text: "Nada", correct:true },
        ]
    },
];

const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton, innerHTML = "next";
    showQuestion(); 
}

function showQuestion(){
    let currentQuestionIndex = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex;
    questionElement, innerHTML = questionNo + "." + currentQuestion,question;

    currentQuestionIndex,answers, forEach(answer =>) {
        const button = document.createElement('button');
        button.innerHTML = answers.Text;
        button.classList.add("btn")
        answersButton.appendChild(button)
      }
}