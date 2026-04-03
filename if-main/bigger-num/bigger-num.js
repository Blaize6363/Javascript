"use strict";

const num1=+prompt("Input 1st Number");
const num2=+prompt("Input 2nd Number");
function compareNumbers(num1, num2) {
    let result;
    if (num1 > num2) {
        result = num1;
    } else {
        result = num2;
    }
    return result;
}

document.getElementById("bigger-num").innerHTML = compareNumbers(num1, num2);