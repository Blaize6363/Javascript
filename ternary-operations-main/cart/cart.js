"use strict";

let cart;
cart = prompt("How much are you buying?");
if (cart >= 100) {
  document.getElementById("discount").innerHTML = "Discount applied";
} else {
  document.getElementById("nodiscount").innerHTML = "No discount";
}
