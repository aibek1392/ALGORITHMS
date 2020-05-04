

// Coding in function ```pickIt```, function accept 1 parameter:```arr```, it's a number array, we need traverse ```arr``` by using ```for``` loop, if element is odd number, push it to array ```odd```, if it's a even number, push it to array ```even```.
// I've defined two array ```odd``` and ```even``` in the function, and also wrote the return statement. ```your work is write a for loop.```
// If you forgot how to push an element to array, please refer to [lesson 4](http://www.codewars.com/kata/571effabb625ed9b0600107a).
function pickIt(arr) {
  var odd = [], even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i])
  }
  return [odd, even];
}

// Write a function that rearranges an integer into its largest possible value. how to interate through number
function superSize(number) {
  return parseInt(number.toString().split('').sort().reverse().join(''))
}

//   Write a simple regex to validate a username. Allowed characters are:
//   lowercase letters,
//   numbers,
//   underscore
//   Length should be between 4 and 16 characters (both included).
const validateUsr = (username) => /^[a-z0-9_]{4,16}$/.test(username)

//   how to get count of only lowercase letters in a string 
function lowercaseCount(str) {
  return str.split('').filter(a => /[a-z]/.test(a)).length
}

//how to count letters in a string
function charFreq(message) {
  let result = {}
  message.split('').map(n => result[n] ? result[n]++ : result[n] = 1)
  return result
}

//how to concat arrays in an array
//  ([[1,2],[3,4],[5,6]]) , "6>5>4>3>2>1")
function bigToSmall(arr) {
  let result = [].concat(...arr);
  return result.sort((a, b) => b - a).join('>')
}

// practicing with replace method
function correct(string) {
  return string.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g, 'I')
}
//how to use switch and default 
function getDrinkByProfession(param) {
  param = param.toLowerCase();
  switch (param) {
    case 'jabroni': 
  return 'Patron Tequila'
    case 'school counselor': 
  return 'Anything with Alcohol'
    case 'programmer':
  return 'Hipster Craft Beer'
    case 'bike gang member': 
  return 'Moonshine'
    case 'politician': 
  return 'Your tax dollars'
    case 'rapper': 
  return 'Cristal'
    default: return 'Beer'
  }
}