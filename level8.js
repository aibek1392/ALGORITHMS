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
function maps(x){
    return x.map(x => x*2)
  }

