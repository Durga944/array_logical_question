var array = [[12,34,56],[67,89,95],[90,89,78]];
var i = 0;
while(i<array.length) {
    var j = 0;
    var max = 0;
    while(j<array[i].length) {
        if(array[i][j]>max) {
            max = array[i][j];
        }
        j++
    }
    i++
    console.log(max);
}