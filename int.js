var arr = [3,9,-6,7,5,2,1];
var i = 0;
var sum = 0;
var b = [];
while(i<arr.length) {
    var j = 0;
    while(j<arr.length) {
        if(arr[i]+arr[j]==3) {
           b.push(arr[i],arr[j])
           console.log(b);
           break
        
        }j++
    }   
    i++
    
}
// console.log(b);


