"use strict";

const bill = +prompt("Enter your bill ammount");
const service = prompt("How was the service?");

const tipAmount = (bill, service) => {
    let result;
    if (service.toLowerCase()==="good".toLowerCase()) {
        result = (bill*25)/100;
    } else if (service.toLowerCase()==="fair".toLowerCase()) {
        result = (bill*15)/100;
    } else if (service.toLowerCase()==="poor".toLowerCase()) {
        result = (bill*10)/100;
    } else {
        result = "You think you're really smart don't you?"
    }
    return result;
}

document.getElementById("tip-ammount").innerHTML = tipAmount(bill, service);