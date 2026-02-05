//   # Exam engine (questions, timer, submit)
// js/exam.js

const subjectTitle = document.getElementById("subjectTitle");
const questionBox = document.getElementById("questionBox");
const nextBtn = document.getElementById("nextBtn");
const timeDisplay = document.getElementById("time");

// Get subject
const subject = localStorage.getItem("currentSubject");
if (!subject) window.location.href = "dashboard.html";

// Load questions dynamically
let questions = [];
if (subject === "Physics") questions = physicsQuestions;
if (subject === "Biology") questions = biologyQuestions;
if (subject === "Mathematics") questions = mathematicsQuestions;

subjectTitle.textContent = subject + " Examination";

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Timer (60 minutes)
let timeLeft = 60 * 60;
const timer = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timer);
        finishExam();
    }
}, 1000);

// Load question
function loadQuestion() {
    const q = questions[currentQuestionIndex];
    selectedAnswer = null;

    questionBox.innerHTML = `
        <h3>Question ${currentQuestionIndex + 1}</h3>
        <p>${q.question}</p>
        ${q.options.map(opt => `
            <label>
                <input type="radio" name="option" value="${opt}">
                ${opt}
            </label><br>
        `).join("")}
    `;

    document.querySelectorAll("input[name='option']").forEach(input => {
        input.addEventListener("change", e => selectedAnswer = e.target.value);
    });
}

// Next button
nextBtn.addEventListener("click", () => {
    if (!selectedAnswer) {
        alert("Please select an answer");
        return;
    }

    if (selectedAnswer === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        finishExam();
    }
});

// Finish exam
function finishExam() {
    clearInterval(timer);

    const percentage = Math.round((score / questions.length) * 100);
    const grade = waecGrade(percentage);

    const result = {
        subject,
        score,
        total: questions.length,
        percentage,
        grade
    };

    localStorage.setItem("lastResult", JSON.stringify(result));
    window.location.href = "result.html";
}

// WAEC grading system
function waecGrade(percent) {
    if (percent >= 75) return "A1";
    if (percent >= 70) return "B2";
    if (percent >= 65) return "B3";
    if (percent >= 60) return "C4";
    if (percent >= 55) return "C5";
    if (percent >= 50) return "C6";
    if (percent >= 45) return "D7";
    if (percent >= 40) return "E8";
    return "F9";
}

// Start exam
loadQuestion();
