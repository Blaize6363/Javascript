"use strict";

let MasSkaic = +prompt("Iveskite Automobilų skaičių");
let KeltTalp = +prompt("Kiek į keltą telpa automobilių?");
let MasTelp = MasSkaic / KeltTalp;
let Kartai = Math.trunc(MasTelp);
let MasLik = MasSkaic % KeltTalp;

console.log("Perkels per kartų: " + Kartai);
console.log("Liks Neperkelta: " + MasLik);
