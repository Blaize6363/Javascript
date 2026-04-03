"use strict";

let score = prompt("Enter Your Score");

function getScorResult(score) {
  let ScorResult = score >= 50 ? "Pass" : "Fail";
  return ScorResult;
}

let result = getScorResult(score);
document.getElementById("pass-or-fail").innerHTML = result;
