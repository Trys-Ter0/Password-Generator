// // # Module 5 Challenge: Password Generator

// // ## Overview

// // This week’s challenge requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

// // The password can include special characters. If you’re unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).

// // ## Instructions

// // The following image shows the web application's appearance and functionality:

// // ![password generator demo](./assets/05-javascript-challenge-demo.png)


// // * Generate a password when the button is clicked
// //   * Present a series of prompts for password criteria
// //     * Length of password
// //       * At least 10 characters but no more than 64.
// //     * Character types
// //       * Lowercase
// //       * Uppercase
// //       * Numeric
// //       * Special characters ($@%&*, etc)
// //   * Code should validate for each input and at least one character type should be selected
// //   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page






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

// Get user password options
function getPasswordOptions() {
  let characterAmountNumber = prompt("How many characters do you want the password to have? (10-64)")

  //If the user selects a number outside the range, print an error message and request correct input
  while (characterAmountNumber < 10 || characterAmountNumber > 64 || isNaN(characterAmountNumber)) {
    alert("You must input a number between 10 and 64.")
    characterAmountNumber = prompt("How many characters do you want the password to have?")
  }
  
  let incldUpperCase = confirm("Do you want the password to include upper case letters?")
  let incldLowerCase = confirm("Do you want the password to include lower case letters?")
  let incldNumbers = confirm("Do you want the password to include numbers?")
  let incldSpecChars = confirm("Do you want the password to include special characters?")

  // Return an object with the selected password options
  return {
    characterAmountNumber,
    incldUpperCase,
    incldLowerCase,
    incldNumbers,
    incldSpecChars
  };
}

function implementUserOptions(passwordOptions) {
  let characterArray = []

  if (passwordOptions.incldUpperCase) {
    characterArray = characterArray.concat(upperCasedCharacters)
  } else {
    // If the user doesn't want to include upper case characters, return an empty array
    characterArray = characterArray.concat([])
  }

  if (passwordOptions.incldLowerCase) {
    characterArray = characterArray.concat(lowerCasedCharacters)
  } else {
    // If the user doesn't want to include lower case characters, return an empty array
    characterArray = characterArray.concat([])
  }

  if (passwordOptions.incldNumbers) {
    characterArray = characterArray.concat(numericCharacters)
  } else {
    // If the user doesn't want to include numbers, return an empty array
    characterArray = characterArray.concat([])
  }

  if (passwordOptions.incldSpecChars) {
    characterArray = characterArray.concat(specialCharacters)
  } else {
    // If the user doesn't want to include special characters, return an empty array
    characterArray = characterArray.concat([])
  }

  // Return the array of characters to include in the password
  return characterArray;
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

return item
}

function generatePassword() {
  // Get the password options selected by the user
  const passwordOptions = getPasswordOptions();

  // Implement the user's password options
  const characterArray = implementUserOptions(passwordOptions);

  // Initialize an empty array to store the password characters
  let password = [];

  // Generate a random character for each character of the password
  for (let i = 0; i < passwordOptions.characterAmountNumber; i++) {
    password.push(getRandom(characterArray));
  }

  // Return the generated password as a string
  return password.join('');

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
