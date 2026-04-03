"use strict";

const month = +prompt("Input Month Number")

const daysInMonthByNumber = (month) => {
    let result;
    if (month=1) {
        result = 31;
    } else if (month=2){
        result = 28;
    } else if (month=3){
        result = 31;
    } else if (month=4){
        result = 30;
    } else if (month=5){
        result = 31;
    } else if (month=6){
        result = 30;
    } else if (month=7){
        result = 31;
    } else if (month=8){
        result = 31;
    } else if (month=9){
        result = 30;
    } else if (month=10){
        result = 31;
    } else if (month=11){
        result = 30;
    } else if (month=12){
        result = 31;
    }
    return result;
}

document.getElementById("month-days").innerHTML = daysInMonthByNumber(month);