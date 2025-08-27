function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "priyu";  // <-- change your password here
    const message = document.getElementById("message");
    const hint2 = document.getElementById("hint2");

    if (password === correctPassword) {
        window.location.href = "birthday.html"; // go to next page
    } else {
        message.textContent = "Wrong password 😘 Try again!";
        message.style.color = "red";

        // Show second hint only after wrong attempt
        hint2.textContent = "Hint: It's maggie Id password";
        hint2.style.display = "block";
    }
}