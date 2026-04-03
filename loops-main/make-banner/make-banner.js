"use strict";

const text = "Sigma Rizz Ohio Skibiddi";

const makeBanner = (text) => {
    let result = "";
    result += '*'.repeat(text.length + 4) + "\n";
    result += '* ' + text + ' *' + "\n";
    result += '*'.repeat(text.length + 4) + "\n";
    return result;
}

console.log(makeBanner(text));