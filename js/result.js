// js/result.js

const result = JSON.parse(localStorage.getItem("lastResult"));
const student = JSON.parse(localStorage.getItem("loggedInStudent"));

// If result not found, redirect
if (!result || !student) {
    window.location.href = "dashboard.html";
}

// Display result
document.getElementById("subject").textContent = result.subject;
document.getElementById("score").textContent = `${result.score} / ${result.total}`;
document.getElementById("percentage").textContent = result.percentage;
document.getElementById("grade").textContent = result.grade;

// Save result permanently per student
let allResults = JSON.parse(localStorage.getItem("allResults")) || {};

if (!allResults[student.regNo]) {
    allResults[student.regNo] = [];
}

// Prevent rewriting same subject
const alreadyWritten = allResults[student.regNo].some(
    r => r.subject === result.subject
);

if (!alreadyWritten) {
    allResults[student.regNo].push(result);
    localStorage.setItem("allResults", JSON.stringify(allResults));
}

// Navigation
function goDashboard() {
    window.location.href = "dashboard.html";
}

function logout() {
    localStorage.removeItem("loggedInStudent");
    window.location.href = "index.html";
}
