// Assignment Code
var generateBtn = document.querySelector("#generate");
var options;
var numbers = '0123456789'
var specialCharacters = "!#$%&'(*+,-./\:;<=>?@[]^_`{|}~"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"

// create generatePassword function//
function generatePassword(event) {
  enter = prompt("How many characters would you like your password to be?");
//check if any length is entered//
  if (!enter) {
    alert("length is required!");
//set min and max length for password//
  } else if (enter < 8 || enter > 128) {
    enter = prompt("You must choose between 8 and 128 characters!");
//criteria must be met for password, choose: numbers, special characters, upper case, and/or lower case//
  } else {
    confirmNumber = confirm("Will this password have numbers?");
    confirmSpecialCharacters = confirm("Will this password have special characters?");
    confirmUpperCase = confirm("Will this password have Upper Case letters?");
    confirmLowerCase = confirm("Will this password have Lower Case letters?");
  }
//confirm criteria has been selected//
  if (!confirmNumber && !confirmSpecialCharacters && !confirmUpperCase && !confirmLowerCase) {
    options = alert("You need to select criteria.")
  }
//
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
