let emailInput = document.getElementById("email");
let emailError = document.getElementById("error");
let subscribeActive = document.getElementById("subscribe");


function validateEmail() {
  if (emailInput.value === "" || !emailInput.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    emailError.innerHTML = "Valid email required";
    emailError.classList.add("errorLabel");
    subscribeActive.classList.remove("subscribeActive")
    document.getElementById("subscribe").disabled = true;
    return false;
  } 
  emailError.innerHTML = "";
  subscribeActive.classList.add("subscribeActive")
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
  subscribeActive.classList.remove("subscribeActive")
  document.getElementById("subscribe").disabled = true;
}


