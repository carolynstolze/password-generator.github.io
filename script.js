// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function start() {
  console.log("we're here!");
  var password = generatePasswordStart();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//return a string
function generatePasswordStart() {

  // ======= vars definitions ======

  // Array of special characters to be included in password
  var specialCharacters = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
  // Array of numeric characters to be included in password
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  var userOptionalChars = [];

  // ======= functions definitions ======

  // FUNCTION 1: gets user options and store in vars
  // function getUserOptions() {

    // asking CHARACTER LENGTH: it should be at least 8 chars and no more than 128 chars
    var passwordLength = prompt("How many characters would you like your password to be? (min 8, max 128)");
    // ----checking if character length is ok----
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password must be between 8 and 128 characters.");
      return;
    }
    // asking LOWERCASE INCLUDED?
    var wantLowercase = confirm("Would you like your password to contain lowercase characters?")
    // asking UPPERCASE INCLUDED?
    var wantUppercase = confirm("Would you like your password to contain uppercase characters?")
    // asking SPECIAL CHARACTERS INCLUDED?
    var wantSpecial = confirm("Would you like your password to contain special characters?")
    // asking NUMBERS INCLUDED?
    var wantNumbers = confirm("Would you like your password to contain numbers?")
    // ----checking that at least one is true----
    if (wantLowercase === false && wantUppercase === false && wantSpecial === false && wantNumbers === false) {
      alert("At least one character type must be selected.");
      return;
    }

    // NESTED FUNCTION A: generates password according to user selections
    // function generatePassword(userOptions) {
      // var userOption = getUserOptions();
      // Variable to store password as it's being concatenated
      var password = [];

      // if lowercase was selected by user:
      if (wantLowercase) {
        // push one random lower char to password
        userOptionalChars.push(lowerCasedCharacters)
        // add lowerCharsArray to userOptionalChars
      }

      // if uppercase was selected by user:
      if (wantUppercase) {
        // push a random upper char to password
        userOptionalChars.push(upperCasedCharacters)
        // add upperCharsArray to userOptionalChars
      }

      // if special characters was selected by user:
      if (wantSpecial) {
        // push a random special char to password
        userOptionalChars.push(specialCharacters)
        // add specialCharsArray to userOptionalChars
      }

      // if numeric was selected by user:
      if (wantNumbers) {
        // push a random numeric char to password
        userOptionalChars.push(numericCharacters)
        // add numericCharsArray to userOptionalChars
      }

      // for loop between start number of elements in password to the requested number of characters
      for (var i = 0; i < passwordLength.length; i++) {
        password.push(userOptionalChars[Math.floor(Math.random()*passwordLength.length)]);
        
      }

      // mutate the array to a string
      // return password string
      // return result.join('');
      console.log(password)
    // }

    // NESTED FUNCTION B: calls (start) 
    // getUserOptions();
    // generatePassword(userOption);
  // }
}

  // Add event listener to generate button
  generateBtn.addEventListener("click", start);
  // var expectSpecialChars = false;
  // var expectNumericChars = false;
  // var expectUppercaseChars = false;
  // var expectLowercaseChars = false;
  // var userOptions = {
  //   expectSpecialChars: false,
  //   expectNumericChars: false,
  //   expectUppercaseChars: false,
  //   expectLowercaseChars: false,

  // generatePassword()  // this line added by harrison