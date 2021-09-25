var array = [9,9,4,5,7,7,8,3,3,2,1];
var i = 0 ;
var n = []
while(i<array.length) {
    if(!(n.includes(array[i]))) {
        n.push(array[i])
    
    }
    i++
}
console.log(n)
