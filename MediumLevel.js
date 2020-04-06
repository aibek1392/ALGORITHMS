// Write a function that given a list of countries returns the country(s) that occur the least amount of times. 

let arr = ["apple","orange","apple","orange","pear","orange", "pear", "pear", "apple"];

function getCount(array){
  return array.reduce((prev, next) => {
    prev[next] = (prev[next] += 1) || 1
    return prev
  }, {})
}

function getLeast(obj){
  return Math.min(...Object.values(obj))
}

function getKeysByValue(object, value) {
  return Object.keys(object).filter(key => object[key] === value);
}

function leastNumberAppearences(arr){
  let count = getCount(arr)
  let leastVal = getLeast(count)
  return getKeysByValue(count, leastVal)
}

let count = getCount(arr)
let leastVal = getLeast(count)
let repeatLeast = getKeysByValue(count, leastVal)

console.log(count)
console.log('----------------------------------')
console.log(leastVal)
console.log('----------------------------------')
console.log(repeatLeast)
console.log('----------------------------------')
leastNumberAppearences(arr)



///............---------------------------2
let arr = ["apple","orange","apple","orange","pear","orange", "pear", "pear", "apple"];

function getCount(array){
  return array.reduce((prev, next) => {
    prev[next] = (prev[next] += 1) || 1
    return prev
  }, {})
}

function getLeast(obj){
  return Math.min(...Object.values(obj))
}

function getKeysByValue(object, value) {
  return Object.keys(object).filter(key => object[key] === value);
}

function leastNumberAppearences(arr){
  let count = getCount(arr)
  let leastVal = getLeast(count)
  return getKeysByValue(count, leastVal)
}

let count = getCount(arr)
let leastVal = getLeast(count)
let repeatLeast = getKeysByValue(count, leastVal)

console.log(count)
console.log('----------------------------------')
console.log(leastVal)
console.log('----------------------------------')
console.log(repeatLeast)
console.log('----------------------------------')
leastNumberAppearences(arr)

///You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond (n) {
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}

// Find the letter that appears most often in a string S

function mostFrequentCharacter(S) {
  const lettersObj = {};
  for (letter of S) {
    lettersObj[letter] = 0;
  }
  for (letter of S) {
    lettersObj[letter] += 1;
  }
  const lettersArr = [];
  for (letter in lettersObj) {
    if (lettersObj[letter] === Math.max(...Object.values(lettersObj))) {
      lettersArr.push(letter)
    }
  }
  return lettersArr.sort()[0]
}


// Find max binary gap; count of largest sequence of zeros between ones for given binary number N

function binaryGap(N) {
	const regEx1 = /^[0]+/;
	const regEx2 = /[0]+$/;

	const numString = N.toString(2).replace(regEx1,'').replace(regEx2,'').toString();

	const countsObj = {};
	let counter = 0;

	for (i in numString) {
		if (numString[i] == 0) {
			counter += 1;
		} else {
			countsObj[i] = counter;
			counter = 0;
		}
	}

	return (Math.max(...Object.values(countsObj)));
}

