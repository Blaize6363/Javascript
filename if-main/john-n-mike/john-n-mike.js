"use strict";

const johnTeam1 = 89;
const johnTeam2 = 120;
const johnTeam3 = 103;
const mikeTeam1 = 116;
const mikeTeam2 = 94;
const mikeTeam3 = 123;
const maryTeam1 = 97;
const maryTeam2 = 134;
const maryTeam3 = 105;

function getJonTemAvrgScor(johnTeam1, johnTeam2, johnTeam3) {
  return (johnTeam1 + johnTeam2 + johnTeam3) / 3;
}

const johnTeamAvgScor = getJonTemAvrgScor(johnTeam1, johnTeam2, johnTeam3);

function getMikeTemAvrgScor(mikeTeam1, mikeTeam2, mikeTeam3) {
  return (mikeTeam1 + mikeTeam2 + mikeTeam3) / 3;
}

const mikeTeamAvgScor = getMikeTemAvrgScor(mikeTeam1, mikeTeam2, mikeTeam3);

function getMaryTemAvg(maryTeam1, maryTeam2, maryTeam3) {
    return (maryTeam1 + maryTeam2 + maryTeam3) / 3;
}

const maryTemAvgScor = getMaryTemAvg(maryTeam1, maryTeam2, maryTeam3);

function calcAvgWiner(johnTeamAvgScor, mikeTeamAvgScor, maryTemAvgScor) {
  let result;
  if (johnTeamAvgScor == mikeTeamAvgScor && johnTeamAvgScor == maryTemAvgScor && maryTemAvgScor == mikeTeamAvgScor) {
    result = "Tie";
  } else if (johnTeamAvgScor > mikeTeamAvgScor && johnTeamAvgScor > maryTemAvgScor) {
    result = "John's Team Wins: " + johnTeamAvgScor;
  } else if (mikeTeamAvgScor > johnTeamAvgScor && mikeTeamAvgScor > maryTemAvgScor) {
    result = "Mike's Team Wins: " + mikeTeamAvgScor;
  } else {
    result = "Mary's Team Wins: " + maryTemAvgScor;
  }
  return result;
}
console.log(calcAvgWiner(johnTeamAvgScor, mikeTeamAvgScor, maryTemAvgScor));

document.getElementById("john-n-mike").innerHTML = calcAvgWiner(johnTeamAvgScor, mikeTeamAvgScor, maryTemAvgScor);
