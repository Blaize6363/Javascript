"use strict";

const points = +prompt("Input your gained points on the test");

const letterGrade = (points) => {
    let result;
    if (points < 60) {
        result = "F"
    } else if (points >= 60 && points <= 62) {
        result = "D-";
    } else if (points > 62 && points <= 66) {
        result = "D";
    } else if (points > 66 && points <= 69) {
        result = "D+";
    } else if (points > 69 && points <= 72) {
        result = "C-";
    } else if (points > 72 && points <= 76) {
        result = "C";
    } else if (points > 76 && points <= 79) {
        result = "C+"
    } else if (points > 79 && points <= 82) {
        result = "B-"
    } else if (points > 82 && points <= 86) {
        result = "B";
    } else if (points > 86 && points <= 89) {
        result = "B+"
    } else if (points > 89 && points <= 92) {
        result = "A-"
    } else if (points > 92 && points <= 96) {
        result = "A"
    } else if (points > 96) {
        result = "A+"
    }
    return result;
}

document.getElementById("letter-grade").innerHTML = letterGrade(points);