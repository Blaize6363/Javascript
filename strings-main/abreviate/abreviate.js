"use strict";

const abreviate = (str) => {
    const lasti = str.lastIndexOf(" ") + 2;
    return str.slice(0, lasti) + ".";
}

console.log(abreviate("Juliana Florez"));