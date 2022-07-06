// Assignment Code
var generateBtn = document.querySelector("#generate");

// create generatePassword function//
function generatePassword(event) {
  console.log("This button works!");
  enter = prompt("How many characters would you like your password to be?")
  if (enter == null){
    alert(length is required!){
  } else if (enter < 8 || enter > 128) {
    enter = prompt("You must choose between 8 and 128 characters!")
  } else 
    confirmNumber = confirm("Will this password have numbers?");
    confirmSpecialCharacters = confirm("Will this password have special characters?");
    confirmUpperCase = confirm("Will this password have Upper Case letters?");
    confirmLowerCase = confirm("Will this password have Lower Case letters?");
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
