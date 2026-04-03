"use strict";

const capitalize = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalize("sssss sss s"));