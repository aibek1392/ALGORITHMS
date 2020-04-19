
//get middle character in a string
const getMiddle =(s)=> (s.length % 2 === 1) ? s.charAt(Math.floor(s.length/2)) : s.slice(s.length/2 - 1,s.length/2 + 1) 

  

// Given a positive integer n, calculate the following sum:
// n + n/2 + n/4 + n/8 + ...

function halvingSum(n) {
    var sum = 0;
    while(n > 0) {
      sum += n;
      n = Math.floor(n / 2);
    }
    return sum;
  }

//   sum of only EVEN integers of the array
function sumEvenNumbers(input) {
    return input.filter(number=> number% 2 ===0).reduce((a,b)=>a+b)
   }


//    Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
   function divisors(integer) {
    var divs = [];
    
    for(var i = 2; i < integer; i++) {
      if(integer % i === 0) {
        divs.push(i);
      }
    }
    return divs.length ? divs : integer + ' is prime';
  };

  