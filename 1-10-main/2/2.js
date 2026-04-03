"use strict";

let akvzuvsk = +prompt("Kiek žuvų gyvena akvariume?");
let akvzuvide = +prompt("Kiek žuvų į akvariumą įdedama kiekvieną dieną?");
let diensk = +prompt("Kiek dienų praėjo?");
let rezult = akvzuvide * diensk + akvzuvsk;

console.log("Po " + diensk + " dienų akvariume gyvens " + rezult + " žuvų");
