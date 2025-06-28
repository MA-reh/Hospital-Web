// Login Form
const SignInForm = document.getElementById("loginForm");

SignInForm.addEventListener("submit", function (e) {
  let loginEmail = document.getElementById("SignInEmail").value;
  let loginPassword = document.getElementById("SignInPassword").value;
  let storedEmail = localStorage.getItem("signEmail");
  let storedPassword = localStorage.getItem("signPassword");
  e.preventDefault();

  if (storedEmail === null) {
    alert("Email not found.");
  } else if (storedEmail === loginEmail && storedPassword === loginPassword) {
    localStorage.setItem("loggedInUser", loginEmail);
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Incorrect password.");
  }
});
