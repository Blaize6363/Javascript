"use strict";

const num1 = +prompt("Input begining");
const num2 = +prompt("Input end");
const separator = prompt("Input separator");

const numberJoinerWhile = (num1, num2, separator) => {
  let text = "";
  while (num1 <= num2) {
    text += num1.toString() + separator;
    num1++;
  }
  return text.slice(0, -1);
};

console.log(numberJoinerWhile(num1, num2, separator));