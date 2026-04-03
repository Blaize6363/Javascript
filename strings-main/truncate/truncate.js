"use strict";

const truncate = (str, indx) => {
    return str.slice(0, indx) + "..."
}

console.log(truncate("If not friend, why friend shaped?", 30))