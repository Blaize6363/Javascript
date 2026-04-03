"use strict";

function getRandomIntgFrom0to1() {
    let result = Math.random();
    return result;
}

function getRandomIntgFrom0to100(max) {
    let result = Math.floor(Math.random() * 100);
    return result;
}

function getRandomIntgFrom5to20() {
    let result = Math.floor(Math.random() * (20 - 5) + 5);
    return result;
}

document.getElementById("random-integer").innerHTML = getRandomIntgFrom0to1() + "<br>" + getRandomIntgFrom0to100(100) + "<br>" + getRandomIntgFrom5to20(20);