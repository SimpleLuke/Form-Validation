const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageConatiner = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;

const validateForm = () => {
  // Using Contraint API
  isValid = form.checkValidity();
  //   Style main message for an error
  message.textContent = "Please fill out all fields.";
  message.style.color = "red";
  messageConatiner.style.borderColor = "red";
};

const processFormData = (e) => {
  e.preventDefault();
  // Validate Form
  validateForm();
};

// Event Listeners
form.addEventListener("submit", processFormData);
