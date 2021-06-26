var array = ["a","b","a","c","b"];
var i = 0;
var n = []
var c = 0;
while(i<array.length) {
    if(!(n.includes(array[i]))) {
        c = c + 1
    n.push(array[i])
    n.push(c)


    }
    i++
}
console.log(n)