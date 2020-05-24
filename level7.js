
//get middle character in a string
const getMiddle = (s) => (s.length % 2 === 1) ? s.charAt(Math.floor(s.length / 2)) : s.slice(s.length / 2 - 1, s.length / 2 + 1)



// Given a positive integer n, calculate the following sum:
// n + n/2 + n/4 + n/8 + ...

function halvingSum(n) {
    var sum = 0;
    while (n > 0) {
        sum += n;
        n = Math.floor(n / 2);
    }
    return sum;
}

//   sum of only EVEN integers of the array
function sumEvenNumbers(input) {
    return input.filter(number => number % 2 === 0).reduce((a, b) => a + b)
}


//    Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
function divisors(integer) {
    var divs = [];

    for (var i = 2; i < integer; i++) {
        if (integer % i === 0) {
            divs.push(i);
        }
    }
    return divs.length ? divs : integer + ' is prime';
};




// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
    return s.split('').map((w, i) => (w.toUpperCase() + w.toLowerCase().repeat(i))).join('-')
}

//how to get square of each digit
// (9119)--> 811181
function squareDigits(num) {
    return parseInt(num.toString().split('').map(n => n ** 2).join(''))
}

//"4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
function highAndLow(numbers) {
    let sorted = numbers.split(' ').sort((a, b) => b - a)
    return sorted[0] + ' ' + sorted[sorted.length - 1]
}

///Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
//Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);

function findShort(s) {
    let lengthOfWords = s.split(' ').map(w => w.length)
    return Math.min(...lengthOfWords)
}


//   Test.assertEquals(XO("xxxm"),false);
// Test.assertEquals(XO("Oo"),false);
// Test.assertEquals(XO("ooom"),false);
const XO = (str) => str.toLowerCase().split('x').length === str.toLowerCase().split('o').length



// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

//s='FUFFDDFDUDFUFUF'
// U=UP
// F=FORWARD
// D=DOWN
// You need count how many valleys you will pass.
// Start is always from zero level.
// Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.
// One passed valley is equal one entry and one exit of a valley.

function countingValleys(s) {
    //here we go again
    let level = 0;
    let valleys = 0;
    s.split("").forEach(el => {
        if (level === -1 && el === "U") valleys++;
        if (el === "D") level -= 1;
        if (el === "U") level += 1;
    })
    return valleys;
}

//   Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers , OtherWise return false .
//   * consecutiveDucks(9)  ==>  return (true)  //  9 , could be expressed as a sum of ( 2 + 3 + 4 ) or ( 4 + 5 ) . 
// * consecutiveDucks(64)  ==>  return (false)
// * consecutiveDucks(42)  ==>  return (true) //  42 , could be expressed as a sum of ( 9 + 10 + 11 + 12 )  .

function consecutiveDucks(num) {
    const keeper = [0, 1]
    for (let i = 2; i < (num / 2 + 1); i++) {
        const sumOfKeeper = keeper.reduce((x, val) => {
            return x + val
        }, 0)
        if ((num - sumOfKeeper) % keeper.length === 0) {
            return true
        }
        keeper.push(i)
    }
    return false
}


// Implement a function that returns the minimal and the maximal value of a list (in this order).
function getMinMax(arr){
    let result = []
   let max = Math.max(...arr)
   let min = Math.min(...arr)
   return [...result, min, max]
  };

  //Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");
// Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
// Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is");
// Because you will overwrite prior replaces. Anything that is lowercase is the new (already replaced/processed) value, and the caps values still need replacing/processing.


  const DNAStrand = (dna) => dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase()



//creat function accum that does this:
//   accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s) {
    let result = ''
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < i + 1; j++) {
        if (j == 0) {
          result += s[i].toUpperCase()
        } else {
          result += s[i].toLowerCase();
        }
      }
      if (i !== s.length - 1) {
        result += '-'
      }
    }
    return result
  }

  //"riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
  var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + '!'
  };