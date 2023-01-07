// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let numCharacters = prompt("How many characters do you want the password to have?")
  //numCharacters
  let incldUpperCase = confirm ("Do you want the password to include upper case letters?")
  if (incldUpperCase != null) {}
  let incldLowerCase = confirm ("Do you want the password to include lower case letters?")
  let incldNumbers = confirm ("Do you want the password to include numbers?")
  let incldSpecChars = confirm ("Do you want the password to include special characters?") 

}

getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {

// get random index value
const randomIndex = Math.floor(Math.random() * arr.length);

// get random item
const item = arr[randomIndex];

  return item;
}

const array = [1, 'hello', 5, 8];

const result = getRandomItem(array);
console.log(result);
  


// Function to generate password with user input
//Should this function call the other two (or one then the other?)
function generatePassword() {
  // if (incldUpperCase != null) {}
  console.log("You clicked the button");
  
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);