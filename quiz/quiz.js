


const questions = [
   
   
 {
            question: " 1. What does HTML stand for?",
            choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Transfer Markup Language"],
            answer: 0
        },
        {
            question: "2. Which language is used for styling web pages?",
            choices: ["HTML", "CSS", "JavaScript", "Python"],
            answer: 1
        },
        {
            question: "3. Which is not a JavaScript framework?",
            choices: ["React", "Angular", "Vue", "Python"],
            answer: 3
        },
        {
            question: "4. Which of the following is an valid variable name in JavaScript?",
            choices: ["var $num", "var_num", "var1_num", "var num1"],
            answer: 3
        },
        {
            question: "5. Which company developed JavaScript?",
            choices: ["Microsoft", "Sun Microsystems", "Netscape", "Oracle"],
            answer: 2
        },
        {
            question: "6. Which symbol is used for comments in JavaScript?",
            choices: ["//","/**/","#", "--"],
           answer: 0
        },
        {
            question: "7. How do you declare a JavaScript variable?",
            choices: ["var myVar;", "variable myVar;", "v myVar;", "let var myVar;"],
            answer: 0
        },
        {
            question: "8. Which method is used to find an element by its ID in JavaScript?",
            choices: ["getElementById", "querySelector", "getElement", "findElementById"],
            answer: 0
        },
        {
            question: "9. What is the correct way to write an array in JavaScript?",
            choices: ["let arr = (1, 2, 3);", "let arr = [1, 2, 3];", "let arr = {1, 2, 3};", "let arr = <1, 2, 3>;"],
            answer: 1
        },
        {
            question: "10. What will `typeof null` return in JavaScript?",
            choices: ["'null'", "'object'", "'undefined'", "'string'"],
            answer: 1
        },
        {
            question: "11. Which keyword is used to create a constant in JavaScript?",
            choices: ["let", "var", "const", "constant"],
            answer: 2
        },
        {
            question: "12. Which of the following is the correct syntax to write a 'for' loop in JavaScript?",
            choices: [
                "for (i = 0; i < 10; i++)",
                "for i = 1 to 10",
                "for (i <= 10; i++)",
                "for (i: 0 to 10)"
            ],
            answer: 0
        },
        {
            question: "13. How can you add a comment in JavaScript?",
            choices: ["<!-- This is a comment -->", "// This is a comment", "# This is a comment", "' This is a comment"],
            answer: 1
        }
    ];
 /*   const questions = [
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
*/



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

    document.getElementById("progress").innerText = 
        `Question ${currentQuestion + 1} of ${questions.length}`;


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
