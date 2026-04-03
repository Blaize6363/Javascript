"use strict";

const fav = 42;
const guess = +prompt("Enter your guess number")

function favoriteNumber(fav, guess) {
    let result;
    if (fav == guess) {
        result = "You got it!!!";
    } else if (guess > fav) {
        result = "Too high";
    } else {
        result = "Too low";
    }
    return result;
}

document.getElementById("favorite-number").innerHTML = favoriteNumber(fav, guess);