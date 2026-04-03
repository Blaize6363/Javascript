"use strict";

const num= +prompt("Input Number");
const dec= +prompt("Input Decimal Point");

function toDecimals1(num, dec) {
    let result = num.toFixed(dec);
    return result;
}

const result = toDecimals1(num, dec);

document.getElementById("to-decimals").innerHTML = result;