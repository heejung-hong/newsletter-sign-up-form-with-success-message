let emailInput = document.getElementById("email");
let emailError = document.getElementById("error");

function validateEmail() {
  if (emailInput.value === "" || !emailInput.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    emailError.innerHTML = "Please enter a valid email";
    document.getElementById("subscribe").disabled = true;
    return false;
  } 
  emailError.innerHTML = "";
  document.getElementById("subscribe").disabled = false;
  return true;
};

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
  document.getElementById("subscribe").disabled = true;
}


