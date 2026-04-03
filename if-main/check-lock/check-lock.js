"use strict";

const checkLock = (a, b, c, d) => {
    const isfirstNumberValid = a === 3 || a === 5 || a === 7;
    const isseccondNumberValid = b === 2;
    const isthirdNumberValid = c >= 5 && c <= 100;
    const isfourthNumberValid = d < 9 || d > 20;

    if (isfirstNumberValid && isseccondNumberValid && isthirdNumberValid && isfourthNumberValid)
        return "correct";

    if (!isfirstNumberValid) return "incorrect because the first number isnt a 3, 5, or 7";
    if (!isseccondNumberValid) return "incorrect because the seccond number isnt a 2";
    if (!isthirdNumberValid) return "incorrect because the first number isnt between 5 or 100 or equal to them";
    if (!isfourthNumberValid) return "incorrect because the fourth number is between 9 and 20";
};

const num1 = +prompt("Enter 1st number");
const num2 = +prompt("Enter 2nd number");
const num3 = +prompt("Enter 3rd number");
const num4 = +prompt("Enter 4th number");

document.getElementById("check-lock").innerHTML = checkLock(num1, num2, num3, num4);