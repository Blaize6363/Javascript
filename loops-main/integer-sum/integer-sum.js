"use strict";

const leftSummand = +prompt("Input 1st number");
const rightSummand = +prompt("Input 2nd number");

const sumOfRange = (leftSummand, rightSummand) => {
    let result = 0;
    for (let i = leftSummand; i <= rightSummand; i++) {
        result += i;
    }
    return result;
}

console.log(sumOfRange(leftSummand, rightSummand));