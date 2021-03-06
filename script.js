// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var numbers = "0123456789".split('');
var specialChars = " !#$%&()*+,-./:;<=>?@[]^_`{|}~".split(''); //I have read online that this is a bad move in general, but as its a completely controlled environment I think it might be okay, that being said I would appreciate advice on alternatives.



// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How long?")
  while (passwordLength < 8 || passwordLength > 128) {
    if (passwordLength < 8) {var passProb = "short"}
    else if (passwordLength > 128) {var passProb = "long"}
    passwordLength = prompt("Too " + passProb + " must be between 8 and 128")
  }
  var passwordLower = confirm("Lowercase?");
  var passwordUpper = confirm("Uppercase?");
  var passwordNumbers = confirm("Numbers?");
  var passwordSpecial = confirm("Special Characters?");
  var password = generatePassword(passwordLength, passwordLower, passwordUpper, passwordNumbers, passwordSpecial);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// The main function, actually responsible for everything
function generatePassword(index, passwordLower, passwordUpper, passwordNumbers, passwordSpecial) {
var password = '';
var array = [passwordLower, passwordUpper, passwordNumbers, passwordSpecial];
  for(var i = 0; i < index; i++){
    var choiceType = Math.round(Math.random() * (array.filter(Boolean).length-1));
    if (passwordLower === true && choiceType === 0) {
      password += passwordMaking(lowerCase);
    } else if ((passwordUpper === true && choiceType === 1 && passwordLower !== false) || (passwordUpper === true && passwordLower === false && choiceType === 0)) {
      password += passwordMaking(upperCase);
    } else if (((passwordNumbers === true && choiceType === 2 && passwordUpper !== false) && passwordUpper === true && passwordLower === true) || ((passwordLower === false && passwordUpper === false) && choiceType === 0) || ((passwordLower === true ^ passwordUpper === true) && choiceType === 1)) {
      password += passwordMaking(numbers);
    } else if (((passwordSpecial === true && choiceType === 3 && passwordNumbers !== false) && passwordUpper === true && passwordLower === true) || (((passwordLower === false && passwordUpper === false) && passwordNumbers === false) && choiceType === 0) || (((passwordLower === false && passwordUpper === false) && passwordNumbers === true) && choiceType === 1) || (((passwordLower === true ^ passwordUpper === true) && passwordNumbers === false) && choiceType === 1) || (((passwordLower === true ^ passwordUpper === true) && passwordNumbers === true) && choiceType === 2)) {
      password += passwordMaking(specialChars);
    } //Yes that was incredibly messy, any suggestions on how to do that better would be appreciated, please this is actually really annoying there has to be a better way
  }
  return password;
}

function passwordMaking(inputChars) {
  var randomChar = numberGenerator(inputChars);
  return inputChars[randomChar];
}

function numberGenerator(inputLength) {
  var randomChar = Math.floor(Math.random() * (inputLength.length));
  return randomChar;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
