import addnumber from "./index.js";
console.log(addnumber(20, 20));

let minute = '4';
let hour = '8';
console.log(minute.padStart(4, '0'));
console.log(hour.padEnd(3, '0'));

let trimname = '  sout ruoshim  ';
console.log(trimname);
trimname= trimname.trimStart();
console.log(trimname);
trimname = trimname.trimEnd();
console.log(trimname);