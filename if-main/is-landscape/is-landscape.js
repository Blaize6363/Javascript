"use strict";

let imgWidth = prompt("What's it's width?");
let imgHeight = prompt("What's it's height");

function isLandscape(
  imgWidth,
  imgHeight
) {
  let result;
  if (imgWidth > imgHeight) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

let img = isLandscape(imgWidth, imgHeight);

document.getElementById("is-landscape").innerHTML = img;