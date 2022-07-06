//Prompt for password criteria (lowerCase, upperCase, numbers, symbols)//
var passwordLowerCase = prompt ("Do you want lower case letters in your password?");

let passwordUpperCase = prompt("Do you want upper case letters in your password?");
let passwordNumbers = prompt("Do you want numbers in your password?");
let passwordSymbols = prompt("Do you want symbols in your password?");

// Assignment Code
let generateBtn = document.querySelector("#generate");
let count = document.getElementById('counter');

// Write password to the #password input
function writePassword() {
  let minLength = 8;
  let maxLength = 128;
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbers = '1234567890';
  let symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword) {
}
//Generate Button Prompts//
let writePassword = prompt('How long should the password be?');

let writePassword = prompt('What kinds of character types to include?')

