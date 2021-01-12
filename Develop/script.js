// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How long?");
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(index) {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  let numbers = "0123456789".split('');
  let specialChars = " !#$%&()*+,-./:;<=>?@[]^_`{|}~".split(''); //I have read online that this is a bad move in general, but as its a completely controlled environment I think it might be okay, that being said I would appreciate advice on alternatives.
  var password = '';
  for(var i = 0; i < index; i++){
    // if ()
    // else {
      passwordMaking(lowerCase);
    // }
  }
  return password;
}

function passwordMaking(inputChars) {
  var randomChar = numberGenerator(inputChars);
  password += lowerCase[randomChar];
  return password;
}

function numberGenerator(inputLength) {
  var randomChar = Math.round(Math.random() * (inputLength.length) - 1);
  return randomChar;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
