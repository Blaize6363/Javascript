"use strict";

const num = +prompt("Enter Number");

const fizzbuzz = (num) => {
    let result = "";
    for (let i = 1; i <= num; i++) {
        if (i%3 !== 0 && i%5 !== 0) {
            result += ".";
        } else if (i%3 == 0 && i%5 == 0) {
            result += "fizzbuzz";
        } else if (i%3 == 0) {
            result += "fizz";
        } else if (i%5 == 0){
            result += "buzz";
        }
    }
    return result;
}

console.log(fizzbuzz(num));