"use strict";

const stringDigits = (string) => {
    let result;
    let regex = /\d/;
    result = regex.test(string) ? Number(string.match(/\d+/)) : "No numbers";
    return result;
}

console.log(stringDigits("e33e"));