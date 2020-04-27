// Complete the solution so that it splits
//  the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
    let splittedStr = str.split('')
    let arrayOfOddNumbers = []
    for(let i = 0; i < splittedStr.length; i+=2){
     if(splittedStr[i+1] ===undefined){
       splittedStr[i+1] = "_"
       }
     let stringA = splittedStr[i]+ splittedStr[i+1]
       arrayOfOddNumbers.push(stringA)
      }
     return arrayOfOddNumbers 
  }

//   console.log()--> 'ab', 'cd', 'ef', 'g_' 

//const abc = "abc";
// const pattern = regexContainsAll(abc);
// const str = "zzzaaacccbbbzzz";
// new RegExp(pattern).test(str);  // -> true


function regexContainsAll(str) {
  let chars = str.split('');
  let pattern = '';
  chars.forEach(c => {
    pattern += `(?=.*${c})`;
  });
  return pattern;
}


//FIND A MISSING NUMBER
// ([1,3,4,5,6,7,8]), 2);
// ([7,8,1,2,4,5,6]), 3);

// return the missing number!
function findNumber(array) {
  const arr = array.reduce(
    (acc, value, index) => [acc[0] + value, acc[1] + index],
    [0, array.length*2+1]
  );
  
  return arr[1] - arr[0]
}