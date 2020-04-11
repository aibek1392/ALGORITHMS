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

   


   
