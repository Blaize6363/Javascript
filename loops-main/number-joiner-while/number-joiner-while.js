"use strict";

const num1 = +prompt("Input begining");
const num2 = +prompt("Input end");

const numberJoinerWhile = (num1, num2) => {
  let text = "";
  while (num1 <= num2) {
    text += `${num1}_`;
    num1++;
  }
  return text.slice(0, -1);
};

console.log(numberJoinerWhile(num1, num2));
