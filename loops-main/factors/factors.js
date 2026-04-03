"use strict";

let num = +prompt("Input Number");  

const getFactors = (num) => {
    let factors = [];
        for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
        factors.push(i);
        }
    }
    return factors;
}

console.log("Factors are: " + getFactors(num));