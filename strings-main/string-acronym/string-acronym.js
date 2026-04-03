"use strict";

const getAcronym = (string) => {
    let result = string.match(/\b([A-Z])/g).join('');
    return result;
}

console.log(getAcronym("Level Of Violenc E"));