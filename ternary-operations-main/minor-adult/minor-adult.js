"use strict";

let age = prompt("Enter Yyour age");
let AdultOrMinor =
  age >= 18
    ? (document.getElementById("adult").innerHTML = "Adult:")
    : (document.getElementById("minor").innerHTML = "Minor");
