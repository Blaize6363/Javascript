"use strict";

let kmhgreitis = +prompt("Koks automobilio greitis");
let msgreitis = kmhgreitis / 3.6;
let kelias = 264;
let laikas = kelias / msgreitis;

console.log("Automobilis pravažiuos tunelį per " + laikas.toFixed(2) + " s");
