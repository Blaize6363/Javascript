"use strict";

const uncamelize = (str, oper) => {
  let result;
  let strSplit = str.split(/(?=[A-Z])/);
  result = strSplit.join(oper);
  return result;
}

console.log(uncamelize("WaterFireAirEarth", "-"));