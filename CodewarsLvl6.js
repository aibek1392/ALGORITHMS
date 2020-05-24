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
multiplicationTable = function(size) {
  var result = [];
  for (var i = 0; i < size; i++) {
    result[i] = [];
    for(var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  
  return result
}