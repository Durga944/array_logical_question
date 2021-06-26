var array = [1,2,45,65,76,8,3,]
var i = 0;
var max = 0;
while(i<array.length) {
    if(array[i]>max) {
        max = array[i]
    }
    i++
    
}
console.log(max);