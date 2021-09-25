// var places=["delhi", "gujrat", "rajasthan", "punjab", "kerala"];
// var a=places.length-1
// while(a>=0){
//     console.log(places[a])
//     a-=1
// }
    
var str = "1234abcd";
var i = str.length-1;
var y = [];
while(i>=0) {
    var x = str[i];
    y.push(x)
    i-=1
}
console.log(y);