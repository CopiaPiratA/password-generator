let copy = document.getElementById("copy-btn");
const characters = {
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '^!$%&|[](){}:;.,*+-#@<>~'
};
let options = document.querySelectorAll(".inp-check");
let input = document.getElementById("show-pass");
let lengthInp = document.getElementById("length-inp");
let randomPassword = "";
let retry = "Select at least one Option";

function generatePass() {
  randomPassword = "";
  let password = "";
  let passLength = parseInt(lengthInp.value);
  
    options.forEach(option => {
      if (option.checked) {
        password += characters[option.id];
      }
    });
  
    for (let i = 0; i < passLength; i++) {
      let randomCharacter = password[Math.floor(Math.random() * password.length)];
      randomPassword += randomCharacter;
    }
    if(randomPassword.includes("undefined")) {
      input.value = retry;
    }else {
      input.value = randomPassword;
    }
}

function copyPassword() {
  navigator.clipboard.writeText(randomPassword)
} 

lengthInp.addEventListener("input", () => {
    document.getElementById("length-dom").innerHTML = lengthInp.value;
    generatePass();
});
copy.addEventListener("click",copyPassword);