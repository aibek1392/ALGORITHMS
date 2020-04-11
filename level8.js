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

