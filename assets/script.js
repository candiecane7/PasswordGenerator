// Assignment code here

//when button is clicked, ask questions to get information on what kind of password
var generatePassword = function () {
  //first question will be length of password
  var passLength = window.prompt("How long do you want your password to be? It must be at least 8 characters long, and no more than 128 characters total.");
  //second question will be if they want uppercase
  var passUpper = window.confirm("Do you want Uppercase letters in your password?");
  //third question is do they want lowercase
  var passLower = window.confirm("Do you want lowercase letters in your password?");
  //fourth question is do they want special characters
  var passSpecial = window.confirm("Do you want special characters in your password?");
  //fifth question is whether they want numeric characters
  var passNum = window.confirm("Do you want numeric characters in your password?");

  //create an empty array to store different character choices
  var selection = [""];
  // var for numbered characters
  var charactersNum = "1234567890".split(' ');
  //var for lower case characters
  var charactersLow = "qwertyuiopasdfghjklzxcvbnm".split(' ');
  //var for upper case characters
  var charactersUp = "QWERTYUIOPASDFGHJKLZXCVBNM".split(' ');
  //var for special characters
  var charactersSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split(' ');


  //if statements to push the characters into my selection array if they are chosen via the confirm questions
  if (passUpper === true) {
    selection.push(charactersUp);
  };
  if (passLower === true) {
    selection.push(charactersLow);
  };
  if (passNum === true) {
    selection.push(charactersNum);
  };
  if (passSpecial === true) {
    selection.push(charactersSpecial);
  };

  // this will separate all the characters from eachother
  selection = selection.join("");

  //for loop that will choose as many characters as the prompt input that was chosen
  var finalPass = []
  for (x = 1; x <= passLength; x++) {

    finalPass.push(selection[Math.floor(Math.random() * selection.length)]);
  };
  //this gets rid of the commas between the characters chosen
  return finalPass.join("");
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
