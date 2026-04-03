"use strict";

const money = +prompt("Input Money Ammount");
const item = prompt("Input Item you want to buy");
const macBookAir = 999;
const macBookAirPro = 1299;
const macPro = 2499;
const appleSticker = 1;

const canIGet = (money, item, macBookAir, macBookAirPro, macPro,appleSticker) => {
    let result;
    if (item.toLowerCase()==="Mac Book Air".toLowerCase() && money >= macBookAir) {
        result = "true";
    } else if (item.toLowerCase()==="Mac Book Air Pro".toLowerCase() && money >= macBookAirPro) {
        result = "true";
    } else if (item.toLowerCase()==="Mac Pro".toLowerCase() && money >= macPro) {
        result = "true";
    } else if (item.toLowerCase()==="Apple Sticker".toLowerCase() && money >= appleSticker) {
        result = "true";
    } else {
        result = "false";
    }

    return result;
}

document.getElementById("can-i-get").innerHTML = canIGet(money, item, macBookAir, macBookAirPro, macPro,appleSticker);