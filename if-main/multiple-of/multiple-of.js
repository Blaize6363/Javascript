"use strict";

const n = +prompt("Enter 1st Number");
const d = +prompt("Enter 2nd Number");

function isMultipleOf(n, d) {
    let result;
    if (Number.isInteger(d/n)) {
        result = d + " is a multiple of " + n;
    } else {
        result = d + " is NOT a multiple of " + n;
    }
    return result;
}

document.getElementById("multiple-of").innerHTML = isMultipleOf(n, d);