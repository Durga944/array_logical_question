var arr = ["a","c","d","e","h","b"];
var i = 0;
while(i<arr.length) {
    var j = i + 1;
    while(j<arr.length) {
        if(arr[i]<arr[j]) {
            var x = arr[i];
            arr[i] = arr[j];
            arr[j] = x ;
        }
        j++
    }
    i++
}
console.log(arr);