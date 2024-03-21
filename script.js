

function subscribe() {
  let bold = document.createElement("b")
  let inputValue = document.getElementById("email").value;
  let t = document.createTextNode(inputValue);
  bold.appendChild(t);
  document.getElementById("emailText").appendChild(bold);
  document.getElementById("email").value = "";
  document.getElementById("blockOne").style.display = "none"
  document.getElementById("containerTwo").style.display = "block"
}

function dismiss() {
  let emailValue = document.getElementById("emailText");
  emailValue.removeChild(emailValue.firstElementChild);
  document.getElementById("containerTwo").style.display = "none"
  document.getElementById("blockOne").style.display = "block"
}


