// Complete the solution so that it splits
//  the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
  let splittedStr = str.split('')
  let arrayOfOddNumbers = []
  for (let i = 0; i < splittedStr.length; i += 2) {
    if (splittedStr[i + 1] === undefined) {
      splittedStr[i + 1] = "_"
    }
    let stringA = splittedStr[i] + splittedStr[i + 1]
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
    [0, array.length * 2 + 1]
  );

  return arr[1] - arr[0]
}


// howManyPalindromes('aaa'); // 6 ('a', 'a', 'a', 'aa', 'aa', 'aaa')
//   howManyPalindromes('abccba'); // 9 ('a', 'a', 'b', 'b', 'c', 'c', 'cc', 'bccb', 'abccba')

function howManyPalindromes(s) {
  console.log(s)
  counts = s.length
  if (s[0].repeat(s.length) == s)
    return s.length * (s.length + 1) / 2
  for (i = 2; i <= s.length; i++)
    for (j = 0; j <= s.length - i; j++) {
      counts++
      for (k = 0; k < i / 2; k++)
        if (s[j + k] != s[j + i - k - 1]) {
          counts--
          break
        }
    }
  return counts
}

// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.
var isPP = function (n) {
  for (var m = 2; m <= Math.floor(Math.sqrt(n)); ++m) {
    var k = Math.round(Math.log(n) / Math.log(m))
    if (Math.pow(m, k) == n) return [m, k];
  }
  return null;
}

// Convert A Hex String To RGB
function hexStringToRGB(s) {
  return {
    "r": parseInt(s.slice(1, 3), 16),
    "g": parseInt(s.slice(3, 5), 16),
    "b": parseInt(s.slice(5, 7), 16)
  };
}

const GetFormat = elList => {
  return new Proxy((...a) => {
    return elList.reduce((html, el) => `<${el}>${html}</${el}>`, a.join``);
  }, {
    get: (_, el) => {
      return GetFormat([el, ...elList]);
    }
  });
};

const Format = GetFormat([]);