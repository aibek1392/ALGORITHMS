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
var reverse = function(x) {
    let answer = parseInt(x.toString().split('').reverse().join('').toString());
    if (x < 0) { answer *= -1; }
    if (answer < (Math.pow(2, 31) * -1) || answer > Math.pow(2, 31) - 1) return 0;
    return answer;
  };

//   Given nums = [2, 7, 11, 15], target = 9,
const twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
};

