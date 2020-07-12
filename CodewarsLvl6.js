// [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
const josephus = (items, k) => {
  let count = 0, arr = [...items], acc = []
  while (arr.length) {
    count += k - 1
    if (count >= arr.length)
      count = count % arr.length
    acc.push(arr.splice(count, 1).pop())
  }
  return acc
}


//   Given a range of numbers ((a, b), both included), return the list of right truncatable Harshad numbers in this range.
//   Note: there are 500 random tests, with 0 <= a <= b <= Number.MAX_SAFE_INTEGER
//   30, 100      -->  [30, 36, 40, 42, 45, 48, 50, 54, 60, 63, 70, 72, 80, 81, 84, 90, 100]
function rthnBetween(a, b) {
  const queue = [['', 0]];
  const res = [];
  while (queue.length) {
    const current = queue[0][0];
    const currentSum = queue[0][1];
    queue.shift();
    for (let i = 0; i <= 9; i += 1) {
      const next = `${current}${i}`;
      if (next > b) continue;
      if (next % (currentSum + i) === 0) {
        queue.push([next, currentSum + i]);
        if (next >= a && next <= b && next.length > 1) {
          res.push(+next);
        }
      }
    }
  }
  return res;
}



//as a string (example: "2/3" in Ruby, Python, Clojure, JS, CS, Go)
// or as two strings (example: "2" "3" in Haskell, Java, CSharp, C++, Swift)
function decompose(n) {
  var [a, b] = isNaN(n) ? n.split('/').map(Number) : [Number(n), 1], res = [];
  while (a % 1) [a, b] = [a * 10, b * 10];
  if (a > b) {
    res.push(String(a / b >> 0));
    a %= b;
  }
  while (a > 0) {
    var dv = Math.ceil(b / a);
    res.push('1/' + dv);
    [a, b] = [a * dv - b, b * dv];
  }
  return res;
}


// find an odd number in array of integers
function findOdd(arr) {
  var result, num = 0;
  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
// Tower block is represented as *
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
      + "*".repeat((i * 2) + 1)
      + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

// Test.assertSimilar(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
multiplicationTable = function (size) {
  var result = [];
  for (var i = 0; i < size; i++) {
    result[i] = [];
    for (var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }

  return result
}


function meetingTime(Ta, Tb, r) {
  if (Ta * Tb == 0) return !Tb && Ta ? Math.abs(Ta).toFixed(2) : Math.abs(Tb).toFixed(2)

  let [speed1, speed2] = [Ta, Tb].map(t => Math.abs(2 * Math.PI * r / t))

  if (speed1 == speed2) return Math.abs(Ta).toFixed(2)

  let relSpeed = Ta * Tb > 0 ? Math.abs(speed1 - speed2) : Math.abs(speed1 + speed2)
  return (2 * Math.PI * r / relSpeed).toFixed(2)
}

function countAdjacentPairs(searchString) {
  this.count = 0;
  if (searchString != '') {
    this.arr = searchString.toLowerCase().split(" ");
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i + 1] === this.arr[i]) {
        this.count++;
        i++;
      }
    }
    return this.count;
  } else {
    return 0;
  }
}

// TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']
// search('ock') --> ['Rocky 1', 'Rocky 2']

function search(searchTerm) {
  var search = new RegExp(searchTerm, 'i');

  return TITLES.filter(function (title) {
    return search.test(title);
  });
}


// encode("mer", 6015)  -->  "6015ekx"
// m --> 12,   12 * 6015 % 26 = 4,    4  --> e
// e --> 4,     4 * 6015 % 26 = 10,   10 --> k
// r --> 17,   17 * 6015 % 26 = 23,   23 --> x
// So we get "ekx", hence the output is "6015ekx"

function decode(r) {
  let a = "abcdefghijklmnopqrstuvwxyz"
  let m = r.match(/(\d+)([a-z]+)/);
  let nb = parseInt(m[1]) % 26;
  let s = m[2];
  let dict = { 3: 9, 9: 3, 21: 5, 5: 21, 7: 15, 15: 7, 11: 19, 19: 11, 17: 23, 23: 17, 25: 25, 1: 1 }
  let n = dict[nb];
  if (n === undefined)
    return "Impossible to decode";
  var res = "";
  for (let c of s)
    res += a[(a.indexOf(c) * n) % 26];
  return res;
}


//disease Spread 
function epidemic(tm, n, s0, i0, b, a) {
  const dt = tm / n
  const iArr = new Array(n).fill()
  const sArr = new Array(n).fill()
  const rArr = new Array(n).fill()
  
  iArr[0] = i0
  sArr[0] = s0
  rArr[0] = 0
  
  iArr.slice(1).forEach((_, i) => {    
    sArr[i + 1] = sArr[i] - dt * b * sArr[i] * iArr[i]
    iArr[i + 1] = iArr[i] + dt * (b * sArr[i] * iArr[i] - a * iArr[i])
    rArr[i + 1] = rArr[i] + dt * iArr[i] * a
  })
  
  return Math.ceil(Math.max.apply(null, iArr))
}

//braking well
function dist(v, mu) {
  v = v * 10 / 36;
  return v + (v * v) / (2 * mu * 9.81);
}

function speed(d, mu) {
  let x = 2 * mu * 9.81;
  return (-x + Math.sqrt(x * x + 4 * d * x)) * 36 / 20;
}


//The Walker Solution
function solve(a, b, c, alpha, beta, gamma) {
  let firstAngle = 90 + beta - gamma;
  let secondAngle = 90 + alpha - beta;
  let eSide = Math.sqrt(
    b * b + c * c - 2 * b * c * Math.cos((firstAngle * Math.PI) / 180)
  );
  let secAngleOne =
    secondAngle -
    (Math.acos((eSide * eSide + b * b - c * c) / (2 * eSide * b)) * 180) /
      Math.PI;

  let x = Math.sqrt(
    eSide * eSide +
      a * a -
      2 * eSide * a * Math.cos((secAngleOne * Math.PI) / 180)
  );
  let tocAngle =
    alpha+(Math.acos((a * a + x * x - eSide * eSide) / (2 * a * x)) * 180) / Math.PI;

  let min = (tocAngle - Math.floor(tocAngle))*60;

  let sec = (min - Math.floor(min))*60; 

  return [Math.round(x), Math.floor(tocAngle), Math.floor(min), Math.floor(sec)]
}
