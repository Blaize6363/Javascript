"use strict";

function isValidTriangle(a, b, c) {
    const allowed = [3, 4, 5];
    const allValid = allowed.includes(a) && allowed.includes(b) && allowed.includes(c);
    const unique = (new Set([a, b, c])).size === 3;
    let result; 
    if (allValid && unique) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

const sideLength1 = +prompt("Enter 1st Triangle side length");
const sideLength2 = +prompt("Enter 2nd Triangle side length");
const sideLength3 = +prompt("Enter 3rd Triangle side length");

// function isValidTriangle(sideLength1, sideLength2, sideLength3) {
//     let result;
//     if ((sideLength1 == 3, 4, 5) && (sideLength2 == 3, 4, 5) && (sideLength3 == 3, 4, 5)) {
//         result = "true";
//     } else if (sideLength1 == sideLength2){
//         result = "false"
//     } else if (sideLength3 == sideLength1) {
//         result = "false"
//     } else if (sideLength2 == sideLength3){
//         result = "false"
//     }
//     else {
//         result = "false";
//     }
//     return result;
// }

document.getElementById("is-valid-triangle").innerHTML = isValidTriangle(sideLength1, sideLength2, sideLength3);