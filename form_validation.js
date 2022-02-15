const form = document.getElementById('form-signup');
const errorElement = document.getElementById('error');

const MSG_FIRST_EMPTY = 'First Name cannot be empty';
const MSG_LAST_EMPTY = 'Last Name cannot be empty';
const MSG_PASSWORD_EMPTY = 'Password cannot be empty';
const MSG_EMAIL_EMPTY = 'Email cannot be empty';
const MSG_EMAIL_INVALID = 'Looks like this is not an email';

/*
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. 
   message for this error should say 
   *"[Field Name] cannot be empty"*

  - The email address is not formatted correctly 
  (i.e. a correct email address should have 
    this structure: `name@host.tld`). 
    The message for this error should say 
    *"Looks like this is not an email"*

*/

form.addEventListener('submit', (event) => {
  // prevent form submission
  event.preventDefault();

  let hasFirstName = hasValue(form.elements['first-name'], MSG_FIRST_EMPTY);
  let hasLastName = hasValue(form.elements['last-name'], MSG_LAST_EMPTY);
  let hasPassword = hasValue(form.elements['password'], MSG_PASSWORD_EMPTY);
  let hasEmail = hasValue(form.elements['email'], MSG_EMAIL_EMPTY);
  //let isValidEmail = validateEmail();

  if (hasFirstName && hasLastName && hasPassword && hasEmail && isValidEmail) {
    alert("Form with all fields ok.")
  }

})

function hasValue(input, message) {
  if (input.value == "" || input.value == null) {
    return showMessageError(input, message);
  }

  return showMessageSucess(input);
}

function showMessageError(input, message) {
  return showMessage(input, message, false);
}

function showMessageSucess(input) {
  return showMessage(input, "", true);
}

function showMessage(input, message, hasSucess) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;

  if (hasSucess == false) {
    msg.removeAttribute("hidden");
    input.classList.add("field-err");
    input.placeholder = "";
    return hasSucess;
  }

  msg.setAttribute("hidden", true);
  input.classList.remove("field-err");
  return hasSucess;
}