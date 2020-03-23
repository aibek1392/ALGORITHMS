function sameFrequency(first, second){
    let num1 = first.toString();
    let num2 = second.toString();
    if(num1.length !== num2.length) return false
    let count1 = {}
    let count2 = {}
      for(let i = 0; i<num1.length;i++){
        count1[num1[i]] = (count1[num1[i]] || 0) + 1
      }
      for(let j = 0; j<num2.length; j++){
        count2[num2[j]] = (count2[num2[j]] || 0) + 1
      }
      for(let key in count1){
        if(count1[key] !== count2[key]) return false
      }
    return true;
    }
    sameFrequency(212,122)//true || false

    /////////////////////////////////-------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    function averagePair(arr, num){
        let start = 0
        let end = arr.length-1;
        while(start < end){
          let avg = (arr[start]+arr[end]) / 2 
          if(avg === num) return true;
          else if(avg < num) start++
          else end--
        }
        return false;
      }
      averagePair([1,2,3],2.5) //true


      ////////////-------------\\\\\\\\\\\\\\\\\\\


      function maxSubarraySum(arr, num){
        let maxSum = 0;
        let tempSum = 0;
        if(arr.length < num) return null;
        for( let i = 0; i < num; i++){
          maxSum += arr[i]
        }
        tempSum = maxSum;
        for(let i = num; i < arr.length; i++){
        console.log(maxSum,tempSum)
          tempSum = tempSum - arr[i-num] + arr[i];
          maxSum = Math.max(maxSum, tempSum)
        }
        console.log(maxSum)
        return maxSum
      }
      maxSubarraySum([100,200,300,400], 3) //return 900




      /////////////////-------------\\\\\\\\\\\\\\\\\\\\\
      let countries = ["USA", "China", "Japan", "Korea", "Taiwan", "USA", "Japan", "Korea", "Korea", "Korea", "Japan", "Taiwan", "USA", "Taiwan", "USA", "Korea", "Japan", "USA", "Korea", "Japan", "Taiwan", "USA"]
function leastAppears(arr){
  let hash = {}
  let country
  for (country of arr){
    if (hash[country]){
      hash[country] += 1
    } else {
      hash[country] = 1
    }
  }
  console.log(hash)
  let min = Math.min(...Object.values(hash))
  for (country of Object.keys(hash)){
console.log(country)
    if (hash[country] === min){
      return country
    }
  }
}
console.log(leastAppears(countries)) //China


/////////////////-----------------\\\\\\\\\\\\\\\\\\

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    return vowelsCount;
  }//returning number of bowels

  ///////////////--------------------\\\\\\\\\\\\\\\\\\\

  /*
  Given that you have an already valid JSON string where the keys are
  all kebab-case, write a function that takes in this JSON string and
  returns a JSON string where all the keys are transformed to be camelCase.
*/
const exampleJson = 
`{
  "first-name": "Jeff",
  "last-name": "Green",
  "address": 
  {
    "city-and-state": "Boston, MA",
    "zip": "12345-1234"
  },
  "pets": [
    {
      "name": "Bruno",
      "pet-gender": "male"
    },
    {
      "name": "Lana",
      "pet-gender": "female"
    }
  ]
}`
function transformKebabCaseToCamelCase(data) 
{
  const obj = JSON.parse(data)
  let originalKeys = Object.keys(obj)
  let onlyKeys = Object.keys(obj)
  for(let i = 0; i < onlyKeys.length; i++)
  {
	  if(onlyKeys[i].includes("-"))
	  {
		  let split = onlyKeys[i].split('-')
      for(let j = 1; j < split.length; j++)
      {
        split[j] = split[j].charAt(0).toUpperCase() + split[j].slice(1)
      }
      onlyKeys[i] = split.join('')
	  }
  }
  console.log(onlyKeys)
  let result = {}
  for(let i = 0; i < onlyKeys.length; i++)
  {
    result[onlyKeys[i]] = obj[originalKeys[i]]
  }
  JSON.stringify(result)
  console.log(result)
  return result
}
console.log(transformKebabCaseToCamelCase(exampleJson))



/// function given a string your job is if the string is even return 1 letter in the middle upperCASe, if the wor
//if the word is odd return 1 letter upperCase
function getMiddle(string) {
  var middleIndex = string.length / 2;
  if (string.length % 2 == 0) {
    return string.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return string.charAt(middleIndex);
  }
}
console.log("test")//es
console.log("tesqt")//s


//// revers
function isPalindrome(s)
{
    if(s.length <= 1)
    {
        return true
    }
    s = s.split('')
    return s.pop() === s.shift() && isPalindrome(s.join(''))
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

//flatten solution
function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}

///capitalize  the first letter of each string in array
function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}

// capitalize each word
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}
