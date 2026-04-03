"use strict";

const protectEmail = (email) => {
    const split = email.split("@");
    const length = split[0].length;
    return email.replace(split[0], "*".repeat(length));
}

console.log(protectEmail("blaize63@gmail.com"));