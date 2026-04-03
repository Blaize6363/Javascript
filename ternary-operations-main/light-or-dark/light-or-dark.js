"use strict";

let theme = prompt("Are you using Dark Mode?: True or False");
function getDarkMode(theme) {
  let result;
  if (theme == "true") {
    result = "dark";
  } else {
    result = "light";
  }
  return result;
}

let WorstNovemberEver = getDarkMode(theme);
document.getElementById("light-or-dark").innerHTML = WorstNovemberEver;
