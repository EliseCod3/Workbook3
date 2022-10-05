"use strict";

let startDate = new Date("July 11, 2022");
let endDate = new Date("November 11, 2022");

let msecPerDay = 1000 * 60 * 60 * 24;

let msecElapsed = endDate.getTime() - startDate.getTime();

let dayDiff = msecElapsed / msecPerDay;
let numDays = Math.abs(Math.round(dayDiff)) ;

console.log(`The number of days between dates is ${numDays}`);