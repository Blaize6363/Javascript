"use strict";

let username = prompt("Enter Username");

function getValidUsrnm(username) {
  let result = username.length > 4 ? "Valid" : "Too short";
  return result;
}

let ValidUsrnm = getValidUsrnm(username);
document.getElementById("username").innerHTML = ValidUsrnm;
