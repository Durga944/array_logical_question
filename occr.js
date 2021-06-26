var array  = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"];
var i = 0;
var b = []
while(i<array.length) {
    var j = 0;
    var a = []
    var c = 0;
    while(j<array.length) {
        if(array[i] == array[j]) {
            c = c + 1
        }
        j++
    }
    a.push(array[i])
    a.push(c)
    // console.log(a)
    // var emp = []
    // for (x in a){
    //     if(!emp.includes(a[x])) {
    //         emp.push(a[x])

    //     }
    //     console.log(emp)
    // }

    if(!(b.includes(a))) {
        b.push(a)
    }
    i++;

}
console.log(a)