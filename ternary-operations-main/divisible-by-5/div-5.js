"use strict";

let number = prompt("Enter Number");

function getDiv5(number) {
  let result = number % 5 ? "Not divisible" : "Divisible";
  return result;
}

let div5 = getDiv5(number);
document.getElementById("div-5").innerHTML = div5;
