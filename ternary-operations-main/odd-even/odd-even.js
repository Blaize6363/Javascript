"use strict";

let number = prompt("Enter Number");
let evenOrOdd =
  number % 2 == 0
    ? (document.getElementById("even_nr").innerHTML = "Even Number: " + number)
    : (document.getElementById("odd_nr").innerHTML = "Odd Number: " + number);

// let number
// number=prompt("Enter Number");
// if(number%2==0){
//     document.getElementById("even_nr").innerHTML = "Even Number: " + number;
// } else {
//     document.getElementById("odd_nr").innerHTML = "Odd Number: " + number;
// }
