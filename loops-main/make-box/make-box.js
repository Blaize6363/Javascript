"use strict";

const width = +prompt("Input Width");
const height = +prompt("Input Height");

const makeBox = (width, height) => {
    let result = "";
    result += '*'.repeat(width) + "\n";
    for (let i = height - 2; i > 0; i--) {
        if (i > 0) {
            result += "*" + ' '.repeat(width - 2) + "*" + "\n";
        }
    }
    result += '*'.repeat(width);
    return result;
}

console.log(makeBox(width, height));