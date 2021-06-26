var arr = [23,-45,34,-67,-56,11];
var i = 0;
while(i<arr.length) {
    if(arr[i]>0) {
        arr[i] = 1;
    }else if(arr[i]<0) {
        arr[i] = 0;
    }
    i++
}
console.log(arr);