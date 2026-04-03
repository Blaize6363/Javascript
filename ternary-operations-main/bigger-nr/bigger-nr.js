"use strict";

let num1 = prompt("Enter 1st Number");
let num2 = prompt("Enter 2nd Number");

function getBigNr(num1, num2) {
  let Max = num1 > num2 ? num1 : num2;
  return Max;
}

// Tas pats kodas, bet parašytas kitaip:
// function getBigNr(num1, num2){
// let BigNr = Math.max(num1, num2);
// return BigNr
// }

let result = getBigNr(num1, num2);

console.log(result);
document.getElementById("big-nr").innerHTML = result;
