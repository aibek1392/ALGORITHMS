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


    // Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

    function deleteNth(arr, x) {
        while (true) {
            for (var i = 0; i < arr.length; ++i) {
                var count = 0;
                for (var j = 0; j < arr.length; ++j) {
                    if (arr[i] === arr[j]) {
                        ++count;

                        if (count > x) {
                            arr.splice(j, 1);
                            break;
                        }
                    }
                }
                if (j !== arr.length) break;
            }
            if (i === arr.length) break;
        }
        return arr;
    }

  
//     encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"
function encryptThis(text) {
    let words = text.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      words[i] = changeWord(words[i]);
    }
    
    return words.join(' ')
  }
  
  function changeWord(word) {
    let symbols = word.split('');
    symbols[0] = symbols[0].charCodeAt(0);
    
    if (word.length < 3) {  
      return symbols.join('');
    } else {
      let second = symbols[1],
          last = symbols[symbols.length - 1];
          
      symbols[1] = last;
      symbols[symbols.length - 1] = second;
      return symbols.join('');
    }  
  }