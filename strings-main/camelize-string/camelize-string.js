"use strict";

const capitalizeEvery = (string) => {
    const splitString = string.split(' ');
    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);;
    }
    return splitString.join(' ').replaceAll(' ', '');
}

console.log(capitalizeEvery("Sigma sigma on the wall"));