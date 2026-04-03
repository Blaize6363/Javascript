"use strict";

const num1 = +prompt("Input 1st number");
const num2 = +prompt("Input 2nd number");

const getGcd = (a, b) => {
    let result;
    while (a !== b) {
        if (a > b) {
            result = (a = a - b);
        } else if (b > a) {
            result = (b = b - a);
        } else {
            result = 1;
        }
    }
    return result;
}

console.log(getGcd(num1, num2));