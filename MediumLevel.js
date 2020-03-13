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

