var readlineSync = require("readline-sync");
var user = readlineSync.questionInt("Enter any num==");
var watch = 360;
var d = (watch/60*user);
console.log(d);
