//  # Login logic (student/admin)
// js/auth.js

// Grab the form and error message
const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

// Listen for form submit
loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    const regNo = document.getElementById("regNo").value.trim();
    const pin = document.getElementById("pin").value.trim();

    // Find student in students.js array
    const student = students.find(s => s.regNo === regNo && s.pin === pin);

    if (student) {
        // Successful login
        // Save student info to LocalStorage
        localStorage.setItem("loggedInStudent", JSON.stringify(student));
        // Redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        // Invalid login
        errorMsg.textContent = "Invalid Registration Number or PIN.";
        errorMsg.style.color = "red";
    }
});
