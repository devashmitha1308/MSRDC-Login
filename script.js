
// =====================================
// MSRDC LOGIN PAGE
// JavaScript Functionality
// =====================================

// 1. Get HTML Elements

const loginForm = document.getElementById("loginForm");
const employeeId = document.getElementById("employeeId");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");
const forgotPassword = document.getElementById("forgotPassword");
const rememberMe = document.getElementById("rememberMe");
const loginButton = document.querySelector(".login-btn");


// 2. Password Show / Hide

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        password.type = "password";
        togglePassword.textContent = "Show";
    }

});


// 3. Login Form Validation

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const idValue = employeeId.value.trim();
    const passwordValue = password.value.trim();

    message.textContent = "";

    if (idValue === "" && passwordValue === "") {

        message.textContent = "Please enter Employee ID and Password.";
        message.style.color = "#DC2626";

    }

    else if (idValue === "") {

        message.textContent = "Employee ID is required.";
        message.style.color = "#DC2626";

    }

    else if (passwordValue === "") {

        message.textContent = "Password is required.";
        message.style.color = "#DC2626";

    }

    else {

        // Loading State

        loginButton.disabled = true;
        loginButton.textContent = "Signing In...";

        message.textContent = "Please wait...";
        message.style.color = "#087F8C";

        // Demo submission only, no real authentication

        setTimeout(function () {

            loginButton.disabled = false;
            loginButton.textContent = "Sign In";

            message.textContent =
                "Frontend validation successful! Backend authentication is not connected.";

            message.style.color = "#087F8C";

        }, 1500);

    }

});


// 4. Forgot Password

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    message.textContent =
        "Please contact your administrator for password assistance.";

    message.style.color = "#087F8C";

});
