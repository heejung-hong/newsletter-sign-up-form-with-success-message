let emailInput = document.getElementById("email-input");
let emailError = document.getElementById("email-error");
let subscribeActive = document.getElementById("subscribe");


function validateEmail() {
  if (emailInput.value === "" || !emailInput.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    emailError.innerHTML = "Valid email required";
    emailError.classList.add("error-label");
    subscribeActive.classList.remove("subscribe-active")
    document.getElementById("subscribe").disabled = true;
    return false;
  } 
  emailError.innerHTML = "";
  subscribeActive.classList.add("subscribe-active")
  document.getElementById("subscribe").disabled = false;
  return true;
};

function subscribe() {
  let bold = document.createElement("b")
  let inputValue = document.getElementById("email-input").value;
  let t = document.createTextNode(inputValue);
  bold.appendChild(t);
  document.getElementById("email-text").appendChild(bold);
  document.getElementById("email-input").value = "";
  document.getElementById("div-one").style.display = "none"
  document.getElementById("container-two").style.display = "block"
}

function dismiss() {
  let emailValue = document.getElementById("email-text");
  emailValue.removeChild(emailValue.firstElementChild);
  document.getElementById("container-two").style.display = "none"
  document.getElementById("div-one").style.display = "block"
  subscribeActive.classList.remove("subscribe-active")
  document.getElementById("subscribe").disabled = true;
}


