// GOOGLE GEMINI GENERATED CODE FOR DEMONSTARTION PURPOSES ONLY!!!

// Hardcoded mock user database for the demo
const mockUsers = {
    "123": { password: "password", redirect: "pages/home.html" }
};

// Wait for the HTML elements to safely load into the browser memory
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');

    // Safe check to make sure JS can actually find your HTML form
    if (!loginForm) {
        console.error("JavaScript Error: Could not find an HTML element with id='loginForm'. Please check your HTML tags.");
        return;
    }

    loginForm.addEventListener('submit', function (event) {
        // Stop the default browser form submission refresh
        event.preventDefault();

        // Grab the inputs
        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value;

        // Check if the User ID exists in our mock data
        if (mockUsers.hasOwnProperty(usernameInput)) {
            const user = mockUsers[usernameInput];

            // Validate the password
            if (user.password === passwordInput) {
                alert("Login successful! Redirecting...");
                window.location.href = user.redirect;
            } else {
                alert("Error: Incorrect password.");
            }
        } else {
            alert("Error: User ID not found.");
        }
    });
});