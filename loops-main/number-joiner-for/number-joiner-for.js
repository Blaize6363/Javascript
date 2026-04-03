"use strict";

const num1 = 1;
const num2 = 10;

const numberJoinerFor = (num1, num2) => {
    let result = "";
    for (let i = num1; i <= num2; i++) {
            result += i + "_";
    }
    return result.slice(0, -1);
}

console.log(numberJoinerFor(num1, num2));