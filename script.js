const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageConatiner = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

const validateForm = () => {
  // Using Contraint API
  isValid = form.checkValidity();
  //   Style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageConatiner.style.borderColor = "red";
    return;
  }
  //   Check kto see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passowords match.";
    message.style.color = "red";
    messageConatiner.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }

  //   If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageConatiner.style.borderColor = "green";
  }
};

const storeFormData = () => {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
};

const processFormData = (e) => {
  e.preventDefault();
  // Validate Form
  validateForm();
  //   Submit Data if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
};

// Event Listeners
form.addEventListener("submit", processFormData);
