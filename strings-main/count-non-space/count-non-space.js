"use strict";

const countNonSpaces = (string) => {
    return string.replaceAll(' ', '').length;
}

console.log(countNonSpaces("e e e"));