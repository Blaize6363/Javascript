"use strict";

const removeShorterStrings = (strings, num) => {
    return strings.filter((strings) => strings.length >= num)
}

console.log(removeShorterStrings(["Water", "Fire", "Earth", "Air"], 5))