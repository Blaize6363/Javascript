"use strict";

const num1=+prompt("Input 1st Number");
const num2=+prompt("Input 2nd Number");
const num3=+prompt("Input 3rd Number");

function specifySign(num1, num2, num3) {
  let result;
  if (num1 * num2 * num3 > 0) {
    result="+";
  } else if (num1 * num2 * num3 < 0) {
    result="-";
  } else {
    result="0";
  }
  return result;
}

alert(specifySign(num1, num2, num3));