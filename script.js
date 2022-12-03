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
        "question": "Which JavaScript variable is the wrong one?",
        "first": "A",
        "second": "set",
        "third": "C",
        "fourth": "D",
        "correct": 2
    },
    {
        "question": "What is a template literal?",
        "first": "A",
        "second": "B",
        "third": "C",
        "fourth": "``",
        "correct": 4
    },
];

let counter = 0;

function renderQuestion(number) {
    if (number < questions.length) {
        let question = questions[number];
        let content = document.getElementById('content');
        let first = question["first"];
        let second = question["second"];
        let third = question["third"];
        let fourth = question["fourth"];
        content.innerHTML = "";
        content.innerHTML += `
        <h5 class="card-title">${question["question"]}</h5>
        <div id="questions">
            <div id="1" class="card quiz-answer mb-2" onclick="answer('first', ${number})">
                <div class="card-body">
                    ${first}
                </div>
            </div>
            <div id="2" class="card quiz-answer mb-2" onclick="answer('second', ${number})">
                <div class="card-body">
                    ${second}
                </div>
            </div>
            <div id="3" class="card quiz-answer mb-2" onclick="answer('third', ${number})">
                <div class="card-body">
                    ${third}
                </div>
            </div>
            <div id="4" class="card quiz-answer" onclick="answer('fourth', ${number})">
                <div class="card-body">
                    ${fourth}
                </div>
            </div>
            </div>
            <div class="question-footer">
                <span>
                    <b>${number + 1}</b> of <b>${questions.length}</b> Questions
                </span>
                <button class="btn btn-primary" onclick="renderQuestion(${number + 1})">Next Question</button>
        </div>
        `;
    }
}

function answer(key, number) {
    let selected;
    if (key === "first") {
        selected = 1;
        if (selected === questions[number]["correct"]) {
            document.getElementById(selected).classList.add('correct');
            counter++;
        }
        else {
            document.getElementById(selected).classList.add('incorrect');
            document.getElementById(questions[number]["correct"]).classList.add('correct');
        }
    }
    if (key === "second") {
        selected = 2;
        if (selected === questions[number]["correct"]) {
            document.getElementById(selected).classList.add('correct');
            counter++;
        }
        else {
            document.getElementById(selected).classList.add('incorrect');
            document.getElementById(questions[number]["correct"]).classList.add('correct');
        }
    }
    if (key === "third") {
        selected = 3;
        if (selected === questions[number]["correct"]) {
            document.getElementById(selected).classList.add('correct');
            counter++;
        }
        else {
            document.getElementById(selected).classList.add('incorrect');
            document.getElementById(questions[number]["correct"]).classList.add('correct');
        }
    }
    if (key === "fourth") {
        selected = 4;
        if (selected === questions[number]["correct"]) {
            document.getElementById(selected).classList.add('correct');
            counter++;
        }
        else {
            document.getElementById(selected).classList.add('incorrect');
            document.getElementById(questions[number]["correct"]).classList.add('correct');
        }
    }
    makeUnclickable();
}

function makeUnclickable() {
    document.getElementById('questions').style.position = "relative";
    document.getElementById('questions').innerHTML += `<div class="unclicker"></div>`;
}

function init() {
    renderQuestion(0);
}