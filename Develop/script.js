
//Add Event Listener to generate button- prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Assignment code
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Declare Variables
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Password length prompt
function generatePassword() {
  var confirmLength = (prompt("Desired Password Length?"));

  // Loop if answer does not meet criteria 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters. Please Try again");
      var confirmLength = (prompt("Desired Password Length?"));
      } 

      // Repeat back how many characters the user will have  
      alert(`Your password will have ${confirmLength} characters`);

    // Determine the rest of the password conditions
    var confirmSpecialCharacter = confirm("Click OK to include special characters");
    var confirmNumericCharacter = confirm("Click OK to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to include uppercase characters");

      // Loop if answer does not meet criteria
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one condition");
        var confirmSpecialCharacter = confirm("Click OK to include special characters");
        var confirmNumericCharacter = confirm("Click OK to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to include uppercase characters");
    } 

  //  Password Conditions
  var passwordCharacters = []
      
 if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
    }

   if (confirmNumericCharacter) {
       passwordCharacters = passwordCharacters.concat(number)
     }
      
     if (confirmLowerCase) {
     passwordCharacters = passwordCharacters.concat(alphaLower)
     }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

console.log(passwordCharacters)

// String filled to generate new password
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}