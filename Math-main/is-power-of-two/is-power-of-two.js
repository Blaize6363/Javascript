"use strict";

const num = +prompt("Enter Number")

function isPowerOfTwo(num) {
    let calc = Math.log(num) / Math.log(2);
    let result;
    if (Number.isInteger(calc)) {
        result = "true";
    }
    else {
        result = "false";
    }
    return result;
}

document.getElementById("is-power-of-two").innerHTML = isPowerOfTwo(num);