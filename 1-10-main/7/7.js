"use strict";

let PuodlSkaic =
  +prompt("Kiek yra puodelių, kuriuos reikia supakuoti, skaičius") / 3;
let PuodlDez = Math.trunc(PuodlSkaic);
let LikPuodl = (PuodlSkaic * 3) % 3;

console.log("Pilnų dėžių skaičius: " + PuodlDez);
console.log("Nepakuotų Puodelių skaičius: " + LikPuodl);
