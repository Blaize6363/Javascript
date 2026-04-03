"use strict";

const bill = +prompt("Enter your bill ammount");
const service = prompt("How was the service?");
const customers = +prompt("How many people split the bill?")

const tipAmount = (bill, service, customers) => {
    let result;
    if (service.toLowerCase()==="good".toLowerCase()) {
        result = (bill+((bill*25)/100))/customers;
    } else if (service.toLowerCase()==="fair".toLowerCase()) {
        result = (bill+((bill*15)/100))/customers;
    } else if (service.toLowerCase()==="poor".toLowerCase()) {
        result = (bill+((bill*10)/100))/customers;
    } else {
        result = "You think you're really smart don't you?"
    }
    return result;
}

document.getElementById("split-amount").innerHTML = tipAmount(bill, service, customers);