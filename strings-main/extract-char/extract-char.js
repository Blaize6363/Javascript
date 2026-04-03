"use strict";

const extractChar = (string, num) => {
    return string.substr(0, num);
}

console.log(extractChar("The quick brown fox jumps over the lazy dog", 4))