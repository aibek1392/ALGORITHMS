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
