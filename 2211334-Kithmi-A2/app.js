// Get references to the HTML elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const signinBtn = document.getElementById("signin-btn");
const signupBtn = document.getElementById("signup-btn");

// Add event listeners to the buttons
signinBtn.addEventListener("click", signIn);
signupBtn.addEventListener("click", signUp);



// Define the signIn function
function signIn() {
    // Get the user inputs
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if the inputs are empty
    if (!username || !password) {
        alert("Please enter a username and password");
        return;
    }

    // Get the user data from local storage
    const userData = JSON.parse(localStorage.getItem(username));

    // Check if the user exists and the password is correct
    if (!userData || userData.password !== password) {
        alert("Invalid username or password");
        return;
    }

    // Redirect to the home page
    window.location.href = "home.html";
}

// Define the signUp function
function signUp() {
    // Get the user inputs
    const username = prompt("Enter a username");
    const password = prompt("Enter a password");

    // Check if the inputs are empty
    if (!username || !password) {
        alert("Please enter a username and password");
        return;
    }

    // Save the user data to local storage
    const userData = {
        username: username,
        password: password
    };
    localStorage.setItem(username, JSON.stringify(userData));

    // Redirect to the home page
    window.location.href = "home.html";
}


