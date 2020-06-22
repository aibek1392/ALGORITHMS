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


function rotateCode(a) {
    return Object.keys(a[0]).map(c => a.map(r => r[c])).map(i => i.reverse())
  }
  
  function code(s) {
    if (s.length == 0) return ''
    let l = s.length
    let n = Math.ceil(Math.sqrt(s.length))
    
    s += String.fromCharCode(11).repeat(n*n - l)
    
    let newS = s[0]
    for (let i = 1; i < s.length; i++) {
      if (i%n == 0) {
        newS += '\n'
      }
      newS += s[i]
    }
    return rotateCode(newS.split('\n')).map(row => row.join('')).join('\n')
  }
  
  function rotateDecode(a) {
    a = a.map(i => i.split('').reverse().join(''))
    return Object.keys(a[0]).map(c => a.map(r => r[c]))
  }
  
  function decode(s) {
    if (s.length == 0) return ''
    s = rotateDecode(s.split('\n')).map(row => row.join('')).join('\n')
    let newS = s.replace(/[\n\v]/g, '')
    return newS
  }
