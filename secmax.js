var number = [50, 40, 23, 70, 56, 12, 5, 10, 7];
var i = 0;
var max1 = 0;
var max2 = 0;
while(i < number.length) {
    if(number[i] > max1) {
        max1 = number[i]
    }
    i++
    var j = 0;
    while(j<number.length) {
        if(max1 > number[j] && max2 < number[j]) {
            max2 = number[j]
        }
        j++
    }

}
console.log(max1)
console.log(max2)