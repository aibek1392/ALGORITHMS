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