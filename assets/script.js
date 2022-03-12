// Assignment code here


var selection = [""];
var charactersNum = "1234567890".split(' ');
var charactersLow = "qwertyuiopasdfghjklzxcvbnm".split(' ');
var charactersUp = "QWERTYUIOPASDFGHJKLZXCVBNM".split(' ');
var charactersSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split(' ');


//when button is clicked, ask questions to get information on what kind of password
var generatePassword = function () {
  //first question will be length of password
  var passLength = window.prompt("How long do you want your password to be? It must be at least 8 characters long, and no more than 128 characters total.");
  if(passLength < 8 || passLength > 128) {
    window.alert("You must choose a password length between 8 and 128. Please try again!");
    return generatePassword();
    }
  //second question will be if they want uppercase
  var passUpper = window.confirm("Do you want Uppercase letters in your password?");
  //third question is do they want lowercase
  var passLower = window.confirm("Do you want lowercase letters in your password?");
  //fourth question is do they want special characters
  var passSpecial = window.confirm("Do you want special characters in your password?");
  //fifth question is whether they want numeric characters
  var passNum = window.confirm("Do you want numeric characters in your password?");
    if(!passLower && !passNum && !passSpecial && !passUpper) {
      window.alert("You must choose at least one type of character for your password. Please try again!")
      return generatePassword();
    }


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
