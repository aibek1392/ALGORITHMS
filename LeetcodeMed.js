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


