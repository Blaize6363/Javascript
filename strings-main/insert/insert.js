"use strict";

const Insert = (str, istr, indx = 1) => {
    return str.slice(0, indx) + istr + str.slice(indx);
}

console.log(Insert("Let us erase  What?", "Why would Chara make Shayy do that?"))