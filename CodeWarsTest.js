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

