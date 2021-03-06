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
    for (var mb = 2; mb <= m; mb++) {
      while (m % mb === 0) {
        m /= mb
        r[mb] = (r[mb] || 0) + 1
      }
    }
    if (m > 1)
      r[m] = (r[m] || 0) + 1
  }
  return Object.keys(r).map(e => r[e] > 1 ? e + "^" + r[e] : e).join` * `
}


var twoSum = function (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (map[complement]) { // checking if it exists (if i saw it already)
      return [map[complement], i] // return both their indices
    } else {
      map[complement] = i
    }
  }
};


///
function penaltyShots(shots, score) {
  const diff = Math.abs(score[0] - score[1]);

  if (shots >= 5)
    return 2 - diff;
  else
    return 6 - shots - diff;
}
//
const solve = (n) => {
  const parts = n.toString().split('')
    .map(n => parseInt(n));
  const l = parts.length;
  const nSum = parts.reduce((a, c) => a + c, 0);
  return parts.reduce((a, c, i) => {
    const p = [
      ...parts.slice(0, i),
      parts[i] > 0 ? parts[i] - 1 : 0,
      ...new Array((l - 1) - i).fill(9)
    ];
    const sum = p.reduce((a1, c1) => a1 + c1, 0);
    const num = parseInt(p.join(''));
    return sum >= a.sum ?
      sum === a.sum && num < a.num ? a : { sum, num }
      : a;
  }, { sum: nSum, num: n }).num;
};

///
const solve = (m) => {
  let x;
  const a = m;
  const b = m * -2 - 1;
  const c = m;
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    x = (-b - Math.sqrt(discriminant)) / (2 * a);
  }
  return x;
};

//snake
const distribution=function(size) {
  let side = Math.ceil((2+2*size)**.5-1);
  side += (side+1)*(side+1>>1) < size
  let M = Array(side).fill(0);
  M = M.map(_=>M.slice());
  
  let dirs=[[1,0,side-1], [0,1,2], [-1,0,side-1], [0,1,2]];
  let x=0, y=0, i=0, n=side-1, dx=1, dy=0;
  while(size-->0){
    M[x][y]=1;
    if(!n) [dx,dy,n] = dirs[i=(++i)%4];
    x+=dx; y+=dy; n--;
  }
  return M;
}