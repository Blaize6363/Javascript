"use strict";

let num = prompt("Input Number");

function getNumToString(num) {
    let result = num.toString();
    return result;
}

let NumToString = getNumToString(num);

function getStrLength(NumToString){
    let result = NumToString.length;
    return result;
}

document.getElementById("count-digit-integer").innerHTML = getStrLength(NumToString);