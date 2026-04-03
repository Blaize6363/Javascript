"use strict";

const num = +prompt("Input Number");

const makeSquare = (num) => {
    let result = "";
    for (let i = num; i > 0; i--) {
        if (i > 0) {
            result += '*'.repeat(num) + "\n";
        }
    }
    return result;
}

console.log(makeSquare(num));