"use strict";

let n = +prompt("Kiek saldainių gauna Marius?");
let a = +prompt("Po kiek saldainių suvalgo?");
let IkiKaled = +prompt("Kelios dienos liko iki Kalėdų?");
let sald = (n - a) * IkiKaled;
let d = Math.trunc(sald / a);
let s = sald % a;

console.log("Marius dovanas paruoš " + d + " draugų.");
console.log("Supakavus dovanas liks " + s + " saldainių");
