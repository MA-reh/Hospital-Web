const form = document.getElementById("bookingForm");
const submitButton = document.getElementById("SubmitForm");

form.addEventListener("submit", function (event) {
  if (localStorage.getItem("loggedInUser") !== null) {
    event.preventDefault();
    // Variable the form
    const fullName = form.querySelectorAll('input[type="text"]')[0].value;
    const phoneNumber = form.querySelectorAll('input[type="text"]')[1].value;
    const specialty = document.getElementById("specialty").value;
    const doctor = document.getElementById("doctor").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    if (
      fullName !== "" &&
      phoneNumber !== "" &&
      specialty !== "Select Specialty" &&
      doctor !== "Select Doctor" &&
      day !== "Select Day" &&
      time !== "Select Time"
    ) {
      alert("Appointment booked successfully!");
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
