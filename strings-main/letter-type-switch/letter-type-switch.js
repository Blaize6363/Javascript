"use strict";

const letterTypeSwitch = (string) => {
  let switchedLetterTypes = "";
  for (let i = 0; i < string.length; i++) {
    switchedLetterTypes +=
      string[i] === string[i].toUpperCase()
        ? string[i].toLowerCase()
        : string[i].toUpperCase();
  }
  return switchedLetterTypes;
};


console.log(letterTypeSwitch("eeeEEEeeeEEe"));
