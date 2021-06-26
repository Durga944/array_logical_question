var readlineSync = require("readline-sync")
var time = readlineSync.questionInt("Enter How Many Question You Want--")
var emp = []
var index = 0;
while(index<time) {
    var question = readlineSync.question("Enter Your Questions--")
    emp.push(question)
    index++
}
console.log(emp)

