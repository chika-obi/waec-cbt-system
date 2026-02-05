// ADMIN LOGIN
const form = document.getElementById("adminLoginForm");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;

        if (user === "admin" && pass === "waeccbt123") {
            localStorage.setItem("adminLoggedIn", "true");
            window.location.href = "admin-dashboard.html";
        } else {
            document.getElementById("error").textContent = "Invalid admin login";
        }
    });
}
// PROTECT DASHBOARD
if (window.location.pathname.includes("admin-dashboard")) {
    if (!localStorage.getItem("adminLoggedIn")) {
        window.location.href = "admin-login.html";
    }
}

// REGISTER STUDENT
function addStudent() {
    let studentsDB = JSON.parse(localStorage.getItem("studentsDB")) || [];

    studentsDB.push({
        regNo: regNo.value,
        name: name.value,
        pin: pin.value,
        subjects: []
    });

    localStorage.setItem("studentsDB", JSON.stringify(studentsDB));
    alert("Student Registered");
}

// SET EXAM DATE
function setExamDate() {
    let subject = subjects.find(s => s.name === subjectName.value);
    if (!subject) return alert("Subject not found");

    subject.examDate = examDate.value;
    localStorage.setItem("subjects", JSON.stringify(subjects));

    alert("Exam date updated");
}

// VIEW RESULTS
function viewResults() {
    const results = JSON.parse(localStorage.getItem("allResults")) || {};
    document.getElementById("results").textContent =
        JSON.stringify(results, null, 2);
}

// LOGOUT
function logoutAdmin() {
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "admin-login.html";
}
