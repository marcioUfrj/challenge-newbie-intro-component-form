const form = document.getElementById('form-signup');
const errorElement = document.getElementById('error');

const MSG_FIRST_EMPTY = 'First Name cannot be empty';
const MSG_LAST_EMPTY = 'Last Name cannot be empty';
const MSG_PASSWORD_EMPTY = 'Password cannot be empty';
const MSG_EMAIL_EMPTY = 'Email cannot be empty';
const MSG_EMAIL_INVALID = 'Looks like this is not an email';
const PLACEHOLDER_EMAIL_INVALID = 'Looks like this is not an email';


form.addEventListener('submit', (event) => {
  // prevent form submission
  event.preventDefault();

  let hasFirstName = hasValue(form.elements['first-name'], MSG_FIRST_EMPTY);
  let hasLastName = hasValue(form.elements['last-name'], MSG_LAST_EMPTY);
  let hasPassword = hasValue(form.elements['password'], MSG_PASSWORD_EMPTY);
  let hasEmail = hasValue(form.elements['email'], MSG_EMAIL_EMPTY);
  let isValidEmail;
  if (hasEmail) {
    isValidEmail = validateEmail(form.elements['email'], MSG_EMAIL_INVALID, PLACEHOLDER_EMAIL_INVALID);
  }

  if (hasFirstName && hasLastName && hasPassword && hasEmail && isValidEmail) {
    alert("Form with all fields ok.")
  }

})

/* Function to check if input has any value */
function hasValue(input, message) {
  if (input.value.trim() === "" || input.value == null) {
    return showMessageError(input, message, "");
  }

  return showMessageSucess(input);
}

/* Function to validade the email format */
function validateEmail(input, invalidMsg, placeholderTxt) {
  // validate email format
	const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showMessageError(input, invalidMsg, false, placeholderTxt);
  }
  return true;
}


function showMessageError(input, message, placeholderTxt) {
  return showMessage(input, message, false, placeholderTxt);
}

function showMessageSucess(input) {
  return showMessage(input, "", true, "");
}

/* Function to adjust the ELEMENT */
function showMessage(input, message, hasSucess, placeholderTxt) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;

  if (hasSucess == false) {
    msg.removeAttribute("hidden");
    input.classList.add("field-err");
    input.placeholder = placeholderTxt;
    return hasSucess;
  }

  msg.setAttribute("hidden", true);
  input.classList.remove("field-err");
  return hasSucess;
}