"use strict";

const stringToArray = (string) => {
    const result = string.replaceAll(',', '');
    return result.split(' ');
}

console.log(stringToArray("Water, Fire, Earth, Air"))