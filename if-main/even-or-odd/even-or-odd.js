"use strict";

const num = +prompt("Input Number");

const EvenOrOdd = (num) => {
    let result;
    if (num % 2 == 0) {
        result = "Even";
    } else if (num % 2 !== 0) {
        result = "Odd";
    }
    return result;
}

document.getElementById("even-or-odd").innerHTML = EvenOrOdd(num);