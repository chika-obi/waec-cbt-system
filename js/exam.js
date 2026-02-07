//   # Exam engine (questions, timer, submit)
// js/exam.js

const subjectTitle = document.getElementById("subjectTitle");
const questionBox = document.getElementById("questionBox");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const timeDisplay = document.getElementById("time");
const questionNav = document.getElementById("questionNav");

// Get subject
const subject = localStorage.getItem("currentSubject");
if (!subject) window.location.href = "dashboard.html";

// Load questions dynamically
let questions = [];

if (subject === "Physics") questions = physicsQuestions;
if (subject === "Biology") questions = biologyQuestions;
if (subject === "Mathematics") questions = mathematicsQuestions;
if (subject === "Agricultural Science") questions = agriculturalScienceQuestions;
if(subject === "Chemistry") questions = chemistryQuestions;
if(subject === "Further Mathematics") questions = furtherMathQuestions;
if (subject === "Economics") questions = economicsQuestions; 
if(subject === "Commerce") questions = commerceQuestions;
if(subject === "Geography") questions = geographyQuestions;
if (subject === "Government") questions = governmentQuestions; 
if(subject === "Civic Education") questions = civicEducationQuestions;
if (subject === "History") questions = historyQuestions;
if (subject === "Christian Religious Knowledge (CRK)") questions = cRKQuestions;
if (subject === "Literature in English") questions = literatureInEnglishQuestions;
if (subject ===  "English Language") questions = englishQuestions;
    

    


if (!questions || questions.length === 0) {
    alert("No questions found for this subject");
    window.location.href = "dashboard.html";
}

subjectTitle.textContent = subject + " Examination";

let currentQuestionIndex = 0;
let score = 0;

// Store answers
let userAnswers = new Array(questions.length).fill(null);

// ================= TIMER =================
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

// ================= QUESTION NAV =================
function buildQuestionNav() {
    questionNav.innerHTML = "";
    questions.forEach((_, index) => {
        const btn = document.createElement("button");
        btn.textContent = index + 1;
        btn.className = "nav-btn";
        btn.onclick = () => {
            currentQuestionIndex = index;
            loadQuestion();
        };
        questionNav.appendChild(btn);
    });
}

// ================= LOAD QUESTION =================
function loadQuestion() {
    const q = questions[currentQuestionIndex];

    questionBox.innerHTML = `
        <h3>Question ${currentQuestionIndex + 1}</h3>
        <p>${q.question}</p>
        ${q.options.map(opt => `
            <label>
                <input type="radio" name="option" value="${opt}"
                ${userAnswers[currentQuestionIndex] === opt ? "checked" : ""}>
                ${opt}
            </label><br>
        `).join("")}
    `;

    document.querySelectorAll("input[name='option']").forEach(input => {
        input.addEventListener("change", e => {
            userAnswers[currentQuestionIndex] = e.target.value;
            updateNavStatus();
        });
    });

    updateNavStatus();
}

// ================= UPDATE NAV STATUS =================
function updateNavStatus() {
    document.querySelectorAll(".nav-btn").forEach((btn, index) => {
        btn.classList.remove("current", "answered");

        if (userAnswers[index]) btn.classList.add("answered");
        if (index === currentQuestionIndex) btn.classList.add("current");
    });
}

// ================= BUTTON EVENTS =================
nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        finishExam();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

// ================= FINISH EXAM =================
function finishExam() {
    clearInterval(timer);

    score = 0;
    questions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) score++;
    });

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

// ================= WAEC GRADING =================
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

// ================= START EXAM =================
buildQuestionNav();
loadQuestion();
