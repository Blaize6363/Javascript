"use strict";

let num1 = prompt("Input 1st number");
let num2 = prompt("Input 2nd number");
let num3 = prompt("Input 3rd number");
function getMax(num1, num2, num3) {
    let result = Math.max(num1, num2, num3);
    return result;
}
function getLow(num1, num2, num3) {
    let result = Math.min(num1, num2, num3);
    return result;
}

let MaxNr = getMax(num1, num2, num3);
let LowNr = getLow(num1, num2, num3);
document.getElementById("high-and-low").innerHTML = "Max number is " + MaxNr + ", min is " + LowNr;