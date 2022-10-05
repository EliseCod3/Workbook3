"use strict";

let birthday = new Date("03-26-2004");
console.log(birthday.toLocaleDateString());

let momsBirthday = new Date("SEPT-09-12-1971");
console.log(momsBirthday.toDateString());

let dadsBirthday = new Date("1971, 2, 10");
console.log(dadsBirthday.toLocaleDateString());
