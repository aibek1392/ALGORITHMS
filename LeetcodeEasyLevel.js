var isSymmetric = function (root) {
    // a tree with no children is symmetric.
    if (!root) return true;

    function checkSymmetry(leftTree, rightTree) {
        // if both subtrees are null, they are symetric.
        if (!leftTree && !rightTree) return true;

        // if both subtrees are not null, 
        // check their current values and the symmetry of their children
        if (leftTree && rightTree) {
            return (
                leftTree.val === rightTree.val &&
                checkSymmetry(leftTree.left, rightTree.right) &&
                checkSymmetry(leftTree.right, rightTree.left)
            );
        }

        // at this point, one of the sub trees is null 
        //which is not symmetric.
        return false;
    }

    return checkSymmetry(root.left, root.right);
};


//Reverse Bits

function modulo(a, b) {
    return a - Math.floor(a / b) * b;
}
function ToUint32(x) {
    return modulo(parseInt(x), Math.pow(2, 32));
}
function revereBits(A) {
    A = A.toString(2);
    while (A.length < 31) {
        A = "0" + A;
    }
    var reverse = 0;
    var NO_OF_BITS = A.length;
    for (var i = NO_OF_BITS; i >= 1; i--) {
        var temp = (parseInt(A, 2) & (1 << i - 1));
        if (temp) {
            reverse |= 1 << (NO_OF_BITS - i);

        }
    }
    if (reverse << 1 < 0) reverse = ToUint32(reverse << 1);
    return reverse;

}




//Linear Scan solution
var searchRange = function (nums, target) {
    let left = -1, right = -1;

    // Find the first position of the target from the left
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            left = i;
            break;
        }
    }
    // If last for loop reaches end and not found a target, return error [-1,-1]
    if (left === -1) return [-1, -1];

    // Find the last position of the target from the right
    //
    // Condition i >= left takes care of cases like:
    //  ex. let nums = [1], target = 1;             // Output: [0, 0]
    //  ex. let nums = [1,3], target = 1;           // Output: [0, 0]
    //
    for (let i = nums.length - 1; i >= left; i--) {
        if (nums[i] === target) {
            right = i;
            break;
        }
    }

    return [left, right];
};



//Spiral Matrix solution
var spiralTraversal = function (matriks) {
    var result = [];
    var goAround = function (matrix) {
        var len = matrix[0].length;
        if (len === 1) {
            result.concat(matrix[0]);
            return result;
        }
        if (len === 2) {
            result.concat(matrix[0]);
            result.push(matrix[1][1], matrix[1][0]);
            return result;
        }
        if (len > 2) {
            // right
            result.concat(matrix[0]);
            // down
            for (var j = 1; j < matrix.length - 1; j++) {
                result.push(matrix[j][matrix.length - 1]);
            }
            // left
            for (var l = matrix.length - 2; l > 0; l--) {
                result.push(matrix[matrix.length - 1][l]);
            }
            // up
            for (var k = matrix.length - 2; k > 0; k--) {
                result.push(matrix[k][0]);
            }
        }
        // reset matrix for next loop
        var temp = matrix.slice();
        temp.shift();
        temp.pop();
        for (var i = 0; i < temp.length - 1; i++) {
            temp[i] = temp[i].slice(1, -1);
        }
        goAround(temp);
    };
    goAround(matriks);
};