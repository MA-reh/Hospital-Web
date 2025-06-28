// Sign Up Form
let signUpForm = document.getElementById("registerForm");

signUpForm.addEventListener("submit", function (e) {
  let signName = document.getElementById("SignUpName").value;
  let signEmail = document.getElementById("SignUpEmail").value;
  let signPassword = document.getElementById("SignUpPassword").value;
  e.preventDefault();
  if (localStorage.getItem(signEmail)) {
    alert("User already exists. Please log in.");
  } else {
    localStorage.setItem("signEmail", signEmail);
    localStorage.setItem("signPassword", signPassword);
    alert("User registered successfully. Please log in.");
    signUpForm.reset();
    window.location.href = "Login.html";
  }
});
if (localStorage.getItem("loggedInUser") !== null) {
  document.getElementById("logIn").style.display = "none";
  document.getElementById("logOut").style.display = "block";
}
