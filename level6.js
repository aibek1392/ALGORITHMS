function solution(number) {
    let sum = 0
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}

// count of positive numbers and sum of negative numbers, also check validation
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0 ) return []//validation
    let basket = []
    let negativeSum = []
    let total = []
    let result = 0
    basket.push(...input.filter(number => number > 0))
    negativeSum.push(...input.filter(number => number < 0))
    for (let i = 0; i < negativeSum.length; i++) {
        result += negativeSum[i]
    }
    total.push(basket.length)
    total.push(result)

    return total
}

// monkey counts n times
const monkeyCount = (n) => {
    var monkeys = [];
    for(var i=1; i<n+1; i++){
      monkeys.push(i);
    }
    return monkeys;
   }

  //Write a function that will take in any array and reverse it.

   function reverse(arr) {
    for(let i = 0; i < arr.length / 2; i++) {
      let temp = arr[i];
      arr[i] = arr[arr.length - i - 1];
      arr[arr.length - i - 1] = temp;
    }
    return arr;
 }



//  partner.response("words") ==> "positive"
// partner.response("acts")  ==> "neutral"
// partner.response("words") ==> "positive"
// partner.response("time")  ==> "neutral"
// partner.response("acts")  ==> "positive"    # false positive
// partner.response("gifts") ==> "neutral"
// partner.response("words") ==> "neutral" 
 function loveLanguage(partner, weeks) {
    let attempts = 0;
    const counts = {};
  
    while (attempts < weeks) {
      LOVE_LANGUAGES.forEach(language => {
        if (partner.response(language) === 'positive') {
          counts[language] = (counts[language] + 1) | 1;
        }
      });
      attempts++;
    }
  
    let res;
    let max = 0;
  
    for (language in counts) {
      if (counts[language] > max) {
        res = language;
        max = counts[language];
      }
    }
    return res;
  }

   
