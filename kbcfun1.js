var que_list=["", "1.Which one is the first search Engine in Internent?","2.Which one is the first web Browser Invented in 1990?","3.Firewall in computer is used for?","4. Which of following is not an operating system?","5.Which of the following is not a database management software?"];
var opt_list=[["","",""],["1.Google","2.Archie","3.Altavisata"],["1.Internet Explorer","2.Nexus","3.Mozilla"],["1.Security","2.Monitoring","3.Authentication"],["1.Dos","2.C","3.Linux"],["1.COBOL","2.MySQl","3.Racle"]];
var ans_list=[0,2,2,1,2,1];
var fifty_list=[["",""],["1.Archie","2.Google"],["1.Internet Explorer","2.Nexus"],["1.Security","2.Monitoring"],["1.C","2.Linux"],["1.MySql","2.COBOL"]];
var sol_list=[0,1,2,1,1,2];
var count = 1;
var readlineSync = require("readline-sync")
var player = readlineSync.question("Enter Player Name--")
console.log("Welcome!",player, "In KBC Game","\uD83D\uDE00");
console.log("Best Of Luck!",player,"For Playing KBC Game", "\n");

index = 0;

function que() {
    index++

    while(index<que_list.length) {
        console.log(que_list[index])
        for(var i=0; i<opt_list[index].length; i++){
            console.log(opt_list[index][i]);
        }
        console.log(" ");
        result = opt(index)
        if(result==true) {
            console.log("Congractualtion",player,"\uD83D\uDE00")
        }
        else{
            console.log("you Losse",player)
            break;
        }
        index++
    }
}

function opt(index) {
    j = 0;
    while(j<opt_list.length[index]) {
        console.log(opt[index][j])
        j++
    }
    var readlineSync = require("readline-sync")
    var user = readlineSync.questionInt("Enter Your Ans--")
    if(user==ans_list[index]) {
        return true
    }
    if(count==1){
        if(user==5050) {
            for(var d=0; d<fifty_list[index].length; d++){
                console.log(fifty_list[index][d]);
            }
            count++;
            
            return(lifeline(index))
        }
        else {
            return false
        }
    }else{
        console.log("you have used your lifeline help");
        var user = readlineSync.questionInt("Enter Your Ans--");
        if(user ==ans_list[index]){
            console.log("correct wooooow...");
            que();
        }else{
            return false;
        }
    }
   
}
var lifelinecount = 0;
function lifeline(index) {
    j = 0;
    if(lifelinecount==0){
        while(j<fifty_list[index]) {
            console.log(fifty_list[index][j])
            j++
        }
        lifelinecount++;
        var readlineSync = require("readline-sync")
        var user_ans = readlineSync.questionInt("Enter Your Ans For 5050--")
        if(user_ans==sol_list[index]) {
            return true
        }
        else {
            return false
        }
    }
    else {
        console.log("You Already Use 5050",player)
        return "no"
    }
}
function main() {
    
    que();
}
main();
     

