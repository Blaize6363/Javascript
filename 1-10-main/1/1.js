"use strict";
let pamlaik = 45;
let pirmdpamsk = +prompt("Kiek pamokų yra pirmadienį?");
let antrdpamsk = +prompt("Kiek pamokų yra atradienį?");
let trecdpamsk = +prompt("Kiek pamokų yra trečiadienį?");
let ketvrdpamsk = +prompt("Kiek pamokų yra ketvirtadienį?");
let penktdpamsk = +prompt("Kiek pamokų yra penktadienį?");
let visupamsk =
  pirmdpamsk + antrdpamsk + trecdpamsk + ketvrdpamsk + penktdpamsk;
let vispamlaik =
  (pirmdpamsk + antrdpamsk + trecdpamsk + ketvrdpamsk + penktdpamsk) * pamlaik;

console.log("Pamokų Skaičius: " + visupamsk);
console.log("Tai sudaro minučių: " + vispamlaik);
