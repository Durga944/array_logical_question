// var arr = [23,45,67,98,12,21];
// var i = 0;
// while(i<arr.length) {
//     var r = arr[i];
//     var s = i
//     while(s>0 && arr[s-1]>r) {
//         arr[s] = arr[s-1]
//         s = s-1
//         arr[s] = r
//     i++
//     }
// }
// console.log(arr);

// var arr = [23, 1, 10, 5, 2]
// for(let i = 1; i < arr.length;i++){
//     for(let j = i - 1; j > -1; j--){
//         if(arr[j + 1] < arr[j]){
//             [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];

//         }
//     }
// };
// console.log(arr);

// var arr = [29, 72, 98, 13, 87, 66, 52, 51, 36];
// let min;
// for (let i = 0; i < arr.length; i++) {
//     min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[min]) {
//           min = j;
//         }
//     }
//     if (min !== i) {
//         [arr[i], arr[min]] = [arr[min], arr[i]];
//     }
// }
// console.log(arr);
  
// var arr = [3, 0, 2, 5, -1, 4, 1];
// var increment = arr.length / 2;
// while (increment > 0) {
//     for (i = increment; i < arr.length; i++) {
//         var j = i;
//         var temp = arr[i];
    
//         while (j >= increment && arr[j-increment] > temp) {
//             arr[j] = arr[j-increment];
//             j = j - increment;
//         }
    
//         arr[j] = temp;
//     }
    
//     if (increment == 2) {
//         increment = 1;
//     } else {
//         increment = parseInt(increment*5 / 11);
//     }
// }


// console.log(arr);
