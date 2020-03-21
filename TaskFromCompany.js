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


