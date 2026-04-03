"use strict";

let num = +prompt("Enter Number")
function checkIsArmstrong(num) {
    let sum = 0;
    const numberString = num.toString();
    const numberOfDigits = numberString.length;
    for (let i = 0; i < numberOfDigits; i++) {
        sum += Math.pow(Number(numberString[i]), numberOfDigits);
    }
    let result;
    if (sum === num) {
        result = "The entered number is an Armstrong number";
    } else {
        result = "The entered number is NOT an Armstrong number";
    }
    return result;
}

document.getElementById("check-is-armstrong").innerHTML = checkIsArmstrong(num);