// Assignment code here
//when button is clicked, ask questions to get information on what kind of password

//first question will be length of password
var passLength = window.prompt("How long do you want your password to be? It must be at least 8 characters long, and no more than 128 characters total.");

//second question will be if they want uppercase
var passUpper = window.prompt("Do you want Uppercase letters in your password?");
//third question is do they want lowercase
varpassLower = window.prompt("Do you want lowercase letters in your password?");
//fourth question is do they want special characters
var passSpecial = window.prompt("Do you want special characters in your password?");
//fifth question is whether they want numeric characters
var passNum = window.prompt("Do you want numeric characters in your password?");
//with all input data, use data to generate a password the proper length with all the characters they chose


var charactersAll = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
for (x=1;x<=passLength; x++) {
  console.log(charactersAll[Math.floor(Math.random() * charactersAll.length)]);
}

// 4 strings with all the different letters/characters that the password can choose from

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
