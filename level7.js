
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
function highAndLow(numbers){
    let sorted  = numbers.split(' ').sort((a,b)=> b-a )
    return sorted[0]+ ' ' + sorted[sorted.length-1]
  }

  ///Simple, given a string of words, return the length of the shortest word(s).
  // String will never be empty and you do not need to account for different data types.
  //Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);

  function findShort(s){
    let lengthOfWords =  s.split(' ').map(w=> w.length)
    return Math.min(...lengthOfWords)
  }


//   Test.assertEquals(XO("xxxm"),false);
// Test.assertEquals(XO("Oo"),false);
// Test.assertEquals(XO("ooom"),false);
const XO = (str) => str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
