let questions = [
    {
        "question": "Who invented JavaScript?",
        "first": "A",
        "second": "B",
        "third": "C",
        "fourth": "Brendan Eich",
        "correct": 4
    },
    {
        "question": "Which variable does not exist?",
        "first": "A",
        "second": "set",
        "third": "C",
        "fourth": "D",
        "correct": 2
    },
    {
        "question": "One of the four answers is a Comparison Operator, but which one?",
        "first": "A",
        "second": "B",
        "third": "===",
        "fourth": "D",
        "correct": 3
    },
    {
        "question": "What do you call it, if a number becomes a string through addition with a string?",
        "first": "A",
        "second": "Type Coercion",
        "third": "C",
        "fourth": "D",
        "correct": 2
    },
    {
        "question": "How can you figure out, if a variable is a string, number, boolean, etc.?",
        "first": "typeOf()",
        "second": "B",
        "third": "C",
        "fourth": "D",
        "correct": 1
    },
    {
        "question": "Where does counting start, in JavaScript",
        "first": "A",
        "second": "B",
        "third": "C",
        "fourth": "0",
        "correct": 4
    },
];

let progress;

let counter = 0;

let right = new Audio('sound/right.mp3');
let wrong = new Audio('sound/wrong.wav');
let kahoot = new Audio('sound/kahoot.mp3');

function renderQuestion(number) {
    kahoot.pause();
    if (number < questions.length) {
        let question = questions[number];
        let content = document.getElementById('content');
        let first = question["first"];
        let second = question["second"];
        let third = question["third"];
        let fourth = question["fourth"];
        content.innerHTML = "";
        content.innerHTML += `
        <div class="progress">
            <div id="progressbar" style="width: 0%" class="progress-bar" role="progressbar"></div>
        </div>
        <h5 class="card-title">${question["question"]}</h5>
        <div id="questions">
            <div id="1" class="card quiz-answer mb-2" onclick="answer(1, ${number})">
                <div class="card-body">
                    ${first}
                </div>
            </div>
            <div id="2" class="card quiz-answer mb-2" onclick="answer(2, ${number})">
                <div class="card-body">
                    ${second}
                </div>
            </div>
            <div id="3" class="card quiz-answer mb-2" onclick="answer(3, ${number})">
                <div class="card-body">
                    ${third}
                </div>
            </div>
            <div id="4" class="card quiz-answer" onclick="answer(4, ${number})">
                <div class="card-body">
                    ${fourth}
                </div>
            </div>
        </div>
        <div class="question-footer">
            <span>
                <b>${number + 1}</b> of <b>${questions.length}</b> Questions
            </span>
            <button id="button" disabled class="btn btn-primary" onclick="renderQuestion(${number + 1})">Next Question</button>
        </div>
        `;
    }
    else {
        end(content);
    }
    checkProgress();
}

function checkProgress() {
    if (document.getElementById('progressbar')) {
        document.getElementById('progressbar').style.width = `${progress}%`;
    }
}

function end(content) {
    content.innerHTML = "";
    content.innerHTML += `
    <div class="card-body">
    <h5>Thanks for taking the Quiz!</h5>
        <b>${counter}</b> out of <b>${questions.length}</b> Questions were answered correctly!
        <button id="button" class="btn btn-primary" onclick="renderQuestion(${0})">Retake Quiz</button>
    </div>
    `;
    document.getElementById('img').src = "img/Group 5.png";
    progress = 0;
    kahoot.play();
}

function answer(key, number) {
    if (key === questions[number]["correct"]) {
        document.getElementById(key).classList.add('correct');
        counter++;
        right.play();
    }
    else {
        document.getElementById(key).classList.add('incorrect');
        document.getElementById(questions[number]["correct"]).classList.add('correct');
        wrong.play();
    }
    document.getElementById('button').disabled = false;
    makeUnclickable();
    progress = 100 / questions.length * (number + 1);
    document.getElementById('progressbar').style.width = `${progress}%`;
}

function makeUnclickable() {
    document.getElementById('questions').style.position = "relative";
    document.getElementById('questions').innerHTML += `<div class="unclicker"></div>`;
}

function init() {
    renderQuestion(0);
}