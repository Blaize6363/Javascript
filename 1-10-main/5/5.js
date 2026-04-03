"use strict";

let plytu_a = 20;
let plytu_h = 10;
let sienos_a = +prompt("Koks Sienos Ilgis?") * 100;
let sienos_h = +prompt("Koks Sienos Plotis?") * 100;
let plytoskain = +prompt("Kiek kainuoja plyta?");
let plytplotas = plytu_a * plytu_h;
let sienplotas = sienos_a * sienos_h;
let plytkiek = sienplotas / plytplotas;
let plytukain = plytkiek * plytoskain;

console.log("Plytų Kiekis: " + plytkiek);
console.log("Plytų Kaina: " + plytukain.toFixed(2) + " €");
