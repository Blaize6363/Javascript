"use strict";

const throw1 = prompt("Rock, Paper or Scissors?");
const throw2 = prompt("Rock, Paper or Scissors?");

const rockPaperScissors = (throw1, throw2) => {
    let result;
    if (throw1.toLowerCase() === "Rock".toLowerCase() && throw2.toLowerCase() === "Paper".toLowerCase()) {
        result = "player 2";
    } else if (throw1.toLowerCase() === "Paper".toLowerCase() && throw2.toLowerCase() === "Scissors".toLowerCase()){
        result = "player 2";
    } else if (throw1.toLowerCase() === "Scissors".toLowerCase() && throw2.toLowerCase() === "Rock".toLowerCase()) {
        result = "player 2";
    } else if (throw1.toLowerCase() === "Paper".toLowerCase() && throw2.toLowerCase() === "Rock".toLowerCase()) {
        result = "player 1";
    } else if (throw1.toLowerCase() === "Scissors".toLowerCase() && throw2.toLowerCase() === "Paper".toLowerCase()) {
        result = "player 1";
    } else if (throw1.toLowerCase() === "Rock".toLowerCase() && throw2.toLowerCase() === "Scissors".toLowerCase()) {
        result = "player 1";
    } else if (throw1.toLowerCase() === "Rock".toLowerCase() && throw2.toLowerCase() === "Rock".toLowerCase()) {
        result = "draw";
    } else if (throw1.toLowerCase() === "Paper".toLowerCase() && throw2.toLowerCase() === "Paper".toLowerCase()) {
        result = "draw";
    } else if (throw1.toLowerCase() === "Scissors".toLowerCase() && throw2.toLowerCase() === "Scissors".toLowerCase()) {
        result = "draw";
    } else {
        result = "CHEATER";
    }
    return result;
}

document.getElementById("rock-paper-scissors").innerHTML = rockPaperScissors(throw1, throw2);