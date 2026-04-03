"use strict";

const is_Blank = (string) => {
    let result;
    if (string == null || string == "" || string == '') {
        result = "true";
    } else {
        result = "false";
    }
    return result;
}

console.log(is_Blank("It works"));