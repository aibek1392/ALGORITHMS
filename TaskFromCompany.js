import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


const acctData = [
  {
    "acctNum": "AAA - 1234",
    "user": "Alice"
  },
  {
    "acctNum": "AAA - 5231",
    "user": "Bob"
  },
  {
    "acctNum": "AAA - 9921",
    "user": "Alice"
  },
  {
    "acctNum": "AAA - 8191",
    "user": "Alice"
  }
];

const balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};

/*
Parameters:
- user
- sortBy (accepts "acctNum" or "balance")
- sortDirection (accepts "asc" or "desc"; default to asc)

Test Cases: 
a) filtered by Bob
b) filtered by Charlie
c) sorted by acctNum
d) filtered by Alice; sorted by balance ascending

Assumptions: variables acctData, and balance are available in the function's outer scope
*/

function myFunction(currentUser, sortBy = "acctNum", sortDirection = "asc") {

  // Helper variable which combines balance into acctData
  const completeAccountData = acctData;
  for (const account of completeAccountData) {
    for (const acctNum in balance) {
      if (acctNum === account.acctNum) {
        account["balanceAmt"] = balance[acctNum]
      }
    }
  }


  // pre sort completeAccountData based on sortBy === "acctNum" or "balance" && sortDirection = "asc" or "desc"
  if (sortBy === "acctNum") {
    if (sortDirection === "asc") {
      completeAccountData.sort((acct1, acct2) => acct1.acctNum.replace(/-|\s/g, "").localeCompare(acct2.acctNum.replace(/-|\s/g, "")))
    } else if (sortDirection === "desc") {
      completeAccountData.sort((acct1, acct2) => acct2.acctNum.replace(/-|\s/g, "").localeCompare(acct1.acctNum.replace(/-|\s/g, "")))
    }
  }

  if (sortBy === "balance") {
    if (sortDirection === "asc") {
      completeAccountData.sort((acct1, acct2) => acct1.balanceAmt - acct2.balanceAmt)
    } else if (sortDirection === "desc") {
      completeAccountData.sort((acct1, acct2) => acct2.balanceAmt - acct1.balanceAmt)
    }
  }

  console.log(completeAccountData)

  const accountNumbers = [];
  completeAccountData.map(account => {
    if (account.user === currentUser) {
      accountNumbers.push(account.acctNum);
    }
  })
  console.log(accountNumbers)

  // return only an array of account numbers
  return accountNumbers
}


console.log(myFunction("Alice", "balance", "asc"))


//////// write a function that return true if order of brackets,curly braces or paranteces are valid, otherwise return false

function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

//
// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }


 ///The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

 function tickets(peopleInLine){
  // ...
  var twentyfive = 0;
  var fifty = 0;
  for (var i=0; i<peopleInLine.length; i++) {
    if (peopleInLine[i] === 25)
      twentyfive++;
    else if (peopleInLine[i] ===50) {
      twentyfive--;
      fifty++;
      }
    else {
      if (fifty > 0) {
        fifty--;
        twentyfive--;
      }
      else
        twentyfive -= 3;
    }
    if (twentyfive < 0)
      return "NO";
  }
      return "YES";
}