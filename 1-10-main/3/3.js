"use strict";

let penkctsk = +prompt("Kiek yra monetų po 5 ct?");
let dvidctsk = +prompt("Kiek yra monetų po 20 ct?");
let dueursk = +prompt("Kiek yra monetų po 2 €?");
let penkct = penkctsk * 0.05;
let dvidct = dvidctsk * 0.2;
let dueur = dueursk * 2;
let visipinigai = dueur + dvidct + penkct;

console.log("Tauplykėje yra " + visipinigai + " €");
