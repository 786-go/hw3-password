// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var passwordLength = parseInt(prompt("Enter password length"))
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    return "Please enter a proper password that satisfies the criteria." 
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
