 const questions = [
    {
        question: "Which property is used to change the text color in CSS?",
        choices: ["font-color", "color", "text-color", "foreground-color"],
        answer: 1
    },
    {
        question: "Which CSS property controls the text size?",
        choices: ["font-size", "text-style", "text-size", "font-weight"],
        answer: 0
    },
    {
        question: "Which symbol is used for CSS class selector?",
        choices: [".", "#", ":", "::"],
        answer: 0
    },
    {
        question: "How do you apply a background color in CSS?",
        choices: ["color", "bg-color", "background-color", "backgroundColor"],
        answer: 2
    },
    {
        question: "Which of the following units is relative to the parent font size?",
        choices: ["px", "em", "pt", "%"],
        answer: 1
    },
    {
        question: "What does the 'z-index' property do?",
        choices: ["Controls zoom level", "Sets element stacking order", "Applies filters", "Sets background opacity"],
        answer: 1
    },
    {
        question: "Which value of `position` makes an element stay in one place while scrolling?",
        choices: ["relative", "absolute", "fixed", "sticky"],
        answer: 2
    },
    {
        question: "Which CSS property adds space *inside* an element’s border?",
        choices: ["margin", "spacing", "padding", "border-spacing"],
        answer: 2
    },
    {
        question: "How do you select an element with id 'box' in CSS?",
        choices: ["#box", ".box", "box", "*box"],
        answer: 0
    },
    {
        question: "Which property is used to make the text bold?",
        choices: ["font-style", "font-weight", "text-bold", "font-bold"],
        answer: 1
    }
];



let currentQuestion = 0;
let score = 0;
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}



function showQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const questionData = questions[currentQuestion];
    const feedbackElement = document.getElementById("feedback");

    
    questionElement.innerText = questionData.question;
    choicesElement.innerHTML = "";
    feedbackElement.innerText = ""; // Clear previous feedback.

    questionData.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.onclick = () => checkAnswer(index);
        choicesElement.appendChild(button);
    });
}

/*function checkAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }
    nextQuestion();
}*/

function checkAnswer(selectedAnswer) {
    const feedbackElement = document.getElementById("feedback");

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
        feedbackElement.innerText = "Correct! 🎉";
        feedbackElement.style.color = "green";
    } else {
        const correctChoice = questions[currentQuestion].choices[questions[currentQuestion].answer];
        feedbackElement.innerText = `Wrong! 😞 The correct answer is: ${correctChoice}`;
        feedbackElement.style.color = "red";
    }
   // nextQuestion();
    // Delay moving to the next question for a better user experience.
   
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hide");
    document.getElementById("result").classList.remove("hide");
    document.getElementById("score").innerText = `${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz").classList.remove("hide");
    document.getElementById("result").classList.add("hide");
    showQuestion();
}

// Initialize the quiz
showQuestion();
