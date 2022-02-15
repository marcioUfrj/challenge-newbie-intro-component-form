# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshots/desktop-version.JPG)
![](./screenshots/mobile-version.JPG)

### Links

- Solution URL: [Fronted Mentor Challenge](https://your-solution-url.com)
- Live Site URL: [Git Pages](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

```html
<form id="form-signup" action="process-form.html" class="form-container">
  <div class="field-container">
    <input type="text" id="first-name" class="signup-input" placeholder="First Name">
    <small hidden></small>
  </div>
```
```js
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
```


### Continued development

I could understand a little more about form validation with JavaScript but there's still a long way to go.

### Useful resources

- [JavaScript Form Validation](https://www.javascripttutorial.net/javascript-dom/javascript-form/) - This was a master class for me.

## Author

- Frontend Mentor - [@marcioUfrj](https://www.frontendmentor.io/profile/marcioUfrj)
- Twitter - [@tsukimi_23](https://www.twitter.com/tsukimi_23)