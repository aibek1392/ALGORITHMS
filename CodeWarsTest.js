///how to get oddNumber and evennumber
function findOutlier(integers) {
    let oddNum = []
    let evenNum = []
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] / 2 % 1 === 0) {
            evenNum.push(integers[i])
        } else {
            oddNum.push(integers[i])
        }
    }
    if (evenNum.length > 1) {
        return oddNum[0]
    } else if (oddNum.length > 1) {
        return evenNum[0]
    }
}

/// how to gde middle character in a string.
function getMiddle(string) {
    var middleIndex = string.length / 2;
    if (string.length % 2 == 0) {
        return string.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return string.charAt(middleIndex);
    }
}


function reverseInParens(text) {
    let stack = [], nxt = 1, d = {}
    for (let symbol of text) {
        if (symbol == ')') {
            let opening = stack.lastIndexOf('(')
            stack.push(...[nxt].concat(stack.splice(opening).slice(1).reverse()).concat([nxt++]))
        }
        else stack.push(symbol)
    }

    for (let i = 0; i < stack.length; i++) {
        if (+stack[i]) {
            if (d[stack[i]]) stack[i] = ')'
            else d[stack[i]] = 1, stack[i] = '('
        }
    }
    return stack.join``
}

