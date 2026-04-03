"use strict";

let temperature = prompt("What's the current temperature?(Celcius)");
let HotOrCool =
  temperature < 30
    ? (document.getElementById("cool").innerHTML = "Cool")
    : (document.getElementById("hot").innerHTML = "Hot");
