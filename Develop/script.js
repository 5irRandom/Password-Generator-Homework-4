// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
let numbers = "0123456789".split('');
let specialChars = " !#$%&()*+,-./:;<=>?@[]^_`{|}~".split(''); //I have read online that this is a bad move in general, but as its a completely controlled environment I think it might be okay, that being said I would appreciate advice on alternatives.


// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How long?")
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
  for(var i = 0; i < index; i++){
    var choiceType = Math.round(Math.random() * (3));
    if (passwordLower === True && choiceType === 0) {
      password += passwordMaking(lowerCase);
    } else if (passwordUpper === True && choiceType === 1) {
      password += passwordMaking(upperCase);
    } else if (passwordNumbers === True && choiceType === 2) {
      password += passwordMaking(numbers);
    } else if (passwordSpecial === True && (choiceType === 3 || choiceType === 2 || choiceType === 1 || choiceType === 0)) {
      password += passwordMaking(specialChars);
    }
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
