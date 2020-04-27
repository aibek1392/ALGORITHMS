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
    if (input == null || input.length == 0) return []//validation
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
    for (var i = 1; i < n + 1; i++) {
        monkeys.push(i);
    }
    return monkeys;
}

//Write a function that will take in any array and reverse it.

function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
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




///Return your answer in the form (x, y) or ([x, y], depending on the language ), where x is the value of a**b, and y is the number of occurrences of a**b. By the way ** means ^ or power, so 2 ** 4 = 16. If you are given a number less than or equal to 4, that is not 1, return (1, -1), because there is an infinite number of values for it: 1**2, 1**3, 1**4, .... If you are given 1, return (0, -1).
//largestPower(90), [81, 2])
// largestPower(6), [4, 1])

function largestPower(n) {

    if (n === 1) {
        return [0, -1];
    }
    else if (n <= 4) {
        return [1, -1];
    }

    var root = Math.sqrt(n - 1);
    var array = [];

    for (var i = 2; i <= root; i++) {
        var j = Math.floor(Math.log(n) / Math.log(i));
        var curPower = i ** j;
        if (curPower < n) {
            array[curPower] ? array[curPower]++ : array[curPower] = 1;
        }
    }

    var keys = Object.keys(array);
    var lastKey = keys.pop();

    return [+lastKey, array[lastKey]];
}



// Given an D-dimension array, where each axis is of length N, your goal is to find the sum of every index in the array starting from 0.
// For Example if D=1 and N=10 then the answer would be 45 ([0,1,2,3,4,5,6,7,8,9]) If D=2 and N = 3 the answer is 18 which would be the sum of every number in the following:
//superSum(1, 1), 0)
// (superSum(4, 4), 1536)

function superSum(D, N) {
    if (D === 0) return 0;
    if (D === 1) return (N - 1) * N / 2;
    let t = N * superSum(D - 1, N);
    for (let i = 0; i < N; i++) {
        t += i * Math.pow(N, D - 1);
    }
    return t;
}