var array = [10, 20, 4, 45, 99];
var  i=0;
while(i<array.length) {
    var j =0;
    while(j<array.length) {
        if(array[i]<array[j]) {
            c = array[i]
            array[j]=array[i]
            array[j]=c
        }
        j++
    }
    i++
}
console.log(c)