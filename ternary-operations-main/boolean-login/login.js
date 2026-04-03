"use strict";

let isLoggedIn;
isLoggedIn = prompt("Enter Password");
if ((isLoggedIn = "Password123")) {
  document.getElementById("wb").innerHTML = "Welcome back!";
} else {
  document.getElementById("plslogn").innerHTML = "Please log in";
}
