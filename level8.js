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
