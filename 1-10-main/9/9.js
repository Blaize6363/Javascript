"use strict";

let TautSaus = +prompt("Kiek sausainių iškepė tautvydas?");
let DraugAt =
  +prompt("Keli draugai atsinešė po tiek pat sausainių?") * TautSaus;
let ZmonSkaic = +prompt("Kiek žmonių iš viso dalyvavo šventėje?");
let SausPad = Math.trunc((TautSaus + DraugAt) / ZmonSkaic);
let LikSaus = (TautSaus + DraugAt) % ZmonSkaic;

console.log("Kievienas šventės dalyvis gavo po " + SausPad + " sausainius");
console.log("Tautvydui liko " + LikSaus);
