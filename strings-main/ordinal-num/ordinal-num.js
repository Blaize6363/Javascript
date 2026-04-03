"use strict";

const ordinalFormat = (num) => {
    let result;
    let lastDigit = num % 10;
    if (lastDigit === 1) {
        result = num + "st";
    } else if (lastDigit === 2) {
        result = num + "nd";
    } else if (lastDigit === 3) {
        result = num + "rd";
    } else if (lastDigit > 3) {
        result = num + "th";
    } 
    if (num === 11) {
        result = "11th";
    } else if (num === 12) {
        result = "12th";
    }
    return result;
}

console.log(ordinalFormat(55555553))