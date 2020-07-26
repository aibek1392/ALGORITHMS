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


//remove number game 
function removeNumberGame(n, d) {
  if (d == 0) return 0;
  if (n < 10) return 0;

  let result = 0;
  for (let i = 0; i < n.length; i++) {
    let turn = n.split('').filter((elem, index) => index != i).join('');
    if (+turn == 0) continue;
    if (turn % d == 0) {
      let depth = removeNumberGame(turn, d - 1) + 1;
      if (depth > result) result = depth;
    }
  }
  return result;
}


//unique number sequence
function findNum(n) {
  const result = [];
  let count = 0;
  while (result.length !== n + 1) {
    if (!result.includes(count) && !includes(result[result.length - 1], count)) {
      result.push(count);
      count = 0;
    }
    count += 1;
  }
  return result[n];
}

function includes(a, b) {
  const arrA = String(a).split('');
  const arrB = String(b).split('');
  for (let i = 0; i < arrB.length; i += 1) {
    if (arrA.includes(arrB[i])) return true;
  }
  return false;
}


////
function verticalHistogramOf(s) {
  let cnt = [...s.replace(/[^A-Z]/g, '')].reduce((o, c) => (o[c] = o[c] + 1 || 1, o), {});
  let k = Object.keys(cnt).sort();
  let n = Math.max(...Object.values(cnt));
  const buildLine = i => (i == n ? k : k.map(x => cnt[x] >= n - i ? '*' : ' ')).join(' ').replace(/ +$/, '');
  return Array.from({ length: n + 1 }, (_, i) => buildLine(i)).join('\n');
}



//Buddy pairs solution 
const s = (n) => {
  let res = 0
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) i === n / i ? res += i : res += i + n / i
  }
  return res
}

function buddy(start, limit) {
  for (let i = start; i <= limit; i++) {
    let si = s(i)
    if (i < si && i === s(si)) return [i, si]
  }
  return "Nothing"
}



//Factorial decomposition
function decomp(n) {
  let r = {}
  for (let nb = 2; nb <= n; nb++) {
    let m = nb
    for (var mb = 2; mb <= m; mb++){
      while(m % mb === 0) {
        m /= mb
        r[mb] = (r[mb] || 0) + 1
      }
    }
    if (m > 1) 
      r[m] = (r[m] || 0) + 1
  }
  return Object.keys(r).map(e => r[e] > 1 ? e +"^" + r[e] : e).join` * `
}