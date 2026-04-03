"use strict";

let trapilg_a = +prompt("Koks trapecijos ilgesniojo pagrindo ilgis?");
let traptrump_a = +prompt("Koks trapecijos trumpesniojo pagrindo ilgis?");
let trapaukst_a = +prompt("Koks trapecijos aukštinės ilgis?");
let traplot = ((trapilg_a + traptrump_a) / 2) * trapaukst_a;
console.log("Trapecijos plotas: " + traplot);
