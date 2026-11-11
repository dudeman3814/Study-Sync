// GOOGLE GEMINI GENERATED CODE FOR DEMONSTARTION PURPOSES ONLY!!!

// Hardcoded mock user database for the demo
const mockUsers = {
    "123": { password: "password", redirect: "pages/home.html" }
};

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');
    const loginPrompt = document.getElementById('loginPrompt');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value;

        // Check both username existence and password match in one condition
        if (mockUsers.hasOwnProperty(usernameInput) && mockUsers[usernameInput].password === passwordInput) {
            window.location.href = mockUsers[usernameInput].redirect;
        } else {
            console.log("Incorrect credentials, check carefully");

            if (!document.getElementById("loginError")) {
                const errorContainer = document.createElement("div");
                errorContainer.id = "loginError";
                errorContainer.classList.add("login-error", "font-bold");
                errorContainer.textContent = "Incorrect ID or Password. Try again :(";

                loginPrompt.appendChild(errorContainer);
            }
        }
    });
});