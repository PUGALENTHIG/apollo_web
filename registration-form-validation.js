
const form = document.getElementById("input-form");
const fullName = document.getElementById("fullName");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const checkPassword = document.getElementById("checkPassword");
const agreeTAC = document.getElementById("agree-tac");
const submit = document.getElementById("submit");


form.addEventListener("submit", (e) => {
  e.preventDefault();


  checkInput();
});

function checkInput() {

  const fullNameValue = fullName.value.trim();
  const usernameValue = userName.value.trim().toLowerCase();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const passwordValue = password.value.trim();
  const checkPasswordValue = checkPassword.value.trim();


  if (fullNameValue === "") {
    
    setErrorMessage(fullName, "Full Name field can't be blank. Required this field.");

  
    fullName.focus();
  } else if (fullNameValue.length < 5 || fullNameValue.length > 50) {
    setErrorMessage(fullName, "This field minimum character is 5 and maximum character is 50. Please input at this range.");

    fullName.focus();
  } else {

    setSuccessMessage(fullName);
  }

  
  if (usernameValue === "") {
    
    setErrorMessage(userName, "Username field can't be blank. Required this field.");

 
    userName.focus();
  } else if (usernameValue.length < 5 || usernameValue.length > 30) {
    setErrorMessage(userName, "This field minimum character is 5 and maximum character is 30. Please input at this range.");

    
    userName.focus();
  } else if (!isUserNameValid(usernameValue)) {
    setErrorMessage(userName, "Sorry! Your define username is not valid.");

    
    userName.focus();
  } else {
    
    setSuccessMessage(userName);
  }

 
  if (emailValue === "") {

    setErrorMessage(email, "Email field can't be blank. Required this field.");

    
    email.focus();
  } else if (!isValidateEmail(emailValue)) {
    setErrorMessage(email, "Sorry! Your define email is not valid.");

    email.focus();
  } else {

    setSuccessMessage(email);
  }

  
  if (phoneNumberValue === "") {

    setErrorMessage(phoneNumber, "Phone Number field can't be blank. Required this field.");

   
    phoneNumber.focus();
  } else if (phoneNumberValue.length > 11) {
    setErrorMessage(phoneNumber, "This field minimum maximum character is 11. Please input at this range.");

   
    phoneNumber.focus();
  } else {

    setSuccessMessage(phoneNumber);
  }


  if (passwordValue === "") {
   
    setErrorMessage(password, "Password field can't be blank. Required this field.");


    password.focus();
  } else if (passwordValue.length < 6 || passwordValue.length > 20) {
    setErrorMessage(password, "This field minimum character is 6 and maximum character is 20. Please input at this range.");


    password.focus();
  } else {
    
    setSuccessMessage(password);
  }

 
  if (checkPasswordValue === "") {
    
    setErrorMessage(checkPassword, "Password field can't be blank. Required this field.");

    checkPassword.focus();
  } else if (checkPasswordValue.length < 6 || checkPasswordValue.length > 20) {
    setErrorMessage(checkPassword, "This field minimum character is 6 and maximum character is 20. Please input at this range.");

  
    checkPassword.focus();
  } else if (passwordValue !== checkPasswordValue) {
    setErrorMessage(checkPassword, "Sorry! Your define password and Retype password not match. Please input correct password.");

    
    checkPassword.focus();
  } else {
    
    setSuccessMessage(checkPassword);
  }

   if (!agreeTAC.checked === true) {
    submit.className = "submit disabled";
    submit.innerText = "Without Agree TAC Submit Disabled";


    $(":input[type=submit]").prop("disabled", true);
  } else {
    submit.className = "submit";
    submit.innerText = "Submit Now";
  }
}


function setErrorMessage(input, message) {
 
  const formControl = input.parentElement; 
  const small = formControl.querySelector("small");

  small.innerText = message;


  formControl.className = "form-control error";
}


function setSuccessMessage(input) {

  const formControl = input.parentElement; 


  formControl.className = "form-control success";
}

function isUserNameValid(username) {

  const res = /^[a-z0-9_\.]+$/.exec(username);
  const valid = !!res;
  return valid;
}


function isValidateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
