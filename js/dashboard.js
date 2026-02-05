//   # Dashboard logic (subject enable/disable)
// js/dashboard.js

// Grab elements
const studentNameSpan = document.getElementById("studentName");
const subjectList = document.getElementById("subjectList");
const logoutBtn = document.getElementById("logoutBtn");

// Get logged-in student
const loggedInStudent = JSON.parse(localStorage.getItem("loggedInStudent"));

// If no student logged in, redirect to login
if (!loggedInStudent) {
    window.location.href = "index.html";
}

// Display student name
studentNameSpan.textContent = loggedInStudent.name;

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

// Display subjects
loggedInStudent.subjects.forEach(subName => {
    const subject = subjects.find(s => s.name === subName);
    const li = document.createElement("li");

    if (!subject) return; // Skip if subject not found

    // Check if exam is today
    const isEnabled = subject.examDate === today;

    li.innerHTML = `
        ${subject.name} ${subject.hasPractical ? "(Practical)" : ""}
        <button ${!isEnabled ? "disabled" : ""} onclick="startExam('${subject.name}')">
            ${isEnabled ? "Start Exam" : "Not Available Yet"}
        </button>
    `;

    subjectList.appendChild(li);
});

// Logout functionality
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInStudent");
    window.location.href = "index.html";
});

// Function to start exam
function startExam(subjectName) {
    // Save subject to LocalStorage to load in exam page
    localStorage.setItem("currentSubject", subjectName);
    window.location.href = "exam.html";
}
const allResults = JSON.parse(localStorage.getItem("allResults")) || {};
const writtenSubjects = allResults[loggedInStudent.regNo]?.map(r => r.subject) || [];
