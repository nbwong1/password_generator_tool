// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) {
}
//Generate Button Prompts//
//how long can the password be 8<x<128 characters//
let writePassword = prompt('How long should the password be?');

let writePassword = prompt('What kinds of character types to include?')

