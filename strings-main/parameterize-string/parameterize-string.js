"use strict";

const parameterizeString = (string) => {
    const result = string.toLowerCase();
    return result.replaceAll(' ', '-');
}

console.log(parameterizeString("GOOGLE DOCKY"))