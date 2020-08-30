var maxArea = function (height) {
    const { length } = height;
    let i = 0;
    let j = length - 1;

    let max = 0;

    while (i < j) {
        const x = j - i;
        const y = height[height[i] < height[j] ? i++ : j--];

        const res = x * y;

        if (res > max) max = res;
    }

    return max;
};



// Letter Combinations of a Phone Number

var letterCombinations = function (digits) {
    if (digits.length === 0) return []
    else if (digits.length === 1) return map(digits[0])

    prev = map(digits[0])
    // loop on all tree levels
    for (let i = 1; i < digits.length; i++) {
        next = []
        currDigits = map(digits[i])
        // loop on previous level
        for (let j = 0; j < prev.length; j++) {
            // loop on current level
            for (let k = 0; k < currDigits.length; k++) {
                next.push(prev[j] + currDigits[k])
            }
        }

        prev = next
    }
    return prev
};

function map(d) {
    return {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }[d]
}


// RiverSizes Solutution


// Sort by ROw
var convert = function (s, numRows) {

    var length = s.length;
    if (numRows == 1) return s;
    var cycleLen = numRows * 2 - 2;
    var aZig = [];
    for (var i = 0; i < numRows; i++) {
        for (var j = 0; j + i < length; j = j + cycleLen) {
            aZig.push(s.charAt(j + i));
            if (i != 0 && i != numRows - 1 && j + cycleLen - i < length) {
                aZig.push(s.charAt(j + cycleLen - i));
            }
        }
    }

    return aZig.join("");
};



//Group Anagram solution
var groupAnagrams = function (strs) {
    let map = new Map();
    for (let str of strs) {
        const s = uniform(str);
        let l = map.get(s) || [];
        l.push(str);
        map.set(s, l);
    }
    return Array.from(map.values());
};

var uniform = function (str) {
    return str
        .split("")
        .sort()
        .join("");
};




///////
var levelOrder = function (root) {
    if (!root) return [];

    const res = [];
    const q = [];
    q.push(root);

    while (q.length) {
        const lvl = [];
        const size = q.length;

        for (let i = 0; i < size; i++) {
            const node = q.shift();
            lvl.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        res.push(lvl);
    }
    return res;
};


///Word frequency
function wordFreq(string) {
    var words = string.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function (w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
}




/////Letter Combinations of a Phone Number
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    var map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    var combinations = [''];

    // for as many times as there are digits (eg. '3721' => 4 times)
    for (var i = 0; i < digits.length; i++) {
        var digit = digits[i];
        var letters = map[digit];
        var tempArray = [];

        // skip if invalid digit
        if (letters === undefined) continue;

        // for as many times as there are letters (eg. 'abc' => 3 times)
        for (var j = 0; j < letters.length; j++) {
            var letterToAdd = letters[j];
            // for as many times as there are existing combinations
            // (eg. ['ad', 'bd', 'cd'] => 3 times)
            for (var k = 0; k < combinations.length; k++) {
                var combination = combinations[k];
                tempArray.push(combination + letterToAdd);
            }
        }
        combinations = tempArray;
    }
    return combinations;
};


console.log(letterCombinations('234'));

// threesum Solutuon using JavaScript
var threeSum = function (nums) {
    var target = 0;
    if (nums.length === 3) {
        if (nums[0] + nums[1] + nums[2] === 0) {
            return [[nums[0], nums[1], nums[2]]];
        }
    }

    var results = [];
    var hashMap = {};

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === target) {
                    if (!hashMap[nums[i] * nums[j] * nums[k]]) {
                        results.push([nums[i], nums[j], nums[k]]);
                        results[results.length - 1].sort();
                        hashMap[nums[i] * nums[j] * nums[k]] = true;
                        //console.log(hashMap);
                    }
                }

            }
        }
    }
    return results;
};


// fourSum solution
var fourSum = function (nums, target) {
    if (nums.length < 4) return [];

    var len = nums.length;
    var res = [];
    var l = 0;
    var r = 0;
    var sum = 0;

    nums.sort((a, b) => (a - b));

    for (var i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;

        for (var j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
            if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue;

            l = j + 1;
            r = len - 1;

            while (l < r) {
                sum = nums[i] + nums[j] + nums[l] + nums[r];

                if (sum < target) {
                    l++;
                } else if (sum > target) {
                    r--;
                } else {
                    res.push([nums[i], nums[j], nums[l], nums[r]]);
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--;
                    l++;
                    r--;
                }
            }
        }
    }

    return res;
};