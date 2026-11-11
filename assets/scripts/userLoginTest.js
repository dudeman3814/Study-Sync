// GOOGLE GEMINI GENERATED CODE FOR DEMONSTARTION PURPOSES ONLY!!!

// Hardcoded mock user database for the demo
const mockUsers = {
    "123": { password: "password", redirect: "pages/home.html" }
};

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');
    // 1. Grab the login box container
    const loginPrompt = document.getElementById('loginPrompt');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value;

        if (mockUsers.hasOwnProperty(usernameInput)) {
            const user = mockUsers[usernameInput];

            if (user.password === passwordInput) {
                window.location.href = user.redirect;
            } else {
                console.log("Incorrect Password :(");

                // 2. Only create the div if it isn't already showing
                if (!document.getElementById("passwordError")) {
                    const errorContainer = document.createElement("div");
                    errorContainer.id = "passwordError";
                    errorContainer.classList.add("login-error", "font-bold");

                    const errorMessage = document.createTextNode("Incorrect Password :(");
                    errorContainer.appendChild(errorMessage);
                    loginPrompt.appendChild(errorContainer);
                }

            }
        }
    });
});