const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const passwordLength = document.getElementById("password-length");
const passwordEl = document.getElementById("password");
const isuppercase = document.getElementById("isUppercase");
const islowercase = document.getElementById("isLowercase");
const havingNumber = document.getElementById("havingNumber");
const havingSymbols = document.getElementById("havingSymbols");
const copyIcon = document.querySelector(".fa-copy");

generateBtn.addEventListener("click", () => {
  copyIcon.style.color = "transparent";
  generatePassword();
});

copyBtn.addEventListener("click", () => {
  copyPassword();
});

function generatePassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let length = passwordLength.getAttribute("Max");
  var password = "";

  for (let i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  passwordEl.value = password;

  //   Make checkbox -> checked
  islowercase.setAttribute("checked", true);
  isuppercase.setAttribute("checked", true);
  havingNumber.setAttribute("checked", true);
  havingSymbols.setAttribute("checked", true);
}

// Copy to Clipboard

function copyPassword() {
  if (passwordEl.value == "") {
    alert("First Generate Password ");
  } else {
    passwordEl.select();
    passwordEl.setSelectionRange(0, 999);
    navigator.clipboard.writeText(passwordEl.value);
    copyIcon.style.color = "green";
  }
}
