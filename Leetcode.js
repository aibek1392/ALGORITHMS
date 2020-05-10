// Given a 32-bit signed integer, reverse digits of an integer.
// Example 1:
// Input: 123
// Output: 321
// Example 2:
// Input: -123
// Output: -321
// Example 3:
// Input: 120
// Output: 21
var reverse = function (x) {
  let answer = parseInt(x.toString().split('').reverse().join('').toString());
  if (x < 0) { answer *= -1; }
  if (answer < (Math.pow(2, 31) * -1) || answer > Math.pow(2, 31) - 1) return 0;
  return answer;
};

//   Given nums = [2, 7, 11, 15], target = 9,
const twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i]
    }
    comp[target - nums[i]] = i
  }
};


///palindrome check if number reads same backwards
var isPalindrome = function (x) {
  if (x < 0) return false;
  const xS = x.toString();
  if (xS.length === 1) return true;
  let i = xS.length - 1;
  let k = 0;
  while (i > k) {
    if (xS[i] !== xS[k]) return false;
    i--;
    k++;
  }
  return true;
};


///RomanInput: "III"  Output: 3  | Input: "IX"  Output: 9


var romanToInt = function (s) {
  var obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  var sum = 0;
  for (var i = 0; i < s.length; i++) {
    if ((s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) || (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) || (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M'))) {
      sum += (obj[s[i + 1]] - obj[s[i]]);
      i++;
    }
    else {
      sum += obj[s[i]];

    }

  }
  return sum;
};



//Remove Duplicates from Sorted Array
// Given nums = [0,0,1,1,1,2,2,3,3,4],
// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
// It doesn't matter what values are set beyond the returned length.
var removeDuplicates = function(nums) {
  let p1 = 0,lastVal =nums[0] -1;
  for (let i = 0; i < nums.length; i++) {
   if (nums[i] != lastVal) {
    nums[p1] = nums[i];
    lastVal = nums[i]
    p1 +=1;
  }
 }
nums.length = p1;
console.log(nums);
};

let arr = [1, 1, 2]
removeDuplicates(arr);