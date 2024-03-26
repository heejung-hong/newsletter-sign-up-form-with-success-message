# newsletter-sign-up-form-with-success-message

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

#### Desktop View

![Screenshot 2024-03-26 at 2 04 31 PM](https://github.com/heejung-hong/newsletter-sign-up-form-with-success-message/assets/133067265/8f20911c-9b83-4f59-bb0b-c89abb56bb85)

#### Email Validation

![Screenshot 2024-03-26 at 2 05 16 PM](https://github.com/heejung-hong/newsletter-sign-up-form-with-success-message/assets/133067265/18cce5e8-16af-448b-9f4c-a8d42472d3a4)

![Screenshot 2024-03-26 at 2 05 33 PM](https://github.com/heejung-hong/newsletter-sign-up-form-with-success-message/assets/133067265/8f3ba153-90e3-4e9a-bf9f-d91d083b3fd9)

#### Success Message with User Email

![Screenshot 2024-03-26 at 2 05 57 PM](https://github.com/heejung-hong/newsletter-sign-up-form-with-success-message/assets/133067265/dfa3d761-8842-445f-a35f-daf893e8b506)

#### Mobile View

![Screenshot 2024-03-26 at 2 04 55 PM](https://github.com/heejung-hong/newsletter-sign-up-form-with-success-message/assets/133067265/7fd719c5-ef6b-4979-b582-6179dbc81a8f)

### Links

- [Solution URL](https://github.com/heejung-hong/newsletter-sign-up-form-with-success-message)
- [Live Site URL](https://heejung-hong.github.io/newsletter-sign-up-form-with-success-message/)

## My process

### Built with

- HTML, CSS, JavaScript
- Flexbox

### What I learned

Using CSS display block and none, I was able to switch the desktop and mobile images between desktop and mobile view.

To see how you can add code snippets, see below:

```css
@media only screen and (min-width: 360px) {
  .desktop-image { display: none; }
  .mobile-image {
    display: block;
    width: 400px; 
    height: 310px; 
    margin: auto;
  }
}

@media only screen and (min-width: 768px) {
  .desktop-image { display: block; }
  .mobile-image { display: none; }
}
```

### Useful resources

- [To Do List](https://www.w3schools.com/howto/howto_js_todolist.asp) - This helped me to create the function to update the email input for the success screen.
- [Email Validation](https://www.youtube.com/watch?v=ndNPg8-5jgI) - This YouTube helped with creating the email validation function.

## Author

- Website - [Portfolio](https://heejung-hong.github.io/Portfolio/)
- Frontend Mentor - [@heejung-hong](https://www.frontendmentor.io/profile/heejung-hong)
- LinkedIn - [heejung-hong](https://www.linkedin.com/in/heejung-hong/)


