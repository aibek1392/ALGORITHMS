
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