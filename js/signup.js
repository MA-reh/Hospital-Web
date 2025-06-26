let signUpForm = document.getElementById("registerForm");

signUpForm.addEventListener("submit", function (e) {
  let signName = document.getElementById("SignUpName").value;
  let signEmail = document.getElementById("SignUpEmail").value;
  let signPassword = document.getElementById("SignUpPassword").value;
  e.preventDefault();

  if (localStorage.getItem(signEmail)) {
    alert("User already exists. Please log in.");
  } else {
    localStorage.setItem(signEmail, signPassword, signName);
    alert("User registered successfully. Please log in.");
    signUpForm.reset();
    window.location.href = "signin.html";
  }
});

function logout() {
  localStorage.removeItem("signEmail");
  window.location.href = "signin.html";
}
