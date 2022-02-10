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
  var passwordCase = confirm("Do you want to have capital letters in your password?")
  var passwordLower = confirm("Do you want to have lower case letters in your password?")
  var passwordNum = confirm("Do you want to have numbers in your password?")
  var passwordSpecial = confirm("Do you want to have special characters in your password?")

  var response = ""
  if (passwordCase) {
    response += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (passwordLower) {
    response += "abcdefghijklmnopqrstuvwxyz"
  }

  if (passwordNum) {
    response += "0123456789"
  }

  if (passwordSpecial) {
    response += "!@#$%^&*()"
  }

  if (!passwordCase && !passwordLower && !passwordNum && !passwordSpecial) {
    return "You must select at least 1 criteria to generate a password."
  }

  console.log(response)
var password = ""
  for (var i = 0; i < passwordLength; i++) {
    password += response[Math.floor(Math.random()*response.length)]
  }
console.log(password)

}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
