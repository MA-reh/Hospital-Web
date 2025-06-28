const form = document.getElementById("contactForm");
const submitButton = document.getElementById("SubmitForm");

form.addEventListener("submit", function (event) {
  if (localStorage.getItem("loggedInUser") !== null) {
    event.preventDefault();
    // Variable the form
    const fullName = form.getElementById("FullName").value;
    const Email = form.getElementById("Email").value;
    if (fullName !== "" && Email !== "") {
      alert(
        "Thank you for contacting us! your message has been sent successfully."
      );
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  } else {
    event.preventDefault();
    alert("Please login to book an appointment.");
    window.location.href = "signup.html";
  }
});
