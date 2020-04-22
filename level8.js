//finde needle
const findNeedle = (haystack) => {
  let result = ''
  let needle = haystack.filter(needle => needle === 'needle')
  let position = haystack.indexOf('needle')
  return result += `found the ${needle} at position ${position}`
}

// secret message for Johnny 
const greet = (name) => name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!"

// checking the number is divisible 
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

//   reverse numbers in array and join them
const digitize = n => n.toString().split('').reverse().map(Number)
// double numbers in an array
function maps(x) {
  return x.map(x => x * 2)
}

//   how to convert number to negative or postive 
const invert = (array) => array.map(number => number * -1)

//how to get avverage of an array
function find_average(array) {
  console.log(array)
  let result = 0
  const reducer = (x, y) => x + y
  result += array.reduce(reducer)
  return result / array.length;
}
// Test.assertEquals(abbrevName("Sam Harris"), "S.H");

function abbrevName(name) {
  let result = ''
  result += name.split(' ').map(n => n.charAt(0).toUpperCase()).join('.')
}


// Test.assertEquals(bonusTime(25000, true), '£250000');
// Test.assertEquals(bonusTime(10000, false), '£10000');
function bonusTime(salary, bonus) {
  let result = '';
  return result += bonus ? "£" + salary * 10 : "£" + salary
}

//   how to change letter in a string
const DNAtoRNA = (dna) => dna.split('T').join('U')
// sum of numbers  in an array 
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

//   if else statement
function areYouPlayingBanjo(name) {
  // Implement me
  return name[0] === "R" || name[0] === 'r' ? name + " plays banjo" : name + " does not play banjo"
}

//sort.slice.reduce
function sumArray(array) {
  console.log(array)
  if (array == null || array.length == 0 || array.length == 1) return 0
  return array.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0)
}


//find max, min numbers in an array
var min = (list) => Math.min(...list)
var max = (list) => Math.max(...list)


function getMiddle(s) {
  return (s.length % 2 === 1) ? s.charAt(Math.floor(s.length / 2)) : s.slice(s.length / 2 - 1, s.length / 2 + 1)
}



//Test.assertSimilar(countBy(1,5), [1,2,3,4,5], "Array does not match")
// Test.assertSimilar(countBy(2,5), [2,4,6,8,10], "Array does not match")
function countBy(x, n) {
  var z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x)
  }
  return z;
}

//convert letter if it is uppercase to lowercase, and opoiste
String.prototype.toAlternatingCase = function () {
  return this.split('').map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
}

//compare your points with average number of points of your classmates
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
}

//   Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
function rentalCarCost(d) {
  if (d < 3) return d * 40
  if (d >= 3 && d < 7) return (d * 40) - 20
  if (d >= 7) return (d * 40) - 50
}


//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
  let result = ''
  for (let i = 0; i < x.length; i++) {
    result += x[i] < 5 ? x[i] = 0 : x[i] || x[i] >= 5 ? x[i] = 1 : x[i]
  }
  return result
}

//finding third angle of triangle
const otherAngle = (a, b) => 180 - (a + b)

///counting sheeps
//Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");
var countSheep = function (num) {
  let result = ''
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`
  }
  return result
}

///converting string to an array
function stringToArray(string) {
  return string.split(' ')
}
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
const simpleMultiplication = (number) => number % 2 === 0 ? number * 8 : number * 9


// Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
const doubleChar = (str) => str.split('').map(x => x + x).join('')

//sissors stone paper game 
const rps = (p1, p2) => {
  var map = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  };

  if (p1 == p2) {
    return 'Draw!';
  } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
  }
};

//correctPolishLetters
var polishLetters = {
  "ą": "a",
  "ć": "c",
  "ę": "e",
  "ł": "l",
  "ń": "n",
  "ó": "o",
  "ś": "s",
  "ź": "z",
  "ż": "z",
};

function correctPolishLetters(string) {
  return string.split('').map((c) => polishLetters[c] || c).join("");
}


// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000

function numberToPower(number, power) {
  var total = 1
  for (let i = 1; i <= power; i++) {
    total = total * number
  }
  return total
}

///how to make an array from numbers using ...new Array(n)
//.fill -> changes number all elements in an array , if there are two arguments(first is index, second is what we want to change with)
function numberToPower(number, power) {
  return [...new Array(power)].fill(number).reduce((a, b) => a * b, 1)
}

function numberToPower(number, power) {
  return Array(power).fill(number).reduce((res, n) => res * n, 1);
}


//   how to check if value exist in given array  //
function check(a, x) {
  return a.includes(x)
}

//how to check 
//   Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
function isDigit(s) {
  return s == parseFloat(s);
}

//add tow arrays and get sum of all integers
function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((a, b) => a + b)
}

// count letter in a string
const strCount = (str, letter) => str.split('').filter(c => c ===letter).length

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
function points(games) {
  let total = 0
  games.map(game=> { console.log(game[2])
   if (game[0]>game[2]) return total += 3
   if (game[0] === game[2]) return total +=1
   })
   return total
  }

  // get index of element in the array, otherwise "Not found"
  const find =(array, element)=> array.includes(element) ? array.indexOf(element) : "Not found"


  //remove every second element from the array
  function removeEveryOther(arr){
    for (var i = 1; i < arr.length;i++){
        arr.splice(i,1);
    }
    return arr;
  }

  