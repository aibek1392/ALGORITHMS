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


function getMiddle(s){
  return (s.length % 2 === 1) ? s.charAt(Math.floor(s.length/2)) : s.slice(s.length/2 - 1,s.length/2 + 1) 
}



//Test.assertSimilar(countBy(1,5), [1,2,3,4,5], "Array does not match")
// Test.assertSimilar(countBy(2,5), [2,4,6,8,10], "Array does not match")
function countBy(x, n) {
    var z = [];
    for(let i = 1; i <= n; i++){
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
    return yourPoints > classPoints.reduce((a,b) => a+b,0) / classPoints.length
  }

//   Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
function rentalCarCost(d) {
    if(d < 3) return d * 40
    if(d >= 3 && d < 7) return (d * 40) - 20
    if(d >= 7) return (d * 40) - 50
  }